import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";
import AreaTopHeader from "../../components/AreaTopHeader";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Greenwich";

export default function GreenwichAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Greenwich" });
  }

  function scrollToForm() {
    const el = document.getElementById("greenwich-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.wedrawplans.co.uk/areas/greenwich#business",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/greenwich",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK",
    },
    areaServed: [
      "Greenwich",
      "West Greenwich",
      "East Greenwich",
      "Blackheath borders",
      "Eltham",
      "Kidbrooke",
      "Charlton",
      "Woolwich",
      "Plumstead",
      "Abbey Wood",
      "Thamesmead",
    ],
    description:
      "Architectural drawing services in Greenwich for extensions, loft conversions, refurbishments, outbuildings and building regulation plans. Survey within 48 hours and full planning submission support.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Greenwich",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Greenwich can be carried out under permitted development. We confirm the correct route once we review your address and house type.",
        },
      },
      {
        "@type": "Question",
        name: "Is Greenwich strict with loft conversions and extensions",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Greenwich can be strict in conservation areas and on streets with strong character, especially around central Greenwich and Blackheath borders. Careful design and clear drawings are important.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Greenwich Council take to decide",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Greenwich Council",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Greenwich Council and respond to planning officer queries.",
        },
      },
    ],
  };

  const visibleFaq = [
    {
      q: "Do I need planning permission for a rear extension in Greenwich",
      a: "Not always. Many rear extensions in Greenwich can be carried out under permitted development. We confirm the correct route once we review your address and house type.",
    },
    {
      q: "Is Greenwich strict with loft conversions and extensions",
      a: "Greenwich can be strict in conservation areas and on streets with strong character, especially around central Greenwich and Blackheath borders. Careful design and clear drawings are important.",
    },
    {
      q: "How long does Greenwich Council take to decide",
      a: "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks.",
    },
    {
      q: "Do you manage the full application to Greenwich Council",
      a: "Yes. We prepare drawings, complete forms, upload documents, submit to Greenwich Council and respond to planning officer queries.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Greenwich | Extensions, Lofts, Building Regs
        </title>
        <meta
          name="description"
          content="Architectural drawings in Greenwich for extensions, loft conversions, refurbishments, outbuildings and building regulation packs. Fixed fees, clear scope, survey within 48 hours and full planning support."
        />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/areas/greenwich"
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

      <AreaTopHeader />

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        <main>
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Greenwich architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and refurbishments in Greenwich
                </h1>

                <p className="mt-2 text-[12px] font-semibold text-slate-800">
                  Local London designers • Fixed fee guaranteed • Council-ready
                  drawings
                </p>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and building regulation drawing
                  packages across the Royal Borough of Greenwich, including
                  Greenwich, Eltham, Woolwich, Plumstead, Abbey Wood and
                  Thamesmead. Fixed fees with a clear scope and fast
                  communication. Close to Greenwich and Woolwich Arsenal
                  stations, with projects also covering Eltham and Charlton
                  streets.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Measured survey within 48 hours</li>
                  <li>• Planning and permitted development advice</li>
                  <li>
                    • Conservation area awareness (Greenwich and Blackheath
                    borders)
                  </li>
                  <li>• Rear, side return and wrap around extensions</li>
                  <li>• Dormer lofts, hip to gable and roof alterations</li>
                  <li>• Full submission support to the council portal</li>
                </ul>

                <p className="mt-4 text-[13px] text-slate-700">
                  Recent projects in Greenwich include rear extensions, side
                  returns and loft conversions across SE3, SE7, SE10 and SE18.
                </p>

                <div className="mt-5 flex flex-wrap gap-3 items-center">
                  <button
                    onClick={scrollToForm}
                    type="button"
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                  >
                    Get a quick quote
                  </button>

                  <a
                    href={PHONE_LINK}
                    className="text-[13px] underline text-slate-800"
                  >
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="mt-3 text-[12px] text-slate-600">
                  Typical Greenwich projects include family kitchen extensions
                  in Eltham, loft conversions across Charlton and Plumstead, and
                  refurbishment layouts near Woolwich and Abbey Wood.
                </p>
              </div>

              <div id="greenwich-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                    Free fixed fee quote
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us your postcode and what you want to build. We will
                    reply with a clear fixed fee for your drawings.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-3 space-y-3 text-[13px]"
                  >
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">
                          Telephone
                        </label>
                        <input
                          name="phone"
                          required
                          type="tel"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Email</label>
                        <input
                          name="email"
                          required
                          type="email"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">
                        Greenwich postcode
                      </label>
                      <input
                        name="postcode"
                        required
                        placeholder="SE10 9AA"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                          !e.target.value && (e.target.placeholder = "SE10 9AA")
                        }
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">
                        Project type
                      </label>
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        <option>House extension</option>
                        <option>Loft conversion</option>
                        <option>Internal remodelling</option>
                        <option>New build house</option>
                        <option>Conversion to flats</option>
                        <option>Building regulation pack only</option>
                        <option>Other domestic project</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">
                        Brief description of your project
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear extension with rooflights and new open plan kitchen, or dormer loft conversion with ensuite."
                        className="w-full border border-slate-300 rounded bg-white px-2 py-2 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#64b7c4] py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get a fixed fee quote
                    </button>

                    <p className="text-[11px] text-slate-600 mt-2">
                      No obligation. Same-day response on most enquiries.
                    </p>

                    <p className="text-[11px] text-slate-500 mt-2">
                      We reply quickly with a clear fixed fee and next steps
                      based on your location, house type and goals.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="Greenwich" />

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Greenwich
                  </h2>

                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS prepares planning and building regulation
                    drawings for rear and side extensions, loft conversions,
                    refurbishments, internal reconfiguration and outbuildings
                    across the Royal Borough of Greenwich. We help homeowners
                    and small developers get clear drawings that support smooth
                    approvals and accurate builder pricing.
                  </p>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                    <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      How it works
                    </h3>
                    <ol className="mt-2 list-decimal pl-5 space-y-1 text-[13px] text-slate-700">
                      <li>Send your address, postcode and a short brief</li>
                      <li>
                        We confirm the safest route: permitted development, LDC
                        or planning
                      </li>
                      <li>Measured survey, then existing and proposed drawings</li>
                      <li>Submission support and revisions where needed</li>
                      <li>Upgrade to building regulations pack when ready to build</li>
                    </ol>
                  </div>

                  <div className="flex flex-wrap gap-3 items-center">
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                    >
                      Get a quick quote
                    </button>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
                    >
                      💬 Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
                  <Image
                    src="/images/drawings.jpg"
                    alt="Architectural drawings and planning support for Greenwich projects"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Clear drawings that reduce builder guesswork
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Plans, elevations and sections presented clearly, with
                      coordination notes for structure and building regulations
                      so the quote stage is smoother and the build stage has
                      fewer surprises.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Greenwich areas we cover
                  </h3>
                  <Image
                    src="/images/greenwich-area.jpg"
                    alt="Greenwich local area"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                  />
                  <p className="text-[13px] text-slate-700">
                    Architectural drawings across the whole borough, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Greenwich and West Greenwich</li>
                      <li>East Greenwich</li>
                      <li>Blackheath borders</li>
                      <li>Eltham</li>
                      <li>Kidbrooke</li>
                      <li>Charlton</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Woolwich</li>
                      <li>Plumstead</li>
                      <li>Abbey Wood</li>
                      <li>Thamesmead</li>
                      <li>River front settings</li>
                      <li>Local estates and streets</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Greenwich
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Rear and wrap around extensions</li>
                      <li>Side return kitchen extensions</li>
                      <li>Loft conversions and dormers</li>
                      <li>Hip to gable loft conversions</li>
                      <li>Knock through layouts</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Refurbishments and upgrades</li>
                      <li>Garden rooms and studios</li>
                      <li>Garage conversions</li>
                      <li>Small infill schemes</li>
                      <li>Light, access and storage improvements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <section className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Frequently asked questions in Greenwich
                </h2>

                <div className="mt-6 space-y-5">
                  {visibleFaq.map((item) => (
                    <div
                      key={item.q}
                      className="border-b border-slate-200 pb-5 last:border-b-0 last:pb-0"
                    >
                      <h3 className="text-[13px] font-semibold text-slate-900">
                        {item.q}
                      </h3>
                      <p className="mt-2 text-[13px] text-slate-700">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Ready to start your Greenwich project
                  </h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short brief. We will review it and
                    reply with a fixed fee and recommended route.
                  </p>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Prefer to speak. Call 020 3654 8508
                  </p>
                </div>
                <div className="flex flex-col space-y-2 text-[13px]">
                  <a
                    href={PHONE_LINK}
                    className="font-semibold text-emerald-300 underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    href="mailto:info@wedrawplans.com"
                    className="font-semibold text-emerald-300 underline"
                  >
                    info@wedrawplans.com
                  </a>
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-slate-900 shadow hover:bg-emerald-100"
                  >
                    Get a quick quote
                  </button>
                </div>
              </div>

              <div className="text-[12px] text-slate-600 pt-2">
                See also{" "}
                <a href="/extension-plans" className="underline">
                  extension plans
                </a>
                ,{" "}
                <a href="/loft-conversion-plans" className="underline">
                  loft conversion plans
                </a>{" "}
                and{" "}
                <a href="/" className="underline">
                  WEDRAWPLANS home page
                </a>
                .
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
