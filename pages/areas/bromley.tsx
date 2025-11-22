import Head from "next/head";

export default function Bromley() {
  return (
    <>
      <Head>
        <title>Architectural Drawings in Bromley | Extensions · Loft · New Build | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings for extensions, loft conversions, new builds and planning applications in Bromley. Fixed fees. Fast turnaround. Professional service."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-12">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-slate-900 mb-6">
          Architectural Drawings in Bromley  
        </h1>

        {/* Intro */}
        <p className="text-lg text-slate-700 leading-7 mb-8">
          WEDRAWPLANS provides professional architectural drawings for{" "}
          <strong>house extensions, loft conversions, new builds, planning permission,</strong> and{" "}
          <strong>building regulation approval</strong> throughout the London Borough of Bromley.
          We offer fast turnaround, fixed sensible fees, and full support from concept to approval.
        </p>

        {/* Areas Covered */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Areas We Cover in Bromley</h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700 text-lg">
            <li>Bromley</li>
            <li>Beckenham</li>
            <li>Shortlands</li>
            <li>Hayes</li>
            <li>West Wickham</li>
            <li>Keston</li>
            <li>Chislehurst</li>
            <li>Petts Wood</li>
            <li>Orpington</li>
            <li>Locksbottom</li>
            <li>Sundridge</li>
            <li>Bickley</li>
          </ul>
        </section>

        {/* What We Provide */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Services in Bromley</h2>

          <ul className="list-disc pl-6 text-slate-700 space-y-2 text-lg">
            <li>House extension drawings (rear · side · wraparound)</li>
            <li>Loft conversion drawings (dormer · hip to gable · mansard)</li>
            <li>New build architectural plans</li>
            <li>Planning application drawings & submission</li>
            <li>Building Regulation drawings (full BR pack)</li>
            <li>Structural engineering support (beams · calculations)</li>
            <li>Party wall drawings & documentation</li>
            <li>Site surveys & measured surveys</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Why Homeowners in Bromley Choose WEDRAWPLANS
          </h2>

          <ul className="list-disc pl-6 text-slate-700 space-y-2 text-lg">
            <li>Fast turnaround — drawings can be prepared in days</li>
            <li>Fixed fees (no hidden costs)</li>
            <li>Friendly and helpful support from start to approval</li>
            <li>We cover the entire Bromley borough</li>
            <li>Strong planning success record</li>
            <li>Full package: survey → drawings → planning → building regs</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-slate-100 p-6 rounded-xl text-center border">
          <h3 className="text-2xl font-semibold text-slate-900 mb-3">
            Get a Free Fixed-Fee Quote for Bromley
          </h3>

          <p className="text-slate-700 mb-6 text-lg">
            Tell us your Bromley postcode and project type.  
            We will reply with a same-day fixed quote.
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
