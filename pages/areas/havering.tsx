import React from "react";
import Head from "next/head";
import Image from "next/image";
import AreaTopHeader from "../../components/AreaTopHeader";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";
import { submitBoroughLead } from "../../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Havering";

export default function HaveringAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Havering" });
  }

  function scrollToForm() {
    const el = document.getElementById("havering-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/havering",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "GB"
    },
    areaServed: [
      "Havering",
      "Romford",
      "Hornchurch",
      "Upminster",
      "Rainham",
      "Elm Park",
      "Harold Wood",
      "Collier Row",
      "Emerson Park"
    ],
    description:
      "Architectural drawing services in Havering for extensions, loft conversions, garage conversions, new builds and building regulation packs."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for an extension in Havering?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many houses in Havering can extend under permitted development, subject to limits and constraints. We confirm the correct route once we review your address."
        }
      },
      {
        "@type": "Question",
        name: "Are loft conversions allowed in Havering?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Loft conversions are common across Havering, including rear dormers and hip to gable designs, provided they meet permitted development or planning guidance."
        }
      },
      {
        "@type": "Question",
        name: "How long does Havering Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications typically take around eight weeks after validation. Lawful Development Certificates are often decided sooner."
        }
      },
      {
        "@type": "Question",
        name: "Do you submit applications to Havering Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, submit applications and respond to planning officer queries through to decision."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
      <Head>
        <title>Architectural Drawings in Havering | Extensions, Lofts and New Builds</title>
        <meta
          name="description"
          content="Architectural drawings in Havering for house extensions, loft conversions, garage conversions and new builds. Fixed fees with fast response."
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/havering" />
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
        <section className="border-b border-slate-200 bg-[#fdf8f3]">
          <div className="mx-auto max-w-5xl px-4 py-10 grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                Havering architectural drawings
              </p>

              <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                Plans for extensions, lofts and new builds in Havering
              </h1>

              <p className="mt-2 text-[12px] font-medium text-slate-700">
                Local London designers • Fixed fee guaranteed • Council-ready drawings
              </p>

              <p className="mt-3 text-[13px] text-slate-700">
                We regularly work near Romford, Hornchurch, Upminster and surrounding residential streets across Havering.
              </p>

              <p className="mt-4 text-[13px] text-slate-700">
                Recent projects in Havering include rear extensions, loft conversions and new build homes across RM1, RM11, RM12 and RM14.
              </p>

              <button
                onClick={scrollToForm}
                className="mt-5 rounded-full bg-[#64b7c4] px-6 py-2.5 text-white text-[13px] font-semibold uppercase"
              >
                Get a quick quote
              </button>
            </div>

            <div id="havering-quote" className="bg-white p-6 rounded-2xl shadow">
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
                <input
                  name="postcode"
                  required
                  placeholder="RM1 3AA"
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

        <ServiceInternalLinks boroughName="Havering" />

        <section className="bg-white border-b border-slate-200">
          <div className="mx-auto max-w-5xl px-4 py-10 grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              <Image
                src="/images/havering-area.jpg"
                alt="Havering area coverage"
                width={800}
                height={500}
                className="object-cover w-full h-56"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              <Image
                src="/images/drawings.jpg"
                alt="Architectural drawings example"
                width={800}
                height={500}
                className="object-cover w-full h-56"
              />
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-slate-200">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="text-[18px] font-semibold uppercase">
              Frequently asked questions in Havering
            </h2>

            <div className="mt-4 space-y-4 text-[13px] text-slate-700">
              <div>
                <strong>Do I need planning permission for an extension in Havering?</strong>
                <p>
                  Not always. Many homes can extend under permitted development. We check limits and constraints before starting.
                </p>
              </div>
              <div>
                <strong>Are loft conversions common in Havering?</strong>
                <p>
                  Yes. Rear dormers and hip to gable lofts are common across Romford, Hornchurch and Upminster.
                </p>
              </div>
              <div>
                <strong>Do you manage applications to Havering Council?</strong>
                <p>
                  Yes. We prepare drawings, submit applications and handle planning queries through to decision.
                </p>
              </div>
            </div>

            <p className="mt-6 text-[13px] font-semibold text-slate-800">
              Prefer to speak? Call{" "}
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
