/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Service page redirects
      { source: "/loft-plans", destination: "/loft-conversion-plans", permanent: true },

      // Fix wrong /areas link (dropdown safety net)
      { source: "/areas/barking-dagenham", destination: "/areas/barking-and-dagenham", permanent: true },

      // Borough redirects to /areas/<borough>
      { source: "/barking-and-dagenham", destination: "/areas/barking-and-dagenham", permanent: true },
      { source: "/barnet", destination: "/areas/barnet", permanent: true },
      { source: "/bexley", destination: "/areas/bexley", permanent: true },
      { source: "/brent", destination: "/areas/brent", permanent: true },
      { source: "/bromley", destination: "/areas/bromley", permanent: true },
      { source: "/camden", destination: "/areas/camden", permanent: true },
      { source: "/croydon", destination: "/areas/croydon", permanent: true },
      { source: "/ealing", destination: "/areas/ealing", permanent: true },
      { source: "/enfield", destination: "/areas/enfield", permanent: true },
      { source: "/greenwich", destination: "/areas/greenwich", permanent: true },
      { source: "/hackney", destination: "/areas/hackney", permanent: true },
      { source: "/hammersmith-and-fulham", destination: "/areas/hammersmith-and-fulham", permanent: true },
      { source: "/haringey", destination: "/areas/haringey", permanent: true },
      { source: "/harrow", destination: "/areas/harrow", permanent: true },
      { source: "/havering", destination: "/areas/havering", permanent: true },
      { source: "/hillingdon", destination: "/areas/hillingdon", permanent: true },
      { source: "/hounslow", destination: "/areas/hounslow", permanent: true },
      { source: "/islington", destination: "/areas/islington", permanent: true },
      { source: "/kensington-and-chelsea", destination: "/areas/kensington-and-chelsea", permanent: true },

      { source: "/kingston", destination: "/areas/kingston", permanent: true },
      { source: "/kingston-upon-thames", destination: "/areas/kingston", permanent: true },

      { source: "/lambeth", destination: "/areas/lambeth", permanent: true },
      { source: "/lewisham", destination: "/areas/lewisham", permanent: true },
      { source: "/merton", destination: "/areas/merton", permanent: true },
      { source: "/newham", destination: "/areas/newham", permanent: true },
      { source: "/redbridge", destination: "/areas/redbridge", permanent: true },

      { source: "/richmond-upon-thames", destination: "/areas/richmond-upon-thames", permanent: true },

      { source: "/southwark", destination: "/areas/southwark", permanent: true },
      { source: "/sutton", destination: "/areas/sutton", permanent: true },
      { source: "/tower-hamlets", destination: "/areas/tower-hamlets", permanent: true },
      { source: "/waltham-forest", destination: "/areas/waltham-forest", permanent: true },
      { source: "/wandsworth", destination: "/areas/wandsworth", permanent: true },
      { source: "/westminster", destination: "/areas/westminster", permanent: true },
      { source: "/westmister", destination: "/areas/westminster", permanent: true },

      { source: "/city-of-london", destination: "/areas/city-of-london", permanent: true },
    ];
  },
};

module.exports = nextConfig;
