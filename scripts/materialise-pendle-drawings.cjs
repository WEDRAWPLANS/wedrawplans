/**
 * Materialise nine complete, privacy-redacted WEDRAWPLANS A1 drawing sheets.
 * Each rendering retains the original A1 title block, all notes, drawing scales and WEDRAWPLANS branding; only house number 88 and client name were permanently removed.
 */
const fs=require("node:fs"),path=require("node:path");
const inputs=path.join(process.cwd(),"data","approved-case-study-images");
const out=path.join(process.cwd(),"public","images","case-studies","pendle-road-wandsworth-max-space-loft-conversion");
fs.mkdirSync(out,{recursive:true});
for(let i=0;i<=8;i++){
  const n=String(i).padStart(2,"0");
  const content=fs.readFileSync(path.join(inputs,"pendle-drawing-"+n+".b64"),"utf8").trim();
  if(!/^[A-Za-z0-9+/]+={0,2}$/.test(content))throw Error("Invalid asset encoding "+n);
  const data=Buffer.from(content,"base64");
  if(data.length<10000 || data.toString("ascii",0,4)!=="RIFF" || data.toString("ascii",8,12)!=="WEBP")
    throw Error("Invalid WebP media "+n);
  fs.writeFileSync(path.join(out,"drawing-"+n+".webp"),data);
  console.log("Pendle image "+n+" ready ("+data.length+" bytes)");
}
