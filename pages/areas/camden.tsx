import Head from "next/head";

export default function Camden() {
  return (
    <>
      <Head>
        <title>Architectural Drawings Camden | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings in Camden for extensions, loft conversions, internal remodelling and residential schemes. Sensitive designs for complex urban sites."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Architectural Drawings in Camden
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          Many projects in Camden involve tight urban sites, heritage buildings and
          careful neighbour relationships. WEDRAWPLANS prepares clear architectural
          drawings for extensions, lofts, internal remodelling and residential
          schemes with a focus on sensitive, buildable designs.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
          What We Do in Camden
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Extension and infill courtyard schemes</li>
          <li>Loft conversions and roof alterations</li>
          <li>Internal remodelling and open plan layouts</li>
          <li>Conversion drawings for flats and small schemes</li>
          <li>Building Regulation and fire strategy drawings</li>
          <li>Measured surveys and sections</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Experience with Camden Council
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Camden has detailed policies on heritage, conservation areas and design
          quality. We prepare drawings with these requirements in mind so that
          planning officers and neighbours can clearly understand the proposal.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Typical Fixed Fees in Camden
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Extension drawings — from £850</li>
          <li>Loft conversion drawings — from £750</li>
          <li>Complex internal remodelling — priced to scope</li>
        </ul>

        <div className="mt-10 p-6 bg-slate-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
          <p className="text-slate-700 mb-4">
            Use the enquiry form to outline your Camden project and receive a fixed fee for drawings.
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
