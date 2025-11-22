import Head from "next/head";

export default function Brent() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Brent | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Brent for extensions, loft conversions, flat conversions and small developments. Clear drawings for planning and building control."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Brent
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          WEDRAWPLANS supports projects across Brent, including areas such as
          Wembley, Willesden and Harlesden. We provide architectural drawings
          for extensions, lofts, conversions and small new build schemes, with
          a focus on buildable and compliant designs.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
          What We Do in Brent
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Rear, side and wrap around extension drawings</li>
          <li>Loft conversion plans for terraced and semi detached houses</li>
          <li>Conversion drawings for flats and HMOs</li>
          <li>New build layouts for infill and backland sites</li>
          <li>Building Regulation drawing packs</li>
          <li>Measured surveys and structural coordination</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Experience with Brent Council
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Brent often focuses on neighbour impact, design quality and parking
          when considering residential applications. We prepare drawings that
          respond to these points and meet local validation standards to help
          keep applications moving smoothly.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Typical Fixed Fees in Brent
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Extension drawings — from £750</li>
          <li>Loft conversion drawings — from £650</li>
          <li>Flat conversion drawings — from £1,200</li>
        </ul>

        <div className="mt-10 p-6 bg-slate-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
          <p className="text-slate-700 mb-4">
            Contact WEDRAWPLANS for a clear fixed fee on drawings in Brent.
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
