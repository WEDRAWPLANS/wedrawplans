// Build-time assembly of the optimized WEDRAWPLANS Allum Lane architectural animation.
// Source was an 80-second, 149 MB MP4. The web copy is ~14 MB.
// Kept as small Git blobs to avoid individual API upload limits. Not visible in public/.
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const root = path.resolve(__dirname, "..");
const partsDir = path.join(root, "media", "allum-lane", "video-parts");
const outDir = path.join(root, "public", "videos");
const target = path.join(outDir, "allum-lane-architectural-animation.mp4");
const expectedSize = 14613767;
const expectedSha256 = "54134ab1f724147e8532a5498027adf44258630656241397c44762381f51353e";
const partCount = 19;
fs.mkdirSync(outDir, { recursive: true });
const pieces = Array.from({ length: partCount }, (_, i) => fs.readFileSync(path.join(partsDir, "part-" + String(i).padStart(2, "0") + ".bin")));
const bytes = Buffer.concat(pieces);
if (bytes.length !== expectedSize || crypto.createHash("sha256").update(bytes).digest("hex") !== expectedSha256) {
  throw new Error("Allum Lane animation integrity validation failed");
}
fs.writeFileSync(target, bytes);
console.log("Prepared Allum Lane web animation (" + Math.round(bytes.length / 1024 / 1024) + " MiB)");
