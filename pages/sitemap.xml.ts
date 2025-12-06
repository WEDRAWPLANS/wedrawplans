import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.wedrawplans.co.uk";

  const pages = [
    "",
    "barnet",
    "harrow",
    "croydon",
    "brent",
    "ealing",
    "bexley",
    "bromley",
    "camden",
    "city-of-london",
    "enfield",
    "greenwich",
    "hackney",
    "hammersmith-and-fulham",
    "haringey",
    "havering",
    "hillingdon",
    "hounslow",
    "islington",
    "kensington-and-chelsea",
    "kingston",
    "lambeth",
    "lewisham",
    "merton",
    "newham",
    "redbridge",
    "richmond",
    "southwark",
    "sutton",
    "tower-hamlets",
    "waltham-forest",
    "wandsworth",
  ];

  const urls = pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
