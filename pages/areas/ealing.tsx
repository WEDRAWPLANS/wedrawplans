import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

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
        <title>
          Architectural Drawings in Ealing | Extensions, Lofts, New Builds
        </title>
        <meta
          name="description"
          content="Architectural drawing services in Ealing for extensions, loft conversions, refurbishments and building regulation plans."
        />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/areas/ealing"
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

      <header className="bg-[#fdf8f3] border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center">
          <Image
            src="/images/wedrawplans-logo.png"
            alt="WEDRAWPLANS"
            width={420}
            height={140}
            className="mx-auto"
          />
        </div>
      </header>

      <main>
        <section className="bg-[#fdf8f3] border-b border-slate-200">
          <div className="mx-auto max-w-5xl px-4 py-10 grid lg:grid-cols-2 gap-8">
            <div>
              <h1 className="text-[24px] font-semibold uppercase">
                Plans for extensions and lofts in Ealing
              </h1>

              <p className="mt-3 text-[13px] text-slate-700">
                Fixed fees. Local designers. Same day response.
              </p>

              <button
                onClick={scrollToForm}
                className="mt-4 rounded-full bg-[#64b7c4] px-6 py-2.5 text-white text-[13px] font-semibold uppercase"
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
                  No obligation. Same day response.
                </p>
              </form>
            </div>
          </div>
        </section>

        <ServiceInternalLinks boroughName="Ealing" />
      </main>
    </div>
  );
}
