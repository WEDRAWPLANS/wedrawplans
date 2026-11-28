"use strict";
// Keep the public sitemap in sync with live, indexable case-study routes.
// Safe and idempotent: add newly published slugs without rewriting existing URL metadata.
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const caseStudySource = fs.readFileSync(path.join(root, "data", "caseStudies.ts"), "utf8");
const sitemapPath = path.join(root, "public", "sitemap.xml");
const xml = fs.readFileSync(sitemapPath, "utf8");

const slugs = [...new Set(
  [...caseStudySource.matchAll(/^\\s*(?:"slug"|slug)\\s*:\\s*"([a-z0-9-]+)"/gm)]
    .map((match) => match[1])
)];
if (slugs.length === 0 || !xml.includes("</urlset>")) {
  throw new Error("Cannot synchronise case-study sitemap: missing slugs or valid sitemap XML");
}

const existing = new Set(
  [...xml.matchAll(/<loc>https:\\/\\/www\\.wedrawplans\\.co\\.uk\\/case-studies\\/([^<]+)<\\/loc>/g)]
    .map((match) => match[1])
);
const missing = slugs.filter((slug) => !existing.has(slug));
if (missing.length > 0) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const additions = missing.map((slug) => [
    "  <url>",
    `    <loc>https://www.wedrawplans.co.uk/case-studies/${slug}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    "    <changefreq>monthly</changefreq>",
    "    <priority>0.8</priority>",
    "  </url>",
  ].join("\\n")).join("\\n");
  fs.writeFileSync(sitemapPath, xml.replace("</urlset>", additions + "\\n</urlset>"), "utf8");
}
console.log(`Case-study sitemap checked: ${slugs.length} pages; ${missing.length} new URLs added.`);
