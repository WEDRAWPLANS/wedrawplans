/** Restore the approved WEDRAWPLANS-owned MP4 at build time. No external video host. */
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const source = path.join(__dirname, "..", "media", "woolwich-video");
const parts = fs.readdirSync(source).filter((name) => /^part-\d{2}\.b64$/.test(name)).sort();
if (parts.length !== 28) throw new Error("Missing Woolwich animation media parts");
const bytes = Buffer.from(parts.map((name) => fs.readFileSync(path.join(source, name), "utf8")).join(""), "base64");
const checksum = crypto.createHash("sha256").update(bytes).digest("hex");
if (bytes.length !== 10697111 || checksum !== "f90551f2dfc7248b1c9b8f4b84966eebe50a8b1976fe9f7be4d6f5276c0b780f") {
  throw new Error("Woolwich animation transfer integrity check failed");
}
const target = path.join(__dirname, "..", "public", "videos", "woolwich-road-architectural-animation.mp4");
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, bytes);
console.log("Restored verified 720p watermarked Woolwich Road animation (" + bytes.length + " bytes)");
