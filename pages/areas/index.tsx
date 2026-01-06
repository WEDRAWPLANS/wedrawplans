import React from "react";
import Head from "next/head";
import AreaTopHeader from "../../components/AreaTopHeader";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20to%20check%20if%20you%20cover%20my%20area";

type LinkItem = { name: string; href: string };

function slugifyToAreasPath(name: string) {
  return `/areas/${name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\./g, "")
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()}`;
}

export default function AreasIndex() {
  const topBoroughs: LinkItem[] = [
    { name: "Barnet", href: "/areas/barnet" },
    { name: "Harrow", href: "/areas/harrow" },
    { name: "Croydon", href: "/areas/croydon" },
    { name: "Ealing", href: "/areas/ealing" },
    { name: "Bromley", href: "/areas/bromley" },
    { name: "Enfield", href: "/areas/enfield" },
    { name: "Redbridge", href: "/areas/redbridge" },
    { name: "Hillingdon", href: "/areas/hillingdon" },
  ];

  const londonBoroughNames = [
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

  const londonBoroughs: LinkItem[] = londonBoroughNames.map((name) => ({
    name,
    href: slugifyToAreasPath(name),
  }));

  const surroundingAreas: LinkItem[] = [
    { name: "Hertfordshire", href: "/areas/hertfordshire" },
    { name: "Essex", href: "/areas/essex" },
    { name: "Surrey", href: "/areas/surrey" },
    { name: "Kent", href: "/areas/kent" },
    { name: "Buckinghamshire", href: "/areas/buckinghamshire" },
  ];

  return (
    <>
      <Head>
        <title>Architectural Drawings Across London and the M25 | WEDRAWPLANS</title>
        <meta
          name="description"
          content="WEDRAWPLANS provides architectural drawings, planning drawings and building regulation packages across every London borough and surrounding M25 locations. Select your borough to get started."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        <AreaTopHeader />

        <main>
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl px-4 py-10 lg:px-6 lg:py-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                London coverage
              </p>
              <h1 className="mt-2 text-[24px] font-semibold uppercase leading-snug tracking-[0.16em] text-slate-900 sm:text-[28px]">
                Architectural drawings across London and the M25
              </h1>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                WEDRAWPLANS prepares planning drawings and building regulation drawing packages for house extensions,
                loft conversions, refurbishments, flat conversions and small new builds across every London borough and
                surrounding M25 locations. Use this page to find your borough and access tailored information and a
                direct enquiry route for your project.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="/"
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Get your quote
                </a>
                <a href={PHONE_LINK} className="text-[13px] font-medium text-slate-800 underline">
                  Or call {PHONE_DISPLAY}
                </a>
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

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Planning drawings
                  </div>
                  <div className="mt-1 text-[13px] text-slate-700">
                    Extensions, lofts, lawful development, changes and submissions aligned to local validation.
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Building regulations
                  </div>
                  <div className="mt-1 text-[13px] text-slate-700">
                    Clear technical drawing packs ready for Building Control, tendering and construction.
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    London wide coverage
                  </div>
                  <div className="mt-1 text-[13px] text-slate-700">
                    We support projects across all boroughs plus key commuter locations within reach of the M25.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Priority boroughs
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                These locations consistently generate a high volume of householder projects and fast-moving
                instructions. Select a borough below to view the dedicated page and start your enquiry.
              </p>

              <div className="mt-5 grid gap-3 text-[13px] sm:grid-cols-2 md:grid-cols-4">
                {topBoroughs.map((b) => (
                  <a
                    key={b.name}
                    href={b.href}
                    className="rounded-xl border border-slate-200 bg-[#f8f4f0] px-3 py-3 text-[13px] font-medium text-slate-900 shadow-sm hover:border-[#64b7c4] hover:bg-white"
                  >
                    {b.name}
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                All London boroughs
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Select your borough to view tailored architectural drawing information. Borough pages are designed to
                strengthen local relevance, make navigation simple and keep internal linking consistent across the site.
              </p>

              <div className="mt-4 grid gap-2 text-[13px] sm:grid-cols-2 md:grid-cols-3">
                {londonBoroughs.map((b) => (
                  <a
                    key={b.name}
                    href={b.href}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm hover:border-[#64b7c4] hover:bg-white"
                  >
                    {b.name}
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Surrounding M25 locations
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                We also support projects just outside London where planning demand is high and clients want
                London-level speed and experience. Select a county page below if your property is outside Greater
                London.
              </p>

              <div className="mt-5 grid gap-3 text-[13px] sm:grid-cols-2 md:grid-cols-3">
                {surroundingAreas.map((a) => (
                  <a
                    key={a.name}
                    href={a.href}
                    className="rounded-xl border border-slate-200 bg-[#f8f4f0] px-3 py-3 text-[13px] font-medium text-slate-900 shadow-sm hover:border-[#64b7c4] hover:bg-white"
                  >
                    {a.name}
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#fdf8f3] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Why borough-specific experience matters
              </h2>

              <div className="mt-3 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                    Planning requirements vary
                  </div>
                  <p className="mt-2 text-[13px] text-slate-700">
                    London planning is not uniform. Validation checklists, conservation constraints, neighbour impact
                    standards and policy interpretation differ borough to borough. Dedicated borough pages help you
                    start with the right approach for your local council.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                    Consistent technical quality
                  </div>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Our drawing packs follow a consistent standard across London while adapting to site conditions and
                    local constraints. This supports smoother submissions, clearer decision-making and stronger
                    outcomes for homeowners and small developers.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                  Services provided across London and the M25
                </div>
                <div className="mt-3 grid gap-2 text-[13px] text-slate-700 sm:grid-cols-2 md:grid-cols-3">
                  <div className="rounded-lg border border-slate-200 bg-[#f8f4f0] px-3 py-2">
                    House extension planning drawings
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-[#f8f4f0] px-3 py-2">
                    Loft conversion drawings
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-[#f8f4f0] px-3 py-2">
                    Lawful development certificate drawings
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-[#f8f4f0] px-3 py-2">
                    Flat conversion and refurbishment layouts
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-[#f8f4f0] px-3 py-2">
                    Building regulation drawing packages
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-[#f8f4f0] px-3 py-2">
                    Measured surveys and as-built drawings
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Start your project
              </h2>
              <p className="mt-3 text-[13px] text-slate-700">
                If you are in London or within easy reach of the M25, we can usually assist with drawings quickly. If
                you are unsure which borough applies, send a message and we will confirm coverage.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <a
                  href="/"
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Get your quote
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  <span>💬</span>
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  <span>📞</span>
                  <span>Call {PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
