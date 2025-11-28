import React from "react";
import Head from "next/head";

export default function Barnet() {
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/barnet",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK"
    },
    description:
      "Architectural drawings, planning applications, permitted development, extensions, loft conversions and building regulation plans for homeowners across Barnet.",
    areaServed: [
      "Barnet",
      "Finchley",
      "Hendon",
      "Mill Hill",
      "Edgware",
      "Totteridge",
      "Whetstone",
      "Colindale",
      "New Barnet",
      "High Barnet",
      "Friern Barnet",
      "East Finchley",
      "West Finchley",
      "Golders Green",
      "Burnt Oak"
    ]
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Barnet",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. Many extensions fall under permitted development. We confirm this instantly once we check your address and property type."
        }
      },
      {
        "@type": "Question",
        name: "How long does Barnet Council take to decide",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Planning applications typically take 6 to 8 weeks. Lawful Development Certificates take 4 to 6 weeks."
        }
      },
      {
        "@type": "Question",
        name: "Is Barnet strict with loft conversions",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Barnet follows national permitted development rules but can be stricter in conservation areas and on street facing roofs."
        }
      },
      {
        "@type": "Question",
        name: "Can I build an outbuilding in Barnet",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes under permitted development rules in many cases, but it cannot be used as a separate self contained dwelling and must respect height and area limits."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings Barnet | Planning Permissions | WEDRAWPLANS</title>

        <meta
          name="description"
          content="WEDRAWPLANS provides fast architectural drawings, planning applications, loft conversions, extensions, outbuildings and building regulation plans across Barnet including Finchley, Hendon, Edgware, Whetstone, Totteridge, Mill Hill and surrounding areas. Survey within 48 hours. Call 020 3654 8508."
        />

        <link rel="canonical" href="https://www.wedrawplans.co.uk/barnet" />

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
        <section className="bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
          <div className="mx-auto max-w-5xl px-4 py-12 md:py-16 grid gap-8 md:grid-cols-[2fr,1.2fr] items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-100">
                WEDRAWPLANS • Barnet
              </p>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Architectural Drawings in Barnet
              </h1>
              <p className="text-sm md:text-base text-emerald-100">
                Full planning, permitted development and building regulation drawings for
                house extensions, loft conversions, outbuildings and refurbishments across
                every part of Barnet.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
                  Survey within 48 hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
                  Drawings tailored to Barnet Council
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
                  Planning and permitted development advice
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
                  Building regulation packages for 2025 standards
                </li>
              </ul>
            </div>

  <div className="space-y-1 text-sm">
    <p>
      Phone{" "}
      <a
        href="tel:+442036548508"
        className="font-semibold text-emerald-700 underline"
      >
        +44 20 3654 8508
      </a>
    </p>
    <p>
      Email{" "}
      <a
        href="mailto:info@wedrawplans.com"
        className="font-semibold text-emerald-700 underline"
      >
        info@wedrawplans.com
      </a>
    </p>
  </div>

  {/* NEW BUTTON */}
  <a
  href="/#quote"
  className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-800 shadow-md shadow-emerald-900/20 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-800"
>
  Get your free Barnet quote
</a>

  <p className="text-xs text-slate-500">
    Typical Barnet projects include rear extensions, hip to gable loft
    conversions, wrap extensions and garden rooms.
  </p>

          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-5xl px-4 py-10 md:py-14 space-y-12">
          {/* INTRO AND WHY WEDRAWPLANS */}
          <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Barnet architectural drawings for real homes
              </h2>
              <p className="text-sm md:text-base text-slate-700">
                WEDRAWPLANS provides professional planning drawings, permitted development
                advice, building regulation plans and full architectural support for
                homeowners in the London Borough of Barnet. We specialise in fast,
                accurate and compliant drawings for extensions, loft conversions,
                outbuildings and flat conversions.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We cover Finchley, Hendon, Edgware, Whetstone, Totteridge, Colindale, Mill
                Hill, Golders Green, Burnt Oak, Woodside Park, New Barnet, High Barnet,
                Friern Barnet, East Finchley, West Finchley and all surrounding
                neighbourhoods.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                If you are planning an extension, loft conversion, garden room, garage
                conversion, new build or internal layout change, we prepare all drawings
                with full compliance to Barnet planning guidance and 2025 Building
                Regulations.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white shadow-sm p-5 space-y-3">
              <h3 className="text-lg font-semibold">
                Why Barnet homeowners choose WEDRAWPLANS
              </h3>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>Fast turnaround and clear communication</li>
                <li>Local knowledge of Barnet planning policies</li>
                <li>Drawings based on the exact requirements of Barnet Council</li>
                <li>Support with planning applications and permitted development</li>
                <li>Building Regulation packages aligned with 2025 standards</li>
                <li>Fixed quotes with no hidden fees</li>
                <li>Friendly and professional team ready to assist at any time</li>
              </ul>
            </div>
          </div>

          {/* AREAS AND PROJECT TYPES */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5 space-y-3">
              <h3 className="text-lg font-semibold">Barnet areas we cover</h3>
              <p className="text-sm text-slate-700">
                We provide drawings across the whole borough of Barnet, including
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
                  <li>Golders Green and NW11 borders</li>
                  <li>Burnt Oak and Edgware</li>
                  <li>All EN and NW Barnet postcodes</li>
                </ul>
              </div>
              <p className="text-xs text-slate-500">
                Typical projects include rear and side extensions, wraparound extensions,
                loft conversions and garden studios.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5 space-y-3">
              <h3 className="text-lg font-semibold">Popular projects in Barnet</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Rear extensions 3 m, 4 m and 6 m</li>
                  <li>Side and wraparound extensions</li>
                  <li>Kitchen and open plan layouts</li>
                  <li>Hip to gable loft conversions</li>
                  <li>L shaped dormers</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Outbuildings and garden rooms</li>
                  <li>Garage conversions</li>
                  <li>Internal reconfiguration and new stairs</li>
                  <li>Flats, HMOs and change of use</li>
                  <li>Front porches and infill extensions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PERMITTED DEVELOPMENT AND PLANNING */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">Permitted development rules in Barnet</h2>
            <p className="text-sm text-slate-700">
              Below is a simplified summary of common permitted development limits in
              Barnet. Full rules depend on house type, location and any Article 4
              directions. We confirm all details once we have checked your address.
            </p>

            <div className="grid gap-6 md:grid-cols-3 text-sm text-slate-700">
              <div className="space-y-2">
                <h3 className="font-semibold">Rear extensions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Up to 3 m deep on many terraced houses</li>
                  <li>Up to 4 m on many semi detached and detached homes</li>
                  <li>Up to 6 or 8 m with Prior Approval in some cases</li>
                  <li>Typical single storey height up to around 4 m</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Loft conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Up to 40 cubic metres for terraced homes</li>
                  <li>Up to 50 cubic metres for semi detached and detached</li>
                  <li>No extension beyond the front roof plane</li>
                  <li>Side windows obscure glazed and fixed above 1.7 m</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Outbuildings</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Maximum height 2.5 m if within 2 m of a boundary</li>
                  <li>Use must be incidental to the main house</li>
                  <li>Not a separate dwelling</li>
                  <li>Total area usually not more than half the garden</li>
                </ul>
              </div>
            </div>
          </div>

          {/* DRAWING PACKAGES */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5 space-y-3">
              <h3 className="text-lg font-semibold">
                Planning application drawings for Barnet
              </h3>
              <p className="text-sm text-slate-700">
                We prepare every plan required for a planning application or Lawful
                Development Certificate in Barnet.
              </p>
              <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
                <li>Existing and proposed floor plans</li>
                <li>Existing and proposed elevations</li>
                <li>Roof plans and sections</li>
                <li>Block plans and location plans</li>
                <li>Site layout and access notes</li>
                <li>Drainage and basic construction notes</li>
                <li>Design and Access content where required</li>
                <li>Heritage information for conservation areas</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5 space-y-3">
              <h3 className="text-lg font-semibold">
                Building regulation drawings for Barnet
              </h3>
              <p className="text-sm text-slate-700">
                Our full Building Control package is designed for 2025 regulations and
                coordinated with your structural engineer.
              </p>
              <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
                <li>Wall, roof and floor build ups with insulation</li>
                <li>Fire safety, protected routes and escape windows</li>
                <li>Foundation layouts and structural notes</li>
                <li>Drainage, ventilation and MVHR information</li>
                <li>Sound insulation and acoustic notes where relevant</li>
                <li>Energy performance and fabric efficiency notes</li>
                <li>Stair, guarding and balustrade compliance</li>
                <li>Full technical notes for builders and inspectors</li>
              </ul>
            </div>
          </div>

          {/* LOCAL KNOWLEDGE */}
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5 space-y-3">
            <h2 className="text-2xl font-semibold text-emerald-900">
              Local knowledge for Barnet projects
            </h2>
            <p className="text-sm text-emerald-900">
              Barnet is one of the largest boroughs in London with a mix of Victorian
              terraces, 1930s semis, detached homes and newer developments. Many streets
              sit in conservation areas or Article 4 zones and planners can be strict
              about roof shapes, materials and overlooking.
            </p>
            <p className="text-sm text-emerald-900">
              We design every set of drawings with these local conditions in mind to give
              your project a stronger chance of approval the first time.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Frequently asked questions in Barnet</h2>
            <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-700">
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do I need planning permission for a rear extension in Barnet
                </h3>
                <p>
                  Not always. Many extensions fall under permitted development. We confirm
                  this once we have checked your address, drawings and any local
                  restrictions.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  How long does Barnet Council take to decide applications
                </h3>
                <p>
                  Most householder planning applications take around 6 to 8 weeks. Lawful
                  Development Certificates usually take 4 to 6 weeks once validated.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can I build an outbuilding or garden room in Barnet
                </h3>
                <p>
                  Yes in many cases this is permitted development, as long as height, size
                  and use remain within the rules. We confirm this for you and show the
                  building on clear scaled drawings.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do you handle submissions and structural design as well
                </h3>
                <p>
                  We submit the application to Barnet Council, respond to their technical
                  questions and coordinate with structural engineers for beams, openings
                  and loft structures where required.
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="rounded-2xl bg-slate-900 text-slate-50 px-5 py-6 md:px-7 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Ready to talk about your Barnet project
              </h2>
              <p className="text-sm text-slate-200">
                Send your address and a short description of what you would like to build.
                We review the property, confirm permitted development limits and send a
                fixed quote the same day.
              </p>
            </div>
            <div className="space-y-1 text-sm">
              <p>
                Phone{" "}
                <a href="tel:+442036548508" className="font-semibold text-emerald-300 underline">
                  +44 20 3654 8508
                </a>
              </p>
              <p>
                Email{" "}
                <a
                  href="mailto:info@wedrawplans.com"
                  className="font-semibold text-emerald-300 underline"
                >
                  info@wedrawplans.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
