import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>WEDRAWPLANS – London house extension drawings made easy</title>
        <meta
          name="description"
          content="Planning drawings that win approvals and create build ready quotes for extensions, lofts, conversions and new builds across London and the M25."
        />
      </Head>

      <main className="min-h-screen bg-slate-50">
        {/* Top bar */}
        <header className="w-full border-b bg-white">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-lg font-semibold tracking-wide">
              <span className="text-red-600">WEDRAWPLANS</span>
              <span className="ml-1 hidden text-slate-600 sm:inline">
                — London house extension drawings made easy
              </span>
            </div>

            <div className="flex flex-col items-start gap-1 text-sm sm:flex-row sm:items-center sm:gap-4">
              <a
                href="tel:+442036548508"
                className="font-medium text-slate-900"
              >
                +44 20 3654 8508
              </a>
              <a
                href="mailto:info@wedrawplans.com"
                className="text-slate-600 underline underline-offset-2"
              >
                info@wedrawplans.com
              </a>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                Open today for new enquiries
              </span>
            </div>
          </div>
        </header>

        {/* Hero + form */}
        <section className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 lg:flex-row lg:items-start lg:py-12">
          {/* Left: copy */}
          <div className="w-full lg:w-1/2">
            <p className="mb-3 inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sky-700">
              London house extension drawings made easy
            </p>

            <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Planning drawings that win approvals and create build ready quotes
            </h1>

            <p className="mb-4 text-sm text-slate-600 sm:text-base">
              Fast, clear, council compliant drawings for extensions, lofts,
              conversions and new builds across London and the M25. Share your
              details for a free call and same day outline quote.
            </p>

            <ul className="mb-6 space-y-2 text-sm text-slate-700">
              <li>✔ Council compliant drawings</li>
              <li>✔ Fixed transparent pricing</li>
              <li>✔ Initial survey within 48 hours</li>
              <li>✔ Aligned to UK 2025 Building Regulations</li>
            </ul>

            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="tel:+442036548508"
                className="rounded-full bg-slate-900 px-5 py-2 font-medium text-white"
              >
                Call now
              </a>
              <a
                href="mailto:info@wedrawplans.com"
                className="rounded-full border border-slate-300 px-5 py-2 font-medium text-slate-800"
              >
                Email us
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl bg-white p-5 shadow-md sm:p-6">
              <h2 className="mb-1 text-xl font-semibold text-slate-900">
                Get your free call and outline quote
              </h2>
              <p className="mb-4 text-xs text-slate-500 sm:text-sm">
                No obligation. We respond within one business day.
              </p>

              {/* Simple email form using FormSubmit */}
              <form
                className="space-y-4"
                action="https://formsubmit.co/info@wedrawplans.com"
                method="POST"
              >
                {/* FormSubmit options */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New WEDRAWPLANS planning enquiry"
                />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    Full name
                  </label>
                  <input
                    required
                    name="Full name"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-0 focus:border-slate-500"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="Email"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
                    placeholder="you@email.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    Phone
                  </label>
                  <input
                    required
                    name="Phone"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
                    placeholder="Mobile or landline"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    Project postcode
                  </label>
                  <input
                    name="Postcode"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
                    placeholder="e.g. SE5 7GD"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    What do you need help with
                  </label>
                  <textarea
                    name="Project details"
                    rows={3}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
                    placeholder="Rear extension, loft conversion, new build, change of use..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700"
                >
                  Request my free call
                </button>

                <p className="text-xs text-slate-500">
                  By sending this form you agree that WEDRAWPLANS may contact
                  you about your project. We never share your details with
                  marketers.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
