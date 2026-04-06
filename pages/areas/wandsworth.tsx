import React, { useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";
import SmartPlanningAssistant from "../../components/SmartPlanningAssistant";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Wandsworth";
const GOOGLE_BUSINESS_PROFILE_LINK = "https://share.google/D3KId64vHtHSKPALr";

const HERO_IMAGE = "/images/hero.jpg";
const LOCAL_IMAGE = "/images/wandsworth-area.jpg";
const PROJECT_IMAGE_1 = "/images/drawings.jpg";
const PROJECT_IMAGE_2 = "/images/hero.jpg";

export default function WandsworthAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Wandsworth" });
  }

  function scrollToForm() {
    const el = document.getElementById("wandsworth-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "WEDRAWPLANS",
      url: "https://www.wedrawplans.co.uk/areas/wandsworth",
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
        "Wandsworth",
        "Wandsworth Town",
        "Earlsfield",
        "Southfields",
        "Balham",
        "Tooting",
        "Furzedown",
        "Clapham Junction",
        "Battersea",
        "Nine Elms",
        "Putney",
      ],
      description:
        "Architectural drawing services in Wandsworth for extensions, loft conversions, planning applications, refurbishments, outbuildings and building regulation packs. Fixed fees, clear scope, initial survey within 48 hours and fast communication.",
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
          name: "Do I need planning permission for a rear extension in Wandsworth",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. Many rear extensions in Wandsworth can be permitted development depending on house type, depth, height, location and any restrictions affecting the property. Conservation areas and Article 4 controls can change what is allowed, so we confirm the correct route after checking your address.",
          },
        },
        {
          "@type": "Question",
          name: "Are loft conversions usually approved in Wandsworth",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Many loft conversions are acceptable where the design is proportionate and suits the existing roof form and street character. Wandsworth can be more sensitive where conservation areas, visible roof alterations or heritage settings are involved, so careful design is important.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Wandsworth Council take to decide planning applications",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Householder planning applications are normally decided within around 8 weeks after validation. Lawful Development Certificates are often around 6 to 8 weeks depending on workload and whether the submission is complete at the start.",
          },
        },
        {
          "@type": "Question",
          name: "Do you manage the submission to Wandsworth Council",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare the drawings, complete forms, submit through the Planning Portal, monitor the application and respond to planning officer queries where needed.",
          },
        },
        {
          "@type": "Question",
          name: "Can you prepare building regulation drawings for Wandsworth projects",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare technical drawing packs for Building Control including sections, construction notes, insulation build ups, ventilation layouts, structural coordination and key compliance information.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you carry out a measured survey in Wandsworth",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In many cases we can arrange the initial measured survey within 48 hours of instruction, subject to availability and access.",
          },
        },
        {
          "@type": "Question",
          name: "What drawings are usually required for a Wandsworth planning submission",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Typical requirements include existing and proposed floor plans, elevations, roof plans, sections, a site location plan and a block plan. We confirm the exact list based on your property and proposal.",
          },
        },
        {
          "@type": "Question",
          name: "Can you coordinate structural engineer calculations",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We coordinate with structural engineers so beams, load paths and critical details align with the drawings and the intended construction method.",
          },
        },
        {
          "@type": "Question",
          name: "Do you cover Battersea, Balham, Earlsfield and Tooting",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We cover the wider borough including Wandsworth Town, Earlsfield, Southfields, Balham, Tooting, Furzedown, Clapham Junction, Battersea, Nine Elms and nearby areas.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help with refurbishments and internal remodelling in Wandsworth",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare drawings for refurbishments, internal alterations and reconfiguration projects and can advise whether the right route is planning, lawful certificate or Building Regulations only depending on the works.",
          },
        },
      ],
    }),
    []
  );

  return (
    <>
      <Head>
        <title>Architectural Drawings in Wandsworth | Planning and Building Regs Plans</title>
        <meta
          name="description"
          content="Architectural drawings in Wandsworth for extensions, loft conversions, planning applications, refurbishments and building regulation packs. Fixed fees, clear scope, initial survey within 48 hours and fast communication."
        />
        <meta
          name="keywords"
          content="architectural drawings Wandsworth, extension drawings Wandsworth, loft conversion drawings Wandsworth, planning drawings Wandsworth, building regulation drawings Wandsworth, Battersea architectural plans, Balham drawings, Earlsfield extension plans"
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/wandsworth" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Architectural Drawings in Wandsworth | WEDRAWPLANS" />
        <meta
          property="og:description"
          content="Extensions, loft conversions, refurbishments and building regulation drawings in Wandsworth. Fixed fees, initial survey within 48 hours and full planning support."
        />
        <meta property="og:url" content="https://www.wedrawplans.co.uk/areas/wandsworth" />
        <meta property="og:image" content="https://www.wedrawplans.co.uk/images/hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Architectural Drawings in Wandsworth | WEDRAWPLANS" />
        <meta
          name="twitter:description"
          content="Extensions, lofts, refurbishments and building regs drawings in Wandsworth. Initial survey within 48 hours."
        />
        <meta name="twitter:image" content="https://www.wedrawplans.co.uk/images/hero.jpg" />
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
        <header className="sticky top-0 z-[60] border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 pb-3 pt-4 lg:px-6 lg:pt-5">
            <div className="flex flex-col items-center text-center">
              <Link href="/" className="inline-flex items-center justify-center">
                <img
                  src="/images/wedrawplans-logo.png"
                  alt="WEDRAWPLANS"
                  className="h-24 w-auto object-contain lg:h-28"
                />
              </Link>

              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-slate-600">
                Architectural Drawing Consultants
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13px] text-slate-900">
                <Link href="/" className="hover:text-black">
                  Home
                </Link>
                <Link href="/extensions" className="hover:text-black">
                  Extension Drawings
                </Link>
                <Link href="/loft-conversion" className="hover:text-black">
                  Loft Drawings
                </Link>
                <Link href="/new-build" className="hover:text-black">
                  New Build Drawings
                </Link>
                <Link href="/building-regulation-drawings" className="hover:text-black">
                  Building Regulations
                </Link>
                <Link href="/areas" className="hover:text-black">
                  Areas We Cover
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 rounded-full bg-[#20243b] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#161a2f]"
                >
                  <span>📞</span>
                  <span>Call {PHONE_DISPLAY}</span>
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1ebe57]"
                >
                  <span>WhatsApp us now</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6 lg:py-10">
              <div className="grid gap-8 lg:grid-cols-[1.06fr,0.94fr] lg:items-stretch">
                <div className="space-y-5">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
                      Wandsworth architectural drawings
                    </p>

                    <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900 sm:text-[27px]">
                      Architectural Drawings in Wandsworth for Extensions, Lofts and Building Regs
                    </h1>

                    <p className="mt-3 text-[13px] font-semibold tracking-[0.08em] text-slate-800">
                      Fixed fees • Initial survey within 48 hours • Planning and Building Regulation drawings
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                    <Image
                      src={HERO_IMAGE}
                      alt="Architectural drawings and home improvement visual for a Wandsworth project"
                      width={1400}
                      height={950}
                      priority
                      className="h-[280px] w-full object-cover sm:h-[340px]"
                    />
                  </div>

                  <p className="text-[13px] leading-7 text-slate-700">
                    WEDRAWPLANS prepare planning and technical drawings for house extensions, loft conversions,
                    refurbishments, garage conversions, outbuildings and building regulation packs across the
                    London Borough of Wandsworth. We focus on approval ready submissions, practical layouts and
                    buildable technical packs so your project can move from idea to permission and then into
                    construction with more confidence.
                  </p>

                  <p className="text-[13px] leading-7 text-slate-700">
                    We work across Wandsworth Town, Earlsfield, Southfields, Balham, Tooting, Furzedown,
                    Clapham Junction, Battersea, Nine Elms and nearby areas. If you are in SW11, SW12, SW17,
                    SW18 or close by, we can advise quickly on the likely planning route and the drawings most
                    suitable for your project.
                  </p>

                  <p className="text-[13px] leading-7 text-slate-700">
                    Common local enquiries include rear and side return extensions to period terraces, loft dormers,
                    wraparound kitchen enlargements, internal reconfiguration, basement related upgrades and
                    technical packs for projects moving into construction. Wandsworth projects often need a careful
                    response where neighbour impact, massing, roof form and local street character matter.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <TrustPill title="Fixed drawing fees" body="Clear written pricing before work starts." />
                    <TrustPill title="Fast response" body="Same day replies on many enquiries." />
                    <TrustPill title="Wandsworth aware" body="Prepared for real local planning routes." />
                  </div>

                  <ul className="space-y-1 text-[13px] text-slate-800">
                    <li>• Rear, side return and wraparound house extensions</li>
                    <li>• Loft conversions including dormers and hip to gable where suitable</li>
                    <li>• Refurbishments, internal remodelling and layout upgrades</li>
                    <li>• Planning drawings and Building Regulation packs</li>
                    <li>• Covering Battersea, Clapham Junction, Balham, Tooting, Earlsfield and more</li>
                    <li>• Same day response on most enquiries</li>
                  </ul>

                  <div className="flex flex-wrap items-center gap-3">
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
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                    >
                      <span>💬</span>
                      <span>Send photos on WhatsApp</span>
                    </a>

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

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                      Fast route for Wandsworth homeowners
                    </div>
                    <div className="mt-2 grid grid-cols-1 gap-3 text-[12px] text-slate-700 sm:grid-cols-3">
                      <div className="rounded-xl border border-slate-100 p-3">
                        <div className="font-semibold text-slate-900">Step 1</div>
                        <div>Send postcode and project type</div>
                      </div>
                      <div className="rounded-xl border border-slate-100 p-3">
                        <div className="font-semibold text-slate-900">Step 2</div>
                        <div>Survey within 48 hours</div>
                      </div>
                      <div className="rounded-xl border border-slate-100 p-3">
                        <div className="font-semibold text-slate-900">Step 3</div>
                        <div>Fixed fee drawings and submission support</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="wandsworth-quote" className="space-y-6">
                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                    <div className="p-5">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                        Built for Wandsworth homeowners
                      </div>
                      <h2 className="mt-2 text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                        Request your fixed fee quote
                      </h2>

                      <p className="mt-2 text-[12px] leading-6 text-slate-600">
                        Tell us a little about your property and what you plan to build. We will reply with a
                        clear fixed fee for your drawings and the recommended next steps.
                      </p>

                      <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-[13px]">
                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-slate-700">Name</label>
                          <input
                            name="name"
                            required
                            className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] outline-none focus:border-[#64b7c4]"
                          />
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="space-y-1">
                            <label className="text-[11px] font-medium text-slate-700">Telephone</label>
                            <input
                              name="phone"
                              required
                              type="tel"
                              className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] outline-none focus:border-[#64b7c4]"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[11px] font-medium text-slate-700">Email</label>
                            <input
                              name="email"
                              required
                              type="email"
                              className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] outline-none focus:border-[#64b7c4]"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-slate-700">Wandsworth postcode</label>
                          <input
                            name="postcode"
                            required
                            placeholder="SW18 2AA"
                            onFocus={(e) => {
                              e.target.placeholder = "";
                            }}
                            onBlur={(e) => {
                              if (!e.target.value) e.target.placeholder = "SW18 2AA";
                            }}
                            className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] text-slate-500/70 outline-none focus:border-[#64b7c4] focus:text-slate-900"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-slate-700">What drawings do you need</label>
                          <select
                            name="projectType"
                            required
                            defaultValue=""
                            className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] outline-none focus:border-[#64b7c4]"
                          >
                            <option value="" disabled>
                              Select project type
                            </option>
                            <option value="House extension drawings">House extension drawings</option>
                            <option value="Loft conversion drawings">Loft conversion drawings</option>
                            <option value="Refurbishment drawings">Refurbishment drawings</option>
                            <option value="Internal remodelling drawings">Internal remodelling drawings</option>
                            <option value="Garage conversion drawings">Garage conversion drawings</option>
                            <option value="Outbuilding or garden room drawings">
                              Outbuilding or garden room drawings
                            </option>
                            <option value="New build house drawings">New build house drawings</option>
                            <option value="Conversion to flats drawings">Conversion to self contained flats</option>
                            <option value="Planning drawings only">Planning drawings only</option>
                            <option value="Building regulation pack only">Building regulation pack only</option>
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-slate-700">
                            Brief description of your project
                          </label>
                          <textarea
                            name="projectDetails"
                            rows={4}
                            placeholder="For example: side return and rear extension to a Victorian terrace plus a dormer loft room."
                            className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-[13px] outline-none focus:border-[#64b7c4]"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full rounded-full bg-[#64b7c4] py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                        >
                          Request drawing fees instantly
                        </button>

                        <div className="mt-2 space-y-1 text-[11px] text-slate-500">
                          <div>
                            Typical projects include rear extensions, loft conversions, refurbishments, internal
                            remodelling and layout upgrades.
                          </div>
                          <div>
                            We reply with a clear scope, fixed fee, and the recommended planning route for your address.
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                    <Image
                      src={LOCAL_IMAGE}
                      alt="Wandsworth local streets and housing context"
                      width={1200}
                      height={900}
                      className="h-[250px] w-full object-cover"
                    />
                    <div className="space-y-2 p-5">
                      <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                        Space planning that feels right as well as looks right
                      </h3>
                      <p className="text-[13px] leading-7 text-slate-700">
                        Strong extension drawings are not only about getting permission. They are also about
                        daylight, circulation, kitchen layout, structure and how the finished space will
                        actually feel once built.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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

          <ServiceInternalLinks boroughName="Wandsworth" />

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl space-y-10 px-4 lg:px-6">
              <div className="grid items-start gap-10 md:grid-cols-[1.25fr,0.95fr]">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Architectural drawing services in Wandsworth
                  </h2>

                  <p className="text-[13px] leading-7 text-slate-700">
                    WEDRAWPLANS deliver planning drawings and technical packs for Wandsworth homeowners and property
                    developers. We design and draw single storey and double storey house extensions, side return and
                    wraparound extensions, loft conversions, garage conversions, internal reconfiguration,
                    refurbishments, outbuildings and small residential schemes. Every package is structured to
                    reduce delays, improve approval confidence, and give builders clear information to price and
                    build accurately.
                  </p>

                  <p className="text-[13px] leading-7 text-slate-700">
                    We work throughout Wandsworth Town, Earlsfield, Southfields, Balham, Tooting, Furzedown,
                    Clapham Junction, Battersea, Nine Elms and nearby areas. If you are in SW11, SW12, SW17 or SW18,
                    we can advise quickly.
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
                        Built for Wandsworth homeowners
                      </div>
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-[13px] text-slate-700">
                        <li>Fixed fee quote with deliverables listed</li>
                        <li>Survey within 48 hours where possible</li>
                        <li>Wandsworth specific planning route guidance</li>
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
                      src="/images/drawings.jpg"
                      alt="Architectural drawings laid out neatly for a Wandsworth project"
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
                      src={LOCAL_IMAGE}
                      alt="Wandsworth area coverage image showing local streets and housing"
                      width={800}
                      height={500}
                      className="h-56 w-full object-cover"
                    />
                    <div className="space-y-2 p-5">
                      <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                        Real local coverage across the borough
                      </h3>
                      <p className="text-[13px] leading-7 text-slate-700">
                        We support homeowners across Wandsworth with measured surveys, design development and
                        planning or building regulation drawing packs tailored to the property and proposal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Wandsworth areas we cover
                  </h3>
                  <Image
                    src={LOCAL_IMAGE}
                    alt="Wandsworth streets and local housing across Battersea Balham Earlsfield Tooting and surrounding areas"
                    width={800}
                    height={500}
                    className="mb-3 rounded-xl object-cover"
                  />
                  <p className="text-[13px] text-slate-700">
                    Drawings for the whole borough of Wandsworth, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Wandsworth Town</li>
                      <li>Earlsfield</li>
                      <li>Southfields</li>
                      <li>Balham</li>
                      <li>Tooting</li>
                      <li>Furzedown</li>
                    </ul>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Clapham Junction</li>
                      <li>Battersea</li>
                      <li>Nine Elms</li>
                      <li>Putney borders</li>
                      <li>Riverside streets</li>
                      <li>Parkside streets</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Wandsworth
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
                      <li>Refurbishments</li>
                      <li>Garden rooms and studios</li>
                      <li>Garage conversions</li>
                      <li>High specification upgrades</li>
                      <li>Small infill schemes</li>
                    </ul>
                  </div>
                  <Image
                    src={PROJECT_IMAGE_2}
                    alt="Completed extension and loft project in a Wandsworth style setting"
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
                  Wandsworth homeowners often want more than drawings. They want clarity on what changes are achievable,
                  how the proposal will look, and whether it can move smoothly through planning and into construction.
                  These visual sections help explain that journey and strengthen trust before an enquiry is sent.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <Image
                      src={PROJECT_IMAGE_1}
                      alt="Wandsworth extension drawings presentation"
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
                      alt="Technical drawing set and completed Wandsworth style project visual"
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
                  Planning and permitted development in Wandsworth
                </h2>

                <p className="text-[13px] text-slate-700">
                  This is a simplified guide. Final confirmation depends on your house type, location and any
                  restrictions, including conservation areas, Article 4 directions and sensitive heritage settings.
                </p>

                <div className="grid gap-8 text-[13px] text-slate-700 md:grid-cols-3">
                  <div>
                    <h3 className="mb-2 font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Rear extensions
                    </h3>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Depth and height checked carefully against neighbours</li>
                      <li>Daylight and overshadowing reviewed early</li>
                      <li>Street context and local precedents checked</li>
                      <li>Party wall considerations discussed where relevant</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Loft conversions
                    </h3>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Dormer size guided by roof form and character</li>
                      <li>Front roof changes are tightly controlled</li>
                      <li>Roof terraces often need a stronger planning case</li>
                      <li>Stair headroom and fire safety must be designed properly</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold uppercase tracking-[0.14em] text-slate-900">
                      Refurbishment and remodelling
                    </h3>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Improved layouts for family living and flow</li>
                      <li>Better light, storage and circulation</li>
                      <li>Energy and insulation upgrades where needed</li>
                      <li>Structural openings coordinated from the start</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Planning drawings for Wandsworth
                  </h3>
                  <p className="text-[13px] leading-7 text-slate-700">
                    Our Wandsworth planning drawings are set out for smooth validation and clear review. We make sure
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
                    Building regulation drawings for Wandsworth
                  </h3>
                  <p className="text-[13px] leading-7 text-slate-700">
                    Our Wandsworth building regs packs focus on buildability and compliance. They reduce site questions,
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
                  Local planning knowledge for Wandsworth projects
                </h2>
                <p className="text-[13px] leading-7 text-emerald-900">
                  Wandsworth includes high value terraces, family houses and streets where design quality, neighbour
                  impact and detailing are reviewed closely. We shape each scheme to suit local character so approval
                  confidence is as strong as possible while keeping the layout practical for build cost, natural light
                  and space gain.
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
                    <h3 className="font-semibold text-slate-900">
                      Do I need planning permission for a rear extension in Wandsworth
                    </h3>
                    <p>
                      Not always. Many rear extensions can be permitted development, but conservation areas and Article 4
                      directions can change what is allowed. We check your address and advise the best route at the start.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">How fast can you survey</h3>
                    <p>In many cases we can arrange the initial measured survey within 48 hours of instruction.</p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">Do you submit to Wandsworth Council</h3>
                    <p>Yes. We handle submission, monitor progress and respond to planning officer queries.</p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">Can you coordinate structural design</h3>
                    <p>
                      Yes. We coordinate with structural engineers so beams and load paths are designed and shown
                      correctly on the drawings.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">Do you cover Battersea and Balham</h3>
                    <p>
                      Yes. We cover Wandsworth Town, Earlsfield, Southfields, Balham, Tooting, Clapham Junction,
                      Battersea and nearby areas. Share your postcode and we will confirm survey options.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">
                      Can you help with refurbishments and internal remodelling
                    </h3>
                    <p>
                      Yes. We prepare drawings for both and advise whether the right path is planning, lawful
                      certificate or Building Regulations only depending on the scope.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">
                      How do you help approval chances in Wandsworth
                    </h3>
                    <p>
                      We set out clear dimensions, neighbour relationships and a proportionate design approach. In more
                      sensitive settings we focus on roof form, massing and materials so the proposal reads well to planners.
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
                Ready to move your Wandsworth project forward
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed fee and suggested next steps for
                your Wandsworth extension, loft conversion, refurbishment, garage conversion or small development project.
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

          <SmartPlanningAssistant boroughName="Wandsworth" />
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
                Building Regulations and small residential development projects across Wandsworth, Battersea, Balham,
                Earlsfield, Tooting and surrounding areas.
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

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with WEDRAWPLANS"
          className="fixed bottom-4 right-4 z-[80] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white/70 hover:bg-[#1ebe57]"
        >
          <span className="text-xl">💬</span>
        </a>
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
