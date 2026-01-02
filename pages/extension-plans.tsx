import React from "react";
import Head from "next/head";
import Link from "next/link";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20house%20extension%20plans";

export default function ExtensionPlansPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Extension Plans" });
  }

  function scrollToForm() {
    const el = document.getElementById("extension-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>House Extension Plans in London – WEDRAWPLANS</title>
        <meta
          name="description"
          content="Professional house extension planning drawings in London. Rear, side return, wrap around and two storey extension plans from £750 with fixed fees and fast turnaround."
        />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/extension-plans"
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* SIMPLE HEADER – logo clickable + call + WhatsApp */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 lg:px-6">
            {/* Logo (CLICKABLE TO HOMEPAGE) */}
            <Link
              href="/"
              aria-label="Go to homepage"
              className="flex items-center gap-2"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-500 text-xs font-semibold tracking-[0.18em] text-red-700">
                WD
              </div>
              <div className="leading-tight">
                <div className="text-lg font-semibold tracking-[0.2em] uppercase">
                  WEDRAWPLANS
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  Architectural drawing consultants
                </div>
              </div>
            </Link>

            {/* Right: call + WhatsApp */}
            <div className="flex items-center gap-2">
              <a
                href={PHONE_LINK}
                className="hidden items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white sm:inline-flex"
              >
                <span>📞</span>
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-[#25D366] px-3 py-1.5 text-[12px] font-medium text-white shadow-sm hover:bg-[#1ebe57]"
              >
                <span>💬</span>
                <span className="hidden sm:inline">WhatsApp us</span>
                <span className="sm:hidden">Chat</span>
              </a>
            </div>
          </div>
        </header>

        {/* HERO */}
        <main>
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 lg:flex-row lg:items-start lg:px-6 lg:py-10">
              {/* Hero text */}
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  House extension planning drawings
                </p>

                <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900 sm:text-[26px]">
                  House extension plans in London at clear fixed fees
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  Professional planning drawings for rear, side return, wrap around
                  and two storey extensions. Fixed fees from £750 with fast measured
                  survey and clear communication throughout.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Fixed fee from £750</li>
                  <li>• Fast measured survey where needed</li>
                  <li>• Planning and building regulation packs available</li>
                  <li>• Covering all London boroughs and M25</li>
                  <li>• Same day response on most enquiries</li>
                  <li>• Phone, email and WhatsApp support</li>
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                  >
                    Get my fixed quote
                  </button>

                  <a
                    href={PHONE_LINK}
                    className="text-[13px] font-medium text-slate-800 underline"
                  >
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* Form card */}
              <div id="extension-quote" className="lg:w-1/2">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed extension quote
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Share a few details about your extension and receive a clear
                    fixed fee for your drawings.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    method="post"
                    className="mt-3 space-y-3 text-[13px]"
                  >
                    {/* hidden fields to track where the lead came from */}
                    <input
                      type="hidden"
                      name="leadSource"
                      value="extension-plans"
                    />
                    <input
                      type="hidden"
                      name="serviceType"
                      value="extensions"
                    />

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Name
                      </label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium text-slate-700">
                          Telephone
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium text-slate-700">
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Postcode
                      </label>
                      <input
                        name="postcode"
                        required
                        placeholder="SE15 4LR"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          if (!e.currentTarget.value)
                            e.currentTarget.placeholder = "SE15 4LR";
                        }}
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Extension type
                      </label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      >
                        <option value="" disabled>
                          Select extension type
                        </option>
                        <option>Rear extension</option>
                        <option>Side return extension</option>
                        <option>Wrap around extension</option>
                        <option>Two storey extension</option>
                        <option>Kitchen extension</option>
                        <option>Other extension type</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Tell us briefly about your project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={3}
                        placeholder="For example: rear kitchen extension with bifold doors and partial internal wall removal."
                        className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                    >
                      Get my quote
                    </button>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Popular: rear kitchen extensions, side returns, wrap around
                      and double storey extensions.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* WHAT YOU GET */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                What is included in your extension drawing pack
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                A typical house extension package includes the drawings needed for
                planning and, where required, for building regulation approval.
              </p>

              <div className="mt-4 grid gap-4 text-[13px] md:grid-cols-2">
                <ul className="space-y-1 text-slate-800">
                  <li>• Existing floor plans</li>
                  <li>• Proposed floor plans</li>
                  <li>• Existing elevations</li>
                  <li>• Proposed elevations</li>
                  <li>• Roof plan where applicable</li>
                  <li>• Key cross sections</li>
                  <li>• Site and block plan</li>
                </ul>

                <ul className="space-y-1 text-slate-800">
                  <li>• Basic drainage notes where required</li>
                  <li>• Window and door schedules</li>
                  <li>• Material notes and specifications</li>
                  <li>• General construction notes</li>
                  <li>• Coordination with structural engineer designs</li>
                  <li>• Optional 3D or massing views if helpful</li>
                </ul>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Get my fixed quote
                </button>
              </div>
            </div>
          </section>

          {/* EXTENSION TYPES */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Extension types we draw
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                WEDRAWPLANS prepare drawings for almost every common house extension
                type seen across London and the M25.
              </p>

              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Rear extensions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Ideal for creating larger kitchen and dining spaces. We plan
                    daylight, garden connection and a buildable layout.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Side return extensions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Common in Victorian and Edwardian terraces. We unlock the side
                    strip to create a wider, brighter kitchen and dining space.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Wrap around extensions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    A combination of rear and side return. We coordinate structure
                    and layout so the space feels open and works on site.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Two storey extensions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Adds bedrooms and bathrooms across two floors. We align the
                    design with planning constraints and structural design.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Request my fixed fee
                </button>
              </div>
            </div>
          </section>

          {/* PRICING */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Clear fixed fees for extension drawings
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Pricing depends on size and complexity, but we always provide a
                clear fixed fee before you commit.
              </p>

              <div className="mt-5 grid gap-4 text-[13px] md:grid-cols-3">
                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Extension planning drawings
                  </h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £750 + VAT
                  </div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Existing and proposed floor plans and elevations prepared for
                    planning or lawful development applications.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Measured survey
                  </h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £150 + VAT
                  </div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    On site measurement and accurate existing drawings ready for
                    design work.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Building regulation packs
                  </h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £950 + VAT
                  </div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Technical drawings, sections and construction notes coordinated
                    with the structural engineer for Building Control.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Request my fixed fee
                </button>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Ready to start your extension
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Tell us about your property and what you want to achieve. We will
                respond with a clear fixed fee and recommended next steps.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Get my extension quote
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  <span>💬</span>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
