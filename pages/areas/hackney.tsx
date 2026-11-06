import BoroughMasterHero, { BoroughMasterHeader } from "../../components/BoroughMasterHero";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Hackney";

export default function HackneyAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Hackney" });
  }

  function scrollToForm() {
    const el = document.getElementById("hackney-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const canonicalUrl = "https://www.wedrawplans.co.uk/areas/hackney";

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: canonicalUrl,
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
      "Hackney",
      "Hackney Central",
      "Hackney Downs",
      "London Fields",
      "Dalston",
      "Stoke Newington",
      "Newington Green",
      "Clapton",
      "Upper Clapton",
      "Lower Clapton",
      "Homerton",
      "Hoxton",
      "Haggerston",
      "De Beauvoir",
      "Shoreditch",
    ],
    description:
      "Architectural drawing services in Hackney for extensions, loft conversions, flat conversions, outbuildings and building regulation plans. Initial survey within 48 hours and full planning support.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Hackney",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Hackney can be carried out under permitted development. We confirm the correct route once we review your address and house type.",
        },
      },
      {
        "@type": "Question",
        name: "Is Hackney strict with loft conversions and extensions",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Hackney can be strict in conservation areas and streets with strong character. Careful drawings and a strong planning case help.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Hackney Council take to decide",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates often take around four to six weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Hackney Council",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Hackney Council and respond to planning officer queries.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings in Hackney – Extensions, Lofts and Conversions</title>
        <meta
          name="description"
          content="Architectural drawing services in Hackney for extensions, loft conversions, flat conversions, outbuildings and building regulation plans. Initial survey within 48 hours, clear drawings and full planning support."
        />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content="Architectural Drawings in Hackney | WEDRAWPLANS" />
        <meta
          property="og:description"
          content="Extensions, loft conversions, flat conversions and building regulation drawings across Hackney. Initial survey within 48 hours and full planning support."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Architectural Drawings in Hackney | WEDRAWPLANS" />
        <meta
          name="twitter:description"
          content="Extensions, lofts, conversions and building regulation drawings across Hackney. Initial survey within 48 hours."
        />
        <meta name="twitter:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <div className="min-h-screen w-screen max-w-[100vw] min-w-0 overflow-x-clip bg-[#f8f4f0] text-slate-900">
        <BoroughMasterHeader boroughName={"Hackney"} />

        <main>
          <BoroughMasterHero boroughName={"Hackney"} formId={"hackney-quote"} headline={"Plans for extensions, lofts and conversions in Hackney"} />

          <ServiceInternalLinks boroughName="Hackney" />

          <section className="bg-[#f8f4f0] border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">Areas of Hackney covered</h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                We support projects throughout the borough, including:
              </p>

              <ul className="grid md:grid-cols-2 gap-2 text-[13px] text-slate-800 mt-4">
                <li>• Hackney Central</li>
                <li>• Dalston</li>
                <li>• Stoke Newington</li>
                <li>• Clapton</li>
                <li>• Homerton</li>
                <li>• Hoxton and Shoreditch edges</li>
              </ul>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="relative h-44 w-full">
                    <Image src="/images/drawings.jpg" alt="Planning drawings" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-slate-900">
                      Planning drawings
                    </div>
                    <p className="mt-2 text-[12px] text-slate-600">
                      Clear existing and proposed drawings for submissions and lawful development.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="relative h-44 w-full">
                    <Image src="/images/hero.jpg" alt="Extensions and lofts" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-slate-900">
                      Extensions and lofts
                    </div>
                    <p className="mt-2 text-[12px] text-slate-600">
                      Practical layouts and elevations designed for approvals and construction.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="relative h-44 w-full">
                    <Image src="/images/hackney-area.jpg" alt="Hackney area" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-slate-900">
                      Local knowledge
                    </div>
                    <p className="mt-2 text-[12px] text-slate-600">
                      Experience with terrace streets, flats and constraints across Hackney.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-[13px] max-w-3xl text-slate-700">
                We can work remotely or arrange a measured survey when accurate existing drawings are needed.
              </p>
            </div>
          </section>

          <section className="bg-[#f8f4f0] py-10 text-center">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] uppercase font-semibold tracking-[0.16em]">
                Ready to move your Hackney project forward
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and we will reply with a clear fixed fee and next steps.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="px-5 py-2.5 bg-[#64b7c4] text-white rounded-full text-[13px] uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Get my quote
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 bg-white rounded-full text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
