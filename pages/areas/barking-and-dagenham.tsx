import BoroughMasterHero, { BoroughMasterHeader } from "../../components/BoroughMasterHero";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import AreaTopHeader from "../../components/AreaTopHeader";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20a%20quote%20for%20plans%20in%20Barking%20and%20Dagenham";

export default function BarkingAndDagenhamAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Barking and Dagenham" });
  }

  function scrollToForm() {
    const el = document.getElementById("barking-dagenham-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const canonicalUrl =
    "https://www.wedrawplans.co.uk/areas/barking-and-dagenham";

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
      addressCountry: "GB",
    },
    areaServed: [
      "Barking and Dagenham",
      "Barking",
      "Dagenham",
      "Becontree",
      "Chadwell Heath",
      "Marks Gate",
      "Rush Green",
      "Thames View",
      "Creekmouth",
      "Heathway",
    ],
    description:
      "Architectural drawing services in Barking and Dagenham. Planning drawings, extension layouts, loft conversion plans and building regulation packs with clear fixed fees and fast response.",
    sameAs: ["https://twitter.com/WEDRAWPLANS"],
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you cover all of Barking and Dagenham?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We cover Barking, Dagenham, Becontree, Chadwell Heath and nearby areas. Use the form and we will confirm survey and delivery dates.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with permitted development and lawful development certificates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can check whether permitted development rights apply and prepare drawings for a lawful development certificate when suitable.",
        },
      },
      {
        "@type": "Question",
        name: "What do I need to get a fixed quote?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Send your postcode, project type and a short description. If you have photos or a Rightmove link you can mention it in the details box.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide building regulation drawings as well as planning drawings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide building regulation packs including sections, details and notes, coordinated with structural design where required.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Barking and Dagenham – Extensions, Lofts and
          New Homes
        </title>
        <meta
          name="description"
          content="Planning drawings, extension layouts, loft conversion plans and building regulation packs for homes in Barking, Dagenham, Becontree and the wider borough. Fixed fees with clear scope and fast response."
        />
        <link rel="canonical" href={canonicalUrl} />
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
        <AreaTopHeader />

        <BoroughMasterHeader boroughName={"Barking and Dagenham"} />
        <main>
          {/* HERO + FORM */}
          <BoroughMasterHero boroughName={"Barking and Dagenham"} formId={"barking-dagenham-quote"} headline={"Planning drawings for extensions, lofts and home upgrades"} />

          <ServiceInternalLinks boroughName="Barking and Dagenham" />

          {/* COMMON PROJECT TYPES */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Typical home projects in Barking and Dagenham
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                The borough includes many 1930s terraces, post war estates and
                newer developments. Many households choose to extend or
                reconfigure their current home rather than move.
              </p>

              <div className="mt-5 grid gap-5 text-[13px] md:grid-cols-2">
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Rear and side extensions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Kitchen and living extensions to the rear, with side infill
                    where possible, creating larger open plan family rooms.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Loft conversions
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Dormer lofts to terraces and semis, designed to work within
                    local guidance and permitted development where it applies.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Internal remodelling
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Reworked layouts, removal of walls with structural input and
                    more efficient use of ground floor or first floor space.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    New build and small schemes
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-700">
                    Feasibility layouts and full planning drawings for infill
                    plots and small residential developments within the borough.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PLANNING GUIDANCE */}
          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Planning guidance for Barking and Dagenham
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Barking and Dagenham has local policies on extensions, roof
                forms, privacy and parking. Many projects are possible when
                massing, outlook and neighbour impact are managed carefully.
              </p>

              <ul className="mt-4 space-y-2 text-[13px] text-slate-800">
                <li>
                  • We review local guidance for extensions and lofts for your
                  street
                </li>
                <li>
                  • We check whether permitted development rights apply at your
                  address
                </li>
                <li>
                  • We prepare householder and full applications with clear
                  drawings
                </li>
                <li>• We coordinate with structural engineers where needed</li>
              </ul>

              <p className="mt-3 max-w-3xl text-[13px] text-slate-700">
                Our aim is to give the council a clear, professional set of
                drawings that show how your proposal fits the property and the
                wider street.
              </p>
            </div>
          </section>

          {/* FEES */}
          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Clear fixed fees for your home project
              </h2>

              <div className="mt-5 grid gap-4 text-[13px] md:grid-cols-3">
                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Planning drawings
                  </h3>
                  <p className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £750 + VAT
                  </p>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Existing and proposed plans and elevations ready for
                    planning or lawful development applications.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Measured surveys
                  </h3>
                  <p className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £150 + VAT
                  </p>
                  <p className="mt-2 text-[12px] text-slate-600">
                    On site measured surveys so existing drawings reflect the
                    property accurately.
                  </p>
                </div>

                <div className="rounded-md border border-slate-200 bg-[#fdf8f3] p-4">
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    Building regulation packs
                  </h3>
                  <p className="mt-1 text-[13px] font-semibold text-slate-900">
                    from £950 + VAT
                  </p>
                  <p className="mt-2 text-[12px] text-slate-600">
                    Technical sections, details and notes coordinated with
                    structural design for building control.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={scrollToForm}
                className="mt-5 rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
              >
                Request my fixed fee
              </button>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Ready to obtain your planning approval
              </h2>
              <p className="mt-3 text-[13px] text-slate-700">
                Use the form above to send a few details and we will respond
                with a clear fixed fee and next steps for your extension, loft
                or home upgrade in Barking and Dagenham.
              </p>

              <p className="mt-4 text-[13px] font-semibold text-slate-900">
                Prefer to speak. Call {PHONE_DISPLAY}
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                >
                  Get my quote
                </button>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  💬 WhatsApp
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  📞 {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
