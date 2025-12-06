export async function getServerSideProps({ res }) {
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

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    return `
<url>
  <loc>${baseUrl}/${page}</loc>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>`;
  })
  .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
