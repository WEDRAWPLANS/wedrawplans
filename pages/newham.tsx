import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Newham() {
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/newham",
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
      "Newham",
      "East Ham",
      "West Ham",
      "Upton Park",
      "Plaistow",
      "Forest Gate",
      "Manor Park",
      "Canning Town",
      "Custom House",
      "Stratford",
      "Maryland",
      "Beckton"
    ],
    description:
      "Architectural drawing services in Newham for extensions, loft conversions, flat conversions, HMOs, outbuildings and building regulation plans."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Newham?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Newham can be carried out under permitted development. We confirm the correct route once we review your address and house type."
        }
      },
      {
        "@type": "Question",
        name: "Is Newham strict with loft conversions, HMOs and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Newham is careful with HMOs, flat conversions and large extensions, especially where parking, overcrowding and amenity space are affected. Good quality drawings and clear planning arguments are important."
        }
      },
      {
        "@type": "Question",
        name: "How long does Newham Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Newham Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Newham Council and respond to planning officer queries."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings Newham | Extensions, Lofts, HMOs | WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Newham for extensions, loft conversions, HMOs, flat conversions, outbuildings and building regulation plans. Fast surveys, clear drawings and full planning support with Newham Council."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/newham" />
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
              alt="Architectural drawings for Newham extensions and lofts"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-16 space-y-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-100">
              WEDRAWPLANS • NEWHAM
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Architectural Drawings in Newham
            </h1>

            <p className="max-w-3xl text-sm md:text-base text-emerald-50">
              Architectural drawing services in Newham for house extensions, loft
              conversions, HMOs, flat conversions, outbuildings and small new build
              schemes. All drawings are prepared to Newham Council guidance and current
              Building Regulations.
            </p>

            <div className="grid md:grid-cols-[2fr,1.2fr] gap-8 items-start">
              <div className="space-y-3 text-sm">
                <div className="grid sm:grid-cols-2 gap-3">
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Measured survey within 48 hours</li>
                    <li>Planning and permitted development advice</li>
                    <li>Support with HMOs and flat conversions</li>
                  </ul>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Drawings tailored to Newham policies</li>
                    <li>Building regulation packages for 2025 standards</li>
                    <li>Fixed quotes with clear scope of work</li>
                  </ul>
                </div>

                <p className="mt-2 text-xs text-emerald-100">
                  Typical Newham projects include rear and wrap extensions in East Ham
                  and Forest Gate, loft conversions and dormers in Manor Park and
                  Plaistow, and HMOs, flat conversions and shop conversions around
                  Stratford, Upton Park and Barking Road.
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
                Get your free Newham quote
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
                Architectural drawing services in Newham
              </h2>
              <p className="text-sm md:text-base text-slate-700">
                WEDRAWPLANS prepares full drawing packages for rear and side extensions,
                loft conversions, HMOs, flat conversions, outbuildings and small
                developments across the London Borough of Newham.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We work throughout East Ham, West Ham, Upton Park, Forest Gate, Manor
                Park, Plaistow, Canning Town, Custom House, Beckton, Stratford and
                Maryland.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <Image
                src="/images/drawings.jpg"
                alt="Example of architectural drawings for a Newham project"
                width={800}
                height={500}
                className="object-cover w-full h-48 md:h-56"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">
                  Clear drawings for dense East London streets
                </h3>
                <p className="text-sm text-slate-700">
                  Detailed plans, elevations and sections that respond to tight plots,
                  shared boundaries and parking constraints so that Newham planners and
                  Building Control can assess the scheme quickly.
                </p>
              </div>
            </div>
          </div>

          {/* AREAS COVERED + PROJECT TYPES */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Newham areas we cover</h3>
              <Image
                src="/images/newham-area.jpg"
                alt="Newham local high street and residential area"
                width={800}
                height={500}
                className="rounded-xl object-cover mb-3"
              />
              <p className="text-sm text-slate-700">
                Architectural drawings for the whole borough of Newham, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>East Ham and Barking Road areas</li>
                  <li>West Ham and Plaistow</li>
                  <li>Forest Gate and Manor Park</li>
                  <li>Upton Park</li>
                  <li>Beckton</li>
                  <li>Canning Town</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Custom House</li>
                  <li>Stratford and Maryland</li>
                  <li>Royal Docks fringe</li>
                  <li>Local estates and streets</li>
                  <li>Backland and corner plots</li>
                  <li>Mixed use and shop units</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Popular projects in Newham</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Rear and wrap extensions to terraces</li>
                  <li>Side infill extensions</li>
                  <li>Loft conversions and dormers</li>
                  <li>Hip to gable loft conversions</li>
                  <li>Internal reconfiguration and knock throughs</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Flat conversions and HMOs</li>
                  <li>Shop to residential layouts</li>
                  <li>Outbuildings and garden rooms</li>
                  <li>Garage conversions</li>
                  <li>Small infill and backland schemes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PLANNING / PD */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Planning and permitted development in Newham
            </h2>
            <p className="text-sm text-slate-700">
              Many Newham houses benefit from permitted development rights but flats,
              HMOs and conversions require full planning permission. There are also
              licensing rules and space standards that must be respected for HMOs and
              flat conversions.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold mb-2">Rear extensions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Typical PD depths around 3 to 4 metres</li>
                  <li>Deeper schemes through Prior Approval</li>
                  <li>Height and massing considered against neighbours</li>
                  <li>We check similar approvals nearby</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Loft conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Volume limits around 40 to 50 cubic metres</li>
                  <li>Front roof changes carefully controlled</li>
                  <li>Dormer design guided by the roof form</li>
                  <li>Side windows often need obscure glass</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">HMOs and flat conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Planning and licensing requirements</li>
                  <li>Minimum room sizes and amenity standards</li>
                  <li>Fire safety and escape routes</li>
                  <li>We design layouts to meet local rules</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PACKS */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">Planning drawings for Newham</h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Existing and proposed floor plans</li>
                <li>Existing and proposed elevations</li>
                <li>Sections through key spaces</li>
                <li>Roof plans and terraces</li>
                <li>Block plans and location plans</li>
                <li>Design and access statements where needed</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Building regulation drawings for Newham
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Structural layouts and engineer coordination</li>
                <li>Fire strategy for houses, flats and HMOs</li>
                <li>Thermal build ups and insulation specification</li>
                <li>Acoustic performance between rooms and homes</li>
                <li>Ventilation, extracts and air quality</li>
                <li>Drainage and technical notes for contractors</li>
              </ul>
            </div>
          </div>

          {/* LOCAL KNOWLEDGE */}
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-emerald-900">
              Local planning knowledge for Newham projects
            </h2>
            <p className="text-sm text-emerald-900">
              Newham combines dense Victorian terraces, post war housing and newer
              developments. We design schemes that respect local character, parking
              limits and amenity standards while giving you the extra space that you
              need for family living, HMOs or rental layouts.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you help with HMO and flat conversion layouts in Newham?
                </h3>
                <p>
                  Yes. We regularly prepare layouts and planning drawings for HMOs and
                  flat conversions in Newham, designed to meet space and fire
                  standards, and we coordinate with licensing requirements.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  How fast can you survey a property in Newham?
                </h3>
                <p>
                  In most cases we can book the measured survey within forty eight
                  hours of instruction, subject to access.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do you handle the planning submission to Newham Council?
                </h3>
                <p>
                  Yes. We manage the full application, upload documents and respond to
                  planner comments until a decision is made.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you coordinate structural calculations for Newham projects?
                </h3>
                <p>
                  We work with structural engineers so that beams, joists and load
                  bearing elements are designed and shown clearly on the drawings for
                  builders and Building Control.
                </p>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Ready to start your Newham project
              </h2>
              <p className="text-sm text-slate-300">
                Send us your address and a short description of the extension, loft,
                HMO, flat conversion or refurbishment you have in mind. We will review
                it and provide a fixed quote the same day.
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
                Get your free Newham quote
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
