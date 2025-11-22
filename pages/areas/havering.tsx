import Head from "next/head";

export default function Havering() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Havering | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Havering for extensions, loft conversions, new builds and conversions. Fixed fee drawings for Romford and surrounding areas."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Havering
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          WEDRAWPLANS prepares architectural drawings throughout Havering,
          including Romford, Hornchurch and Upminster. We support homeowners
          and small developers with extensions, loft conversions, conversions
          and new build layouts.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
          What We Do in Havering
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Rear and side extension drawings</li>
          <li>Loft conversion plans for bungalows and houses</li>
          <li>New build layouts for small schemes</li>
          <li>Conversion drawings for flats and HMOs</li>
          <li>Building Regulation drawing packs</li>
          <li>Measured surveys and as existing drawings</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Experience with Havering Council
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Havering has guidance covering extensions, roof alterations and
          changes of use. We prepare drawings that meet local validation
          standards and set out the proposal clearly so officers can review
          it efficiently.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Typical Fixed Fees in Havering
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Extension drawings — from £700</li>
          <li>Loft conversion drawings — from £650</li>
          <li>Flat conversion packages — from £1,150</li>
        </ul>

        <div className="mt-10 p-6 bg-slate-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
          <p className="text-slate-700 mb-4">
            Share your Havering project details through the enquiry form for a fixed fee.
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
