import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Wandsworth";

export default function WandsworthAreaPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(Object.fromEntries(data.entries()));
    alert(
      "Thank you. In the live site this form will email WEDRAWPLANS with your Wandsworth enquiry and trigger a same day call back."
    );
    e.currentTarget.reset();
  }

  function scrollToForm() {
    const el = document.getElementById("wandsworth-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Wandsworth – Extensions, Lofts and New Builds
        </title>
        <meta
          name="description"
          content="Architectural drawings in Wandsworth for house extensions, loft conversions, flat conversions, new builds and building regulation packs. Fixed fees from £750 with fast turnaround."
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
              
              {/* TEXT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Wandsworth architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900 sm:text-[26px]">
                  Plans for extensions, lofts and new builds in Wandsworth
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house extensions,
                  loft conversions, flat conversions and new builds across the London
                  Borough of Wandsworth. Fixed fees with clear scope and fast communication.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Extensions, lofts and internal remodelling</li>
                  <li>• Flat conversions, maisonettes and layout redesigns</li>
                  <li>• New build houses and small residential schemes</li>
                  <li>• Planning drawings + building regulation packs</li>
                  <li>• Covering Battersea, Clapham Junction, Earlsfield, Putney and more</li>
                  <li>• Same day response on most enquiries</li>
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4]"
                  >
                    Get my Wandsworth quote
                  </button>

                  <a href={PHONE_LINK} className="text-[13px] font-medium text-slate-800 underline">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* FORM */}
              <div id="wandsworth-quote" className="lg:w-1/2">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed quote for Wandsworth projects
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your property in Wandsworth and what you plan
                    to build. We will send a clear fixed fee for your drawings.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                    
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium text-slate-700">Telephone</label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium text-slate-700">Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Wandsworth postcode
                      </label>
                      <input
                        name="postcode"
                        required
                        placeholder="SW18 3AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => {
                          if (!e.target.value) e.target.placeholder = "SW18 3AA";
                        }}
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-slate-500/70 focus:border-[#64b7c4] focus:text-slate-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">Project type</label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                      >
                        <option value="" disabled>Select project type</option>
                        <option value="House extension">House extension</option>
                        <option value="Loft conversion">Loft conversion</option>
                        <option value="Internal remodelling">Internal remodelling only</option>
                        <option value="New build house">New build house</option>
                        <option value="Conversion to flats">Conversion to self contained flats</option>
                        <option value="Building regulation pack only">Building regulation pack only</option>
                        <option value="Other project">Other domestic project</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Brief description of your Wandsworth project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear extension and loft conversion to a Victorian terrace in Earlsfield."
                        className="w-full rounded border border-slate-300 bg-white px-2 py-2 focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-white font-semibold uppercase tracking-[0.2em] shadow-sm hover:bg-[#4da4b4]"
                    >
                      Get my Wandsworth quote
                    </button>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Typical Wandsworth projects include extensions and loft conversions to
                      Victorian and Edwardian terraces, large semis, maisonettes and new build
                      infill opportunities.
                    </p>

                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* COMMON PROJECT TYPES */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">

              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Common project types in Wandsworth
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Wandsworth includes Victorian terraces, Edwardian houses, mansion flats
                and modern developments. Many owners extend, remodel or convert lofts
                to create brighter and more flexible homes.
              </p>

              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Rear and side extensions
                  </h3>
                  <p className="mt-2">
                    Popular throughout Battersea, Earlsfield, Balham and Tooting. We set out
                    structure, glazing and daylight carefully while respecting conservation
                    areas where relevant.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Loft conversions
                  </h3>
                  <p className="mt-2">
                    Rear dormers, hip to gable conversions and L-shape dormers for Victorian
                    terraces are all common. We design efficient layouts with stairs, fire
                    protection and head height in mind.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Flat conversions
                  </h3>
                  <p className="mt-2">
                    Larger houses are often split into self contained flats or enlarged into
                    maisonettes. We prepare layouts, stacking strategy, escape routes and
                    amenity space considerations.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    New build infill plots
                  </h3>
                  <p className="mt-2">
                    Side plots, garages and garden sites sometimes offer potential for new
                    dwellings. We prepare all drawings required for planning submission.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* LOCAL COVERAGE */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">

              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Areas of Wandsworth covered
              </h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                WEDRAWPLANS support projects across the entire borough, including:
              </p>

              <ul className="mt-4 grid gap-2 text-[13px] text-slate-800 md:grid-cols-2">
                <li>• Wandsworth Town</li>
                <li>• Battersea and Clapham Junction</li>
                <li>• Earlsfield and Southfields</li>
                <li>• Putney and Roehampton</li>
                <li>• Balham and Tooting borders</li>
                <li>• Surrounding neighbourhoods within the borough</li>
              </ul>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                Projects can be handled online or combined with an on-site measured survey.
              </p>

            </div>
          </section>

          {/* PRICING */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">

              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Clear fixed fees for Wandsworth projects
              </h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                Fees for Wandsworth projects follow the same clear structure as the rest
                of London, with adjustments for size and complexity.
              </p>

              <div className="mt-5 grid gap-4 text-[13px] md:grid-cols-3">
                
                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="font-semibold text-slate-900">Extension or loft planning drawings</h3>
                  <div className="mt-1 font-semibold text-slate-900">from £750 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Existing and proposed plans and elevations for householder planning or
                    lawful development applications.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="font-semibold text-slate-900">Measured survey in Wandsworth</h3>
                  <div className="mt-1 font-semibold text-slate-900">from £150 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Full on-site survey so accurate existing drawings can be prepared before
                    design work begins.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="font-semibold text-slate-900">Building regulation packs</h3>
                  <div className="mt-1 font-semibold text-slate-900">from £950 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Technical drawings, notes and construction sections coordinated with
                    structural engineers for building control approval.
                  </p>
                </div>

              </div>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white font-semibold uppercase tracking-[0.18em] shadow-sm hover:bg-[#4da4b4]"
                >
                  Request my Wandsworth fee
                </button>
              </div>

            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">

              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Ready to move your Wandsworth project forward
              </h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-2xl mx-auto">
                Share a few details and WEDRAWPLANS will reply with a clear fixed fee and
                recommended next steps for your Wandsworth extension, loft, new build or
                technical pack.
              </p>

              <div className="mt-5 flex justify-center gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Get my Wandsworth quote
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
