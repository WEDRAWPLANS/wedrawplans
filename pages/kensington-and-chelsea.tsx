import Head from "next/head";
import React from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Kensington%20and%20Chelsea";

export default function KensingtonAndChelseaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Kensington and Chelsea" });
  }

  function scrollToForm() {
    const el = document.getElementById("kensington-chelsea-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Kensington and Chelsea – Extensions, Lofts and Planning
        </title>
        <meta
          name="description"
          content="Planning drawings, extension layouts, loft conversion plans and building regulation packs for homes in Kensington, Chelsea, Notting Hill, Earls Court and South Kensington. Fixed fees with clear scope."
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
                Kensington and Chelsea architectural drawings
              </p>

              <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                Planning drawings for extensions, lofts and refurbishments
              </h1>

              <p className="mt-3 text-[13px] text-slate-700">
                We prepare planning and technical drawings for houses and flats across the
                Royal Borough of Kensington and Chelsea, including Notting Hill, Chelsea,
                South Kensington, Earls Court and Ladbroke Grove.
              </p>

              <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                <li>• Rear, side and roof extensions</li>
                <li>• Loft conversions and roof alterations</li>
                <li>• Internal reconfiguration of flats and maisons</li>
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
            <div id="kensington-chelsea-quote" className="lg:w-1/2">
              <div className="rounded-2xl bg-white p-5 shadow-md">
                <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Free fixed quote for your home
                </h2>
                <p className="mt-1 text-[12px] text-slate-600">
                  Share some details about your property and what you plan to build and we will
                  send a clear fixed fee for your drawings.
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
                      Kensington and Chelsea postcode
                    </label>
                    <input
                      name="postcode"
                      required
                      placeholder="SW3 5XX or W11 2XX"
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
                      placeholder="Tell us about your Kensington or Chelsea project…"
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
              Typical projects in Kensington and Chelsea
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              The borough has a high proportion of listed buildings, mansion blocks and
              conservation areas. Careful, well presented drawings are important when seeking
              planning consent.
            </p>

            <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Rear and side extensions
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  High quality extensions to garden level, lower ground and upper floors, with
                  attention to glazing, privacy and materials.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Loft conversions and roof works
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Sensitive roof extensions, dormers and terraces designed to respect local roof
                  lines and conservation guidance.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Internal reconfiguration
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  We rationalise internal layouts, combine rooms and coordinate with structural
                  engineers where walls are removed.
                </p>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Basement and lower ground refurbishments
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Improved layouts, light wells and escape routes for lower ground and basement
                  levels, often with separate access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PLANNING GUIDANCE */}
        <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Planning guidance for Kensington and Chelsea
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Much of the borough falls within conservation areas and includes listed buildings.
              Proposals need to respect existing character, especially at the front and on visible
              roofscapes.
            </p>

            <ul className="mt-4 space-y-2 text-[13px] text-slate-800">
              <li>• We review conservation policies that apply to your street</li>
              <li>• We check Article 4 directions that limit permitted development</li>
              <li>• We prepare full householder and listed building applications</li>
              <li>• We work with structural engineers for complex alterations</li>
            </ul>

            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Clear, well structured drawings with supporting statements often achieve positive
              outcomes even in sensitive areas when proposals are carefully considered.
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
              and suggested next steps for your extension, loft or refurbishment in Kensington and
              Chelsea.
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
