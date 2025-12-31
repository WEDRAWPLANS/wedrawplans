import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_TEL = "+442036548508";
const EMAIL = "info@wedrawplans.com";

export default function CamdenAreaPage() {
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/camden",
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
      "Camden",
      "Camden Town",
      "Kentish Town",
      "Gospel Oak",
      "Hampstead borders",
      "Belsize Park",
      "Swiss Cottage borders",
      "Kings Cross",
      "St Pancras",
      "Bloomsbury",
      "Holborn",
      "Fitzrovia (Camden side)"
    ],
    description:
      "Architectural drawing services in Camden for extensions, loft conversions, flat conversions, refurbishments and building regulations."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Camden?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Camden can be carried out under permitted development. We confirm the correct route once we review your address and building type."
        }
      },
      {
        "@type": "Question",
        name: "Is Camden strict with loft conversions and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Camden can be strict, especially in conservation areas, near Hampstead and Belsize Park, and on terraces with strong character. Good drawings and planning strategy are important."
        }
      },
      {
        "@type": "Question",
        name: "How long does Camden Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Camden Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete the forms, upload documents, submit to Camden Council and respond to planning officer queries."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings Camden | Extensions, Lofts, Conversions | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawing services in Camden for extensions, loft conversions, flat conversions, outbuildings and building regulation plans. Measured surveys, clear drawings and full planning support with Camden Council."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/camden" />

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
        {/* TOP BAR (Barnet / Harrow style) */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-slate-200 bg-white">
                <Image
                  src="/images/logo.png"
                  alt="WEDRAWPLANS logo"
                  fill
                  className="object-contain p-1"
                  sizes="40px"
                  priority
                />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-extrabold tracking-tight text-slate-900">
                  WEDRAWPLANS
                </p>
                <p className="text-[11px] text-slate-600">
                  Planning drawings and building regulations
                </p>
              </div>
            </Link>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-5 text-sm text-slate-700">
              <Link href="/#services" className="hover:text-slate-900">Services</Link>
              <Link href="/#pricing" className="hover:text-slate-900">Pricing</Link>
              <Link href="/#projects" className="hover:text-slate-900">Projects</Link>
              <Link href="/#faq" className="hover:text-slate-900">FAQ</Link>
              <Link href="/areas" className="hover:text-slate-900">Areas</Link>
            </nav>

            {/* Contact CTA */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="hidden sm:inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a
                href="/#quote"
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
              >
                Get your free quote
              </a>
            </div>
          </div>
        </header>

        {/* HERO – drawing focused */}
        <section className="relative bg-emerald-900 text-white">
          {/* blueprint background */}
          <div className="absolute inset-0 opacity-15 mix-blend-soft-light">
            <Image
              src="/images/drawings.jpg"
              alt="Architectural drawings for Camden extensions and lofts"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-16 space-y-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-100">
              WEDRAWPLANS • CAMDEN
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Architectural Drawings in Camden
            </h1>

            <p className="max-w-3xl text-sm md:text-base text-emerald-50">
              Architectural drawing services in Camden for house extensions, loft
              conversions, flat conversions, outbuildings and small new build
              homes. All drawings are prepared to Camden Council guidance and
              current Building Regulations.
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
                    <li>Drawings tailored to Camden policies</li>
                    <li>Building regulation packages for 2025 standards</li>
                    <li>Fixed quotes with clear scope of work</li>
                  </ul>
                </div>

                <p className="mt-2 text-xs text-emerald-100">
                  Typical Camden projects include rear extensions to Victorian
                  terraces in Kentish Town and Camden Town, loft conversions in
                  Gospel Oak and Hampstead borders, and flat conversions around
                  Kings Cross, Bloomsbury and Holborn.
                </p>
              </div>

              <div className="space-y-2 text-sm text-right md:text-left">
                <p className="text-xs text-emerald-100">Talk to us</p>
                <p className="text-sm text-white">
                  Phone{" "}
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="font-semibold text-white underline"
                  >
                    +44 20 3654 8508
                  </a>
                </p>
                <p className="text-sm text-white">
                  Email{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-semibold text-white underline"
                  >
                    {EMAIL}
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
                Architectural drawing services in Camden
              </h2>
              <p className="text-sm md:text-base text-slate-700">
                WEDRAWPLANS prepares full drawing packages for rear and side
                extensions, loft conversions, internal reconfiguration, roof
                terraces, flat conversions and small new developments across the
                borough of Camden.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We work throughout Camden Town, Kentish Town, Gospel Oak,
                Hampstead and Belsize Park borders, Kings Cross, Bloomsbury,
                Holborn, Fitzrovia (Camden side) and surrounding streets.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <Image
                src="/images/drawings.jpg"
                alt="Example of architectural drawings for a Camden project"
                width={800}
                height={500}
                className="object-cover w-full h-48 md:h-56"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">
                  Clear drawings for complex Camden sites
                </h3>
                <p className="text-sm text-slate-700">
                  Detailed floor plans, elevations, sections and notes coordinated
                  with structural design, fire strategy and light studies so that
                  Camden planning and Building Control can understand the scheme
                  quickly.
                </p>
              </div>
            </div>
          </div>

          {/* AREAS COVERED + PROJECT TYPES */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Camden areas we cover</h3>
              <Image
                src="/images/camden-area.jpg"
                alt="Camden local high street and residential area"
                width={800}
                height={500}
                className="rounded-xl object-cover mb-3"
              />
              <p className="text-sm text-slate-700">
                Architectural drawings for the whole borough of Camden, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Camden Town</li>
                  <li>Kentish Town</li>
                  <li>Gospel Oak</li>
                  <li>Hampstead borders</li>
                  <li>Belsize Park</li>
                  <li>Swiss Cottage borders</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Kings Cross and St Pancras</li>
                  <li>Bloomsbury</li>
                  <li>Holborn</li>
                  <li>Fitzrovia (Camden side)</li>
                  <li>Regents Park borders</li>
                  <li>Surrounding streets and estates</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Popular projects in Camden</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Rear and side extensions to terraces</li>
                  <li>Loft conversions and dormers</li>
                  <li>Internal reconfiguration and knock throughs</li>
                  <li>Flat and maisonette conversions</li>
                  <li>Small infill developments</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Basement and lower ground alterations</li>
                  <li>Roof terraces and access stairs</li>
                  <li>Garden studios and workspaces</li>
                  <li>Change of use layouts</li>
                  <li>Refurbishment and compliance upgrades</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PERMITTED DEVELOPMENT */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Permitted development and planning in Camden
            </h2>
            <p className="text-sm text-slate-700">
              Many houses in Camden benefit from permitted development rights, but
              flats and maisonettes require full planning permission. Conservation
              areas and Article 4 directions limit some automatic rights.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold mb-2">Rear extensions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Commonly 3 m on terraces, 4 m on semis</li>
                  <li>Height limits and design must fit the street</li>
                  <li>Deeper extensions often need planning</li>
                  <li>We match depth and form to local precedents</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Loft conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Volume limits around 40 to 50 cubic metres</li>
                  <li>Front roof alterations tightly controlled</li>
                  <li>Dormer design often street specific</li>
                  <li>Conservation areas need careful approach</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Flats and maisonettes</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>No permitted development rights for flats</li>
                  <li>Full planning permission required</li>
                  <li>Daylight, outlook and amenity important</li>
                  <li>We design to Camden flat layout guidance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PLANNING & BUILDING REG PACKS */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Planning drawings for Camden
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Existing and proposed floor plans</li>
                <li>Existing and proposed elevations</li>
                <li>Sections through key areas</li>
                <li>Roof plans and terrace layouts</li>
                <li>Block plans and location plans</li>
                <li>Design and heritage statements where needed</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Building regulation drawings for Camden
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Structural layouts and engineer coordination</li>
                <li>Fire safety and escape routes for houses and flats</li>
                <li>Thermal build ups and insulation specs</li>
                <li>Acoustic details between habitable rooms</li>
                <li>Ventilation and extract positions</li>
                <li>Drainage runs and compliance notes</li>
              </ul>
            </div>
          </div>

          {/* LOCAL KNOWLEDGE */}
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-emerald-900">
              Local planning knowledge for Camden projects
            </h2>
            <p className="text-sm text-emerald-900">
              Camden includes conservation areas, tight terraces and blocks of
              flats where daylight and neighbour amenity are closely checked. We
              design each scheme to work with Camden policies and similar
              approvals in your street so that the planning process is as
              predictable as possible.
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
                  Can you help with flat and maisonette projects in Camden?
                </h3>
                <p>
                  Yes. Many Camden projects involve flats, roof space, lower
                  ground floors and complex access. We design layouts and
                  sections that respond to these constraints and planning rules.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  How fast can you survey a property in Camden?
                </h3>
                <p>
                  In most cases we can book the measured survey within forty
                  eight hours of instruction, subject to access.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do you submit the application to Camden Council?
                </h3>
                <p>
                  Yes. We handle the full submission, portal upload and
                  communication with the planning officer until a decision is
                  made.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you coordinate structural calculations?
                </h3>
                <p>
                  We work with qualified structural engineers so that beams,
                  supports and load bearing elements are fully designed and shown
                  on the drawings.
                </p>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Ready to start your Camden project
              </h2>
              <p className="text-sm text-slate-300">
                Send us your address and a short description of the extension,
                loft, flat conversion or refurbishment you have in mind. We will
                review it and provide a fixed quote the same day.
              </p>
            </div>
            <div className="flex flex-col space-y-1 text-sm">
              <a
                href={`tel:${PHONE_TEL}`}
                className="font-semibold text-emerald-300 underline"
              >
                +44 20 3654 8508
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="font-semibold text-emerald-300 underline"
              >
                {EMAIL}
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

        {/* Small footer strip */}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} WEDRAWPLANS. All rights reserved.</p>
            <div className="flex gap-4">
              <a className="underline" href={`tel:${PHONE_TEL}`}>Call</a>
              <a className="underline" href={`mailto:${EMAIL}`}>Email</a>
              <Link className="underline" href="/areas">All areas</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
