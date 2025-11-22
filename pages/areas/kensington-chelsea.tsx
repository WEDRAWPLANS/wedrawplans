import Head from "next/head";

export default function KensingtonChelsea() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Kensington & Chelsea | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Kensington and Chelsea for extensions, basements, lofts and high-quality residential schemes. Premium drawings for premium locations."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Kensington & Chelsea
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          Kensington and Chelsea has some of the most sensitive planning areas 
          in the UK, with conservation areas, heritage streets and premium 
          residential properties. WEDRAWPLANS prepares architectural drawings 
          with precision, clarity and sensitivity for extensions, lofts, 
          basements and high-end residential projects.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          What We Do in Kensington & Chelsea
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Basement excavation drawings</li>
          <li>Rear and side extension plans</li>
          <li>Loft conversion and mansard roof plans</li>
          <li>Internal remodelling and high-spec layouts</li>
          <li>Flat conversion drawings</li>
          <li>Building Regulation and tender packs</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Experience with RBKC Planning
        </h2>
        <p className="text-slate-700">
          Kensington & Chelsea has extremely detailed planning and heritage 
          requirements. We prepare drawings that clearly communicate massing, 
          materials and impact to give applications the best possible chance.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Typical Fees
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Extension drawings — from £1,200</li>
          <li>Loft / mansard drawings — from £950</li>
          <li>Basement design — priced to scope</li>
        </ul>

        <div className="mt-10 p-6 bg-slate-100 rounded-xl">
          <h3 className="text-xl font-semibold">Start Your Project</h3>
          <p className="text-slate-700 mt-3">
            Use the enquiry form for a fixed fee quote in Kensington & Chelsea.
          </p>
          <a href="/#contact"
             className="inline-block mt-4 px-6 py-3 bg-red-600 text-white rounded-full">
            Get a Free Quote
          </a>
        </div>
      </main>
    </>
  );
}
