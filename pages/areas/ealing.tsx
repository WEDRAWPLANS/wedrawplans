import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";
import AreaTopHeader from "../../components/AreaTopHeader";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Ealing";

export default function EalingAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Ealing" });
  }

  function scrollToForm() {
    const el = document.getElementById("ealing-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/ealing",
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
      "Ealing",
      "Ealing Broadway",
      "West Ealing",
      "Northfields",
      "Hanwell",
      "Acton",
      "Southall",
      "Greenford",
      "Perivale",
      "Northolt",
    ],
    description:
      "Architectural drawing services in Ealing for extensions, loft conversions, refurbishments and building regulation plans.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Ealing?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Ealing can be carried out under permitted development. We confirm the correct route once we review your address and house type.",
        },
      },
      {
        "@type": "Question",
        name: "Is Ealing strict with loft conversions and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Ealing can be strict in conservation areas and on some streets with strong character. Clear drawings and a good planning case are important.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Ealing Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Ealing Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, submit applications and respond to planning officer queries.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
      <Head>
        <title>Architectural Drawings in Ealing | Extensions, Lofts, New Builds</title>
        <meta
          name="description"
          content="Architectural drawing services in Ealing for extensions, loft conversions, refurbishments and building regulation plans."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/ealing" />
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

      <main>
        <section className="bg-[#fdf8f3] border-b border-slate-200">
          <div className="mx-auto max-w-5xl px-4 py-10 grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                Ealing architectural drawings
              </p>

              <h1 className="mt-2 text-[24px] font-semibold uppercase leading-snug tracking-[0.14em]">
                Plans for extensions and lofts in Ealing
              </h1>

              <p className="mt-2 text-[12px] font-medium text-slate-700">
                Local London designers • Fixed fee guaranteed • Council-ready drawings
              </p>

              <p className="mt-3 text-[13px] text-slate-700">
                We regularly work near Ealing Broadway Station, West Ealing Station, Acton, Hanwell and surrounding
                residential streets.
              </p>

              <p className="mt-3 text-[13px] text-slate-700">
                Recent projects in Ealing include rear extensions, side returns and loft conversions across Ealing Broadway,
                Acton, Hanwell and Southall.
              </p>

              <div className="mt-5 flex flex-wrap gap-3 items-center">
                <button
                  onClick={scrollToForm}
                  type="button"
                  className="rounded-full bg-[#64b7c4] px-6 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Get a quick quote
                </button>

                <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                  Or call {PHONE_DISPLAY}
                </a>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-[170px] w-full">
                  <Image
                    src="/images/drawings.jpg"
                    alt="Architectural drawings and planning packs in Ealing"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4 text-[12px] text-slate-600">
                  Planning drawings, elevations and building regulation packs for homes across Ealing.
                </div>
              </div>
            </div>

            <div id="ealing-quote" className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                Free fixed fee quote
              </h2>

              <p className="mt-1 text-[12px] text-slate-600">
                Tell us a little about your property and what you plan to build. We will reply with a clear fixed fee for your drawings.
              </p>

              <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-[13px]">
                <input
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full border-b border-slate-300 bg-transparent py-1.5 outline-none focus:border-[#64b7c4]"
                />
                <input
                  name="phone"
                  required
                  placeholder="Telephone"
                  className="w-full border-b border-slate-300 bg-transparent py-1.5 outline-none focus:border-[#64b7c4]"
                />
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-slate-300 bg-transparent py-1.5 outline-none focus:border-[#64b7c4]"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#64b7c4] py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.2em] hover:bg-[#4da4b4]"
                >
                  Get a fixed fee quote
                </button>
                <p className="text-[11px] text-slate-500 text-center">
                  No obligation. Same-day response on most enquiries.
                </p>
              </form>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  <span>💬</span>
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-[13px] font-semibold text-white shadow-sm hover:bg-slate-800"
                >
                  Review my details
                </button>
              </div>
            </div>
          </div>
        </section>

        <ServiceInternalLinks boroughName="Ealing" />

        <section className="bg-white border-b border-slate-200 py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Areas we cover in Ealing
                </h3>
                <p className="text-[13px] text-slate-700">
                  We work across Ealing Broadway, West Ealing, Northfields, Hanwell, Acton, Southall, Greenford, Perivale and Northolt.
                </p>
                <div className="relative h-44 w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/hero.jpg"
                    alt="Home extension style project"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Drawings builders can price from
                </h3>
                <p className="text-[13px] text-slate-700">
                  Clear plans, elevations, sections and notes, coordinated with structural design so builders and inspectors have what they need.
                </p>
                <div className="relative h-44 w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/drawings.jpg"
                    alt="Example of architectural drawings"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-[18px] font-semibold uppercase">
                Frequently asked questions in Ealing
              </h2>

              <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                  <h3 className="font-semibold text-slate-900">
                    Do I need planning permission for a rear extension in Ealing?
                  </h3>
                  <p>
                    Not always. Many rear extensions in Ealing can be carried out under permitted development. We confirm the correct route once we review your address and house type.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                  <h3 className="font-semibold text-slate-900">
                    Is Ealing strict with loft conversions and extensions?
                  </h3>
                  <p>
                    Ealing can be strict in conservation areas and on some streets with strong character. Clear drawings and a good planning case are important.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                  <h3 className="font-semibold text-slate-900">
                    How long does Ealing Council take to decide?
                  </h3>
                  <p>
                    Householder planning applications normally take six to eight weeks after validation.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                  <h3 className="font-semibold text-slate-900">
                    Do you manage the full application to Ealing Council?
                  </h3>
                  <p>
                    Yes. We prepare drawings, submit applications and respond to planning officer queries.
                  </p>
                </div>
              </div>

              <p className="pt-4 text-[13px] font-semibold text-slate-800">
                Prefer to speak. Call{" "}
                <a href={PHONE_LINK} className="underline">
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
