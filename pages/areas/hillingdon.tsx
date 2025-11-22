import Head from "next/head";

export default function Hillingdon() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Hillingdon | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Hillingdon for extensions, loft conversions, garage conversions and new builds. Fixed fee drawings for West London suburbs."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Hillingdon
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          WEDRAWPLANS supports projects across Hillingdon, including Uxbridge,
          Hayes, Ruislip and surrounding areas. We provide architectural
          drawings for extensions, lofts, garage conversions and small new
          build schemes.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
          What We Do in Hillingdon
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Rear, side and wrap around extension drawings</li>
          <li>Loft conversion and dormer plans</li>
          <li>Garage conversion and outbuilding drawings</li>
          <li>New build layouts for small residential schemes</li>
          <li>Building Regulation drawing packs</li>
          <li>Measured surveys and structural coordination</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Experience with Hillingdon Council
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Hillingdon’s planning guidance covers suburban character, extensions,
          roof alterations and outbuildings. We prepare drawings that respond
          to these policies and clearly set out the proposals to help reduce
          planning risk.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Typical Fixed Fees in Hillingdon
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Extension drawings — from £750</li>
          <li>Loft conversion drawings — from £650</li>
          <li>Garage conversion drawings — from £650</li>
        </ul>

        <div className="mt-10 p-6 bg-slate-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
          <p className="text-slate-700 mb-4">
            Use the enquiry form for a fixed quote on drawings in Hillingdon.
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
