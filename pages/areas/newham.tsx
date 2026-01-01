import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import { SmartPlanningAssistant } from "../../components/SmartPlanningAssistant";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Newham";

export default function NewhamAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Newham" });
  }

  function scrollToForm() {
    const el = document.getElementById("newham-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/newham",
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
      "Newham",
      "East Ham",
      "West Ham",
      "Upton Park",
      "Plaistow",
      "Forest Gate",
      "Manor Park",
      "Canning Town",
      "Custom House",
      "Stratford",
      "Maryland",
      "Beckton",
    ],
    description:
      "Architectural drawing services in Newham for extensions, loft conversions, flat conversions, HMOs, outbuildings and building regulation plans.",
    priceRange: "££",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
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
        name: "Do I need planning permission for a rear extension in Newham?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. Many rear extensions in Newham can be carried out under permitted development. We confirm the correct route once we review your address and house type.",
        },
      },
      {
        "@type": "Question",
        name: "Is Newham strict with loft conversions, HMOs and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Newham is careful with HMOs, flat conversions and large extensions, especially where parking, overcrowding and amenity space are affected. Good quality drawings and clear planning arguments are important.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Newham Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Newham Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We prepare drawings, complete forms, upload documents, submit to Newham Council and respond to planning officer queries.",
        },
      },
      {
        "@type": "Question",
        name: "Can you produce building regulation drawings as well as planning drawings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. After planning we can produce a building regulation pack with key plans, sections and construction notes for building control and for builders to price accurately. We can also coordinate with a structural engineer where required.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings in Newham – Extensions, Lofts and HMOs</title>
        <meta
          name="description"
          content="Planning drawings, loft conversion plans, HMO and flat conversion layouts, and building regulation packs for homes in Newham. Serving East Ham, Stratford, Forest Gate, Plaistow, Canning Town and Beckton. Fixed fees with clear scope."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/newham" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
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
                  Newham architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] sm:text-[26px]">
                  Planning drawings for extensions, lofts, HMOs and conversions
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepares planning and technical drawings for houses and
                  flats across the London Borough of Newham, including Stratford,
                  East Ham, Forest Gate, Plaistow, Canning Town, Beckton and Upton
                  Park.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Rear and side extensions to family homes</li>
                  <li>• Loft conversions with dormers or hip to gable roofs</li>
                  <li>• Flat conversions and internal layout upgrades</li>
                  <li>• HMO layouts and compliance minded design</li>
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
                  <a
                    href={PHONE_LINK}
                    className="text-[13px] font-medium text-slate-800 underline"
                  >
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>

                {/* IMAGE (Barnet style) */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-44 w-full sm:h-52">
                    <Image
                      src="/images/drawings.jpg"
                      alt="Example architectural drawings for a Newham project"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Clear drawings for dense streets
                    </p>
                    <p className="mt-1 text-[13px] text-slate-700">
                      Newham sites often have tight plots, shared boundaries and
                      parking constraints. We set out proposals clearly so councils
                      can validate quickly and builders can price accurately.
                    </p>
                  </div>
                </div>

                {/* Local trust bullets */}
                <div className="mt-6 rounded-xl border border-slate-200 bg-white/70 p-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                    What you get
                  </p>
                  <ul className="mt-2 space-y-1 text-[13px] text-slate-700">
                    <li>• Initial survey within 48 hours</li>
                    <li>• Fixed fee with scope, deliverables and turnaround explained</li>
                    <li>• Advice on PD vs planning and best submission route</li>
                    <li>• Optional structural coordination and building regs pack</li>
                  </ul>
                </div>
              </div>

              {/* FORM SIDE */}
              <div id="newham-quote" className="lg:w-1/2">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed quote for your home
                  </h2>
                  <p className="mt-1 text-[12px] text-slate-600">
                    Share some basic details and WEDRAWPLANS will send a clear fixed
                    fee for the drawings for your project in Newham.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-3 space-y-3 text-[13px]"
                  >
                    <div>
                      <label className="text-[11px] font-medium text-slate-700">
                        Name
                      </label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-medium text-slate-700">
                          Telephone
                        </label>
                        <input
                          name="phone"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-medium text-slate-700">
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-700">
                        Newham postcode
                      </label>
                      <input
                        name="postcode"
                        required
                        placeholder="E6, E7, E13, E15, E16 or E12"
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-700">
                        Project type
                      </label>
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
                        <option value="HMO layout">HMO layout</option>
                        <option value="New build house">New build house</option>
                        <option value="Building regulation pack">Building regulation pack only</option>
                        <option value="Other project">Other domestic project</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-700">
                        Brief description
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: loft conversion with rear dormer in East Ham, or flat conversion layout near Stratford."
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
                      Tip: If you have Rightmove screenshots, photos, or sketches,
                      mention it in the brief and we will tell you what helps speed
                      up the quote.
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
                Typical home projects in Newham
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Newham includes dense terraces, mixed use streets and regeneration
                areas. Many owners extend, convert or reorganise their property to
                create more space or better rental layouts.
              </p>

              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Extensions and open plan layouts
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Rear and side extensions, often combined with internal knock throughs,
                    designed to work on tight plots with shared boundaries.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Dormer and hip to gable loft conversions to add bedrooms and bathrooms,
                    with window strategy to limit overlooking.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    HMOs and flat conversions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Layouts that consider fire safety, amenity standards and practical
                    circulation, plus drawings set up for planning review.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Small schemes and shop conversions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Feasibility layouts and planning drawings for small residential schemes
                    and mixed use conversions where policy allows.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SMART PLANNING ASSISTANT */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <SmartPlanningAssistant boroughName="Newham" />
            </div>
          </section>

          {/* PLANNING GUIDANCE */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Planning guidance for Newham
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Newham can be more sensitive around conversions, HMOs, amenity space,
                parking and overcrowding. A clear drawing set and a sensible layout
                strategy reduces planning risk.
              </p>

              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-[#fdf8f3] p-5">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    How we reduce planning risk
                  </h3>
                  <ul className="mt-3 space-y-2 text-slate-800">
                    <li>• Check if PD rights still apply for your property</li>
                    <li>• Layout strategy for conversions, bins, cycle and amenity</li>
                    <li>• Window and overlooking approach where neighbours are close</li>
                    <li>• Drawings that explain massing, height and constraints clearly</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Typical planning submission
                  </h3>
                  <ul className="mt-3 space-y-2 text-slate-700">
                    <li>• Existing and proposed plans and elevations</li>
                    <li>• Location plan and block plan</li>
                    <li>• Roof plan and sections where needed</li>
                    <li>• Support during comments and minor revisions</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 max-w-3xl text-[13px] text-slate-700">
                The goal is simple: give the council a clear, professional set of
                drawings that show how the proposal fits with the property and the
                wider street.
              </p>
            </div>
          </section>

          {/* FAQ (visible) */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Newham drawings FAQ
              </h2>

              <div className="mt-5 space-y-4 text-[13px]">
                <div className="rounded-xl border border-slate-200 p-5">
                  <p className="font-semibold text-slate-900">
                    How fast can you start in Newham
                  </p>
                  <p className="mt-2 text-slate-700">
                    We typically arrange an initial survey within 48 hours depending on
                    availability, then confirm the drawing programme once the existing
                    layout is captured.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <p className="font-semibold text-slate-900">
                    Do you handle HMO and conversion layouts
                  </p>
                  <p className="mt-2 text-slate-700">
                    Yes. We can prepare layouts and drawings for HMOs and flat conversions,
                    with a focus on compliance minded design and clear planning presentation.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <p className="font-semibold text-slate-900">
                    Do you handle the planning submission
                  </p>
                  <p className="mt-2 text-slate-700">
                    Yes. We can prepare the drawings and support the full submission route.
                    If you prefer to submit yourself, we will still provide everything in a
                    validation ready format.
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
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Planning drawings
                  </h3>
                  <p className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £750 + VAT
                  </p>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Existing and proposed plans and elevations ready for planning or lawful
                    development applications.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Measured surveys
                  </h3>
                  <p className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £150 + VAT
                  </p>
                  <p className="mt-2 text-[12px] text-slate-600">
                    On site measured surveys so existing drawings reflect the property accurately
                    before design begins.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Building regulation packs
                  </h3>
                  <p className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £950 + VAT
                  </p>
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
                next steps for your extension, loft, HMO or conversion in Newham.
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
                Areas covered in Newham: Stratford, East Ham, West Ham, Forest Gate, Manor Park,
                Plaistow, Upton Park, Canning Town, Custom House, Beckton and nearby streets.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
