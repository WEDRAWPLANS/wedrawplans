import Head from "next/head";

export default function Lewisham() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Lewisham | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Lewisham for extensions, loft conversions, conversions and new builds. Fixed fee drawings for planning and building control."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Lewisham
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          WEDRAWPLANS prepares architectural drawings throughout Lewisham,
          including Brockley, Catford, New Cross, Forest Hill and Sydenham.
          Clear drawings for extensions, loft conversions, conversions and 
          residential developments.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">What We Do</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Rear and side extensions</li>
          <li>Loft conversion drawings</li>
          <li>Flat conversion and HMO layouts</li>
          <li>New build layouts</li>
          <li>Building Regulation drawing packs</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Experience with Lewisham Council
        </h2>
        <p className="text-slate-700">
          Lewisham publishes detailed guidance for extensions and roof 
          alterations. We prepare drawings that align with these design 
          principles and validation requirements.
        </p>

        <h2 className="text-2xl mt-10 mb-4 font-semibold">Typical Fees</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Extension drawings — from £700</li>
          <li>Loft drawings — from £650</li>
          <li>Conversions — from £1,200</li>
        </ul>

        <div className="mt-10 bg-slate-100 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Start Your Project</h3>
          <p className="mt-3 text-slate-700">
            Use the enquiry form for a fixed quote in Lewisham.
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
