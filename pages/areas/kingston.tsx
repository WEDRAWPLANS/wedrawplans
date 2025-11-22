import Head from "next/head";

export default function Kingston() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Kingston upon Thames | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Kingston for extensions, loft conversions, outbuildings, and new residential schemes. Fixed fee drawing services."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Kingston upon Thames
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          WEDRAWPLANS provides architectural drawings across Kingston for 
          extensions, lofts, garage conversions, outbuildings and small new 
          builds. We support suburban and riverside neighbourhoods throughout 
          the borough.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What We Do</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Rear and side extension drawings</li>
          <li>Loft conversion and dormer plans</li>
          <li>Outbuilding and garden room layouts</li>
          <li>Garage conversions</li>
          <li>Small residential new build layouts</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Experience with Kingston Council
        </h2>
        <p className="text-slate-700">
          Kingston has clear guidance on suburban character, extensions and roof 
          alterations. We prepare drawings aligned with these design principles.
        </p>

        <h2 className="text-2xl mt-10 mb-4 font-semibold">Typical Fees</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Extension drawings — from £750</li>
          <li>Loft drawings — from £650</li>
          <li>Outbuilding drawings — from £550</li>
        </ul>

        <div className="mt-10 bg-slate-100 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Start Your Project</h3>
          <p className="mt-3 text-slate-700">
            Use the enquiry form for a fixed fee quote in Kingston.
          </p>
          <a href="/#contact"
             className="inline-block mt-4 px-6 py-3 bg-red-600 text-white rounded-full">
            Get a Free Quote
          </a>
        </div>
      </main>
    </>
  );
}
