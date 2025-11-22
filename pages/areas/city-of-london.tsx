import React from "react";
import Head from "next/head";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20the%20City%20of%20London";

export default function CityOfLondonAreaPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(Object.fromEntries(data.entries()));
    alert(
      "Thank you. In the live site this form will email WEDRAWPLANS with your City of London enquiry and trigger a same day call back."
    );
    e.currentTarget.reset();
  }

  function scrollToForm() {
    const el = document.getElementById("cityoflondon-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in the City of London – Extensions, Conversions & Commercial Works
        </title>
        <meta
          name="description"
          content="Architectural drawings in the City of London for extensions, internal alterations, commercial upgrades, residential conversions and building regulation packs. Fixed fees from £750."
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">

        {/* HEADER */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3 lg:px-6">

            {/* LOGO + TEXT */}
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
                className="hidden sm:inline-flex gap-1 px-3 py-1.5 rounded-full border border-slate-300 text-[12px] shadow-sm hover:bg-slate-900 hover:text-white"
              >
                📞 {PHONE_DISPLAY}
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="inline-flex gap-1 px-3 py-1.5 rounded-full bg-[#25D366] text-white shadow-sm text-[12px] hover:bg-[#1ebe57]"
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

              {/* LEFT SIDE TEXT */}
              <div className="lg:w-1/2">

                <p className="text-[11px] text-red-700 font-semibold uppercase tracking-[0.26em]">
                  City of London architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] uppercase tracking-[0.14em] font-semibold leading-snug">
                  Plans for extensions, conversions & internal works in the City of London
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for residential and 
                  commercial properties within the City of London. This includes internal 
                  alterations, listed building upgrades, office-to-residential conversion 
                  feasibility, and compliance-led building regulation packs.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Residential alterations, extensions and conversions</li>
                  <li>• Commercial layout changes, shopfront alterations & signage</li>
                  <li>• Listed building drawing packages</li>
                  <li>• Planning, lawful development and building regulation packs</li>
                  <li>• Covering the Square Mile and immediate surrounding areas</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-3 items-center">
                  <button
                    onClick={scrollToForm}
                    className="px-5 py-2.5 bg-[#64b7c4] rounded-full text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                  >
                    Get my City of London quote
                  </button>

                  <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>

              </div>

              {/* RIGHT FORM */}
              <div id="cityoflondon-quote" className="lg:w-1/2">

                <div className="bg-white p-5 rounded-2xl shadow-md">

                  <h2 className="uppercase text-[14px] font-semibold tracking-[0.16em] text-slate-900">
                    Free fixed quote for City of London projects
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Provide a few details about your property and project. 
                    We will confirm a clear, fixed fee.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">

                    {/* NAME */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        required
                        name="name"
                        className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* PHONE & EMAIL */}
                    <div className="grid sm:grid-cols-2 gap-3">

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Telephone</label>
                        <input
                          required
                          name="phone"
                          type="tel"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Email</label>
                        <input
                          required
                          name="email"
                          type="email"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4]"
                        />
                      </div>

                    </div>

                    {/* POSTCODE */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">City postcode</label>
                      <input
                        required
                        name="postcode"
                        placeholder="EC1A 4JQ"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                          !e.target.value && (e.target.placeholder = "EC1A 4JQ")
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
                        <option>Internal alteration</option>
                        <option>Commercial layout change</option>
                        <option>Shopfront alteration</option>
                        <option>Extension</option>
                        <option>Conversion to flats</option>
                        <option>Listed building works</option>
                        <option>Building regulation pack only</option>
                        <option>Other project</option>
                      </select>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Brief description of your City project</label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="Example: internal alteration to a commercial unit near Bank station. New layout & regulation drawings required."
                        className="w-full bg-white border border-slate-300 rounded px-2 py-2 focus:border-[#64b7c4]"
                      />
                    </div>

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#64b7c4] text-white rounded-full uppercase text-[13px] tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get my City of London quote
                    </button>

                    <p className="text-[11px] text-slate-500 mt-2">
                      We regularly support City projects including internal alterations,
                      office-to-residential feasibility, signage drawings and listed building work.
                    </p>

                  </form>

                </div>
              </div>

            </div>
          </section>

          {/* COMMON PROJECT TYPES */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">

              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold text-slate-900">
                Common project types in the City of London
              </h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                The City of London contains a mix of historic buildings, converted 
                warehouses, commercial offices and high density mixed-use properties. 
                Many projects involve sensitive internal alterations, commercial upgrades 
                or changes of use.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-5 text-[13px]">

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Internal commercial alterations
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Office reconfigurations, layout changes and compliance-led upgrades 
                    for small commercial units and professional premises.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Shopfront alterations & signage
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Drawings for shopfront changes, signage consent and minor façade 
                    upgrades across the Square Mile.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Residential internal works
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Internal layout changes, small extensions and refurbishment works 
                    for apartments and townhouses in historic areas of the City.
                  </p>
                </div>

                <div>
                  <h3 className="uppercase text-[14px] font-semibold tracking-[0.14em]">
                    Listed building alterations
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Sensitive improvement works requiring detailed drawings coordinated 
                    with heritage requirements.
                  </p>
                </div>

              </div>

            </div>
          </section>

          {/* AREAS COVERED */}
          <section className="bg-[#f8f4f0] border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">

              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">
                Areas of the City of London covered
              </h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                WEDRAWPLANS support projects across the entire Square Mile, including:
              </p>

              <ul className="grid md:grid-cols-2 gap-2 text-[13px] text-slate-800 mt-4">
                <li>• Bank & Mansion House</li>
                <li>• Moorgate & Liverpool Street</li>
                <li>• Barbican & St Paul’s</li>
                <li>• Aldgate & Fenchurch Street</li>
                <li>• Monument & Cannon Street</li>
                <li>• All areas within the Square Mile boundary</li>
              </ul>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                We assist with both residential and commercial schemes, preparing 
                drawings that meet City of London planning and regulation standards.
              </p>

            </div>
          </section>

          {/* PRICING */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">

              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">
                Clear fixed fees for City of London projects
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Fees follow our standard London pricing structure, with adjustments for 
                complexity, listed buildings or commercial requirements.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-5 text-[13px]">

                <div className="p-4 rounded-md border border-slate-200 bg-[#fdf8f3]">
                  <h3 className="font-semibold text-slate-900">Planning drawings</h3>
                  <div className="font-semibold text-slate-900 mt-1">from £750 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Full existing & proposed drawings for small extensions, internal works
                    or layout changes.
                  </p>
                </div>

                <div className="p-4 rounded-md border border-slate-200 bg-[#fdf8f3]">
                  <h3 className="font-semibold text-slate-900">Measured survey</h3>
                  <div className="font-semibold text-slate-900 mt-1">from £150 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Accurate internal laser survey for existing condition drawings.
                  </p>
                </div>

                <div className="p-4 rounded-md border border-slate-200 bg-[#fdf8f3]">
                  <h3 className="font-semibold text-slate-900">Building regulation pack</h3>
                  <div className="font-semibold text-slate-900 mt-1">from £950 + VAT</div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Technical notes, sections and construction drawings coordinated 
                    with structural engineers.
                  </p>
                </div>

              </div>

              <div className="mt-5">
                <button
                  onClick={scrollToForm}
                  className="px-5 py-2.5 bg-[#64b7c4] rounded-full text-white text-[13px] uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Request my City of London fee
                </button>
              </div>

            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="max-w-5xl mx-auto px-4 lg:px-6 text-center">

              <h2 className="uppercase text-[18px] font-semibold tracking-[0.16em]">
                Ready to move your City of London project forward?
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and we will reply with a clear fixed fee 
                and next steps for your City project.
              </p>

              <div className="mt-5 flex justify-center gap-3 flex-wrap">
                
                <button
                  onClick={scrollToForm}
                  className="px-5 py-2.5 bg-[#64b7c4] rounded-full text-[13px] uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                >
                  Get my City of London quote
                </button>

                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-800 text-[13px] hover:bg-slate-900 hover:text-white"
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
