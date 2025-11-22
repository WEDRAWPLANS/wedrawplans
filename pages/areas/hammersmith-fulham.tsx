import Head from "next/head";

export default function HammersmithFulham() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Hammersmith and Fulham | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Hammersmith and Fulham for extensions, lofts, remodelling and residential schemes. Sensitive designs for urban and riverside streets."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Hammersmith and Fulham
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          WEDRAWPLANS supports projects across Hammersmith and Fulham, preparing
          architectural drawings for extensions, loft conversions, internal
          remodelling and small residential schemes. We focus on clear, buildable
          designs that respect character and neighbour amenity.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
          What We Do in Hammersmith and Fulham
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Rear and side extension drawings</li>
          <li>Loft conversion and mansard roof plans</li>
          <li>Internal remodelling and kitchen layouts</li>
          <li>Conversion drawings for flats and small schemes</li>
          <li>Building Regulation and fire escape drawings</li>
          <li>Measured surveys and elevation drawings</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Experience with Hammersmith and Fulham Council
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          The borough has detailed design requirements, particularly in
          conservation areas and along key routes and riverside locations.
          We prepare drawings to reflect these expectations and support a
          smoother planning process.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Typical Fixed Fees in Hammersmith and Fulham
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Extension drawings — from £900</li>
          <li>Loft conversion drawings — from £800</li>
          <li>Internal remodelling packages — priced to scope</li>
        </ul>

        <div className="mt-10 p-6 bg-slate-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
          <p className="text-slate-700 mb-4">
            Use the enquiry form for a fixed fee on drawings in Hammersmith and Fulham.
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
