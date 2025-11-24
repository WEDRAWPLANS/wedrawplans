import React from "react";
import Head from "next/head";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20to%20check%20if%20you%20cover%20my%20area";

export default function AreasIndex() {
  const topBoroughs = [
    { name: "Barnet", href: "/areas/barnet" },
    { name: "Bromley", href: "/areas/bromley" },
    { name: "Croydon", href: "/areas/croydon" },
    { name: "Ealing", href: "/areas/ealing" },
    { name: "Harrow", href: "/areas/harrow" },
  ];

  const otherBoroughs = [
    "Southwark",
    "Lewisham",
    "Greenwich",
    "Tower Hamlets",
    "Newham",
    "Lambeth",
    "Hackney",
    "Islington",
    "Camden",
    "Westminster",
    "Kensington and Chelsea",
    "Hammersmith and Fulham",
    "Wandsworth",
    "Hillingdon",
    "Hounslow",
    "Richmond upon Thames",
    "Kingston upon Thames",
    "Merton",
    "Sutton",
    "Bexley",
    "Havering",
    "Redbridge",
    "Barking and Dagenham",
    "Enfield",
    "Waltham Forest",
    "Brent",
  ];

  return (
    <>
      <Head>
        <title>Areas we cover across London | WEDRAWPLANS</title>
        <meta
          name="description"
          content="WEDRAWPLANS provides architectural drawings for extensions, loft conversions, new builds and building regulations across London and the M25 area. View the areas we cover."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        {/* header */}
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
            <div className="flex items-center gap-3">
              <a
                href="/"
                className="hidden text-[12px] font-medium text-slate-700 underline sm:inline"
              >
                Home
              </a>
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
          {/* hero */}
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl px-4 py-10 lg:px-6 lg:py-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                Areas we cover
              </p>
              <h1 className="mt-2 text-[24px] font-semibold uppercase leading-snug tracking-[0.16em] text-slate-900 sm:text-[28px]">
                Architectural drawings across London and the M25 area
              </h1>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                WEDRAWPLANS provides fixed fee architectural drawings for house extensions, loft conversions,
                new builds and building regulation packs across London and surrounding areas within reach
                of the M25. Below are some of the main boroughs we currently focus on, with more being
                added.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="/"
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Get my quote
                </a>
                <a
                  href={PHONE_LINK}
                  className="text-[13px] font-medium text-slate-800 underline"
                >
                  Or call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </section>

          {/* top boroughs */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Priority areas for extensions and loft conversions
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
  These boroughs currently generate a very high number of householder projects...
  WEDRAWPLANS focuses on these...
</p>

              <div className="mt-5 grid gap-3 text-[13px] sm:grid-cols-2 md:grid-cols-3">
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

          {/* other boroughs */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Other London boroughs covered
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                WEDRAWPLANS also assists clients in many other London boroughs. Additional dedicated pages
                for these areas will be added in stages.
              </p>
              <div className="mt-4 grid gap-2 text-[13px] sm:grid-cols-2 md:grid-cols-3">
                {otherBoroughs.map((name) => (
                  <div
                    key={name}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-800"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* final call to action */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Not sure if your area is covered
              </h2>
              <p className="mt-3 text-[13px] text-slate-700">
                If you are anywhere in London or within easy reach of the M25, WEDRAWPLANS can usually
                assist with drawings. Send a quick message and we will confirm coverage and fees.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <a
                  href="/"
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#4da4b4] focus:outline-none focus:ring-2 focus:ring-[#64b7c4]"
                >
                  Get my quote
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
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
