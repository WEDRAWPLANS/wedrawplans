import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Wandsworth() {
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/wandsworth",
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
      "Wandsworth",
      "Wandsworth Town",
      "Earlsfield",
      "Southfields",
      "Putney borders",
      "Balham",
      "Tooting",
      "Furzedown",
      "Clapham Junction",
      "Battersea (Wandsworth side)",
      "Nine Elms borders"
    ],
    description:
      "Architectural drawing services in Wandsworth for extensions, loft conversions, refurbishments, outbuildings and building regulation plans."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Wandsworth?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Wandsworth can be carried out under permitted development. We confirm the correct route once we review your address and house type."
        }
      },
      {
        "@type": "Question",
        name: "Is Wandsworth strict with loft conversions and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Wandsworth can be strict in conservation areas and where streets have consistent rear building lines, especially around Balham, Wandsworth Town and Putney borders."
        }
      },
      {
        "@type": "Question",
        name: "How long does Wandsworth Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Wandsworth Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Wandsworth Council and respond to planning officer queries."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings Wandsworth | Extensions, Lofts, Conversions | WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Wandsworth for extensions, loft conversions, refurbishments, outbuildings and building regulation plans. Fast surveys, clear drawings and full planning support with Wandsworth Council."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/wandsworth" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <main className="bg-slate-50">
        {/* HERO */}
        <section className="relative bg-emerald-900 text-white">
          <div className="absolute inset-0 opacity-15 mix-blend-soft-light">
            <Image
              src="/images/drawings.jpg"
              alt="Architectural drawings for Wandsworth extensions and lofts"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-16 space-y-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-100">
              WEDRAWPLANS • WANDSWORTH
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Architectural Drawings in Wandsworth
            </h1>

            <p className="max-w-3xl text-sm md:text-base text-emerald-50">
              Architectural drawing services in Wandsworth for house extensions, loft
              conversions, refurbishments, outbuildings and small new build homes. All
              drawings are prepared to Wandsworth Council guidance and current Building
              Regulations.
            </p>

            <div className="grid md:grid-cols-[2fr,1.2fr] gap-8 items-start">
              <div className="space-y-3 text-sm">
                <div className="grid sm:grid-cols-2 gap-3">
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Measured survey within 48 hours</li>
                    <li>Planning and permitted development advice</li>
                    <li>Support with extensions and lofts</li>
                  </ul>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Drawings tailored to Wandsworth policies</li>
                    <li>Building regulation packages for 2025 standards</li>
                    <li>Fixed quotes with clear scope of work</li>
                  </ul>
                </div>

                <p className="mt-2 text-xs text-emerald-100">
                  Typical Wandsworth projects include large rear and wrap extensions in
                  Earlsfield and Balham, loft conversions in Tooting and Furzedown, and
                  refurbishments and internal alterations around Wandsworth Town and
                  Clapham Junction.
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
                Get your free Wandsworth quote
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
                Architectural drawing services in Wandsworth
              </h2>
              <p className="text-sm md:text-base text-slate-700">
                WEDRAWPLANS prepares full drawing packages for rear and side extensions,
                loft conversions, refurbishments, internal reconfiguration and
                outbuildings across the borough of Wandsworth.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We work throughout Wandsworth Town, Earlsfield, Southfields, Balham,
                Tooting, Furzedown, Clapham Junction, Battersea (Wandsworth side) and
                Putney borders.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <Image
                src="/images/drawings.jpg"
                alt="Example of architectural drawings for a Wandsworth project"
                width={800}
                height={500}
                className="object-cover w-full h-48 md:h-56"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">
                  Clear drawings for high value South West London homes
                </h3>
                <p className="text-sm text-slate-700">
                  Detailed plans, elevations and sections coordinated with structural
                  design, tailored to Victorian and Edwardian terraces, semis and
                  larger detached homes common in Wandsworth.
                </p>
              </div>
            </div>
          </div>

          {/* AREAS COVERED + PROJECT TYPES */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Wandsworth areas we cover</h3>
              <Image
                src="/images/wandsworth-area.jpg"
                alt="Wandsworth local high street and residential area"
                width={800}
                height={500}
                className="rounded-xl object-cover mb-3"
              />
              <p className="text-sm text-slate-700">
                Architectural drawings for the whole borough of Wandsworth, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Wandsworth Town</li>
                  <li>Earlsfield</li>
                  <li>Southfields</li>
                  <li>Balham</li>
                  <li>Tooting and Furzedown</li>
                  <li>Clapham Junction</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Battersea (Wandsworth side)</li>
                  <li>Putney borders</li>
                  <li>Nine Elms fringe</li>
                  <li>Local estates and streets</li>
                  <li>Backland and corner plots</li>
                  <li>River side and park side streets</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Popular projects in Wandsworth</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Large rear and wrap extensions</li>
                  <li>Side return and side extensions</li>
                  <li>Loft conversions and dormers</li>
                  <li>Hip to gable loft conversions</li>
                  <li>Internal reconfiguration and knock throughs</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Basement and lower ground alterations</li>
                  <li>Garden rooms and studios</li>
                  <li>Garage conversions</li>
                  <li>High spec refurbishments</li>
                  <li>Small infill and mews schemes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PLANNING / PD */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Planning and permitted development in Wandsworth
            </h2>
            <p className="text-sm text-slate-700">
              Many houses in Wandsworth benefit from permitted development rights, but
              conservation areas and design guidelines can influence what is possible.
              We confirm the correct route for your property at the start.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold mb-2">Rear extensions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Typical PD limits of 3 to 4 m deep</li>
                  <li>Deeper schemes assessed case by case</li>
                  <li>Height and massing checked against neighbours</li>
                  <li>We analyse local precedents before design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Loft conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Volume limits around 40 to 50 cubic metres</li>
                  <li>Front roof changes tightly controlled</li>
                  <li>Dormer proportions guided by local style</li>
                  <li>Roof terraces often need strong justification</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Refurbishment and upgrades</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Improved layouts for family living</li>
                  <li>Better light, storage and circulation</li>
                  <li>Energy and insulation upgrades</li>
                  <li>Integration of structural alterations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PLANNING & BUILDING REGS PACKS */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Planning drawings for Wandsworth
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Existing and proposed floor plans</li>
                <li>Existing and proposed elevations</li>
                <li>Sections through key areas</li>
                <li>Roof and terrace layouts</li>
                <li>Block plans and location plans</li>
                <li>Design statements where required</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Building regulation drawings for Wandsworth
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Structural layouts and engineer coordination</li>
                <li>Fire strategy and escape routes</li>
                <li>Thermal build ups and insulation specs</li>
                <li>Acoustic performance between rooms and homes</li>
                <li>Ventilation, extracts and comfort</li>
                <li>Drainage and technical notes for contractors</li>
              </ul>
            </div>
          </div>

          {/* LOCAL KNOWLEDGE */}
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-emerald-900">
              Local planning knowledge for Wandsworth projects
            </h2>
            <p className="text-sm text-emerald-900">
              Wandsworth contains many high value terraces and semis where quality of
              design, neighbour impact and detailing are closely reviewed. We design
              schemes that respect local character while delivering the extra space
              and light that clients need.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you help with high specification refurbishments?
                </h3>
                <p>
                  Yes. We regularly prepare detailed plans and technical information
                  for refurbishments in Wandsworth, Balham and Clapham Junction aimed
                  at high end finishes.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  How fast can you survey a property in Wandsworth?
                </h3>
                <p>
                  In most cases we can arrange the measured survey within forty eight
                  hours of instruction, subject to access.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do you manage the planning submission to Wandsworth Council?
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
                  We work with structural engineers so that all beams, supports and
                  load bearing elements are clearly designed and shown on the plans.
                </p>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Ready to start your Wandsworth project
              </h2>
              <p className="text-sm text-slate-300">
                Send us your address and a short description of the extension, loft,
                refurbishment or new layout you have in mind. We will review it and
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
                Get your free Wandsworth quote
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
