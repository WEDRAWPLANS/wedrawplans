export type BoroughConfig = {
  slug: string; // "barnet"
  name: string; // "Barnet"
  near?: string[]; // ["harrow", "brent", "enfield"]
};

export const BOROUGHS: BoroughConfig[] = [
  { slug: "barnet", name: "Barnet", near: ["harrow", "brent", "enfield"] },
  // Add the rest gradually, or all at once later
];

export function getBorough(slug: string): BoroughConfig {
  const b = BOROUGHS.find((x) => x.slug === slug);
  if (!b) return { slug, name: slug.charAt(0).toUpperCase() + slug.slice(1) };
  return b;
}
