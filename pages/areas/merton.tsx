import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Merton";

export default function MertonAreaPage() {
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
          Architectural Drawings in Merton – Extensions, Lofts and New Builds
        </title>
        <meta
          name="description"
          content="Architectural drawings in Merton for house extensions, loft conversions, new builds, flat conversions and building regulation packs. Fixed fees from £750 with fast turnaround."
        />
        <link rel="canonical" href="https://wedrawplans.co.uk/merton" />
<meta name="robots" content="noindex,follow" />

      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">

        {/* HEADER */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3 lg:px-6">
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

            <div className="flex items-center gap-2">
              <a
                href={PHONE_LINK}
                className="hidden sm:inline-flex items-center gap-1 text-[12px] px-3 py-1.5 rounded-full border border-slate-300 shadow-sm hover:bg-slate-900 hover:text-white"
              >
                📞 {PHONE_DISPLAY}
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="inline-flex items-center gap-1 text-[12px] px-3 py-1.5 rounded-full bg-[#25D366] text-white shadow-sm hover:bg-[#1ebe57]"
              >
                💬 <span className="hidden sm:inline">WhatsApp us</span>
              </a>
            </div>
          </div>
        </header>

        <main>

          {/* HERO + FORM */}
          <section className="bg-[#fdf8f3] border-b border-slate-200">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">

              {/* TEXT LEFT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] uppercase tracking-[0.26em] font-semibold text-red-700">
                  Merton architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] uppercase tracking-[0.14em] font-semibold leading-snug">
                  Plans for extensions, lofts and new builds in Merton
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for extensions, loft conversions,
                  internal remodelling and new builds across the London Borough of Merton. Fixed fees
                  with clear scope and fast communication.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Extensions, lofts and internal layout changes</li>
                  <li>• New build homes and small residential plots</li>
                  <li>• Building regulation packs and structural coordination</li>
                  <li>• Covering Wimbledon, Mitcham, Morden, Colliers Wood and more</li>
                  <li>• Same day response on most enquiries</li>
                </ul>

                <div className="mt-5 flex gap-3 items-center flex-wrap">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="px-5 py-2.5 bg-[#64b7c4] rounded-full text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                  >
                    Get my Merton quote
                  </button>

                  <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* FORM RIGHT */}
              <div id="merton-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">

                  <h2 className="text-[14px] uppercase tracking-[0.16em] font-semibold text-slate-900">
                    Free fixed quote for Merton projects
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us about your property in Merton. We will send a clear fixed fee for your drawings.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3 text-[13px] mt-3">

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4]"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Telephone</label>
                        <input
                          name="phone"
                          required
                          type="tel"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Email</label>
                        <input
                          name="email"
                          required
                          type="email"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Merton postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="SW19 3AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                          !e.target.value && (e.target.placeholder = "SW19 3AA")
                        }
                        className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Project type</label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4]"
                      >
                        <option value="" disabled>Select project type</option>
                        <option>House extension</option>
                        <option>Loft conversion</option>
                        <option>Internal remodelling</option>
                        <option>New build house</option>
                        <option>Conversion to flats</option>
                        <option>Building regulation pack only</option>
                        <option>Other domestic project</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Brief description of your Merton project</label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear extension and loft conversion to a Wimbledon terrace with open plan kitchen."
                        className="w-full border border-slate-300 rounded px-2 py-2 bg-white focus:border-[#64b7c4]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#64b7c4] rounded-full text-white uppercase text-[13px] tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get my Merton quote
                    </button>

                    <p className="text-[11px] text-slate-500 mt-2">
                      Typical Merton projects include extensions and loft conversions
                      in Wimbledon, Colliers Wood, Morden and Raynes Park.
                    </p>
                  </form>

                </div>
              </div>

            </div>
          </section>

          {/* COMMON PROJECT TYPES */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">

              <h2 className="uppercase tracking-[0.16em] text-[18px] font-semibold">
                Common project types in Merton
              </h2>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                Merton includes a wide mix of Victorian terraces, 1930s homes and suburban
                estates. Many homeowners extend or convert lofts to add space instead of moving.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-5 text-[13px]">
                
                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Rear & side extensions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Popular across Colliers Wood, Raynes Park and Morden. We design open-plan layouts,
                    structural openings and glazing to maximise daylight.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Dormer lofts and hip-to-gable conversions are common across Wimbledon and Morden.
                    We design layouts with correct stairs, headroom and fire protection.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Flat conversions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Many larger houses can be converted into self-contained flats. We prepare layouts,
                    access and amenity calculations suitable for Merton planning policy.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    New build plots
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Backland, infill and corner sites often offer potential for small new build
                    developments. We provide full planning drawing packs.
                  </p>
                </div>

              </div>

            </div>
          </section>

          {/* AREAS */}
          <section className="bg-[#f8f4f0] border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">
              
              <h2 className="uppercase text-[18px] font-semibold tracking-[0.16em]">
                Areas of Merton covered
              </h2>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                WEDRAWPLANS support projects across the borough, including:
              </p>

              <ul className="grid md:grid-cols-2 gap-2 text-[13px] text-slate-800 mt-4">
                <li>• Wimbledon & South Wimbledon</li>
                <li>• Colliers Wood</li>
                <li>• Raynes Park</li>
                <li>• Morden & Lower Morden</li>
                <li>• Mitcham & Pollards Hill</li>
                <li>• Surrounding neighbourhoods within the borough</li>
              </ul>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                We work both fully remotely or with onsite measured surveys when needed.
              </p>

            </div>
          </section>

          {/* PRICING */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">
              
              <h2 className="uppercase text-[18px] font-semibold tracking-[0.16em]">
                Clear fixed fees for Merton projects
              </h2>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                Fees follow the same clear structure across London, with adjustments for size
                and complexity.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-5 text-[13px]">
                
                <div className="p-4 rounded-md border border-slate-200 bg-[#fdf8f3]">
                  <h3 className="font-semibold text-slate-900">Extension or loft planning drawings</h3>
                  <div className="mt-1 font-semibold text-slate-900">from £750 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Full existing & proposed plans and elevations for planning.
                  </p>
                </div>

                <div className="p-4 rounded-md border border-slate-200 bg-[#fdf8f3]">
                  <h3 className="font-semibold text-slate-900">Measured survey in Merton</h3>
                  <div className="mt-1 font-semibold text-slate-900">from £150 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Accurate laser-measured site survey for existing drawings.
                  </p>
                </div>

                <div className="p-4 rounded-md border border-slate-200 bg-[#fdf8f3]">
                  <h3 className="font-semibold text-slate-900">Building regulation packs</h3>
                  <div className="mt-1 font-semibold text-slate-900">from £950 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Detailed construction drawings coordinated with structural engineers.
                  </p>
                </div>

              </div>

              <div className="mt-5">
                <button
                  onClick={scrollToForm}
                  className="px-5 py-2.5 bg-[#64b7c4] rounded-full text-white uppercase font-semibold text-[13px] tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Request my Merton fee
                </button>
              </div>

            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="max-w-5xl mx-auto text-center px-4 lg:px-6">
              
              <h2 className="uppercase text-[18px] font-semibold tracking-[0.16em]">
                Ready to move your Merton project forward?
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed fee and
                recommended next steps for your Merton extension, loft, conversion or new build.
              </p>

              <div className="mt-5 flex justify-center gap-3 flex-wrap">
                <button
                  onClick={scrollToForm}
                  className="px-5 py-2.5 bg-[#64b7c4] rounded-full text-white uppercase text-[13px] tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Get my Merton quote
                </button>

                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-full bg-white text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
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
