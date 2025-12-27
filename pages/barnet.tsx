import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Barnet() {
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/barnet",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/hero.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK"
    },
    areaServed: [
      "Barnet",
      "Finchley",
      "Hendon",
      "Edgware",
      "Totteridge",
      "Whetstone",
      "Mill Hill",
      "Colindale",
      "Golders Green",
      "Burnt Oak",
      "High Barnet",
      "Friern Barnet",
      "East Finchley",
      "West Finchley"
    ],
    description:
      "Architectural drawing services in Barnet for extensions, loft conversions, outbuildings, refurbishments and building regulations."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Barnet?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many extensions fall under permitted development. We confirm the correct route once we review your address and house type."
        }
      },
      {
        "@type": "Question",
        name: "Is Barnet strict with loft conversions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Barnet follows national permitted development rules but can be stricter in conservation areas and where roof changes affect the street scene."
        }
      },
      {
        "@type": "Question",
        name: "How long does Barnet Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications usually take six to eight weeks after validation. Lawful Development Certificates normally take four to six weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Barnet Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Barnet Council and respond to planning officer queries."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings Barnet | Extensions, Lofts, New Builds |
          WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Barnet for extensions, loft conversions, outbuildings, refurbishments and building regulation plans. Fast surveys, clear drawings and full planning support."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/barnet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJson)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <main className="bg-slate-50">
        {/* HERO */}
        <section className="bg-emerald-900 text-white">
          <div className="mx-auto max-w-5xl px-6 py-16 space-y-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-100">
              WEDRAWPLANS • BARNET
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Architectural Drawings in Barnet
            </h1>

            <p className="max-w-3xl text-sm md:text-base text-emerald-100">
              Architectural drawing services in Barnet for house extensions,
              loft conversions, outbuildings, refurbishments and new build
              homes. Every set of drawings is prepared to Barnet Council
              guidance and current Building Regulations.
            </p>

            <div className="grid md:grid-cols-[2fr,1.2fr] gap-8 items-start">
              <div className="space-y-3 text-sm">
                <div className="grid sm:grid-cols-2 gap-3">
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Survey within 48 hours</li>
                    <li>Planning and permitted development advice</li>
                    <li>Full planning and Lawful Development applications</li>
                  </ul>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Drawings tailored to Barnet Council policies</li>
                    <li>Building regulation packages for 2025 standards</li>
                    <li>Fixed quotes with clear scope</li>
                  </ul>
                </div>

                <p className="mt-2 text-xs text-emerald-100">
                  Typical Barnet projects include rear extensions, wrap
                  extensions, hip to gable loft conversions, L shaped dormers
                  and high quality garden rooms.
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
<div className="pt-2 flex flex-col sm:flex-row gap-3">
  <a
    href="/areas/barnet"
    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-emerald-900 shadow-lg shadow-emerald-900/30 hover:bg-emerald-50 transition"
  >
    Get a fast Barnet quote
  </a>

  <a
    href="/#quote"
    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-emerald-800 px-8 py-3 text-sm font-semibold text-white border border-emerald-200/20 hover:bg-emerald-700 transition"
  >
    Quick quote on this page
  </a>
</div>

            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-5xl px-6 py-14 space-y-14">
          {/* INTRO + DRAWINGS IMAGE */}
          <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Architectural drawing services in Barnet
              </h2>
              <p className="text-sm md:text-base text-slate-700">
                WEDRAWPLANS provides full drawing packages for single and double
                storey extensions, loft conversions, internal alterations,
                outbuildings, flat conversions and small new developments
                across the borough of Barnet.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We work throughout Finchley, Hendon, Whetstone, Totteridge,
                Mill Hill, Edgware, Colindale, Golders Green, Burnt Oak, High
                Barnet, Friern Barnet, East Finchley and West Finchley.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <Image
                src="/images/drawings.jpg"
                alt="Example of architectural drawings for a Barnet extension"
                width={800}
                height={500}
                className="object-cover w-full h-48 md:h-56"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">
                  Technical drawings your builder can build from
                </h3>
                <p className="text-sm text-slate-700">
                  Clear floor plans, elevations, sections and notes, coordinated
                  with structural design so that builders and inspectors have
                  everything they need.
                </p>
              </div>
            </div>
          </div>

          {/* AREAS + PROJECT TYPES */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Barnet areas we cover</h3>
              <Image
                src="/images/area.jpg"
                alt="Barnet local high street"
                width={800}
                height={500}
                className="rounded-xl object-cover mb-3"
              />
              <p className="text-sm text-slate-700">
                Drawings for the whole borough of Barnet, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Finchley Central N3</li>
                  <li>North Finchley N12</li>
                  <li>East Finchley N2</li>
                  <li>Hendon NW4</li>
                  <li>Mill Hill NW7</li>
                  <li>Colindale</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Totteridge and Whetstone N20</li>
                  <li>High Barnet EN5</li>
                  <li>Friern Barnet</li>
                  <li>Golders Green NW11</li>
                  <li>Burnt Oak</li>
                  <li>Edgware</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Popular projects in Barnet</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Rear and side extensions</li>
                  <li>Wraparound and L shaped extensions</li>
                  <li>Hip to gable loft conversions</li>
                  <li>L shaped dormers</li>
                  <li>Kitchen and open plan layouts</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Garden rooms and studios</li>
                  <li>Garage conversions</li>
                  <li>Internal reconfiguration</li>
                  <li>Flats, HMOs and change of use</li>
                  <li>Small new build schemes</li>
                </ul>
              </div>
              <Image
                src="/images/hero.jpg"
                alt="Completed extension and loft project"
                width={800}
                height={500}
                className="rounded-xl object-cover mt-2"
              />
            </div>
          </div>

          {/* PERMITTED DEVELOPMENT */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Permitted development limits in Barnet
            </h2>
            <p className="text-sm text-slate-700">
              Below is a simplified guide to common permitted development
              limits. Final confirmation always depends on your house type,
              location and any Article 4 directions.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold mb-2">Rear extensions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Up to 3 m deep on terrace houses</li>
                  <li>Up to 4 m on semi detached houses</li>
                  <li>Up to 6 to 8 m with Prior Approval</li>
                  <li>Maximum 4 m high for single storey</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Loft conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Up to 40 to 50 cubic metres volume</li>
                  <li>No extensions on the front roof slope</li>
                  <li>Side windows obscure glazed and fixed</li>
                  <li>External materials to be similar</li>
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
                Planning drawings for Barnet
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Existing and proposed floor plans</li>
                <li>Existing and proposed elevations</li>
                <li>Roof plans and key sections</li>
                <li>Block plans and location plans</li>
                <li>Drainage and construction notes</li>
                <li>Design and access statements where needed</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Building regulation drawings for Barnet
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Structural layouts and coordination</li>
                <li>Foundation and beam information</li>
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
              Local planning knowledge for Barnet projects
            </h2>
            <p className="text-sm text-emerald-900">
              Barnet includes conservation areas, Article 4 zones, deep garden
              plots, backland policies and detailed guidance on roof extensions.
              We design each scheme to work with these local rules so that the
              chances of approval are as strong as possible.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do I need planning permission for my Barnet project?
                </h3>
                <p>
                  Many extensions and lofts can proceed under permitted
                  development. We check your address and advise the best route
                  at the start.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  How fast can you visit and survey the property?
                </h3>
                <p>
                  In most cases we can arrange the initial measured survey
                  within forty eight hours of instruction.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do you submit the application to Barnet Council?
                </h3>
                <p>
                  Yes. We handle the full submission, monitor progress and
                  respond to any planning officer comments.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you help with structural calculations?
                </h3>
                <p>
                  We coordinate with qualified structural engineers so that
                  beams, padstones and load bearing walls are all designed and
                  shown correctly on the drawings.
                </p>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Ready to start your Barnet project
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
                Get your free Barnet quote
              </a>
            </div>
          </div>

          {/* INTERNAL LINKS */}
          <div className="text-xs text-slate-500 pt-4">
        <p>
  See also:{" "}
  <a href="/areas/barnet" className="underline text-emerald-700">
    Barnet quote form
  </a>
  ,{" "}
  <a href="/extension-plans" className="underline text-emerald-700">
    House extension drawings
  </a>
  ,{" "}
  <a href="/loft-conversion-plans" className="underline text-emerald-700">
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
