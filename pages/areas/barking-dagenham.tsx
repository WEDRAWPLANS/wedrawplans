import Head from "next/head";

export default function BarkingDagenham() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Barking and Dagenham | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Barking and Dagenham for extensions, lofts, conversions and new builds. Fixed fees and fast planning support."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Barking and Dagenham
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          WEDRAWPLANS prepares clear and practical architectural drawings across Barking
          and Dagenham for extensions, loft conversions, new builds and residential
          conversions. Drawings are prepared for planning, lawful development and
          building regulation approval, with a focus on buildable solutions.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
          What We Do in Barking and Dagenham
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Rear and side extension drawings</li>
          <li>Loft conversion plans for terraced and semi detached homes</li>
          <li>New build house layouts and small developments</li>
          <li>Conversion drawings for flats and HMOs</li>
          <li>Building Regulation drawing packs</li>
          <li>Measured surveys and as existing drawings</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Local Planning in Barking and Dagenham
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          We are familiar with typical design considerations in Barking and Dagenham,
          including extensions to terraced housing, roof alterations and changes of use.
          Drawings are prepared to meet validation requirements and support a smooth
          planning process.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Typical Fixed Fees in Barking and Dagenham
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Extension drawings — from £750</li>
          <li>Loft conversion drawings — from £650</li>
          <li>Flat conversion packages — from £1,200</li>
        </ul>

        <div className="mt-10 p-6 bg-slate-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
          <p className="text-slate-700 mb-4">
            Use the enquiry form to request a fixed quote for drawings in Barking and Dagenham.
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
