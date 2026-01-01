// pages/merton.tsx
import Head from "next/head";
import React from "react";
import Image from "next/image";
import { submitBoroughLead } from "../lib/submitBoroughLead";
import { SmartPlanningAssistant } from "../components/SmartPlanningAssistant";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Merton";

export default function MertonPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Merton" });
  }

  function scrollToForm() {
    const el = document.getElementById("merton-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/merton",
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
      "London Borough of Merton",
      "Wimbledon",
      "South Wimbledon",
      "Wimbledon Park",
      "Raynes Park",
      "West Wimbledon",
      "Morden",
      "Mitcham",
      "Colliers Wood",
      "Tooting borders",
      "Southfields borders",
      "Pollards Hill",
      "Lower Morden",
      "Merton Park",
    ],
    description:
      "Architectural drawing services in Merton for home extensions, loft conversions, internal reconfiguration and building regulation packs. Fixed fees with clear scope for projects in Wimbledon, Mitcham, Morden, Raynes Park and Colliers Wood.",
    priceRange: "££",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
        name: "Do I need planning permission for a rear extension in Merton?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Some rear extensions can be permitted development, but it depends on your property type, previous extensions, conservation constraints and dimensions. We check your site, confirm whether permitted development applies, and advise whether a lawful development certificate or householder planning application is the safer route.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with loft conversion drawings in Wimbledon and Raynes Park?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare existing and proposed drawings for dormers and hip to gable lofts, plus building regulation packs with key construction details. We design to suit the roof form and keep neighbour impact, ridge height and overlooking in mind.",
        },
      },
      {
        "@type": "Question",
        name: "What do I need to get a fixed quote?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Your address or postcode, a short description of the works, and any photos or agent floorplans you already have. If you are not sure, send what you have and we will tell you the best next step.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide measured surveys in Merton?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We can measure the existing property so the drawings are accurate before design begins. This is recommended for most extensions, lofts and building regulation packs.",
        },
      },
      {
        "@type": "Question",
        name: "Can you produce building regulation drawings as well as planning drawings?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. After planning, we can produce a building regulation pack with key plans, sections and details for building control and construction. We can also coordinate with a structural engineer where required.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings in Merton – Extensions, Lofts and Home Projects</title>
        <meta
          name="description"
          content="Planning drawings, extension layouts, loft conversion plans and building regulation packs for homes in Wimbledon, Mitcham, Morden and the wider London Borough of Merton. Fixed fees with clear scope."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/merton" />

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
                <span className="font-semibold text-slate-900">Merton</span> borough page
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
                  Merton architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Planning drawings for extensions, lofts and home upgrades
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepares planning and technical drawings for houses and flats across
                  the London Borough of Merton, including Wimbledon, Mitcham, Morden, Colliers Wood
                  and Raynes Park.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Rear and side extensions to family homes</li>
                  <li>• Loft conversions with dormers or hip to gable roofs</li>
                  <li>• Internal remodelling and open plan layouts</li>
                  <li>• Conversions and small residential schemes</li>
                  <li>• Building regulation and construction packs</li>
                  <li>• Support from first sketch through to detailed drawings</li>
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

                <div className="mt-6 rounded-xl border border-slate-200 bg-white/70 p-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                    What you get
                  </p>
                  <ul className="mt-2 space-y-1 text-[13px] text-slate-700">
                    <li>• Clear drawing set the council can validate quickly</li>
                    <li>• Fixed fee with scope, deliverables and turnaround explained</li>
                    <li>• Advice on PD vs planning and best submission route</li>
                    <li>• Optional structural coordination and building regs pack</li>
                  </ul>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div id="merton-quote" className="lg:w-1/2">
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
                      <label className="text-[11px] font-medium">Merton postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="SW19, SW20, CR4 or SM4"
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
                        <option>Rear extension</option>
                        <option>Side or wrap extension</option>
                        <option>Loft conversion</option>
                        <option>Internal remodelling</option>
                        <option>Conversion to flats</option>
                        <option>New build house</option>
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
                        placeholder="For example: rear extension and loft conversion to a house in Wimbledon with new open plan kitchen."
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
                      Tip: If you have Rightmove screenshots, photos, or sketches, mention it in the brief.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* SMART PLANNING ASSISTANT */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <SmartPlanningAssistant boroughName="Merton" />
            </div>
          </section>

          {/* RICH CONTENT (Barnet style) */}
          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Merton
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    We prepare planning drawings and technical packs for home improvement projects across Merton.
                    This includes rear extensions, wrap around layouts, loft conversions, internal remodelling,
                    and small residential schemes.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    We work throughout Wimbledon, South Wimbledon, Raynes Park, Morden, Mitcham, Colliers Wood,
                    Merton Park, Pollards Hill and nearby streets.
                  </p>

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
                    alt="Example of architectural drawings for a Merton project"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Technical drawings builders can price from
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Clear plans, elevations and sections with coordinated notes, designed to reduce questions on site and help builders price accurately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Merton areas we cover
                  </h3>

                  {/* Put this file in: /public/images/merton-area.jpg */}
                  <Image
                    src="/images/merton-area.jpg"
                    alt="Merton area map and coverage"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                  />

                  <p className="text-[13px] text-slate-700">
                    Drawings for the whole borough of Merton, including:
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Wimbledon</li>
                      <li>South Wimbledon</li>
                      <li>Wimbledon Park</li>
                      <li>Raynes Park</li>
                      <li>West Wimbledon</li>
                      <li>Merton Park</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Morden</li>
                      <li>Lower Morden</li>
                      <li>Mitcham</li>
                      <li>Colliers Wood</li>
                      <li>Pollards Hill</li>
                      <li>Tooting and Southfields borders</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Merton
                  </h3>

                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Rear and wrap extensions</li>
                      <li>Side infill and kitchen upgrades</li>
                      <li>Loft conversions and dormers</li>
                      <li>Hip to gable loft conversions</li>
                      <li>Internal remodelling layouts</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Garden studios and outbuildings</li>
                      <li>Garage conversions</li>
                      <li>Flat conversions and layouts</li>
                      <li>Energy and insulation upgrades</li>
                      <li>Small infill schemes</li>
                    </ul>
                  </div>

                  <Image
                    src="/images/hero.jpg"
                    alt="Completed extension project example"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mt-2"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Planning and permitted development in Merton
                </h2>
                <p className="text-[13px] text-slate-700">
                  Many houses in Merton can extend under permitted development, but this depends on previous extensions,
                  conservation constraints and dimensions. We confirm the safest route for each address, including whether a lawful development certificate is recommended.
                </p>

                <div className="grid md:grid-cols-3 gap-8 text-[13px] text-slate-700">
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Rear extensions
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Commonly 3 m to 4 m depths under PD</li>
                      <li>Deeper schemes may use Prior Approval</li>
                      <li>Height, boundaries and neighbour impact matter</li>
                      <li>We set it out clearly in plans and sections</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Loft conversions
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Volume limits typically 40 to 50 cubic metres</li>
                      <li>Dormers sized to suit roof form and context</li>
                      <li>Side windows normally obscure glazed</li>
                      <li>Street appearance and overlooking considered</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Flats and conversions
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Flats do not have PD rights</li>
                      <li>Full planning permission usually required</li>
                      <li>Space, daylight and amenity standards apply</li>
                      <li>We design layouts to policy requirements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Planning drawings for Merton
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-700">
                    <li>Existing and proposed floor plans</li>
                    <li>Existing and proposed elevations</li>
                    <li>Roof plans and key sections</li>
                    <li>Block plans and location plans</li>
                    <li>Design statement where helpful</li>
                    <li>Support through validation and queries</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Building regulation drawings for Merton
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-700">
                    <li>Coordinated structural layouts</li>
                    <li>Fire safety, escape and protection details</li>
                    <li>Thermal build ups and insulation specification</li>
                    <li>Ventilation and extract locations</li>
                    <li>Acoustic approach where required</li>
                    <li>Construction notes for contractors</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-emerald-900">
                  Local planning knowledge for Merton projects
                </h2>
                <p className="text-[13px] text-emerald-900">
                  Merton includes a mix of strong character streets and suburban plots. We set out massing, heights and window strategy clearly so planning review is quicker and the build is easier to price and deliver.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Frequently asked questions
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      How fast can you start in Merton
                    </h3>
                    <p>
                      In most cases we can arrange the initial survey within 48 hours and then confirm the drawing programme based on the project scope.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Do you submit to Merton Council
                    </h3>
                    <p>
                      Yes. We can manage the submission and respond to planning officer queries. If you prefer to submit yourself, we provide validation ready files.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Can you coordinate structural design
                    </h3>
                    <p>
                      Yes. We coordinate with structural engineers so beams and load paths are correct and clearly shown on the drawings.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Can you do building regulations too
                    </h3>
                    <p>
                      Yes. We produce building regulation packs with key sections, details and notes so building control and contractors can build from one clear set.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Ready to start your Merton project
                  </h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short description. We review and reply with a fixed fee and recommended next steps.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 text-[13px]">
                  <a href={PHONE_LINK} className="font-semibold text-emerald-300 underline">
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    href="mailto:info@wedrawplans.com"
                    className="font-semibold text-emerald-300 underline"
                  >
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
