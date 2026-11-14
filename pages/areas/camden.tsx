import BoroughIntentCapture from "../../components/BoroughIntentCapture";
import BoroughMasterHero, { BoroughMasterHeader } from "../../components/BoroughMasterHero";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";
import AreaTopHeader from "../../components/AreaTopHeader";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Camden";

export default function CamdenAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Camden" });
  }

  function scrollToForm() {
    const el = document.getElementById("camden-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/camden",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/hero.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK"
    },
    areaServed: [
      "Camden",
      "Camden Town",
      "Kentish Town",
      "Gospel Oak",
      "Hampstead borders",
      "Belsize Park",
      "Swiss Cottage borders",
      "Kings Cross",
      "St Pancras",
      "Bloomsbury",
      "Holborn",
      "Fitzrovia (Camden side)"
    ],
    description:
      "Architectural drawing services in Camden for extensions, loft conversions, flat conversions, refurbishments and building regulations."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Camden?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Camden can be carried out under permitted development. We confirm the correct route once we review your address and building type."
        }
      },
      {
        "@type": "Question",
        name: "Is Camden strict with loft conversions and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Camden can be strict, especially in conservation areas, near Hampstead and Belsize Park, and on terraces with strong character. Good drawings and planning strategy are important."
        }
      },
      {
        "@type": "Question",
        name: "How long does Camden Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you manage the full application to Camden Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete the forms, upload documents, submit to Camden Council and respond to planning officer queries."
        }
      }
    ]
  };

  const visibleFaq = [
    {
      q: "Do I need planning permission for a rear extension in Camden?",
      a: "Not always. Many rear extensions in Camden can be carried out under permitted development. We confirm the correct route once we review your address and building type."
    },
    {
      q: "Is Camden strict with loft conversions and extensions?",
      a: "Camden can be strict, especially in conservation areas, near Hampstead and Belsize Park, and on terraces with strong character. Good drawings and planning strategy are important."
    },
    {
      q: "How long does Camden Council take to decide?",
      a: "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates usually take around four to six weeks."
    },
    {
      q: "Do you manage the full application to Camden Council?",
      a: "Yes. We prepare drawings, complete the forms, upload documents, submit to Camden Council and respond to planning officer queries."
    }
  ];

  return (
    <>
      <Head>
        <title>Planning drawings for extensions and alterations in Camden | WEDRAWPLANS</title>
        <meta name="description" content="Planning drawings for extensions and alterations in Camden. Planning and Building Regulation drawings in Camden. Get a fixed-fee quotation." />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/camden" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-[#f8f4f0] text-slate-900">
        <AreaTopHeader />

        <BoroughMasterHeader boroughName={"Camden"} />
        <main>
          <BoroughMasterHero boroughName={"Camden"} formId={"camden-quote"} headline={"Plans for extensions, lofts and conversions in Camden"} />

          <ServiceInternalLinks boroughName="Camden" />

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Camden
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS provide full drawing packages for rear and side extensions,
                    loft conversions, internal alterations, roof terraces, flat conversions and small new developments
                    across the borough of Camden.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    We work throughout Camden Town, Kentish Town, Gospel Oak, Hampstead borders,
                    Belsize Park, Kings Cross, Bloomsbury, Holborn and Fitzrovia (Camden side).
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
                    alt="Example of architectural drawings for a Camden extension"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Clear drawings for complex Camden sites
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Detailed floor plans, elevations, sections and notes coordinated with structural design,
                      fire strategy and light studies so Camden planning and Building Control can understand the scheme quickly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Camden areas we cover
                  </h3>
                  <Image
                    src="/images/camden-area.jpg"
                    alt="Camden local area"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                  />
                  <p className="text-[13px] text-slate-700">
                    Drawings for the whole borough of Camden, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Camden Town NW1</li>
                      <li>Kentish Town NW5</li>
                      <li>Gospel Oak NW5</li>
                      <li>Belsize Park NW3</li>
                      <li>Hampstead borders NW3</li>
                      <li>Swiss Cottage borders NW3</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Kings Cross and St Pancras N1C</li>
                      <li>Bloomsbury WC1</li>
                      <li>Holborn WC1 and WC2</li>
                      <li>Fitzrovia (Camden side) W1T</li>
                      <li>Regents Park borders NW1</li>
                      <li>Surrounding streets and estates</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Camden
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Rear and side extensions to terraces</li>
                      <li>Loft conversions and dormers</li>
                      <li>Internal reconfiguration and knock throughs</li>
                      <li>Flat and maisonette conversions</li>
                      <li>Small infill developments</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Basement and lower ground alterations</li>
                      <li>Roof terraces and access stairs</li>
                      <li>Garden studios and workspaces</li>
                      <li>Change of use layouts</li>
                      <li>Refurbishment and compliance upgrades</li>
                    </ul>
                  </div>
                  <Image
                    src="/images/hero.jpg"
                    alt="Completed extension and loft project"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mt-2"
                  />
                </div>
              </div>

              <section className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Frequently asked questions in Camden
                </h2>

                <div className="mt-6 space-y-5">
                  {visibleFaq.map((item) => (
                    <div key={item.q} className="border-b border-slate-200 pb-5 last:border-b-0 last:pb-0">
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
                    Ready to start your project
                  </h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short description. We review and reply with a fixed fee and recommended next steps.
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
                <a
                  href="/extension-plans"
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
                  extension plans
                </a>
                ,{" "}
                <a
                  href="/loft-conversion-plans"
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
                  loft conversion plans
                </a>{" "}
                and{" "}
                <a
                  href="/new-build-plans"
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
                  new build plans
                </a>
                .
              </div>
            </div>
          </section>
          <BoroughIntentCapture slug="camden" />
        </main>
      </div>
    </>
  );
}
