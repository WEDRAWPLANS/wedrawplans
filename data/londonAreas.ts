export const LONDON_AREAS = [
  ["Barking and Dagenham", "/areas/barking-and-dagenham"],
  ["Barnet", "/areas/barnet"],
  ["Bexley", "/areas/bexley"],
  ["Brent", "/areas/brent"],
  ["Bromley", "/areas/bromley"],
  ["Camden", "/areas/camden"],
  ["City of London", "/areas/city-of-london"],
  ["Croydon", "/areas/croydon"],
  ["Ealing", "/areas/ealing"],
  ["Enfield", "/areas/enfield"],
  ["Greenwich", "/areas/greenwich"],
  ["Hackney", "/areas/hackney"],
  ["Hammersmith and Fulham", "/areas/hammersmith-and-fulham"],
  ["Haringey", "/areas/haringey"],
  ["Harrow", "/areas/harrow"],
  ["Havering", "/areas/havering"],
  ["Hillingdon", "/areas/hillingdon"],
  ["Hounslow", "/areas/hounslow"],
  ["Islington", "/areas/islington"],
  ["Kensington and Chelsea", "/areas/kensington-and-chelsea"],
  ["Kingston upon Thames", "/areas/kingston"],
  ["Lambeth", "/areas/lambeth"],
  ["Lewisham", "/areas/lewisham"],
  ["Merton", "/areas/merton"],
  ["Newham", "/areas/newham"],
  ["Redbridge", "/areas/redbridge"],
  ["Richmond upon Thames", "/areas/richmond"],
  ["Southwark", "/areas/southwark"],
  ["Sutton", "/areas/sutton"],
  ["Tower Hamlets", "/areas/tower-hamlets"],
  ["Waltham Forest", "/areas/waltham-forest"],
  ["Wandsworth", "/areas/wandsworth"],
  ["Westminster", "/areas/westminster"],
] as const;

const londonAreaPaths: ReadonlySet<string> = new Set(LONDON_AREAS.map(([, path]) => path));

export const BOROUGH_QUOTE_ID = "borough-quote";
export const BOROUGH_QUOTE_ANCHOR = `#${BOROUGH_QUOTE_ID}`;

export function hasLondonBoroughQuote(path: string) {
  return londonAreaPaths.has(path);
}

type LondonAreaName = (typeof LONDON_AREAS)[number][0];

const searchAreaNames: Partial<Record<LondonAreaName, string>> = {
  Bexley: "Bexleyheath & Bexley",
  "City of London": "the City of London",
};

// Targeted titles for boroughs with high-impression, low-click search queries.
const targetedAreaMetadata: Partial<Record<LondonAreaName, { title: string; description: string }>> = {
  "Barking and Dagenham": {
    title: "Planning Drawings Barking & Dagenham | Fixed Fees | WEDRAWPLANS",
    description: "Planning permission drawings for home extensions and lofts in Barking and Dagenham. Get a clear fixed-fee quote, prompt survey booking and local planning support.",
  },
  "City of London": {
    title: "Architectural Drawings for City of London Flats | WEDRAWPLANS",
    description: "Plans for flat alterations and conversions in the City of London. Get drawings for your Barbican or Square Mile property and a written fixed-fee quote.",
  },
  "Kingston upon Thames": {
    title: "House Extension Plans Kingston | Fixed Fees | WEDRAWPLANS",
    description: "House extension planning drawings for Kingston, Surbiton and New Malden. Clear fixed-fee quotes, fast survey booking and practical council application support.",
  },
  Lambeth: {
    title: "Loft Conversion Drawings in Lambeth | WEDRAWPLANS",
    description: "Loft conversion drawings for homes in Brixton, Clapham and Streatham. Get floor plans, roof sections and elevations with a written fixed-fee quote.",
  },
  Southwark: {
    title: "House Extension & Floor Plans in Southwark | WEDRAWPLANS",
    description: "Planning drawings for rear and side return extensions in Southwark. Get existing and proposed floor plans, elevations and a written fixed-fee quote.",
  },
  Greenwich: {
    title: "Planning Drawings Greenwich | Fixed-Fee Quotes | WEDRAWPLANS",
    description: "Drawings for planning permission in Greenwich, including house extensions and lofts. Clear fixed-fee quotes, prompt surveys and practical council application support.",
  },
  Hackney: {
    title: "Planning Permission Drawings Hackney | Fixed Fees | WEDRAWPLANS",
    description: "Planning permission drawings for Hackney extensions, lofts and alterations. Clear fixed-fee quotes, prompt surveys and help preparing council-ready drawing packs.",
  },
};

export function getLondonAreaMetadata(areaName: LondonAreaName) {
  const targeted = targetedAreaMetadata[areaName];
  if (targeted) return targeted;
  const location = searchAreaNames[areaName] ?? areaName;
  return {
    title: `Architectural Drawings in ${location} | Extension, Loft & Planning Plans | WEDRAWPLANS`,
    description: `Fixed-fee architectural drawings in ${location} for house extensions, loft conversions, flats & building regulations. Fast local site surveys within 48 hours and full council planning submission. Call 020 3654 8508.`,
  };
}
