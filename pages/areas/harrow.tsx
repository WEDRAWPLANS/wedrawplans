import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import BoroughHeader from "../../components/BoroughHeader";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Harrow";

export default function HarrowAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Harrow" });
  }

  function scrollToForm() {
    const el = document.getElementById("harrow-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>Architectural Drawings in Harrow | Extensions, Lofts, New Builds</title>
        <meta
          name="description"
          content="Architectural drawings in Harrow for house extensions, loft conversions, new builds and building regulation packs. Fixed fees from £750 with fast turnaround."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/harrow" />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* HEADER (MATCH HOMEPAGE STYLE) */}
        <header className="bg-[#fdf8f3]/95 backdrop-blur border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 pt-6 pb-3 lg:px-6">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/wedrawplans-logo.png"
                alt="WEDRAWPLANS"
                width={420}
                height={140}
                priority
                className="h-24 w-auto object-contain"
              />

              <div className="mt-3 text-[11px] tracking-[0.18em] text-slate-600 uppercase">
                Architectural Drawing Consultants
              </div>

              <div className="mt-2 max-w-3xl text-[13px] font-medium text-slate-800">
                Architectural Drawings for Extensions, Lofts + New Builds at an Affordable Fixed Cost
              </div>
            </div>

            <hr className="mt-5 border-t border-slate-600" />

            <div className="mt-2 flex w-full items-center justify-between gap-3">
              <div className="text-[12px] text-slate-700">
                <span className="font-semibold text-slate-900">Harrow</span> borough page
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PHONE_LINK}
                  className="hidden items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white sm:inline-flex"
                >
                  📞 {PHONE_DISPLAY}
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-[#25D366] text-white px-3 py-1.5 rounded-full text-[12px] font-medium shadow-sm hover:bg-[#1ebe57]"
                >
                  💬 <span className="hidden sm:inline">WhatsApp us</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* HERO + FORM */}
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">
              {/* LEFT TEXT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Harrow architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and new builds in Harrow
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house extensions,
                  loft conversions, new builds and conversions across the London Borough of Harrow.
                  Fixed fees with clear scope and fast communication.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• House extensions and wrap-around extensions</li>
                  <li>• Loft conversions and internal remodelling</li>
                  <li>• New build houses and backland developments</li>
                  <li>• Planning drawings and building regulation packs</li>
                  <li>• Covering Harrow, Harrow Weald, Wealdstone, Kenton, Stanmore and more</li>
                  <li>• Same day response on most enquiries</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-3 items-center">
                  <button
                    onClick={scrollToForm}
                    type="button"
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                  >
                    Get my Harrow quote
                  </button>

                  <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div id="harrow-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                    Free fixed quote for Harrow projects
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your property in Harrow and what you plan to build.
                    We will send a clear fixed fee for your drawings.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Telephone</label>
                        <input
                          name="phone"
                          required
                          type="tel"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Email</label>
                        <input
                          name="email"
                          required
                          type="email"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Harrow postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="HA1 4AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "HA1 4AA")}
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Project type</label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
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
                      <label className="text-[11px] font-medium">
                        Brief description of your Harrow project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: wrap-around extension and loft conversion to a 1930s semi in Harrow with open plan layout."
                        className="w-full border border-slate-300 rounded bg-white px-2 py-2 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#64b7c4] py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get my Harrow quote
                    </button>

                    <p className="text-[11px] text-slate-500 mt-2">
                      Typical Harrow projects include extensions, lofts and new build infill developments.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* COMMON PROJECT TYPES */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                Common project types in Harrow
              </h2>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                Harrow consists mainly of 1930s semis, detached houses and suburban family homes.
                Many owners extend, convert lofts or remodel layouts to increase space without moving.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-5 text-[13px]">
                <div>
                  <h3 className="text-[14px] uppercase font-semibold tracking-[0.14em]">
                    Rear and side extensions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Large kitchen extensions and wrap-around schemes are common across Harrow, Kenton and Harrow Weald.
                    We design efficient layouts with daylight and structure planned carefully.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] uppercase font-semibold tracking-[0.14em]">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Dormer lofts and hip-to-gable conversions add bedrooms and bathrooms to Harrow homes.
                    We set out stairs, headroom and fire protection correctly for building control.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] uppercase font-semibold tracking-[0.14em]">
                    New build and backland developments
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Side plots, garages and deep gardens often offer opportunities for a new home.
                    We prepare full planning drawing packages.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] uppercase font-semibold tracking-[0.14em]">
                    Flat conversions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Suitable houses can be converted into self-contained flats.
                    We prepare layouts and amenity plans in line with Harrow planning standards.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* AREAS */}
          <section className="bg-[#f8f4f0] border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">
              <h2 className="text-[18px] uppercase font-semibold tracking-[0.16em]">
                Areas of Harrow covered
              </h2>

              <p className="text-[13px] mt-3 max-w-3xl text-slate-700">
                WEDRAWPLANS support projects across the whole borough, including:
              </p>

              <ul className="grid md:grid-cols-2 gap-2 mt-4 text-[13px] text-slate-800">
                <li>• Harrow and Harrow on the Hill</li>
                <li>• Harrow Weald</li>
                <li>• Kenton and Queensbury</li>
                <li>• Stanmore and Belmont</li>
                <li>• Wealdstone</li>
                <li>• Rayners Lane and South Harrow</li>
              </ul>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                Drawings can be delivered fully online, or with an on-site measured survey when needed.
              </p>
            </div>
          </section>

          {/* PRICING */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">
              <h2 className="text-[18px] uppercase font-semibold tracking-[0.16em]">
                Clear fixed fees for Harrow projects
              </h2>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                Fees follow the same clear structure as the rest of London, adjusted for size, complexity and planning requirements.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-5 text-[13px]">
                <div className="p-4 bg-[#fdf8f3] border border-slate-200 rounded-md">
                  <h3 className="font-semibold">Extension or loft planning drawings</h3>
                  <div className="mt-1 font-semibold">from £750 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Existing and proposed plans and elevations for planning applications.
                  </p>
                </div>

                <div className="p-4 bg-[#fdf8f3] border border-slate-200 rounded-md">
                  <h3 className="font-semibold">Measured survey in Harrow</h3>
                  <div className="mt-1 font-semibold">from £150 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    On-site measured survey for accurate existing drawings.
                  </p>
                </div>

                <div className="p-4 bg-[#fdf8f3] border border-slate-200 rounded-md">
                  <h3 className="font-semibold">Building regulation packs</h3>
                  <div className="mt-1 font-semibold">from £950 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Fully detailed construction drawings and sections coordinated with structural engineers.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white uppercase tracking-[0.18em] text-[13px] hover:bg-[#4da4b4]"
                >
                  Request my Harrow fee
                </button>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="max-w-5xl mx-auto text-center px-4 lg:px-6">
              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">
                Ready to move your Harrow project forward
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed fee and recommended next steps for your Harrow project.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 uppercase text-white text-[13px] tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Get my Harrow quote
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
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
