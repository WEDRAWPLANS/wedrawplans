import Head from "next/head";

export default function Croydon() {
  return (
    <>
      <Head>
        <title>Architectural Drawings in Croydon | Extensions · Loft · New Build | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings for house extensions, loft conversions, new builds, planning permission and building regulation approval in Croydon. Fixed fees. Fast turnaround."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-12">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-slate-900 mb-6">
          Architectural Drawings in Croydon
        </h1>

        {/* Intro */}
        <p className="text-lg text-slate-700 leading-7 mb-8">
          WEDRAWPLANS provides high quality architectural drawings for{" "}
          <strong>extensions, loft conversions, new builds, planning permission,</strong> and{" "}
          <strong>building regulation approval</strong> across the entire London Borough of Croydon.
          Fixed fees, fast turnaround, and professional support throughout your project.
        </p>

        {/* Areas Covered */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Areas We Cover in Croydon</h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700 text-lg">
            <li>Croydon</li>
            <li>South Croydon</li>
            <li>Shirley</li>
            <li>Purley</li>
            <li>Sanderstead</li>
            <li>Coulsdon</li>
            <li>Addiscombe</li>
            <li>Thornton Heath</li>
            <li>Norbury</li>
            <li>Selhurst</li>
            <li>Kenley</li>
            <li>Waddon</li>
          </ul>
        </section>

        {/* What We Provide */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Services in Croydon</h2>

          <ul className="list-disc pl-6 text-slate-700 space-y-2 text-lg">
            <li>Rear, side & wraparound extension drawings</li>
            <li>Loft conversion drawings (dormer · hip to gable · L-shape · mansard)</li>
            <li>New build house plans & planning strategy</li>
            <li>Planning application drawings & submission</li>
            <li>Building Regulation drawings (full BR compliance pack)</li>
            <li>Structural engineering (steel beams · calculations)</li>
            <li>Party wall drawings and documentation</li>
            <li>Measured surveys & site assessments</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Why Homeowners in Croydon Choose WEDRAWPLANS
          </h2>

          <ul className="list-disc pl-6 text-slate-700 space-y-2 text-lg">
            <li>Fast turnaround — drawings within days</li>
            <li>Clear fixed pricing with no hidden fees</li>
            <li>Strong planning success across all Croydon districts</li>
            <li>Specialists in Victorian, Edwardian & 1930s homes</li>
            <li>Full support: survey → drawings → planning → building regs</li>
            <li>We cover the whole Croydon borough</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-slate-100 p-6 rounded-xl text-center border">
          <h3 className="text-2xl font-semibold text-slate-900 mb-3">
            Get a Free Fixed-Fee Quote for Croydon
          </h3>

          <p className="text-slate-700 mb-6 text-lg">
            Share your Croydon postcode and project details.  
            We will send a same-day fixed fee quote.
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
