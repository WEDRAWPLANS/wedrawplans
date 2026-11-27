/**
 * WEDRAWPLANS Bernhart Close — privacy-safe close-up drawing derivatives.
 *
 * Crop only the architectural drawing content, not the surrounding sheet.
 * This physically discards original title blocks, personal identifiers,
 * notes and source metadata. CSS masking is not sufficient protection.
 *
 * Original six source drawings are deleted from the build's public directory
 * after generating the cropped derivatives, so the served site contains only
 * the selected privacy-safe images.
 */
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");
const directory = path.join(process.cwd(), "public", "images", "case-studies", "bernhart-close-barnet-garage-conversion-rear-extension");

// Fractions of source-sheet width/height. Checked against the original artwork.
// The identifying sheet title block begins near 88% of page width, and the
// separate PROJECT/house-number caption begins near 80% at the lower right.
// Every crop stays left of that zone, with wide safety margins.
const regions = {
  "01": { left: .145, top: .325, right: .805, bottom: .755 }, // proposed garage plan + front elevation
  "02": { left: .125, top: .115, right: .780, bottom: .865 }, // existing plan + two elevations
  "03": { left: .145, top: .325, right: .805, bottom: .755 }, // alternate garage proposal
  "04": { left: .100, top: .365, right: .805, bottom: .780 }, // proposed extension plan + rear elevation
  "05": { left: .125, top: .115, right: .780, bottom: .865 }, // existing extension plan + two elevations
  "06": { left: .250, top: .100, right: .720, bottom: .840 }, // two side elevations, close-up
};
(async () => {
  const generated = [];
  for (let n = 1; n <= 6; n++) {
    const suffix = String(n).padStart(2, "0");
    const rawPath = path.join(directory, `drawing-${suffix}.webp`);
    const safePath = path.join(directory, `privacy-drawing-${suffix}.webp`);
    if (!fs.existsSync(rawPath)) throw new Error(`Bernhart source missing: ${rawPath}`);
    const meta = await sharp(rawPath).metadata();
    if (!meta.width || !meta.height || meta.width < 700 || meta.height < 700)
      throw new Error(`Unexpected dimensions: ${rawPath}`);
    const area = regions[suffix];
    const left = Math.floor(meta.width * area.left);
    const top = Math.floor(meta.height * area.top);
    const width = Math.floor(meta.width * area.right) - left;
    const height = Math.floor(meta.height * area.bottom) - top;
    if (left + width > Math.floor(meta.width * .82) || width < 350 || height < 300)
      throw new Error(`Unsafe or invalid crop dimensions: ${rawPath}`);

    // A new encoded image, not a mask over the original image. No EXIF retained.
    await sharp(rawPath)
      .extract({ left, top, width, height })
      .flatten({ background: "#ffffff" })
      .webp({ quality: 89, effort: 4 })
      .toFile(safePath);
    const check = await sharp(safePath).metadata();
    if (check.width !== width || check.height !== height || !fs.statSync(safePath).size)
      throw new Error(`Failed output verification: ${safePath}`);
    generated.push({ rawPath, safePath, width, height });
  }
  // Prevent publicly requesting any original unredacted source sheet.
  for (const { rawPath } of generated) fs.unlinkSync(rawPath);
  console.log(`Bernhart: ${generated.length} zoomed, permanently privacy-cropped assets created; source sheets removed from deployment.`);
})().catch((error) => { console.error(error); process.exitCode = 1; });
