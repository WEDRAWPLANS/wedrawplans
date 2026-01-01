import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Islington() {
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/islington",
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
      "Islington",
      "Angel",
      "Upper Street",
      "Highbury",
      "Highbury Fields",
      "Canonbury",
      "Barnsbury",
      "Holloway",
      "Archway",
      "Finsbury Park (Islington side)",
      "Tufnell Park borders",
      "Old Street and City Road area",
    ],
    description:
      "Architectural drawing services in Islington for extensions, loft conversions, flat conversions, refurbishments and building regulations.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Islington?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Islington can be carried out under permitted development. We confirm the correct route once we review your address and house type.",
        },
      },
      {
        "@type": "Question",
        name: "Is Islington strict with loft conversions and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Islington can be strict, especially in conservation areas and streets with strong character and consistent rear building lines. Well presented drawings and planning arguments are important.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Islington Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Islington Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare all drawings, complete the forms, upload documents, submit to Islington Council and respond to planning officer queries.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings Islington | Extensions, Lofts, Conversions |
          WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Islington for extensions, loft conversions, flat conversions, outbuildings and building regulation plans. Fast surveys, clear drawings and full planning support with Islington Council."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/islington" />
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
              alt="Architectural drawings for Islington extensions and lofts"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-16 space-y-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-100">
              WEDRAWPLANS • ISLINGTON
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Architectural Drawings in Islington
            </h1>

            <p className="max-w-3xl text-sm md:text-base text-emerald-50">
              Architectural drawing services in Islington for house extensions,
              loft conversions, flat conversions, outbuildings and small new
              build homes. All drawings are prepared to Islington Council
              guidance and current Building Regulations.
            </p>

            <div className="grid md:grid-cols-[2fr,1.2fr] gap-8 items-start">
              <div className="space-y-3 text-sm">
                <div className="grid sm:grid-cols-2 gap-3">
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Measured survey within 48 hours</li>
                    <li>Planning and permitted development advice</li>
                    <li>Flat and maisonette planning strategy</li>
                  </ul>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Drawings tailored to Islington policies</li>
                    <li>Building regulation packages for 2025 standards</li>
                    <li>Fixed quotes with clear scope of work</li>
                  </ul>
                </div>

                <p className="mt-2 text-xs text-emerald-100">
                  Typical Islington projects include rear and side extensions to
                  terraces in Highbury, Canonbury and Barnsbury, loft conversions
                  and roof alterations in Holloway and Archway, and flat
                  conversions and refurbishments around Angel and Upper Street.
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
                Get your free quote
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
                Architectural drawing services in Islington
              </h2>
              <p className="text-sm md:text-base text-slate-700">
                WEDRAWPLANS prepares full drawing packages for rear and side
                extensions, loft conversions, internal reconfiguration, flat
                conversions, roof terraces and small infill developments across
                the borough of Islington.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We work throughout Angel, Upper Street, Highbury, Highbury
                Fields, Canonbury, Barnsbury, Holloway, Archway, Finsbury Park
                (Islington side), and the Old Street and City Road area.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <Image
                src="/images/drawings.jpg"
                alt="Example of architectural drawings for an Islington project"
                width={800}
                height={500}
                className="object-cover w-full h-48 md:h-56"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">
                  Clear drawings for tight Islington sites
                </h3>
                <p className="text-sm text-slate-700">
                  Detailed plans, elevations and sections that respond to tight
                  gardens, shared walls, light considerations and outlook so that
                  Islington planners and Building Control can assess the scheme
                  quickly.
                </p>
              </div>
            </div>
          </div>

          {/* AREAS COVERED + PROJECT TYPES */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Islington areas we cover</h3>
              <Image
                src="/images/islington-area.jpg"
                alt="Islington local high street and residential area"
                width={800}
                height={500}
                className="rounded-xl object-cover mb-3"
              />
              <p className="text-sm text-slate-700">
                Architectural drawings for the whole borough of Islington,
                including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Angel and Upper Street</li>
                  <li>Highbury and Highbury Fields</li>
                  <li>Canonbury</li>
                  <li>Barnsbury</li>
                  <li>Holloway</li>
                  <li>Archway</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Finsbury Park (Islington side)</li>
                  <li>Tufnell Park borders</li>
                  <li>Old Street area</li>
                  <li>City Road corridor</li>
                  <li>New North Road area</li>
                  <li>Nearby estates and streets</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">
                Popular projects in Islington
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Rear and side extensions to terraces</li>
                  <li>Side infill and wrap extensions</li>
                  <li>Loft conversions and mansards</li>
                  <li>Internal reconfiguration and knock throughs</li>
                  <li>Flat and maisonette conversions</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Roof terraces and access stairs</li>
                  <li>Garden rooms and studios</li>
                  <li>Change of use layouts</li>
                  <li>Refurbishment and compliance upgrades</li>
                  <li>Small mews and infill schemes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PERMITTED DEVELOPMENT */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Permitted development and planning in Islington
            </h2>
            <p className="text-sm text-slate-700">
              Many houses in Islington still benefit from permitted development
              rights, but flats, maisonettes and many conservation areas require
              full planning permission. We confirm the correct route at the
              start.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold mb-2">Rear extensions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Commonly 3 m on terraces, 4 m on semis</li>
                  <li>Depth and height controlled by local design guides</li>
                  <li>Deeper schemes often need planning</li>
                  <li>We check similar approvals on your street</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Loft conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Volume limits around 40 to 50 cubic metres</li>
                  <li>Front roof changes heavily restricted</li>
                  <li>Dormer shape and size often street specific</li>
                  <li>Conservation areas assessed case by case</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Flats and maisonettes</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>No permitted development rights for flats</li>
                  <li>Full planning permission required</li>
                  <li>Daylight, outlook and amenity carefully tested</li>
                  <li>We design to Islington space standards</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PLANNING & BUILDING REG PACKS */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Planning drawings for Islington
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Existing and proposed floor plans</li>
                <li>Existing and proposed elevations</li>
                <li>Sections through key spaces</li>
                <li>Roof and terrace layouts</li>
                <li>Block plans and location plans</li>
                <li>Design and heritage statements where required</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Building regulation drawings for Islington
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Structural layouts and engineer coordination</li>
                <li>Fire escape routes and compartmentation</li>
                <li>Thermal build ups and insulation specs</li>
                <li>Acoustic performance between units</li>
                <li>Ventilation, extracts and air quality</li>
                <li>Drainage and compliance notes for builders</li>
              </ul>
            </div>
          </div>

          {/* LOCAL KNOWLEDGE */}
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-emerald-900">
              Local planning knowledge for Islington projects
            </h2>
            <p className="text-sm text-emerald-900">
              Islington has some of the most closely reviewed extensions and
              lofts in London, with detailed policies on depth, height, roof
              form, daylight and neighbour impact. We design schemes that reflect
              these rules and similar approvals nearby so that your application
              has a clear planning case.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Frequently asked questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you help with flat conversions in Islington
                </h3>
                <p>
                  Yes. Many Islington projects involve converting houses into
                  flats or reorganising existing units. We design layouts that
                  meet space standards and access, daylight and amenity
                  requirements.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  How fast can you survey a property in Islington
                </h3>
                <p>
                  In most cases we can book the measured survey within forty
                  eight hours of instruction, subject to access.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do you handle the planning submission to Islington Council
                </h3>
                <p>
                  Yes. We manage the full application, upload drawings and
                  documents, and respond to any planner comments or requests for
                  clarification.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you coordinate structural calculations
                </h3>
                <p>
                  We work with structural engineers so that beams, joists and
                  load bearing elements are designed and clearly shown on the
                  plans.
                </p>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Ready to start your Islington project
              </h2>
              <p className="text-sm text-slate-300">
                Send us your address and a short description of the extension,
                loft, flat conversion or refurbishment you have in mind. We will
                review it and provide a fixed quote the same day.
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
                Get your free quote
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
