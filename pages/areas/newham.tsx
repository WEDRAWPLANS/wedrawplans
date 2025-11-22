import Head from "next/head";

export default function Newham() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Newham | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Newham for extensions, loft conversions, conversions and new builds. Fixed fee professional drawing services."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Newham
        </h1>

        <p className="text-slate-700 mb-6 leading-relaxed">
          WEDRAWPLANS prepares drawings across Newham including Stratford, 
          East Ham, Forest Gate, Manor Park and Beckton. Clear drawings for 
          extensions, lofts, conversions and new build schemes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What We Do</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Extension drawings</li>
          <li>Loft conversion plans</li>
          <li>Flat conversion and HMO drawings</li>
          <li>New build layouts</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Experience with Newham Council
        </h2>
        <p className="text-slate-700">
          Newham has detailed guidance for roof alterations and conversions. We 
          prepare drawings aligned with local policies and typical officer feedback.
        </p>

        <h2 className="text-2xl mt-10 mb-4 font-semibold">Typical Fees</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Extension drawings — from £700</li>
          <li>Loft drawings — from £650</li>
          <li>Conversions — from £1,200</li>
        </ul>

        <div className="bg-slate-100 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-semibold">Start Your Project</h3>
          <p className="mt-3 text-slate-700">
            Use the enquiry form for a fixed quote in Newham.
          </p>
          <a href="/#contact"
             className="inline-block px-6 py-3 bg-red-600 text-white rounded-full mt-4">
            Get a Free Quote
          </a>
        </div>
      </main>
    </>
  );
}
