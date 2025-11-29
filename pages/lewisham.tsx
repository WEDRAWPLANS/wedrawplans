import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Lewisham() {
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/lewisham",
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
      "Lewisham",
      "Brockley",
      "Crofton Park",
      "New Cross",
      "Deptford",
      "Forest Hill",
      "Honor Oak",
      "Sydenham",
      "Catford",
      "Hither Green",
      "Lee",
      "Blackheath borders",
      "Telegraph Hill"
    ],
    description:
      "Architectural drawing services in Lewisham for extensions, loft conversions, outbuildings, flats and building regulation plans."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Lewisham?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Lewisham can be carried out under permitted development. We confirm the correct route once we review your address and house type."
        }
      },
      {
        "@type": "Question",
        name: "Is Lewisham strict with loft conversions and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Lewisham follows national permitted development rules but can be stricter in conservation areas and on streets with strong character, such as parts of Brockley and Telegraph Hill."
        }
      },
      {
        "@type": "Question",
        name: "How long does Lewisham Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Lewisham Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Lewisham Council and respond to planning officer queries."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings Lewisham | Extensions, Lofts, Conversions | WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Lewisham for extensions, loft conversions, outbuildings, flat conversions and building regulation plans. Fast surveys, clear drawings and full planning support with Lewisham Council."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/lewisham" />
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
              alt="Architectural drawings for Lewisham extensions and lofts"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-16 space-y-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-100">
              WEDRAWPLANS • LEWISHAM
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Architectural Drawings in Lewisham
            </h1>

            <p className="max-w-3xl text-sm md:text-base text-emerald-50">
              Architectural drawing services in Lewisham for house extensions, loft
              conversions, outbuildings, flat conversions and small new build homes.
              All drawings are prepared to Lewisham Council guidance and current
              Building Regulations.
            </p>

            <div className="grid md:grid-cols-[2fr,1.2fr] gap-8 items-start">
              <div className="space-y-3 text-sm">
                <div className="grid sm:grid-cols-2 gap-3">
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Measured survey within 48 hours</li>
                    <li>Planning and permitted development advice</li>
                    <li>Support with flat and maisonette schemes</li>
                  </ul>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Drawings tailored to Lewisham policies</li>
                    <li>Building regulation packages for 2025 standards</li>
                    <li>Fixed quotes with clear scope of work</li>
                  </ul>
                </div>

                <p className="mt-2 text-xs text-emerald-100">
                  Typical Lewisham projects include rear and wrap extensions in
                  Brockley and Crofton Park, loft conversions in Catford and Forest
                  Hill, and flat conversions and refurbishments around New Cross and
                  Deptford.
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
                Get your free Lewisham quote
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
                Architectural drawing services in Lewisham
              </h2>
              <p className="text-sm md:text-base text-slate-700">
                WEDRAWPLANS prepares full drawing packages for rear and side extensions,
                loft conversions, internal reconfiguration, flat conversions and
                outbuildings across the borough of Lewisham.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We work throughout Lewisham, Brockley, Crofton Park, New Cross,
                Deptford, Forest Hill, Honor Oak, Sydenham, Catford, Hither Green,
                Lee, Telegraph Hill and Blackheath borders.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <Image
                src="/images/drawings.jpg"
                alt="Example of architectural drawings for a Lewisham project"
                width={800}
                height={500}
                className="object-cover w-full h-48 md:h-56"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">
                  Clear drawings for South East London homes
                </h3>
                <p className="text-sm text-slate-700">
                  Detailed plans, elevations and sections that respond to typical
                  Lewisham housing stock such as Victorian terraces, 1930s semis and
                  post war infill, so that planners and builders can follow one clear
                  set of drawings.
                </p>
              </div>
            </div>
          </div>

          {/* AREAS COVERED + PROJECT TYPES */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Lewisham areas we cover</h3>
              <Image
                src="/images/lewisham-area.jpg"
                alt="Lewisham local high street and residential area"
                width={800}
                height={500}
                className="rounded-xl object-cover mb-3"
              />
              <p className="text-sm text-slate-700">
                Architectural drawings for the whole borough of Lewisham, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Lewisham and Hither Green</li>
                  <li>Brockley and Crofton Park</li>
                  <li>New Cross and Deptford</li>
                  <li>Forest Hill and Honor Oak</li>
                  <li>Sydenham</li>
                  <li>Catford</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Lee and Grove Park fringe</li>
                  <li>Telegraph Hill</li>
                  <li>Blackheath borders</li>
                  <li>Ladywell and St Johns</li>
                  <li>Local estates and streets</li>
                  <li>Backland and corner plots</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Popular projects in Lewisham</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Rear extensions and wrap extensions</li>
                  <li>Side infill kitchen extensions</li>
                  <li>Loft conversions and dormers</li>
                  <li>Hip to gable loft conversions</li>
                  <li>Internal reconfiguration and knock throughs</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Garden rooms and studios</li>
                  <li>Garage conversions</li>
                  <li>Flat and maisonette conversions</li>
                  <li>Change of use layouts</li>
                  <li>Small infill and backland schemes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PLANNING / PD */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Planning and permitted development in Lewisham
            </h2>
            <p className="text-sm text-slate-700">
              Many Lewisham houses benefit from permitted development rights. Flats,
              maisonettes and some conservation areas require full planning permission.
              We confirm the correct route at the start.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold mb-2">Rear extensions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Typical limits of 3 m on terraces</li>
                  <li>Up to 4 m on semis under PD</li>
                  <li>Deeper schemes via Prior Approval</li>
                  <li>We check similar schemes nearby</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Loft conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Volume limits around 40 to 50 cubic metres</li>
                  <li>Front roof alterations controlled</li>
                  <li>Dormer design tied to roof form</li>
                  <li>Conservation areas carefully reviewed</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Flats and maisonettes</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>No permitted development rights for flats</li>
                  <li>Full planning permission required</li>
                  <li>Daylight, outlook and amenity important</li>
                  <li>We design to space and amenity standards</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PLANNING & BUILDING REGS PACKS */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">Planning drawings for Lewisham</h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Existing and proposed floor plans</li>
                <li>Existing and proposed elevations</li>
                <li>Sections through key spaces</li>
                <li>Roof and terrace layouts</li>
                <li>Block plans and location plans</li>
                <li>Design statements where required</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Building regulation drawings for Lewisham
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Structural layouts and engineer coordination</li>
                <li>Fire escape routes and compartmentation</li>
                <li>Thermal build ups and insulation specs</li>
                <li>Acoustic performance between homes</li>
                <li>Ventilation, extracts and air quality</li>
                <li>Drainage and compliance notes for builders</li>
              </ul>
            </div>
          </div>

          {/* LOCAL KNOWLEDGE */}
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-emerald-900">
              Local planning knowledge for Lewisham projects
            </h2>
            <p className="text-sm text-emerald-900">
              Lewisham contains many Victorian and 1930s streets, conservation areas
              and hillsides where daylight, height and massing are closely checked. We
              design each scheme to reflect local character and similar approvals so
              that the planning process is as smooth as possible.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you help with flat conversions in Lewisham?
                </h3>
                <p>
                  Yes. We regularly work on flat conversions and reorganising existing
                  units in Lewisham, ensuring layouts meet space, access and amenity
                  requirements.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  How fast can you survey a property in Lewisham?
                </h3>
                <p>
                  In most cases we can book the measured survey within forty eight
                  hours of instruction, subject to access.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do you handle the planning submission to Lewisham Council?
                </h3>
                <p>
                  Yes. We manage the full submission, upload drawings and respond to
                  planner comments until a decision is made.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you coordinate structural calculations?
                </h3>
                <p>
                  We work with structural engineers so that beams, joists and load
                  bearing elements are designed and shown clearly on the drawings.
                </p>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Ready to start your Lewisham project
              </h2>
              <p className="text-sm text-slate-300">
                Send us your address and a short description of the extension, loft,
                flat conversion or refurbishment you have in mind. We will review it
                and provide a fixed quote the same day.
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
                Get your free Lewisham quote
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
