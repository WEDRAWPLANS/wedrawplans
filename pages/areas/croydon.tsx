import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Croydon";

export default function CroydonAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Croydon" });
  }

  function scrollToForm() {
    const el = document.getElementById("croydon-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.wedrawplans.co.uk/areas/croydon#business",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/croydon",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK"
    },
    areaServed: [
      "Croydon",
      "South Croydon",
      "East Croydon",
      "West Croydon",
      "Purley",
      "Coulsdon",
      "Kenley",
      "Sanderstead",
      "Selhurst",
      "Thornton Heath",
      "Norbury",
      "Shirley",
      "New Addington"
    ],
    description:
      "Architectural drawing services in Croydon for extensions, loft conversions, refurbishments, outbuildings and building regulation plans. Survey within 48 hours and full planning submission support."
  };

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.wedrawplans.co.uk/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Croydon",
        item: "https://www.wedrawplans.co.uk/areas/croydon"
      }
    ]
  };

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.wedrawplans.co.uk/areas/croydon#service",
    name: "Architectural drawings in Croydon",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.wedrawplans.co.uk/areas/croydon#business"
    },
    areaServed: "London Borough of Croydon",
    serviceType: [
      "Planning drawings",
      "Permitted development drawings",
      "Lawful Development Certificate drawings",
      "Building regulation drawings",
      "Measured survey"
    ],
    description:
      "Planning and building regulation drawing packages for Croydon homes, including extensions, loft conversions, refurbishments and outbuildings."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Croydon",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions can be permitted development, but it depends on your house type, site constraints, and whether any restrictions apply. We confirm the best route after a quick review of your address and goals."
        }
      },
      {
        "@type": "Question",
        name: "How long does Croydon Council take to decide",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Timescales vary, but householder applications are commonly decided within several weeks after validation. If you need certainty for a permitted development style scheme, a Lawful Development Certificate can be a safer option."
        }
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Croydon Council",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to the council portal, and respond to planning officer queries through to decision."
        }
      },
      {
        "@type": "Question",
        name: "What drawings do I get for building regulations",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A coordinated package typically includes plans, elevations, sections, key construction details, notes for compliance, and coordination points for structure, ventilation, insulation, and drainage so builders can price and build correctly."
        }
      },
      {
        "@type": "Question",
        name: "How fast can you survey a property in Croydon",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "In most cases we can arrange a measured survey within 48 hours, subject to access and location."
        }
      },
      {
        "@type": "Question",
        name: "Can you help with side extensions, wrap around extensions, and loft dormers",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We design and draw side extensions, wrap around rear extensions, dormer loft conversions, and internal reconfiguration so the layout works and the planning submission is clear."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings in Croydon | Extensions, Lofts, Building Regs</title>
        <meta
          name="description"
          content="Architectural drawings in Croydon for extensions, loft conversions, refurbishments and building regulation plans. Measured survey within 48 hours, clear drawings, fixed quotes, and full planning submission support."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/croydon" />

        <meta property="og:title" content="Architectural Drawings Croydon | WEDRAWPLANS" />
        <meta
          property="og:description"
          content="Extensions, loft conversions, refurbishments and building regulation drawings in Croydon. Survey within 48 hours and full planning support."
        />
        <meta property="og:url" content="https://www.wedrawplans.co.uk/areas/croydon" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Architectural Drawings Croydon | WEDRAWPLANS" />
        <meta
          name="twitter:description"
          content="Planning and building regulation drawing packages in Croydon. Survey within 48 hours, fixed quote, and full submission support."
        />
        <meta name="twitter:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* HEADER MATCH HOMEPAGE STYLE (SAME AS BARNET AND CAMDEN) */}
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
                <span className="font-semibold text-slate-900">Croydon</span> borough page
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
          {/* HERO + FORM (SAME AS BARNET AND CAMDEN) */}
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">
              {/* LEFT TEXT */}
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Croydon architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and refurbishments in Croydon
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for Croydon homes,
                  including rear extensions, wrap around extensions, loft dormers,
                  refurbishments and outbuildings. Fixed fees with clear scope and fast communication.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Measured survey within 48 hours</li>
                  <li>• Planning, Prior Approval or LDC route confirmed early</li>
                  <li>• Rear, side and wrap around extensions</li>
                  <li>• Loft dormers and hip to gable conversions</li>
                  <li>• Building regulation packs for 2025 standards</li>
                  <li>• Same day response on most enquiries</li>
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
              </div>

              {/* RIGHT FORM */}
              <div id="croydon-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                    Free fixed fee quote
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your property and what you plan to build. We will reply with a clear fixed fee for your drawings.
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
                      <label className="text-[11px] font-medium">Croydon postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="CR0 1AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "CR0 1AA")}
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
                        <option>Internal remodelling</option>
                        <option>New build house</option>
                        <option>Conversion to flats</option>
                        <option>Building regulation pack only</option>
                        <option>Other domestic project</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">
                        Brief description of your project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: wrap around extension to a semi detached house with open plan kitchen and a dormer loft room."
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
                      Typical Croydon projects include wrap around extensions, loft dormers, garage conversions and full refurbishments.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* MERGED RICH CONTENT (YOUR CROYDON CONTENT, IN BARNET STYLE) */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Planning and building regulation drawings for Croydon homes
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS prepares full drawing packages for rear and side extensions, loft conversions,
                    refurbishments, internal reconfiguration and outbuildings across the London Borough of Croydon.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    We cover Croydon, South Croydon, Purley, Coulsdon, Kenley, Sanderstead, Shirley, New Addington,
                    Thornton Heath, Norbury, Selhurst and surrounding areas.
                  </p>

                  <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-3">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      How it works
                    </h3>
                    <ol className="list-decimal pl-5 space-y-1 text-[13px] text-slate-700">
                      <li>Send your address and a short description of what you want to build</li>
                      <li>We confirm the best route: permitted development, prior approval, LDC or planning</li>
                      <li>Measured survey, then existing and proposed drawings</li>
                      <li>Submission support and revisions where needed</li>
                      <li>Upgrade to building regs pack when you are ready to build</li>
                    </ol>
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
                    alt="Example architectural drawings for a Croydon project"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Clear drawings that builders can price
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Plans, elevations and sections set out clearly, with coordination points for structure and building regs
                      so your quote stage is smoother and you avoid surprises on site.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Croydon areas we cover
                  </h3>
                  <Image
                    src="/images/croydon-area.jpg"
                    alt="Croydon residential area"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                  />
                  <p className="text-[13px] text-slate-700">
                    Architectural drawings across the whole borough, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Croydon and South Croydon</li>
                      <li>East Croydon and West Croydon</li>
                      <li>Purley</li>
                      <li>Coulsdon</li>
                      <li>Kenley and Sanderstead</li>
                      <li>Shirley</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>New Addington</li>
                      <li>Norbury</li>
                      <li>Thornton Heath</li>
                      <li>Selhurst</li>
                      <li>Corner plots and side access homes</li>
                      <li>Sloping and stepped gardens</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Croydon
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Large rear extensions</li>
                      <li>Wrap around extensions</li>
                      <li>Side extensions</li>
                      <li>Loft dormers</li>
                      <li>Hip to gable loft conversions</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Internal knock through layouts</li>
                      <li>Garage conversions</li>
                      <li>Garden rooms and studios</li>
                      <li>High specification refurbishments</li>
                      <li>Light and storage upgrades</li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-[13px] text-slate-700">
                    <p className="font-semibold mb-1 text-slate-900">Common Croydon design priorities</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Privacy and overlooking checks</li>
                      <li>Daylight improvements to kitchens and family spaces</li>
                      <li>Neighbour impact and massing clarity</li>
                      <li>Good access to garden and side paths</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Planning and permitted development in Croydon
                </h2>
                <p className="text-[13px] text-slate-700">
                  Many homes can use permitted development, but constraints can apply depending on your street, plot and previous extensions.
                  We confirm the safest route early so you can proceed with confidence and avoid redesign later.
                </p>

                <div className="grid md:grid-cols-3 gap-8 text-[13px] text-slate-700">
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Rear extensions
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>We check depth, height and neighbour impact</li>
                      <li>We advise on PD vs prior approval vs planning</li>
                      <li>Clear plans and elevations reduce objections</li>
                      <li>We can review similar approvals nearby</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Loft conversions
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Dormer scale and roof form kept proportionate</li>
                      <li>Front changes are usually more sensitive</li>
                      <li>Windows positioned for privacy</li>
                      <li>Stair design planned early for space</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Refurbishment and upgrades
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Better circulation, light and storage</li>
                      <li>Kitchen and open plan improvements</li>
                      <li>Energy upgrades and insulation strategy</li>
                      <li>Structure and builder notes where helpful</li>
                    </ul>
                  </div>
                </div>
              </div>

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

              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-emerald-900">
                  Local knowledge for Croydon projects
                </h2>
                <p className="text-[13px] text-emerald-900">
                  Croydon has a wide mix of semis, detached homes and larger corner plots.
                  Strong outcomes usually come from clear massing, neighbour sensitive window placement,
                  and layouts that improve everyday living.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Frequently asked questions
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Can you help with large family extensions
                    </h3>
                    <p>
                      Yes. We regularly prepare drawings for larger rear, side and wrap extensions designed around kitchens,
                      family space, utility rooms and better connection to the garden.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Can you prepare drawings for builders to quote
                    </h3>
                    <p>
                      Yes. Clear drawings reduce guesswork, improve quote accuracy, and help you compare builder pricing like for like.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Do you manage the full submission
                    </h3>
                    <p>
                      Yes. We submit, track and respond to planning queries through to decision, and we can advise on next steps after approval.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Can you coordinate structural calculations
                    </h3>
                    <p>
                      We work with structural engineers so key beams and supports are properly designed and shown clearly for building control and construction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Ready to start your project
                  </h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short description. We review and reply with a fixed fee and recommended next steps.
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

              <div className="text-[12px] text-slate-600 pt-2">
                See also{" "}
                <a href="/extension-plans" className="underline">
                  extension plans
                </a>
                ,{" "}
                <a href="/loft-plans" className="underline">
                  loft plans
                </a>{" "}
                and{" "}
                <a href="/new-build-plans" className="underline">
                  new build plans
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
