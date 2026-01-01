import Head from "next/head";
import React from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";
import { SmartPlanningAssistant } from "../components/SmartPlanningAssistant";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Merton";

export default function MertonPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Merton" });
  }

  function scrollToForm() {
    const el = document.getElementById("merton-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/merton",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK",
    },
    areaServed: [
      "London Borough of Merton",
      "Wimbledon",
      "South Wimbledon",
      "Wimbledon Park",
      "Raynes Park",
      "West Wimbledon",
      "Morden",
      "Mitcham",
      "Colliers Wood",
      "Tooting borders",
      "Southfields borders",
      "Pollards Hill",
      "Lower Morden",
      "Merton Park",
    ],
    description:
      "Architectural drawing services in Merton for home extensions, loft conversions, internal reconfiguration and building regulation packs. Fixed fees with clear scope for projects in Wimbledon, Mitcham, Morden, Raynes Park and Colliers Wood.",
    priceRange: "££",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    sameAs: ["https://twitter.com/WEDRAWPLANS"],
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Merton?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some rear extensions can be permitted development, but it depends on your property type, previous extensions, conservation constraints and dimensions. We check your site, confirm whether permitted development applies, and advise whether a lawful development certificate or householder planning application is the safer route.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with loft conversion drawings in Wimbledon and Raynes Park?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We prepare existing and proposed drawings for dormers and hip to gable lofts, plus building regulation packs with key construction details. We design to suit the roof form and keep neighbour impact, ridge height and overlooking in mind.",
        },
      },
      {
        "@type": "Question",
        name: "What do I need to get a fixed quote?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your address or postcode, a short description of the works, and any photos or agent floorplans you already have. If you are not sure, send what you have and we will tell you the best next step.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide measured surveys in Merton?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can measure the existing property so the drawings are accurate before design begins. This is recommended for most extensions, lofts and building regulation packs.",
        },
      },
      {
        "@type": "Question",
        name: "Can you produce building regulation drawings as well as planning drawings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. After planning, we can produce a building regulation pack with key plans, sections and details for building control and construction. We can also coordinate with a structural engineer where required.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings in Merton – Extensions, Lofts and Home Projects</title>
        <meta
          name="description"
          content="Planning drawings, extension layouts, loft conversion plans and building regulation packs for homes in Wimbledon, Mitcham, Morden and the wider London Borough of Merton. Fixed fees with clear scope."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/merton" />

        {/* LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />

        {/* FAQ JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* HEADER */}
        <header className="border-b border-slate-200 bg-[#fdf8f3]/90 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 lg:px-6">
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-500 text-xs font-semibold tracking-[0.18em] text-red-700">
                WDP
              </div>
              <div>
                <div className="text-lg font-semibold tracking-[0.2em] uppercase">WEDRAWPLANS</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  Architectural drawing consultants
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PHONE_LINK}
                className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-900 hover:bg-slate-900 hover:text-white"
              >
                📞 {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-1.5 text-[12px] font-medium text-white hover:bg-[#1ebe57]"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </header>

        <main>
          {/* HERO + FORM */}
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 lg:flex-row lg:items-start lg:px-6 lg:py-10">
              {/* TEXT SIDE */}
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Merton architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] sm:text-[26px]">
                  Planning drawings for extensions, lofts and home upgrades
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepares planning and technical drawings for houses and flats across
                  the London Borough of Merton, including Wimbledon, Mitcham, Morden, Colliers Wood
                  and Raynes Park.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Rear and side extensions to family homes</li>
                  <li>• Loft conversions with dormers or hip to gable roofs</li>
                  <li>• Internal remodelling and open plan layouts</li>
                  <li>• Conversions and small residential schemes</li>
                  <li>• Building regulation and construction packs</li>
                  <li>• Support from first sketch through to detailed drawings</li>
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                  >
                    Get my quote
                  </button>
                  <a href={PHONE_LINK} className="text-[13px] font-medium text-slate-800 underline">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>

                {/* Local trust bullets */}
                <div className="mt-6 rounded-xl border border-slate-200 bg-white/70 p-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                    What you get
                  </p>
                  <ul className="mt-2 space-y-1 text-[13px] text-slate-700">
                    <li>• Clear drawing set the council can validate quickly</li>
                    <li>• Fixed fee with scope, deliverables and turnaround explained</li>
                    <li>• Advice on PD vs planning and best submission route</li>
                    <li>• Optional structural coordination and building regs pack</li>
                  </ul>
                </div>
              </div>

              {/* FORM SIDE */}
              <div id="merton-quote" className="lg:w-1/2">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed quote for your home
                  </h2>
                  <p className="mt-1 text-[12px] text-slate-600">
                    Share some basic details and WEDRAWPLANS will send a clear fixed fee for the
                    drawings for your project in Merton.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                    <div>
                      <label className="text-[11px] font-medium text-slate-700">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-medium text-slate-700">Telephone</label>
                        <input
                          name="phone"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-medium text-slate-700">Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-700">Merton postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="SW19, SW20, CR4 or SM4"
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-700">Project type</label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        <option value="Rear extension">Rear extension</option>
                        <option value="Side or wrap extension">Side or wrap extension</option>
                        <option value="Loft conversion">Loft conversion</option>
                        <option value="Internal remodelling">Internal remodelling</option>
                        <option value="Conversion to flats">Conversion to flats</option>
                        <option value="New build house">New build house</option>
                        <option value="Building regulation pack">Building regulation pack only</option>
                        <option value="Other project">Other domestic project</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-700">Brief description</label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear extension and loft conversion to a terraced house in Wimbledon with new open plan kitchen."
                        className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                    >
                      Get my quote
                    </button>

                    <p className="pt-2 text-[11px] text-slate-500">
                      Tip: If you have Rightmove screenshots, photos, or sketches, mention it in the
                      brief and we will tell you what helps speed up the quote.
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
                Typical home projects in Merton
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Merton includes Victorian and Edwardian terraces, post war houses and newer
                developments. Many owners extend or reconfigure their existing home to create more
                family space instead of moving.
              </p>

              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Rear and side extensions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Rear kitchen and living extensions, often combined with side infill to create
                    wider open plan rooms with better connection to the garden. We set out the
                    proposal clearly with sections where needed to explain height and neighbour
                    relationship.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Dormer and hip to gable loft conversions to add bedrooms and bathrooms above.
                    We consider window positions, overlooking and roof form so the design reads well
                    from street level.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Internal remodelling
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Adjusting layouts, removing walls with structural input and making better use of
                    ground floor and first floor space for day to day living. We can add measured
                    surveys so the existing plan is accurate.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Conversions and small schemes
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Feasibility layouts and full planning drawings for small infill plots and
                    conversions to self contained flats where local policies allow. We help set out
                    unit layouts clearly and advise what extra reports may be needed.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SMART PLANNING ASSISTANT */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <SmartPlanningAssistant boroughName="Merton" />
            </div>
          </section>

          {/* PLANNING GUIDANCE */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Planning guidance for Merton
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Merton has local guidance on house extensions, roof enlargements, daylight, outlook
                and neighbour impact. Many projects are achievable when size, height and windows are
                set out carefully from the start.
              </p>

              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-[#fdf8f3] p-5">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    How we reduce planning risk
                  </h3>
                  <ul className="mt-3 space-y-2 text-slate-800">
                    <li>• Review of local policies that relate to your street</li>
                    <li>• Check whether permitted development rights still apply</li>
                    <li>• Drawings that explain massing, height and neighbour relationships</li>
                    <li>• Window strategy to limit overlooking where relevant</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Typical planning submission
                  </h3>
                  <ul className="mt-3 space-y-2 text-slate-700">
                    <li>• Existing and proposed plans and elevations</li>
                    <li>• Site / location plan and roof plan if needed</li>
                    <li>• Design and access style statement for clarity</li>
                    <li>• Support during comments and minor revisions</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 max-w-3xl text-[13px] text-slate-700">
                The goal is simple: give the council a clear, professional set of drawings that show
                how your proposal fits with the property and the wider terrace or street.
              </p>
            </div>
          </section>

          {/* FAQ (visible) */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Merton drawings FAQ
              </h2>

              <div className="mt-5 space-y-4 text-[13px]">
                <div className="rounded-xl border border-slate-200 p-5">
                  <p className="font-semibold text-slate-900">
                    How fast can you start in Merton
                  </p>
                  <p className="mt-2 text-slate-700">
                    We typically arrange an initial survey within 48 hours depending on availability,
                    then confirm the drawing programme once the existing layout is captured.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <p className="font-semibold text-slate-900">
                    Do you handle the planning submission
                  </p>
                  <p className="mt-2 text-slate-700">
                    Yes. We can prepare the drawings and support the full submission route. If you
                    prefer to submit yourself, we will still provide everything in a validation ready
                    format.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <p className="font-semibold text-slate-900">
                    Can you work with builders and structural engineers
                  </p>
                  <p className="mt-2 text-slate-700">
                    Yes. We coordinate structural inputs where required and can issue a clear pack
                    for pricing, building control and construction.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                >
                  Get my quote
                </button>
              </div>
            </div>
          </section>

          {/* FEES */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Clear fixed fees for your home project
              </h2>

              <div className="mt-5 grid gap-4 text-[13px] md:grid-cols-3">
                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">Planning drawings</h3>
                  <p className="mt-1 text-[13px] font-semibold text-slate-900">from £750 + VAT</p>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Existing and proposed plans and elevations ready for planning or lawful
                    development applications.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">Measured surveys</h3>
                  <p className="mt-1 text-[13px] font-semibold text-slate-900">from £150 + VAT</p>
                  <p className="mt-2 text-[12px] text-slate-600">
                    On site measured surveys so existing drawings reflect the property accurately
                    before design begins.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">Building regulation packs</h3>
                  <p className="mt-1 text-[13px] font-semibold text-slate-900">from £950 + VAT</p>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Technical sections, details and coordinated notes ready for building control
                    and tender.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={scrollToForm}
                className="mt-5 rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
              >
                Request my fixed fee
              </button>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Ready to obtain your planning approval
              </h2>
              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will respond with a clear fixed fee and suggested
                next steps for your extension, loft or internal remodelling in Merton.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                >
                  Get my quote
                </button>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  💬 WhatsApp
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  📞 Call {PHONE_DISPLAY}
                </a>
              </div>

              <p className="mt-4 text-[11px] text-slate-500">
                Areas covered in Merton: Wimbledon, South Wimbledon, Raynes Park, Morden, Mitcham,
                Colliers Wood and nearby streets.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
