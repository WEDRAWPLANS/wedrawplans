import Head from "next/head";

export default function Hackney() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Hackney | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Hackney for extensions, lofts, internal remodelling and residential schemes. Clear drawings for tight urban sites."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Hackney
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          Many projects in Hackney involve tight plots, terraced housing and
          sensitive street frontages. WEDRAWPLANS prepares clear architectural
          drawings for extensions, loft conversions, internal remodelling and
          residential schemes across the borough.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
          What We Do in Hackney
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Rear, side and infill extension drawings</li>
          <li>Loft conversion and roof alteration plans</li>
          <li>Internal remodelling and open plan layouts</li>
          <li>Conversion drawings for flats and small schemes</li>
          <li>Building Regulation and fire strategy drawings</li>
          <li>Measured surveys and sections</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Experience with Hackney Council
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Hackney places strong emphasis on design, heritage and neighbour
          impact. We prepare drawings that clearly explain the proposal and
          respond to local planning guidance so that officers and neighbours
          can understand the scheme quickly.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Typical Fixed Fees in Hackney
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Extension drawings — from £850</li>
          <li>Loft conversion drawings — from £750</li>
          <li>Complex internal remodelling — priced to scope</li>
        </ul>

        <div className="mt-10 p-6 bg-slate-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
          <p className="text-slate-700 mb-4">
            Outline your Hackney project using the enquiry form to receive a fixed fee for drawings.
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
