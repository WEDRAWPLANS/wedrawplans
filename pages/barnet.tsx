import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Barnet() {
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/barnet",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/hero.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK"
    },
    areaServed: [
      "Barnet",
      "Finchley",
      "Hendon",
      "Edgware",
      "Totteridge",
      "Whetstone",
      "Mill Hill",
      "Colindale",
      "Golders Green",
      "Burnt Oak",
      "High Barnet",
      "Friern Barnet",
      "East Finchley",
      "West Finchley"
    ],
    description:
      "Architectural drawing services in Barnet for extensions, loft conversions, outbuildings, refurbishments and building regulations."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Barnet?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many extensions fall under permitted development. We confirm the correct route once we review your address and house type."
        }
      },
      {
        "@type": "Question",
        name: "Is Barnet strict with loft conversions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Barnet follows national permitted development rules but can be stricter in conservation areas and where roof changes affect the street scene."
        }
      },
      {
        "@type": "Question",
        name: "How long does Barnet Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications usually take six to eight weeks after validation. Lawful Development Certificates normally take four to six weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Barnet Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Barnet Council and respond to planning officer queries."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings Barnet | Extensions, Lofts, New Builds |
          WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Barnet for extensions, loft conversions, outbuildings, refurbishments and building regulation plans. Fast surveys, clear drawings and full planning support."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/barnet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJson)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <main className="bg-slate-50">
        {/* HERO */}
        <section className="bg-emerald-900 text-white">
          <div className="mx-auto max-w-5xl px-6 py-16 space-y-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-100">
              WEDRAWPLANS • BARNET
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Architectural Drawings in Barnet
            </h1>

            <p className="max-w-3xl text-sm md:text-base text-emerald-100">
              Architectural drawing services in Barnet for house extensions,
              loft conversions, outbuildings, refurbishments and new build
              homes. Every set of drawings is prepared to Barnet Council
              guidance and current Building Regulations.
            </p>

            <div className="grid md:grid-cols-[2fr,1.2fr] gap-8 items-start">
              <div className="space-y-3 text-sm">
                <div className="grid sm:grid-cols-2 gap-3">
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Survey within 48 hours</li>
                    <li>Planning and permitted development advice</li>
                    <li>Full planning and Lawful Development applications</li>
                  </ul>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Drawings tailored to Barnet Council policies</li>
                    <li>Building regulation packages for 2025 standards</li>
                    <li>Fixed quotes with clear scope</li>
                  </ul>
                </div>

                <p className="mt-2 text-xs text-emerald-100">
                  Typical Barnet projects include rear extensions, wrap
                  extensions, hip to gable loft conversions, L shaped dormers
                  and high quality garden rooms.
                </p>
              </div>

              <div className="space-y-2 text-sm text-right md:text-left">
                <p className="text-xs text-emerald-100">Talk to us</p>
                <p className="text-sm text-white">
                  Phone{" "}
                  <a
                    href="tel:+442036548508"
                    className="font-semibold text-white underline"
                  >
                    +44 20 3654 8508
                  </a>
                </p>
                <p className="text-sm text-white">
                  Email{" "}
                  <a
                    href="mailto:info@wedrawplans.com"
                    className="font-semibold text-white underline"
                  >
                    info@wedrawplans.com
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/#quote"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-emerald-900 shadow-lg shadow-emerald-900/30 hover:bg-emerald-50 transition"
              >
                Get your free Barnet quote
              </a>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-5xl px-6 py-14 space-y-14">
          {/* INTRO + DRAWINGS IMAGE */}
          <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Architectural drawing services in Barnet
              </h2>
              <p className="text-sm md:text-base text-slate-700">
                WEDRAWPLANS provides full drawing packages for single and double
                storey extensions, loft conversions, internal alterations,
                outbuildings, flat conversions and small new developments
                across the borough of Barnet.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We work throughout Finchley, Hendon, Whetstone, Totteridge,
                Mill Hill, Edgware, Colindale, Golders Green, Burnt Oak, High
                Barnet, Friern Barnet, East Finchley and West Finchley.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <Image
                src="/images/drawings.jpg"
                alt="Example of architectural drawings for a Barnet extension"
                width={800}
                height={500}
                className="object-cover w-full h-48 md:h-56"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">
                  Technical drawings your builder can build from
                </h3>
                <p className="text-sm text-slate-700">
                  Clear floor plans, elevations, sections and notes, coordinated
                  with structural design so that builders and inspectors have
                  everything they need.
                </p>
              </div>
            </div>
          </div>

          {/* AREAS + PROJECT TYPES */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Barnet areas we cover</h3>
              <Image
                src="/images/area.jpg"
                alt="Barnet local high street"
                width={800}
                height={500}
                className="rounded-xl object-cover mb-3"
              />
              <p className="text-sm text-slate-700">
                Drawings for the whole borough of Barnet, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Finchley Central N3</li>
                  <li>North Finchley N12</li>
                  <li>East Finchley N2</li>
                  <li>Hendon NW4</li>
                  <li>Mill Hill NW7</li>
                  <li>Colindale</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Totteridge and Whetstone N20</li>
                  <li>High Barnet EN5</li>
                  <li>Friern Barnet</li>
                  <li>Golders Green NW11</li>
                  <li>Burnt Oak</li>
                  <li>Edgware</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Popular projects in Barnet</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Rear and side extensions</li>
                  <li>Wraparound and L shaped extensions</li>
                  <li>Hip to gable loft conversions</li>
                  <li>L shaped dormers</li>
                  <li>Kitchen and open plan layouts</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Garden rooms and studios</li>
                  <li>Garage conversions</li>
                  <li>Internal reconfiguration</li>
                  <li>Flats, HMOs and change of use</li>
                  <li>Small new build schemes</li>
                </ul>
              </div>
              <Image
                src="/images/hero.jpg"
                alt="Completed extension and loft project"
                width={800}
                height={500}
                className="rounded-xl object-cover mt-2"
              />
            </div>
          </div>

          {/* PERMITTED DEVELOPMENT */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Permitted development limits in Barnet
            </h2>
            <p className="text-sm text-slate-700">
              Below is a simplified guide to common permitted development
              limits. Final confirmation always depends on your house type,
              location and any Article 4 directions.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold mb-2">Rear extensions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Up to 3 m deep on terrace houses</li>
                  <li>Up to 4 m on semi detached houses</li>
                  <li>Up to 6 to 8 m with Prior Approval</li>
                  <li>Maximum 4 m high for single storey</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Loft conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Up to 40 to 50 cubic metres volume</li>
                  <li>No extensions on the front roof slope</li>
                  <li>Side windows obscure glazed and fixed</li>
                  <li>External materials to be similar</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Outbuildings</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Maximum 2.5 m high near boundaries</li>
                  <li>Cannot be used as a separate dwelling</li>
                  <li>Use must be incidental to the house</li>
                  <li>Not more than 50 percent of garden area</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PLANNING & BUILDING REG PACKS */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Planning drawings for Barnet
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Existing and proposed floor plans</li>
                <li>Existing and proposed elevations</li>
                <li>Roof plans and key sections</li>
                <li>Block plans and location plans</li>
                <li>Drainage and construction notes</li>
                <li>Design and access statements where needed</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Building regulation drawings for Barnet
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Structural layouts and coordination</li>
                <li>Foundation and beam information</li>
                <li>Fire safety and escape routes</li>
                <li>Thermal build ups and insulation specs</li>
                <li>Ventilation and extract positions</li>
                <li>Drainage runs and manhole information</li>
              </ul>
            </div>
          </div>

          {/* LOCAL KNOWLEDGE */}
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-emerald-900">
              Local planning knowledge for Barnet projects
            </h2>
            <p className="text-sm text-emerald-900">
              Barnet includes conservation areas, Article 4 zones, deep garden
              plots, backland policies and detailed guidance on roof extensions.
              We design each scheme to work with these local rules so that the
              chances of approval are as strong as possible.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do I need planning permission for my Barnet project?
                </h3>
                <p>
                  Many extensions and lofts can proceed under permitted
                  development. We check your address and advise the best route
                  at the start.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  How fast can you visit and survey the property?
                </h3>
                <p>
                  In most cases we can arrange the initial measured survey
                  within forty eight hours of instruction.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do you submit the application to Barnet Council?
                </h3>
                <p>
                  Yes. We handle the full submission, monitor progress and
                  respond to any planning officer comments.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you help with structural calculations?
                </h3>
                <p>
                  We coordinate with qualified structural engineers so that
                  beams, padstones and load bearing walls are all designed and
                  shown correctly on the drawings.
                </p>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Ready to start your Barnet project
              </h2>
              <p className="text-sm text-slate-300">
                Send us your address and a short description of the extension,
                loft or refurbishment you have in mind. We will review it and
                provide a fixed quote the same day.
              </p>
            </div>
            <div className="flex flex-col space-y-1 text-sm">
              <a
                href="tel:+442036548508"
                className="font-semibold text-emerald-300 underline"
              >
                +44 20 3654 8508
              </a>
              <a
                href="mailto:info@wedrawplans.com"
                className="font-semibold text-emerald-300 underline"
              >
                info@wedrawplans.com
              </a>
              <a
                href="/#quote"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-emerald-900 shadow hover:bg-emerald-100"
              >
                Get your free Barnet quote
              </a>
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
    </>
  );
}
import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Barnet";

export default function BarnetAreaPage() {
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  await submitBoroughLead(e, { boroughName: "Barnet" });
}


 function scrollToForm() {
    const el = document.getElementById("barnet-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Barnet – Extensions, Lofts and New Builds
        </title>
        <meta
          name="description"
          content="Architectural drawings in Barnet for house extensions, loft conversions, new builds and building regulation packs. Fixed fees from £750 with fast turnaround."
        />
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
                  Barnet architectural drawings
                </p>
                <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900 sm:text-[26px]">
                  Plans for extensions, lofts and new builds in Barnet
                </h1>
                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house
                  extensions, loft conversions, new builds and conversions across
                  the London Borough of Barnet. Fixed fees with clear scope and
                  fast communication.
                </p>
                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• House extensions, loft conversions and internal remodelling</li>
                  <li>• New build houses and small residential schemes</li>
                  <li>• Planning drawings and building regulation packs</li>
                  <li>• Fixed fees from £750 for domestic projects</li>
                  <li>• Covering Barnet, Finchley, Edgware, Mill Hill and more</li>
                  <li>• Same day response on most enquiries</li>
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                  >
                    Get my Barnet quote
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
              <div id="barnet-quote" className="lg:w-1/2">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed quote for Barnet projects
                  </h2>
                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your property in Barnet and what you plan
                    to build. We will send a clear fixed fee for your drawings.
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
                        Barnet postcode
                      </label>
                      <input
                        name="postcode"
                        required
                        placeholder="EN5 2XY"
                        onFocus={(e) => {
                          e.target.placeholder = "";
                        }}
                        onBlur={(e) => {
                          if (!e.target.value) {
                            e.target.placeholder = "EN5 2XY";
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
                        Brief description of your Barnet project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear and side extension to 1930s semi in Barnet with open plan kitchen and new loft above."
                        className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                    >
                      Get my Barnet quote
                    </button>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Typical Barnet projects include extensions and loft
                      conversions to semi detached and detached houses, as well as
                      new build plots and conversions to flats.
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
                Common project types in Barnet
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Barnet has a large stock of semi detached and detached houses,
                as well as terraces and bungalows. Many owners extend, convert
                lofts or remodel internally rather than move.
              </p>
              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Rear and side extensions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Kitchen and dining extensions to the rear, often combined with
                    side infill to create larger open plan spaces. We set out
                    structure, layout and light carefully.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Rear dormer and hip to gable lofts are very common in Barnet.
                    We design efficient layouts with stairs, headroom and fire
                    protection in mind.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    New build and infill plots
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Many sites in Barnet have potential for an additional house or
                    small residential scheme. We prepare layouts, elevations and
                    information suitable for planning.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Conversions to flats
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Larger houses can sometimes be converted into self contained
                    flats. We set out unit layouts, access and basic amenity
                    considerations and coordinate with planning advice.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* LOCAL FOCUS */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Areas of Barnet covered
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                WEDRAWPLANS support projects across the whole borough, including:
              </p>
              <ul className="mt-4 grid gap-2 text-[13px] text-slate-800 md:grid-cols-2">
                <li>• High Barnet and New Barnet</li>
                <li>• Finchley, North Finchley and East Finchley</li>
                <li>• Edgware and Mill Hill</li>
                <li>• Whetstone and Totteridge</li>
                <li>• Hendon and Colindale side of Barnet</li>
                <li>• Surrounding neighbourhoods within the borough</li>
              </ul>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Projects can be fully managed online with drawings issued by email,
                or combined with on site measured surveys where needed.
              </p>
            </div>
          </section>

          {/* PRICING REMINDER */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Clear fixed fees for Barnet projects
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Fees for Barnet projects follow the same clear structure as the
                rest of London, with adjustments for size and complexity.
              </p>
              <div className="mt-5 grid gap-4 text-[13px] md:grid-cols-3">
                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Extension or loft planning drawings
                  </h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £750 + VAT
                  </div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Existing and proposed plans and elevations set out for house
                    holder planning or lawful development applications.
                  </p>
                </div>
                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Measured survey in Barnet
                  </h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £150 + VAT
                  </div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    On site survey of your property so that accurate existing
                    drawings can be prepared before design work begins.
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
                    Technical drawings, sections and construction notes coordinated
                    with structural engineers for building control.
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Request my Barnet fee
                </button>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Ready to move your Barnet project forward
              </h2>
              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed
                fee and suggested next steps for your Barnet extension, loft, new
                build or technical pack.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Get my Barnet quote
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
