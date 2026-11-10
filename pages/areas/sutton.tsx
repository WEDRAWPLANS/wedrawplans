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
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Sutton";

export default function SuttonAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Sutton" });
  }

  function scrollToForm() {
    const el = document.getElementById("sutton-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/sutton",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    image: "https://www.wedrawplans.co.uk/images/hero.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK",
    },
    areaServed: [
      "Sutton",
      "Cheam",
      "Carshalton",
      "Wallington",
      "Belmont",
      "Worcester Park",
      "Hackbridge",
      "Beddington",
      "Rosehill",
      "St Helier",
      "Sutton Common",
      "South Sutton",
    ],
    description:
      "Architectural drawing services in Sutton for extensions, loft conversions, outbuildings, refurbishments and building regulations.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a rear extension in Sutton?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many rear extensions in Sutton can be carried out under permitted development. We confirm the correct route once we review your address and house type.",
        },
      },
      {
        "@type": "Question",
        name: "Is Sutton strict with loft conversions and extensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sutton follows national permitted development rules but can be stricter in conservation areas and character streets. We shape each design to match local expectations.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Sutton Council take to decide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Householder planning applications normally take six to eight weeks after validation. Lawful Development Certificates often take around four to six weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manage the full submission to Sutton Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We prepare drawings, complete forms, upload documents, submit to Sutton Council and respond to planning officer queries.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Loft conversion and rear extension plans in Sutton | WEDRAWPLANS</title>
        <meta name="description" content="Loft conversion and rear extension plans in Sutton. Planning and Building Regulation drawings in Sutton. Get a fixed-fee quotation." />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/sutton" />
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
      <div className="min-h-screen w-screen max-w-[100vw] min-w-0 overflow-x-clip bg-[#f8f4f0] text-slate-900">
        <BoroughMasterHeader boroughName={"Sutton"} />
        <main>
          <BoroughMasterHero boroughName={"Sutton"} formId={"sutton-quote"} headline={"Plans for extensions, lofts and new builds in Sutton"} />

          <ServiceInternalLinks boroughName="Sutton" />

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Sutton
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS provide full drawing packages for single and double storey extensions, loft conversions,
                    internal alterations, garage conversions, outbuildings, flat conversions and small new developments
                    across the borough of Sutton.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    We work throughout Sutton, Cheam, Carshalton, Wallington, Worcester Park, Hackbridge, Beddington and
                    nearby streets.
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
                    alt="Example of architectural drawings for a Sutton extension"
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
                    Sutton areas we cover
                  </h3>
                  <Image
                    src="/images/hero.jpg"
                    alt="Local area in Sutton"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                  />
                  <p className="text-[13px] text-slate-700">Drawings for the whole borough of Sutton, including:</p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Sutton</li>
                      <li>Cheam</li>
                      <li>Carshalton</li>
                      <li>Wallington</li>
                      <li>Belmont</li>
                      <li>Rosehill</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Worcester Park</li>
                      <li>Hackbridge</li>
                      <li>Beddington</li>
                      <li>St Helier</li>
                      <li>Sutton Common</li>
                      <li>South Sutton</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Sutton
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Rear extensions and kitchen diners</li>
                      <li>Two storey extensions where suitable</li>
                      <li>Side extensions and infill extensions</li>
                      <li>Hip to gable loft conversions</li>
                      <li>Rear dormers with ensuite</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Garage conversions</li>
                      <li>Internal reconfiguration</li>
                      <li>Outbuildings and studios</li>
                      <li>Flats and layout changes</li>
                      <li>Small new build schemes</li>
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
                  Permitted development limits in Sutton
                </h2>
                <p className="text-[13px] text-slate-700">
                  This is a simplified guide to common permitted development limits. Final confirmation depends on your
                  house type, location and any Article 4 directions.
                </p>

                <div className="grid md:grid-cols-3 gap-8 text-[13px] text-slate-700">
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">Rear extensions</h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Up to 3 m deep on terrace houses</li>
                      <li>Up to 4 m on semi detached houses</li>
                      <li>Up to 6 to 8 m with Prior Approval</li>
                      <li>Maximum 4 m high for single storey</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">Loft conversions</h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Up to 40 to 50 cubic metres volume</li>
                      <li>No extensions on the front roof slope</li>
                      <li>Side windows obscure glazed and fixed</li>
                      <li>External materials to be similar</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">Outbuildings</h3>
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
                    Planning drawings for Sutton
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
                    Building regulation drawings for Sutton
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
                  Local planning knowledge for Sutton projects
                </h2>
                <p className="text-[13px] text-emerald-900">
                  Sutton includes character pockets and conservation areas alongside suburban semis and terraces. We
                  shape each scheme to match local context so approval chances are as strong as possible.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">Frequently asked questions</h2>
                <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Do I need planning permission in Sutton</h3>
                    <p>
                      Many extensions and lofts can proceed under permitted development. We check your address and
                      advise the best route at the start.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">How fast can you survey</h3>
                    <p>In most cases we can arrange the initial survey within forty eight hours of instruction.</p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Do you submit to Sutton Council</h3>
                    <p>Yes. We handle the submission, monitor progress and respond to planning officer queries.</p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Can you coordinate structural design</h3>
                    <p>
                      Yes. We coordinate with structural engineers so beams and load paths are designed and shown
                      correctly on the drawings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">Ready to start your project</h2>
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
                  <section aria-labelledby="sutton-loft-2026-approved" className="mx-auto mb-10 max-w-6xl overflow-hidden rounded-[22px] border border-[#dce8e2] bg-[#f0f8f3] shadow-[0_12px_28px_rgba(28,75,70,.045)]">
            <div className="grid gap-4 p-5 sm:p-7 md:grid-cols-[minmax(0,1fr)_250px] md:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#28745e]">Sutton case study · Planning permission granted November 2026</p>
                <h2 id="sutton-loft-2026-approved" className="mt-2 text-[23px] font-semibold leading-tight text-[#23484c]">Wallington rear dormer loft conversion approved</h2>
                <p className="mt-3 max-w-2xl text-[13px] leading-7 text-[#547272]">A genuine WEDRAWPLANS project involving a rear dormer, side rooflights and a bedroom with en-suite. Sutton Council granted planning permission in an Area of Special Local Character. Explore the original architectural drawing sheets and design views.</p>
                <a href="/case-studies/sutton-loft-conversion-planning-permission-wallington" className="mt-4 inline-flex rounded-full bg-[#2a7b80] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#216368]">View the approved Wallington loft project →</a>
              </div>
              <a href="/case-studies/sutton-loft-conversion-planning-permission-wallington" className="block overflow-hidden rounded-[12px] border border-[#cfdfda] bg-white p-2">
                <Image src="/images/case-studies/sutton-wallington-loft-conversion-2026/drawing-01-3d-before-after.webp" alt="Original WEDRAWPLANS existing and proposed Wallington loft 3D views" width={480} height={340} className="h-auto w-full object-contain" />
              </a>
            </div>
          </section>
          <BoroughIntentCapture slug="sutton" />
        </main>
      </div>
    </>
  );
}
