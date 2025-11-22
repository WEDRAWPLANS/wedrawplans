import Head from "next/head";

export default function Harrow() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Harrow | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Harrow for extensions, lofts, new builds and flat conversions. Fixed fee drawings tailored to Harrow Council requirements."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Harrow
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          WEDRAWPLANS works extensively in Harrow, preparing architectural 
          drawings for house extensions, loft conversions, flat conversions 
          and new builds. We focus on clear, buildable designs that match 
          local expectations and support smooth planning and building 
          control approval.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
          What We Do in Harrow
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Rear, side and wrap around extension drawings</li>
          <li>Loft conversion and dormer plans</li>
          <li>Conversion drawings for flats and HMOs</li>
          <li>New build layouts for small residential schemes</li>
          <li>Building Regulation drawing packs</li>
          <li>Measured surveys and structural coordination</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Experience with Harrow Council
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Harrow has clear guidance on residential extensions, roof alterations 
          and conversions. We prepare drawings that reflect these published 
          standards and typical officer feedback, helping to reduce delays 
          and requests for changes.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Typical Fixed Fees in Harrow
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Extension drawings — from £750</li>
          <li>Loft conversion drawings — from £650</li>
          <li>Flat conversion packages — from £1,250</li>
        </ul>

        <div className="mt-10 p-6 bg-slate-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
          <p className="text-slate-700 mb-4">
            Use the enquiry form or call WEDRAWPLANS to discuss your Harrow project.
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
