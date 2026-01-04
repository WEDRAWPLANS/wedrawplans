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
              <h1 className="text-[24px] font-semibold uppercase">
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
                Acton, Hanwell, Southall and nearby streets.
              </p>

              <button
                onClick={scrollToForm}
                className="mt-4 rounded-full bg-[#64b7c4] px-6 py-2.5 text-white text-[13px] font-semibold uppercase"
                type="button"
              >
                Get a quick quote
              </button>
            </div>

            <div id="ealing-quote" className="bg-white p-6 rounded-2xl shadow">
              <form onSubmit={handleSubmit} className="space-y-3 text-[13px]">
                <input
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full border-b border-slate-300 bg-transparent py-1.5 outline-none"
                />
                <input
                  name="phone"
                  required
                  placeholder="Telephone"
                  className="w-full border-b border-slate-300 bg-transparent py-1.5 outline-none"
                />
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-slate-300 bg-transparent py-1.5 outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#64b7c4] py-2.5 text-white text-[13px] font-semibold uppercase"
                >
                  Get a fixed fee quote
                </button>
                <p className="text-[11px] text-slate-500 text-center">
                  No obligation. Same-day response on most enquiries.
                </p>
              </form>
            </div>
          </div>
        </section>

        <ServiceInternalLinks boroughName="Ealing" />

        <section className="bg-white border-b border-slate-200">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="text-[18px] font-semibold uppercase">
              Frequently asked questions in Ealing
            </h2>

            <div className="mt-4 space-y-4 text-[13px] text-slate-700">
              <div>
                <strong>Do I need planning permission for a rear extension in Ealing?</strong>
                <p>
                  Not always. Many rear extensions in Ealing can be carried out under permitted development. We confirm
                  the correct route once we review your address and house type.
                </p>
              </div>

              <div>
                <strong>Is Ealing strict with loft conversions and extensions?</strong>
                <p>
                  Ealing can be strict in conservation areas and on some streets with strong character. Clear drawings
                  and a good planning case are important.
                </p>
              </div>

              <div>
                <strong>How long does Ealing Council take to decide?</strong>
                <p>Householder planning applications normally take six to eight weeks after validation.</p>
              </div>

              <div>
                <strong>Do you manage the full application to Ealing Council?</strong>
                <p>Yes. We prepare drawings, submit applications and respond to planning officer queries.</p>
              </div>
            </div>

            <p className="mt-6 text-[13px] font-semibold text-slate-800">
              Prefer to speak. Call{" "}
              <a href={PHONE_LINK} className="underline">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
