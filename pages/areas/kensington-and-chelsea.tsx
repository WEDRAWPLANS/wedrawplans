import { createFaqPageSchema } from "../../lib/faqSchema";
import { getLondonAreaMetadata } from "../../data/londonAreas";
import { businessReference } from "../../data/businessSchema";
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
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Kensington%20and%20Chelsea";

const areaMetadata = getLondonAreaMetadata("Kensington and Chelsea");

const FAQ_ITEMS = [
  {
    question: "Do I need planning permission in Kensington and Chelsea?",
    answer:
      "Many projects can proceed under permitted development, but local controls can be stricter. We check your address and advise the best route at the start.",
  },
  {
    question: "How fast can you survey?",
    answer:
      "In most cases we can arrange the initial survey within forty eight hours of instruction.",
  },
  {
    question: "Do you submit to the council?",
    answer:
      "Yes. We handle the submission, monitor progress and respond to planning officer queries.",
  },
  {
    question: "Can you coordinate structural design?",
    answer:
      "Yes. We coordinate with structural engineers so beams and load paths are designed and shown correctly on the drawings.",
  },
];

const faqJson = createFaqPageSchema(FAQ_ITEMS);

export default function KensingtonAndChelseaAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Kensington and Chelsea" });
  }

  function scrollToForm() {
    const el = document.getElementById("kensington-and-chelsea-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Architectural drawings in Kensington and Chelsea",
    provider: businessReference,
    url: "https://www.wedrawplans.co.uk/areas/kensington-and-chelsea",
    image: "https://www.wedrawplans.co.uk/images/hero.jpg",
    areaServed: [
      "Kensington",
      "Chelsea",
      "Notting Hill",
      "Holland Park",
      "South Kensington",
      "North Kensington",
      "Knightsbridge borders",
      "Earls Court",
      "West Brompton",
      "Ladbroke Grove",
      "Portobello",
      "Kensington High Street area",
      "Chelsea Harbour area",
    ],
    description:
      "Architectural drawing services in Kensington and Chelsea for extensions, loft conversions, refurbishments, basements and building regulations.",
  };

  return (
    <>
      <Head>
        <title>{areaMetadata.title}</title>
        <meta name="description" content={areaMetadata.description} />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/areas/kensington-and-chelsea"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <AreaTopHeader />

      <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-[#f8f4f0] text-slate-900">
        <BoroughMasterHeader boroughName={"Kensington and Chelsea"} />
        <main>
          <BoroughMasterHero boroughName={"Kensington and Chelsea"} formId={"kensington-and-chelsea-quote"} headline={"Plans for extensions, lofts and new builds in Kensington and Chelsea"} />

          <ServiceInternalLinks boroughName="Kensington and Chelsea" />

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Kensington and Chelsea
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS provide full drawing packages for extensions, loft conversions,
                    refurbishments, internal alterations, flat layouts and small new developments
                    across Kensington and Chelsea.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    We work throughout Kensington, Chelsea, Notting Hill, Holland Park, South Kensington,
                    North Kensington and nearby streets.
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
                    alt="Example of architectural drawings for a Kensington and Chelsea project"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Technical drawings builders can price from
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Clear floor plans, elevations, sections and notes, coordinated with structural design so builders,
                      Building Control and inspectors have what they need.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Areas we cover in Kensington and Chelsea
                  </h3>
                  <Image
                    src="/images/kensingtonandchelsea-area.jpg"
                    alt="Local street scene in Kensington and Chelsea"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                  />
                  <p className="text-[13px] text-slate-700">
                    Drawings for the whole borough of Kensington and Chelsea, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Kensington</li>
                      <li>Chelsea</li>
                      <li>Notting Hill</li>
                      <li>Holland Park</li>
                      <li>South Kensington</li>
                      <li>North Kensington</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Earls Court</li>
                      <li>West Brompton</li>
                      <li>Ladbroke Grove</li>
                      <li>Portobello</li>
                      <li>Knightsbridge borders</li>
                      <li>Kensington High Street area</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Kensington and Chelsea
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Side return and rear extensions</li>
                      <li>Internal reconfiguration for better layouts</li>
                      <li>Loft conversions where suitable</li>
                      <li>Lightwells and improved daylight</li>
                      <li>Front facade sensitive upgrades</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Refurbishments and full fit out</li>
                      <li>Basement design coordination</li>
                      <li>Flats and layout changes</li>
                      <li>New build infill where suitable</li>
                      <li>Technical packs for Building Control</li>
                    </ul>
                  </div>
                  <Image
                    src="/images/hero.jpg"
                    alt="Completed home improvement project"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mt-2"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Permitted development limits in Kensington and Chelsea
                </h2>
                <p className="text-[13px] text-slate-700">
                  This is a simplified guide to common permitted development limits. Final confirmation depends on your
                  house type, location, conservation area status and any Article 4 directions.
                </p>

                <div className="grid md:grid-cols-3 gap-8 text-[13px] text-slate-700">
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Rear extensions
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Up to 3 m deep on terrace houses</li>
                      <li>Up to 4 m on semi detached houses</li>
                      <li>Up to 6 to 8 m with Prior Approval</li>
                      <li>Maximum 4 m high for single storey</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Loft conversions
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Up to 40 to 50 cubic metres volume</li>
                      <li>No extensions on the front roof slope</li>
                      <li>Side windows obscure glazed and fixed</li>
                      <li>External materials to be similar</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Outbuildings
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Maximum 2.5 m high near boundaries</li>
                      <li>Cannot be used as a separate dwelling</li>
                      <li>Use must be incidental to the house</li>
                      <li>Not more than 50 percent of garden area</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Planning drawings for Kensington and Chelsea
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-700">
                    <li>Existing and proposed floor plans</li>
                    <li>Existing and proposed elevations</li>
                    <li>Roof plans and key sections</li>
                    <li>Block plans and location plans</li>
                    <li>Drainage and construction notes</li>
                    <li>Design and access statements where needed</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Building regulation drawings for Kensington and Chelsea
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-700">
                    <li>Structural layouts and coordination</li>
                    <li>Foundation and beam information</li>
                    <li>Fire safety and escape routes</li>
                    <li>Thermal build ups and insulation specs</li>
                    <li>Ventilation and extract positions</li>
                    <li>Drainage runs and manhole information</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-emerald-900">
                  Local planning knowledge for Kensington and Chelsea projects
                </h2>
                <p className="text-[13px] text-emerald-900">
                  Kensington and Chelsea includes many conservation areas, listed buildings, and highly sensitive street
                  scenes. We shape each scheme to match local context, manage details carefully, and support a strong
                  planning submission strategy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Frequently asked questions
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                  {FAQ_ITEMS.map(({ question, answer }) => (
                    <div key={question} className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                      <h3 className="font-semibold text-slate-900">{question}</h3>
                      <p>{answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Ready to start your project
                  </h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short description. We review and reply with a fixed fee and recommended next
                    steps.
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
                <a href="/loft-plans" className="underline">
                  loft plans
                </a>{" "}
                and{" "}
                <a href="/new-build-plans" className="underline">
                  new build plans
                </a>
                .
              </div>
            </div>
          </section>
          <BoroughIntentCapture slug="kensington-and-chelsea" />
        </main>
      </div>
    </>
  );
}
