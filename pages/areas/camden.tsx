import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Camden";

export default function CamdenAreaPage() {
 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  await submitBoroughLead(e, { boroughName: "Camden" });
}


  function scrollToForm() {
    const el = document.getElementById("camden-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Camden – Extensions, Lofts & Conversions
        </title>
        <meta
          name="description"
          content="Architectural drawings in Camden for extensions, loft conversions, flat conversions, basement design and building regulation packs. Fixed fees from £750. Fast turnaround."
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">

        {/* HEADER */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 lg:px-6">

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
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-300 text-[12px] shadow-sm hover:bg-slate-900 hover:text-white"
              >
                📞 {PHONE_DISPLAY}
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#25D366] rounded-full text-white text-[12px] shadow-sm hover:bg-[#1ebe57]"
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

              {/* LEFT TEXT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] uppercase tracking-[0.26em] font-semibold text-red-700">
                  Camden architectural drawings
                </p>

                <h1 className="text-[22px] sm:text-[26px] mt-2 uppercase tracking-[0.14em] font-semibold leading-snug">
                  Plans for extensions, lofts & conversions in Camden
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for extensions, loft conversions,
                  flat conversions, basement design, internal alterations and new builds across the
                  London Borough of Camden. Fixed fees with fast communication.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Extensions, lofts & internal remodelling</li>
                  <li>• Basement and lower ground floor alterations</li>
                  <li>• New builds & small residential schemes</li>
                  <li>• Flat conversions & HMOs</li>
                  <li>• Covering Camden Town, Kentish Town, Hampstead, Holborn & more</li>
                  <li>• Same day response on most enquiries</li>
                </ul>

                <div className="mt-5 flex items-center gap-3 flex-wrap">
                  <button
                    onClick={scrollToForm}
                    className="px-5 py-2.5 bg-[#64b7c4] text-white rounded-full text-[13px] uppercase tracking-[0.18em] font-semibold hover:bg-[#4da4b4]"
                  >
                    Get my Camden quote
                  </button>

                  <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div id="camden-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">

                  <h2 className="uppercase text-[14px] tracking-[0.16em] font-semibold text-slate-900">
                    Free fixed quote for Camden projects
                  </h2>

                  <p className="text-[12px] text-slate-600 mt-1">
                    Tell us about your Camden property and what you plan to build. We will send a clear fixed fee.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">

                    {/* NAME */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4]"
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
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4]"
                        />
                      </div>
                    </div>

                    {/* POSTCODE */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Camden postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="NW1 7JR"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                          !e.target.value && (e.target.placeholder = "NW1 7JR")
                        }
                        className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* PROJECT TYPE */}
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
                        <option>Basement / lower ground works</option>
                        <option>New build house</option>
                        <option>Conversion to flats</option>
                        <option>Building regulation pack only</option>
                        <option>Other domestic project</option>
                      </select>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">
                        Brief description of your Camden project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="Example: rear extension to a Camden Town terrace with new loft conversion and internal layout changes."
                        className="w-full bg-white border border-slate-300 rounded px-2 py-2 focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#64b7c4] text-white rounded-full uppercase text-[13px] tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get my Camden quote
                    </button>

                    <p className="text-[11px] text-slate-500 mt-2">
                      Typical Camden projects include extensions, lofts, basement works and flat conversions in Hampstead, Kentish Town and Camden Town.
                    </p>

                  </form>
                </div>
              </div>

            </div>
          </section>

          {/* COMMON PROJECT TYPES */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">

              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">
                Common project types in Camden
              </h2>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                Camden contains many Victorian and Georgian terraces, mansion blocks and
                historic properties. Most projects involve extending, upgrading or reconfiguring
                existing layouts to create more usable modern living space.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-5 text-[13px]">

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Rear & side extensions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Common across Camden Town, Kentish Town and Tufnell Park. We design
                    well-lit open plan layouts with careful structural coordination.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Dormer lofts and mansard roofs are widespread throughout Camden.
                    We prepare compliant stair layouts, fire strategy notes and structural plans.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Basements & lower ground works
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Many properties in Camden have lower ground levels. We prepare drawings
                    for lowering floors, waterproofing layouts and internal upgrades.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Flat conversions & HMOs
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Many larger townhouses can be subdivided into flats. We prepare layouts,
                    access, amenity space and supporting drawings for Camden planning policy.
                  </p>
                </div>

              </div>

            </div>
          </section>

          {/* AREAS */}
          <section className="bg-[#f8f4f0] border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">

              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">
                Areas of Camden covered
              </h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                WEDRAWPLANS support projects across the whole of Camden, including:
              </p>

              <ul className="grid md:grid-cols-2 gap-2 text-[13px] text-slate-800 mt-4">
                <li>• Camden Town</li>
                <li>• Kentish Town</li>
                <li>• Hampstead & Belsize Park</li>
                <li>• Holborn & Bloomsbury</li>
                <li>• Tufnell Park & Gospel Oak</li>
                <li>• King’s Cross & St Pancras</li>
              </ul>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                We can work fully remotely or arrange site measured surveys where required.
              </p>

            </div>
          </section>

          {/* PRICING */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">

              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">
                Clear fixed fees for Camden projects
              </h2>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                Camden projects follow the same clear fee structure used across London,
                with adjustments for basements, flat conversions and heritage constraints.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-5 text-[13px]">

                <div className="p-4 bg-[#fdf8f3] rounded-md border border-slate-200">
                  <h3 className="font-semibold text-slate-900">Planning drawings</h3>
                  <div className="font-semibold text-slate-900 mt-1">from £750 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Existing and proposed drawings suitable for householder or full planning.
                  </p>
                </div>

                <div className="p-4 bg-[#fdf8f3] rounded-md border border-slate-200">
                  <h3 className="font-semibold text-slate-900">Measured survey in Camden</h3>
                  <div className="font-semibold text-slate-900 mt-1">from £150 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Laser-measured survey for accurate existing drawings before design begins.
                  </p>
                </div>

                <div className="p-4 bg-[#fdf8f3] rounded-md border border-slate-200">
                  <h3 className="font-semibold text-slate-900">Building regulation pack</h3>
                  <div className="font-semibold text-slate-900 mt-1">from £950 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Detailed sections, construction details and specifications coordinated
                    with structural engineers.
                  </p>
                </div>

              </div>

              <div className="mt-5">
                <button
                  onClick={scrollToForm}
                  className="px-5 py-2.5 bg-[#64b7c4] text-white rounded-full uppercase text-[13px] tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Request my Camden fee
                </button>
              </div>

            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10 text-center">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">

              <h2 className="uppercase text-[18px] tracking-[0.16em] font-semibold">
                Ready to move your Camden project forward?
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed fee
                and suggested next steps for your Camden extension, loft, conversion or basement project.
              </p>

              <div className="mt-5 flex justify-center gap-3 flex-wrap">
                <button
                  onClick={scrollToForm}
                  className="px-5 py-2.5 bg-[#64b7c4] rounded-full text-white uppercase text-[13px] tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Get my Camden quote
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
