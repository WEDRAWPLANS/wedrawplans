import BoroughIntentCapture from "../../components/BoroughIntentCapture";
import NearbySuttonLoftCaseStudy from "../../components/NearbySuttonLoftCaseStudy";
import BoroughMasterHero, { BoroughMasterHeader } from "../../components/BoroughMasterHero";
import React, { useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Merton";
const GOOGLE_BUSINESS_PROFILE_LINK = "https://share.google/D3KId64vHtHSKPALr";

const HERO_IMAGE = "/images/merton-hero.jpg";
const MERTON_LOCAL_IMAGE = "/images/merton-local.jpg";
const PROJECT_IMAGE_1 = "/images/merton-project-1.jpg";
const PROJECT_IMAGE_2 = "/images/merton-project-2.jpg";

export default function MertonAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Merton" });
  }

  function scrollToForm() {
    const el = document.getElementById("merton-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "WEDRAWPLANS",
      url: "https://www.wedrawplans.co.uk/areas/merton",
      telephone: "+44 20 3654 8508",
      email: "info@wedrawplans.com",
      image: "https://www.wedrawplans.co.uk/images/merton-hero.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "201 Borough High Street",
        addressLocality: "London",
        postalCode: "SE1 1JA",
        addressCountry: "UK",
      },
      areaServed: [
        "Merton",
        "Wimbledon",
        "South Wimbledon",
        "Wimbledon Park",
        "Raynes Park",
        "West Wimbledon",
        "Morden",
        "Mitcham",
        "Colliers Wood",
        "Merton Park",
        "Lower Morden",
        "Pollards Hill",
      ],
      description:
        "Architectural drawing services in Merton for extensions, loft conversions, planning applications, internal remodelling, flat conversions and building regulation packs. Fixed fees, clear scope, initial survey within 48 hours and fast communication.",
      sameAs: ["https://twitter.com/WEDRAWPLANS", GOOGLE_BUSINESS_PROFILE_LINK],
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
          name: "Do I need planning permission for a rear extension in Merton",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. Some rear extensions in Merton can be permitted development depending on property type, previous additions, dimensions and local restrictions. We review the address and advise whether permitted development, a lawful development certificate or a householder application is the safer route.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help with loft conversion drawings in Wimbledon and Raynes Park",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare existing and proposed drawing sets for dormer and hip to gable loft conversions, plus building regulation packs with key construction details and structural coordination where required.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Merton Council take to decide planning applications",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Householder planning applications are commonly decided in around 8 weeks after validation. Lawful Development Certificates are often around 6 to 8 weeks depending on workload and whether the submission is complete at the start.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide measured surveys in Merton",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We can arrange a measured survey so the existing drawings are accurate before the design stage begins. In many cases the initial survey can be arranged within 48 hours, subject to availability and access.",
          },
        },
        {
          "@type": "Question",
          name: "Can you produce building regulation drawings as well as planning drawings",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. After planning, we can prepare a building regulation pack including sections, construction notes, insulation build ups, ventilation information and coordination with structural design where required.",
          },
        },
        {
          "@type": "Question",
          name: "What drawings are usually required for a Merton planning submission",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Typical requirements include existing and proposed floor plans, elevations, roof plans, sections, a site location plan and a block plan. We confirm the exact list based on the property and proposal.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help with internal remodelling and open plan layouts in Merton",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We regularly prepare drawing packages for layout reconfiguration, structural openings, open plan kitchen and living areas, and wider refurbishment work where better use of space is the main goal.",
          },
        },
        {
          "@type": "Question",
          name: "Do you cover Wimbledon, Mitcham, Morden and Colliers Wood",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We cover the wider borough including Wimbledon, Raynes Park, Morden, Mitcham, Colliers Wood, Merton Park, Lower Morden and surrounding areas.",
          },
        },
      ],
    }),
    []
  );

  return (
    <>
      <Head>
        <title>Rear extension and loft planning drawings in Merton | WEDRAWPLANS</title>
        <meta name="description" content="Rear extension and loft planning drawings in Merton. Planning and Building Regulation drawings in Merton. Get a fixed-fee quotation." />
        <meta
          name="keywords"
          content="architectural drawings Merton, extension drawings Wimbledon, loft conversion drawings Raynes Park, planning drawings Merton, building regulation drawings Morden, Mitcham architectural plans, Colliers Wood extension drawings"
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/merton" />
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
        <BoroughMasterHeader boroughName={"Merton"} />

        <main>
          <BoroughMasterHero boroughName={"Merton"} formId={"merton-quote"} headline={"Architectural Drawings in Merton for Extensions, Lofts and Building Regs"} />

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <h2 className="text-center text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Example extension scheme
              </h2>

              <p className="mx-auto mt-3 max-w-3xl text-center text-[13px] leading-7 text-slate-700">
                A visual example showing how a project can move from concept stage through drawing presentation and
                onward into a more build ready package. This section is here to help homeowners understand the
                quality and clarity expected from a professional drawing set.
              </p>

              <div className="mt-6 grid items-stretch gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-lg">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/video-main-poster.jpg"
                    className="h-full w-full object-cover"
                  >
                    <source src="/videos/barnet-planning-project.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <button
                  type="button"
                  onClick={scrollToForm}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-lg transition hover:-translate-y-0.5"
                >
                  <Image
                    src={PROJECT_IMAGE_1}
                    alt="Example extension drawings presentation including plans elevations and sections"
                    width={900}
                    height={700}
                    className="h-full w-full object-cover"
                  />
                </button>
              </div>

              <p className="mx-auto mt-4 max-w-3xl text-center text-[13px] leading-7 text-slate-700">
                A complete drawing package prepared clearly, professionally, and ready for the next stage of review,
                planning or technical development.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm hover:bg-[#4da4b4]"
                >
                  Request drawing fees instantly
                </button>

                <a
                  href={GOOGLE_BUSINESS_PROFILE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  <span>⭐</span>
                  <span>Google Profile</span>
                </a>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="Merton" />

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl space-y-10 px-4 lg:px-6">
              <div className="grid items-start gap-10 md:grid-cols-[1.25fr,0.95fr]">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Architectural drawing services in Merton
                  </h2>

                  <p className="text-[13px] leading-7 text-slate-700">
                    WEDRAWPLANS deliver planning drawings and technical packs for Merton homeowners and property
                    developers. We design and draw single storey and double storey house extensions, side return
                    and wraparound extensions, loft conversions, internal reconfiguration, flat conversions,
                    refurbishments, outbuildings and small residential schemes. Every package is structured to
                    reduce delays, improve approval confidence, and give builders clear information to price and
                    build accurately.
                  </p>

                  <p className="text-[13px] leading-7 text-slate-700">
                    We work throughout Wimbledon, South Wimbledon, Wimbledon Park, Raynes Park, West Wimbledon,
                    Morden, Mitcham, Colliers Wood and nearby areas. If you are in SW19, SW20, CR4 or SM4, we
                    can advise quickly.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#4da4b4]"
                    >
                      Request drawing fees instantly
                    </button>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
                    >
                      💬 Chat on WhatsApp
                    </a>
                    <a
                      href={GOOGLE_BUSINESS_PROFILE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
                    >
                      ⭐ Google Profile
                    </a>
                  </div>

                  <div className="grid gap-4 pt-2 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                        What you get
                      </div>
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-[13px] text-slate-700">
                        <li>Measured survey and existing drawings</li>
                        <li>Proposed plans, elevations and sections</li>
                        <li>Planning submission support if required</li>
                        <li>Building regs drawings when needed</li>
                        <li>Structural coordination and details</li>
                        <li>Fast revisions and clear scope control</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                        Built for Merton homeowners
                      </div>
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-[13px] text-slate-700">
                        <li>Fixed fee quote with deliverables listed</li>
                        <li>Survey within 48 hours where possible</li>
                        <li>Merton specific planning route guidance</li>
                        <li>WhatsApp updates if you prefer</li>
                        <li>Clear next steps after every stage</li>
                        <li>Support until submission is complete</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md">
                    <Image
                      src="/images/merton-drawings.jpg"
                      alt="Architectural drawings laid out neatly for a Merton project"
                      width={800}
                      height={500}
                      className="h-56 w-full object-cover"
                    />
                    <div className="space-y-2 p-5">
                      <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                        Technical drawings builders can price from
                      </h3>
                      <p className="text-[13px] leading-7 text-slate-700">
                        Clear floor plans, elevations, sections and notes, coordinated with structural design
                        so builders, Building Control and inspectors have what they need for accurate pricing
                        and site delivery.
                      </p>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={scrollToForm}
                          className="w-full rounded-full bg-slate-900 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-slate-800"
                        >
                          Get fixed drawing fees
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md">
                    <Image
                      src={MERTON_LOCAL_IMAGE}
                      alt="Merton area coverage image showing local streets and housing"
                      width={800}
                      height={500}
                      className="h-56 w-full object-cover"
                    />
                    <div className="space-y-2 p-5">
                      <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                        Real local coverage across the borough
                      </h3>
                      <p className="text-[13px] leading-7 text-slate-700">
                        We support homeowners across Merton with measured surveys, design development and
                        planning or building regulation drawing packs tailored to the property and proposal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Merton areas we cover
                  </h3>
                  <Image
                    src="/images/merton-area.jpg"
                    alt="Merton streets and local housing across Wimbledon Raynes Park Morden and surrounding areas"
                    width={800}
                    height={500}
                    className="mb-3 rounded-xl object-cover"
                  />
                  <p className="text-[13px] text-slate-700">
                    Drawings for the whole borough of Merton, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Wimbledon</li>
                      <li>South Wimbledon</li>
                      <li>Wimbledon Park</li>
                      <li>Raynes Park</li>
                      <li>West Wimbledon</li>
                      <li>Merton Park</li>
                    </ul>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Morden</li>
                      <li>Lower Morden</li>
                      <li>Mitcham</li>
                      <li>Colliers Wood</li>
                      <li>Pollards Hill</li>
                      <li>Nearby borders</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Merton
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Rear and wraparound extensions</li>
                      <li>Side and side return extensions</li>
                      <li>Loft conversions and dormers</li>
                      <li>Hip to gable loft conversions</li>
                      <li>Internal reconfiguration</li>
                    </ul>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Garage conversions</li>
                      <li>Outbuildings and garden rooms</li>
                      <li>Flat conversions and layouts</li>
                      <li>Open plan kitchen and living spaces</li>
                      <li>Refurbishment and insulation upgrades</li>
                    </ul>
                  </div>
                  <Image
                    src={PROJECT_IMAGE_2}
                    alt="Completed Merton extension and loft style project"
                    width={800}
                    height={500}
                    className="mt-2 rounded-xl object-cover"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Before and after project showcase
                </h2>

                <p className="text-[13px] text-slate-700">
                  Merton homeowners often want more than drawings. They want clarity on what changes are achievable,
                  how the proposal will look, and whether it can move smoothly through planning and into construction.
                  These visual sections help explain that journey and strengthen trust before an enquiry is sent.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <Image
                      src={PROJECT_IMAGE_1}
                      alt="Merton extension drawings presentation"
                      width={900}
                      height={700}
                      className="h-64 w-full object-cover"
                    />
                    <div className="space-y-2 p-5">
                      <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                        Exterior and planning transformation
                      </h3>
                      <p className="text-[13px] leading-7 text-slate-700">
                        Good drawings do more than show added floor area. They help shape massing, openings,
                        proportions and the overall quality of the finished extension.
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <Image
                      src={PROJECT_IMAGE_2}
                      alt="Technical drawing set and completed Merton project visual"
                      width={900}
                      height={700}
                      className="h-64 w-full object-cover"
                    />
                    <div className="space-y-2 p-5">
                      <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                        Interior and technical outcome
                      </h3>
                      <p className="text-[13px] leading-7 text-slate-700">
                        Proposed drawings communicate the improved arrangement clearly so clients, planners and
                        builders understand the space gain, external form and construction intent from the start.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Planning and permitted development in Merton
                </h2>

                <p className="text-[13px] text-slate-700">
                  This is a simplified guide to common permitted development limits. Final confirmation depends on
                  your house type, location and any restrictions, including conservation areas and site specific
                  planning history.
                </p>

                <div className="grid gap-8 text-[13px] text-slate-700 md:grid-cols-3">
                  <div>
                    <h3 className="mb-2 font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Rear extensions
                    </h3>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Typical depths around 3m to 4m under standard permitted development routes</li>
                      <li>Larger schemes may fall under prior approval or require full planning</li>
                      <li>Neighbour impact and daylight relationships still matter</li>
                      <li>We review local context so the proposal reads well from the start</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Loft conversions
                    </h3>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Volume limits typically around 40 to 50 cubic metres depending on house type</li>
                      <li>Front roof changes are tightly controlled in many cases</li>
                      <li>Side windows often require obscure glazing</li>
                      <li>External materials should usually remain visually appropriate to the existing house</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Flats and conversions
                    </h3>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Flats do not have permitted development rights in the same way as houses</li>
                      <li>Planning permission is often required for external change or intensification</li>
                      <li>Space, daylight and amenity standards still matter</li>
                      <li>We design layouts around policy and realistic buildability</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Planning drawings for Merton
                  </h3>
                  <p className="text-[13px] leading-7 text-slate-700">
                    Our Merton planning drawings are set out for smooth validation and clear review. We make sure
                    key heights, depths, roof form and neighbour relationships are communicated properly to reduce
                    unnecessary planning queries and help the application read clearly first time.
                  </p>
                  <ul className="list-disc space-y-1 pl-4 text-[13px] text-slate-700">
                    <li>Existing and proposed floor plans</li>
                    <li>Existing and proposed elevations</li>
                    <li>Roof plans and key sections</li>
                    <li>Block plan and site location plan</li>
                    <li>Key notes to support clarity and validation</li>
                    <li>Design statement or supporting text where needed</li>
                  </ul>
                </div>

                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Building regulation drawings for Merton
                  </h3>
                  <p className="text-[13px] leading-7 text-slate-700">
                    Our Merton building regs packs focus on buildability and compliance. They reduce site questions,
                    help builders price accurately, and give Building Control the technical information they need for
                    structure, fire safety, insulation, ventilation and key junction details.
                  </p>
                  <ul className="list-disc space-y-1 pl-4 text-[13px] text-slate-700">
                    <li>Structural layout coordination and key details</li>
                    <li>Foundation strategy notes and critical junctions</li>
                    <li>Fire safety approach and escape routes where required</li>
                    <li>Thermal build ups and insulation specification</li>
                    <li>Ventilation and extract positions</li>
                    <li>Drainage strategy and basic layouts where required</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-emerald-900">
                  Local planning knowledge for Merton projects
                </h2>
                <p className="text-[13px] leading-7 text-emerald-900">
                  Merton includes a mix of strong character streets, family housing, suburban plots and denser
                  residential locations. We shape each scheme to suit local character so approval confidence is
                  as strong as possible while keeping the layout practical for build cost, natural light and space gain.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="rounded-full bg-emerald-900 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-emerald-800"
                  >
                    Request fixed drawing fees
                  </button>
                  <a href={PHONE_LINK} className="text-[12px] font-semibold text-emerald-900 underline">
                    Call {PHONE_DISPLAY}
                  </a>
                  <a
                    href={GOOGLE_BUSINESS_PROFILE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-semibold text-emerald-900 underline"
                  >
                    Google Profile
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Frequently asked questions
                </h2>

                <div className="grid gap-6 text-[13px] text-slate-700 md:grid-cols-2">
                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">How fast can you start in Merton</h3>
                    <p>
                      In many cases we can arrange the initial measured survey within 48 hours and then confirm the
                      drawing programme based on the project scope.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">Do you submit to Merton Council</h3>
                    <p>
                      Yes. We can manage the submission and respond to planning officer queries. If you prefer to
                      submit yourself, we provide validation ready files.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">Can you coordinate structural design</h3>
                    <p>
                      Yes. We coordinate with structural engineers so beams and load paths are designed and shown
                      correctly on the drawings.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">Can you do building regulations too</h3>
                    <p>
                      Yes. We produce building regulation packs with key sections, details and notes so building
                      control and contractors can build from one clear set.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">Do you cover Wimbledon and Raynes Park</h3>
                    <p>
                      Yes. We cover Wimbledon, Raynes Park, Morden, Mitcham, Colliers Wood and nearby areas.
                      Share your postcode and we will confirm survey options.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">Can you help with flat conversions</h3>
                    <p>
                      Yes. We can prepare planning and technical drawings for flat conversion proposals and layout
                      upgrades, subject to the property and planning context.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">
                      How do you help approval chances in Merton
                    </h3>
                    <p>
                      We set out clear dimensions, neighbour relationships and a proportionate design approach so
                      the proposal reads well to planners and is easier to validate and assess.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">What is the next step</h3>
                    <p>
                      Send your postcode and a short description. We reply with fixed drawing fees and the recommended
                      route: permitted development, lawful certificate, prior approval or full planning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4 rounded-2xl bg-slate-900 p-6 text-white md:flex-row md:items-center md:p-8">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Ready to start your project
                  </h2>
                  <p className="mt-2 text-[13px] text-slate-300">
                    Send your postcode and a short description. We review and reply with fixed drawing fees and
                    recommended next steps.
                  </p>
                </div>

                <div className="flex flex-col space-y-2 text-[13px]">
                  <a href={PHONE_LINK} className="font-semibold text-emerald-300 underline">
                    {PHONE_DISPLAY}
                  </a>
                  <a href={EMAIL_LINK} className="font-semibold text-emerald-300 underline">
                    {EMAIL}
                  </a>
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-slate-900 shadow hover:bg-emerald-100"
                  >
                    Request drawing fees instantly
                  </button>
                </div>
              </div>

              <div className="pt-2 text-[12px] text-slate-600">
                See also{" "}
                <Link href="/extensions" className="underline">
                  extension drawings
                </Link>
                ,{" "}
                <Link href="/loft-conversion" className="underline">
                  loft drawings
                </Link>
                ,{" "}
                <Link href="/new-build" className="underline">
                  new build drawings
                </Link>
                ,{" "}
                <Link href="/building-regulation-drawings" className="underline">
                  building regulation drawings
                </Link>
                .
              </div>
            </div>
          </section>

          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Ready to move your Merton project forward
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed fee and suggested next steps for
                your Merton extension, loft conversion, refurbishment, flat conversion or small development project.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm hover:bg-[#4da4b4]"
                >
                  Request drawing fees instantly
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  <span>💬</span>
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={GOOGLE_BUSINESS_PROFILE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                >
                  <span>⭐</span>
                  <span>Google Profile</span>
                </a>
              </div>

              <p className="mt-5 text-[13px] font-medium text-slate-800">Prefer to speak. Call {PHONE_DISPLAY}</p>
            </div>
          </section>

          <NearbySuttonLoftCaseStudy area="Merton" />
          <BoroughIntentCapture slug="merton" />
        </main>

        <footer className="border-t border-[#2a3050] bg-[#20243b]">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
            <div className="flex flex-col items-center text-center">
              <Link href="/" className="inline-flex items-center justify-center">
                <img
                  src="/images/wedrawplans-logo.png"
                  alt="WEDRAWPLANS"
                  className="h-20 w-auto object-contain"
                />
              </Link>

              <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/70">
                Architectural Drawing Consultants
              </div>

              <p className="mt-4 max-w-2xl text-[13px] leading-7 text-white/80">
                WEDRAWPLANS provide architectural drawings for house extensions, loft conversions, planning applications,
                Building Regulations and small residential development projects across Merton, Wimbledon, Raynes Park,
                Morden, Mitcham and surrounding areas.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#20243b] shadow-sm hover:bg-slate-100"
                >
                  Call {PHONE_DISPLAY}
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm hover:bg-[#1ebe57]"
                >
                  WhatsApp us
                </a>

                <a
                  href={EMAIL_LINK}
                  className="inline-flex items-center justify-center rounded-full border border-white/35 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-white hover:text-[#20243b]"
                >
                  Email us
                </a>

                <a
                  href={GOOGLE_BUSINESS_PROFILE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/35 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-white hover:text-[#20243b]"
                >
                  Google Profile
                </a>
              </div>

              <div className="mt-8 grid w-full max-w-4xl gap-6 border-t border-white/10 pt-8 text-center md:grid-cols-3">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Phone</div>
                  <div className="mt-2 text-[12px] text-white/65">
                    <a href={PHONE_LINK} className="hover:text-white">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Email</div>
                  <div className="mt-2 text-[12px] text-white/65">
                    <a href={EMAIL_LINK} className="hover:text-white">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Studio</div>
                  <div className="mt-2 text-[12px] leading-6 text-white/65">
                    201 Borough High Street
                    <br />
                    London SE1 1JA
                    <br />
                    United Kingdom
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[12px] text-white/65">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <Link href="/areas" className="hover:text-white">
                  Areas We Cover
                </Link>
                <Link href="/extensions" className="hover:text-white">
                  Extension Drawings
                </Link>
                <Link href="/loft-conversion" className="hover:text-white">
                  Loft Drawings
                </Link>
                <Link href="/new-build" className="hover:text-white">
                  New Build
                </Link>
                <Link href="/building-regulation-drawings" className="hover:text-white">
                  Building Regulations
                </Link>
              </div>

              <div className="mt-6 text-[11px] text-white/45">
                Copyright {new Date().getFullYear()} WEDRAWPLANS. All rights reserved.
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}

function TrustPill({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-900">{title}</div>
      <div className="mt-2 text-[12px] leading-6 text-slate-600">{body}</div>
    </div>
  );
}
