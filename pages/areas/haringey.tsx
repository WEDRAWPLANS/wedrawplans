import React from "react";
import Head from "next/head";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Haringey";

export default function HaringeyAreaPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(Object.fromEntries(data.entries()));
    alert(
      "Thank you. In the live site this form will email WEDRAWPLANS with your Haringey enquiry and trigger a same day call back."
    );
    e.currentTarget.reset();
  }

  function scrollToForm() {
    const el = document.getElementById("haringey-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Haringey – Extensions, Lofts and New Builds
        </title>
        <meta
          name="description"
          content="Architectural drawings in Haringey for house extensions, loft conversions, flat conversions, new builds and building regulation packs. Fixed fees from £750 with fast turnaround."
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* SIMPLE HEADER */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 lg:px-6">
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-500 text-xs font-semibold tracking-[0.18em] text-red-700">
                WD
              </div>
              <div className="leading-tight">
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
                className="hidden items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white sm:inline-flex"
              >
                <span>📞</span>
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-[#25D366] px-3 py-1.5 text-[12px] font-medium text-white shadow-sm hover:bg-[#1ebe57]"
              >
                <span>💬</span>
                <span className="hidden sm:inline">WhatsApp us</span>
                <span className="sm:hidden">Chat</span>
              </a>
            </div>
          </div>
        </header>

        <main>
          {/* HERO + FORM */}
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 lg:flex-row lg:items-start lg:px-6 lg:py-10">
              {/* Text */}
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Haringey architectural drawings
                </p>
                <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900 sm:text-[26px]">
                  Plans for extensions, lofts and new builds in Haringey
                </h1>
                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house
                  extensions, loft conversions, flat conversions and new builds
                  across the London Borough of Haringey. Fixed fees with clear scope
                  and fast communication.
                </p>
                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• House extensions, loft conversions and internal remodelling</li>
                  <li>• Flat conversions and small residential schemes</li>
                  <li>• New build houses and mews-style infill developments</li>
                  <li>• Planning drawings and building regulation packs</li>
                  <li>• Covering Crouch End, Muswell Hill, Tottenham, Wood Green and more</li>
                  <li>• Same day response on most enquiries</li>
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                  >
                    Get my Haringey quote
                  </button>
                  <a
                    href={PHONE_LINK}
                    className="text-[13px] font-medium text-slate-800 underline"
                  >
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* Form */}
              <div id="haringey-quote" className="lg:w-1/2">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed quote for Haringey projects
                  </h2>
                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your property in Haringey and what you plan
                    to build. We will send a clear fixed fee for your drawings.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-3 space-y-3 text-[13px]"
                  >
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Name
                      </label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium text-slate-700">
                          Telephone
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium text-slate-700">
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Haringey postcode
                      </label>
                      <input
                        name="postcode"
                        required
                        placeholder="N8 7AA"
                        onFocus={(e) => {
                          e.target.placeholder = "";
                        }}
                        onBlur={(e) => {
                          if (!e.target.value) {
                            e.target.placeholder = "N8 7AA";
                          }
                        }}
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Project type
                      </label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        <option value="House extension">House extension</option>
                        <option value="Loft conversion">Loft conversion</option>
                        <option value="Internal remodelling">
                          Internal remodelling only
                        </option>
                        <option value="New build house">New build house</option>
                        <option value="Conversion to flats">
                          Conversion to self contained flats
                        </option>
                        <option value="Building regulation pack only">
                          Building regulation pack only
                        </option>
                        <option value="Other project">Other domestic project</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Brief description of your Haringey project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear extension and loft conversion to a terrace in Haringey with open plan kitchen and extra bedroom."
                        className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                    >
                      Get my Haringey quote
                    </button>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Typical Haringey projects include extensions and loft conversions
                      to Victorian and Edwardian terraces, flat conversions and new
                      build infill houses around Crouch End, Muswell Hill and Tottenham.
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
                Common project types in Haringey
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Haringey has a mix of Victorian and Edwardian streets, interwar semis
                and post war housing, from Crouch End and Muswell Hill down to
                Tottenham and Wood Green. Many owners extend, convert lofts or
                reconfigure layouts to create better family homes.
              </p>
              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Rear and side extensions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Rear kitchen and dining extensions, side return infills and
                    wrap-around schemes are common in Crouch End, Stroud Green and
                    Muswell Hill. We plan structure, glazing and daylight carefully,
                    especially in conservation areas.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Dormer lofts and hip to gable conversions provide extra bedrooms
                    and bathrooms to terraces and semis across Haringey. We set out
                    stairs, headroom and fire protection in line with building
                    regulations.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Flat conversions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Larger period houses in areas such as Harringay Ladder, Tottenham
                    and Wood Green can sometimes be converted into self contained
                    flats. We prepare layouts, access and amenity details in line with
                    local planning policy and standards.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    New build and infill plots
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Side plots, garages and backland sites across the borough can
                    offer scope for new houses or small schemes. We prepare full
                    drawing packages for planning applications, including layouts and
                    elevations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* LOCAL FOCUS */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Areas of Haringey covered
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                WEDRAWPLANS support projects across the whole of Haringey, including:
              </p>
              <ul className="mt-4 grid gap-2 text-[13px] text-slate-800 md:grid-cols-2">
                <li>• Crouch End and Stroud Green</li>
                <li>• Muswell Hill and Highgate side of the borough</li>
                <li>• Harringay Ladder and Green Lanes</li>
                <li>• Wood Green and Alexandra Park</li>
                <li>• Tottenham, Tottenham Hale and Seven Sisters</li>
                <li>• Surrounding neighbourhoods within the borough</li>
              </ul>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Projects can be handled fully online with drawings issued by email, or
                combined with on site measured surveys where required.
              </p>
            </div>
          </section>

          {/* PRICING REMINDER */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Clear fixed fees for Haringey projects
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Fees for Haringey projects follow the same clear structure as the rest
                of London, with adjustments for size, complexity and conservation or
                heritage constraints where relevant.
              </p>
              <div className="mt-5 grid gap-4 text-[13px] md:grid-cols-3">
                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Extension or loft planning drawings
                  </h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £750 + VAT
                  </div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Existing and proposed plans and elevations set out for householder
                    planning or lawful development applications.
                  </p>
                </div>
                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Measured survey in Haringey
                  </h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £150 + VAT
                  </div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    On site survey of your property so that accurate existing drawings
                    can be prepared before design work begins.
                  </p>
                </div>
                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Building regulation packs
                  </h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £950 + VAT
                  </div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Technical drawings, sections and construction notes coordinated
                    with structural engineers for building control.
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Request my Haringey fee
                </button>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Ready to move your Haringey project forward
              </h2>
              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed
                fee and suggested next steps for your Haringey extension, loft,
                new build or technical pack.
              </p>
              <div className="mt-5 flex flex-wrap justify_center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Get my Haringey quote
                </button>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  <span>💬</span>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
