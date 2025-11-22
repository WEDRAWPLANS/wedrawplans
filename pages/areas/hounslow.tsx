import Head from "next/head";

export default function Hounslow() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Hounslow | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Hounslow for extensions, loft conversions, conversions and new builds. Fixed fee architectural drawing services in West London."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Hounslow
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          WEDRAWPLANS prepares architectural drawings across Hounslow, including
          Hounslow, Isleworth, Brentford and Chiswick. We support extensions,
          loft conversions, flat conversions and new build projects with clear,
          buildable drawings.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
          What We Do in Hounslow
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Rear and side extension drawings</li>
          <li>Loft conversion and dormer plans</li>
          <li>Conversion drawings for flats and HMOs</li>
          <li>New build layouts for small residential schemes</li>
          <li>Building Regulation drawing packs</li>
          <li>Measured surveys and as existing drawings</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Experience with Hounslow Council
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Hounslow’s planning policies consider character, neighbour impact
          and environmental factors, particularly near main routes and
          transport corridors. We prepare drawings that respond to these
          points and meet local validation requirements.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Typical Fixed Fees in Hounslow
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Extension drawings — from £750</li>
          <li>Loft conversion drawings — from £650</li>
          <li>Flat conversion packages — from £1,250</li>
        </ul>

        <div className="mt-10 p-6 bg-slate-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
          <p className="text-slate-700 mb-4">
            Use the enquiry form to request a fixed fee for drawings in Hounslow.
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
