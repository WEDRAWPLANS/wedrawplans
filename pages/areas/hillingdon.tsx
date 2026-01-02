```tsx
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
      "Ruislip",
      "Ickenham",
      "West Drayton",
      "Yiewsley",
      "Hillingdon Village",
      "Ruislip Manor",
      "Ruislip Gardens",
      "Northwood borders",
      "Heathrow borders",
    ],
    description:
      "Planning drawings, loft conversion plans, extension layouts and building regulation packs for homes across Hillingdon, including Uxbridge, Hayes, Ruislip, Ickenham and West Drayton. Fixed fees and fast turnaround.",
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
            "It depends on your property and proposal. Some works can be permitted development, but constraints like conservation areas or Article 4 directions can change what is allowed. We check your address and advise the best route: planning, lawful development, or building regulations only.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with extensions and loft conversions in Hillingdon?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We produce clear planning drawings for rear and side extensions, wrap around extensions, and loft conversions including dormers. We also prepare sections and notes where needed to support smoother approvals.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide building regulation drawing packs?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare building regulation packs with plans, sections and key details suitable for Building Control and construction. We also coordinate with structural engineers when openings or strengthening are required.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can you start?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We can usually arrange an initial survey within 48 hours, then move into drawing production once scope is agreed.",
        },
      },
      {
        "@type": "Question",
        name: "Which areas of Hillingdon do you cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We cover the full borough including Uxbridge, Hayes, Ruislip, Ickenham, West Drayton, Yiewsley and surrounding areas.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Hillingdon – Extensions, Lofts & Planning Applications
        </title>
        <meta
          name="description"
          content="Planning drawings, loft conversion plans, extension layouts and building regulation packs for homes across Hillingdon, Uxbridge, Hayes, Ruislip, Ickenham and West Drayton. Fixed fees and fast turnaround."
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

              <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] sm:text-[26px]">
                Planning drawings for extensions, lofts and home renovations
              </h1>

              <p className="mt-3 text-[13px] text-slate-700">
                We prepare planning, technical and building regulation drawings for homes across
                Hillingdon, including Uxbridge, Hayes, Ruislip, Ickenham, Hillingdon Village and
                West Drayton.
              </p>

              <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                <li>• Rear and side extensions</li>
                <li>• Loft conversions and dormers</li>
                <li>• Internal reconfigurations</li>
                <li>• New build infill homes</li>
                <li>• Flat conversions</li>
                <li>• Building regulation packs</li>
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                >
                  Get my Hillingdon quote
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
                  Many streets suit tidy rear extensions and simple dormer layouts. Accurate
                  measured drawings and clear massing normally reduce planning questions and speed
                  up decisions.
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
                      placeholder="UB10 8XX"
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
                      <option>Internal remodelling</option>
                      <option>New build</option>
                      <option>Flat conversion</option>
                      <option>Building regulation pack</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-slate-700">Project details</label>
                    <textarea
                      name="projectDetails"
                      rows={4}
                      className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      placeholder="Tell us about your Hillingdon project…"
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
              Common home projects in Hillingdon
            </h2>

            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Hillingdon includes a wide mix of 1930s houses, suburban estates, post war homes and
              large detached properties. Many households extend or remodel instead of moving.
            </p>

            <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Extensions
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Rear, side and wrap around extensions to create larger kitchens, open plan layouts
                  and additional bedrooms.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Loft conversions
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Hip to gable lofts, rear dormers and L shaped conversions suitable for planning or
                  lawful development certificates.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Internal remodelling
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  We redesign internal layouts, remove walls with structural input and create modern
                  open plan spaces.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  New build and infill
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Some plots in Hillingdon can support a new dwelling. We prepare feasibility layouts
                  and full planning drawings.
                </p>
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
              Hillingdon follows London Plan policies and its Local Plan. Certain locations have
              stricter controls, including some conservation areas around Uxbridge, Ruislip and
              Ickenham.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-900">
                  What we check first
                </h3>
                <ul className="mt-2 space-y-2 text-[13px] text-slate-800">
                  <li>• Planning history and nearby approvals</li>
                  <li>• Any Article 4 directions affecting permitted development</li>
                  <li>• Roof form, side spacing and neighbour impact basics</li>
                  <li>• Conservation constraints where relevant</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-900">
                  What we deliver for planning
                </h3>
                <ul className="mt-2 space-y-2 text-[13px] text-slate-800">
                  <li>• Existing and proposed plans and elevations</li>
                  <li>• Site plan and location plan</li>
                  <li>• Sections where needed for lofts and larger extensions</li>
                  <li>• Clear notes to support smoother approvals</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-[13px] text-slate-700">
              Many extensions in Hillingdon are approved when drawings are clear, accurate and in
              line with local policy. We tailor each submission to your address.
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
                <p className="mt-1 text-[13px] font-semibold text-slate-900">from £750 + VAT</p>
                <p className="mt-2 text-[12px] text-slate-600">
                  Existing and proposed plans and elevations for extensions, lofts and remodels.
                </p>
              </div>

              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold text-slate-900">Measured surveys</h3>
                <p className="mt-1 text-[13px] font-semibold text-slate-900">from £150 + VAT</p>
                <p className="mt-2 text-[12px] text-slate-600">
                  On site measured surveys for accurate existing drawings.
                </p>
              </div>

              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold text-slate-900">
                  Building regulation packs
                </h3>
                <p className="mt-1 text-[13px] font-semibold text-slate-900">from £950 + VAT</p>
                <p className="mt-2 text-[12px] text-slate-600">
                  Technical drawings coordinated with structural engineers.
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
                  Do you handle lawful development certificates?
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Yes. If your proposal fits permitted development rules, we can produce a clean
                  drawing set for a lawful development certificate application.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-[13px] font-semibold text-slate-900">
                  Can you work with my builder and engineer?
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  Yes. We coordinate drawings with structural information and can issue a tender set
                  so builders price the same scope.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-[13px] font-semibold text-slate-900">
                  How quickly can you start?
                </h3>
                <p className="mt-2 text-[13px] text-slate-700">
                  We can usually arrange an initial survey within 48 hours, then move into drawing
                  production once scope is agreed.
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
              Share a few details using the form above and we will provide a clear fixed fee and
              next steps for your extension, loft conversion or home renovation in Hillingdon.
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
```
