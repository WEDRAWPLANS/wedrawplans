import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Bromley() {
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/bromley",
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
      "Bromley",
      "Beckenham",
      "Orpington",
      "Chislehurst",
      "Petts Wood",
      "Shortlands",
      "West Wickham",
      "Hayes",
      "Biggin Hill"
    ],
    description:
      "Architectural drawing services in Bromley for extensions, loft conversions, garage conversions, outbuildings and building regulation plans."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Bromley?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Bromley can be carried out under permitted development. We confirm the correct route once we review your address and house type."
        }
      },
      {
        "@type": "Question",
        name: "Is Bromley strict with loft conversions and large extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Bromley has detailed guidance for depth, height and roof design. Conservation areas and corner plots can be more sensitive. Clear drawings and a good planning case are important."
        }
      },
      {
        "@type": "Question",
        name: "How long does Bromley Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications usually take around six to eight weeks after validation. Lawful Development Certificates are often decided in four to six weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Bromley Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Bromley Council and respond to planning officer queries."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings Bromley | Extensions and Lofts | WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Bromley for extensions, loft conversions, garage conversions, outbuildings and building regulation plans. Fast surveys, clear drawings and full support with Bromley Council."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/bromley" />
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
              alt="Architectural drawings for Bromley extensions and lofts"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-16 space-y-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-100">
              WEDRAWPLANS • BROMLEY
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Architectural Drawings in Bromley
            </h1>

            <p className="max-w-3xl text-sm md:text-base text-emerald-50">
              Architectural drawing services for Bromley, Beckenham, Orpington,
              Chislehurst, Petts Wood, West Wickham, Hayes and surrounding areas. We
              prepare drawings for extensions, loft conversions, garage conversions and
              outbuildings, aligned with Bromley Council guidance and current Building
              Regulations.
            </p>

            <div className="grid md:grid-cols-[2fr,1.2fr] gap-8 items-start">
              <div className="space-y-3 text-sm">
                <div className="grid sm:grid-cols-2 gap-3">
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Measured survey within 48 hours</li>
                    <li>Planning and permitted development advice</li>
                    <li>Support with deeper plots and corner sites</li>
                  </ul>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Drawings tailored to Bromley policies</li>
                    <li>Building regulation packages for 2025 standards</li>
                    <li>Fixed quotes with clear scope of work</li>
                  </ul>
                </div>

                <p className="mt-2 text-xs text-emerald-100">
                  Typical Bromley projects include rear and side extensions to 1930s
                  semis, wrap extensions to detached homes, loft conversions, garage
                  conversions and garden rooms.
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
                Get your free Bromley quote
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
                Architectural drawing services in Bromley
              </h2>
              <p className="text-sm md:text-base text-slate-700">
                WEDRAWPLANS prepares full drawing packages for rear and side extensions,
                wrap extensions, loft conversions, garage conversions and outbuildings
                across the London Borough of Bromley.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We work across Bromley, Beckenham, Orpington, Chislehurst, Petts Wood,
                Hayes, West Wickham and surrounding areas, with drawings designed for
                semis, detached homes and bungalows on larger plots.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <Image
                src="/images/drawings.jpg"
                alt="Example of architectural drawings for a Bromley project"
                width={800}
                height={500}
                className="object-cover w-full h-48 md:h-56"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">
                  Clear drawings for suburban Bromley homes
                </h3>
                <p className="text-sm text-slate-700">
                  Detailed plans, elevations and sections that suit 1930s semis,
                  detached houses and bungalows, and help planners and builders see
                  exactly what is proposed.
                </p>
              </div>
            </div>
          </div>

          {/* AREAS + PROJECT TYPES */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Bromley areas we cover</h3>
              <Image
                src="/images/bromley-area.jpg"
                alt="Bromley residential street"
                width={800}
                height={500}
                className="rounded-xl object-cover mb-3"
              />
              <p className="text-sm text-slate-700">
                Architectural drawings for the whole borough of Bromley, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Bromley</li>
                  <li>Beckenham</li>
                  <li>Shortlands</li>
                  <li>West Wickham</li>
                  <li>Hayes</li>
                  <li>Keston</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Orpington</li>
                  <li>Chislehurst</li>
                  <li>Petts Wood</li>
                  <li>Biggin Hill</li>
                  <li>Farnborough</li>
                  <li>Local estates and cul de sacs</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Popular projects in Bromley</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Rear and wrap extensions</li>
                  <li>Side and side return extensions</li>
                  <li>Loft conversions and dormers</li>
                  <li>Hip to gable loft conversions</li>
                  <li>Two storey side and rear extensions</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Garage conversions</li>
                  <li>Outbuildings and garden rooms</li>
                  <li>Internal reconfiguration and knock throughs</li>
                  <li>Open plan kitchen and living spaces</li>
                  <li>Refurbishment and insulation upgrades</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PLANNING / PD */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Planning and permitted development in Bromley
            </h2>
            <p className="text-sm text-slate-700">
              Many Bromley homes have generous plots and good permitted development
              potential. Conservation areas, green belt and some sensitive roads can
              require more careful design and sometimes a full planning application.
              We confirm the correct approach at the start so there are no surprises.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold mb-2">Rear extensions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Typical depths around 3 to 4 metres under PD</li>
                  <li>Larger schemes via Prior Approval for deeper extensions</li>
                  <li>Impact on neighbours and gardens assessed carefully</li>
                  <li>We check similar approvals on nearby roads</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Loft conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Volume limits around 40 to 50 cubic metres</li>
                  <li>Front roof changes tightly controlled</li>
                  <li>Dormer size guided by roof and street context</li>
                  <li>Side windows usually obscure and high level</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Outbuildings and garages</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Garden rooms and studios under permitted development</li>
                  <li>Maximum heights and distances to boundaries apply</li>
                  <li>Garage conversions often allowed with modest changes</li>
                  <li>We design for comfort, storage and light</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PACKS */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Planning drawings for Bromley
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
                Building regulation drawings for Bromley
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
              Local planning knowledge for Bromley projects
            </h2>
            <p className="text-sm text-emerald-900">
              Bromley includes wide suburban roads, cul de sacs and rural edge
              locations. We design schemes that use space well, respect local character
              and add long term value to the property.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you help with large wrap extensions in Bromley?
                </h3>
                <p>
                  Yes. We regularly prepare drawings for wrap extensions, deeper rear
                  extensions and side extensions to semis and detached homes, including
                  planning and building regulation stages.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  How fast can you survey a property in Bromley?
                </h3>
                <p>
                  In most cases we can arrange the measured survey within forty eight
                  hours of instruction, subject to access.
                </p>
              </div>
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do you manage the planning submission to Bromley Council?
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
                Ready to start your Bromley project
              </h2>
              <p className="text-sm text-slate-300">
                Send us your address and a short description of the extension, loft,
                garage conversion or refurbishment you have in mind. We will review it
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
                Get your free Bromley quote
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
