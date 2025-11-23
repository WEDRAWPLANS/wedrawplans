import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20the%20Surrey%20Borders%20%2F%20M25%20area";

export default function SurreyBordersM25AreaPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(Object.fromEntries(data.entries()));
    alert(
      "Thank you. In the live site this form will email WEDRAWPLANS with your Surrey Borders / M25 enquiry and trigger a same day call back."
    );
    e.currentTarget.reset();
  }

  function scrollToForm() {
    const el = document.getElementById("surreyborders-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings – Surrey Borders & M25 | Extensions, Lofts, New Builds
        </title>
        <meta
          name="description"
          content="Architectural drawings for homes on the Surrey Borders and around the M25. Extensions, loft conversions, new builds and building regulation packs. Fixed fees with fast turnaround."
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* HEADER */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 lg:px-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-500 text-xs font-semibold tracking-[0.18em] text-red-700">
                WD
              </div>
              <div className="leading-tight">
                <div className="text-lg font-semibold uppercase tracking-[0.2em]">
                  WEDRAWPLANS
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  Architectural drawing consultants
                </div>
              </div>
            </div>

            {/* Phone + WhatsApp */}
            <div className="flex items-center gap-2">
              <a
                href={PHONE_LINK}
                className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] shadow-sm hover:bg-slate-900 hover:text-white"
              >
                📞 {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-[#25D366] px-3 py-1.5 text-[12px] text-white shadow-sm hover:bg-[#1ebe57]"
              >
                💬 <span className="hidden sm:inline">WhatsApp us</span>
              </a>
            </div>
          </div>
        </header>

        <main>
          {/* HERO + FORM */}
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 lg:flex-row lg:items-start lg:px-6 lg:py-10">
              {/* TEXT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Surrey Borders / M25 architectural drawings
                </p>
                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900">
                  Plans for extensions, lofts and new builds across the Surrey Borders & M25 area
                </h1>
                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and building regulation drawings for homes
                  across the Surrey Borders and wider M25 corridor. Fixed fees, fast
                  turnaround and clear communication from start to approval.
                </p>
                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• House extensions and open plan remodelling</li>
                  <li>• Loft conversions and roof alterations</li>
                  <li>• New build homes and small developments</li>
                  <li>• Outbuildings and garden studios</li>
                  <li>• Building regulation drawings and construction packs</li>
                  <li>• Covering Surrey Borders, Epsom, Ewell, Chessington, Banstead, Purley, Coulsdon, Caterham and M25 areas</li>
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4]"
                  >
                    Get my Surrey Borders quote
                  </button>
                  <a
                    href={PHONE_LINK}
                    className="text-[13px] font-medium text-slate-800 underline"
                  >
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* FORM */}
              <div id="surreyborders-quote" className="lg:w-1/2">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed quote for Surrey Borders / M25 projects
                  </h2>
                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us about your property and what you plan to build. We will send
                    a clear fixed fee and next steps.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    {/* Phone + Email */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium text-slate-700">Telephone</label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium text-slate-700">Email</label>
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
                      <label className="text-[11px] font-medium text-slate-700">
                        Surrey Borders / M25 postcode
                      </label>
                      <input
                        name="postcode"
                        required
                        placeholder="KT17 3AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => {
                          if (!e.target.value) e.target.placeholder = "KT17 3AA";
                        }}
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-slate-500/70 focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* Project type */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">Project type</label>
                      <select
                        name="projectType"
                        defaultValue=""
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                      >
                        <option value="" disabled>Select project type</option>
                        <option value="House extension">House extension</option>
                        <option value="Loft conversion">Loft conversion</option>
                        <option value="Internal remodelling">Internal remodelling only</option>
                        <option value="New build house">New build house</option>
                        <option value="Outbuilding">Outbuilding / garden studio</option>
                        <option value="Building regulation pack only">Building regulation pack only</option>
                        <option value="Other project">Other domestic project</option>
                      </select>
                    </div>

                    {/* Description */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Brief description of your project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: double storey side extension in Banstead with large kitchen-diner and new loft above."
                        className="w-full rounded border border-slate-300 bg-white px-2 py-2 focus:border-[#64b7c4]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-[#4da4b4]"
                    >
                      Get my Surrey Borders quote
                    </button>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Typical Surrey Borders / M25 projects include extensions, loft conversions,
                      new builds and outbuildings in Epsom, Ewell, Banstead, Purley and Caterham.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* COMMON PROJECT TYPES */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Common project types in Surrey Borders / M25
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Homes across the Surrey Borders and wider M25 area include semis, detached
                houses, bungalows and modern estates. Many owners extend or remodel to
                create modern open plan layouts and maximise property value.
              </p>

              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Rear and side extensions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Popular for creating large kitchen-diner spaces, utility rooms and
                    open plan living. We set out structure, drainage and glazing layouts.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Dormer and hip-to-gable lofts are common across the Surrey border towns.
                    We design stairs, headroom and fire protection details.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    New build homes
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Many areas around the M25 have potential for infill or replacement dwellings.
                    We prepare full planning drawings for new build applications.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Outbuildings and garden studios
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    High-spec garden rooms for offices, gyms or studios. Drawings prepared for
                    planning or permitted development routes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* AREAS COVERED */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Areas covered on the Surrey Borders / M25 corridor
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                WEDRAWPLANS support projects across:
              </p>

              <ul className="mt-4 grid gap-2 text-[13px] text-slate-800 md:grid-cols-2">
                <li>• Epsom, Ewell & Chessington</li>
                <li>• Banstead, Tadworth & Kingswood</li>
                <li>• Purley, Kenley & Coulsdon</li>
                <li>• Caterham, Warlingham & Whyteleafe</li>
                <li>• M25 corridor south & south-west edges</li>
                <li>• Surrounding Surrey border villages and towns</li>
              </ul>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Projects can be fully managed online with drawings issued by email, or combined
                with on-site measured surveys where required.
              </p>
            </div>
          </section>

          {/* PRICING */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Clear fixed fees for Surrey Borders / M25 projects
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Fees follow our standard London structure with adjustments for larger
                detached properties and extended travel distances where applicable.
              </p>

              <div className="mt-5 grid gap-4 text-[13px] md:grid-cols-3">
                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Extension or loft planning drawings
                  </h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £850 + VAT
                  </div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Existing and proposed plans and elevations for planning or permitted
                    development submissions.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Measured survey
                  </h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £180 + VAT
                  </div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Detailed on-site survey of your property prior to drawing production.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Building regulation packs
                  </h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £1,050 + VAT
                  </div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Full construction notes, sections and technical details coordinated
                    with structural engineering input.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4]"
                >
                  Request my Surrey Borders fee
                </button>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Ready to move your Surrey Borders project forward?
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed fee
                and suggested next steps for your Surrey Borders / M25 extension, loft,
                outbuilding or new build project.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4]"
                >
                  Get my Surrey Borders quote
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
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
