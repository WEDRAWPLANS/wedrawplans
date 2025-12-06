import Head from "next/head";
import React from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";
import { SmartPlanningAssistant } from "../components/SmartPlanningAssistant";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Merton";

export default function MertonPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Merton" });
  }

  function scrollToForm() {
    const el = document.getElementById("merton-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Merton – Extensions, Lofts and Home Projects
        </title>
        <meta
          name="description"
          content="Planning drawings, extension layouts, loft conversion plans and building regulation packs for homes in Wimbledon, Mitcham, Morden and the wider London Borough of Merton. Fixed fees with clear scope."
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* HEADER */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/90 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 lg:px-6">
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-500 text-xs font-semibold tracking-[0.18em] text-red-700">
                WDP
              </div>
              <div>
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
                className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-900 hover:bg-slate-900 hover:text-white"
              >
                📞 {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-1.5 text-[12px] font-medium text-white hover:bg-[#1ebe57]"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </header>

        <main>
          {/* HERO + FORM */}
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 lg:flex-row lg:items-start lg:px-6 lg:py-10">
              {/* TEXT SIDE */}
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Merton architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Planning drawings for extensions, lofts and home upgrades
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepares planning and technical drawings for houses and flats across
                  the London Borough of Merton, including Wimbledon, Mitcham, Morden, Colliers Wood
                  and Raynes Park.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Rear and side extensions to family homes</li>
                  <li>• Loft conversions with dormers or hip to gable roofs</li>
                  <li>• Internal remodelling and open plan layouts</li>
                  <li>• Conversions and small residential schemes</li>
                  <li>• Building regulation and construction packs</li>
                  <li>• Support from first sketch through to detailed drawings</li>
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                  >
                    Get my quote
                  </button>
                  <a
                    href={PHONE_LINK}
                    className="text-[13px] font-medium text-slate-800 underline"
                  >
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* FORM SIDE */}
              <div id="merton-quote" className="lg:w-1/2">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed quote for your home
                  </h2>
                  <p className="mt-1 text-[12px] text-slate-600">
                    Share some basic details and WEDRAWPLANS will send a clear fixed fee for the
                    drawings for your project in Merton.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                    <div>
                      <label className="text-[11px] font-medium text-slate-700">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-medium text-slate-700">
                          Telephone
                        </label>
                        <input
                          name="phone"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-medium text-slate-700">Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-700">
                        Merton postcode
                      </label>
                      <input
                        name="postcode"
                        required
                        placeholder="SW19, CR4 or SM4"
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-700">
                        Project type
                      </label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        <option value="Rear extension">Rear extension</option>
                        <option value="Side or wrap extension">Side or wrap extension</option>
                        <option value="Loft conversion">Loft conversion</option>
                        <option value="Internal remodelling">Internal remodelling</option>
                        <option value="Conversion to flats">Conversion to flats</option>
                        <option value="New build house">New build house</option>
                        <option value="Building regulation pack">Building regulation pack only</option>
                        <option value="Other project">Other domestic project</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-700">
                        Brief description
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear extension and loft conversion to a terraced house in Wimbledon with new open plan kitchen."
                        className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                    >
                      Get my quote
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* COMMON PROJECT TYPES */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Typical home projects in Merton
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Merton includes Victorian and Edwardian terraces, post war houses and newer
                developments. Many owners extend or reconfigure their existing home to create more
                family space instead of moving.
              </p>

              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Rear and side extensions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Rear kitchen and living extensions, often combined with side infill to create
                    wider open plan rooms with better connection to the garden.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Dormer and hip to gable loft conversions to add bedrooms and bathrooms above,
                    designed to respect local roof guidance where it applies.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Internal remodelling
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Adjusting layouts, removing walls with structural input and making better use of
                    ground floor and first floor space for day to day living.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Conversions and small schemes
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Feasibility layouts and full planning drawings for small infill plots and
                    conversions to self contained flats where local policies allow.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SMART PLANNING ASSISTANT – WDP TOOL */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <SmartPlanningAssistant boroughName="Merton" />
            </div>
          </section>

          {/* PLANNING GUIDANCE */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Planning guidance for Merton
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Merton has local guidance on house extensions, roof enlargements, daylight, outlook
                and neighbour impact. Many projects are possible when size, height and windows are
                set out carefully.
              </p>

              <ul className="mt-4 space-y-2 text-[13px] text-slate-800">
                <li>• Review of local policies that relate to your street</li>
                <li>• Checks on whether permitted development rights still apply</li>
                <li>• Preparation of householder or full planning applications</li>
                <li>• Coordination with structural engineers where needed</li>
              </ul>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                The aim is to give the council a clear and professional set of drawings that show
                how your proposal fits with the property and the wider terrace or street.
              </p>
            </div>
          </section>

          {/* FEES */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Clear fixed fees for your home project
              </h2>

              <div className="mt-5 grid gap-4 text-[13px] md:grid-cols-3">
                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Planning drawings
                  </h3>
                  <p className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £750 + VAT
                  </p>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Existing and proposed plans and elevations ready for planning or lawful
                    development applications.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Measured surveys
                  </h3>
                  <p className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £150 + VAT
                  </p>
                  <p className="mt-2 text-[12px] text-slate-600">
                    On site measured surveys so existing drawings reflect the property accurately
                    before design begins.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Building regulation packs
                  </h3>
                  <p className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £950 + VAT
                  </p>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Technical sections, details and coordinated notes ready for building control
                    and tender.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={scrollToForm}
                className="mt-5 rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
              >
                Request my fixed fee
              </button>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Ready to obtain your planning approval
              </h2>
              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will respond with a clear fixed fee and suggested
                next steps for your extension, loft or internal remodelling in Merton.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                >
                  Get my quote
                </button>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
