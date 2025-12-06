import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Bexley";

export default function BexleyPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Bexley" });
  }

  function scrollToForm() {
    const el = document.getElementById("bexley-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Bexley – Extensions, Lofts and New Builds
        </title>
        <meta
          name="description"
          content="Architectural drawings in Bexley for house extensions, loft conversions, refurbishments and new builds. Fixed fee planning and building regulation packs covering Bexleyheath, Welling, Sidcup, Erith and the wider borough."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/bexley" />
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
                  Bexley architectural drawings
                </p>
                <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900 sm:text-[26px]">
                  Plans for extensions, lofts and new builds in Bexley
                </h1>
                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house
                  extensions, loft conversions, refurbishments and new build
                  homes across the London Borough of Bexley. We focus on clear
                  drawings, fast responses and fixed fees so that you can move
                  from idea to permission and construction with confidence.
                </p>
                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Rear, side and wrap extensions to homes in Bexley</li>
                  <li>• Dormer and hip to gable loft conversions</li>
                  <li>• Internal remodelling and open plan layouts</li>
                  <li>• Garage conversions and outbuildings</li>
                  <li>• Small new build plots and infill housing</li>
                  <li>• Planning drawings and building regulation packs</li>
                  <li>
                    • Covering Bexleyheath, Welling, Sidcup, Crayford, Erith and
                    surrounding areas
                  </li>
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                  >
                    Get my Bexley quote
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
              <div id="bexley-quote" className="lg:w-1/2">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed quote for Bexley projects
                  </h2>
                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your property in Bexley and what you
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
                        Bexley postcode
                      </label>
                      <input
                        name="postcode"
                        required
                        placeholder="DA6 7AB"
                        onFocus={(e) => {
                          e.target.placeholder = "";
                        }}
                        onBlur={(e) => {
                          if (!e.target.value) {
                            e.target.placeholder = "DA6 7AB";
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
                        Brief description of your Bexley project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear extension and loft conversion to a semi detached house in Bexleyheath with open plan kitchen and new master bedroom."
                        className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                    >
                      Get my Bexley quote
                    </button>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Typical Bexley projects include extensions, loft conversions,
                      garage conversions and internal layout changes to family
                      houses and bungalows.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* WHY HOMEOWNERS IN BEXLEY USE WEDRAWPLANS */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Why homeowners in Bexley work with WEDRAWPLANS
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Streets in Bexley include many traditional family houses and
                bungalows, and many owners choose to extend rather than move
                further out. Our role is to prepare drawings and information that
                make it easier to secure permission and for builders and engineers
                to work accurately.
              </p>
              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-3">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Focus on domestic projects
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    We concentrate on extensions, lofts and small residential
                    schemes, so the layouts, stairs, structure and glazing are set
                    out with planning and construction in mind from the start.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Clear communication
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    You deal directly with the designers preparing your drawings.
                    We keep email and WhatsApp messages clear and practical so you
                    know what is happening at each stage.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Fixed fees agreed up front
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Every project receives a written fixed fee proposal. Options
                    for planning only, planning plus building regulation packs and
                    further support are set out before work begins.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* COMMON PROJECT TYPES IN BEXLEY */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Common project types in Bexley
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                The borough covers Bexleyheath, Welling, Sidcup, Erith, Crayford,
                Belvedere and surrounding neighbourhoods. Typical projects include:
              </p>
              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Rear and side extensions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Single and double storey extensions to enlarge kitchens,
                    dining rooms and family spaces. We consider roof design,
                    glazing and neighbour impact so that the scheme is both
                    practical and more likely to be supported.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Loft conversions and dormers
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Rear dormers, hip to gable lofts and L shaped conversions to
                    add bedrooms and bathrooms. Stairs, headroom and fire
                    protection are set out clearly for builders and building
                    control.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Garage and outbuilding conversions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Conversion of attached and detached garages or garden rooms
                    into usable living space, hobbies rooms or offices. We plan
                    openings, insulation and drainage so that technical approval
                    is simpler.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Small new builds and plots
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Some side gardens and larger plots can support an extra home
                    or pair of houses. We test layout and access, then prepare
                    full plans and elevations for planning applications.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PLANNING AND PERMITTED DEVELOPMENT IN BEXLEY */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Planning and permitted development in Bexley
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Bexley follows its Local Plan alongside the London Plan. Many
                smaller extensions and lofts to houses can be carried out under
                permitted development, while larger schemes, conversions and new
                dwellings require full planning permission.
              </p>
              <ul className="mt-4 space-y-2 text-[13px] text-slate-800">
                <li>
                  • We check whether your property benefits from permitted
                  development rights and whether any Article 4 directions apply.
                </li>
                <li>
                  • For straightforward house extensions and lofts we can often
                  prepare and submit a householder planning application or Lawful
                  Development Certificate.
                </li>
                <li>
                  • For flats, conversions and small new build schemes we prepare
                  full plans, elevations and basic supporting information.
                </li>
                <li>
                  • Where helpful, we can add simple diagrams to explain
                  overlooking, daylight or privacy relationships.
                </li>
              </ul>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                If you are unsure whether your project in Bexley needs planning
                permission or can follow permitted development, we can outline
                the options and tailor the drawings accordingly.
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
                    You share your outline ideas using the form or by phone. For
                    many Bexley projects we can start from your measurements and
                    photos, and for others we arrange a measured survey.
                  </p>
                </div>
                <div className="rounded-md border border-slate-200 bg-white p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    2. Design and planning submission
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    We prepare design options where needed and then complete full
                    plans and elevations. Once you are happy, we submit drawings
                    to the council and respond to plan comments.
                  </p>
                </div>
                <div className="rounded-md border border-slate-200 bg-white p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    3. Building regulation and construction
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    After planning approval we can prepare building regulation
                    drawings and coordinate with a structural engineer so your
                    chosen builder has a clear technical pack to work from.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FEES AND AREAS COVERED */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Fees and areas covered in Bexley
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Fees for Bexley follow the same structure as the rest of London,
                with adjustments for size and complexity. A written fixed fee
                proposal is provided before any drawing work starts.
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
                    lofts to houses in Bexleyheath, Welling, Sidcup, Crayford and
                    nearby streets.
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
                    On site measured surveys where required so that existing
                    drawings accurately reflect your property before design and
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
                    Detailed technical drawings, sections and notes coordinated
                    with structural engineers for building control and contractors.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="max-w-3xl text-[13px] text-slate-700">
                  We support projects across the whole borough including
                  Bexleyheath, Welling, Sidcup, Erith, Crayford, Belvedere and
                  surrounding areas.
                </p>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Request my Bexley fee
                </button>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Ready to move your Bexley project forward
              </h2>
              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed
                fee and suggested next steps for your Bexley extension, loft
                conversion, refurbishment or small new build scheme.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Get my Bexley quote
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
