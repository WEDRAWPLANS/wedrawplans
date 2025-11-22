import Head from "next/head";

export default function Haringey() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Haringey | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Haringey for extensions, loft conversions and residential schemes. Clear designs for terraced and suburban streets."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Haringey
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          WEDRAWPLANS prepares drawings across Haringey for house extensions,
          loft conversions, internal remodelling and small developments. Many
          properties in the borough are terraced or semi detached, so clear
          drawings are important to explain how proposals affect neighbours
          and streetscene.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
          What We Do in Haringey
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Rear and side extension drawings</li>
          <li>Loft conversion and dormer plans</li>
          <li>Roof alterations and hip-to-gable designs</li>
          <li>Internal remodelling and open plan layouts</li>
          <li>Building Regulation drawing packs</li>
          <li>Measured surveys and sections</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Experience with Haringey Council
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Haringey’s planning policies focus on design quality, heritage and
          the impact of extensions and lofts on neighbouring properties.
          We prepare drawings that clearly show massing, outlook and privacy
          considerations to support the planning process.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Typical Fixed Fees in Haringey
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Extension drawings — from £800</li>
          <li>Loft conversion drawings — from £700</li>
          <li>Internal remodelling packages — priced to scope</li>
        </ul>

        <div className="mt-10 p-6 bg-slate-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
          <p className="text-slate-700 mb-4">
            Use the enquiry form to request a fixed quote for drawings in Haringey.
          </p>
          <a
            href="/#contact"
            className="inline-block px-6 py-3 bg-red-600 text-white rounded-full text-sm font-semibold"
          >
            Get a Free Quote
          </a>
        </div>
      </main>
    </>
  );
}
