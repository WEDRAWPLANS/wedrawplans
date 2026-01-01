import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "../components/HeroSlider";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL_LINK = "mailto:info@wedrawplans.com";

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
      "New North Road area",
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
            "Islington can be strict, especially in conservation areas and streets with strong character and consistent rear building lines. Strong drawings and a clear planning case are important.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Islington Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates often take around four to six weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Islington Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete the forms, upload documents, submit to Islington Council and respond to planning officer queries.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with flat conversions in Islington?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We design layouts that meet space standards and consider daylight, outlook, access and amenity so the proposal is easier to assess.",
        },
      },
    ],
  };

  const areas = [
    "Angel",
    "Upper Street",
    "Highbury",
    "Highbury Fields",
    "Canonbury",
    "Barnsbury",
    "Holloway",
    "Archway",
    "Finsbury Park (Islington side)",
    "Old Street",
    "City Road",
    "New North Road",
  ];

  const services = [
    {
      title: "Planning drawings",
      items: [
        "Existing and proposed floor plans",
        "Existing and proposed elevations",
        "Sections through key spaces",
        "Roof and terrace layouts",
        "Block plan and location plan",
        "Design and heritage statements where required",
      ],
    },
    {
      title: "Building regulations drawings",
      items: [
        "Structural layouts and engineer coordination",
        "Fire safety notes and escape strategy",
        "Thermal build ups and insulation specifications",
        "Acoustic strategy where relevant",
        "Ventilation and extract layouts",
        "Drainage notes and builder coordination",
      ],
    },
    {
      title: "Extensions and lofts",
      items: [
        "Rear extensions and side returns",
        "Wraparound extensions",
        "Loft conversions and dormers",
        "Mansards where appropriate",
        "Internal reconfiguration",
        "Party wall awareness for shared walls",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          Architectural Drawings Islington | Extensions, Lofts, Conversions |
          WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Islington for extensions, loft conversions, flat conversions and building regulation plans. Measured survey within 48 hours, clear drawings and full planning support with Islington Council."
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
        {/* BARNET STYLE HERO (HeroSlider + right hand quote card) */}
        <section className="relative">
          <HeroSlider />

          <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-16">
            <div className="grid lg:grid-cols-[1.35fr,0.9fr] gap-10 items-start">
              {/* Left hero copy */}
              <div className="space-y-5">
                <p className="text-xs font-semibold tracking-[0.22em] text-slate-600">
                  WEDRAWPLANS • ISLINGTON
                </p>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                  Architectural Drawings in Islington
                </h1>

                <p className="text-sm md:text-base text-slate-700 max-w-2xl">
                  Architectural drawing services in Islington for house
                  extensions, loft conversions, flat conversions, refurbishments
                  and building regulations. We work to Islington Council guidance
                  and current Building Regulations.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Measured survey within 48 hours</li>
                    <li>Planning and permitted development advice</li>
                    <li>Fixed quote with clear scope</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Clear plans, elevations and sections</li>
                    <li>Building regulation packages for 2025 standards</li>
                    <li>Full submission support to Islington Council</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="/#quote"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-7 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-800 transition"
                  >
                    Get your free quote
                  </a>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 border border-slate-200 hover:bg-slate-50 transition"
                  >
                    View pricing
                  </Link>
                </div>

                <p className="text-xs text-slate-500">
                  Typical Islington projects include rear and side extensions to
                  terraces in Highbury, Canonbury and Barnsbury, loft conversions
                  around Holloway and Archway, and flat conversions near Angel,
                  Old Street and the City Road corridor.
                </p>
              </div>

              {/* Right hero contact / quote card (Barnet format) */}
              <aside className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
                <div className="relative w-full h-44">
                  <Image
                    src="/images/drawings.jpg"
                    alt="Architectural drawings example"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 420px"
                    priority
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                      FAST CONTACT
                    </p>
                    <h2 className="text-lg font-semibold text-slate-900 mt-1">
                      Talk to WEDRAWPLANS
                    </h2>
                    <p className="text-sm text-slate-600 mt-2">
                      Send your address and a short description. We respond fast
                      and keep everything simple.
                    </p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <a
                      href={PHONE_LINK}
                      className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 hover:bg-slate-50 transition"
                    >
                      <span className="text-slate-600">Phone</span>
                      <span className="font-semibold text-slate-900">
                        {PHONE_DISPLAY}
                      </span>
                    </a>

                    <a
                      href={EMAIL_LINK}
                      className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 hover:bg-slate-50 transition"
                    >
                      <span className="text-slate-600">Email</span>
                      <span className="font-semibold text-slate-900">
                        info@wedrawplans.com
                      </span>
                    </a>
                  </div>

                  <a
                    href="/#quote"
                    className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-950 transition"
                  >
                    Get your free quote
                  </a>

                  <p className="text-xs text-slate-500">
                    Serving Islington and nearby areas across North and Central
                    London.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* BARNET STYLE SECTION STACK */}
        <section className="mx-auto max-w-6xl px-6 pb-16 space-y-14">
          {/* Trust / image + copy row */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
              <div className="relative w-full h-56 md:h-72">
                <Image
                  src="/images/islington-area.jpg"
                  alt="Islington area"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Clear drawings for tight Islington sites
                </h3>
                <p className="text-sm text-slate-700 mt-2">
                  Islington sites often involve tight gardens, shared walls and
                  sensitive neighbour relationships. We produce clean plans,
                  elevations and sections so planners and Building Control can
                  assess quickly.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">
                What we do in Islington
              </h2>
              <p className="text-sm md:text-base text-slate-700">
                We prepare full drawing packages for rear and side extensions,
                loft conversions, internal reconfiguration, flat conversions,
                roof terraces and small infill development.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <div className="rounded-2xl bg-white border border-slate-200 p-5">
                  <h3 className="font-semibold text-slate-900">
                    Planning ready
                  </h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Existing and proposed drawings</li>
                    <li>Location and block plans</li>
                    <li>Design statements if required</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 p-5">
                  <h3 className="font-semibold text-slate-900">
                    Build ready
                  </h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Building regulations pack</li>
                    <li>Insulation and build ups</li>
                    <li>Coordination with engineers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Areas covered chips */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              Islington areas we cover
            </h2>
            <p className="text-sm text-slate-700 mt-2">
              We cover the whole borough and nearby streets, including:
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {areas.map((a) => (
                <span
                  key={a}
                  className="text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Service cards in Barnet style */}
          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-slate-700">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* PD and planning guidance (Barnet format: 3 mini cards) */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              Permitted development and planning in Islington
            </h2>
            <p className="text-sm text-slate-700">
              Many houses can use permitted development, but flats and many
              conservation areas need full planning permission. We confirm the
              best route at the start.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900">Rear extensions</h3>
                <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-slate-700">
                  <li>Often 3 m on terraces, 4 m on semis</li>
                  <li>Height and boundary rules still apply</li>
                  <li>Deeper schemes often need planning</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900">Loft conversions</h3>
                <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-slate-700">
                  <li>Volume limits typically 40 to 50 cubic metres</li>
                  <li>Front roof changes are heavily restricted</li>
                  <li>Conservation area review is stricter</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900">
                  Flats and maisonettes
                </h3>
                <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-slate-700">
                  <li>No permitted development rights</li>
                  <li>Planning permission is required</li>
                  <li>Daylight, outlook and amenity are key</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ in Barnet style */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">FAQs</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900">
                  How fast can you survey in Islington
                </h3>
                <p className="text-sm text-slate-700 mt-2">
                  In most cases we can book a measured survey within forty eight
                  hours of instruction, subject to access.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900">
                  Do you handle the planning submission
                </h3>
                <p className="text-sm text-slate-700 mt-2">
                  Yes. We manage the full submission and respond to any planner
                  comments or requests for clarification.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900">
                  Can you coordinate structural calculations
                </h3>
                <p className="text-sm text-slate-700 mt-2">
                  Yes. We work with structural engineers so beams and load
                  bearing elements are designed and clearly shown on the plans.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900">
                  Are you experienced with conservation areas
                </h3>
                <p className="text-sm text-slate-700 mt-2">
                  Yes. We prepare drawings and supporting information that fits
                  conservation area expectations and street character.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA banner (Barnet style) */}
          <div className="rounded-2xl bg-slate-900 text-white p-7 md:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">
                Ready to start your Islington project
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl">
                Send your address and a short description of the extension, loft
                or conversion. We review it and provide a clear fixed quote.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a
                href="/#quote"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-900 hover:bg-emerald-400 transition"
              >
                Get your free quote
              </a>
            </div>
          </div>

          {/* Internal links (Barnet style) */}
          <div className="text-xs text-slate-500">
            <p>
              See also{" "}
              <Link href="/extension-plans" className="underline text-emerald-700">
                House extension drawings
              </Link>
              ,{" "}
              <Link
                href="/loft-conversion-plans"
                className="underline text-emerald-700"
              >
                Loft conversion drawings
              </Link>{" "}
              and{" "}
              <Link href="/" className="underline text-emerald-700">
                WEDRAWPLANS home page
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
