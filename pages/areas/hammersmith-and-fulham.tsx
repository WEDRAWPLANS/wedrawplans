import { getLondonAreaMetadata } from "../../data/londonAreas";
import { businessReference } from "../../data/businessSchema";
import BoroughIntentCapture from "../../components/BoroughIntentCapture";
import BoroughMasterHero, { BoroughMasterHeader } from "../../components/BoroughMasterHero";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK = "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Hammersmith%20and%20Fulham";


const areaMetadata = getLondonAreaMetadata("Hammersmith and Fulham");

export default function HammersmithAndFulhamAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Hammersmith and Fulham" });
  }

  function scrollToForm() {
    const el = document.getElementById("hf-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const canonicalUrl = "https://www.wedrawplans.co.uk/areas/hammersmith-and-fulham";

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Architectural drawings in Hammersmith and Fulham",
    provider: businessReference,
    url: canonicalUrl,
    image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
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

  return (
    <>
      <Head>
        <title>{areaMetadata.title}</title>
        <meta name="description" content={areaMetadata.description} />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
        />
      </Head>

      <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-[#f8f4f0] text-slate-900">
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
                    <Image src="/images/drawings.jpg" alt="House extension planning drawing sheet with proposed floor plans, elevations and 3D views" fill className="object-cover" />
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
                    <Image src="/images/hero.jpg" alt="Glazed rear house extension and dormer loft conversion viewed from the garden" fill className="object-cover" />
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
          <section aria-labelledby="hf-warbeck-proof" className="border-y border-[#e9dcd5] bg-white py-10">
            <div className="mx-auto grid max-w-5xl gap-6 px-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:px-6">
              <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-[#e6ded7] bg-[#f8f6f2] sm:min-h-[270px]">
                <Image src="/images/case-studies/warbeck-road/p05-3d-composite.webp" alt="WEDRAWPLANS Warbeck Road, Shepherd’s Bush approved roof-elevation drawing and loft design visual" fill sizes="(max-width:1024px) 100vw, 42vw" className="object-contain p-3" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#a84f49]">Local planning evidence · Shepherd’s Bush W12</p>
                <h2 id="hf-warbeck-proof" className="mt-2 text-[24px] font-semibold leading-tight text-[#253135]">Warbeck Road: Full architectural refurbishment showcase</h2>
                <p className="mt-3 text-[13px] leading-7 text-[#586769]">See our 2019 granted loft Certificate of Lawfulness (2019/01824/CLP), proposed rear dormer elevations, loft and ground-floor Building Regulations drawings, construction-progress photography and architectural 3D visualisations. The certificate covers the roof works, not the separate Building Regulations design package.</p>
                <a href="/case-studies/warbeck-road-hammersmith-fulham-loft-certificate" className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[#a9443f] px-5 py-3 text-[13px] font-bold text-white hover:bg-[#87332f]">View the full Warbeck Road case study →</a>
              </div>
            </div>
          </section>
          <BoroughIntentCapture slug="hammersmith-and-fulham" />
        </main>
      </div>
    </>
  );
}
