import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Hammersmith%20and%20Fulham";

export default function HammersmithFulhamAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  await submitBoroughLead(e, {
    boroughName: "Hammersmith and Fulham",
  });
}

  function scrollToForm() {
    const el = document.getElementById("hf-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Hammersmith & Fulham – Extensions, Lofts & Conversions
        </title>
        <meta
          name="description"
          content="Architectural drawings in Hammersmith & Fulham for extensions, loft conversions, flat conversions and building regulation packs. Fixed fees from £750 with fast turnaround."
        />
        <link rel="canonical" href="https://wedrawplans.co.uk/hammersmith-and-fulham" />
<meta name="robots" content="noindex,follow" />

      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">

        {/* HEADER */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3 lg:px-6">

            {/* LOGO */}
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-500 text-xs tracking-[0.18em] font-semibold text-red-700">
                WD
              </div>
              <div className="leading-tight">
                <div className="uppercase tracking-[0.2em] text-lg font-semibold">
                  WEDRAWPLANS
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  Architectural drawing consultants
                </div>
              </div>
            </div>

            {/* CONTACT BUTTONS */}
            <div className="flex items-center gap-2">
              <a
                href={PHONE_LINK}
                className="hidden sm:inline-flex items-center gap-1 border border-slate-300 px-3 py-1.5 rounded-full text-[12px] shadow-sm hover:bg-slate-900 hover:text-white"
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

          {/* HERO */}
          <section className="bg-[#fdf8f3] border-b border-slate-200">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">

              {/* LEFT TEXT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] uppercase tracking-[0.26em] font-semibold text-red-700">
                  Hammersmith & Fulham architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] uppercase tracking-[0.14em] font-semibold leading-snug">
                  Plans for extensions, lofts & conversions in Hammersmith & Fulham
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for extensions,
                  loft conversions, flat conversions, internal remodelling and new builds
                  across the London Borough of Hammersmith & Fulham. Fixed fees with
                  fast communication and clear scope.
                </p>

                <ul className="mt-4 text-[13px] text-slate-800 space-y-1">
                  <li>• Extensions, loft conversions & internal remodelling</li>
                  <li>• Flat conversions & HMOs</li>
                  <li>• Basement and lower ground alterations</li>
                  <li>• New builds & infill schemes</li>
                  <li>• Covering Fulham, Parsons Green, West Kensington, Shepherd’s Bush & more</li>
                  <li>• Same day response on most enquiries</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-3 items-center">
                  <button
                    onClick={scrollToForm}
                    className="px-5 py-2.5 bg-[#64b7c4] text-white text-[13px] uppercase rounded-full tracking-[0.18em] font-semibold hover:bg-[#4da4b4]"
                  >
                    Get my H&F quote
                  </button>

                  <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div id="hf-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">

                  <h2 className="text-[14px] uppercase tracking-[0.16em] font-semibold">
                    Free fixed quote for H&F projects
                  </h2>

                  <p className="text-[12px] text-slate-600 mt-1">
                    Tell us about your Hammersmith & Fulham project and we will reply
                    with a clear fixed fee.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">

                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* Phone & Email */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Telephone</label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Email</label>
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
                      <label className="text-[11px] font-medium">H&F postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="W6 0AB"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "W6 0AB")}
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Project type</label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                      >
                        <option value="" disabled>Select project type</option>
                        <option>House extension</option>
                        <option>Loft conversion</option>
                        <option>Internal remodelling</option>
                        <option>Flat conversion</option>
                        <option>Basement works</option>
                        <option>New build house</option>
                        <option>Building regulation pack only</option>
                        <option>Other domestic project</option>
                      </select>
                    </div>

                    {/* Description */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">
                        Brief description of your H&F project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="Example: rear extension to a terraced house in Fulham with loft conversion above."
                        className="w-full border border-slate-300 rounded px-2 py-2 bg-white focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#64b7c4] text-white rounded-full uppercase text-[13px] tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get my H&F quote
                    </button>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Typical projects: extensions, lofts, basements and flat conversions in Fulham,
                      Parsons Green, Hammersmith & Shepherd’s Bush.
                    </p>

                  </form>
                </div>
              </div>

            </div>
          </section>

          {/* COMMON PROJECT TYPES */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">

              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                Common project types in Hammersmith & Fulham
              </h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                H&F has a diverse mix of Victorian terraces, mansion flats and modern apartments.
                Many homeowners extend or convert their spaces to maximise urban living potential.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-5 text-[13px]">

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Rear & side extensions
                  </h3>
                  <p className="mt-2">
                    Common across Fulham and West Kensington. We set out efficient layouts,
                    glazing and structural coordination.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Loft conversions
                  </h3>
                  <p className="mt-2">
                    Rear dormer and mansard lofts popular across Parsons Green and Barons Court.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Basements & lower ground alterations
                  </h3>
                  <p className="mt-2">
                    Many properties benefit from additional lower-ground living or utility space.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Flat conversions & HMOs
                  </h3>
                  <p className="mt-2">
                    We prepare layouts, access notes and amenity space diagrams for planning compliance.
                  </p>
                </div>

              </div>

            </div>
          </section>

          {/* AREAS */}
          <section className="bg-[#f8f4f0] border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">

              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">
                Areas of Hammersmith & Fulham covered
              </h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                WEDRAWPLANS support projects throughout the borough, including:
              </p>

              <ul className="grid md:grid-cols-2 gap-2 text-[13px] text-slate-800 mt-4">
                <li>• Fulham</li>
                <li>• Hammersmith</li>
                <li>• Parsons Green</li>
                <li>• West Kensington</li>
                <li>• Barons Court</li>
                <li>• Shepherd’s Bush</li>
              </ul>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                We offer remote design or full on-site measured surveys where needed.
              </p>

            </div>
          </section>

          {/* PRICING */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">

              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">
                Clear fixed fees for H&F projects
              </h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                Fees follow the same London-wide structure, adjusted for basements and flat conversions.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-5 text-[13px]">

                <div className="p-4 bg-[#fdf8f3] border border-slate-200 rounded-md">
                  <h3 className="font-semibold text-slate-900">Planning drawings</h3>
                  <div className="mt-1 font-semibold">from £750 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Full existing & proposed drawings for planning or lawful development.
                  </p>
                </div>

                <div className="p-4 bg-[#fdf8f3] border border-slate-200 rounded-md">
                  <h3 className="font-semibold text-slate-900">Measured survey in H&F</h3>
                  <div className="mt-1 font-semibold">from £150 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    On-site survey for accurate existing drawings.
                  </p>
                </div>

                <div className="p-4 bg-[#fdf8f3] border border-slate-200 rounded-md">
                  <h3 className="font-semibold text-slate-900">Building regulation pack</h3>
                  <div className="mt-1 font-semibold">from £950 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Sections, details & specifications coordinated with structural engineers.
                  </p>
                </div>

              </div>

              <div className="mt-5">
                <button
                  onClick={scrollToForm}
                  className="px-5 py-2.5 bg-[#64b7c4] rounded-full text-white text-[13px] uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Request my H&F fee
                </button>
              </div>

            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10 text-center">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">

              <h2 className="text-[18px] uppercase font-semibold tracking-[0.16em]">
                Ready to move your Hammersmith & Fulham project forward?
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed fee
                and suggested next steps.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="px-5 py-2.5 bg-[#64b7c4] text-white rounded-full text-[13px] uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Get my H&F quote
                </button>

                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 bg-white rounded-full text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
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
