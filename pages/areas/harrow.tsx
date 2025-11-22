import Head from "next/head";

export default function Harrow() {
  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Harrow | Extensions · Loft · New Build | WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawings for house extensions, loft conversions, new builds, planning permission and building regulation approval in Harrow. Fixed sensible fees and fast turnaround."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-12">

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-slate-900 mb-6">
          Architectural Drawings in Harrow
        </h1>

        {/* INTRO */}
        <p className="text-lg text-slate-700 leading-7 mb-8">
          WEDRAWPLANS delivers high quality architectural drawings for{" "}
          <strong>extensions, loft conversions, new builds, planning applications,</strong> and{" "}
          <strong>building regulation approval</strong> across the London Borough of Harrow.
          We offer fixed pricing, fast turnaround, and strong planning success for a wide range of
          residential projects.
        </p>

        {/* AREAS COVERED */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Areas We Cover in Harrow
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg text-slate-700">
            <li>Harrow</li>
            <li>Harrow on the Hill</li>
            <li>Kenton</li>
            <li>Wealdstone</li>
            <li>Rayners Lane</li>
            <li>Stanmore</li>
            <li>Pinner</li>
            <li>North Harrow</li>
            <li>South Harrow</li>
            <li>Hatch End</li>
            <li>Headstone</li>
            <li>Belsize</li>
          </ul>
        </section>

        {/* SERVICES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Our Services in Harrow
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-lg text-slate-700">
            <li>House extension drawings (rear · side · wraparound)</li>
            <li>Loft conversion drawings (dormer · hip-to-gable · L-shape · mansard)</li>
            <li>New build architectural planning & layouts</li>
            <li>Planning application drawings & submissions</li>
            <li>Full Building Regulation drawing packs</li>
            <li>Structural engineering support (beams & calculations)</li>
            <li>Party wall drawings and documentation</li>
            <li>Measured surveys and existing drawings</li>
          </ul>
        </section>

        {/* WHY CHOOSE US */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Why Homeowners in Harrow Choose WEDRAWPLANS
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-lg text-slate-700">
            <li>Strong experience with detached and semi-detached Harrow homes</li>
            <li>Fast turnaround — drawings prepared in days</li>
            <li>Clear fixed fees with no hidden extras</li>
            <li>Excellent planning success rates across Harrow</li>
            <li>Full support from survey to drawings to approval</li>
            <li>Professional, friendly and highly responsive</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-slate-100 p-6 rounded-xl text-center border">
          <h3 className="text-2xl font-semibold text-slate-900 mb-3">
            Get a Free Fixed-Fee Quote for Harrow
          </h3>

          <p className="text-lg text-slate-700 mb-6">
            Share your Harrow postcode and project type.  
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
