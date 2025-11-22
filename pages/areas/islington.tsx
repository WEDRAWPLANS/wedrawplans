import Head from "next/head";

export default function Islington() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Islington | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Islington for extensions, loft conversions, internal remodelling and residential schemes. Sensitive designs for characterful streets."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Islington
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          Many projects in Islington are in tightly packed streets, terraces and
          conservation areas. WEDRAWPLANS prepares clear architectural drawings
          for extensions, lofts, basements and internal remodelling with a focus
          on sensitive, buildable design.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
          What We Do in Islington
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Rear and side extension drawings</li>
          <li>Loft conversion and mansard roof plans</li>
          <li>Basement and lower ground conversions</li>
          <li>Internal remodelling and open plan layouts</li>
          <li>Conversion drawings for flats and small schemes</li>
          <li>Building Regulation and fire strategy drawings</li>
          <li>Measured surveys and detailed sections</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Experience with Islington Council
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Islington has some of the most detailed design and heritage policies
          in London. We prepare drawings that respond to these requirements and
          clearly communicate the proposals to planning officers and neighbours.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Typical Fixed Fees in Islington
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Extension drawings — from £900</li>
          <li>Loft conversion drawings — from £800</li>
          <li>Basement and complex schemes — priced to scope</li>
        </ul>

        <div className="mt-10 p-6 bg-slate-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
          <p className="text-slate-700 mb-4">
            Use the enquiry form to outline your Islington project and receive a fixed fee for drawings.
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
