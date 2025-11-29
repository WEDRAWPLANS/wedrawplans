import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Haringey() {
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/haringey",
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
      "Haringey",
      "Crouch End",
      "Muswell Hill",
      "Tottenham",
      "Wood Green",
      "Harringay Ladder",
      "Green Lanes",
      "Hornsey",
      "Bounds Green",
      "Highgate borders",
      "Seven Sisters",
      "Finsbury Park"
    ],
    description:
      "Architectural drawing services in Haringey for extensions, loft conversions, outbuildings, refurbishments and building regulations."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Haringey?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Haringey can be carried out under permitted development. We confirm the correct route once we review your address and house type."
        }
      },
      {
        "@type": "Question",
        name: "Is Haringey strict with loft conversions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Haringey follows national permitted development rules but can be stricter in conservation areas, near Highgate and Muswell Hill, and on prominent street facing roofs."
        }
      },
      {
        "@type": "Question",
        name: "How long does Haringey Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Haringey Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare all drawings, complete the forms, upload documents, submit to Haringey Council and respond to planning officer queries."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings Haringey | Extensions, Lofts, Conversions |
          WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Haringey for extensions, loft conversions, outbuildings, refurbishments and building regulation plans. Fast surveys, clear drawings and full planning support with Haringey Council."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/haringey" />
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
        {/* HERO – drawing focused */}
        <section className="relative bg-emerald-900 text-white">
          {/* blueprint background */}
          <div className="absolute inset-0 opacity-15 mix-blend-soft-light">
            <Image
              src="/images/drawings.jpg"
              alt="Architectural drawings for Haringey extensions and lofts"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-16 space-y-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-100">
              WEDRAWPLANS • HARINGEY
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Architectural Drawings in Haringey
            </h1>

            <p className="max-w-3xl text-sm md:text-base text-emerald-50">
              Architectural drawing services in Haringey for house extensions,
              loft conversions, outbuildings, flat conversions and small new
              build homes. All drawings are prepared to Haringey Council
              guidance and current Building Regulations.
            </p>

            <div className="grid md:grid-cols-[2fr,1.2fr] gap-8 items-start">
              <div className="space-y-3 text-sm">
                <div className="grid sm:grid-cols-2 gap-3">
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Measured survey within 48 hours</li>
                    <li>Planning and permitted development advice</li>
                    <li>Full planning and Lawful Development applications</li>
                  </ul>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Drawings tailored to Haringey planning policies</li>
                    <li>Building regulation packages for 2025 standards</li>
                    <li>Fixed quotes with clear scope of work</li>
                  </ul>
                </div>

                <p className="mt-2 text-xs text-emerald-100">
                  Typical Haringey projects include rear extensions in Crouch
                  End and Muswell Hill, loft conversions on Victorian terraces
                  in Harringay Ladder and Green Lanes, and flat conversions in
                  Tottenham and Wood Green.
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
                Get your free Haringey quote
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
                Architectural drawing services in Haringey
              </h2>
              <p className="text-sm md:text-base text-slate-700">
                WEDRAWPLANS prepares full drawing packages for rear and side
                extensions, double storey additions, loft conversions, internal
                alterations, flat conversions, HMOs and small new developments
                across the borough of Haringey.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We work throughout Crouch End, Muswell Hill, Harringay Ladder,
                Green Lanes, Wood Green, Hornsey, Tottenham, Seven Sisters,
                Bounds Green, Highgate borders and Finsbury Park.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <Image
                src="/images/drawings.jpg"
                alt="Example of architectural drawings for a Haringey extension"
                width={800}
                height={500}
                className="object-cover w-full h-48 md:h-56"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">
                  Clear drawings focused on planning and Building Control
                </h3>
                <p className="text-sm text-slate-700">
                  Detailed floor plans, elevations, sections and notes
                  coordinated with structural design so that Haringey Council
                  and your builder can work from a single, accurate set of
                  plans.
                </p>
              </div>
            </div>
          </div>

          {/* AREAS COVERED + PROJECT TYPES */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Haringey areas we cover</h3>
              <Image
                src="/images/haringey-area.jpg"
                alt="Haringey local high street and residential area"
                width={800}
                height={500}
                className="rounded-xl object-cover mb-3"
              />
              <p className="text-sm text-slate-700">
                Architectural drawings for the whole borough of Haringey,
                including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Crouch End</li>
                  <li>Muswell Hill</li>
                  <li>Harringay Ladder</li>
                  <li>Green Lanes</li>
                  <li>Hornsey</li>
                  <li>Highgate borders</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Wood Green</li>
                  <li>Tottenham</li>
                  <li>Seven Sisters</li>
                  <li>Bounds Green</li>
                  <li>Finsbury Park</li>
                  <li>Alexandra Palace area</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Popular projects in Haringey</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Rear and side extensions on terraces</li>
                  <li>Wraparound and L shaped extensions</li>
                  <li>Loft dormers on Victorian streets</li>
                  <li>Hip to gable loft conversions</li>
                  <li>Kitchen and open plan layouts</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Garden rooms and studios</li>
                  <li>Flat conversions and layouts</li>
                  <li>Internal reconfiguration and knock throughs</li>
                  <li>HMOs and small new build schemes</li>
                  <li>Front porches and infill extensions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PERMITTED DEVELOPMENT */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Permitted development limits in Haringey
            </h2>
            <p className="text-sm text-slate-700">
              Below is a simplified summary of typical permitted development
              limits. Final advice depends on your house type, location and any
              Article 4 directions or conservation area status in your part of
              Haringey.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold mb-2">Rear extensions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Up to 3 m deep on terrace houses</li>
                  <li>Up to 4 m on semi detached houses</li>
                  <li>Up to 6 to 8 m with Prior Approval</li>
                  <li>Maximum 4 m height for single storey</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Loft conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Up to 40 to 50 cubic metres volume</li>
                  <li>No dormers on the principal front roof slope</li>
                  <li>Side windows obscure glazed and fixed shut</li>
                  <li>External materials similar to existing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Outbuildings</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Maximum 2.5 m high near boundaries</li>
                  <li>Cannot be used as a separate dwelling</li>
                  <li>Use must be incidental to the house</li>
                  <li>Not more than 50 percent of garden area</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PLANNING & BUILDING REG PACKS */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Planning drawings for Haringey
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Existing and proposed floor plans</li>
                <li>Existing and proposed elevations</li>
                <li>Roof plans and key sections</li>
                <li>Block plans and location plans</li>
                <li>Drainage and construction notes</li>
                <li>Design statements where required</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Building regulation drawings for Haringey
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Structural layouts and coordination with engineer</li>
                <li>Foundation, beam and bearing information</li>
                <li>Fire safety and escape routes</li>
                <li>Thermal build ups and insulation specs</li>
                <li>Ventilation and extract positions</li>
                <li>Drainage runs and manhole information</li>
              </ul>
            </div>
          </div>

          {/* LOCAL KNOWLEDGE */}
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-emerald-900">
              Local planning knowledge for Haringey projects
            </h2>
            <p className="text-sm text-emerald-900">
              Haringey includes conservation areas in Crouch End, Muswell Hill
              and Highgate borders, together with character streets and dense
              terraces in Harringay Ladder and Tottenham. We design each scheme
              to work with these local rules so that the approval process is as
              smooth as possible.
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
                  Do I need planning permission for my Haringey extension?
                </h3>
                <p>
                  Many extensions and lofts can proceed under permitted
                  development. We check your address, house type and location
                  and then advise the best route at the start.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  How fast can you visit and survey the property?
                </h3>
                <p>
                  In most cases we can arrange the initial measured survey in
                  Haringey within forty eight hours of instruction.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do you submit the application to Haringey Council?
                </h3>
                <p>
                  Yes. We handle the full submission process, monitor progress
                  on the planning portal and respond to any planning officer
                  comments or requests.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you help with structural calculations?
                </h3>
                <p>
                  We coordinate with qualified structural engineers so that
                  beams, padstones and load bearing elements are fully designed
                  and shown on the drawings.
                </p>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Ready to start your Haringey project
              </h2>
              <p className="text-sm text-slate-300">
                Send us your address and a short description of the extension,
                loft or refurbishment you have in mind. We will review it and
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
                Get your free Haringey quote
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
