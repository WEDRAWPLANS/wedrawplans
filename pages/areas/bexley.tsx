import Head from "next/head";

export default function Bexley() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Bexley | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Bexley for house extensions, loft conversions and small residential developments. Fixed fee drawings for planning and building regulations."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Bexley
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          WEDRAWPLANS prepares architectural drawings for homeowners and developers
          across Bexley, including Welling, Bexleyheath and Sidcup. We focus on clear,
          accurate drawings that support planning and building regulation approval and
          that help builders on site.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
          What We Do in Bexley
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Rear and side extension drawings</li>
          <li>Loft conversion plans for bungalows and houses</li>
          <li>New build layouts for small residential schemes</li>
          <li>Conversion drawings for flats and HMOs</li>
          <li>Building Regulation drawing packs</li>
          <li>Measured surveys</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Experience with Bexley Council
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Bexley has specific guidance on extensions, roof alterations and streetscene.
          We prepare drawings to align with local policies and validation standards,
          helping reduce the risk of delays and request for further information.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Typical Fixed Fees in Bexley
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Extension drawings — from £750</li>
          <li>Loft conversion drawings — from £650</li>
          <li>Building Regulation packs — priced to scope</li>
        </ul>

        <div className="mt-10 p-6 bg-slate-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
          <p className="text-slate-700 mb-4">
            For a fast quote on drawings in Bexley, use the enquiry form or call WEDRAWPLANS.
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
