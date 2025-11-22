import Head from "next/head";

export default function Greenwich() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Greenwich | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Greenwich for extensions, loft conversions, new builds and riverside developments. Fixed fees and clear drawings for planning and building control."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Greenwich
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          WEDRAWPLANS provides architectural drawings across Greenwich, from
          traditional streets to modern riverside developments. We support
          homeowners and developers with clear drawings for extensions, lofts,
          conversions and new build projects.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
          What We Do in Greenwich
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Rear, side and wrap around extensions</li>
          <li>Loft conversion plans for houses and maisonettes</li>
          <li>New build layouts for small residential schemes</li>
          <li>Conversion drawings for flats and HMOs</li>
          <li>Building Regulation drawing packs</li>
          <li>Measured surveys and structural coordination</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Experience with Greenwich Council
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Greenwich Council has specific guidance on design, heritage and
          riverside locations. We prepare drawings that reflect local planning
          policies and validation standards so that applications are easier to
          process and understand.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Typical Fixed Fees in Greenwich
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Extension drawings — from £800</li>
          <li>Loft conversion drawings — from £700</li>
          <li>Flat conversion packages — from £1,250</li>
        </ul>

        <div className="mt-10 p-6 bg-slate-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
          <p className="text-slate-700 mb-4">
            Share your Greenwich project details using the enquiry form for a fixed quote.
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
