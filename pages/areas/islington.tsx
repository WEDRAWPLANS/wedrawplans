import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Islington";

export default function IslingtonAreaPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(Object.fromEntries(data.entries()));
    alert(
      "Thank you. On the live site this form will email WEDRAWPLANS with your Islington enquiry and trigger a same-day call back."
    );
    e.currentTarget.reset();
  }

  function scrollToForm() {
    const el = document.getElementById("islington-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Islington – Extensions, Lofts & Conversions
        </title>
        <meta
          name="description"
          content="Architectural drawings in Islington for extensions, loft conversions, flat conversions and building regulation packs. Fixed fees from £750 with fast turnaround."
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* HEADER */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 lg:px-6">

            {/* LOGO */}
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 grid place-items-center rounded-full border border-slate-500 text-xs font-semibold tracking-[0.18em] text-red-700">
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

        {/* MAIN CONTENT */}
        <main>
          {/* HERO + FORM */}
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">

              {/* TEXT LEFT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Islington architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase tracking-[0.14em] leading-snug">
                  Plans for extensions, lofts & conversions in Islington
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for extensions,
                  loft conversions, flat conversions, internal remodelling and new
                  builds across the London Borough of Islington. Fast communication
                  and fixed fees.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Extensions, lofts & internal remodelling</li>
                  <li>• Basement and lower ground alterations</li>
                  <li>• Flat conversions & HMOs</li>
                  <li>• New build homes & infill developments</li>
                  <li>• Covering Islington, Highbury, Angel, Canonbury & Holloway</li>
                  <li>• Same day response on most enquiries</li>
                </ul>

                <div className="mt-5 flex gap-3 flex-wrap">
                  <button
                    onClick={scrollToForm}
                    className="bg-[#64b7c4] hover:bg-[#4da4b4] px-5 py-2.5 rounded-full text-white text-[13px] uppercase tracking-[0.18em] font-semibold"
                  >
                    Get my Islington quote
                  </button>

                  <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* FORM RIGHT */}
              <div id="islington-quote" className="lg:w-1/2">
                <div className="bg-white rounded-2xl shadow-md p-5">

                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em]">
                    Free fixed quote for Islington projects
                  </h2>

                  <p className="text-[12px] text-slate-600 mt-1">
                    Tell us about your property in Islington and we will reply
                    with a clear fixed fee.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3 text-[13px] mt-3">

                    {/* NAME */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        name="name"
                        required
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
                      <label className="text-[11px] font-medium">Islington postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="N1 2XY"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                          !e.target.value && (e.target.placeholder = "N1 2XY")
                        }
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* PROJECT TYPE */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Project type</label>
                      <select
                        name="projectType"
                        defaultValue=""
                        required
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4]"
                      >
                        <option value="" disabled>Select project type</option>
                        <option>House extension</option>
                        <option>Loft conversion</option>
                        <option>Internal remodelling</option>
                        <option>Basement works</option>
                        <option>Flat conversion</option>
                        <option>New build house</option>
                        <option>Building regulation pack only</option>
                        <option>Other domestic project</option>
                      </select>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">
                        Brief description of your Islington project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="Example: rear extension & loft conversion to a terraced house near Upper Street."
                        className="w-full border border-slate-300 bg-white rounded px-2 py-2 focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      className="w-full bg-[#64b7c4] hover:bg-[#4da4b4] text-white py-2.5 rounded-full text-[13px] uppercase tracking-[0.2em]"
                    >
                      Get my Islington quote
                    </button>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Typical Islington projects include extensions, lofts, basements and flat conversions.
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
                Common project types in Islington
              </h2>

              <p className="text-[13px] mt-3 max-w-3xl text-slate-700">
                Islington has a wide range of Georgian, Victorian and terraced properties.
                Many homeowners extend or convert to increase living space while preserving
                the area's character.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-5 text-[13px]">

                <div>
                  <h3 className="uppercase text-[14px] tracking-[0.14em] font-semibold">
                    Rear & side extensions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Common across Highbury, Canonbury and Angel. We design layouts that maximise space,
                    glazing and daylight.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] tracking-[0.14em] font-semibold">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Rear dormers and mansard lofts are widespread across Islington terraces.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] tracking-[0.14em] font-semibold">
                    Basement & lower ground works
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Many terraces benefit from additional lower-ground living space.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] tracking-[0.14em] font-semibold">
                    Flat conversions & HMOs
                  </h3>
                  <p className="mt-2 text-slate-700">
                    We prepare layouts, access strategies and amenity assessments for planning.
                  </p>
                </div>

              </div>

            </div>
          </section>

          {/* AREAS */}
          <section className="bg-[#f8f4f0] border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">

              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">
                Areas of Islington covered
              </h2>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                WEDRAWPLANS support projects throughout the borough, including:
              </p>

              <ul className="grid md:grid-cols-2 gap-2 mt-4 text-[13px] text-slate-800">
                <li>• Islington</li>
                <li>• Highbury</li>
                <li>• Angel</li>
                <li>• Canonbury</li>
                <li>• Holloway</li>
                <li>• Barnsbury</li>
              </ul>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                We offer site surveys or fully remote design based on your needs.
              </p>

            </div>
          </section>

          {/* PRICING */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">

              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">
                Clear fixed fees for Islington projects
              </h2>

              <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
                Fees follow the same clear London-wide structure, with adjustments for
                basements and flat conversions.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-5 text-[13px]">

                <div className="p-4 bg-[#fdf8f3] border border-slate-200 rounded-md">
                  <h3 className="font-semibold">Planning drawings</h3>
                  <div className="mt-1 font-semibold">from £750 + VAT</div>
                  <p className="text-[12px] mt-2 text-slate-600">
                    Full existing & proposed drawings suitable for planning.
                  </p>
                </div>

                <div className="p-4 bg-[#fdf8f3] border border-slate-200 rounded-md">
                  <h3 className="font-semibold">Measured survey in Islington</h3>
                  <div className="mt-1 font-semibold">from £150 + VAT</div>
                  <p className="text-[12px] mt-2 text-slate-600">
                    On-site survey providing accurate existing plans.
                  </p>
                </div>

                <div className="p-4 bg-[#fdf8f3] border border-slate-200 rounded-md">
                  <h3 className="font-semibold">Building regulation pack</h3>
                  <div className="mt-1 font-semibold">from £950 + VAT</div>
                  <p className="text-[12px] mt-2 text-slate-600">
                    Sections, notes & details coordinated with structural engineers.
                  </p>
                </div>

              </div>

              <div className="mt-5">
                <button
                  onClick={scrollToForm}
                  className="bg-[#64b7c4] hover:bg-[#4da4b4] px-5 py-2.5 rounded-full text-white text-[13px] uppercase tracking-[0.18em]"
                >
                  Request my Islington fee
                </button>
              </div>

            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10 text-center">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">

              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">
                Ready to move your Islington project forward?
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed fee
                and next steps for your project.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="bg-[#64b7c4] hover:bg-[#4da4b4] px-5 py-2.5 rounded-full text-white text-[13px] uppercase tracking-[0.18em]"
                >
                  Get my Islington quote
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
