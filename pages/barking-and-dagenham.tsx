import Head from "next/head";
import React from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Barking%20and%20Dagenham";

export default function BarkingAndDagenhamPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Barking and Dagenham" });
  }

  function scrollToForm() {
    const el = document.getElementById("bd-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Barking & Dagenham – Extensions, Lofts & New Homes
        </title>
        <meta
          name="description"
          content="Planning drawings and building regulation plans for extensions, loft conversions, new homes and conversions in Barking & Dagenham. Fixed fees with fast turnaround."
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
                className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white"
              >
                📞 {PHONE_DISPLAY}
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-1.5 text-[12px] font-medium text-white shadow-sm hover:bg-[#1ebe57]"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </header>

        {/* HERO + FORM */}
        <section className="border-b border-slate-200 bg-[#fdf8f3]">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 lg:flex-row lg:items-start lg:px-6 lg:py-10">
            {/* TEXT */}
            <div className="lg:w-1/2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                Barking & Dagenham architectural drawings
              </p>

              <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] sm:text-[26px] text-slate-900">
                Planning drawings for extensions, lofts & new homes
              </h1>

              <p className="mt-3 text-[13px] text-slate-700">
                WEDRAWPLANS prepare planning drawings, building regulation packs and technical
                plans for residential projects across Barking, Dagenham, Chadwell Heath,
                Rush Green and the wider borough.
              </p>

              <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                <li>• Rear and side extensions</li>
                <li>• Loft conversions and dormers</li>
                <li>• Internal remodelling layouts</li>
                <li>• New build houses and infill schemes</li>
                <li>• Conversions to self-contained flats</li>
                <li>• Building regulation drawings</li>
              </ul>

              <div className="mt-5 flex items-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                >
                  Get my Barking & Dagenham quote
                </button>

                <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                  Or call {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* FORM */}
            <div id="bd-quote" className="lg:w-1/2">
              <div className="rounded-2xl bg-white p-5 shadow-md">
                <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Free fixed quote for Barking & Dagenham projects
                </h2>

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
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">Email</label>
                      <input
                        name="email"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-slate-700">
                      Barking / Dagenham Postcode
                    </label>
                    <input
                      name="postcode"
                      required
                      placeholder="RM9 4XX"
                      className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-slate-700">Project type</label>
                    <select
                      name="projectType"
                      required
                      defaultValue=""
                      className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                    >
                      <option value="" disabled>Select project type</option>
                      <option value="Extension">Extension</option>
                      <option value="Loft conversion">Loft conversion</option>
                      <option value="Internal remodelling">Internal remodelling</option>
                      <option value="New build">New build house</option>
                      <option value="Flat conversion">Conversion to flats</option>
                      <option value="Building regulations">Building regulation pack</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-slate-700">Project details</label>
                    <textarea
                      name="projectDetails"
                      rows={4}
                      className="w-full rounded border border-slate-300 px-2 py-2 focus:border-[#64b7c4]"
                      placeholder="Tell us about your Barking or Dagenham project…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold tracking-[0.2em] text-white hover:bg-[#4da4b4]"
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
              Common projects in Barking & Dagenham
            </h2>

            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              The borough has a large stock of 1930s houses, terraced homes, post-war estates
              and redevelopment plots. This creates strong opportunities for extensions, lofts and new homes.
            </p>

            <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
              <div>
                <h3 className="text-[14px] font-semibold uppercase text-slate-900">
                  Rear extensions & open-plan layouts
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  We prepare layouts, roof design and glazing proposals suitable for planning approval.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase text-slate-900">
                  Loft conversions & dormers
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Hip-to-gable, rear dormer and L-shaped loft conversions are all common across Barking & Dagenham.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase text-slate-900">
                  Conversions to flats
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Larger homes can sometimes be converted into self-contained flats subject to local policy.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase text-slate-900">
                  New-build plots
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Many corner or side plots can accommodate a small dwelling or infill scheme.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEES */}
        <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase text-slate-900 tracking-[0.16em]">
              Fixed fees for Barking & Dagenham projects
            </h2>

            <div className="mt-5 grid gap-4 text-[13px] md:grid-cols-3">
              <div className="rounded-md border border-slate-200 bg-white p-4">
                <h3 className="text-[13px] font-semibold">Planning drawings</h3>
                <p className="mt-1 text-[13px] font-semibold">from £750 + VAT</p>
                <p className="mt-2 text-[12px] text-slate-600">
                  Plans & elevations for extensions, lofts & conversions.
                </p>
              </div>

              <div className="rounded-md border border-slate-200 bg-white p-4">
                <h3 className="text-[13px] font-semibold">Measured survey</h3>
                <p className="mt-1 text-[13px] font-semibold">from £150 + VAT</p>
                <p className="mt-2 text-[12px] text-slate-600">
                  On-site measured survey for accurate existing drawings.
                </p>
              </div>

              <div className="rounded-md border border-slate-200 bg-white p-4">
                <h3 className="text-[13px] font-semibold">Building regulation pack</h3>
                <p className="mt-1 text-[13px] font-semibold">from £950 + VAT</p>
                <p className="mt-2 text-[12px] text-slate-600">
                  Technical drawings coordinated with structural engineers.
                </p>
              </div>
            </div>

            <button
              onClick={scrollToForm}
              className="mt-5 rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-[#4da4b4]"
            >
              Request my Barking & Dagenham fee
            </button>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-white py-10">
          <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Ready to move your Barking & Dagenham project forward?
            </h2>

            <p className="mt-3 text-[13px] text-slate-700">
              Share a few details and we will respond with a fixed quote and clear next steps.
            </p>

            <div className="mt-5 flex justify-center gap-3">
              <button
                onClick={scrollToForm}
                className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-[#4da4b4]"
              >
                Get my quote
              </button>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
