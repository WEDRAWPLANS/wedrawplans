import Head from "next/head";

type Props = {
  slug: string; // "barnet"
  name: string; // "Barnet"
  mode: "ranker" | "landing";
};

export default function BoroughSEO({ slug, name, mode }: Props) {
  const rankerUrl = `https://www.wedrawplans.co.uk/${slug}`;

  const title =
    mode === "ranker"
      ? `Architectural Drawings ${name} | Extensions, Lofts, New Builds | WEDRAWPLANS`
      : `${name} Architectural Drawings | Get a Fixed Fee | WEDRAWPLANS`;

  const description =
    mode === "ranker"
      ? `Architectural drawings in ${name} for extensions, loft conversions, new builds and building regulation packs. Call 020 3654 8508 or request a fixed fee quote.`
      : `Get a fixed fee for your ${name} extension or loft drawings. Initial survey within 48 hours. Call 020 3654 8508 or send your details.`;

  return (
    <Head>
      {/* Canonical rules locked:
          - ranker canonical -> itself
          - landing canonical -> ranker
      */}
      <link rel="canonical" href={rankerUrl} />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
