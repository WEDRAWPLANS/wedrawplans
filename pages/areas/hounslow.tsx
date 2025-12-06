import { submitBoroughLead } from "../../lib/submitBoroughLead";
import React from "react";
import Head from "next/head";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Hounslow";

export default function HounslowAreaPage() {
  
async function handleHounslowSubmit(e: React.FormEvent<HTMLFormElement>) {
  await submitBoroughLead(e, { boroughName: "Hounslow" });
}

  function scrollToForm() {
    const el = document.getElementById("hounslow-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Hounslow – Extensions, Lofts and New Builds
        </title>
        <meta
          name="description"
          content="Architectural drawings in Hounslow for house extensions, loft conversions, new builds, flat conversions and building regulation packs. Fixed fees from £750 with fast turnaround."
        />
      <link rel="canonical" href="https://wedrawplans.co.uk/hounslow" />
<meta name="robots" content="noindex,follow" />

      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* HEADER */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 lg:px-6">
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
            <div className="flex items-center gap-2">
              <a
                href={PHONE_LINK}
                className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] shadow-sm hover:bg-slate-900 hover:text-white"
              >
                📞 {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="inline-flex items-center gap-1 bg-[#25D366] px-3 py-1.5 rounded-full text-[12px] text-white shadow-sm hover:bg-[#1ebe57]"
              >
                💬 <span className="hidden sm:inline">WhatsApp us</span>
              </a>
            </div>
          </div>
        </header>

        <main>
          {/* HERO SECTION */}
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">

              {/* LEFT TEXT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] uppercase font-semibold tracking-[0.26em] text-red-700">
                  Hounslow architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] uppercase font-semibold leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and new builds in Hounslow
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house
                  extensions, loft conversions, flat conversions and new builds across
                  the London Borough of Hounslow. Fixed fees with clear scope and fast communication.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Rear, side and wrap-around extensions</li>
                  <li>• Loft conversions to terraces and semis</li>
                  <li>• Internal reconfiguration and layout redesign</li>
                  <li>• New build houses and small residential plots</li>
                  <li>• Planning drawings + building regulation packs</li>
                  <li>• Covering Hounslow, Isleworth, Brentford, Chiswick & Feltham</li>
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-[#64b7c4] text-white px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                  >
                    Get my Hounslow quote
                  </button>

                  <a href={PHONE_LINK} className="underline text-[13px] text-slate-800">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div id="hounslow-quote" className="lg:w-1/2">
                <div className="p-5 bg-white rounded-2xl shadow-md">
                  <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em]">
                    Free fixed quote for Hounslow projects
                  </h2>
                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us about your property in Hounslow. We will send a clear fixed fee for your drawings.
                  </p>

                  <form onSubmit={handleHounslowSubmit} className="mt-3 space-y-3 text-[13px]">

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4]"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Telephone</label>
                        <input
                          name="phone"
                          required
                          type="tel"
                          className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Email</label>
                        <input
                          name="email"
                          required
                          type="email"
                          className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Hounslow postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="TW3 4AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "TW3 4AA")}
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Project type</label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4]"
                      >
                        <option value="" disabled>Select project type</option>
                        <option>House extension</option>
                        <option>Loft conversion</option>
                        <option>Internal remodelling</option>
                        <option>New build house</option>
                        <option>Conversion to flats</option>
                        <option>Building regulation pack only</option>
                        <option>Other domestic project</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Brief description of your Hounslow project</label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear extension and loft conversion to a 1930s terrace in Hounslow with open plan kitchen."
                        className="w-full border border-slate-300 rounded px-2 py-2 bg-white focus:border-[#64b7c4]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#64b7c4] py-2.5 text-white uppercase tracking-[0.2em] text-[13px] hover:bg-[#4da4b4]"
                    >
                      Get my Hounslow quote
                    </button>

                    <p className="text-[11px] text-slate-500 mt-2">
                      Typical Hounslow projects include extensions, lofts, and flat conversions across
                      Hounslow, Isleworth, Brentford and Chiswick.
                    </p>
                  </form>
                </div>
              </div>

            </div>
          </section>

          {/* COMMON PROJECT TYPES */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">
              <h2 className="text-[18px] uppercase font-semibold tracking-[0.16em]">
                Common project types in Hounslow
              </h2>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                Hounslow has a mix of Victorian terraces, interwar semis, and modern estates.
                Many homeowners extend or convert lofts to add space without moving.
              </p>

              <div className="mt-5 grid md:grid-cols-2 gap-5 text-[13px]">

                <div>
                  <h3 className="text-[14px] uppercase font-semibold tracking-[0.14em]">
                    Rear & wrap-around extensions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Extensions to create large kitchen and dining spaces are common across Hounslow,
                    Isleworth and Brentford. We plan structure and daylight carefully.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] uppercase font-semibold tracking-[0.14em]">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Dormer and hip-to-gable conversions add bedrooms and bathrooms to 1930s semis
                    and terraces across TW3, TW4 and TW7.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] uppercase font-semibold tracking-[0.14em]">
                    Flat conversions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Suitable houses can be converted into self-contained flats. We prepare layouts
                    and amenity plans in line with Hounslow policies.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] uppercase font-semibold tracking-[0.14em]">
                    New build plots
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Side land and deep gardens often allow opportunities for small new build schemes
                    near transport hubs.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* AREAS */}
          <section className="bg-[#f8f4f0] border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">
              <h2 className="text-[18px] uppercase font-semibold tracking-[0.16em]">
                Areas of Hounslow covered
              </h2>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                WEDRAWPLANS support projects across the whole borough, including:
              </p>

              <ul className="mt-4 grid md:grid-cols-2 gap-2 text-[13px] text-slate-800">
                <li>• Hounslow, Hounslow Central & Hounslow West</li>
                <li>• Isleworth & Osterley</li>
                <li>• Brentford</li>
                <li>• Chiswick</li>
                <li>• Feltham & Hanworth</li>
                <li>• Cranford & Heston</li>
              </ul>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                We can work fully remotely, or conduct a full measured survey on site when required.
              </p>
            </div>
          </section>

          {/* PRICING */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">

              <h2 className="text-[18px] uppercase font-semibold tracking-[0.16em]">
                Clear fixed fees for Hounslow projects
              </h2>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                Fees follow the same clear structure across London, with adjustments for size
                and project complexity.
              </p>

              <div className="mt-5 grid md:grid-cols-3 gap-4 text-[13px]">

                <div className="p-4 bg-[#fdf8f3] border border-slate-200 rounded-md">
                  <h3 className="font-semibold">Extension or loft planning drawings</h3>
                  <div className="mt-1 font-semibold">from £750 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Full existing & proposed plans/elevations for planning applications.
                  </p>
                </div>

                <div className="p-4 bg-[#fdf8f3] border border-slate-200 rounded-md">
                  <h3 className="font-semibold">Measured survey in Hounslow</h3>
                  <div className="mt-1 font-semibold">from £150 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Accurate laser-measured site survey for drawings.
                  </p>
                </div>

                <div className="p-4 bg-[#fdf8f3] border border-slate-200 rounded-md">
                  <h3 className="font-semibold">Building regulation packs</h3>
                  <div className="mt-1 font-semibold">from £950 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Detailed construction drawings coordinated with structural engineers.
                  </p>
                </div>

              </div>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[13px] uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Request my Hounslow fee
                </button>
              </div>

            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="max-w-5xl mx-auto text-center px-4 lg:px-6">

              <h2 className="text-[18px] uppercase font-semibold tracking-[0.16em]">
                Ready to move your Hounslow project forward
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed fee
                and recommended next steps for your Hounslow extension, loft, conversion or new build.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white uppercase tracking-[0.18em] text-[13px] hover:bg-[#4da4b4]"
                >
                  Get my Hounslow quote
                </button>

                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>

            </div>
          </section>

        </main>
      </div>
    </>
  );
}
