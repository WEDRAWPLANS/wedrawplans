import React from "react";
import Head from "next/head";
import Image from "next/image";
import AreaTopHeader from "../../components/AreaTopHeader";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";
import ProjectEnquiryForm from "../../components/ProjectEnquiryForm";

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
      img: "/images/services/extension.jpg",
    },
    {
      title: "Loft Conversion Plans",
      text:
        "Dormer, mansard and hip to gable loft designs with drawings suitable for planning and Building Control.",
      href: "/loft-conversion-plans",
      cta: "View Loft Plans",
      img: "/images/services/loft.jpg",
    },
    {
      title: "New Build Plans",
      text:
        "New build planning drawings with coordinated technical information for tendering and compliance.",
      href: "/new-build-plans",
      cta: "View New Build Plans",
      img: "/images/services/newbuild.jpg",
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

                    <a href="tel:+442036548508" className="text-[13px] underline text-slate-800">
                      Or call 020 3654 8508
                    </a>

                    <a
                      href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20London"
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

                        <div className="mt-4 flex flex-wrap gap-2">
                          {featuredBoroughs.map((b) => (
                            <a
                              key={b.href}
                              href={b.href}
                              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-slate-800 hover:bg-slate-900 hover:text-white"
                            >
                              {b.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="areas-quote" className="lg:pl-2">
                  <ProjectEnquiryForm borough="London and M25" sourcePath="/areas" />
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
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular drawing services
                  </h2>
                  <p className="mt-2 text-[13px] text-slate-700 max-w-2xl">
                    Choose a service to see full scope, deliverables and how we handle planning and Building Control.
                  </p>
                </div>
                <a
                  href="/"
                  className="rounded-full border border-slate-200 bg-[#f8f4f0] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-900 hover:bg-slate-900 hover:text-white"
                >
                  Back to homepage
                </a>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {popularServices.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="group rounded-2xl border border-slate-200 bg-[#fdf8f3] p-4 shadow-sm hover:bg-white transition"
                  >
                    <div className="relative h-28 w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="mt-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      {s.title}
                    </div>
                    <div className="mt-2 text-[13px] text-slate-700">{s.text}</div>
                    <div className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-red-700 group-hover:text-slate-900">
                      {s.cta} <span aria-hidden="true">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#fdf8f3] border-b border-slate-200 py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                Find your borough
              </h2>
              <p className="mt-2 text-[13px] text-slate-700 max-w-3xl">
                Select your borough for tailored guidance, typical constraints and a direct enquiry route for that area.
              </p>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                    Borough clusters
                  </div>
                  <div className="mt-4 space-y-4">
                    {clusters.map((c) => (
                      <div key={c.title} className="rounded-xl border border-slate-200 bg-[#f8f4f0] p-3">
                        <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                          {c.title}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {c.items.map((n) => (
                            <a
                              key={n}
                              href={toAreaHref(n)}
                              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-slate-800 hover:bg-slate-900 hover:text-white"
                            >
                              {n}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                    All London borough pages
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {boroughLinks.map((b) => (
                      <a
                        key={b.href}
                        href={b.href}
                        className="rounded-xl border border-slate-200 bg-[#fdf8f3] px-3 py-2 text-[12px] font-semibold text-slate-900 hover:bg-slate-900 hover:text-white"
                      >
                        {b.name}
                      </a>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-slate-200 bg-[#f8f4f0] p-3">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                      Need the fastest route to a quote
                    </div>
                    <div className="mt-2 text-[13px] text-slate-700">
                      Use the enquiry form above. We respond with a clear fixed fee and next steps once we see the
                      postcode and a short description.
                    </div>
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="mt-3 rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[12px] font-semibold uppercase tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Go to the quote form
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="rounded-3xl border border-slate-200 bg-[#fdf8f3] p-6 shadow-sm">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-10 items-center">
                  <div>
                    <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                      Ready to start
                    </div>
                    <h2 className="mt-2 text-[20px] sm:text-[22px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Get a fixed fee quote today
                    </h2>
                    <p className="mt-2 text-[13px] text-slate-700">
                      We provide a clear scope, transparent pricing and a direct route to drawings that are ready for
                      planning submission and Building Control.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href="tel:+442036548508"
                        className="rounded-full bg-slate-900 px-5 py-2.5 text-white text-[12px] font-semibold uppercase tracking-[0.2em] hover:bg-slate-800"
                      >
                        Call 020 3654 8508
                      </a>
                      <a
                        href="mailto:info@wedrawplans.com"
                        className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white"
                      >
                        Email us
                      </a>
                      <a
                        href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20London"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                      Typical next steps
                    </div>
                    <ul className="mt-3 space-y-2 text-[13px] text-slate-700">
                      <li>• Confirm scope and planning route</li>
                      <li>• Arrange initial survey within 48 hours in most cases</li>
                      <li>• Produce existing and proposed drawings</li>
                      <li>• Submit through Planning Portal and support queries</li>
                      <li>• Upgrade to Building Regulations pack when required</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
