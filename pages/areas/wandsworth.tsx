import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Wandsworth";

export default function WandsworthAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Wandsworth" });
  }

  function scrollToForm() {
    const el = document.getElementById("wandsworth-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/wandsworth",
    telephone: "+44 20 3654 8508",
    email: EMAIL,
    image: "https://www.wedrawplans.co.uk/images/hero.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK",
    },
    areaServed: [
      "Wandsworth",
      "Wandsworth Town",
      "Earlsfield",
      "Southfields",
      "Putney borders",
      "Balham",
      "Tooting",
      "Furzedown",
      "Clapham Junction",
      "Battersea (Wandsworth side)",
      "Nine Elms borders",
    ],
    description:
      "Architectural drawing services in Wandsworth for extensions, loft conversions, refurbishments, outbuildings and building regulation plans. Fixed fees, clear communication, and initial survey within 48 hours.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Wandsworth?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions can be completed under permitted development, depending on the house type, constraints and any Article 4 directions. We confirm the correct route after a quick review of your address.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wandsworth strict with loft conversions and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Wandsworth can be strict in conservation areas and streets with consistent rear building lines. Design quality, neighbour impact and detailing are closely reviewed, particularly around Balham, Earlsfield, Wandsworth Town and Putney borders.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Wandsworth Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications are typically decided within 8 weeks from validation. Lawful Development Certificates are commonly around 6 to 8 weeks, depending on validation and workload.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Wandsworth Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Wandsworth Council and respond to planning officer queries through to decision.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Wandsworth – Extensions, Lofts & Planning Applications
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Wandsworth for extensions, loft conversions, refurbishments, outbuildings and building regulation plans. Fixed fees, initial survey within 48 hours, and full planning support."
        />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/areas/wandsworth"
        />

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
        {/* HEADER (Barnet template) */}
        <header className="bg-[#fdf8f3]/95 backdrop-blur border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 pt-6 pb-3 lg:px-6">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/wedrawplans-logo.png"
                alt="WEDRAWPLANS"
                width={420}
                height={140}
                priority
                className="h-24 w-auto object-contain"
              />

              <div className="mt-3 text-[11px] tracking-[0.18em] text-slate-600 uppercase">
                Architectural Drawing Consultants
              </div>

              <div className="mt-2 max-w-3xl text-[13px] font-medium text-slate-800">
                Architectural Drawings for Extensions, Lofts + New Builds at an
                Affordable Fixed Cost
              </div>
            </div>

            <hr className="mt-5 border-t border-slate-600" />

            <div className="mt-2 flex w-full items-center justify-between gap-3">
              <div className="text-[12px] text-slate-700">
                <span className="font-semibold text-slate-900">Wandsworth</span> area
                page
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PHONE_LINK}
                  className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  📞 {PHONE_DISPLAY}
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-[#25D366] text-white px-3 py-1.5 rounded-full text-[12px] font-medium shadow-sm hover:bg-[#1ebe57]"
                >
                  💬 <span className="hidden sm:inline">WhatsApp us</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* HERO + FORM */}
        <section className="border-b border-slate-200 bg-[#fdf8f3]">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 lg:flex-row lg:items-start lg:px-6 lg:py-10">
            {/* TEXT */}
            <div className="lg:w-1/2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                Wandsworth architectural drawings
              </p>

              <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] sm:text-[26px] text-slate-900">
                Planning drawings for extensions, lofts and refurbishments
              </h1>

              <p className="mt-3 text-[13px] text-slate-700">
                WEDRAWPLANS prepare planning and technical drawings for homes across
                Wandsworth, Earlsfield, Balham, Tooting and Clapham Junction. Fixed
                fees, clear drawings and responsive communication.
              </p>

              <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                <li>• Rear, side and wrap-around extensions</li>
                <li>• Loft conversions and dormers</li>
                <li>• Basement and internal reconfiguration</li>
                <li>• Outbuildings and garden rooms</li>
                <li>• Building regulation packages</li>
                <li>• Initial survey within 48 hours where required</li>
              </ul>

              <div className="mt-5 flex items-center gap-3">
                <button
                  onClick={scrollToForm}
                  type="button"
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                >
                  Get your quick quote
                </button>

                <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                  Or call {PHONE_DISPLAY}
                </a>
              </div>

              <p className="mt-3 text-[12px] text-slate-600">
                Initial survey within 48 hours (where required), then we confirm drawings, fees and next steps.
              </p>
            </div>

            {/* FORM */}
            <div id="wandsworth-quote" className="lg:w-1/2">
              <div className="rounded-2xl bg-white p-5 shadow-md">
                <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Free fixed quote for Wandsworth projects
                </h2>

                <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                  <div>
                    <label className="text-[11px] font-medium text-slate-700">Name</label>
                    <input
                      name="name"
                      required
                      className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="text-[11px] font-medium text-slate-700">Telephone</label>
                      <input
                        name="phone"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-700">Email</label>
                      <input
                        name="email"
                        required
                        type="email"
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-slate-700">Wandsworth Postcode</label>
                    <input
                      name="postcode"
                      required
                      placeholder="SW18 2XX"
                      className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-slate-700">Project type</label>
                    <select
                      name="projectType"
                      required
                      defaultValue=""
                      className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4] outline-none"
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      <option value="Extension">Extension</option>
                      <option value="Loft conversion">Loft conversion</option>
                      <option value="Internal remodelling">Internal remodelling</option>
                      <option value="Outbuilding">Outbuilding / garden room</option>
                      <option value="New build">New build house</option>
                      <option value="Building regulations">Building regulation pack</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-slate-700">Project details</label>
                    <textarea
                      name="projectDetails"
                      rows={4}
                      className="w-full rounded border border-slate-300 px-2 py-2 focus:border-[#64b7c4] outline-none"
                      placeholder="Tell us about your Wandsworth project…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold tracking-[0.2em] text-white hover:bg-[#4da4b4]"
                  >
                    Get my quote
                  </button>

                  <p className="text-[11px] text-slate-500">
                    Prefer WhatsApp. Send your postcode plus a short description.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* COMMON PROJECT TYPES */}
        <section className="border-b border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase text-slate-900 tracking-[0.16em]">
              Common projects in Wandsworth
            </h2>

            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Wandsworth has a strong mix of Victorian and Edwardian terraces, mansion blocks,
              and family housing with many conservation areas. Many households extend or remodel
              to gain space rather than move.
            </p>

            <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
              <div>
                <h3 className="text-[14px] font-semibold uppercase text-slate-900">
                  Side return and wrap-around extensions
                </h3>
                <p className="mt-2">
                  Popular across Earlsfield, Balham and Tooting where terraces benefit from
                  wider kitchen and dining spaces with good daylight.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase text-slate-900">
                  Loft conversions and dormers
                </h3>
                <p className="mt-2">
                  Rear dormers, L shaped dormers and hip to gable conversions are common.
                  We design stairs, layouts and fire safety routes in line with regulations.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase text-slate-900">
                  Refurbishments and internal changes
                </h3>
                <p className="mt-2">
                  Replanning layouts, structural openings and improving light are common.
                  We coordinate with structural engineers for clear buildable drawings.
                </p>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase text-slate-900">
                  Outbuildings and garden rooms
                </h3>
                <p className="mt-2">
                  Garden studios and home offices can often be done quickly with the right
                  drawings and guidance on planning routes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PLANNING GUIDANCE */}
        <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase text-slate-900 tracking-[0.16em]">
              Planning guidance for Wandsworth
            </h2>

            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Wandsworth contains many conservation areas and design sensitive streets.
              Loft shapes, rear massing and window positions are often assessed carefully.
            </p>

            <ul className="mt-4 space-y-2 text-[13px] text-slate-800">
              <li>• We check whether your home is in a conservation area</li>
              <li>• We review Article 4 Directions where relevant</li>
              <li>• We prepare householder planning applications and LDCs</li>
              <li>• We design with daylight and neighbour impact in mind</li>
              <li>• We coordinate structural input for accurate proposals</li>
            </ul>

            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Strong drawings and a clear design rationale often lead to smooth approvals.
              We tailor every submission to the local context.
            </p>
          </div>
        </section>

        {/* FEES */}
        <section className="border-b border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase text-slate-900 tracking-[0.16em]">
              Fixed fees for Wandsworth projects
            </h2>

            <div className="mt-5 grid gap-4 text-[13px] md:grid-cols-3">
              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold">Planning drawings</h3>
                <p className="mt-1 text-[13px] font-semibold">from £750 + VAT</p>
                <p className="mt-2 text-[12px] text-slate-600">
                  Existing and proposed plans and elevations for extensions, lofts and remodels.
                </p>
              </div>

              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold">Measured surveys</h3>
                <p className="mt-1 text-[13px] font-semibold">from £150 + VAT</p>
                <p className="mt-2 text-[12px] text-slate-600">
                  On site surveys for accurate existing plans (initial survey within 48 hours where required).
                </p>
              </div>

              <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                <h3 className="text-[13px] font-semibold">Building regulation packs</h3>
                <p className="mt-1 text-[13px] font-semibold">from £950 + VAT</p>
                <p className="mt-2 text-[12px] text-slate-600">
                  Technical drawings coordinated with structural engineers.
                </p>
              </div>
            </div>

            <button
              onClick={scrollToForm}
              type="button"
              className="mt-5 rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-[#4da4b4]"
            >
              Request a fixed fee
            </button>
          </div>
        </section>

        {/* AREA IMAGE + FIX NOTE */}
        <section className="border-b border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Wandsworth areas we cover
            </h2>

            <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
              Wandsworth, Wandsworth Town, Earlsfield, Southfields, Balham, Tooting, Furzedown,
              Clapham Junction and nearby streets.
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-[#fdf8f3] p-4">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/wandsworth-area.jpg"
                  alt="Wandsworth area"
                  width={1200}
                  height={720}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-3 text-[12px] text-slate-600">
                Image file must exist at <span className="font-semibold">/public/images/wandsworth-area.jpg</span>
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
            <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Ready to move your Wandsworth project forward
            </h2>

            <p className="mt-3 text-[13px] text-slate-700">
              Share a few details using the form above and we will provide a clear fixed fee and suggested next steps.
            </p>

            <div className="mt-5 flex justify-center gap-3">
              <button
                onClick={scrollToForm}
                type="button"
                className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-[#4da4b4]"
              >
                Get your quick quote
              </button>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
