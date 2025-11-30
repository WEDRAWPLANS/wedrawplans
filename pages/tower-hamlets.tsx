import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function TowerHamlets() {
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/tower-hamlets",
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
      "Tower Hamlets",
      "Bow",
      "Mile End",
      "Stepney",
      "Whitechapel",
      "Bethnal Green",
      "Limehouse",
      "Poplar",
      "Isle of Dogs",
      "Canary Wharf",
      "Wapping"
    ],
    description:
      "Architectural drawing services in Tower Hamlets for extensions, loft conversions, HMOs, flat conversions, outbuildings and building regulation plans."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:
          "Do I need planning permission for a rear extension in Tower Hamlets?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Tower Hamlets can be carried out under permitted development. We confirm the correct route once we review your address and house type."
        }
      },
      {
        "@type": "Question",
        name:
          "Is Tower Hamlets strict with loft conversions, HMOs and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Tower Hamlets is careful with HMOs, flat conversions and large extensions, especially where daylight, outlook, amenity space and neighbour impact are affected. Clear drawings and good planning arguments are important."
        }
      },
      {
        "@type": "Question",
        name: "How long does Tower Hamlets Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks."
        }
      },
      {
        "@type": "Question",
        name:
          "Do you manage the full application to Tower Hamlets Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Tower Hamlets Council and respond to planning officer queries."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings Tower Hamlets | Extensions, Lofts, HMOs | WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Tower Hamlets for extensions, loft conversions, HMOs, flat conversions, outbuildings and building regulation plans. Fast surveys, clear drawings and full planning support with Tower Hamlets Council."
        />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/tower-hamlets"
        />
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
              alt="Architectural drawings for Tower Hamlets extensions, lofts and HMOs"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-16 space-y-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-100">
              WEDRAWPLANS • TOWER HAMLETS
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Architectural Drawings in Tower Hamlets
            </h1>

            <p className="max-w-3xl text-sm md:text-base text-emerald-50">
              Architectural drawing services in Bow, Mile End, Bethnal Green,
              Whitechapel, Poplar, Canary Wharf, Wapping and across Tower Hamlets.
              We prepare drawings for extensions, loft conversions, HMOs, flat
              conversions and outbuildings, aligned with Tower Hamlets Council
              guidance and current Building Regulations.
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
                    <li>Drawings tailored to tight urban plots</li>
                    <li>Building regulation packages for 2025 standards</li>
                    <li>Fixed quotes with clear scope of work</li>
                  </ul>
                </div>

                <p className="mt-2 text-xs text-emerald-100">
                  Typical Tower Hamlets projects include rear and wrap extensions in
                  Bow and Mile End, loft conversions in Stepney and Bethnal Green,
                  and HMOs and flat conversions around Whitechapel, Limehouse and
                  Canary Wharf fringe.
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
                Get your free Tower Hamlets quote
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
                Architectural drawing services in Tower Hamlets
              </h2>
              <p className="text-sm md:text-base text-slate-700">
                WEDRAWPLANS prepares full drawing packages for extensions, loft
                conversions, HMOs, flat conversions, internal reconfiguration and
                outbuildings across the London Borough of Tower Hamlets.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We work throughout Bow, Mile End, Stepney, Whitechapel, Bethnal Green,
                Limehouse, Poplar, Wapping and Isle of Dogs, with drawings designed
                for dense streets, mixed use buildings and constrained sites.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <Image
                src="/images/drawings.jpg"
                alt="Example of architectural drawings for a Tower Hamlets project"
                width={800}
                height={500}
                className="object-cover w-full h-48 md:h-56"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">
                  Clear drawings for dense East London locations
                </h3>
                <p className="text-sm text-slate-700">
                  Detailed plans, elevations and sections that help planners and
                  Building Control understand daylight, privacy, fire escape and
                  layout clearly, which is essential in Tower Hamlets.
                </p>
              </div>
            </div>
          </div>

          {/* AREAS + PROJECT TYPES */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Tower Hamlets areas we cover</h3>
              <Image
                src="/images/towerhamlets-area.jpg"
                alt="Tower Hamlets residential street"
                width={800}
                height={500}
                className="rounded-xl object-cover mb-3"
              />
              <p className="text-sm text-slate-700">
                Architectural drawings for the whole borough of Tower Hamlets,
                including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Bow and Mile End</li>
                  <li>Stepney and Globe Town</li>
                  <li>Whitechapel</li>
                  <li>Bethnal Green</li>
                  <li>Limehouse</li>
                  <li>Poplar</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Isle of Dogs and Millwall</li>
                  <li>Canary Wharf fringe</li>
                  <li>Wapping</li>
                  <li>Flats over shops</li>
                  <li>Backland and corner plots</li>
                  <li>Local estates and streets</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">
                Popular projects in Tower Hamlets
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Rear and wrap extensions to terraces</li>
                  <li>Side infill kitchen extensions</li>
                  <li>Loft conversions and dormers</li>
                  <li>Roof extensions subject to policy</li>
                  <li>Internal reconfiguration and knock throughs</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Flat conversions and HMOs</li>
                  <li>Shop to residential layouts</li>
                  <li>Outbuildings and garden rooms</li>
                  <li>Garage conversions</li>
                  <li>Small infill and mews schemes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PLANNING / PD */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Planning and permitted development in Tower Hamlets
            </h2>
            <p className="text-sm text-slate-700">
              Some houses in Tower Hamlets still benefit from permitted development
              rights, but flats, HMOs and many mixed use buildings need full planning
              permission. There are also detailed policies for daylight, outlook,
              privacy and outdoor space that must be addressed in the design.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold mb-2">Rear extensions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Typical depths around 3 to 4 metres under PD</li>
                  <li>Larger schemes can use Prior Approval</li>
                  <li>Impact on neighbours and gardens assessed</li>
                  <li>We review similar consents on your street</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Loft conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Volume limits around 40 to 50 cubic metres</li>
                  <li>Front roof changes tightly controlled</li>
                  <li>Dormer size guided by roof form and context</li>
                  <li>Side windows normally obscure and high level</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Flats and HMOs</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>No permitted development rights for flats</li>
                  <li>Full planning permission required</li>
                  <li>Space and amenity standards must be met</li>
                  <li>We design layouts to London Plan standards</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PACKS */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Planning drawings for Tower Hamlets
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Existing and proposed floor plans</li>
                <li>Existing and proposed elevations</li>
                <li>Sections through key spaces</li>
                <li>Roof and terrace layouts</li>
                <li>Block plans and location plans</li>
                <li>
                  Design and access or heritage statements where needed
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Building regulation drawings for Tower Hamlets
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Structural layouts and engineer coordination</li>
                <li>Fire strategy and escape routes</li>
                <li>Thermal build ups and insulation specification</li>
                <li>Acoustic performance between flats and homes</li>
                <li>Ventilation, extracts and air quality</li>
                <li>Drainage and technical notes for contractors</li>
              </ul>
            </div>
          </div>

          {/* LOCAL KNOWLEDGE */}
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-emerald-900">
              Local planning knowledge for Tower Hamlets projects
            </h2>
            <p className="text-sm text-emerald-900">
              Tower Hamlets combines historic terraces, post war estates and new
              developments. We design schemes that respect existing character while
              improving layouts, light, amenity and long term value.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you help with HMO layouts in Tower Hamlets?
                </h3>
                <p>
                  Yes. We prepare HMO layouts and drawings that respond to space,
                  amenity, fire safety and licensing requirements, and align with
                  local planning policy.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  How fast can you survey a property in Tower Hamlets?
                </h3>
                <p>
                  In most cases we can arrange the measured survey within forty eight
                  hours of instruction, subject to access.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do you manage the planning submission to Tower Hamlets Council?
                </h3>
                <p>
                  Yes. We manage the full application, upload documents and respond to
                  planner comments until a decision is made.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you coordinate structural calculations?
                </h3>
                <p>
                  We work with structural engineers so that beams, joists and load
                  bearing elements are clearly designed and shown on the drawings.
                </p>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Ready to start your Tower Hamlets project
              </h2>
              <p className="text-sm text-slate-300">
                Send us your address and a short description of the extension, loft,
                HMO, flat conversion or refurbishment you have in mind. We will
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
                Get your free Tower Hamlets quote
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
