import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Merton";

export default function MertonPage() {
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
          content="Architectural drawings in Merton for house extensions, loft conversions, refurbishments and new builds. Fixed fee planning and building regulation packs covering Wimbledon, Mitcham, Morden and Colliers Wood."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/merton" />
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
                  Merton architectural drawings
                </p>
                <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900 sm:text-[26px]">
                  Plans for extensions, lofts and new builds in Merton
                </h1>
                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house
                  extensions, loft conversions, refurbishments and new build
                  homes across the London Borough of Merton. We focus on clear
                  drawings, fast responses and fixed fees so that you can move
                  from idea to permission and construction with confidence.
                </p>
                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Rear, side and wrap extensions to houses in Merton</li>
                  <li>• Hip to gable and dormer loft conversions</li>
                  <li>• Internal remodelling and open plan layouts</li>
                  <li>• Small new build plots and infill housing</li>
                  <li>• Planning drawings and building regulation packs</li>
                  <li>• Covering Wimbledon, Mitcham, Morden and Colliers Wood</li>
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                  >
                    Get my Merton quote
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
              <div id="merton-quote" className="lg:w-1/2">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed quote for Merton projects
                  </h2>
                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your property in Merton and what you
                    plan to build. We will send a clear fixed fee for your
                    drawings, usually the same day.
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
                        Merton postcode
                      </label>
                      <input
                        name="postcode"
                        required
                        placeholder="SW19 2AB"
                        onFocus={(e) => {
                          e.target.placeholder = "";
                        }}
                        onBlur={(e) => {
                          if (!e.target.value) {
                            e.target.placeholder = "SW19 2AB";
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
                        Brief description of your Merton project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: wrap around extension and loft conversion to a semi detached house in Wimbledon with open plan kitchen and larger bedrooms."
                        className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                    >
                      Get my Merton quote
                    </button>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Typical Merton projects include extensions and loft
                      conversions to terraced and semi detached houses, as well as
                      refurbishments and internal layout changes.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* WHY HOMEOWNERS IN MERTON USE WEDRAWPLANS */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Why homeowners in Merton work with WEDRAWPLANS
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Many households in Merton extend or convert instead of moving.
                Space is tight, build costs are significant and planning policy
                can be detailed. Our role is to simplify the process and provide
                drawings and information that builders, engineers and the council
                can all understand.
              </p>
              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-3">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Local residential focus
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    We concentrate on domestic extensions, lofts and small
                    residential schemes. This means the layout, stair design,
                    glazing and structure are set out with both planning and
                    construction in mind from the start.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Clear communication
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    You deal directly with the designers preparing your drawings.
                    We explain the process clearly and keep email and WhatsApp
                    updates straightforward, without jargon.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Fixed fees agreed up front
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Every project receives a fixed fee proposal so that you know
                    the cost before drawings begin. Options for planning only,
                    planning plus building regulation packs or full support are
                    set out in writing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* COMMON PROJECT TYPES IN MERTON */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Common project types in Merton
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                The borough includes Wimbledon, Mitcham, Morden, Raynes Park and
                Colliers Wood. Streets contain a mixture of Victorian terraces,
                inter war semis and newer infill housing. Typical projects
                include:
              </p>
              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Rear and side extensions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Single and double storey extensions to provide larger kitchen,
                    dining and family spaces. We look at roof form, roof lights
                    and glazing to bring light in while respecting neighbours.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Loft conversions and roof dormers
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Rear dormers, hip to gable conversions and L shaped lofts to
                    gain extra bedrooms and bathrooms. We coordinate stair
                    positions, headroom, escape routes and bathroom layouts so
                    that the loft feels natural, not squeezed.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Internal remodelling
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Opening rooms together, removing walls and reworking layouts
                    to suit modern living. Our drawings consider structure, fire
                    safety and services so that engineers and builders can price
                    and build with confidence.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Conversions and small new builds
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Larger plots and side gardens can sometimes support an
                    additional dwelling or a small group of homes. We test
                    layouts, parking and access and then develop full plans and
                    elevations for planning.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PLANNING AND PERMITTED DEVELOPMENT */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Planning and permitted development in Merton
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Merton follows the London Plan and its own Local Plan. Many small
                changes to houses can fall under permitted development, while
                larger extensions, lofts with front changes, conversions and new
                dwellings need full planning permission.
              </p>
              <ul className="mt-4 space-y-2 text-[13px] text-slate-800">
                <li>
                  • We review whether your property benefits from permitted
                  development rights or has any local Article 4 directions.
                </li>
                <li>
                  • For householder schemes we can submit a householder planning
                  application or Lawful Development Certificate on your behalf.
                </li>
                <li>
                  • For flats, conversions and new homes we prepare full planning
                  drawings, site plans and other information as required.
                </li>
                <li>
                  • Where helpful, we can include simple daylight, privacy and
                  overlooking diagrams inside the drawing set.
                </li>
              </ul>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                If you are not sure which route is right, we can explain the
                options and tailor our drawings to the approach that gives you
                the best chance of a positive decision.
              </p>
            </div>
          </section>

          {/* THREE STEP PROCESS */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Simple three step process
              </h2>
              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-3">
                <div className="rounded-md border border-slate-200 bg-white p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    1. Discuss and survey
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    You share basic details using the form or by phone. For many
                    projects we can work from supplied measurements and photos,
                    and for others we arrange a measured survey visit in Merton.
                  </p>
                </div>
                <div className="rounded-md border border-slate-200 bg-white p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    2. Design and planning submission
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    We prepare design options if needed, then complete full plans
                    and elevations. Once you are happy we submit drawings to the
                    council and handle plan changes requested by officers.
                  </p>
                </div>
                <div className="rounded-md border border-slate-200 bg-white p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    3. Building regulation and construction
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    When planning is in place we can prepare building regulation
                    drawings and coordinate with a structural engineer so that
                    your chosen contractor has clear information for pricing and
                    construction.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FEES AND AREAS COVERED */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Fees and areas covered in Merton
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Fees for Merton follow the same structure as the rest of London,
                with adjustments for size and complexity. A clear written fee
                schedule is provided before any drawing work begins.
              </p>
              <div className="mt-5 grid gap-4 text-[13px] md:grid-cols-3">
                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Planning drawings
                  </h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £750 + VAT
                  </div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Existing and proposed plans and elevations for extensions and
                    lofts to houses in Wimbledon, Raynes Park, Mitcham and Morden.
                  </p>
                </div>
                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Measured surveys
                  </h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £150 + VAT
                  </div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    On site measured surveys where required, so that existing
                    plans reflect the property accurately before design and
                    engineering.
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
                    Detailed drawings, sections and construction notes coordinated
                    with structural engineers for building control and contractors.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="max-w-3xl text-[13px] text-slate-700">
                  We support projects across the whole borough including
                  Wimbledon, South Wimbledon, Colliers Wood, Mitcham, Morden,
                  Raynes Park and surrounding streets.
                </p>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Request my Merton fee
                </button>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Ready to move your Merton project forward
              </h2>
              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed
                fee and suggested next steps for your Merton extension, loft
                conversion, refurbishment or small new build scheme.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Get my Merton quote
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
