import React from "react";
import Head from "next/head";
import Image from "next/image";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

import ApprovalEvidenceStrip from "../../components/ApprovalEvidenceStrip";
import CranbournePromo from "../../components/CranbournePromo";
const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Hertfordshire";

export default function HertfordshireAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Hertfordshire" });
  }

  function scrollToForm() {
    const el = document.getElementById("hertfordshire-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/areas/hertfordshire",
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
      "Hertfordshire",
      "Broxbourne",
      "Cheshunt",
      "Waltham Cross",
      "Hoddesdon",
      "Ware",
      "Hertford",
      "Potters Bar",
      "Borehamwood",
      "Radlett",
      "St Albans",
      "Harpenden",
      "Watford",
      "Bushey",
      "Rickmansworth",
      "Chorleywood",
      "Hemel Hempstead",
      "Berkhamsted",
      "Tring",
      "Welwyn Garden City",
      "Hatfield",
      "Bishops Stortford",
    ],
    description:
      "Architectural drawing services in Hertfordshire for extensions, loft conversions, refurbishments, residential schemes and building regulation drawing packages.",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What drawings do I need for a house extension in Hertfordshire",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Most homeowners start with existing and proposed plans, elevations, and a site location plan. If your project needs Building Regulations approval, you will also need a detailed Building Regulations drawing set and supporting details. We guide you through what is needed based on your property and scope.",
        },
      },
      {
        "@type": "Question",
        name: "Can you handle planning drawings and Building Regulations drawings",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We can produce planning drawing packages and Building Regulations drawing packages. Many clients start with planning and then upgrade to Building Regulations once the scheme is agreed.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work across all Hertfordshire towns",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We cover Hertfordshire widely, including Broxbourne, Cheshunt, Waltham Cross, Potters Bar, Borehamwood, St Albans, Watford, Hemel Hempstead, Welwyn Hatfield, and nearby areas.",
        },
      },
      {
        "@type": "Question",
        name: "How do you get the measurements for my property",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We can work from a survey, existing drawings, or we can arrange an initial survey where needed. The aim is accurate, council ready drawings that match the property and the proposed scope.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Architectural Drawings in Hertfordshire | Extensions, Lofts, New Builds
        </title>
        <meta
          name="description"
          content="Architectural drawings in Hertfordshire for house extensions, loft conversions, refurbishments and building regulation packs. Fixed fees with clear scope and fast turnaround."
        />
        <link
          rel="canonical"
          href="https://www.wedrawplans.co.uk/areas/hertfordshire"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        <header className="bg-[#fdf8f3]/95 backdrop-blur border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 pt-6 pb-3 lg:px-6">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/wedrawplans-logo.png"
                alt="WEDRAWPLANS"
                width={420}
                height={140}
                priority
                className="h-24 w-auto object-contain"
              />

              <div className="mt-3 text-[11px] tracking-[0.18em] text-slate-600 uppercase">
                Architectural Drawing Consultants
              </div>

              <div className="mt-2 max-w-3xl text-[13px] font-medium text-slate-800">
                Architectural Drawings for Extensions, Lofts + New Builds at an
                Affordable Fixed Cost
              </div>
            </div>

            <hr className="mt-5 border-t border-slate-600" />

            <div className="mt-2 flex w-full items-center justify-between gap-3">
              <div className="text-[12px] text-slate-700">
                <span className="font-semibold text-slate-900">
                  Hertfordshire
                </span>{" "}
                area page
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PHONE_LINK}
                  className="hidden items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white sm:inline-flex"
                >
                  📞 {PHONE_DISPLAY}
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-[#25D366] text-white px-3 py-1.5 rounded-full text-[12px] font-medium shadow-sm hover:bg-[#1ebe57]"
                >
                  💬 <span className="hidden sm:inline">WhatsApp us</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-6 px-4 py-8 lg:px-6 lg:py-10">
              <div className="lg:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                  Hertfordshire architectural drawings
                </p>

                <h1 className="mt-2 text-[22px] sm:text-[26px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  Plans for extensions, lofts and new builds in Hertfordshire
                </h1>

                <p className="mt-3 text-[13px] text-slate-700">
                  WEDRAWPLANS prepare planning and technical drawings for house
                  extensions, loft conversions, refurbishments, conversions and
                  residential projects across Hertfordshire and nearby areas.
                  Fixed fees with clear scope and fast communication.
                </p>

                <ul className="mt-4 space-y-1 text-[13px] text-slate-800">
                  <li>• House extensions, wrap around extensions and internal remodelling</li>
                  <li>• Loft conversions including dormers and hip to gable designs</li>
                  <li>• Refurbishments and internal layout reconfiguration</li>
                  <li>• Planning drawings and building regulation packs</li>
                  <li>• Covering St Albans, Watford, Hemel Hempstead, Welwyn Hatfield and more</li>
                  <li>• Same day response on most enquiries</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-3 items-center">
                  <button
                    onClick={scrollToForm}
                    type="button"
                    className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-[#4da4b4]"
                  >
                    Get a quick quote
                  </button>

                  <a href={PHONE_LINK} className="text-[13px] underline text-slate-800">
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div id="hertfordshire-quote" className="lg:w-1/2">
                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <h2 className="text-[14px] uppercase font-semibold tracking-[0.16em] text-slate-900">
                    Free fixed fee quote
                  </h2>

                  <p className="mt-1 text-[12px] text-slate-600">
                    Tell us a little about your property and what you plan to
                    build. We will reply with a clear fixed fee for your
                    drawings.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-[13px]">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Telephone</label>
                        <input
                          name="phone"
                          required
                          type="tel"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-medium">Email</label>
                        <input
                          name="email"
                          required
                          type="email"
                          className="w-full bg-transparent border-b border-slate-300 py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">
                        Hertfordshire postcode
                      </label>
                      <input
                        name="postcode"
                        required
                        placeholder="AL1 3AA"
                        onFocus={(e) => (e.currentTarget.placeholder = "")}
                        onBlur={(e) =>
                          !e.currentTarget.value &&
                          (e.currentTarget.placeholder = "AL1 3AA")
                        }
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 text-slate-500/70 focus:text-slate-900 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">Service</label>
                      <select
                        name="service"
                        required
                        defaultValue=""
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 px-1 focus:border-[#64b7c4] outline-none"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="House extension plans">House extension plans</option>
                        <option value="Loft conversion plans">Loft conversion plans</option>
                        <option value="Planning drawings">Planning drawings</option>
                        <option value="Building regulations drawings">
                          Building regulations drawings
                        </option>
                        <option value="Refurbishment and internal alterations">
                          Refurbishment and internal alterations
                        </option>
                        <option value="Conversion or development">
                          Conversion or development
                        </option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium">
                        Brief description of your project
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="For example: rear extension to a family home with open plan kitchen and a loft conversion."
                        className="w-full border border-slate-300 rounded bg-white px-2 py-2 focus:border-[#64b7c4] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#64b7c4] py-2.5 text-white text-[13px] font-semibold uppercase tracking-[0.2em] hover:bg-[#4da4b4]"
                    >
                      Get a fixed fee quote
                    </button>

                    <p className="text-[11px] text-slate-500 mt-2">
                      Typical Hertfordshire projects include rear extensions, loft conversions, refurbishments and internal remodelling.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section id="allum-lane-elstree-showcase" aria-labelledby="allum-lane-herts-heading" className="scroll-mt-24 border-y border-[#dce6e2] bg-[#f3f8f5] py-11 sm:py-14">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#9b645d]">WEDRAWPLANS approved projects · Hertsmere</p>
                <span className="rounded-full border border-[#b9d9c8] bg-[#e6f4e9] px-3 py-1.5 text-[11px] font-bold text-[#28664d]">Planning permission granted · 2020</span>
              </div>
              <h2 id="allum-lane-herts-heading" className="mt-3 max-w-4xl text-[27px] font-semibold leading-tight tracking-tight text-[#224448] sm:text-[35px]">Allum Lane, Elstree — approved architectural design</h2>
              <p className="mt-3 max-w-4xl text-[14px] leading-7 text-[#526e73]">
                Discover an original WEDRAWPLANS house-extension scheme in Elstree, Borehamwood, with three selected architectural
                3D views and Drawings 5, 6 and 8 from the approved package. The proposal reimagines the
                roof, front and rear elevations, garden-facing glazing and internal arrangement as part of a coordinated
                householder planning application to Hertsmere Borough Council.
              </p>
              <div className="mt-6 grid items-stretch gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(310px,.85fr)]">
                <a href="/case-studies/allum-lane-elstree-major-house-extension" className="group block overflow-hidden rounded-[18px] border border-[#d8e5e0] bg-white shadow-[0_14px_32px_rgba(24,61,68,.06)]">
                  <div className="relative aspect-video overflow-hidden bg-[#eef4f0]">
                    <Image src="/images/case-studies/allum-lane/3d-03.webp" alt="Allum Lane Elstree approved architectural design showing the rear gabled glazing, terrace and garden" fill sizes="(max-width: 1024px) 100vw, 60vw" className="pointer-events-none object-contain transition-transform duration-300 group-hover:scale-[1.02]" draggable={false} />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-5">
                    <strong className="text-[12px] text-[#315f63] sm:text-[14px]">Original architectural 3D design · Rear elevation</strong>
                    <span className="text-[12px] font-semibold text-[#277784]">View complete project →</span>
                  </div>
                </a>
                <div className="flex flex-col justify-between rounded-[18px] border border-[#d8e5e0] bg-white px-5 py-6 shadow-[0_14px_32px_rgba(24,61,68,.06)] sm:px-6">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#a06b61]">Approved major house extension</p>
                    <h3 className="mt-2 text-[20px] font-semibold leading-snug text-[#24484d]">From architectural plans to a complete 3D design</h3>
                    <p className="mt-3 text-[13px] leading-7 text-[#5a7478]">
                      Front, side and rear alterations with pitched gables, contemporary windows, extensive rear glazing,
                      a recessed terrace and carefully coordinated existing and proposed elevations.
                      The original drawings also include a 45-degree right-of-light study.
                    </p>
                    <p className="mt-3 text-[11px] font-semibold text-[#31745b]">Hertsmere planning reference: 20/0662/HSE</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    <a href="/case-studies/allum-lane-elstree-major-house-extension#project-drawings" className="rounded-full bg-[#246e78] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#195861]">Explore selected drawings and 3D views →</a>
                    <button onClick={scrollToForm} type="button" className="rounded-full border border-[#b4d3cb] bg-white px-5 py-3 text-[12px] font-bold text-[#286a71] hover:bg-[#f0f8f3]">Get your fixed-fee quote</button>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-4">
                {[
                  { src: "/images/case-studies/allum-lane/3d-01.webp", title: "Front architectural design" },
                  { src: "/images/case-studies/allum-lane/full-drawing-05.webp", title: "Proposed ground-floor drawing" },
                  { src: "/images/case-studies/allum-lane/full-drawing-08.webp", title: "Proposed elevations" }
                ].map((image) => (
                  <a key={image.src} href="/case-studies/allum-lane-elstree-major-house-extension#project-drawings" className="group overflow-hidden rounded-[12px] border border-[#dfe9e4] bg-white hover:border-[#98c3b7]">
                    <div className="relative aspect-[4/3] bg-[#f7faf7]">
                      <Image src={image.src} alt={"Original WEDRAWPLANS Allum Lane project illustration: " + image.title} fill sizes="(max-width: 768px) 32vw, 27vw" className="pointer-events-none object-contain p-2 sm:p-3" draggable={false} />
                    </div>
                    <p className="border-t border-[#e2ebe5] px-2 py-2 text-[10px] font-semibold text-[#385f64] sm:px-3 sm:text-[12px]">{image.title}</p>
                  </a>
                ))}
              </div>
              <p className="mt-4 text-[12px] leading-6 text-[#70848a]">These are architectural design illustrations and approval drawings, not construction-completion photographs.</p>
            </div>
          </section>

          <CranbournePromo context="Hertfordshire" />
          <ServiceInternalLinks boroughName="Hertfordshire" />

<ApprovalEvidenceStrip
  slugs={["cranbourne-drive-hoddesdon-planning-project"]}
  title="Hoddesdon rear-extension planning and technical drawing experience"
  intro="See Broxbourne’s October 2026 rear-extension planning permission and the separate ground-floor and loft Building Regulations drawing pack prepared for this project."
/>

          <section className="bg-white border-b border-slate-200 py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-10">
              <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Architectural drawing services in Hertfordshire
                  </h2>
                  <p className="text-[13px] text-slate-700">
                    WEDRAWPLANS provide drawing packages for extensions, loft conversions,
                    refurbishments, internal alterations, residential conversions and small development schemes
                    across Hertfordshire and nearby areas.
                  </p>
                  <p className="text-[13px] text-slate-700">
                    We regularly support projects around St Albans, Watford, Hemel Hempstead,
                    Welwyn Garden City, Hatfield, Borehamwood, Potters Bar and surrounding towns.
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
                    src="/images/hertfordshire-project-4.jpg"
                    alt="Example of architectural drawings for a Hertfordshire project"
                    width={800}
                    height={500}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Technical drawings builders can price from
                    </h3>
                    <p className="text-[13px] text-slate-700">
                      Clear plans, elevations, sections and notes, coordinated with structural design so builders and inspectors have what they need.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Hertfordshire areas we cover
                  </h3>
                  <Image
                    src="/images/hertfordshire-area.jpg"
                    alt="Hertfordshire local area"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mb-3"
                  />
                  <p className="text-[13px] text-slate-700">
                    Drawings across Hertfordshire, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>St Albans AL1</li>
                      <li>Harpenden AL5</li>
                      <li>Watford WD17</li>
                      <li>Bushey WD23</li>
                      <li>Hemel Hempstead HP1</li>
                      <li>Berkhamsted HP4</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Welwyn Garden City AL7</li>
                      <li>Hatfield AL10</li>
                      <li>Borehamwood WD6</li>
                      <li>Potters Bar EN6</li>
                      <li>Cheshunt EN8</li>
                      <li>Hoddesdon EN11</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Hertfordshire
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Rear and side extensions</li>
                      <li>Wrap around extensions</li>
                      <li>Dormers and loft conversions</li>
                      <li>Kitchen and open plan layouts</li>
                      <li>Internal remodelling</li>
                    </ul>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Garage conversions</li>
                      <li>Garden rooms and studios</li>
                      <li>Refurbishments</li>
                      <li>Residential conversions</li>
                      <li>Small new build schemes</li>
                    </ul>
                  </div>
                  <Image
                    src="/images/hero.jpg"
                    alt="Residential project example"
                    width={800}
                    height={500}
                    className="rounded-xl object-cover mt-2"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Permitted development guidance in Hertfordshire
                </h2>
                <p className="text-[13px] text-slate-700">
                  This is a simplified guide to common permitted development limits. Final confirmation depends on your house type, location and any local constraints such as conservation areas.
                </p>

                <div className="grid md:grid-cols-3 gap-8 text-[13px] text-slate-700">
                  <div>
                    <h3 className="font-semibold mb-2 uppercase tracking-[0.14em] text-slate-900">
                      Rear extensions
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Standard permitted development: up to 3 m beyond the original rear wall for terraced and semi-detached houses</li>
                      <li>Standard permitted development: up to 4 m beyond the original rear wall for detached houses</li>
                      <li>Where eligible, larger rear extensions may reach 6 m for terraced/semi-detached houses or 8 m for detached houses, subject to the prior approval process</li>
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
                    Planning drawings for Hertfordshire
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-700">
                    <li>Existing and proposed floor plans</li>
                    <li>Existing and proposed elevations</li>
                    <li>Roof plans and key sections</li>
                    <li>Block plans and location plans</li>
                    <li>Drainage and construction notes where needed</li>
                    <li>Supporting information where required</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 space-y-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Building regulation drawings for Hertfordshire
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
                  Local planning awareness for Hertfordshire projects
                </h2>
                <p className="text-[13px] text-emerald-900">
                  Many Hertfordshire areas include conservation zones, design guides and street scene expectations, especially around period homes and prominent road frontages. We shape each scheme to fit context and produce a clear drawing package that supports a smooth decision.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                  Frequently asked questions
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-700">
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      What drawings do I need for an extension
                    </h3>
                    <p>
                      Most projects start with existing and proposed plans and elevations. We confirm the right set once we review your address and scope.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      How fast can you survey
                    </h3>
                    <p>
                      In most cases we can arrange the initial measured survey within forty eight hours of instruction.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Do you help with planning submissions
                    </h3>
                    <p>
                      Yes. We can prepare drawings and support the submission route, including responding to questions during review.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Can you coordinate structural design
                    </h3>
                    <p>
                      Yes. We coordinate with structural engineers so beams and load paths are designed and shown clearly on the drawings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">
                    Ready to start your project
                  </h2>
                  <p className="text-[13px] text-slate-300 mt-2">
                    Send your postcode and a short description. We review and reply with a fixed fee and recommended next steps.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 text-[13px]">
                  <a href={PHONE_LINK} className="font-semibold text-emerald-300 underline">
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    href="mailto:info@wedrawplans.com"
                    className="font-semibold text-emerald-300 underline"
                  >
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
        </main>
      </div>
    </>
  );
}
