import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL_DISPLAY = "info@wedrawplans.com";
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
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "GB",
    },
    areaServed: [
      "Wandsworth",
      "Wandsworth Town",
      "Earlsfield",
      "Southfields",
      "Balham",
      "Tooting",
      "Furzedown",
      "Clapham Junction",
      "Battersea",
      "Nine Elms",
      "Putney",
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
            "Not always. Many rear extensions can be carried out under permitted development. We confirm the correct route after we review your address and house type, plus any constraints such as conservation areas or Article 4 directions.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wandsworth strict with loft conversions and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Wandsworth can be detailed in conservation areas and streets with consistent character. Good drawings, careful massing, and a clear planning case usually lead to a smoother decision.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Wandsworth Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications typically take around 8 weeks after validation. Lawful Development Certificates often take around 6 to 8 weeks depending on workload and validation speed.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Wandsworth Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare the drawings, complete the forms, upload documents, submit the application, and respond to planning officer queries through to decision.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Wandsworth | Extensions, Lofts, Planning
          Applications | WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Wandsworth for extensions, loft conversions, refurbishments, outbuildings and building regulation plans. Measured survey within 48 hours, clear drawings and full planning support."
        />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/areas/wandsworth"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Architectural Drawings in Wandsworth | WEDRAWPLANS"
        />
        <meta
          property="og:description"
          content="Extensions, loft conversions, refurbishments and building regulation drawings in Wandsworth. Measured survey within 48 hours and full planning submission support."
        />
        <meta
          property="og:url"
          content="https://www.wedrawplans.co.uk/areas/wandsworth"
        />
        <meta
          property="og:image"
          content="https://www.wedrawplans.co.uk/images/drawings.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Architectural Drawings in Wandsworth | WEDRAWPLANS"
        />
        <meta
          name="twitter:description"
          content="Extensions, lofts, refurbishments and building regs drawings in Wandsworth. Survey within 48 hours."
        />
        <meta
          name="twitter:image"
          content="https://www.wedrawplans.co.uk/images/drawings.jpg"
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
        {/* HEADER (Barnet structure) */}
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
                className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white"
              >
                📞 {PHONE_DISPLAY}
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-1.5 text-[12px] font-medium text-white shadow-sm hover:bg-[#1ebe57]"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section className="relative border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl px-4 py-8 lg:px-6 lg:py-10">
              <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
                {/* TEXT */}
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                    Wandsworth architectural drawings
                  </p>

                  <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] sm:text-[26px] text-slate-900">
                    Planning drawings for extensions, lofts and refurbishments
                  </h1>

                  <p className="mt-3 text-[13px] text-slate-700">
                    WEDRAWPLANS prepare planning and technical drawings for homes across
                    Wandsworth, Earlsfield, Balham, Tooting, Battersea and Putney borders.
                    Fixed fees, clear drawings and responsive communication.
                  </p>

                  <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                    <li>• Rear, side and wrap around extensions</li>
                    <li>• Loft conversions and dormers</li>
                    <li>• Internal reconfiguration and refurbishments</li>
                    <li>• Outbuildings and garden rooms</li>
                    <li>• Building regulation packages</li>
                    <li>• Full planning and lawful development submissions</li>
                  </ul>

                  <div className="mt-5 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                    >
                      Get your quick quote
                    </button>

                    <a
                      href={PHONE_LINK}
                      className="text-[13px] underline text-slate-800"
                    >
                      Or call {PHONE_DISPLAY}
                    </a>
                  </div>

                  <p className="mt-3 text-[12px] text-slate-600">
                    Initial survey within 48 hours where required, then we confirm drawings,
                    fees and next steps.
                  </p>
                </div>

                {/* FORM */}
                <div id="wandsworth-quote" className="lg:pl-6">
                  <div className="rounded-2xl bg-white p-5 shadow-md">
                    <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                      Free fixed quote for Wandsworth projects
                    </h2>

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
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
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
                            className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
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
                            className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-medium text-slate-700">
                          Wandsworth Postcode
                        </label>
                        <input
                          name="postcode"
                          required
                          placeholder="SW18 2XX"
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-medium text-slate-700">
                          Project address
                        </label>
                        <input
                          name="address"
                          required
                          placeholder="House number and street"
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
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
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 focus:border-[#64b7c4]"
                        >
                          <option value="" disabled>
                            Select one
                          </option>
                          <option value="Extension">Extension</option>
                          <option value="Loft conversion">Loft conversion</option>
                          <option value="Refurbishment">Refurbishment</option>
                          <option value="Outbuilding">Outbuilding / garden room</option>
                          <option value="Building regulations">Building regulation pack</option>
                          <option value="Lawful development">Lawful development certificate</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-medium text-slate-700">
                          Project details
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          className="w-full rounded border border-slate-300 px-2 py-2 focus:border-[#64b7c4]"
                          placeholder="Tell us what you want to do in Wandsworth…"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold tracking-[0.2em] text-white hover:bg-[#4da4b4]"
                      >
                        Get my quote
                      </button>

                      <p className="text-[11px] text-slate-500">
                        Prefer WhatsApp? Use the green button at the top and send your
                        postcode plus a short description.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MAIN CONTENT (kept from your original page) */}
          <section className="mx-auto max-w-5xl px-6 py-14 space-y-14">
            {/* INTRO + DRAWINGS CARD */}
            <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  Architectural drawing services in Wandsworth
                </h2>
                <p className="text-sm md:text-base text-slate-700">
                  WEDRAWPLANS prepares full drawing packages for rear and side
                  extensions, loft conversions, refurbishments, internal
                  reconfiguration and outbuildings across the borough of Wandsworth.
                </p>
                <p className="text-sm md:text-base text-slate-700">
                  We work throughout Wandsworth Town, Earlsfield, Southfields, Balham,
                  Tooting, Furzedown, Clapham Junction, Battersea and the Nine Elms fringe,
                  plus Putney borders.
                </p>
              </div>

              <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
                <Image
                  src="/images/drawings.jpg"
                  alt="Example of architectural drawings for a Wandsworth project"
                  width={800}
                  height={500}
                  className="object-cover w-full h-48 md:h-56"
                />
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold">
                    Clear drawings focused on planning and Building Control
                  </h3>
                  <p className="text-sm text-slate-700">
                    Detailed floor plans, elevations, sections and notes coordinated with
                    structural design so that the council and your builder can work from
                    a single accurate set of plans.
                  </p>
                </div>
              </div>
            </div>

            {/* AREAS COVERED + PROJECT TYPES */}
            <div className="grid md:grid-cols-2 gap-10">
              <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                <h3 className="text-lg font-semibold">Wandsworth areas we cover</h3>
                <Image
                  src="/images/wandsworth-area.jpg"
                  alt="Wandsworth local high street and residential area"
                  width={800}
                  height={500}
                  className="rounded-xl object-cover mb-3"
                />
                <p className="text-sm text-slate-700">
                  Architectural drawings for the whole borough of Wandsworth, including:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Wandsworth Town</li>
                    <li>Earlsfield</li>
                    <li>Southfields</li>
                    <li>Balham</li>
                    <li>Tooting</li>
                    <li>Furzedown</li>
                  </ul>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Clapham Junction</li>
                    <li>Battersea</li>
                    <li>Nine Elms fringe</li>
                    <li>Putney borders</li>
                    <li>Riverside streets</li>
                    <li>Park side streets</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                <h3 className="text-lg font-semibold">Popular projects in Wandsworth</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Rear and wrap extensions</li>
                    <li>Side return extensions</li>
                    <li>Loft conversions and dormers</li>
                    <li>Hip to gable loft conversions</li>
                    <li>Internal reconfiguration</li>
                  </ul>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Basement and lower ground works</li>
                    <li>Garden rooms and studios</li>
                    <li>Garage conversions</li>
                    <li>High specification refurbishments</li>
                    <li>Small infill and mews schemes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PLANNING / PD */}
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold">
                Planning and permitted development in Wandsworth
              </h2>
              <p className="text-sm text-slate-700">
                Many houses in Wandsworth benefit from permitted development rights,
                but conservation areas and local design guidance can influence what is
                acceptable. We confirm the correct route for your property at the start.
              </p>

              <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
                <div>
                  <h3 className="font-semibold mb-2">Rear extensions</h3>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Depth and height assessed against neighbours</li>
                    <li>Daylight and overshadowing reviewed early</li>
                    <li>Street context and local precedents checked</li>
                    <li>Party wall considerations discussed</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Loft conversions</h3>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Dormer size guided by roof form and style</li>
                    <li>Front roof changes are tightly controlled</li>
                    <li>Roof terraces often need a strong case</li>
                    <li>Stair headroom and fire escape designed properly</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Refurbishment and upgrades</h3>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Improved layouts for family living</li>
                    <li>Better light, storage and circulation</li>
                    <li>Energy and insulation upgrades</li>
                    <li>Structural knock throughs coordinated</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PACKS */}
            <div className="grid md:grid-cols-2 gap-10">
              <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                <h3 className="text-lg font-semibold">Planning drawings for Wandsworth</h3>
                <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                  <li>Existing and proposed floor plans</li>
                  <li>Existing and proposed elevations</li>
                  <li>Sections through key areas</li>
                  <li>Roof layouts and key details</li>
                  <li>Block plan and location plan</li>
                  <li>Design statements where required</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                <h3 className="text-lg font-semibold">
                  Building regulation drawings for Wandsworth
                </h3>
                <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                  <li>Structural layouts and engineer coordination</li>
                  <li>Fire safety notes and escape routes</li>
                  <li>Thermal build ups and insulation specifications</li>
                  <li>Acoustic performance and separating elements</li>
                  <li>Ventilation and extract positions</li>
                  <li>Drainage layouts and contractor notes</li>
                </ul>
              </div>
            </div>

            {/* LOCAL KNOWLEDGE */}
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
              <h2 className="text-2xl font-semibold text-emerald-900">
                Local planning knowledge for Wandsworth projects
              </h2>
              <p className="text-sm text-emerald-900">
                Wandsworth includes high value terraces and family homes where design
                quality, neighbour impact and detailing are reviewed closely. We design
                schemes that respect local character while delivering extra space, light
                and usability.
              </p>
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
                <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                  <h3 className="font-semibold">
                    Can you help with high specification refurbishments?
                  </h3>
                  <p>
                    Yes. We prepare detailed plans and technical information for high
                    specification refurbishments across Wandsworth.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                  <h3 className="font-semibold">How fast can you survey in Wandsworth?</h3>
                  <p>
                    In many cases we can arrange the measured survey within 48 hours of
                    instruction, subject to access.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                  <h3 className="font-semibold">
                    Do you manage planning submission to Wandsworth Council?
                  </h3>
                  <p>
                    Yes. We manage the full application, upload documents and respond to
                    planning officer comments through to decision.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                  <h3 className="font-semibold">
                    Can you coordinate structural calculations?
                  </h3>
                  <p>
                    Yes. We coordinate with structural engineers so beams, posts and load
                    bearing elements are designed and shown clearly on the plans.
                  </p>
                </div>
              </div>
            </div>

            {/* FINAL CTA */}
            <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Ready to start your project</h2>
                <p className="text-sm text-slate-300">
                  Send your address and a short description of the extension, loft,
                  refurbishment or new layout. We review it and provide a fixed quote the
                  same day.
                </p>
              </div>

              <div className="flex flex-col space-y-1 text-sm">
                <a href={PHONE_LINK} className="font-semibold text-emerald-300 underline">
                  {PHONE_DISPLAY}
                </a>
                <a href={EMAIL_LINK} className="font-semibold text-emerald-300 underline">
                  {EMAIL_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_LINK}
                  className="font-semibold text-emerald-300 underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  WhatsApp us
                </a>
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-emerald-900 shadow hover:bg-emerald-100"
                >
                  Get your free quote
                </button>
              </div>
            </div>

            {/* INTERNAL LINKS */}
            <div className="text-xs text-slate-500 pt-4">
              <p>
                See also:{" "}
                <a href="/extension-plans" className="underline text-emerald-700">
                  House extension drawings
                </a>
                ,{" "}
                <a href="/loft-conversion-plans" className="underline text-emerald-700">
                  Loft conversion drawings
                </a>{" "}
                and{" "}
                <a href="/" className="underline text-emerald-700">
                  WEDRAWPLANS home page
                </a>
                .
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
