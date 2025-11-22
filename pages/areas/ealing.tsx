import Head from "next/head";

export default function Ealing() {
  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Ealing | Extensions · Loft · New Build | WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawings for extensions, loft conversions, new builds, planning permission and building regulation approval in Ealing. Fixed sensible fees and fast turnaround."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-12">

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-slate-900 mb-6">
          Architectural Drawings in Ealing
        </h1>

        {/* INTRO */}
        <p className="text-lg text-slate-700 leading-7 mb-8">
          WEDRAWPLANS provides professional architectural drawings for{" "}
          <strong>extensions, loft conversions, new builds, planning applications,</strong> and{" "}
          <strong>building regulation approval</strong> across the entire London Borough of Ealing.
          We offer fixed sensible fees, fast turnaround and a strong planning success record for all
          types of residential projects.
        </p>

        {/* AREAS COVERED */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Areas We Cover in Ealing
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg text-slate-700">
            <li>Ealing</li>
            <li>Acton</li>
            <li>Southall</li>
            <li>Hanwell</li>
            <li>Northfields</li>
            <li>Pitshanger</li>
            <li>West Ealing</li>
            <li>Greenford</li>
            <li>Perivale</li>
            <li>Norwood Green</li>
            <li>Park Royal</li>
            <li>Cleveland</li>
          </ul>
        </section>

        {/* SERVICES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Our Services in Ealing
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-lg text-slate-700">
            <li>Rear, side and wraparound extension drawings</li>
            <li>Loft conversions (dormer, hip-to-gable, L-shape, mansard)</li>
            <li>New build architectural design & planning consultancy</li>
            <li>Planning application drawings and submission</li>
            <li>Building Regulation drawings (full BR compliance)</li>
            <li>Structural engineering (RSJ beams, calculations)</li>
            <li>Party wall drawings + guidance</li>
            <li>Measured surveys across all districts</li>
          </ul>
        </section>

        {/* WHY CHOOSE US */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Why Homeowners in Ealing Choose WEDRAWPLANS
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-lg text-slate-700">
            <li>Extensive experience with 1930s semi-detached homes</li>
            <li>Fast turnaround — drawings delivered in days</li>
            <li>Clear fixed pricing</li>
            <li>Strong planning success in all Ealing districts</li>
            <li>Full support from survey to planning to building regs</li>
            <li>Reliable, responsive and professional</li>
          </ul>
        </section>

        {/* CALL TO ACTION */}
        <section className="bg-slate-100 p-6 rounded-xl text-center border">
          <h3 className="text-2xl font-semibold text-slate-900 mb-3">
            Get a Free Fixed-Fee Quote for Ealing
          </h3>

          <p className="text-lg text-slate-700 mb-6">
            Enter your Ealing postcode and project details.  
            We will send you a same-day fixed quote.
          </p>

          <a
            href="/"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Get My Quote
          </a>
        </section>

        <div className="h-20"></div>
      </main>
    </>
  );
}
