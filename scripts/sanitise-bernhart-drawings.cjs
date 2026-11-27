/**
 * Create privacy-safe Bernhart Close image derivatives during Vercel build.
 * A CSS overlay is not redaction: visitors can request the source image URL.
 * The original files contain private text in the right-hand drawing title blocks.
 * This script rasterises the left-hand drawing region into NEW image files,
 * completely discards source pixels to the right and strips file metadata.
 * Only the safe derivatives are retained in the deployment's public directory.
 */
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");
const directory = path.join(process.cwd(), "public", "images", "case-studies", "bernhart-close-barnet-garage-conversion-rear-extension");

(async () => {
  const generated = [];
  for (let n = 1; n <= 6; n++) {
    const suffix = String(n).padStart(2, "0");
    const rawPath = path.join(directory, `drawing-${suffix}.webp`);
    const safePath = path.join(directory, `privacy-drawing-${suffix}.webp`);
    if (!fs.existsSync(rawPath)) throw new Error(`Required Bernhart source missing: ${rawPath}`);
    const meta = await sharp(rawPath).metadata();
    if (!meta.width || !meta.height || meta.width < 600) throw new Error(`Unexpected source dimensions for ${rawPath}`);
    const keepWidth = Math.floor(meta.width * 0.78);
    const safePixels = await sharp(rawPath)
      .extract({ left: 0, top: 0, width: keepWidth, height: meta.height })
      .flatten({ background: "#fafbf9" })
      .toBuffer();
    await sharp({ create: { width: meta.width, height: meta.height, channels: 3, background: "#fafbf9" } })
      .composite([{ input: safePixels, left: 0, top: 0 }])
      .webp({ quality: 86, effort: 4 })
      .toFile(safePath);
    const safeMeta = await sharp(safePath).metadata();
    if (safeMeta.width !== meta.width || safeMeta.height !== meta.height) throw new Error(`Failed image validation for ${safePath}`);
    generated.push({ rawPath, safePath, suffix });
  }
  // Do not ship publicly requestable originals with the unredacted title blocks.
  for (const { rawPath } of generated) fs.unlinkSync(rawPath);
  console.log(`Privacy-safe Bernhart drawing assets: ${generated.length} generated; unredacted public source files removed from deployment.`);
})().catch((error) => { console.error(error); process.exitCode = 1; });
