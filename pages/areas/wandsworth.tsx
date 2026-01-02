import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL_DISPLAY = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Wandsworth";

export default function WandsworthAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Wandsworth" });
  }

  function scrollToForm() {
    const el = document.getElementById("wandsworth-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/wandsworth",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "GB",
    },
    areaServed: [
      "Wandsworth",
      "Wandsworth Town",
      "Earlsfield",
      "Southfields",
      "Balham",
      "Tooting",
      "Furzedown",
      "Clapham Junction",
      "Battersea",
      "Nine Elms",
      "Putney",
    ],
    description:
      "Architectural drawing services in Wandsworth for extensions, loft conversions, refurbishments, outbuildings and building regulation plans. Fixed fees, clear communication, and initial survey within 48 hours.",
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
            "Not always. Many rear extensions can be carried out under permitted development. We confirm the correct route after we review your address and house type, plus any constraints such as conservation areas or Article 4 directions.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wandsworth strict with loft conversions and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Wandsworth can be detailed in conservation areas and streets with consistent character. Good drawings, careful massing, and a clear planning case usually lead to a smoother decision.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Wandsworth Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications typically take around 8 weeks after validation. Lawful Development Certificates often take around 6 to 8 weeks depending on workload and validation speed.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Wandsworth Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare the drawings, complete the forms, upload documents, submit the application, and respond to planning officer queries through to decision.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Wandsworth | Extensions, Lofts, Planning
          Applications | WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Wandsworth for extensions, loft conversions, refurbishments, outbuildings and building regulation plans. Measured survey within 48 hours, clear drawings and full planning support."
        />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/areas/wandsworth"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Architectural Drawings in Wandsworth | WEDRAWPLANS"
        />
        <meta
          property="og:description"
          content="Extensions, loft conversions, refurbishments and building regulation drawings in Wandsworth. Measured survey within 48 hours and full planning submission support."
        />
        <meta
          property="og:url"
          content="https://www.wedrawplans.co.uk/areas/wandsworth"
        />
        <meta
          property="og:image"
          content="https://www.wedrawplans.co.uk/images/drawings.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Architectural Drawings in Wandsworth | WEDRAWPLANS"
        />
        <meta
          name="twitter:description"
          content="Extensions, lofts, refurbishments and building regs drawings in Wandsworth. Survey within 48 hours."
        />
        <meta
          name="twitter:image"
          content="https://www.wedrawplans.co.uk/images/drawings.jpg"
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
              Architectural drawing services in Wandsworth for house extensions,
              loft conversions, refurbishments, outbuildings and small new build
              homes. All drawings are prepared to local guidance and current
              Building Regulations.
            </p>

            <div className="grid md:grid-cols-[2fr,1.2fr] gap-8 items-start">
              <div className="space-y-3 text-sm">
                <div className="grid sm:grid-cols-2 gap-3">
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Measured survey within 48 hours</li>
                    <li>Planning and permitted development advice</li>
                    <li>Full planning and lawful development submissions</li>
                  </ul>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Drawings tailored to Wandsworth policies</li>
                    <li>Building regulation packages for 2025 standards</li>
                    <li>Fixed quotes with clear scope of work</li>
                  </ul>
                </div>

                <p className="mt-2 text-xs text-emerald-100">
                  Typical projects include rear and wrap extensions in Earlsfield
                  and Balham, loft conversions in Tooting and Furzedown, and
                  refurbishments near Wandsworth Town and Clapham Junction.
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
                  <a
                    href={PHONE_LINK}
                    className="font-semibold text-white underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p className="text-sm text-white">
                  Email{" "}
                  <a
                    href={EMAIL_LINK}
                    className="font-semibold text-white underline"
                  >
                    {EMAIL_DISPLAY}
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
                WEDRAWPLANS prepares full drawing packages for rear and side
                extensions, loft conversions, refurbishments, internal
                reconfiguration and outbuildings across the borough of
                Wandsworth.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We work throughout Wandsworth Town, Earlsfield, Southfields,
                Balham, Tooting, Furzedown, Clapham Junction, Battersea and the
                Nine Elms fringe, plus Putney borders.
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
                  Clear drawings focused on planning and Building Control
                </h3>
                <p className="text-sm text-slate-700">
                  Detailed floor plans, elevations, sections and notes coordinated
                  with structural design so that the council and your builder can
                  work from a single, accurate set of plans.
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
                Architectural drawings for the whole borough of Wandsworth,
                including:
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
                  <li>Battersea</li>
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
                  <li>Rear and wrap extensions</li>
                  <li>Side return extensions</li>
                  <li>Loft conversions and dormers</li>
                  <li>Hip to gable loft conversions</li>
                  <li>Internal reconfiguration</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Basement and lower ground works</li>
                  <li>Garden rooms and studios</li>
                  <li>Garage conversions</li>
                  <li>High specification refurbishments</li>
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
              Many houses in Wandsworth benefit from permitted development rights,
              but conservation areas and local design guidance can influence what
              is acceptable. We confirm the correct route for your property at the
              start.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold mb-2">Rear extensions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Depth and height assessed against neighbours</li>
                  <li>Daylight and overshadowing reviewed early</li>
                  <li>Street context and local precedents checked</li>
                  <li>Party wall considerations discussed</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Loft conversions</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Dormer size guided by roof form and style</li>
                  <li>Front roof changes are tightly controlled</li>
                  <li>Roof terraces often need a strong case</li>
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

          {/* PACKS */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
              <h3 className="text-lg font-semibold">Planning drawings for Wandsworth</h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Existing and proposed floor plans</li>
                <li>Existing and proposed elevations</li>
                <li>Sections through key areas</li>
                <li>Roof layouts and key details</li>
                <li>Block plan and location plan</li>
                <li>Design statements where required</li>
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
                <li>Ventilation and extract positions</li>
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
              Wandsworth includes high value terraces and family homes where
              design quality, neighbour impact and detailing are reviewed closely.
              We design schemes that respect local character while delivering
              extra space, light and usability.
            </p>
          </div>

          {/* LOCAL QUOTE FORM */}
          <div
            id="wandsworth-quote"
            className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold">Request a free quote</h2>
                <p className="text-sm text-slate-600">
                  Tell us the address and what you want to build. We reply fast
                  with a clear fixed quote.
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
                By submitting, you agree we can contact you about your project.
                We do not share your details with third parties.
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
                  Yes. We prepare detailed plans and technical information for
                  high specification refurbishments across Wandsworth.
                </p>
              </div>

              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">How fast can you survey in Wandsworth?</h3>
                <p>
                  In many cases we can arrange the measured survey within 48
                  hours of instruction, subject to access.
                </p>
              </div>

              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Do you manage planning submission to Wandsworth Council?
                </h3>
                <p>
                  Yes. We manage the full application, upload documents and
                  respond to planning officer comments through to decision.
                </p>
              </div>

              <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                <h3 className="font-semibold">
                  Can you coordinate structural calculations?
                </h3>
                <p>
                  Yes. We coordinate with structural engineers so beams, posts
                  and load bearing elements are designed and shown clearly on
                  the plans.
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
                refurbishment or new layout. We review it and provide a fixed
                quote the same day.
              </p>
            </div>

            <div className="flex flex-col space-y-1 text-sm">
              <a href={PHONE_LINK} className="font-semibold text-emerald-300 underline">
                {PHONE_DISPLAY}
              </a>
              <a href={EMAIL_LINK} className="font-semibold text-emerald-300 underline">
                {EMAIL_DISPLAY}
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
