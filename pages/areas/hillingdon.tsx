import Head from "next/head";
import React from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Hillingdon";

export default function HillingdonPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Hillingdon" });
  }

  function scrollToForm() {
    const el = document.getElementById("hillingdon-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/hillingdon",
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
      "Hillingdon",
      "Uxbridge",
      "Hayes",
      "West Drayton",
      "Yiewsley",
      "Ruislip",
      "Ruislip Manor",
      "Ruislip Gardens",
      "Ickenham",
      "Hillingdon Village",
      "Eastcote borders",
      "Northwood borders",
      "Heathrow borders",
    ],
    description:
      "Architectural drawing services in Hillingdon for extensions, loft conversions, garage conversions, refurbishments and building regulation packs. We prepare clear planning drawings and technical packages for homes in Uxbridge, Hayes, West Drayton, Ruislip, Ickenham and surrounding areas.",
    priceRange: "££",
    sameAs: ["https://twitter.com/WEDRAWPLANS"],
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission in Hillingdon?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "It depends on the property and scope. Some home improvements may fall under permitted development, but constraints such as conservation areas, Article 4 directions or local policy can change what is allowed. We review your address and proposal, then advise the correct route (planning, lawful development or building regulations only).",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with side extensions and wrap around extensions in Hillingdon?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We produce drawings for rear, side and wrap around extensions, including layout options, elevations, roof design and key sections. We also prepare supporting notes to reduce objections and improve approval chances.",
        },
      },
      {
        "@type": "Question",
        name: "How much do drawings cost for a Hillingdon project?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Fees depend on scope, size and constraints. As a guide: planning drawings from £950 + VAT, measured surveys from £250 + VAT and building regulation packs from £1,150 + VAT. Use the form to get a fixed fee quotation based on your exact project.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide building regulation drawings and details?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We produce building regulation packs with plans, sections, key details and coordinated notes, suitable for Building Control review and tendering. We also coordinate with structural engineers when openings or strengthening are required.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover all of Hillingdon including Uxbridge, Hayes and Ruislip?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We cover the full borough including Uxbridge, Hayes, West Drayton, Yiewsley, Ruislip, Ickenham and nearby areas.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Hillingdon – Extensions, Lofts and Refurbishments
        </title>
        <meta
          name="description"
          content="Planning drawings, extension layouts, loft conversion plans and building regulation packs for homes in Hillingdon, Uxbridge, Hayes, West Drayton, Ruislip and Ickenham. Fixed fees with clear scope."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/hillingdon" />
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
                WD
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

        {/* HERO + FORM */}
        <section className="border-b border-slate-200 bg-[#fdf8f3]">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 lg:flex-row lg:items-start lg:px-6 lg:py-10">
            {/* TEXT SIDE */}
            <div className="lg:w-1/2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                Hillingdon architectural drawings
              </p>

              <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                Planning drawings for extensions, lofts and home refurbishments
              </h1>

              <p className="mt-3 text-[13px] text-slate-700">
                We prepare planning and technical drawings for houses and flats across Hillingdon,
                including Uxbridge, Hayes, West Drayton, Ruislip and Ickenham.
              </p>

              <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                <li>• Rear and side extensions</li>
                <li>• Loft conversions and dormers</li>
                <li>• Garage conversions and internal reconfiguration</li>
                <li>• Outbuildings and home offices</li>
                <li>• HMO layouts and compliance support</li>
                <li>• Building regulation and tender packs</li>
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

              <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900">
                  Hillingdon tip
                </p>
                <p className="mt-2 text-[13px] text-slate-700">
                  Many homes have side access, garages and generous roof space. A clean measured
                  survey and simple, well explained massing usually speeds up decisions and reduces
                  back and forth.
                </p>
              </div>
            </div>

            {/* FORM SIDE */}
            <div id="hillingdon-quote" className="lg:w-1/2">
              <div className="rounded-2xl bg-white p-5 shadow-md">
                <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Free fixed quote for your home
                </h2>
                <p className="mt-1 text-[12px] text-slate-600">
                  Tell us about your property and what you plan to build and we will send a clear
                  fixed fee for your drawings.
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
                    <label className="text-[11px] font-medium text-slate-700">
                      Hillingdon postcode
                    </label>
                    <input
                      name="postcode"
                      required
                      placeholder="UB3, UB4, UB7, UB8, UB10, HA4 and nearby"
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
                        Select one
                      </option>
                      <option>Extension</option>
                      <option>Loft conversion</option>
                      <option>Garage conversion</option>
                      <option>Internal remodelling</option>
                      <option>Outbuilding</option>
                      <option>Flat conversion</option>
                      <option>HMO layout support</option>
                      <option>Building regulation pack</option>
                      <option>Planning + building regs package</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-slate-700">Project details</label>
                    <textarea
                      name="projectDetails"
                      rows={4}
                      placeholder="Tell us about your Hillingdon project…"
                      className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                  >
                    Get my quote
                  </button>

                  <p className="text-[11px] text-slate-500">
                    Prefer WhatsApp? Message us and we will reply with a fixed fee and next steps.
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
              Typical projects in Hillingdon
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Hillingdon includes suburban family homes, larger plots and streets where extensions,
              lofts and garage conversions are common. Well measured drawings and a clear scope help
              builders price accurately.
            </p>

            <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Rear and side extensions
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Single storey and double storey extensions designed around daylight, kitchen
                  layouts and garden access.
                </p>
                <ul className="mt-2 space-y-1 text-[13px] text-slate-800">
                  <li>• Layout options and furniture planning</li>
                  <li>• Roof types, drainage notes and materials</li>
                  <li>• Structural openings with beam coordination</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Loft conversions and dormers
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Dormers, hip to gable and rear roof extensions to create bedrooms, bathrooms and
                  home offices.
                </p>
                <ul className="mt-2 space-y-1 text-[13px] text-slate-800">
                  <li>• Stair layouts and headroom checks</li>
                  <li>• Roof plans, sections and insulation strategy</li>
                  <li>• Fire safety basics for protected routes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Garage conversions and internal remodelling
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Converting garages to habitable rooms and improving ground floor layouts for open
                  plan living.
                </p>
                <ul className="mt-2 space-y-1 text-[13px] text-slate-800">
                  <li>• Wall build ups and insulation notes</li>
                  <li>• New windows, doors and ventilation approach</li>
                  <li>• Building regulations coordination for compliance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Outbuildings and garden rooms
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Detached garden rooms, studios and home offices with clear plans, elevations and
                  specification notes.
                </p>
                <ul className="mt-2 space-y-1 text-[13px] text-slate-800">
                  <li>• Simple planning drawings where required</li>
                  <li>• Layout, glazing and materials coordination</li>
                  <li>• Practical details for builders to price properly</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PLANNING GUIDANCE */}
        <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Planning guidance for Hillingdon
            </h2>
            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Many projects can be straightforward, but certain streets and constraints can affect
              what is acceptable. We focus on clear drawings and a clean application package to
              reduce delays.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-900">
                  What we check first
                </h3>
                <ul className="mt-2 space-y-2 text-[13px] text-slate-800">
                  <li>• Planning history and previous approvals</li>
                  <li>• Street character and typical extension forms</li>
                  <li>• Any local constraints affecting permitted development</li>
                  <li>• Neighbour impact: overlooking and daylight basics</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-900">
                  What we deliver for planning
                </h3>
                <ul className="mt-2 space-y-2 text-[13px] text-slate-800">
                  <li>• Existing and proposed plans and elevations</li>
                  <li>• Site plan and location plan</li>
                  <li>• Sections where needed (lofts and larger extensions)</li>
                  <li>• Clear notes to support the proposal and reduce objections</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-[13px] text-slate-700">
              Strong presentation, accurate existing drawings and a sensible scale usually produce a
              smoother decision.
            </p>
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
                <p className="mt-1 text-[13px] font-semibold text-slate-900">from £950 + VAT</p>
                <p className="mt-2 text-[12px] text-slate-600">
                  Existing and proposed plans and elevations prepared for planning or lawful
                  development applications.
                </p>
              </div>

              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold text-slate-900">Measured surveys</h3>
                <p className="mt-1 text-[13px] font-semibold text-slate-900">from £250 + VAT</p>
                <p className="mt-2 text-[12px] text-slate-600">
                  Detailed measured surveys for flats and houses so drawings reflect existing
                  conditions accurately.
                </p>
              </div>

              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold text-slate-900">
                  Building regulation packs
                </h3>
                <p className="mt-1 text-[13px] font-semibold text-slate-900">from £1,150 + VAT</p>
                <p className="mt-2 text-[12px] text-slate-600">
                  Technical sections, details and coordinated information ready for building control
                  and tender.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-900">
                  What your fixed fee includes
                </h3>
                <ul className="mt-2 space-y-2 text-[13px] text-slate-800">
                  <li>• A defined scope and drawing list</li>
                  <li>• One clear price with no surprise add ons</li>
                  <li>• Fast turnaround dates agreed at the start</li>
                  <li>• Support notes for planning where helpful</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-900">
                  Add ons if needed
                </h3>
                <ul className="mt-2 space-y-2 text-[13px] text-slate-800">
                  <li>• Certificate of lawful development drawings</li>
                  <li>• Design options and massing comparisons</li>
                  <li>• Coordination with structural engineer</li>
                  <li>• Tender issue set for builders</li>
                </ul>
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

        {/* FAQ */}
        <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Hillingdon FAQs
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-[13px] font-semibold text-slate-900">
                  Can you provide surveys and existing drawings?
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Yes. We carry out measured surveys and produce accurate existing plans, elevations
                  and sections so your project starts from correct information.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-[13px] font-semibold text-slate-900">
                  How quickly can you start?
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  We can usually arrange an initial survey within 48 hours, then move straight into
                  drawing production once scope is agreed.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-[13px] font-semibold text-slate-900">
                  Can you coordinate with my builder and engineer?
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Yes. We coordinate drawings with structural information and can issue a tender set
                  so builders price the same scope.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-[13px] font-semibold text-slate-900">
                  Do you help with building regulations as well as planning?
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Yes. We produce building regulation packs with sections and details, ready for
                  Building Control review and construction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Ready to obtain your planning approval?
            </h2>
            <p className="mt-3 text-[13px] text-slate-700">
              Use the form above to share a few details and we will respond with a clear fixed fee
              and suggested next steps for your extension, loft or refurbishment in Hillingdon.
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
          </div>
        </section>
      </div>
    </>
  );
}
