import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Kingston() {
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/kingston",
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
      "Kingston upon Thames",
      "Surbiton",
      "New Malden",
      "Chessington",
      "Norbiton",
      "Tolworth",
      "Berrylands"
    ],
    description:
      "Architectural drawing services in Kingston upon Thames for extensions, loft conversions, refurbishments, outbuildings and building regulation plans."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:
          "Do I need planning permission for a rear extension in Kingston upon Thames?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Kingston can be carried out under permitted development. We confirm the correct route once we review your address and house type."
        }
      },
      {
        "@type": "Question",
        name:
          "Is Kingston strict with loft conversions and large extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "River locations, conservation areas and character roads can be more sensitive. Good proportions, materials and clear drawings are important for a smooth application."
        }
      },
      {
        "@type": "Question",
        name: "How long does Kingston Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder applications usually take around six to eight weeks after validation. Lawful Development Certificates often take around four to six weeks."
        }
      },
      {
        "@type": "Question",
        name:
          "Do you manage the full application to Kingston Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Kingston Council and respond to planning officer queries."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings Kingston upon Thames | Extensions and Lofts | WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Kingston upon Thames, Surbiton, New Malden and surrounding areas for extensions, loft conversions, refurbishments, outbuildings and building regulation plans."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/kingston" />
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
      </Head>

      <main className="bg-slate-50">
        {/* HERO */}
        <section className="relative bg-emerald-900 text-white">
          <div className="absolute inset-0 opacity-15 mix-blend-soft-light">
            <Image
              src="/images/drawings.jpg"
              alt="Architectural drawings for Kingston extensions and lofts"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-16 space-y-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-100">
              WEDRAWPLANS • KINGSTON UPON THAMES
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Architectural Drawings in Kingston upon Thames
            </h1>

            <p className="max-w-3xl text-sm md:text-base text-emerald-50">
              Architectural drawing services in Kingston upon Thames, Surbiton, New
              Malden, Chessington, Norbiton and Tolworth. We prepare drawings for
              extensions, loft conversions, refurbishments and outbuildings, aligned
              with Kingston Council guidance and current Building Regulations.
            </p>

            <div className="grid md:grid-cols-[2fr,1.2fr] gap-8 items-start">
              <div className="space-y-3 text-sm">
                <div className="grid sm:grid-cols-2 gap-3">
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Measured survey within 48 hours</li>
                    <li>Planning and permitted development advice</li>
                    <li>Support with large family homes and plots</li>
                  </ul>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Drawings tailored to Kingston policies</li>
                    <li>Building regulation packages for 2025 standards</li>
                    <li>Fixed quotes with clear scope of work</li>
                  </ul>
                </div>

                <p className="mt-2 text-xs text-emerald-100">
                  Typical Kingston projects include generous rear and wrap extensions,
                  loft conversions, side extensions and garden studios for family
                  homes.
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
                Get your free Kingston quote
              </a>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-5xl px-6 py-14 space-y-14">
          {/* INTRO + DRAWINGS CARD */}
          <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Architectural drawing services in Kingston upon Thames
              </h2>
              <p className="text-sm md:text-base text-slate-700">
                WEDRAWPLANS prepares full drawing packages for rear and side extensions,
                wrap extensions, loft conversions, refurbishments and outbuildings
                across Kingston upon Thames and surrounding areas.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We work across Kingston, Surbiton, New Malden, Chessington, Norbiton
                and Tolworth, with drawings designed for terraced, semi detached and
                detached homes on generous plots.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <Image
                src="/images/drawings.jpg"
                alt="Example of architectural drawings for a Kingston project"
                width={800}
                height={500}
                className="object-cover w-full h-48 md:h-56"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">
                  Drawings for high value Kingston homes
                </h3>
                <p className="text-sm text-slate-700">
                  Detailed drawings that communicate quality, proportion and careful
                  design, which is important for Kingston homes near the river and
                  conservation areas.
                </p>
              </div>
            </div>
          </div>

          {/* AREAS + PROJECT TYPES */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Kingston areas we cover</h3>
              <Image
                src="/images/kingston-area.jpg"
                alt="Kingston upon Thames residential street"
                width={800}
                height={500}
                className="rounded-xl object-cover mb-3"
              />
              <p className="text-sm text-slate-700">
                Architectural drawings for Kingston upon Thames and nearby areas,
                including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Kingston upon Thames</li>
                  <li>Surbiton</li>
                  <li>Berrylands</li>
                  <li>Norbiton</li>
                  <li>New Malden</li>
                  <li>Old Malden</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Tolworth</li>
                  <li>Chessington</li>
                  <li>Kingston Vale</li>
                  <li>North Kingston</li>
                  <li>River and park side locations</li>
                  <li>Local estates and cul de sacs</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">
                Popular projects in Kingston upon Thames
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Large rear kitchen extensions</li>
                  <li>Wrap and L shaped extensions</li>
                  <li>Side extensions and garages reworked</li>
                  <li>Loft conversions and dormers</li>
                  <li>Hip to gable loft conversions</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Garden studios and offices</li>
                  <li>Internal reconfiguration for family living</li>
                  <li>High quality refurbishments</li>
                  <li>Better links between house and garden</li>
                  <li>Energy and insulation upgrades</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PLANNING / PD */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Planning and permitted development in Kingston upon Thames
            </h2>
            <p className="text-sm text-slate-700">
              Many Kingston homes have generous extension potential, but conservation
              areas, river settings and key character roads can need more careful
              design and often a full planning application. Flats and maisonettes do
              not benefit from permitted development rights. We confirm the best route
              for each address at the start.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold mb-2">Rear extensions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Standard depths around 3 to 4 metres under PD</li>
                  <li>Larger schemes can use the Prior Approval route</li>
                  <li>Daylight and neighbour impact are assessed carefully</li>
                  <li>We review nearby approvals for guidance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Loft conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Volume limits usually 40 to 50 cubic metres</li>
                  <li>Front roof changes are rarely accepted</li>
                  <li>Dormer design guided by roof form and street setting</li>
                  <li>Side windows generally obscure and high level</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  High quality refurbishments
                </h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Improved layouts and circulation</li>
                  <li>Better connection between kitchen and garden</li>
                  <li>Comfort, light and storage upgrades</li>
                  <li>Integration of structural alterations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PACKS */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Planning drawings for Kingston upon Thames
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Existing and proposed floor plans</li>
                <li>Existing and proposed elevations</li>
                <li>Sections through key spaces</li>
                <li>Roof layouts and dormer details</li>
                <li>Block plans and location plans</li>
                <li>Design and access or heritage statements where needed</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Building regulation drawings for Kingston upon Thames
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Structural layouts and engineer coordination</li>
                <li>Fire escape routes and protection details</li>
                <li>Thermal build ups and insulation specification</li>
                <li>Acoustic performance between rooms and homes</li>
                <li>Ventilation, extracts and comfort</li>
                <li>Drainage and construction notes for contractors</li>
              </ul>
            </div>
          </div>

          {/* LOCAL KNOWLEDGE */}
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-emerald-900">
              Local planning knowledge for Kingston projects
            </h2>
            <p className="text-sm text-emerald-900">
              Kingston includes river front homes, leafy suburban streets and conservation areas. We design schemes that respect these settings while delivering more usable space, light and value for the household.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you help with large extensions in Kingston?
                </h3>
                <p>
                  Yes. We regularly prepare drawings for generous rear and wrap
                  extensions to semi detached and detached homes, including both
                  planning and building regulation stages.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  How fast can you survey a property in Kingston?
                </h3>
                <p>
                  In most cases we can arrange the measured survey within forty eight
                  hours of instruction, subject to access.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do you manage the planning submission to Kingston Council?
                </h3>
                <p>
                  Yes. We manage the full application, upload documents and respond to
                  planner comments through to decision.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you coordinate structural calculations?
                </h3>
                <p>
                  We work with structural engineers so that beams, supports and load
                  bearing elements are clearly designed and shown on the plans.
                </p>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Ready to start your Kingston project
              </h2>
              <p className="text-sm text-slate-300">
                Send us your address and a short description of the extension, loft,
                refurbishment or garden studio you have in mind. We will review it and
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
                Get your free Kingston quote
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
              <a
                href="/loft-conversion-plans"
                className="underline text-emerald-700"
              >
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
