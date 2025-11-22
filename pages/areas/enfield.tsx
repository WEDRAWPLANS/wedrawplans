import Head from "next/head";

export default function Enfield() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Enfield | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Enfield for extensions, loft conversions, new builds and conversions. Fixed fee drawings for planning and building regulations."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Enfield
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          WEDRAWPLANS prepares architectural drawings across Enfield for house
          extensions, loft conversions, new builds and residential conversions.
          We focus on clear, buildable designs that support planning approval
          and help builders on site.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
          What We Do in Enfield
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Rear and side extension drawings</li>
          <li>Loft conversion plans for terraced, semi and detached homes</li>
          <li>New build layouts for small residential schemes</li>
          <li>Conversion drawings for flats and HMOs</li>
          <li>Building Regulation drawing packs</li>
          <li>Measured surveys and as existing drawings</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Experience with Enfield Council
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Enfield Council has clear guidance on extensions, roof alterations and
          conversions. We prepare drawings to meet validation requirements and
          reflect local design expectations, helping reduce delays during the
          planning process.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Typical Fixed Fees in Enfield
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Extension drawings — from £750</li>
          <li>Loft conversion drawings — from £650</li>
          <li>Flat conversion packages — from £1,200</li>
        </ul>

        <div className="mt-10 p-6 bg-slate-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
          <p className="text-slate-700 mb-4">
            Use the enquiry form to request a fixed quote for drawings in Enfield.
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
