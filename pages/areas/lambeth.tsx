import Head from "next/head";

export default function Lambeth() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Lambeth | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Lambeth for extensions, loft conversions, remodelling and residential developments. Fixed fee planning and building regulation drawings."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Lambeth
        </h1>

        <p className="text-slate-700 mb-6 leading-relaxed">
          WEDRAWPLANS prepares drawings across Lambeth for residential 
          extensions, loft conversions, internal remodelling and small 
          development projects. Clear, buildable designs that satisfy Lambeth's 
          planning guidance.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">What We Do</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Rear and side extension plans</li>
          <li>Loft conversion & dormer drawings</li>
          <li>Open plan and internal remodelling layouts</li>
          <li>Conversion drawings for flats and HMOs</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Experience with Lambeth Council
        </h2>
        <p className="text-slate-700">
          Lambeth focuses heavily on design quality, materials and neighbour 
          impact. Our drawings clearly communicate these aspects to support a 
          smooth planning process.
        </p>

        <h2 className="text-2xl mt-10 mb-4 font-semibold">Typical Fees</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Extension drawings — from £750</li>
          <li>Loft drawings — from £650</li>
          <li>Internal remodelling — priced to scope</li>
        </ul>

        <div className="bg-slate-100 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-semibold">Start Your Project</h3>
          <p className="mt-3 text-slate-700">
            Use the enquiry form for a fixed fee in Lambeth.
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
