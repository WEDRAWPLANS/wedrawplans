import Head from "next/head";
import React from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Richmond%20upon%20Thames";

export default function RichmondPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Richmond" });
  }

  function scrollToForm() {
    const el = document.getElementById("richmond-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Richmond – Extensions, Lofts & Planning Applications
        </title>
        <meta
          name="description"
          content="Planning drawings, loft conversion plans, extension layouts and building regulation packs for homes across Richmond, Twickenham, Kew, Barnes and Ham. Fixed fees with fast turnaround."
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
                Richmond architectural drawings
              </p>

              <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] sm:text-[26px] text-slate-900">
                Planning drawings for extensions, lofts & refurbishments
              </h1>

              <p className="mt-3 text-[13px] text-slate-700">
                WEDRAWPLANS prepare planning and technical drawings for homes across
                Richmond, Twickenham, Kew, Barnes, Mortlake, Hampton, Teddington and Ham.
                Fixed fees, clear drawings and responsive communication.
              </p>

              <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                <li>• Rear, side and wrap-around extensions</li>
                <li>• Loft conversions & dormers</li>
                <li>• Basement and internal reconfiguration</li>
                <li>• Conversions to flats</li>
                <li>• New-build infill houses</li>
                <li>• Building regulation packages</li>
              </ul>

              <div className="mt-5 flex items-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                >
                  Get my Richmond quote
                </button>

                <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                  Or call {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* FORM */}
            <div id="richmond-quote" className="lg:w-1/2">
              <div className="rounded-2xl bg-white p-5 shadow-md">
                <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Free fixed quote for Richmond projects
                </h2>

                <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                  <div>
                    <label className="text-[11px] font-medium text-slate-700">Name</label>
                    <input
                      name="name"
                      required
                      className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="text-[11px] font-medium text-slate-700">Telephone</label>
                      <input
                        name="phone"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-700">Email</label>
                      <input
                        name="email"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-slate-700">Richmond Postcode</label>
                    <input
                      name="postcode"
                      required
                      placeholder="TW10 6XX"
                      className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-slate-700">Project type</label>
                    <select
                      name="projectType"
                      required
                      defaultValue=""
                      className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                    >
                      <option value="" disabled>Select one</option>
                      <option value="Extension">Extension</option>
                      <option value="Loft conversion">Loft conversion</option>
                      <option value="Internal remodelling">Internal remodelling</option>
                      <option value="New build">New build house</option>
                      <option value="Conversion">Conversion to flats</option>
                      <option value="Building regulations">Building regulation pack</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-slate-700">Project details</label>
                    <textarea
                      name="projectDetails"
                      rows={4}
                      className="w-full rounded border border-slate-300 px-2 py-2 focus:border-[#64b7c4]"
                      placeholder="Tell us about your Richmond project…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold tracking-[0.2em] text-white hover:bg-[#4da4b4]"
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
            <h2 className="text-[18px] font-semibold uppercase text-slate-900 tracking-[0.16em]">
              Common projects in Richmond
            </h2>

            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Richmond has a wide mix of Victorian terraces, Edwardian houses, Georgian homes,
              1930s properties and conservation areas. Many households extend or remodel to increase
              space rather than move.
            </p>

            <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
              <div>
                <h3 className="text-[14px] font-semibold uppercase text-slate-900">
                  Extensions & open-plan layouts
                </h3>
                <p className="mt-2">
                  We prepare layouts, glazing strategies and structural coordination for rear,
                  side and wrap-around extensions across Richmond, Kew and Twickenham.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase text-slate-900">
                  Loft conversions & roof dormers
                </h3>
                <p className="mt-2">
                  Rear dormers, hip-to-gable conversions and L-shaped dormers are common. We design
                  stairs, layouts and fire safety routes in line with regulations.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase text-slate-900">
                  Basement refurbishments
                </h3>
                <p className="mt-2">
                  Some Richmond properties benefit from basement reconfiguration or improvements.
                  We prepare complete plans with structural coordination.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase text-slate-900">
                  New-build & infill plots
                </h3>
                <p className="mt-2">
                  Certain plots can accommodate additional dwellings. We produce feasibility layouts
                  and full planning drawings where viable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PLANNING GUIDANCE */}
        <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase text-slate-900 tracking-[0.16em]">
              Planning guidance for Richmond
            </h2>

            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Richmond upon Thames includes several conservation areas and heritage streets.
              Extensions, lofts and roof alterations must therefore respond to local character
              and follow the borough’s detailed design guidance.
            </p>

            <ul className="mt-4 space-y-2 text-[13px] text-slate-800">
              <li>• We check whether your home is in a conservation area</li>
              <li>• We review Article 4 Directions removing permitted development rights</li>
              <li>• We prepare full householder planning applications</li>
              <li>• We produce daylight/sunlight-friendly designs where needed</li>
              <li>• We coordinate with structural engineers for accurate proposals</li>
            </ul>

            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Richmond can be stricter than many London boroughs, but good drawings often lead to
              smooth approvals. We tailor every submission to your local context.
            </p>
          </div>
        </section>

        {/* FEES */}
        <section className="border-b border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase text-slate-900 tracking-[0.16em]">
              Fixed fees for Richmond projects
            </h2>

            <div className="mt-5 grid gap-4 text-[13px] md:grid-cols-3">
              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold">Planning drawings</h3>
                <p className="mt-1 text-[13px] font-semibold">from £750 + VAT</p>
                <p className="mt-2 text-[12px] text-slate-600">
                  Existing & proposed plans and elevations for extensions, lofts and remodels.
                </p>
              </div>

              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold">Measured surveys</h3>
                <p className="mt-1 text-[13px] font-semibold">from £150 + VAT</p>
                <p className="mt-2 text-[12px] text-slate-600">
                  On-site surveys for accurate existing plans.
                </p>
              </div>

              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold">Building regulation packs</h3>
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
              Request my Richmond fee
            </button>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Ready to move your Richmond project forward?
            </h2>

            <p className="mt-3 text-[13px] text-slate-700">
              Share a few details using the form above and we will provide a clear fixed fee
              and suggested next steps for your Richmond extension, loft conversion or new build.
            </p>

            <div className="mt-5 flex justify-center gap-3">
              <button
                onClick={scrollToForm}
                className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-[#4da4b4]"
              >
                Get my Richmond quote
              </button>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
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
