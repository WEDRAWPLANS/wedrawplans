import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Wandsworth";

export default function Wandsworth() {
  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/wandsworth",
    telephone: "+44 20 3654 8508",
    email: EMAIL,
    image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK",
    },
    areaServed: [
      "Wandsworth",
      "Wandsworth Town",
      "Earlsfield",
      "Southfields",
      "Putney borders",
      "Balham",
      "Tooting",
      "Furzedown",
      "Clapham Junction",
      "Battersea (Wandsworth side)",
      "Nine Elms borders",
    ],
    description:
      "Architectural drawing services in Wandsworth for extensions, loft conversions, refurbishments, outbuildings and building regulation plans.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Wandsworth?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Wandsworth can be completed under permitted development, depending on the house type, constraints and any Article 4 directions. We confirm the correct route after a quick review of your address.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wandsworth strict with loft conversions and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Wandsworth can be strict in conservation areas and streets with consistent rear building lines. Design quality, neighbour impact and detailing are closely reviewed, particularly around Balham, Earlsfield, Wandsworth Town and Putney borders.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Wandsworth Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications are typically decided within 8 weeks from validation. Lawful Development Certificates are often faster, commonly around 6 to 8 weeks, depending on workload and validation.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Wandsworth Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Wandsworth Council and respond to planning officer queries through to decision.",
        },
      },
    ],
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Wandsworth" });
  }

  function scrollToForm() {
    const el = document.getElementById("wandsworth-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>
          Architectural Drawings Wandsworth | Extensions, Lofts, Conversions | WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Wandsworth for extensions, loft conversions, refurbishments, outbuildings and building regulation plans. Measured survey within 48 hours, clear drawings and full planning support with Wandsworth Council."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/wandsworth" />
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
              alt="Architectural drawings for Wandsworth extensions and lofts"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-16 space-y-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-100">
              WEDRAWPLANS • WANDSWORTH
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Architectural Drawings in Wandsworth
            </h1>

            <p className="max-w-3xl text-sm md:text-base text-emerald-50">
              Architectural drawing services in Wandsworth for house extensions, loft
              conversions, refurbishments, outbuildings and small new build homes. All
              drawings are prepared to Wandsworth Council guidance and current Building
              Regulations.
            </p>

            <div className="grid md:grid-cols-[2fr,1.2fr] gap-8 items-start">
              <div className="space-y-3 text-sm">
                <div className="grid sm:grid-cols-2 gap-3">
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Measured survey within 48 hours</li>
                    <li>Planning and permitted development advice</li>
                    <li>Support with extensions and lofts</li>
                  </ul>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Drawings tailored to Wandsworth policies</li>
                    <li>Building regulation packages for 2025 standards</li>
                    <li>Fixed quotes with clear scope of work</li>
                  </ul>
                </div>

                <p className="mt-2 text-xs text-emerald-100">
                  Typical Wandsworth projects include rear and wrap extensions in
                  Earlsfield and Balham, loft conversions in Tooting and Furzedown, and
                  refurbishments and internal alterations around Wandsworth Town and
                  Clapham Junction.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href={PHONE_LINK}
                    className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/15 transition"
                  >
                    Call {PHONE_DISPLAY}
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/15 transition"
                    rel="noreferrer"
                    target="_blank"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={EMAIL_LINK}
                    className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/15 transition"
                  >
                    Email
                  </a>
                </div>
              </div>

              <div className="space-y-2 text-sm text-right md:text-left">
                <p className="text-xs text-emerald-100">Talk to us</p>
                <p className="text-sm text-white">
                  Phone{" "}
                  <a href={PHONE_LINK} className="font-semibold text-white underline">
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p className="text-sm text-white">
                  Email{" "}
                  <a href={EMAIL_LINK} className="font-semibold text-white underline">
                    {EMAIL}
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-emerald-900 shadow-lg shadow-emerald-900/30 hover:bg-emerald-50 transition"
              >
                Get your free quote
              </button>
              <a
                href="/#quote"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white/10 px-8 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
              >
                Go to main quote form
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
                Architectural drawing services in Wandsworth
              </h2>
              <p className="text-sm md:text-base text-slate-700">
                WEDRAWPLANS prepares full drawing packages for rear and side extensions,
                loft conversions, refurbishments, internal reconfiguration and
                outbuildings across the borough of Wandsworth.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We work throughout Wandsworth Town, Earlsfield, Southfields, Balham,
                Tooting, Furzedown, Clapham Junction, Battersea (Wandsworth side) and
                Putney borders.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <Image
                src="/images/drawings.jpg"
                alt="Example of architectural drawings for a Wandsworth project"
                width={800}
                height={500}
                className="object-cover w-full h-48 md:h-56"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">
                  Clear drawings for high value South West London homes
                </h3>
                <p className="text-sm text-slate-700">
                  Detailed plans, elevations and sections coordinated with structural
                  design, tailored to Victorian and Edwardian terraces, semis and
                  larger detached homes common in Wandsworth.
                </p>
              </div>
            </div>
          </div>

          {/* AREAS COVERED + PROJECT TYPES */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Wandsworth areas we cover</h3>
              <Image
                src="/images/wandsworth-area.jpg"
                alt="Wandsworth local high street and residential area"
                width={800}
                height={500}
                className="rounded-xl object-cover mb-3"
              />
              <p className="text-sm text-slate-700">
                Architectural drawings for the whole borough of Wandsworth, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Wandsworth Town</li>
                  <li>Earlsfield</li>
                  <li>Southfields</li>
                  <li>Balham</li>
                  <li>Tooting</li>
                  <li>Furzedown</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Clapham Junction</li>
                  <li>Battersea (Wandsworth side)</li>
                  <li>Nine Elms fringe</li>
                  <li>Putney borders</li>
                  <li>Riverside streets</li>
                  <li>Park side streets</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Popular projects in Wandsworth</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Large rear and wrap extensions</li>
                  <li>Side return and side extensions</li>
                  <li>Loft conversions and dormers</li>
                  <li>Hip to gable loft conversions</li>
                  <li>Internal reconfiguration</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Basement and lower ground alterations</li>
                  <li>Garden rooms and studios</li>
                  <li>Garage conversions</li>
                  <li>High spec refurbishments</li>
                  <li>Small infill and mews schemes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PLANNING / PD */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Planning and permitted development in Wandsworth
            </h2>
            <p className="text-sm text-slate-700">
              Many houses in Wandsworth benefit from permitted development rights, but
              conservation areas and local design guidance can influence what is
              acceptable. We confirm the correct route for your property at the start.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold mb-2">Rear extensions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Depth and height assessed against neighbours</li>
                  <li>Daylight and overshadowing reviewed early</li>
                  <li>We check street context and local precedents</li>
                  <li>Neighbours and party wall considerations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Loft conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Dormer size guided by roof form and style</li>
                  <li>Front roof changes are tightly controlled</li>
                  <li>Roof terraces often need strong justification</li>
                  <li>Stair headroom and fire escape designed properly</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Refurbishment and upgrades</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Improved layouts for family living</li>
                  <li>Better light, storage and circulation</li>
                  <li>Energy and insulation upgrades</li>
                  <li>Structural knock throughs coordinated</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PLANNING & BUILDING REGS PACKS */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">Planning drawings for Wandsworth</h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Existing and proposed floor plans</li>
                <li>Existing and proposed elevations</li>
                <li>Sections through key areas</li>
                <li>Roof and terrace layouts</li>
                <li>Block plan and location plan</li>
                <li>Design statement where required</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">
                Building regulation drawings for Wandsworth
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Structural layouts and engineer coordination</li>
                <li>Fire safety notes and escape routes</li>
                <li>Thermal build ups and insulation specifications</li>
                <li>Acoustic performance and separating elements</li>
                <li>Ventilation and extracts</li>
                <li>Drainage layouts and contractor notes</li>
              </ul>
            </div>
          </div>

          {/* LOCAL KNOWLEDGE */}
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-emerald-900">
              Local planning knowledge for Wandsworth projects
            </h2>
            <p className="text-sm text-emerald-900">
              Wandsworth contains many high value terraces and semis where quality of
              design, neighbour impact and detailing are closely reviewed. We design
              schemes that respect local character while delivering the extra space and
              light clients want.
            </p>
          </div>

          {/* LOCAL QUOTE FORM (BOROUGH SPECIFIC) */}
          <div
            id="wandsworth-quote"
            className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold">Request a free quote</h2>
                <p className="text-sm text-slate-600">
                  Tell us the address and what you want to build. We reply fast with a
                  clear fixed quote.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition"
                >
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-200 transition"
                  rel="noreferrer"
                  target="_blank"
                >
                  WhatsApp
                </a>
                <a
                  href={EMAIL_LINK}
                  className="inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-200 transition"
                >
                  Email
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <input type="hidden" name="borough" value="Wandsworth" />

              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Full name
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid gap-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Phone
                  </label>
                  <input
                    name="phone"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="07..."
                  />
                </div>

                <div className="grid gap-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Property postcode
                  </label>
                  <input
                    name="postcode"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="SW..."
                  />
                </div>
              </div>

              <div className="grid gap-1">
                <label className="text-xs font-semibold text-slate-700">
                  Project address
                </label>
                <input
                  name="address"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                  placeholder="House number, street, Wandsworth"
                />
              </div>

              <div className="grid gap-1">
                <label className="text-xs font-semibold text-slate-700">
                  What do you want to build
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                  placeholder="Rear extension, side return, loft conversion, refurbishment, outbuilding, new layout, etc."
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-900 px-8 py-3 text-sm font-semibold text-white hover:bg-emerald-800 transition"
              >
                Send request
              </button>

              <p className="text-xs text-slate-500">
                By submitting, you agree we can contact you about your project. We do
                not share your details with third parties.
              </p>
            </form>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you help with high specification refurbishments?
                </h3>
                <p>
                  Yes. We prepare detailed plans and technical information for high end
                  refurbishments in Wandsworth, Balham and Clapham Junction.
                </p>
              </div>

              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">How fast can you survey in Wandsworth?</h3>
                <p>
                  In most cases we can arrange the measured survey within forty eight
                  hours of instruction, subject to access.
                </p>
              </div>

              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do you manage planning submission to Wandsworth Council?
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
                  Yes. We coordinate with structural engineers so beams, posts and load
                  bearing elements are clearly designed and shown on the plans.
                </p>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Ready to start your project</h2>
              <p className="text-sm text-slate-300">
                Send your address and a short description of the extension, loft,
                refurbishment or new layout. We review it and provide a fixed quote the
                same day.
              </p>
            </div>

            <div className="flex flex-col space-y-1 text-sm">
              <a href={PHONE_LINK} className="font-semibold text-emerald-300 underline">
                {PHONE_DISPLAY}
              </a>
              <a href={EMAIL_LINK} className="font-semibold text-emerald-300 underline">
                {EMAIL}
              </a>
              <a
                href={WHATSAPP_LINK}
                className="font-semibold text-emerald-300 underline"
                rel="noreferrer"
                target="_blank"
              >
                WhatsApp us
              </a>
              <button
                type="button"
                onClick={scrollToForm}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-emerald-900 shadow hover:bg-emerald-100"
              >
                Get your free quote
              </button>
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
