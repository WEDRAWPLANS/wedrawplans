/**
 * WEDRAWPLANS · Camden approved garage conversion.
 * Produce selected, physically-cropped derivatives of original WEDRAWPLANS
 * artwork. Never expose the complete private source sheet in a deployment.
 * Source sheets from the project archive: PP01, PP02, PP03 and PP05.
 * PP04 is omitted because it is NOT in the council's approved drawing schedule.
 */
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const base = path.join(process.cwd(), "public/images/case-studies/hornby-close-camden-garage-conversion");
const sources = {
  pp01: path.join(base, "drawing-01.webp"),
  pp02: path.join(base, "drawing-02.webp"),
  pp03: path.join(base, "drawing-03.webp"),
  pp05: path.join(base, "drawing-05.webp"),
};
const width = 1440, height = 920;
const bg = "#f6f8f6";
const accent = "#234e52";

function escapeXml(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function svg(content) {
  return Buffer.from('<svg width="' + width + '" height="' + height + '" xmlns="http://www.w3.org/2000/svg">' + content + "</svg>");
}
function header(title, subtitle) {
  return '<text x="52" y="66" font-size="29" font-weight="700" fill="' + accent + '" font-family="Arial,sans-serif">' + escapeXml(title) + "</text>"
    + '<text x="54" y="102" font-size="17" fill="#597175" font-family="Arial,sans-serif">' + escapeXml(subtitle) + "</text>";
}
function panel(x,y,w,h) {
  return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="18" fill="#ffffff" stroke="#dce7e2" stroke-width="2"/>';
}
function faintMark() {
  // One quiet grey diagonal ownership mark per composed drawing image.
  return '<text x="720" y="535" font-size="84" text-anchor="middle" transform="rotate(-23 720 535)" font-family="Arial,sans-serif" font-weight="700" letter-spacing="9" fill="#879899" fill-opacity=".09">WEDRAWPLANS</text>';
}

async function crop(sourceKey, fractions, x, y, w, h) {
  const source = sources[sourceKey];
  if (!fs.existsSync(source)) throw new Error("Missing Camden source: " + source);
  const meta = await sharp(source).metadata();
  if (!meta.width || !meta.height) throw new Error("Invalid image dimensions: " + source);
  const [l,t,r,b] = fractions;
  const left=Math.floor(meta.width*l),top=Math.floor(meta.height*t);
  const right=Math.floor(meta.width*r),bottom=Math.floor(meta.height*b);
  if(right<=left || bottom<=top || right>meta.width || bottom>meta.height) throw new Error("Invalid image crop");
  const input=await sharp(source).extract({left,top,width:right-left,height:bottom-top})
    .resize(w,h,{fit:"contain",background:"#ffffff"})
    .png().toBuffer();
  return {input,left:x,top:y};
}
async function compose(index, title, subtitle, shapes, sections) {
  const layout=svg(header(title,subtitle)+shapes);
  const watermark=svg(faintMark());
  const output=path.join(base,"privacy-drawing-"+String(index).padStart(2,"0")+".webp");
  await sharp({create:{width,height,channels:3,background:bg}})
    .composite([{input:layout,left:0,top:0},...sections,{input:watermark,left:0,top:0}])
    .webp({quality:84,effort:4})
    .toFile(output);
  const check=await sharp(output).metadata();
  if(check.width!==width||check.height!==height||!fs.statSync(output).size)throw new Error("Invalid generated image "+output);
}
(async()=>{
  // PP02: original garage door vs the approved wide glazed frontage.
  await compose(1,
    "GARAGE FRONTAGE | BEFORE & APPROVED PROPOSAL",
    "Camden permission 2026/1634/P · Existing garage door replaced by a glazed window",
    panel(34,143,672,740)+panel(734,143,672,740)
    +'<text x="62" y="177" font-family="Arial" font-size="20" font-weight="700" fill="#1e656b">EXISTING GARAGE FRONT</text>'
    +'<text x="762" y="177" font-family="Arial" font-size="20" font-weight="700" fill="#1e656b">APPROVED GLAZED FRONTAGE</text>',
    [
      await crop("pp02",[.135,.057,.400,.392],65,212,606,635),
      await crop("pp02",[.135,.448,.400,.785],765,212,606,635),
    ]
  );
  // PP05: original architectural glazing design, zoomed to exclude the
  // house-number text embedded in the 3D ground plinth.
  await compose(2,
    "GLAZED GARAGE FRONTAGE | DESIGN CLOSE-UP",
    "Full-width fixed lower glazing and a top-hung fanlight within the existing opening",
    panel(38,137,1364,745),
    [await crop("pp05",[.345,.095,.671,.453],80,166,1282,677)]
  );
  // PP01: original approved floor plans & street-facing elevation.
  await compose(3,
    "EXISTING & PROPOSED FLOOR PLANS | PP01",
    "Garage/storage changed to habitable accommodation · Proposed front elevation",
    panel(38,137,1364,745),
    [await crop("pp01",[.157,.222,.943,.754],73,170,1295,676)]
  );
  // PP03: existing and proposed sections & 3D section. The original source
  // is already anonymised; crop away the full sheet/title-block metadata.
  await compose(4,
    "SECTIONAL DESIGN | PP03",
    "Existing and proposed garage conversion sections with architectural design view",
    panel(38,137,1364,745),
    [await crop("pp03",[.082,.061,.931,.827],73,170,1295,676)]
  );
  // PP05: window frame technical notes + original close-up rendered glazing.
  await compose(5,
    "WINDOW DESIGN & MATERIAL DETAILS | PP05",
    "White uPVC glazing · Top-opening fanlight · Matching brick infill beneath",
    panel(38,137,655,745)+panel(715,137,687,745),
    [
      await crop("pp05",[.043,.056,.337,.820],60,164,610,692),
      await crop("pp05",[.347,.096,.669,.454],741,164,635,692),
    ]
  );
  // No unredacted source drawing is publicly retrievable in the new build.
  // Also delete PP04: the 11 June 2026 decision approves PP01/02/03/05 only.
  for (let n=1;n<=5;n++) {
    const original=path.join(base,"drawing-"+String(n).padStart(2,"0")+".webp");
    if(!fs.existsSync(original))throw new Error("Expected source drawing missing: "+original);
    fs.unlinkSync(original);
  }
  console.log("Hornby: five zoomed, permanently privacy-cropped drawings generated; all original source sheets excluded from deployment. Only PP01/PP02/PP03/PP05 featured.");
})().catch((err)=>{console.error(err);process.exitCode=1;});
