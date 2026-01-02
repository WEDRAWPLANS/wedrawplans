import Head from "next/head";
import React from "react";
import { submitBoroughLead } from "../../lib/submitBoroughLead";


const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Westminster";

export default function WestminsterPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Westminster" });
  }

  function scrollToForm() {
    const el = document.getElementById("westminster-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Westminster – Extensions, Lofts and Refurbishments
        </title>
        <meta
          name="description"
          content="Planning drawings, extension layouts, loft conversion plans and building regulation packs for homes in Westminster, Marylebone, Pimlico, Soho, Fitzrovia and St Johns Wood. Fixed fees with clear scope."
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* HEADER */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/90 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 lg:px-6">
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-500 text-xs font-semibold tracking-[0.18em] text-red-700">
                WD
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

        {/* HERO + FORM */}
        <section className="border-b border-slate-200 bg-[#fdf8f3]">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 lg:flex-row lg:items-start lg:px-6 lg:py-10">
            {/* TEXT SIDE */}
            <div className="lg:w-1/2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                Westminster architectural drawings
              </p>

              <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                Planning drawings for extensions, lofts and home refurbishments
              </h1>

              <p className="mt-3 text-[13px] text-slate-700">
                We prepare planning and technical drawings for houses and flats across the City of
                Westminster, including Marylebone, Pimlico, Fitzrovia, Soho, St Johns Wood and
                Maida Vale.
              </p>

              <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                <li>• Rear and side extensions</li>
                <li>• Loft conversions and roof alterations</li>
                <li>• Internal reconfiguration of flats and mansion blocks</li>
                <li>• Basement and lower ground refurbishments</li>
                <li>• Conversions and high quality fit out drawings</li>
                <li>• Building regulation and tender packs</li>
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
            <div id="westminster-quote" className="lg:w-1/2">
              <div className="rounded-2xl bg-white p-5 shadow-md">
                <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Free fixed quote for your home
                </h2>
                <p className="mt-1 text-[12px] text-slate-600">
                  Tell us about your property and what you plan to build and we will send a clear
                  fixed fee for your drawings.
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
                      Westminster postcode
                    </label>
                    <input
                      name="postcode"
                      required
                      placeholder="W1, W2, W9, NW8 or SW1"
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
                        Select one
                      </option>
                      <option>Extension</option>
                      <option>Loft conversion</option>
                      <option>Internal remodelling</option>
                      <option>Basement or lower ground</option>
                      <option>Flat conversion</option>
                      <option>Building regulation pack</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-slate-700">
                      Project details
                    </label>
                    <textarea
                      name="projectDetails"
                      rows={4}
                      placeholder="Tell us about your Westminster project…"
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
              Typical projects in Westminster
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              The City of Westminster contains mansion blocks, townhouses, mews streets and
              mixed use buildings. Many homes are within conservation areas and some are listed,
              so careful design and presentation is important.
            </p>

            <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Extensions and garden level work
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Rear extensions to lower ground and garden levels, often combined with
                  internal alterations and new glazing.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Loft conversions and roof changes
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Mansard roofs, dormers and sensitive roof alterations designed to respect
                  views and local roof character.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Internal reconfiguration of flats
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  We adjust layouts, open up living spaces and coordinate with structural
                  engineers where walls are removed.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Basement and lower ground refurbishments
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Improved layouts, light wells and escape routes for lower levels, often tied
                  to fire and building regulation requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PLANNING GUIDANCE */}
        <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Planning guidance for Westminster
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Large parts of Westminster are covered by conservation areas and there are many
              listed buildings. Proposals must respect the character of the street, especially
              at the front elevation and on visible roofs.
            </p>

            <ul className="mt-4 space-y-2 text-[13px] text-slate-800">
              <li>• We review the planning history for your address</li>
              <li>• We check conservation area guidance for your street</li>
              <li>• We identify any Article 4 directions that remove permitted development</li>
              <li>• We prepare householder and listed building applications where needed</li>
            </ul>

            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Clear, well presented drawings and realistic proposals give the best chance of
              consent in sensitive central London locations.
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
                  from £950 + VAT
                </p>
                <p className="mt-2 text-[12px] text-slate-600">
                  Existing and proposed plans and elevations prepared for planning or lawful
                  development applications.
                </p>
              </div>

              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold text-slate-900">
                  Measured surveys
                </h3>
                <p className="mt-1 text-[13px] font-semibold text-slate-900">
                  from £250 + VAT
                </p>
                <p className="mt-2 text-[12px] text-slate-600">
                  Detailed measured surveys for flats and houses so drawings reflect existing
                  conditions accurately.
                </p>
              </div>

              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold text-slate-900">
                  Building regulation packs
                </h3>
                <p className="mt-1 text-[13px] font-semibold text-slate-900">
                  from £1,150 + VAT
                </p>
                <p className="mt-2 text-[12px] text-slate-600">
                  Technical sections, details and coordinated information ready for building
                  control and tender.
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
              Ready to obtain your planning approval?
            </h2>
            <p className="mt-3 text-[13px] text-slate-700">
              Use the form above to share a few details and we will respond with a clear fixed fee
              and suggested next steps for your extension, loft or refurbishment in Westminster.
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
      </div>
    </>
  );
}
