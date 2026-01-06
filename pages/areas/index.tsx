import React from "react";
import Head from "next/head";
import Image from "next/image";
import AreaTopHeader from "../../components/AreaTopHeader";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20London";

type LinkItem = { name: string; href: string };

function toAreaHref(name: string) {
  return `/areas/${name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/,/g, "")
    .replace(/\./g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()}`;
}

export default function AreasIndexPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "London and M25" });
  }

  function scrollToForm() {
    const el = document.getElementById("areas-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const boroughNames = [
    "Barking and Dagenham",
    "Barnet",
    "Bexley",
    "Brent",
    "Bromley",
    "Camden",
    "City of London",
    "Croydon",
    "Ealing",
    "Enfield",
    "Greenwich",
    "Hackney",
    "Hammersmith and Fulham",
    "Haringey",
    "Harrow",
    "Havering",
    "Hillingdon",
    "Hounslow",
    "Islington",
    "Kensington and Chelsea",
    "Kingston upon Thames",
    "Lambeth",
    "Lewisham",
    "Merton",
    "Newham",
    "Redbridge",
    "Richmond upon Thames",
    "Southwark",
    "Sutton",
    "Tower Hamlets",
    "Waltham Forest",
    "Wandsworth",
    "Westminster",
  ];

  const boroughLinks: LinkItem[] = boroughNames.map((n) => ({
    name: n,
    href: toAreaHref(n),
  }));

  const popularServices = [
    {
      title: "Extension Plans",
      text:
        "Planning drawings and Building Regulations packages for single storey, double storey and wrap around extensions.",
      href: "/extension-plans",
      cta: "View Extension Plans",
    },
    {
      title: "Loft Conversion Plans",
      text:
        "Dormer, mansard and hip to gable loft designs with drawings suitable for planning and Building Control.",
      href: "/loft-conversion-plans",
      cta: "View Loft Plans",
    },
    {
      title: "New Build Plans",
      text:
        "New build planning drawings with coordinated technical information for tendering and compliance.",
      href: "/new-build-plans",
      cta: "View New Build Plans",
    },
  ];

  const featuredBoroughs: LinkItem[] = [
    { name: "Barnet", href: "/areas/barnet" },
    { name: "Harrow", href: "/areas/harrow" },
    { name: "Croydon", href: "/areas/croydon" },
    { name: "Ealing", href: "/areas/ealing" },
    { name: "Bromley", href: "/areas/bromley" },
    { name: "Enfield", href: "/areas/enfield" },
    { name: "Redbridge", href: "/areas/redbridge" },
    { name: "Havering", href: "/areas/havering" },
  ];

  const clusters: { title: string; items: string[] }[] = [
    {
      title: "North London boroughs",
      items: ["Barnet", "Enfield", "Haringey", "Camden", "Islington"],
    },
    {
      title: "West London boroughs",
      items: [
        "Harrow",
        "Brent",
        "Ealing",
        "Hillingdon",
        "Hounslow",
        "Hammersmith and Fulham",
        "Kensington and Chelsea",
        "Westminster",
      ],
    },
    {
      title: "East London boroughs",
      items: [
        "Redbridge",
        "Havering",
        "Newham",
        "Barking and Dagenham",
        "Tower Hamlets",
        "Waltham Forest",
        "Hackney",
      ],
    },
    {
      title: "South London boroughs",
      items: [
        "Croydon",
        "Bromley",
        "Lewisham",
        "Greenwich",
        "Southwark",
        "Lambeth",
        "Wandsworth",
        "Merton",
        "Kingston upon Thames",
        "Sutton",
        "Bexley",
        "Richmond upon Thames",
      ],
    },
    {
      title: "Central London",
      items: ["City of London", "Westminster", "Camden", "Islington", "Kensington and Chelsea"],
    },
  ];

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/hero.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK",
    },
    areaServed: ["London", "Greater London", "M25 area", ...boroughNames],
    description:
      "Architectural drawings across London and the M25 for extensions, loft conversions, new builds, refurbishments and building regulation packages.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for an extension in London",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many extensions and lofts can proceed under permitted development. We confirm the correct route once we review your address, house type and any local constraints.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can you arrange an initial measured survey",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "In most cases we can arrange the initial measured survey within 48 hours of instruction, subject to access and location.",
        },
      },
      {
        "@type": "Question",
        name: "Do you submit to the local council",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We can prepare drawings, complete forms, upload documents and submit through the Planning Portal, then support planning officer queries until a decision is issued.",
        },
      },
      {
        "@type": "Question",
        name: "Can you coordinate structural engineering",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We coordinate with structural engineers so beams, load paths and supporting details are correctly designed and reflected within the drawing package.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings Across London and the M25 | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings across every London borough and the surrounding M25 area. Explore borough pages, popular services, planning guidance and request a fixed fee quote."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas" />
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
        <AreaTopHeader />

        <main>
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6 lg:py-10">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                    London coverage hub
                  </p>

                  <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                    Architectural drawings across London and the M25
                  </h1>

                  <p className="mt-3 text-[13px] text-slate-700">
                    WEDRAWPLANS prepare planning drawings and Building Regulations drawing packages across every London
                    borough and key surrounding locations. Use this page to find your borough, explore our services and
                    request a fixed fee quote for your drawings.
                  </p>

                  <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                    <li>• House extensions, loft conversions and internal remodelling</li>
                    <li>• New build houses and small residential schemes</li>
                    <li>• Flat conversions and refurbishment drawing packages</li>
                    <li>• Planning drawings plus Building Regulations packs</li>
                    <li>• Clear scope, fast communication and fixed fees</li>
                    <li>• Initial survey within 48 hours in most cases</li>
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

                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
                    >
                      💬 Chat on WhatsApp
                    </a>
                  </div>

                  <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-[#f8f4f0] text-[12px] font-semibold text-slate-900">
                        LD
                      </div>
                      <div>
                        <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                          London borough coverage map
                        </div>
                        <div className="mt-2 text-[13px] text-slate-700">
                          This hub links to every borough page. Each borough page includes tailored guidance and a
                          direct enquiry route for that location.
                        </div>

                        <div className="mt-3 rounded-xl border border-slate-200 bg-[#fdf8f3] p-3">
                          <svg
                            viewBox="0 0 900 320"
                            className="h-36 w-full"
                            role="img"
                            aria-label="Stylised London coverage map"
                          >
                            <defs>
                              <linearGradient id="g" x1="0" x2="1">
                                <stop offset="0" stopColor="#64b7c4" />
                                <stop offset="1" stopColor="#c4b464" />
                              </linearGradient>
                            </defs>
                            <rect x="20" y="25" width="860" height="270" rx="28" fill="#ffffff" stroke="#e2e8f0" />
                            <path
                              d="M140 190 C210 70, 340 60, 420 120 C520 200, 640 60, 760 150 C710 250, 540 270, 420 250 C290 225, 210 260, 140 190 Z"
                              fill="url(#g)"
                              opacity="0.22"
                            />
                            <path
                              d="M160 190 C230 85, 340 80, 420 130 C520 210, 630 85, 740 150"
                              fill="none"
                              stroke="#0f172a"
                              strokeOpacity="0.35"
                              strokeWidth="6"
                              strokeLinecap="round"
                            />
                            {[
                              { x: 210, y: 160 },
                              { x: 290, y: 140 },
                              { x: 365, y: 175 },
                              { x: 445, y: 155 },
                              { x: 520, y: 200 },
                              { x: 610, y: 150 },
                              { x: 690, y: 180 },
                            ].map((p, i) => (
                              <g key={i}>
                                <circle cx={p.x} cy={p.y} r="10" fill="#64b7c4" opacity="0.95" />
                                <circle cx={p.x} cy={p.y} r="18" fill="#64b7c4" opacity="0.14" />
                              </g>
                            ))}
                            <text x="56" y="82" fontSize="20" fill="#0f172a" opacity="0.7">
                              Greater London
                            </text>
                            <text x="56" y="110" fontSize="14" fill="#334155" opacity="0.7">
                              Borough pages linked below
                            </text>
                          </svg>

                          <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-slate-500">
                            Map is stylised for display
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="areas-quote" className="lg:pl-2">
                  <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-100">
                    <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                      Free fixed fee quote
                    </h2>

                    <p className="mt-1 text-[12px] text-slate-600">
                      Tell us your postcode and a short description. We reply with a clear fixed fee and next steps.
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
                        <label className="text-[11px] font-medium">Postcode</label>
                        <input
                          name="postcode"
                          required
                          placeholder="SW1A 1AA"
                          onFocus={(e) => (e.target.placeholder = "")}
                          onBlur={(e) => !e.target.value && (e.target.placeholder = "SW1A 1AA")}
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
                        <label className="text-[11px] font-medium">Brief description of your project</label>
                        <textarea
                          name="projectDetails"
                          rows={4}
                          placeholder="For example: rear extension and loft conversion with open plan kitchen"
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
                        We cover all London boroughs and key M25 locations. Include your borough name if helpful.
                      </p>
                    </form>
                  </div>

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                      Fast start checklist
                    </div>
                    <ul className="mt-2 space-y-1 text-[13px] text-slate-700">
                      <li>• Share postcode and a short description</li>
                      <li>• Add photos if available</li>
                      <li>• Confirm if you want planning only or Building Regulations as well</li>
                      <li>• We reply with fixed fee and clear next steps</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="London" />

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Popular services across London
              </h2>
              <p className="mt-3 max-w-4xl text-[13px] text-slate-700">
                We provide full design and planning support for extensions, loft conversions and new build developments.
                Each service page explains scope, typical approvals and how to get a fixed fee quote.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {popularServices.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-2xl border border-slate-200 bg-[#f8f4f0] p-5 shadow-sm"
                  >
                    <div className="text-[14px] font-semibold text-slate-900">{s.title}</div>
                    <div className="mt-2 text-[13px] text-slate-700">{s.text}</div>
                    <a
                      href={s.href}
                      className="mt-4 inline-block text-[13px] font-medium text-blue-700 underline underline-offset-4 hover:text-blue-800"
                    >
                      {s.cta}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#f8f4f0] border-b border-slate-200 py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Featured borough pages
              </h2>
              <p className="mt-3 max-w-4xl text-[13px] text-slate-700">
                Start with a featured borough page below or scroll down for the full borough directory. Each borough
                page includes local guidance, typical project types and the same fixed fee quote form.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                <div className="rounded-2xl bg-slate-900 text-white p-5 shadow-sm">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-slate-300">Current</div>
                  <div className="mt-2 text-[16px] font-semibold">London</div>
                  <div className="mt-2 text-[13px] text-slate-300">You are here</div>
                </div>

                {featuredBoroughs.map((b) => (
                  <div key={b.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-[14px] font-semibold text-slate-900">{b.name}</div>
                    <a
                      href={b.href}
                      className="mt-3 inline-block text-[13px] font-medium text-blue-700 underline underline-offset-4 hover:text-blue-800"
                    >
                      View {b.name} page
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Full London borough directory
              </h2>
              <p className="mt-3 max-w-4xl text-[13px] text-slate-700">
                Every borough below is clickable. Select your borough to view the dedicated local page for drawings,
                planning support and Building Regulations packages.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {boroughLinks.map((b) => (
                  <a
                    key={b.name}
                    href={b.href}
                    className="rounded-xl border border-slate-200 bg-[#fdf8f3] px-4 py-3 text-[13px] font-medium text-slate-900 shadow-sm hover:border-[#64b7c4] hover:bg-white"
                  >
                    {b.name}
                  </a>
                ))}
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {clusters.map((c) => (
                  <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                      {c.title}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {c.items.map((n) => (
                        <a
                          key={n}
                          href={toAreaHref(n)}
                          className="rounded-full border border-slate-200 bg-[#f8f4f0] px-3 py-1.5 text-[12px] font-medium text-slate-900 hover:border-[#64b7c4] hover:bg-white"
                        >
                          {n}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="grid md:grid-cols-[1.55fr,1.45fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    What a London ready drawing package includes
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    Our drawing packages are designed to support smooth submissions and clear pricing. We structure
                    drawings so homeowners, builders and Building Control have what they need for the next step.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 text-[13px] text-slate-700">
                    <div className="rounded-2xl border border-slate-200 bg-[#f8f4f0] p-5">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                        Planning drawings
                      </div>
                      <ul className="mt-2 list-disc pl-4 space-y-1">
                        <li>Existing and proposed plans</li>
                        <li>Existing and proposed elevations</li>
                        <li>Key sections and roof plans</li>
                        <li>Location plan and block plan</li>
                        <li>Submission ready document set</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-[#f8f4f0] p-5">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                        Building Regulations pack
                      </div>
                      <ul className="mt-2 list-disc pl-4 space-y-1">
                        <li>Construction build ups and notes</li>
                        <li>Fire safety and escape strategy</li>
                        <li>Thermal and ventilation coordination</li>
                        <li>Structural coordination with engineer</li>
                        <li>Tender friendly technical drawings</li>
                      </ul>
                    </div>
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
                    alt="Example of architectural drawings suitable for London planning and Building Regulations"
                    width={900}
                    height={560}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Clear drawings builders can price from
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Plans, elevations, sections and notes structured for practical use, with a scope that stays clear
                      from day one.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-emerald-900">
                  Local planning knowledge for London projects
                </h2>
                <p className="text-[13px] text-emerald-900">
                  London includes conservation areas, listed buildings, Article 4 zones and strict design guidance in
                  many locations. We shape each scheme to suit local policy, street context and neighbour impact so
                  approval chances are as strong as possible.
                </p>
                <p className="text-[13px] text-emerald-900">
                  Borough pages below provide tailored guidance for that council area, including common constraints,
                  typical drawings needed and a direct enquiry route.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Frequently asked questions
              </h2>

              <div className="mt-5 grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                  <h3 className="font-semibold text-slate-900">Do I need planning permission in London</h3>
                  <p>
                    Many extensions and lofts can proceed under permitted development, but constraints vary by borough.
                    We review your address and confirm the correct route at the start.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                  <h3 className="font-semibold text-slate-900">How fast can you survey</h3>
                  <p>
                    In most cases we can arrange the initial measured survey within 48 hours of instruction, subject to
                    access and location.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                  <h3 className="font-semibold text-slate-900">Do you submit to the local council</h3>
                  <p>
                    Yes. We handle submission through the Planning Portal and respond to planning officer queries, with
                    clear updates through the process.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                  <h3 className="font-semibold text-slate-900">Can you coordinate structural design</h3>
                  <p>
                    Yes. We coordinate with structural engineers so beams, load paths and supporting details are shown
                    correctly on the drawings.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                  <h3 className="font-semibold text-slate-900">What do you need from me to start</h3>
                  <p>
                    A postcode, a short description and any photos help us start quickly. If you have old drawings or an
                    agent brochure, that can help as well.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                  <h3 className="font-semibold text-slate-900">Do you cover my location</h3>
                  <p>
                    If your property is in any London borough or within easy reach of the M25, we can usually assist.
                    Send your postcode and we confirm coverage.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Ready to start your project
                  </h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short description. We review and reply with a fixed fee and recommended
                    next steps.
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

              <div className="text-[12px] text-slate-600 pt-6">
                See also{" "}
                <a
                  href="/extension-plans"
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
                  extension plans
                </a>
                ,{" "}
                <a
                  href="/loft-conversion-plans"
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
                  loft conversion plans
                </a>{" "}
                and{" "}
                <a
                  href="/new-build-plans"
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
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
