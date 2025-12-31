import Head from "next/head";
import SiteHeader from "./SiteHeader";

export default function BoroughLayout({
  title,
  description,
  canonical,
  ldJsonObjects = [],
  children
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        {ldJsonObjects.map((obj, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
          />
        ))}
      </Head>

      <main className="bg-slate-50">
        <SiteHeader />
        {children}
      </main>
    </>
  );
}
