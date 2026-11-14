import BoroughIntentCapture from "../../components/BoroughIntentCapture";
import BoroughMasterHero, { BoroughMasterHeader } from "../../components/BoroughMasterHero";
import Head from "next/head";
import React, { useMemo } from "react";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

import ApprovalEvidenceStrip from "../../components/ApprovalEvidenceStrip";
const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Hounslow";

const HERO_IMAGE = "/images/hounslow-hero.jpg";
const HOUNSLOW_LOCAL_IMAGE = "/images/hounslow-local.jpg";
const PROJECT_IMAGE_1 = "/images/hounslow-project-1.jpg";
const PROJECT_IMAGE_2 = "/images/hounslow-project-2.jpg";

export default function HounslowAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Hounslow" });
  }

  function scrollToForm() {
    const el = document.getElementById("hounslow-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.wedrawplans.co.uk/areas/hounslow#business",
      name: "WEDRAWPLANS",
      url: "https://www.wedrawplans.co.uk/areas/hounslow",
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
        "Hounslow",
        "Chiswick",
        "Brentford",
        "Isleworth",
        "Osterley",
        "Heston",
        "Feltham",
        "Hanworth",
        "Bedfont",
        "Cranford",
        "Heathrow area",
      ],
      description:
        "Architectural drawing services in Hounslow for extensions, loft conversions, refurbishments, planning applications and building regulation packs.",
      sameAs: ["https://twitter.com/WEDRAWPLANS"],
    }),
    []
  );

  const serviceJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.wedrawplans.co.uk/areas/hounslow#service",
      name: "Architectural drawings in Hounslow",
      provider: { "@type": "LocalBusiness", "@id": "https://www.wedrawplans.co.uk/areas/hounslow#business" },
      areaServed: "London Borough of Hounslow",
      serviceType: [
        "Planning drawings",
        "Permitted development drawings",
        "Lawful Development Certificate drawings",
        "Building regulation drawings",
        "Measured survey",
      ],
      description:
        "Planning and building regulation drawing packages for Hounslow homes, including extensions, loft conversions, refurbishments and outbuildings.",
    }),
    []
  );

  const breadcrumbJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wedrawplans.co.uk/" },
        { "@type": "ListItem", position: 2, name: "Hounslow", item: "https://www.wedrawplans.co.uk/areas/hounslow" },
      ],
    }),
    []
  );

  const faqJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need planning permission for an extension in Hounslow",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. Many houses can extend under permitted development, but flats and maisonettes need planning permission. We confirm the correct route once we review your address and house type.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help with a lawful development certificate in Hounslow",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. If your project is permitted development, we prepare the drawings and supporting information for a lawful development certificate so you have written confirmation for your records.",
          },
        },
        {
          "@type": "Question",
          name: "How long do Hounslow planning decisions take",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Householder planning applications often take around 6 to 8 weeks after validation. Lawful Development Certificates are often around 4 to 6 weeks depending on validation and workload.",
          },
        },
        {
          "@type": "Question",
          name: "Do you manage the full submission to Hounslow Council",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare drawings, complete forms, upload documents, submit to the council portal and respond to planning officer queries until decision.",
          },
        },
      ],
    }),
    []
  );

  return (
    <>
      <Head>
        <title>Rear extension planning and Building Regulations drawings in Hounslow | WEDRAWPLANS</title>
        <meta name="description" content="Rear extension planning and Building Regulations drawings in Hounslow. Planning and Building Regulation drawings in Hounslow. Get a fixed-fee quotation." />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/hounslow" />

        <meta property="og:title" content="Architectural Drawings Hounslow | WEDRAWPLANS" />
        <meta
          property="og:description"
          content="Extensions, loft conversions, refurbishments and building regulation drawings in Hounslow. Fixed quote and full planning support."
        />
        <meta property="og:url" content="https://www.wedrawplans.co.uk/areas/hounslow" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wedrawplans.co.uk/images/hero.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Architectural Drawings Hounslow | WEDRAWPLANS" />
        <meta
          name="twitter:description"
          content="Planning and building regulation drawing packages in Hounslow. Fixed quote and full submission support."
        />
        <meta name="twitter:image" content="https://www.wedrawplans.co.uk/images/hero.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
      </Head>

      <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-[#f8f4f0] text-slate-900">
        <BoroughMasterHeader boroughName={"Hounslow"} />

        <main>
          <BoroughMasterHero boroughName={"Hounslow"} formId={"hounslow-quote"} headline={"Plans for extensions, lofts and building regs in Hounslow"} />

          <ServiceInternalLinks boroughName="Hounslow" />

<ApprovalEvidenceStrip
  slugs={["cromwell-road-hounslow-rear-extension"]}
  title="Approved rear extension in Hounslow"
  intro="A residential rear-extension planning approval at Cromwell Road, demonstrating the drawing and application work we undertake for local homeowners."
/>

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Hounslow
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS provide full drawing packages for rear and side extensions, loft conversions, internal alterations,
                    garage conversions, outbuildings, flat conversions and small residential schemes across Hounslow.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    We work throughout Chiswick, Brentford, Isleworth, Osterley, Heston, Feltham, Hanworth, Bedfont, Cranford and surrounding streets.
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
                    alt="Example of architectural drawings for a Hounslow project"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Technical drawings builders can price from
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Clear floor plans, elevations, sections and notes, coordinated with structural design so builders and inspectors have what they need.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Hounslow areas we cover
                  </h3>

                  <Image
                    src={PROJECT_IMAGE_1}
                    alt="Hounslow area and typical residential streets"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                    priority
                  />

                  <p className="text-[13px] text-slate-700">Drawings for the whole borough, including:</p>

                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Chiswick W4</li>
                      <li>Brentford TW8</li>
                      <li>Isleworth TW7</li>
                      <li>Osterley TW5</li>
                      <li>Heston</li>
                      <li>Cranford</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Hounslow TW3</li>
                      <li>Feltham TW13 and TW14</li>
                      <li>Hanworth</li>
                      <li>Bedfont</li>
                      <li>Heathrow area</li>
                      <li>Surrounding streets</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Hounslow
                  </h3>

                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Rear and side extensions</li>
                      <li>Wraparound and L shaped extensions</li>
                      <li>Loft dormers and roof extensions</li>
                      <li>Hip to gable loft conversions</li>
                      <li>Kitchen and open plan layouts</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Garage conversions</li>
                      <li>Internal reconfiguration</li>
                      <li>Outbuildings and studios</li>
                      <li>Flats and layout changes</li>
                      <li>Building regulation packs</li>
                    </ul>
                  </div>

                  <Image
                    src={PROJECT_IMAGE_2}
                    alt="Completed extension and loft style project"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mt-2"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Permitted development limits in Hounslow
                </h2>
                <p className="text-[13px] text-slate-700">
                  This is a simplified guide to common permitted development limits. Final confirmation depends on your house type, location and any Article 4 directions or constraints.
                </p>

                <div className="grid md:grid-cols-3 gap-8 text-[13px] text-slate-700">
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">Rear extensions</h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Up to 3m deep on terrace houses</li>
                      <li>Up to 4m on semi detached houses</li>
                      <li>Up to 6 to 8m with Prior Approval</li>
                      <li>Maximum 4m high for single storey</li>
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
                      <li>Maximum 2.5m high near boundaries</li>
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
                    Planning drawings for Hounslow
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
                    Building regulation drawings for Hounslow
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
                  Local planning knowledge for Hounslow projects
                </h2>
                <p className="text-[13px] text-emerald-900">
                  Hounslow includes conservation areas and character streets in places like Chiswick and parts of Brentford and Isleworth, plus suburban family housing across Heston, Feltham, Bedfont and Cranford.
                  We shape each scheme to suit local context and submission requirements so approval chances are as strong as possible.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">Frequently asked questions</h2>
                <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Do I need planning permission in Hounslow</h3>
                    <p>
                      Many extensions and lofts can proceed under permitted development. We check your address and advise the best route at the start.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">How fast can you survey</h3>
                    <p>In most cases we can arrange the initial measured survey within forty eight hours of instruction.</p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Do you submit to Hounslow Council</h3>
                    <p>Yes. We handle the submission, monitor progress and respond to planning officer queries.</p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Can you coordinate structural design</h3>
                    <p>Yes. We coordinate with structural engineers so beams and load paths are designed and shown correctly on the drawings.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">Ready to start your project</h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short description. We review and reply with a fixed fee and recommended next steps.
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

          <BoroughIntentCapture slug="hounslow" />
        </main>
      </div>
    </>
  );
}
