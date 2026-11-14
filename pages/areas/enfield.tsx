import BoroughIntentCapture from "../../components/BoroughIntentCapture";
import BarnetCombinedExtensionPromo from "../../components/BarnetCombinedExtensionPromo";
import BoroughMasterHero, { BoroughMasterHeader } from "../../components/BoroughMasterHero";
import Head from "next/head";
import React, { useMemo } from "react";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";
import CranbournePromo from "../../components/CranbournePromo";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Enfield";

const HERO_IMAGE = "/images/enfield-hero.jpg";
const ENFIELD_LOCAL_IMAGE = "/images/enfield-local.jpg";
const PROJECT_IMAGE_1 = "/images/enfield-project-1.jpg";
const PROJECT_IMAGE_2 = "/images/enfield-project-2.jpg";

export default function EnfieldAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Enfield" });
  }

  function scrollToForm() {
    const el = document.getElementById("enfield-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.wedrawplans.co.uk/areas/enfield#business",
      name: "WEDRAWPLANS",
      url: "https://www.wedrawplans.co.uk/areas/enfield",
      telephone: "+44 20 3654 8508",
      email: "info@wedrawplans.com",
      image: "https://www.wedrawplans.co.uk/images/drawings.jpg",
      priceRange: "££",
      address: {
        "@type": "PostalAddress",
        streetAddress: "201 Borough High Street",
        addressLocality: "London",
        postalCode: "SE1 1JA",
        addressCountry: "UK",
      },
      areaServed: [
        "Enfield",
        "Enfield Town",
        "Southgate",
        "Palmers Green",
        "Winchmore Hill",
        "Edmonton",
        "Bush Hill Park",
        "Oakwood",
        "Grange Park",
        "Ponders End",
        "Enfield Highway",
        "Enfield Lock",
        "Cockfosters",
        "Bounds Green",
        "Arnos Grove",
        "New Southgate",
        "Bowes Park",
        "Lower Edmonton",
        "Upper Edmonton",
        "Tottenham borders",
        "Chingford borders",
      ],
      description:
        "Architectural drawing services in Enfield for extensions, loft conversions, refurbishments, outbuildings and building regulation packs. Survey within 48 hours and full planning submission support.",
      sameAs: ["https://twitter.com/WEDRAWPLANS"],
    }),
    []
  );

  const breadcrumbJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wedrawplans.co.uk/" },
        { "@type": "ListItem", position: 2, name: "Enfield", item: "https://www.wedrawplans.co.uk/areas/enfield" },
      ],
    }),
    []
  );

  const serviceJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.wedrawplans.co.uk/areas/enfield#service",
      name: "Architectural drawings in Enfield",
      provider: { "@type": "LocalBusiness", "@id": "https://www.wedrawplans.co.uk/areas/enfield#business" },
      areaServed: "London Borough of Enfield",
      serviceType: [
        "Planning drawings",
        "Permitted development drawings",
        "Lawful Development Certificate drawings",
        "Building regulation drawings",
        "Measured survey",
      ],
      description:
        "Planning and building regulation drawing packages for Enfield homes, including extensions, loft conversions, refurbishments and outbuildings.",
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
          name: "Do I need planning permission for a rear extension in Enfield",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. Many rear extensions in Enfield can be permitted development, but it depends on your house type, site constraints, and whether restrictions apply. We confirm the best route after a quick review of your address and goals.",
          },
        },
        {
          "@type": "Question",
          name: "Is Enfield strict with loft conversions",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Enfield follows national rules but can be stricter in conservation areas and on streets where roof alterations face the road or affect neighbour amenity. We design the scheme to suit local character and guidance.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Enfield Council take to decide",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Timescales vary, but householder applications are commonly decided within several weeks after validation. Lawful Development Certificates can be a safer option if you want written confirmation for a permitted development style scheme.",
          },
        },
        {
          "@type": "Question",
          name: "Do you manage the full application to Enfield Council",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare drawings, complete forms, upload documents, submit to the council portal, and respond to planning officer queries through to decision.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can you survey a property in Enfield",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In most cases we can arrange a measured survey within 48 hours, subject to access and location.",
          },
        },
      ],
    }),
    []
  );

  return (
    <>
      <Head>
        <title>Rear extension and loft conversion plans in Enfield | WEDRAWPLANS</title>
        <meta name="description" content="Rear extension and loft conversion plans in Enfield. Planning and Building Regulation drawings in Enfield. Get a fixed-fee quotation." />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/enfield" />

        <meta property="og:title" content="Architectural Drawings Enfield | WEDRAWPLANS" />
        <meta
          property="og:description"
          content="Extensions, loft conversions, refurbishments and building regulation drawings in Enfield. Survey within 48 hours and full planning support."
        />
        <meta property="og:url" content="https://www.wedrawplans.co.uk/areas/enfield" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Architectural Drawings Enfield | WEDRAWPLANS" />
        <meta
          name="twitter:description"
          content="Planning and building regulation drawing packages in Enfield. Survey within 48 hours, fixed quote, and full submission support."
        />
        <meta name="twitter:image" content="https://www.wedrawplans.co.uk/images/drawings.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
      </Head>

      <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-[#f8f4f0] text-slate-900">
        <BoroughMasterHeader boroughName={"Enfield"} />

        <main>
          <BoroughMasterHero boroughName={"Enfield"} formId={"enfield-quote"} headline={"Plans for extensions, lofts and building regs in Enfield"} />

          <ServiceInternalLinks boroughName="Enfield" />
          <CranbournePromo context="Enfield" />

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Enfield
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS provide full drawing packages for rear and side extensions, double storey additions, loft conversions, internal alterations, outbuildings, conversions and small residential schemes across Enfield.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    We work across Enfield Town, Southgate, Palmers Green, Winchmore Hill, Oakwood, Grange Park, Bush Hill Park, Edmonton, Ponders End, Enfield Highway, Enfield Lock and Cockfosters.
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
                    alt="Example of architectural drawings for an Enfield project"
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
                    Enfield areas we cover
                  </h3>

                  <Image
                    src={PROJECT_IMAGE_1}
                    alt="Enfield area and typical home improvement projects"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                    priority
                  />

                  <p className="text-[13px] text-slate-700">Drawings for the whole borough, including:</p>

                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Enfield Town EN1</li>
                      <li>Bush Hill Park EN1</li>
                      <li>Southgate N14</li>
                      <li>Palmers Green N13</li>
                      <li>Winchmore Hill N21</li>
                      <li>Grange Park N21</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Oakwood N14</li>
                      <li>Edmonton N9</li>
                      <li>Ponders End EN3</li>
                      <li>Enfield Highway EN3</li>
                      <li>Enfield Lock EN3</li>
                      <li>Cockfosters EN4</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Enfield
                  </h3>

                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Rear and side extensions</li>
                      <li>Wraparound and L shaped extensions</li>
                      <li>Double storey side additions</li>
                      <li>Hip to gable loft conversions</li>
                      <li>Dormers and roof extensions</li>
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

              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-3">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-emerald-900">
                  Local planning knowledge for Enfield projects
                </h2>
                <p className="text-[13px] text-emerald-900">
                  Enfield includes conservation areas and varied street character. Roof alterations and visible extensions can be reviewed closely on certain streets.
                  We shape each scheme to suit local context and neighbour amenity so approval chances are as strong as possible.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">Frequently asked questions</h2>
                <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Do I need planning permission for a rear extension in Enfield</h3>
                    <p>
                      Not always. Many rear extensions in Enfield can be permitted development, but it depends on your house type, site constraints, and whether restrictions apply. We confirm the best route after a quick review of your address and goals.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Is Enfield strict with loft conversions</h3>
                    <p>
                      Enfield follows national rules but can be stricter in conservation areas and on streets where roof alterations face the road or affect neighbour amenity. We design the scheme to suit local character and guidance.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">Do you manage the full application to Enfield Council</h3>
                    <p>
                      Yes. We prepare drawings, complete forms, upload documents, submit to the council portal, and respond to planning officer queries through to decision.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">How fast can you survey a property in Enfield</h3>
                    <p>In most cases we can arrange a measured survey within 48 hours, subject to access and location.</p>
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

        <BarnetCombinedExtensionPromo context="local" area="Enfield" />
          <BoroughIntentCapture slug="enfield" />
        </main>
      </div>
    </>
  );
}
