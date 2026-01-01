import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Hackney";

export default function HackneyAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Hackney" });
  }

  function scrollToForm() {
    const el = document.getElementById("hackney-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/hackney",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK"
    },
    areaServed: [
      "Hackney",
      "Hackney Central",
      "Hackney Downs",
      "London Fields",
      "Dalston",
      "Stoke Newington",
      "Newington Green",
      "Clapton",
      "Upper Clapton",
      "Lower Clapton",
      "Homerton",
      "Hoxton",
      "Haggerston",
      "De Beauvoir",
      "Shoreditch",
      "Victoria Park side streets"
    ],
    description:
      "Architectural drawing services in Hackney for extensions, loft conversions, flat conversions, outbuildings and building regulation plans. Initial survey within 48 hours and full planning support."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Hackney",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Hackney can be carried out under permitted development. We confirm the correct route once we review your address and house type."
        }
      },
      {
        "@type": "Question",
        name: "Is Hackney strict with loft conversions and extensions",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Hackney can be strict in conservation areas and streets with strong character, especially around Stoke Newington, De Beauvoir and London Fields. Careful drawings and a strong planning case help."
        }
      },
      {
        "@type": "Question",
        name: "How long does Hackney Council take to decide",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Hackney Council",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Hackney Council and respond to planning officer queries."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings in Hackney | Extensions, Lofts, Conversions</title>
        <meta
          name="description"
          content="Architectural drawing services in Hackney for extensions, loft conversions, flat conversions, outbuildings and building regulation plans. Initial survey within 48 hours, clear drawings and full planning support."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/hackney" />

        <meta property="og:title" content="Architectural Drawings Hackney | WEDRAWPLANS" />
        <meta
          property="og:description"
          content="Extensions, loft conversions, flat conversions and building regulations drawings across Hackney. Initial survey within 48 hours and full planning support."
        />
        <meta property="og:url" content="https://www.wedrawplans.co.uk/areas/hackney" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Architectural Drawings Hackney | WEDRAWPLANS" />
        <meta
          name="twitter:description"
          content="Extensions, lofts, conversions and building regulations drawings across Hackney. Initial survey within 48 hours."
        />
        <meta name="twitter:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

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
        {/* HEADER MATCH HOMEPAGE STYLE */}
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
                Architectural Drawings for Extensions, Lofts + New Builds at an Affordable Fixed Cost
              </div>
            </div>

            <hr className="mt-5 border-t border-slate-600" />

            <div className="mt-2 flex w-full items-center justify-between gap-3">
              <div className="text-[12px] text-slate-700">
                <span className="font-semibold text-slate-900">Hackney</span> borough page
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PHONE_LINK}
                  className="hidden items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white sm:inline-flex"
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

        <main>
          {/* HERO + FORM */}
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">
              {/* LEFT TEXT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Hackney architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and conversions in Hackney
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and building regulation drawing packages across the London Borough of Hackney,
                  including Hackney Central, Dalston, Stoke Newington, Clapton, Homerton, Haggerston, Hoxton and Shoreditch.
                  Strong layouts, clear elevations and a clean submission pack.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Initial survey within 48 hours</li>
                  <li>• Permitted development, LDC and full planning advice</li>
                  <li>• Flats and maisonettes need planning strategy</li>
                  <li>• Terraces: rear, side infill and wrap around extensions</li>
                  <li>• Lofts: dormers, roof changes and stair planning</li>
                  <li>• Full submission support and planner responses</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-3 items-center">
                  <button
                    onClick={scrollToForm}
                    type="button"
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                  >
                    Get a quick quote
                  </button>

                  <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="mt-3 text-[12px] text-slate-600">
                  Typical Hackney projects include rear extensions to terraces in Hackney Central and Clapton, loft conversions in Stoke Newington
                  and Homerton, and flat conversion layouts around Dalston, De Beauvoir, Haggerston and Hoxton.
                </p>
              </div>

              {/* RIGHT FORM */}
              <div id="hackney-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                    Free fixed fee quote
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us your postcode and what you want to build. We will reply with a clear fixed fee for your drawings.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Telephone</label>
                        <input
                          name="phone"
                          required
                          type="tel"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Email</label>
                        <input
                          name="email"
                          required
                          type="email"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Hackney postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="E8 2AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "E8 2AA")}
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Project type</label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        <option>House extension</option>
                        <option>Loft conversion</option>
                        <option>Flat conversion</option>
                        <option>Internal remodelling</option>
                        <option>New build house</option>
                        <option>Building regulation pack only</option>
                        <option>Other domestic project</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Brief description of your project</label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear extension with rooflights, or dormer loft conversion with ensuite, or conversion of house into 2 flats."
                        className="w-full border border-slate-300 rounded bg-white px-2 py-2 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#64b7c4] py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get a fixed fee quote
                    </button>

                    <p className="text-[11px] text-slate-500 mt-2">
                      We reply quickly with a clear fixed fee and recommended route based on your property type and location.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* RICH CONTENT SECTION */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              {/* INTRO + IMAGE CARD */}
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Hackney
                  </h2>

                  <p className="text-[13px] text-slate-700">
                    We prepare planning and building regulation drawing packages for rear and side extensions, loft conversions, internal
                    reconfiguration, flat conversions and small infill developments across Hackney. Clear drawings help you get accurate builder
                    quotes, reduce uncertainty and improve the chance of a smoother council decision.
                  </p>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                    <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Hackney specific risks we design around
                    </h3>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-[13px] text-slate-700">
                      <li>Overlooking and privacy between tight rear gardens</li>
                      <li>Daylight and overshadowing impacts on neighbours</li>
                      <li>Party wall structure and shared boundaries</li>
                      <li>Conservation area constraints and street character</li>
                      <li>Flats and maisonettes needing full planning permission</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3 items-center">
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                    >
                      Get a quick quote
                    </button>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
                    >
                      💬 Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
                  <Image
                    src="/images/drawings.jpg"
                    alt="Example of architectural drawings for a Hackney project"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Clear drawings for tight terraces and shared boundaries
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Plans, elevations and sections prepared to show depth, height, openings and relationship to neighbours clearly so planners
                      and Building Control can assess the scheme faster.
                    </p>
                  </div>
                </div>
              </div>

              {/* AREAS + PROJECT TYPES */}
              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Hackney areas we cover
                  </h3>

                  <Image
                    src="/images/hackney-area.jpg"
                    alt="Hackney residential area"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                  />

                  <p className="text-[13px] text-slate-700">
                    Architectural drawings across the whole borough, including:
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Hackney Central and Hackney Downs</li>
                      <li>London Fields</li>
                      <li>Dalston</li>
                      <li>Stoke Newington</li>
                      <li>Newington Green</li>
                      <li>Homerton</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Lower and Upper Clapton</li>
                      <li>De Beauvoir and Haggerston</li>
                      <li>Hoxton and Shoreditch</li>
                      <li>Victoria Park side streets</li>
                      <li>Canal side terraces</li>
                      <li>Local estates and streets</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Hackney
                  </h3>

                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Rear extensions to terraces</li>
                      <li>Side infill and wrap around extensions</li>
                      <li>Loft conversions and dormers</li>
                      <li>Mansard roof alterations</li>
                      <li>Internal reconfiguration</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Flat and maisonette conversions</li>
                      <li>Garden rooms and studios</li>
                      <li>Change of use layouts</li>
                      <li>Refurbishment upgrades</li>
                      <li>Small infill and backland schemes</li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-[13px] text-slate-700">
                    <p className="font-semibold mb-1 text-slate-900">
                      Common Hackney planning focus areas
                    </p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Rear depth, height and neighbour impact</li>
                      <li>Roof form and dormer proportions</li>
                      <li>Privacy, overlooking and boundary treatments</li>
                      <li>Waste storage, cycle storage and access routes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PLANNING / PD */}
              <div className="space-y-5">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Planning and permitted development in Hackney
                </h2>

                <p className="text-[13px] text-slate-700">
                  Many houses have permitted development rights, but conservation areas and Article 4 directions can restrict what is allowed.
                  Flats and maisonettes do not have permitted development rights, so they need full planning permission.
                </p>

                <div className="grid md:grid-cols-3 gap-8 text-[13px] text-slate-700">
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Rear extensions
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Depth, height and boundary conditions checked early</li>
                      <li>Neighbour windows and gardens assessed</li>
                      <li>We advise PD, Prior Approval or full planning</li>
                      <li>Clean elevations reduce objections</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Loft conversions
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Dormer size set by roof form and street character</li>
                      <li>Front roof changes are often sensitive</li>
                      <li>Privacy and window placement planned carefully</li>
                      <li>Conservation areas require a stronger approach</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Flats and conversions
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Full planning permission required for flats</li>
                      <li>Daylight and outlook considered from the start</li>
                      <li>Space standards and storage planned properly</li>
                      <li>Fire safety and access strategy for Building Control</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PACKS */}
              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Planning drawings package
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-700">
                    <li>Existing and proposed floor plans</li>
                    <li>Existing and proposed elevations</li>
                    <li>Sections where needed for clarity</li>
                    <li>Roof plan where relevant</li>
                    <li>Location plan and block plan</li>
                    <li>Submission ready PDF set</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Building regulations package
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-700">
                    <li>Key construction details</li>
                    <li>Thermal build ups and insulation notes</li>
                    <li>Ventilation and extraction coordination</li>
                    <li>Fire safety layout notes and escape awareness</li>
                    <li>Drainage layout notes where needed</li>
                    <li>Coordination points for structural design</li>
                  </ul>
                </div>
              </div>

              {/* LOCAL KNOWLEDGE */}
              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-emerald-900">
                  Local planning knowledge for Hackney projects
                </h2>
                <p className="text-[13px] text-emerald-900">
                  Hackney has characterful terraces and mixed housing types, with detailed expectations on depth, height, roof form and neighbour impact.
                  We design to suit the street, support a strong planning argument and produce clear drawings that help your application move smoothly.
                </p>
              </div>

              {/* FAQ */}
              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Frequently asked questions
                </h2>

                <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Can you help with flat conversions in Hackney
                    </h3>
                    <p>
                      Yes. Many Hackney projects involve converting houses into flats or reorganising existing units. We design layouts that meet
                      space, access and amenity requirements and support a strong planning submission.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      How fast can you survey
                    </h3>
                    <p>
                      In most cases we can book an initial survey within forty eight hours, subject to access, location and travel time.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Do you manage the planning submission
                    </h3>
                    <p>
                      Yes. We submit, track and respond to planning queries through to decision and advise on next steps after approval.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Can you coordinate structural calculations
                    </h3>
                    <p>
                      Yes. We coordinate with structural engineers so key beams and supports are designed properly and shown clearly for Building Control.
                    </p>
                  </div>
                </div>
              </div>

              {/* FINAL CTA */}
              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Ready to start your Hackney project
                  </h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short brief. We will review it and reply with a fixed fee and recommended route.
                  </p>
                </div>

                <div className="flex flex-col space-y-2 text-[13px]">
                  <a href={PHONE_LINK} className="font-semibold text-emerald-300 underline">
                    {PHONE_DISPLAY}
                  </a>
                  <a href="mailto:info@wedrawplans.com" className="font-semibold text-emerald-300 underline">
                    info@wedrawplans.com
                  </a>
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-slate-900 shadow hover:bg-emerald-100"
                  >
                    Get a quick quote
                  </button>
                </div>
              </div>

              {/* INTERNAL LINKS */}
              <div className="text-[12px] text-slate-600 pt-2">
                See also{" "}
                <a href="/extension-plans" className="underline">
                  extension plans
                </a>
                ,{" "}
                <a href="/loft-conversion-plans" className="underline">
                  loft conversion plans
                </a>{" "}
                and{" "}
                <a href="/" className="underline">
                  WEDRAWPLANS home page
                </a>
                .
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
