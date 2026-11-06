import BoroughMasterHero, { BoroughMasterHeader } from "../../components/BoroughMasterHero";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK = "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Hammersmith%20and%20Fulham";


export default function HammersmithAndFulhamAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Hammersmith and Fulham" });
  }

  function scrollToForm() {
    const el = document.getElementById("hf-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const canonicalUrl = "https://www.wedrawplans.co.uk/areas/hammersmith-and-fulham";

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
      "Hammersmith and Fulham",
      "Hammersmith",
      "Fulham",
      "Parsons Green",
      "West Kensington",
      "Barons Court",
      "Shepherds Bush",
      "White City edges",
    ],
    description:
      "Architectural drawing services in Hammersmith and Fulham for extensions, loft conversions, flat conversions, basements and building regulation packs. Initial survey within 48 hours and full planning support.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you provide planning drawings for extensions in Hammersmith and Fulham",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare existing and proposed drawings for house extensions and advise on the best submission route for your property in Hammersmith and Fulham.",
        },
      },
      {
        "@type": "Question",
        name: "Can you produce building regulation drawings for my Hammersmith and Fulham project",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We can produce a full building regulation pack including plans, sections, key details and coordinated notes for building control and contractors.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer measured surveys in Hammersmith and Fulham",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We can arrange an on site measured survey when accurate existing drawings are needed to start the design properly.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can I get a fixed quote",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Send your details through the form and we usually respond the same day with a clear fixed fee and next steps.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Architectural Drawings in Hammersmith and Fulham – Extensions, Lofts and Conversions</title>
        <meta
          name="description"
          content="Architectural drawings in Hammersmith and Fulham for extensions, loft conversions, flat conversions, basements and building regulation packs. Initial survey within 48 hours, fixed fees and full planning support."
        />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content="Architectural Drawings in Hammersmith and Fulham | WEDRAWPLANS" />
        <meta
          property="og:description"
          content="Extensions, loft conversions, basements, flat conversions and building regulation drawings across Hammersmith and Fulham. Initial survey within 48 hours."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Architectural Drawings in Hammersmith and Fulham | WEDRAWPLANS" />
        <meta
          name="twitter:description"
          content="Extensions, lofts, basements and building regulation drawings across Hammersmith and Fulham. Initial survey within 48 hours."
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
        <BoroughMasterHeader boroughName={"Hammersmith and Fulham"} />

        <main>
          <BoroughMasterHero boroughName={"Hammersmith and Fulham"} formId={"hf-quote"} headline={"Plans for extensions, lofts and conversions in Hammersmith and Fulham"} />

          <ServiceInternalLinks boroughName="Hammersmith and Fulham" />

          <section className="bg-[#f8f4f0] border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] uppercase tracking-[0.16em] font-semibold">
                What we help with in Hammersmith and Fulham
              </h2>

              <p className="mt-3 text-[13px] text-slate-700 max-w-3xl">
                The borough includes terraces, mansion flats and modern apartments. Many homeowners extend or convert to
                maximise space and value.
              </p>

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
                      Existing and proposed drawings for planning submissions and lawful development.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="relative h-44 w-full">
                    <Image src="/images/hero.jpg" alt="Extensions and conversions" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-slate-900">
                      Extensions and conversions
                    </div>
                    <p className="mt-2 text-[12px] text-slate-600">
                      Practical layouts, elevations and sections designed for approvals and build stage.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="relative h-44 w-full">
                    <Image src="/images/Buildingregdrawings.jpg" alt="Building regulation packs" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-slate-900">
                      Building regulation packs
                    </div>
                    <p className="mt-2 text-[12px] text-slate-600">
                      Technical packs with key details coordinated for building control and contractors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                >
                  Request my quote
                </button>
              </div>
            </div>
          </section>

          <section className="bg-[#f8f4f0] py-10 text-center">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] uppercase font-semibold tracking-[0.16em]">
                Ready to move your Hammersmith and Fulham project forward
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and we will reply with a clear fixed fee and suggested next steps.
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
