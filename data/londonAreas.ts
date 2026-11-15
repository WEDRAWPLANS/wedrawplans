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

export function getLondonAreaMetadata(areaName: LondonAreaName) {
  const location = searchAreaNames[areaName] ?? areaName;
  return {
    title: `Architectural Drawings in ${location} | Extension, Loft & Planning Plans | WEDRAWPLANS`,
    description: `Fixed-fee architectural drawings in ${location} for house extensions, loft conversions, flats & building regulations. Fast local site surveys within 48 hours and full council planning submission. Call 020 3654 8508.`,
  };
}
