import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Kensington%20and%20Chelsea";

export default function KensingtonChelseaAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  await submitBoroughLead(e, {
    boroughName: "Kensington and Chelsea",
  });
}

  function scrollToForm() {
    const el = document.getElementById("kensington-chelsea-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Kensington & Chelsea – Extensions, Basements and Renovations
        </title>
        <meta
          name="description"
          content="Architectural drawings in Kensington & Chelsea for extensions, basements, internal remodelling, high-end refurbishments and building regulation packs. Fixed fees from £750 with fast turnaround."
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">

        {/* HEADER */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl justify-between items-center px-4 py-3 lg:px-6">
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
                className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 shadow-sm text-[12px] font-medium hover:bg-slate-900 hover:text-white"
              >
                📞 {PHONE_DISPLAY}
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="inline-flex items-center gap-1 bg-[#25D366] text-white px-3 py-1.5 rounded-full text-[12px] font-medium shadow-sm hover:bg-[#1ebe57]"
              >
                💬 <span className="hidden sm:inline">WhatsApp us</span>
              </a>
            </div>
          </div>
        </header>

        <main>

          {/* HERO + FORM */}
          <section className="bg-[#fdf8f3] border-b border-slate-200">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6">

              {/* LEFT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] tracking-[0.26em] text-red-700 font-semibold uppercase">
                  Kensington & Chelsea architectural drawings
                </p>

                <h1 className="text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em] mt-2">
                  Plans for high-end extensions, basements & renovations
                </h1>

                <p className="text-[13px] mt-3 text-slate-700">
                  WEDRAWPLANS prepare premium planning and technical drawings for
                  extensions, basements, internal remodelling and refurbishments
                  across Kensington, Chelsea, Notting Hill, South Kensington and the
                  wider RBKC borough. Fixed fees, professional service and fast communication.
                </p>

                <ul className="text-[13px] mt-4 space-y-1 text-slate-800">
                  <li>• Rear extensions, side extensions & roof alterations</li>
                  <li>• Internal remodelling and high-end refurbishments</li>
                  <li>• Basement extensions & lower ground level conversions</li>
                  <li>• Planning drawings & building regulation packs</li>
                  <li>• Covering Kensington, Chelsea, Notting Hill, Earl's Court & more</li>
                  <li>• Same day response on most enquiries</li>
                </ul>

                <div className="mt-5 flex items-center gap-3 flex-wrap">
                  <button
                    onClick={scrollToForm}
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white font-semibold uppercase text-[13px] tracking-[0.18em] hover:bg-[#4da4b4]"
                  >
                    Get my Kensington & Chelsea quote
                  </button>

                  <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div id="kensington-chelsea-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">

                  <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                    Free fixed quote for Kensington & Chelsea projects
                  </h2>

                  <p className="text-[12px] mt-1 text-slate-600">
                    Tell us a little about your RBKC property and what you plan to build.
                    We will send a clear fixed fee for your drawings.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">

                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    {/* Phone + Email */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Telephone</label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4]"
                        />
                      </div>
                    </div>

                    {/* Postcode */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Kensington & Chelsea postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="SW3 5AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "SW3 5AA")}
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Project type</label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4]"
                      >
                        <option value="" disabled>Select project type</option>
                        <option>House extension</option>
                        <option>Loft conversion</option>
                        <option>Internal remodelling</option>
                        <option>Basement extension</option>
                        <option>New build house</option>
                        <option>Conversion to flats</option>
                        <option>Building regulation pack only</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Description */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">
                        Brief description of your Kensington & Chelsea project
                      </label>

                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear extension and high-end refurbishment to a townhouse in Kensington. Basement lowering also required."
                        className="w-full border border-slate-300 rounded bg-white py-2 px-2 focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* CTA */}
                    <button
                      type="submit"
                      className="w-full mt-2 rounded-full bg-[#64b7c4] py-2.5 text-white font-semibold uppercase tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get my Kensington & Chelsea quote
                    </button>

                    <p className="text-[11px] text-slate-500 mt-2">
                      Typical RBKC projects include extensions, full refurbishments,
                      basement works and internal reconfigurations to high-value
                      properties across Kensington, Chelsea and Notting Hill.
                    </p>
                  </form>

                </div>
              </div>

            </div>
          </section>

          {/* COMMON PROJECT TYPES */}
          <section className="bg-white py-10 border-b border-slate-200">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">

              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">
                Common project types in Kensington & Chelsea
              </h2>

              <p className="text-[13px] mt-3 text-slate-700 max-w-3xl">
                RBKC is known for high-value Victorian, Edwardian and Georgian properties,
                mews houses and mansion blocks. Projects often involve complex
                design, heritage constraints, basement construction or luxury refurbishment.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-5 text-[13px]">

                <div>
                  <h3 className="text-[14px] uppercase tracking-[0.14em] font-semibold">
                    Rear & side extensions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Many townhouses and mansion flats benefit from carefully planned extensions
                    to increase kitchen, dining and family space. We coordinate structure,
                    glazing and daylight effectively.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] uppercase tracking-[0.14em] font-semibold">
                    Basement and lower ground extensions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    RBKC is one of the most common boroughs for basement projects. We prepare
                    full technical plans aligned with planning and structural requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] uppercase tracking-[0.14em] font-semibold">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Sensitive roof alterations, dormers and internal reconfiguration to meet
                    planning & heritage guidance in conservation areas.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] uppercase tracking-[0.14em] font-semibold">
                    High-end refurbishments & remodelling
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Many Kensington & Chelsea homes undergo full renovation. We prepare layout
                    plans, sections and technical packages for all internal works.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* AREAS */}
          <section className="bg-[#f8f4f0] border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">

              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">
                Areas of Kensington & Chelsea covered
              </h2>

              <p className="text-[13px] mt-3 text-slate-700 max-w-3xl">
                WEDRAWPLANS support projects across the entire RBKC borough, including:
              </p>

              <ul className="grid md:grid-cols-2 gap-2 text-[13px] text-slate-800 mt-4">
                <li>• Kensington</li>
                <li>• Chelsea</li>
                <li>• Notting Hill & Ladbroke Grove</li>
                <li>• South Kensington</li>
                <li>• Earl’s Court</li>
                <li>• Holland Park & West Kensington</li>
                <li>• Brompton & Sloane Square</li>
                <li>• All conservation areas within RBKC</li>
              </ul>

              <p className="text-[13px] mt-3 max-w-3xl text-slate-700">
                All drawings can be delivered remotely, or combined with an on-site measured survey.
              </p>

            </div>
          </section>

          {/* PRICING */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">

              <h2 className="text-[18px] uppercase font-semibold tracking-[0.16em]">
                Clear fixed fees for Kensington & Chelsea projects
              </h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                Fees follow the same clear London structure, adjusted for complex design,
                conservation areas and basement-related works.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-5 text-[13px]">

                <div className="p-4 bg-[#fdf8f3] border border-slate-200 rounded-md">
                  <h3 className="font-semibold">Extension or loft planning drawings</h3>
                  <div className="mt-1 font-semibold">from £750 + VAT</div>
                  <p className="text-[12px] mt-2 text-slate-600">
                    Plans and elevations for householder planning or lawful development applications.
                  </p>
                </div>

                <div className="p-4 bg-[#fdf8f3] border border-slate-200 rounded-md">
                  <h3 className="font-semibold">Measured survey in RBKC</h3>
                  <div className="mt-1 font-semibold">from £200 + VAT</div>
                  <p className="text-[12px] mt-2 text-slate-600">
                    Detailed site survey for accurate existing drawings (RBKC often requires higher detail).
                  </p>
                </div>

                <div className="p-4 bg-[#fdf8f3] border border-slate-200 rounded-md">
                  <h3 className="font-semibold">Building regulation packs</h3>
                  <div className="mt-1 font-semibold">from £950 + VAT</div>
                  <p className="text-[12px] mt-2 text-slate-600">
                    Full technical drawings, sections and construction notes coordinated with structural engineers.
                  </p>
                </div>

              </div>

              <div className="mt-5">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white uppercase text-[13px] tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Request my RBKC fee
                </button>
              </div>

            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="max-w-5xl mx-auto text-center px-4 lg:px-6">

              <h2 className="text-[18px] uppercase font-semibold tracking-[0.16em]">
                Ready to move your RBKC project forward
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will send a clear fixed fee and recommended next steps.
              </p>

              <div className="mt-5 flex justify-center gap-3 flex-wrap">

                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[13px] uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Get my Kensington & Chelsea quote
                </button>

                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center gap-2 border border-slate-300 bg-white px-4 py-2 text-[13px] rounded-full shadow-sm hover:bg-slate-900 hover:text-white"
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
