import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import AreaTopHeader from "../../components/AreaTopHeader";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Islington";

export default function IslingtonAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Islington" });
  }

  function scrollToForm() {
    const el = document.getElementById("islington-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.wedrawplans.co.uk/areas/islington#business",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/islington",
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
      "Newington Green (Islington side)",
      "Caledonian Road area",
    ],
    description:
      "Architectural drawing services in Islington for extensions, loft conversions, refurbishments, flat conversions and building regulation packs. Survey within 48 hours and full planning submission support.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Islington",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Some houses can extend under permitted development, but flats and many conservation area properties require full planning permission. We confirm the correct route once we review your address and house type.",
        },
      },
      {
        "@type": "Question",
        name: "Is Islington strict with loft conversions",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Islington can be strict, especially in conservation areas and streets with strong character. Roof alterations, dormer proportions and neighbour impact are often closely reviewed.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Islington Council take to decide",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications usually take around six to eight weeks after validation. Lawful Development Certificates normally take around four to six weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Islington Council",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Islington Council and respond to planning officer queries.",
        },
      },
    ],
  };

  const visibleFaq = [
    {
      q: "Do I need planning permission for a rear extension in Islington",
      a: "Not always. Some houses can extend under permitted development, but flats and many conservation area properties require full planning permission. We confirm the correct route once we review your address and house type.",
    },
    {
      q: "Is Islington strict with loft conversions",
      a: "Islington can be strict, especially in conservation areas and streets with strong character. Roof alterations, dormer proportions and neighbour impact are often closely reviewed.",
    },
    {
      q: "How long does Islington Council take to decide",
      a: "Householder planning applications usually take around six to eight weeks after validation. Lawful Development Certificates normally take around four to six weeks.",
    },
    {
      q: "Do you manage the full application to Islington Council",
      a: "Yes. We prepare drawings, complete forms, upload documents, submit to Islington Council and respond to planning officer queries.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Islington | Extensions, Lofts, Building Regs
        </title>
        <meta
          name="description"
          content="Architectural drawings in Islington for extensions, loft conversions, refurbishments, flat conversions and building regulation packs. Fixed fees, clear scope, survey within 48 hours and full planning support."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/islington" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        <AreaTopHeader />

        <main>
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Islington architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and conversions in Islington
                </h1>

                <p className="mt-2 text-[12px] font-semibold text-slate-800">
                  Local London designers • Fixed fee guaranteed • Council-ready drawings
                </p>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house extensions, loft conversions, flat
                  conversions and refurbishments across the London Borough of Islington. Fixed fees with clear scope
                  and fast communication. Close to Angel and Highbury stations, with projects also covering Canonbury,
                  Barnsbury and Holloway streets.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• Rear extensions, side infill and internal remodelling</li>
                  <li>• Loft conversions including rear dormers and mansards</li>
                  <li>• Flat conversions and layout re planning</li>
                  <li>• Planning drawings and building regulation packs</li>
                  <li>• Covering Angel, Highbury, Canonbury, Holloway, Archway and more</li>
                  <li>• Same day response on most enquiries</li>
                </ul>

                <p className="mt-4 text-[13px] text-slate-700">
                  Recent projects in Islington include rear extensions, dormer lofts and layout upgrades across N1, N5, N7 and EC1.
                </p>

                <div className="mt-5 flex flex-wrap gap-3 items-center">
                  <button
                    onClick={scrollToForm}
                    type="button"
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                  >
                    Get a quick quote
                  </button>

                  <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div id="islington-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                    Free fixed fee quote
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your property and what you plan to build. We will reply with a clear fixed fee for your drawings.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
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
                        <label className="text-[11px] font-medium">Telephone</label>
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
                      <label className="text-[11px] font-medium">Islington postcode</label>
                      <input
                        name="postcode"
                        required
                        placeholder="N1 8XX"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => !e.target.value && (e.target.placeholder = "N1 8XX")}
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Project type</label>
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
                      <label className="text-[11px] font-medium">Brief description of your project</label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="For example: rear extension to a terrace with open plan kitchen, plus a rear dormer loft room."
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
                      Typical Islington projects include rear extensions, side infill extensions, loft conversions, flat conversions and refurbishment drawings.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="Islington" />

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Islington
                  </h2>

                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS provide full drawing packages for rear and side extensions, loft conversions, internal alterations,
                    outbuildings, flat conversions and small infill developments across the borough of Islington.
                  </p>

                  <p className="text-[13px] text-slate-700">
                    We work throughout Angel, Upper Street, Highbury, Canonbury, Barnsbury, Holloway, Archway, Finsbury Park
                    (Islington side), and the Old Street and City Road area.
                  </p>

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
                    alt="Example of architectural drawings for an Islington extension"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Clear drawings for tight Islington sites
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Detailed plans, elevations and sections with coordination notes for structure, fire safety and building regulations,
                      so quotes are clearer and the build runs smoother.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Islington areas we cover
                  </h3>
                  <Image
                    src="/images/islington-area.jpg"
                    alt="Islington local area"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                  />
                  <p className="text-[13px] text-slate-700">
                    Drawings across the whole borough, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Angel and Upper Street</li>
                      <li>Highbury and Highbury Fields</li>
                      <li>Canonbury</li>
                      <li>Barnsbury</li>
                      <li>Caledonian Road area</li>
                      <li>Newington Green (Islington side)</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Holloway</li>
                      <li>Archway</li>
                      <li>Finsbury Park (Islington side)</li>
                      <li>Tufnell Park borders</li>
                      <li>Old Street and City Road</li>
                      <li>Local estates and streets</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Islington
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Rear and side extensions to terraces</li>
                      <li>Side infill and wrap extensions</li>
                      <li>Loft conversions and mansards</li>
                      <li>Internal remodelling and knock throughs</li>
                      <li>Flat and maisonette conversions</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Roof terraces and access stairs</li>
                      <li>Garden studios and outbuildings</li>
                      <li>Change of use layouts</li>
                      <li>Refurbishment and compliance upgrades</li>
                      <li>Small infill schemes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <section className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Frequently asked questions in Islington
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
                    Ready to start your Islington project
                  </h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short brief. We review and reply with a fixed fee and recommended route.
                  </p>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Prefer to speak. Call 020 3654 8508
                  </p>
                </div>
                <div className="flex flex-col space-y-2 text-[13px]">
                  <a href={PHONE_LINK} className="font-semibold text-emerald-300 underline">
                    {PHONE_DISPLAY}
                  </a>
                  <a href="mailto:info@wedrawplans.com" className="font-semibold text-emerald-300 underline">
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
                <a href="/new-build-plans" className="underline">
                  new build plans
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
