/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // Redirect any borough slug at root to the real /areas/slug page
      {
        source:
          "/:slug(barking-dagenham|barnet|bexley|brent|bromley|camden|croydon|ealing|enfield|greenwich|hackney|hammersmith-fulham|haringey|harrow|havering|hillingdon|hounslow|islington|kensington-chelsea|kingston|lambeth|lewisham|merton|newham|redbridge|richmond|southwark|sutton|tower-hamlets|waltham-forest|wandsworth|westminster-city|surrey-m25)",
        destination: "/areas/:slug",
        permanent: true,
      },

      // Optional: if anyone hits /areas/havering/ with a trailing slash etc, Next handles it anyway
    ];
  },
};

module.exports = nextConfig;
