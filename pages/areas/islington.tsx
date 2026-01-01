import Head from "next/head";
import React from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL_DISPLAY = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";

const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Islington";

export default function IslingtonPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Islington" });
  }

  function scrollToForm() {
    const el = document.getElementById("islington-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/islington",
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
      "Islington",
      "Angel",
      "Upper Street",
      "Highbury",
      "Highbury Fields",
      "Canonbury",
      "Barnsbury",
      "Holloway",
      "Archway",
      "Finsbury Park (Islington side)",
      "Tufnell Park borders",
      "Old Street and City Road area",
    ],
    description:
      "Architectural drawing services in Islington for extensions, loft conversions, flat conversions, refurbishments and building regulation packs.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Islington?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Some houses can extend under permitted development, but flats and many conservation area properties require planning permission. We confirm the correct route once we review your address and house type.",
        },
      },
      {
        "@type": "Question",
        name: "Is Islington strict with loft conversions and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Islington can be strict, especially in conservation areas and streets with strong character. High quality drawings and a clear planning case usually make the process smoother.",
        },
      },
      {
        "@type": "Question",
        name: "How long do Islington planning decisions take?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications are often decided in around six to eight weeks after validation. Lawful Development Certificates are often around four to six weeks depending on workload.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full submission to Islington Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Islington Council and respond to planning officer queries until decision.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Islington – Extensions, Lofts and Planning
          Applications | WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Planning drawings, loft conversion plans, extension layouts and building regulation packs for homes across Islington, including Angel, Highbury, Canonbury, Barnsbury, Holloway and Archway. Fixed fees and fast turnaround."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/islington" />

        <script
          type="application/ld+json"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        <script
          type="application/ld+json"
          // @ts-ignore
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
          <div className="mx-auto max-w-5xl flex flex-col gap-6 px-4 py-8 lg:flex-row lg:items-start lg:px-6 lg:py-10">
            {/* TEXT SIDE */}
            <div className="lg:w-1/2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                Islington architectural drawings
              </p>

              <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase tracking-[0.14em] leading-snug">
                Planning drawings for extensions, lofts and home renovations
              </h1>

              <p className="mt-3 text-[13px] text-slate-700">
                We prepare planning, technical and building regulation drawings
                for homes across Islington, including Angel, Upper Street,
                Highbury, Canonbury, Barnsbury, Holloway and Archway.
              </p>

              <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                <li>• Rear and side extensions</li>
                <li>• Loft conversions and dormers</li>
                <li>• Internal reconfigurations</li>
                <li>• Flat conversions and layouts</li>
                <li>• Roof terraces and access stairs</li>
                <li>• Building regulation packs</li>
              </ul>

              <div className="mt-5 flex items-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] text-white font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Get your free quote
                </button>

                <a href={PHONE_LINK} className="text-[13px] text-slate-800 underline">
                  Or call {PHONE_DISPLAY}
                </a>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-[13px] text-slate-700">
                <a className="underline" href={EMAIL_LINK}>
                  {EMAIL_DISPLAY}
                </a>
                <span className="text-slate-400">•</span>
                <a className="underline" href={PHONE_LINK}>
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* FORM SIDE */}
            <div id="islington-quote" className="lg:w-1/2">
              <div className="rounded-2xl bg-white p-5 shadow-md">
                <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em]">
                  Free fixed quote for your home
                </h2>

                <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                  <div>
                    <label className="text-[11px] font-medium">Name</label>
                    <input
                      name="name"
                      required
                      className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-medium">Telephone</label>
                      <input
                        name="phone"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium">Email</label>
                      <input
                        name="email"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium">Islington postcode</label>
                    <input
                      name="postcode"
                      required
                      placeholder="N1 8XX"
                      className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium">Project type</label>
                    <select
                      name="projectType"
                      required
                      defaultValue=""
                      className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] outline-none"
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      <option>Extension</option>
                      <option>Loft conversion</option>
                      <option>Internal remodelling</option>
                      <option>Flat conversion</option>
                      <option>Roof terrace</option>
                      <option>Building regulation pack</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium">Project details</label>
                    <textarea
                      name="projectDetails"
                      rows={4}
                      className="w-full border border-slate-300 rounded px-2 py-2 focus:border-[#64b7c4] outline-none"
                      placeholder="Tell us what you want to do and your address, if possible"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] text-white font-semibold tracking-[0.2em] hover:bg-[#4da4b4]"
                  >
                    Get my quote
                  </button>

                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    By submitting, you agree we may contact you about your enquiry.
                    We do not sell your data.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* COMMON PROJECT TYPES */}
        <section className="border-b border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
              Common home projects in Islington
            </h2>

            <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
              Islington has dense terraces, conservation streets and many properties
              with party walls. The best results come from accurate surveys, clear
              drawings and a planning approach tailored to the street.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-5 text-[13px]">
              <div>
                <h3 className="text-[14px] font-semibold uppercase">Extensions</h3>
                <p className="mt-2">
                  Rear and side infill extensions to create larger kitchens, better
                  layouts and improved links to the garden.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase">Loft conversions</h3>
                <p className="mt-2">
                  Rear dormers, L shaped dormers and roof alterations designed with
                  neighbour impact and conservation rules in mind.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase">Flat conversions</h3>
                <p className="mt-2">
                  Converting houses into flats, re planning existing layouts and
                  ensuring access, daylight, refuse and cycle storage are addressed.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase">Refurbishments</h3>
                <p className="mt-2">
                  Internal remodelling, structural knock throughs and upgrade packs
                  coordinated for builders and Building Control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PLANNING GUIDANCE */}
        <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
              Planning guidance for Islington
            </h2>

            <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
              Islington is often sensitive due to conservation areas, consistent
              rear building lines and tight neighbour relationships. Clear drawings
              and a good planning narrative are key.
            </p>

            <ul className="mt-4 space-y-2 text-[13px] text-slate-800">
              <li>• We check constraints that affect permitted development and planning</li>
              <li>• We prepare householder applications for extensions and lofts</li>
              <li>• We produce lawful development certificate drawings where applicable</li>
              <li>• We coordinate structural input for party wall and opening works</li>
            </ul>

            <p className="mt-3 text-[13px] max-w-3xl text-slate-700">
              Many Islington approvals succeed when submissions are accurate and the
              design respects neighbours, daylight and the character of the street.
            </p>
          </div>
        </section>

        {/* FEES */}
        <section className="border-b border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
              Clear fixed fees for your home project
            </h2>

            <div className="mt-5 grid md:grid-cols-3 gap-4 text-[13px]">
              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold">Planning drawings</h3>
                <p className="mt-1 text-[13px] font-semibold">from £750 + VAT</p>
                <p className="mt-2 text-[12px]">
                  Existing and proposed plans and elevations for extensions, lofts and conversions.
                </p>
              </div>

              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold">Measured surveys</h3>
                <p className="mt-1 text-[13px] font-semibold">from £150 + VAT</p>
                <p className="mt-2 text-[12px]">
                  On site measured surveys for accurate existing drawings.
                </p>
              </div>

              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold">Building regulation packs</h3>
                <p className="mt-1 text-[13px] font-semibold">from £950 + VAT</p>
                <p className="mt-2 text-[12px]">
                  Technical drawings coordinated with structural engineers.
                </p>
              </div>
            </div>

            <button
              onClick={scrollToForm}
              className="mt-5 rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] text-white font-semibold hover:bg-[#4da4b4]"
            >
              Request your fixed fee
            </button>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
              Ready to obtain planning approval
            </h2>

            <p className="mt-3 text-[13px] text-slate-700">
              Share a few details using the form above and we will provide a clear fixed fee and next steps
              for your extension, loft conversion or refurbishment in Islington.
            </p>

            <div className="mt-5 flex justify-center gap-3 flex-wrap">
              <button
                onClick={scrollToForm}
                className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] text-white font-semibold hover:bg-[#4da4b4]"
              >
                Get your free quote
              </button>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-[13px] hover:bg-slate-900 hover:text-white"
              >
                💬 WhatsApp
              </a>

              <a
                href={EMAIL_LINK}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-[13px] hover:bg-slate-900 hover:text-white"
              >
                ✉️ Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
