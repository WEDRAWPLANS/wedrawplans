import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Enfield";

export default function EnfieldAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  await submitBoroughLead(e, { boroughName: "Enfield" });
}

  function scrollToForm() {
    const el = document.getElementById("enfield-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Enfield – Extensions, Lofts and New Builds
        </title>
        <meta
          name="description"
          content="Architectural drawings in Enfield for extensions, loft conversions, new builds and building regulation packs. Fixed fees from £750 with fast turnaround."
        />
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
                className="hidden sm:inline-flex gap-1 border border-slate-300 rounded-full px-3 py-1.5 text-[12px] shadow-sm hover:bg-slate-900 hover:text-white"
              >
                📞 {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="inline-flex gap-1 bg-[#25D366] rounded-full px-3 py-1.5 text-[12px] text-white shadow-sm hover:bg-[#1ebe57]"
              >
                💬 <span className="hidden sm:inline">WhatsApp us</span>
              </a>
            </div>
          </div>
        </header>

        <main>
          {/* HERO + FORM */}
          <section className="bg-[#fdf8f3] border-b border-slate-200">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">
              {/* LEFT TEXT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] text-red-700 uppercase tracking-[0.26em] font-semibold">
                  Enfield architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] uppercase tracking-[0.14em] font-semibold leading-snug">
                  Plans for extensions, lofts and new builds in Enfield
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for extensions,
                  loft conversions, internal remodelling and new builds across the
                  London Borough of Enfield. Fixed fees with clear scope and fast
                  communication.
                </p>

                <ul className="mt-4 text-[13px] text-slate-800 space-y-1">
                  <li>• House extensions, loft conversions & layout changes</li>
                  <li>• New build plots and small residential developments</li>
                  <li>• Building regulation & structural coordination packs</li>
                  <li>• Covering Enfield Town, Winchmore Hill, Palmers Green, Edmonton & more</li>
                  <li>• Same day response on most enquiries</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-3 items-center">
                  <button
                    onClick={scrollToForm}
                    className="px-5 py-2.5 rounded-full bg-[#64b7c4] text-white text-[13px] uppercase font-semibold tracking-[0.18em] hover:bg-[#4da4b4]"
                  >
                    Get my Enfield quote
                  </button>

                  <a
                    href={PHONE_LINK}
                    className="text-[13px] underline text-slate-800"
                  >
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div id="enfield-quote" className="lg:w-1/2">
                <div className="bg-white rounded-2xl shadow-md p-5">
                  <h2 className="text-[14px] uppercase tracking-[0.16em] font-semibold">
                    Free fixed quote for Enfield projects
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Provide a few details about your Enfield project and we will reply
                    with a clear fixed fee.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">

                    {/* NAME */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        required
                        name="name"
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* PHONE + EMAIL */}
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

                    {/* POSTCODE */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Enfield postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="EN2 7AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                          !e.target.value && (e.target.placeholder = "EN2 7AA")
                        }
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* PROJECT TYPE */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Project type</label>
                      <select
                        defaultValue=""
                        required
                        name="projectType"
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4]"
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

                    {/* DESCRIPTION */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">
                        Brief description of your Enfield project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="Example: rear extension and loft conversion to a Winchmore Hill semi with new kitchen layout."
                        className="w-full border border-slate-300 rounded px-2 py-2 bg-white focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-full bg-[#64b7c4] text-white uppercase text-[13px] tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get my Enfield quote
                    </button>

                    <p className="text-[11px] text-slate-500 mt-2">
                      Typical Enfield projects include extensions, loft conversions and new builds across
                      Enfield Town, Bush Hill Park, Palmers Green & Grange Park.
                    </p>

                  </form>
                </div>
              </div>

            </div>
          </section>

          {/* COMMON TYPES */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">

              <h2 className="uppercase text-[18px] tracking-[0.16em] font-semibold">
                Common project types in Enfield
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Enfield has a mix of Edwardian, Victorian and 1930s homes, including large semis, terraces
                and detached plots. Many homeowners extend or convert lofts to increase family space.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-5 text-[13px]">
                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Rear & side extensions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Popular across Enfield Town, Winchmore Hill and Palmers Green. We design open plan
                    layouts, structural openings and glazing layouts carefully.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Rear dormer and hip-to-gable lofts are common across Enfield. We prepare stair layouts,
                    headroom checks and fire strategy notes aligned with building control.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Flat conversions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Larger houses can sometimes be converted into self-contained flats. We prepare layouts,
                    access & amenity assessments for Enfield planning.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    New build plots
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Corner plots and long gardens often offer potential for infill or backland development.
                    We prepare full planning drawing packages.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* AREAS */}
          <section className="bg-[#f8f4f0] border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">

              <h2 className="uppercase tracking-[0.16em] text-[18px] font-semibold">
                Areas of Enfield covered
              </h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                WEDRAWPLANS support projects across all of Enfield, including:
              </p>

              <ul className="grid md:grid-cols-2 gap-2 text-[13px] text-slate-800 mt-4">
                <li>• Enfield Town</li>
                <li>• Winchmore Hill</li>
                <li>• Palmers Green</li>
                <li>• Bush Hill Park</li>
                <li>• Edmonton & Upper Edmonton</li>
                <li>• Grange Park & Southgate borders</li>
              </ul>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                We offer both remote design services and on site measured surveys where required.
              </p>

            </div>
          </section>

          {/* PRICING */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">
              <h2 className="uppercase text-[18px] tracking-[0.16em] font-semibold">
                Clear fixed fees for Enfield projects
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Fees follow the same simple London-wide structure, adjusted for project size & complexity.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-5 text-[13px]">

                <div className="p-4 rounded-md border border-slate-200 bg-[#fdf8f3]">
                  <h3 className="font-semibold">Extension or loft planning drawings</h3>
                  <div className="font-semibold mt-1">from £750 + VAT</div>
                  <p className="text-[12px] mt-2 text-slate-600">
                    Full existing and proposed plans & elevations for planning or lawful development.
                  </p>
                </div>

                <div className="p-4 rounded-md border border-slate-200 bg-[#fdf8f3]">
                  <h3 className="font-semibold">Measured survey in Enfield</h3>
                  <div className="font-semibold mt-1">from £150 + VAT</div>
                  <p className="text-[12px] mt-2 text-slate-600">
                    On site survey of your property for accurate existing drawings.
                  </p>
                </div>

                <div className="p-4 rounded-md border border-slate-200 bg-[#fdf8f3]">
                  <h3 className="font-semibold">Building regulation packs</h3>
                  <div className="font-semibold mt-1">from £950 + VAT</div>
                  <p className="text-[12px] mt-2 text-slate-600">
                    Technical drawings, sections & construction notes coordinated with structural engineers.
                  </p>
                </div>

              </div>

              <div className="mt-5">
                <button
                  onClick={scrollToForm}
                  className="px-5 py-2.5 rounded-full bg-[#64b7c4] text-white text-[13px] uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Request my Enfield fee
                </button>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10 text-center">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">
              <h2 className="text-[18px] uppercase font-semibold tracking-[0.16em]">
                Ready to move your Enfield project forward?
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed fee and next steps.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="px-5 py-2.5 rounded-full bg-[#64b7c4] text-white text-[13px] uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Get my Enfield quote
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
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
