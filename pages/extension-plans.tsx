import React from "react";
import Head from "next/head";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20house%20extension%20plans";

export default function ExtensionPlansPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(Object.fromEntries(data.entries()));
    alert(
      "Thank you. In the live site this form will email WEDRAWPLANS with your full extension enquiry and trigger a same day call back."
    );
    e.currentTarget.reset();
  }

  function scrollToForm() {
    const el = document.getElementById("extension-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          House Extension Plans in London – WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Professional house extension planning drawings in London. Rear, side return, wrap around and two storey extension plans from £750 with fixed fees and fast turnaround."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* SIMPLE HEADER – logo + call + WhatsApp only */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 lg:px-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
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
            </div>

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
              <div
                id="extension-quote"
                className="lg:w-1/2"
              >
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed extension quote
                  </h2>
                  <p className="mt-1 text-[12px] text-slate-600">
                    Share a few details about your extension and receive a clear
                    fixed fee for your drawings. No obligation and no call centre.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-3 space-y-3 text-[13px]"
                  >
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

                    {/* Postcode – premium behaviour, same as homepage */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Postcode
                      </label>
                      <input
                        name="postcode"
                        required
                        placeholder="SE15 4LR"
                        onFocus={(e) => {
                          e.target.placeholder = "";
                        }}
                        onBlur={(e) => {
                          if (!e.target.value) {
                            e.target.placeholder = "SE15 4LR";
                          }
                        }}
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Extension type
                      </label>
                      <select
                        name="extensionType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      >
                        <option value="" disabled>
                          Select extension type
                        </option>
                        <option value="Rear extension">Rear extension</option>
                        <option value="Side return extension">Side return extension</option>
                        <option value="Wrap around extension">Wrap around extension</option>
                        <option value="Two storey extension">Two storey extension</option>
                        <option value="Kitchen extension">Kitchen extension</option>
                        <option value="Other extension type">Other extension type</option>
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
                      extensions and double storey extensions to the rear or side.
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
                Every project is different, but a typical house extension package will
                include the drawings needed for planning and, where required, for
                building regulation approval.
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
            </div>
          </section>

          {/* EXTENSION TYPES */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Extension types covered
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                WEDRAWPLANS prepare drawings for almost every common house extension
                type seen across London and the M25 area.
              </p>
              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Rear extensions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Ideal for creating larger kitchen and dining spaces. We look at
                    light, access to the garden, and how the new space connects to
                    the rest of the home.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Side return extensions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Common in Victorian and Edwardian terraces around Southwark,
                    Lewisham, Lambeth and beyond. We make use of the narrow side
                    strip to unlock more usable space.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Wrap around extensions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    A combination of rear and side return extension. We focus on
                    open plan layouts, daylight, structure and keeping the design
                    buildable on site.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Two storey extensions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Designed to add bedrooms, bathrooms or extra living space at
                    both ground and first floor, coordinated with structural designs
                    and planning constraints.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Kitchen and internal reconfiguration
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Many extensions are combined with internal wall removals and new
                    kitchen layouts. We plan the structure, kitchen zones and flow
                    together.
                  </p>
                </div>
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
                Pricing depends on size and complexity, but we always provide a clear
                fixed fee before you commit.
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
                    Existing and proposed floor plans and elevations set out for
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
                    On site measurement visit and preparation of accurate existing
                    drawings ready for design work.
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
                    with the structural engineer for building control.
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
                Tell us a little about your property and what you want to achieve.
                WEDRAWPLANS will come back with a clear fixed fee and suggested next
                steps, usually the same working day.
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
