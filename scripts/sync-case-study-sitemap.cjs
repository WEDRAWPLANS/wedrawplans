"use strict";
// Add newly published case-study routes to the sitemap at each build.
// Only appends missing URLs; preserves all existing sitemap entries and metadata.
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "data", "caseStudies.ts"), "utf8");
const sitemapFile = path.join(root, "public", "sitemap.xml");
const xml = fs.readFileSync(sitemapFile, "utf8");

const slugs = [...new Set(
  [...source.matchAll(/^\s*(?:"slug"|slug)\s*:\s*"([a-z0-9-]+)"/gm)]
    .map((match) => match[1])
)];
if (slugs.length < 1 || !xml.includes("</urlset>")) {
  throw new Error("Invalid case-study source or public sitemap XML");
}

const existing = new Set(
  [...xml.matchAll(/<loc>https:\/\/www\.wedrawplans\.co\.uk\/case-studies\/([^<]+)<\/loc>/g)]
    .map((match) => match[1])
);
const missing = slugs.filter((slug) => !existing.has(slug));
if (missing.length) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const additions = missing.map((slug) => [
    "  <url>",
    "    <loc>https://www.wedrawplans.co.uk/case-studies/" + slug + "</loc>",
    "    <lastmod>" + lastmod + "</lastmod>",
    "    <changefreq>monthly</changefreq>",
    "    <priority>0.8</priority>",
    "  </url>",
  ].join("\n")).join("\n");
  fs.writeFileSync(sitemapFile, xml.replace("</urlset>", additions + "\n</urlset>"), "utf8");
}
console.log("Case-study sitemap checked: " + slugs.length + " pages, " + missing.length + " new URLs added.");
