async redirects() {
  return [
    {
      source: "/enfield",
      destination: "/areas/enfield",
      permanent: true,
    },
    {
      source: "/enfield/",
      destination: "/areas/enfield",
      permanent: true,
    },
  ];
},
