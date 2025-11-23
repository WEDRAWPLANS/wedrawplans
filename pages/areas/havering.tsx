import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Havering";

export default function HaveringAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  await submitBoroughLead(e, { boroughName: "Havering" });
}

  function scrollToForm() {
    const el = document.getElementById("havering-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Havering – Extensions, Lofts and New Builds
        </title>
        <meta
          name="description"
          content="Architectural drawings in Havering for house extensions, loft conversions, new builds, garage conversions and building regulation packs. Fixed fees from £750 with fast turnaround."
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* HEADER */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 lg:px-6">
            
            {/* BRAND */}
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-500 text-xs font-semibold tracking-[0.18em] text-red-700">
                WD
              </div>
              <div className="leading-tight">
                <div className="text-lg font-semibold uppercase tracking-[0.2em]">
                  WEDRAWPLANS
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  Architectural drawing consultants
                </div>
              </div>
            </div>

            {/* CONTACT */}
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
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-[#25D366] px-3 py-1.5 text-[12px] text-white shadow-sm hover:bg-[#1ebe57]"
              >
                💬 <span className="hidden sm:inline">WhatsApp us</span>
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
                  Havering architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900">
                  Plans for extensions, lofts and conversions in Havering
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house
                  extensions, loft conversions, garage conversions, internal remodelling,
                  and new builds across the London Borough of Havering. Fixed fees with
                  clear scope and fast communication.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• House extensions and structural remodelling</li>
                  <li>• Loft conversions and roof alterations</li>
                  <li>• Garage conversions and outbuildings</li>
                  <li>• New build houses and small developments</li>
                  <li>• Covering Romford, Hornchurch, Upminster, Rainham, Elm Park and Harold Wood</li>
                  <li>• Same day response on all enquiries</li>
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    onClick={scrollToForm}
                    type="button"
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4]"
                  >
                    Get my Havering quote
                  </button>

                  <a
                    href={PHONE_LINK}
                    className="text-[13px] font-medium text-slate-800 underline"
                  >
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* FORM */}
              <div id="havering-quote" className="lg:w-1/2">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed quote for Havering projects
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us about your property in Havering and what you plan to build.
                    We will send a clear fixed fee with next steps.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">

                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Name
                      </label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* Phone + Email */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium text-slate-700">
                          Telephone
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
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
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                        />
                      </div>
                    </div>

                    {/* Postcode */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Havering postcode
                      </label>
                      <input
                        name="postcode"
                        required
                        placeholder="RM1 3AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => { if (!e.target.value) e.target.placeholder = "RM1 3AA"; }}
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-slate-500/70 focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* Project type */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Project type
                      </label>
                      <select
                        name="projectType"
                        defaultValue=""
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                      >
                        <option value="" disabled>Select project type</option>
                        <option value="House extension">House extension</option>
                        <option value="Loft conversion">Loft conversion</option>
                        <option value="Garage conversion">Garage conversion</option>
                        <option value="Internal remodelling">Internal remodelling only</option>
                        <option value="New build house">New build house</option>
                        <option value="Conversion to flats">Conversion to flats</option>
                        <option value="Building regulation pack only">Building regulation pack only</option>
                        <option value="Other project">Other domestic project</option>
                      </select>
                    </div>

                    {/* Description */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Brief description of your Havering project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: double storey rear extension to detached house in Hornchurch with new loft conversion."
                        className="w-full rounded border border-slate-300 bg-white px-2 py-2 focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-[#4da4b4]"
                    >
                      Get my Havering quote
                    </button>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Typical Havering projects include extensions, lofts, garage conversions
                      and new builds across Romford, Hornchurch, Upminster and surrounding areas.
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
                Common project types in Havering
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Havering has many detached, semi detached and bungalow homes, offering
                strong potential for large extensions, loft conversions, garage conversions
                and full internal reconfiguration. Plot sizes also create opportunities for
                new build homes.
              </p>

              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                
                {/* Extensions */}
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Rear, side and wrap extensions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Many Havering homeowners extend to create open plan kitchen, dining and
                    living spaces. We set out layouts, structural openings and glazing to suit
                    planning guidance.
                  </p>
                </div>

                {/* Lofts */}
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Rear dormer and hip to gable lofts are common across Romford, Hornchurch
                    and Upminster. We design compliant layouts with suitable stairs, fire
                    escape and headroom.
                  </p>
                </div>

                {/* Garage conversions */}
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Garage conversions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Many garages in Havering are suitable for conversion into habitable rooms.
                    We prepare plans for planning/lawful use where required and full building
                    regulation details.
                  </p>
                </div>

                {/* New builds */}
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    New build and infill plots
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Large plots in Havering often allow potential for additional homes. We
                    produce layouts, elevations and planning drawings for new dwellings.
                  </p>
                </div>

              </div>

            </div>
          </section>

          {/* AREAS COVERED */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">

              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Areas of Havering covered
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                WEDRAWPLANS support projects across all neighbourhoods in Havering:
              </p>

              <ul className="mt-4 grid gap-2 text-[13px] text-slate-800 md:grid-cols-2">
                <li>• Romford</li>
                <li>• Hornchurch</li>
                <li>• Upminster</li>
                <li>• Rainham</li>
                <li>• Elm Park</li>
                <li>• Collier Row</li>
                <li>• Harold Hill & Harold Wood</li>
                <li>• Emerson Park</li>
              </ul>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Drawings can be fully managed online or supported by on-site measured surveys.
              </p>

            </div>
          </section>

          {/* PRICING */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">

              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Clear fixed fees for Havering projects
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Fees for Havering projects follow the same clear structure as the rest of
                London, with adjustments for larger properties or new build schemes.
              </p>

              <div className="mt-5 grid gap-4 text-[13px] md:grid-cols-3">

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Extension or loft planning drawings
                  </h3>
                  <div className="mt-1 font-semibold text-slate-900">from £750 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Existing and proposed drawings for householder planning or lawful development.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Measured survey in Havering
                  </h3>
                  <div className="mt-1 font-semibold text-slate-900">from £150 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Full on-site survey prior to drawing production.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Building regulation packs
                  </h3>
                  <div className="mt-1 font-semibold text-slate-900">from £950 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Technical construction notes, sections and details coordinated with structural engineers.
                  </p>
                </div>

              </div>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4]"
                >
                  Request my Havering fee
                </button>
              </div>

            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10">

            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">

              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Ready to move your Havering project forward?
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed fee
                and suggested next steps for your Havering extension, loft, conversion
                or new build home.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">

                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4]"
                >
                  Get my Havering quote
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
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
