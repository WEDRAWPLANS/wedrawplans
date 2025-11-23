import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Hillingdon";

export default function HillingdonAreaPage() {
 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  await submitBoroughLead(e, { boroughName: "Hillingdon" });
}

  function scrollToForm() {
    const el = document.getElementById("hillingdon-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Hillingdon – Extensions, Lofts and New Builds
        </title>
        <meta
          name="description"
          content="Architectural drawings in Hillingdon for house extensions, loft conversions, new builds and building regulation packs. Fixed fees from £750 with fast turnaround."
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* SIMPLE HEADER */}
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

        <main>
          {/* HERO + FORM */}
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 lg:flex-row lg:items-start lg:px-6 lg:py-10">
              {/* Left text */}
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Hillingdon architectural drawings
                </p>
                <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900 sm:text-[26px]">
                  Plans for extensions, lofts and new builds in Hillingdon
                </h1>
                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house
                  extensions, loft conversions, new builds and conversions across
                  the London Borough of Hillingdon. Fixed fees with clear scope
                  and fast communication.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Rear, side and wrap-around extensions</li>
                  <li>• Loft conversions and internal remodelling</li>
                  <li>• New build houses and infill developments</li>
                  <li>• Planning drawings and building regulation packs</li>
                  <li>• Covering Uxbridge, Hayes, Ruislip, Hillingdon, West Drayton & more</li>
                  <li>• Same day response on most enquiries</li>
                </ul>

                <div className="mt-5 flex flex_wrap items_center gap-3">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4]"
                  >
                    Get my Hillingdon quote
                  </button>

                  <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* Right form */}
              <div id="hillingdon-quote" className="lg:w-1/2">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed quote for Hillingdon projects
                  </h2>
                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your property in Hillingdon and what you
                    plan to build. We will send a clear fixed fee for your drawings.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-700 font-medium">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label className="text-[11px] text-slate-700 font-medium">
                          Telephone
                        </label>
                        <input
                          name="phone"
                          required
                          type="tel"
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] text-slate-700 font-medium">Email</label>
                        <input
                          name="email"
                          required
                          type="email"
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-700 font-medium">
                        Hillingdon postcode
                      </label>
                      <input
                        name="postcode"
                        required
                        placeholder="UB10 9AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                          !e.target.value && (e.target.placeholder = "UB10 9AA")
                        }
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-700 font-medium">
                        Project type
                      </label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b bg-transparent border-slate-300 px-1 py-1.5 focus:border-[#64b7c4]"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        <option value="House extension">House extension</option>
                        <option value="Loft conversion">Loft conversion</option>
                        <option value="Internal remodelling">
                          Internal remodelling only
                        </option>
                        <option value="New build house">New build house</option>
                        <option value="Conversion to flats">
                          Conversion to self contained flats
                        </option>
                        <option value="Building regulation pack only">
                          Building regulation pack only
                        </option>
                        <option value="Other project">Other domestic project</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-700 font-medium">
                        Brief description of your Hillingdon project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: wrap-around extension and loft conversion to a semi-detached house in Hillingdon."
                        className="w-full border rounded border-slate-300 bg-white px-2 py-2 focus:border-[#64b7c4]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] text-white font-semibold uppercase tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get my Hillingdon quote
                    </button>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Typical Hillingdon projects include extensions and loft conversions
                      to semis and detached houses, as well as new build opportunities
                      on side plots and larger gardens.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* COMMON PROJECT TYPES */}
          <section className="border-b bg-white border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                Common project types in Hillingdon
              </h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                Hillingdon features 1930s semis, post-war family houses and suburban
                detached homes. Many owners extend, convert lofts or remodel interiors
                to create larger open plan living spaces.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-5 text-[13px]">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em]">
                    Rear and side extensions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Large kitchen extensions, side returns and wrap-around schemes are
                    common across Uxbridge, Hayes and Ruislip. We design efficient
                    layouts with structure and daylight carefully planned.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em]">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Dormer and hip-to-gable conversions add bedrooms and bathrooms to
                    Hillingdon homes. We set out stairs, headroom and fire protection
                    correctly for building control.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em]">
                    New build and infill plots
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Larger gardens, side plots and suburban gaps offer opportunities for
                    new build houses. We provide full planning packages.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em]">
                    Conversions to flats
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Some larger Hillingdon properties can be converted to multiple units.
                    We prepare layouts, access plans and amenity details for planning.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* AREAS */}
          <section className="border-b bg-[#f8f4f0] border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold text-slate-900">
                Areas of Hillingdon covered
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                WEDRAWPLANS support projects across the whole borough, including:
              </p>

              <ul className="grid md:grid-cols-2 gap-2 mt-4 text-[13px] text-slate-800">
                <li>• Uxbridge and Hillingdon</li>
                <li>• Hayes, Yeading and Harlington</li>
                <li>• Ruislip, Ickenham and Eastcote</li>
                <li>• West Drayton and Yiewsley</li>
                <li>• Northwood and Harefield</li>
                <li>• Surrounding neighbourhoods within Hillingdon</li>
              </ul>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Projects can be managed fully online or with on-site measured surveys
                when required.
              </p>
            </div>
          </section>

          {/* PRICING */}
          <section className="border-b bg-white py-10 border-slate-200">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="uppercase text-[18px] tracking-[0.16em] font-semibold text-slate-900">
                Clear fixed fees for Hillingdon projects
              </h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                Fees for Hillingdon follow the same structure as the rest of London,
                adjusted for size and complexity.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-5 text-[13px]">
                <div className="border rounded-md p-4 bg-[#fdf8f3] border-slate-200">
                  <h3 className="font-semibold text-slate-900">
                    Extension or loft planning drawings
                  </h3>
                  <div className="mt-1 font-semibold">from £750 + VAT</div>
                  <p className="text-[12px] mt-2 text-slate-600">
                    Existing and proposed plans and elevations for planning or lawful
                    development applications.
                  </p>
                </div>

                <div className="border rounded-md p-4 bg-[#fdf8f3] border-slate-200">
                  <h3 className="font-semibold text-slate-900">
                    Measured survey in Hillingdon
                  </h3>
                  <div className="mt-1 font-semibold">from £150 + VAT</div>
                  <p className="text-[12px] mt-2 text-slate-600">
                    On-site measured survey to prepare accurate existing drawings before
                    design work begins.
                  </p>
                </div>

                <div className="border rounded-md p-4 bg-[#fdf8f3] border-slate-200">
                  <h3 className="font-semibold text-slate-900">
                    Building regulation packs
                  </h3>
                  <div className="mt-1 font-semibold">from £950 + VAT</div>
                  <p className="text-[12px] mt-2 text-slate-600">
                    Technical drawings, construction notes and sections coordinated with
                    structural engineers.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <button
                  onClick={scrollToForm}
                  type="button"
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] uppercase tracking-[0.18em] text-white font-semibold hover:bg-[#4da4b4]"
                >
                  Request my Hillingdon fee
                </button>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="py-10 bg-[#f8f4f0]">
            <div className="mx-auto text-center max-w-5xl px-4 lg:px-6">
              <h2 className="uppercase text-[18px] font-semibold tracking-[0.16em] text-slate-900">
                Ready to move your Hillingdon project forward
              </h2>
              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed
                fee and next steps for your Hillingdon extension, loft or new build.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                >
                  Get my Hillingdon quote
                </button>

                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] hover:bg-slate-900 hover:text-white text-slate-800"
                >
                  💬 <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
