import Head from "next/head";

export default function Merton() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Merton | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Merton for extensions, loft conversions, garage conversions and new builds. Clear plans for Wimbledon, Mitcham and Morden."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Merton
        </h1>

        <p className="text-slate-700 mb-6 leading-relaxed">
          WEDRAWPLANS prepares architectural drawings throughout Merton 
          including Wimbledon, Morden and Mitcham. We support extensions, lofts, 
          conversions and new build schemes with clear, buildable plans.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What We Do</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Extension drawings</li>
          <li>Loft conversion and dormer plans</li>
          <li>Garage conversions</li>
          <li>New build layouts</li>
          <li>Building Regulation drawing packs</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Experience with Merton Council
        </h2>
        <p className="text-slate-700">
          Merton has clear suburban design guidance. Our drawings reflect these 
          requirements and communicate proposals clearly for planning review.
        </p>

        <h2 className="text-2xl mt-10 mb-4 font-semibold">Typical Fees</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Extension drawings — from £750</li>
          <li>Loft drawings — from £650</li>
          <li>Garage conversions — from £600</li>
        </ul>

        <div className="bg-slate-100 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-semibold">Start Your Project</h3>
          <p className="mt-3 text-slate-700">
            Use the enquiry form for a fixed fee in Merton.
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
