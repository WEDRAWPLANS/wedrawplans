import Head from "next/head";
import React from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Hillingdon";

export default function HillingdonPage() {
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
          Architectural Drawings in Hillingdon – Extensions, Lofts & Planning Applications
        </title>
        <meta
          name="description"
          content="Planning drawings, loft conversion plans, extension layouts and building regulation packs for homes across Hillingdon, Uxbridge, Hayes, Ruislip, Ickenham and West Drayton. Fixed fees and fast turnaround."
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
          <div className="mx-auto max-w-5xl flex flex-col gap-6 px-4 py-8 lg:flex-row lg:items-start lg:px-6 lg:py-10">

            {/* TEXT SIDE */}
            <div className="lg:w-1/2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                Hillingdon architectural drawings
              </p>

              <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase tracking-[0.14em] leading-snug">
                Planning drawings for extensions, lofts & home renovations
              </h1>

              <p className="mt-3 text-[13px] text-slate-700">
                We prepare planning, technical and building regulation drawings for homes across
                Hillingdon, including Uxbridge, Hayes, Ruislip, Ickenham, Hillingdon Village and West Drayton.
              </p>

              <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                <li>• Rear & side extensions</li>
                <li>• Loft conversions & dormers</li>
                <li>• Internal reconfigurations</li>
                <li>• New-build infill homes</li>
                <li>• Flat conversions</li>
                <li>• Building regulation packs</li>
              </ul>

              <div className="mt-5 flex items-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] text-white font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Get my Hillingdon quote
                </button>

                <a href={PHONE_LINK} className="text-[13px] text-slate-800 underline">
                  Or call {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* FORM SIDE */}
            <div id="hillingdon-quote" className="lg:w-1/2">
              <div className="rounded-2xl bg-white p-5 shadow-md">
                
                <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em]">
                  Free fixed quote for your home
                </h2>

                <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                  
                  <div>
                    <label className="text-[11px] font-medium">Name</label>
                    <input
                      name="name"
                      required
                      className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    <div>
                      <label className="text-[11px] font-medium">Telephone</label>
                      <input
                        name="phone"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium">Email</label>
                      <input
                        name="email"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                      />
                    </div>

                  </div>

                  <div>
                    <label className="text-[11px] font-medium">Hillingdon Postcode</label>
                    <input
                      name="postcode"
                      required
                      placeholder="UB10 8XX"
                      className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium">Project type</label>
                    <select
                      name="projectType"
                      required
                      defaultValue=""
                      className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                    >
                      <option value="" disabled>Select one</option>
                      <option>Extension</option>
                      <option>Loft conversion</option>
                      <option>Internal remodelling</option>
                      <option>New build</option>
                      <option>Flat conversion</option>
                      <option>Building regulation pack</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium">Project details</label>
                    <textarea
                      name="projectDetails"
                      rows={4}
                      className="w-full border border-slate-300 rounded px-2 py-2 focus:border-[#64b7c4]"
                      placeholder="Tell us about your Hillingdon project…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] text-white font-semibold tracking-[0.2em] hover:bg-[#4da4b4]"
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
            
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
              Common home projects in Hillingdon
            </h2>

            <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
              Hillingdon includes a wide mix of 1930s houses, suburban estates, post-war homes and
              large detached properties. Many households extend or remodel instead of moving.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-5 text-[13px]">
              
              <div>
                <h3 className="text-[14px] font-semibold uppercase">Extensions</h3>
                <p className="mt-2">
                  Rear, side and wrap-around extensions to create larger kitchens, open-plan
                  layouts and additional bedrooms.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase">Loft conversions</h3>
                <p className="mt-2">
                  Hip-to-gable lofts, rear dormers and L-shaped conversions suitable for planning
                  or lawful development certificates.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase">Internal remodelling</h3>
                <p className="mt-2">
                  We redesign internal layouts, remove walls (with structural input) and create
                  modern open-plan spaces.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase">New-build / infill</h3>
                <p className="mt-2">
                  Some plots in Hillingdon can support a new dwelling. We prepare feasibility
                  layouts and full planning drawings.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* PLANNING GUIDANCE */}
        <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
              Planning guidance for Hillingdon
            </h2>

            <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
              Hillingdon follows London Plan policies and its Local Plan. Certain areas have
              stricter controls, especially conservation areas in Uxbridge, Ruislip and Ickenham.
            </p>

            <ul className="mt-4 space-y-2 text-[13px] text-slate-800">
              <li>• We check Article 4 directions affecting lofts and permitted development</li>
              <li>• We prepare householder applications for extensions</li>
              <li>• We produce lawful development certificate drawings where applicable</li>
              <li>• We coordinate with structural engineers when required</li>
            </ul>

            <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
              Many extensions in Hillingdon are approved when drawings are clear, accurate
              and in line with local policy. We tailor each submission to your address.
            </p>

          </div>
        </section>


        {/* FEES */}
        <section className="border-b border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">

            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
              Clear fixed fees for your home project
            </h2>

            <div className="mt-5 grid md:grid-cols-3 gap-4 text-[13px]">
              
              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold">Planning drawings</h3>
                <p className="mt-1 text-[13px] font-semibold">from £750 + VAT</p>
                <p className="mt-2 text-[12px]">
                  Existing & proposed plans and elevations for extensions, lofts and remodels.
                </p>
              </div>

              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold">Measured surveys</h3>
                <p className="mt-1 text-[13px] font-semibold">from £150 + VAT</p>
                <p className="mt-2 text-[12px]">
                  On-site measured surveys for accurate existing drawings.
                </p>
              </div>

              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold">Building regulation packs</h3>
                <p className="mt-1 text-[13px] font-semibold">from £950 + VAT</p>
                <p className="mt-2 text-[12px]">
                  Technical drawings coordinated with structural engineers.
                </p>
              </div>

            </div>

            <button
              onClick={scrollToForm}
              className="mt-5 rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] text-white font-semibold hover:bg-[#4da4b4]"
            >
              Request my fixed fee
            </button>

          </div>
        </section>


        {/* FINAL CTA */}
        <section className="bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">

            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
              Ready to obtain your planning approval?
            </h2>

            <p className="mt-3 text-[13px] text-slate-700">
              Share a few details using the form above and we will provide a clear fixed fee
              and next steps for your extension, loft conversion or home renovation in Hillingdon.
            </p>

            <div className="mt-5 flex justify-center gap-3">
              
              <button
                onClick={scrollToForm}
                className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] text-white font-semibold hover:bg-[#4da4b4]"
              >
                Get my quote
              </button>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-[13px] hover:bg-slate-900 hover:text-white"
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
