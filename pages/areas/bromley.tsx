import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_E164 = "+442036548508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL = "info@wedrawplans.com";

const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Bromley";

export default function Bromley() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await submitBoroughLead(e, { boroughName: "Bromley" });
  }

  function scrollToForm() {
    const el = document.getElementById("bromley-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const CANONICAL = "https://wedrawplans.co.uk/bromley";

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: CANONICAL,
    telephone: PHONE_E164,
    email: EMAIL,
    image: "https://wedrawplans.co.uk/images/drawings.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "GB"
    },
    areaServed: [
      "Bromley",
      "Beckenham",
      "Orpington",
      "Chislehurst",
      "Petts Wood",
      "Shortlands",
      "West Wickham",
      "Hayes",
      "Biggin Hill"
    ],
    description:
      "Architectural drawing services in Bromley for extensions, loft conversions, garage conversions, outbuildings and building regulation plans."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Bromley?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Bromley can be carried out under permitted development. We confirm the correct route once we review your address and house type."
        }
      },
      {
        "@type": "Question",
        name: "Is Bromley strict with loft conversions and large extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Bromley has guidance for depth, height and roof design. Conservation areas and corner plots can be more sensitive. Clear drawings and a strong planning case are important."
        }
      },
      {
        "@type": "Question",
        name: "How long does Bromley Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications are often decided in six to eight weeks after validation. Lawful Development Certificates are often decided in four to six weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Bromley Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Bromley Council and respond to planning officer queries."
        }
      }
    ]
  };

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://wedrawplans.co.uk/" },
      { "@type": "ListItem", position: 2, name: "Bromley", item: CANONICAL }
    ]
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings Bromley | Extensions and Lofts | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawing services in Bromley for extensions, loft conversions, garage conversions, outbuildings and building regulation plans. Measured survey within 48 hours, clear drawings, and full support with Bromley Council."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta name="robots" content="index,follow" />

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
        <script
          type="application/ld+json"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* HEADER identical style to Harrow Barnet template */}
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
          {/* HERO + FORM with the same layout as Harrow Barnet */}
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 lg:flex-row lg:items-start lg:px-6 lg:py-10">
              {/* HERO TEXT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Bromley architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900 sm:text-[26px]">
                  Plans for extensions, lofts and conversions in Bromley
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and building regulation drawings for
                  Bromley homes and small residential projects. Clear scope, fixed fees,
                  and fast communication.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Measured survey within 48 hours</li>
                  <li>• Planning drawings and permitted development advice</li>
                  <li>• Building regulation packs aligned with 2025 standards</li>
                  <li>• Fixed fees from £750 for domestic projects</li>
                  <li>• Covering Bromley, Beckenham, Orpington, Chislehurst and more</li>
                  <li>• Same day response on most enquiries</li>
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                  >
                    Get your free quote
                  </button>

                  <a href={PHONE_LINK} className="text-[13px] font-medium text-slate-800 underline">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>

                {/* Optional small image panel like other boroughs */}
                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="relative h-36 w-full overflow-hidden rounded-xl">
                    <Image
                      src="/images/drawings.jpg"
                      alt="Architectural drawings example"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <p className="mt-2 text-[11px] text-slate-600">
                    Typical Bromley projects include rear and side extensions to 1930s semis,
                    loft conversions, garage conversions and garden rooms.
                  </p>
                </div>
              </div>

              {/* FORM */}
              <div id="bromley-quote" className="lg:w-1/2">
                <div className="rounded-2xl bg-white p-5 shadow-md">
                  <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Free fixed quote for Bromley projects
                  </h2>
                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your property in Bromley and what you plan to build.
                    We will send a clear fixed fee for your drawings.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium text-slate-700">Telephone</label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium text-slate-700">Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">Bromley postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="BR1 3AA"
                        onFocus={(e) => {
                          e.target.placeholder = "";
                        }}
                        onBlur={(e) => {
                          if (!e.target.value) e.target.placeholder = "BR1 3AA";
                        }}
                        className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">Project type</label>
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
                        <option value="Garage conversion">Garage conversion</option>
                        <option value="Outbuilding or garden room">Outbuilding or garden room</option>
                        <option value="Internal remodelling">Internal remodelling only</option>
                        <option value="New build house">New build house</option>
                        <option value="Conversion to flats">Conversion to self contained flats</option>
                        <option value="Building regulation pack only">Building regulation pack only</option>
                        <option value="Other project">Other domestic project</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700">
                        Brief description of your Bromley project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear and side extension to semi detached house in Bromley with open plan kitchen and loft conversion."
                        className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-[13px] focus:border-[#64b7c4] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-[#64b7c4] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                    >
                      Get your free quote
                    </button>

                    <p className="mt-2 text-[11px] text-slate-500">
                      We can help with planning submissions to Bromley Council, lawful development certificates,
                      and technical drawing packs for building control.
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
                Common project types in Bromley
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Bromley has a large stock of family houses, bungalows and suburban streets.
                Many owners extend, convert lofts or remodel internally rather than move.
              </p>

              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Rear and side extensions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Kitchen and dining extensions, often combined with side infill to create larger open plan spaces.
                    We set out structure, layout and daylight carefully.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Rear dormers and hip to gable lofts are common in Bromley. We design efficient layouts with stairs,
                    headroom and fire protection in mind.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Garage conversions and outbuildings
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Garage conversions and garden rooms can add space fast. We design for comfort, storage and natural light,
                    then prepare drawings for the correct approval route.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Conversions and small schemes
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Larger houses can sometimes be converted into self contained flats. We set out unit layouts, access,
                    amenity and coordinate the planning strategy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* AREAS COVERED */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Areas of Bromley covered
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                WEDRAWPLANS support projects across the whole borough, including:
              </p>

              <ul className="mt-4 grid gap-2 text-[13px] text-slate-800 md:grid-cols-2">
                <li>• Bromley, Bickley and Bromley Common</li>
                <li>• Beckenham, Shortlands and Park Langley</li>
                <li>• Orpington and Petts Wood</li>
                <li>• Chislehurst and Elmstead</li>
                <li>• West Wickham, Hayes and Keston</li>
                <li>• Biggin Hill and surrounding areas</li>
              </ul>
            </div>
          </section>

          {/* PRICING */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Clear fixed fees for Bromley projects
              </h2>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Fees follow the same clear structure as the rest of London, with adjustments for size and complexity.
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
                    Existing and proposed plans and elevations for householder planning, prior approval, or lawful development.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Measured survey in Bromley
                  </h3>
                  <div className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £150 + VAT
                  </div>
                  <p className="mt-2 text-[12px] text-slate-600">
                    On site survey to produce accurate existing drawings before design work begins.
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
                    Technical drawings, sections and notes coordinated with structural engineers for building control.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Request a fixed fee
                </button>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Ready to move your Bromley project forward
              </h2>
              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and we will reply with a clear fixed fee and suggested next steps for your Bromley project.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Get your free quote
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

              <p className="mt-4 text-[12px] text-slate-600">
                Prefer to call or email:{" "}
                <a className="underline" href={PHONE_LINK}>
                  {PHONE_DISPLAY}
                </a>{" "}
                •{" "}
                <a className="underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
