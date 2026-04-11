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
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Barnet";
const GOOGLE_BUSINESS_PROFILE_LINK = "https://share.google/D3KId64vHtHSKPALr";

const HERO_IMAGE = "/images/barnet-hero.jpg";
const SINGLE_STOREY_IMAGE = "/images/barnet-project-single-storey.jpg";
const DOUBLE_STOREY_IMAGE = "/images/barnet-project-double-storey.jpg";
const LOFT_IMAGE = "/images/barnet-project-loft.jpg";
const OUTBUILDING_IMAGE = "/images/barnet-project-outbuilding.jpg";
const DRAWINGS_BOARD_IMAGE = "/images/barnet-project-drawings-board.jpg";
const BARNET_MAP_IMAGE = "/images/barnet-area-map.jpg";

export default function BarnetAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Barnet" });
  }

  function scrollToForm() {
    const el = document.getElementById("barnet-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "WEDRAWPLANS",
      url: "https://www.wedrawplans.co.uk/areas/barnet",
      telephone: "+44 20 3654 8508",
      email: "info@wedrawplans.com",
      image: "https://www.wedrawplans.co.uk/images/barnet-hero.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "201 Borough High Street",
        addressLocality: "London",
        postalCode: "SE1 1JA",
        addressCountry: "UK",
      },
      areaServed: [
        "Barnet",
        "Finchley",
        "Hendon",
        "Golders Green",
        "Mill Hill",
        "Colindale",
        "Burnt Oak",
        "Whetstone",
        "Totteridge",
        "High Barnet",
        "New Barnet",
        "East Barnet",
        "Friern Barnet",
        "Chipping Barnet",
      ],
      description:
        "Architectural drawing services in Barnet for single storey and double storey extensions, loft conversions, outbuildings, planning applications and building regulation packs. Fixed fees, clear scope, initial survey within 48 hours and fast communication.",
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
          name: "Do I need planning permission for a rear extension in Barnet",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. Many rear extensions in Barnet can be permitted development depending on house type, depth, height, location and any restrictions affecting the property. We confirm the correct route after checking your address.",
          },
        },
        {
          "@type": "Question",
          name: "Are loft conversions usually approved in Barnet",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Many loft conversions are acceptable in Barnet where the design is proportionate and suits the roof form and street character. Conservation areas, corner plots and some sensitive locations may require more careful design and sometimes full planning.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help with single storey and double storey extensions in Barnet",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare drawings for single storey rear extensions, side returns, wraparound extensions and double storey schemes. We advise early on the likely planning route, the massing that suits the house, and what information will be needed for planning and building control.",
          },
        },
        {
          "@type": "Question",
          name: "Can you prepare outbuilding drawings in Barnet",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare garden room and outbuilding drawings and advise whether the best route is permitted development, lawful certificate or full planning depending on size, height, position and intended use.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Barnet Council take to decide planning applications",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Householder planning applications are normally decided within 6 to 8 weeks after validation. Lawful Development Certificates are often around 4 to 6 weeks depending on workload.",
          },
        },
        {
          "@type": "Question",
          name: "Do you manage the submission to Barnet Council",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare drawings, complete forms, submit via the Planning Portal, monitor progress and respond to planning officer queries where needed.",
          },
        },
        {
          "@type": "Question",
          name: "Can you prepare building regulation drawings for Barnet projects",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare technical drawings for Building Control, including sections, construction notes, insulation build ups, ventilation layouts, structural coordination and key compliance information.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you carry out a measured survey in Barnet",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In most cases we can arrange the initial measured survey within 48 hours of instruction, subject to availability and access.",
          },
        },
        {
          "@type": "Question",
          name: "Do you cover Finchley, Hendon and Mill Hill",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We cover the wider Barnet borough including Finchley, Hendon, Mill Hill, Whetstone, Totteridge, Golders Green, East Barnet, New Barnet and nearby areas.",
          },
        },
        {
          "@type": "Question",
          name: "Do you also work on larger residential development and conversion schemes",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We also support larger residential developments and conversion schemes, but these are handled through separate development-focused pages so domestic homeowners can still find the right service quickly.",
          },
        },
      ],
    }),
    []
  );

  return (
    <>
      <Head>
        <title>Architectural Drawings in Barnet | Extensions, Lofts and Building Regs</title>
        <meta
          name="description"
          content="Architectural drawings in Barnet for single storey and double storey extensions, loft conversions, outbuildings, planning applications and building regulation packs. Fixed fees, clear scope, initial survey within 48 hours and fast communication."
        />
        <meta
          name="keywords"
          content="architectural drawings Barnet, extension drawings Barnet, loft conversion drawings Barnet, planning drawings Barnet, building regulation drawings Barnet, Finchley extension drawings, Hendon loft drawings, Mill Hill planning drawings"
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/barnet" />
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
                      Barnet architectural drawings
                    </p>

                    <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900 sm:text-[27px]">
                      Architectural Drawings in Barnet for Extensions, Lofts, Outbuildings and Building Regs
                    </h1>

                    <p className="mt-3 text-[13px] font-semibold tracking-[0.08em] text-slate-800">
                      Fixed fees • Initial survey within 48 hours • Planning and Building Regulation drawings
                    </p>
                  </div>

                  <div className="overflow-hidden border border-slate-200 bg-white shadow-md">
                    <Image
                      src={HERO_IMAGE}
                      alt="Premium rear extension and kitchen family space image for Barnet homeowners"
                      width={1600}
                      height={1000}
                      priority
                      className="h-[280px] w-full object-cover sm:h-[340px]"
                    />
                  </div>

                  <p className="text-[13px] leading-7 text-slate-700">
                    WEDRAWPLANS prepare planning and technical drawings for house extensions, loft conversions,
                    garage conversions, outbuildings, refurbishments and building regulation packs across the
                    London Borough of Barnet. We focus on approval ready submissions, practical layouts and
                    buildable technical packs so your project can move from idea to permission and then into
                    construction with more confidence.
                  </p>

                  <p className="text-[13px] leading-7 text-slate-700">
                    We work across Finchley, Hendon, Golders Green, Mill Hill, Colindale, Burnt Oak, Whetstone,
                    Totteridge, High Barnet, East Barnet, New Barnet and surrounding streets. If you are in N20,
                    NW4, EN5 or close by, we can advise quickly on the likely planning route and the drawings most
                    suitable for your project.
                  </p>

                  <p className="text-[13px] leading-7 text-slate-700">
                    Barnet is one of the strongest boroughs in our portfolio. We have experience with single storey
                    rear extensions, double storey rear extensions, loft conversions, outbuildings and approval-led
                    drawing packages that move cleanly from concept through planning and into construction.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <TrustPill title="Fixed drawing fees" body="Clear written pricing before work starts." />
                    <TrustPill title="Fast response" body="Same day replies on many enquiries." />
                    <TrustPill title="Barnet aware" body="Prepared for real local planning routes." />
                  </div>

                  <ul className="space-y-1 text-[13px] text-slate-800">
                    <li>• Single storey rear extensions, side return and wraparound extensions</li>
                    <li>• Double storey rear and side extension layouts where suitable</li>
                    <li>• Loft conversions including dormers and hip to gable where suitable</li>
                    <li>• Outbuildings, garage conversions and internal remodelling</li>
                    <li>• Planning drawings and Building Regulation packs</li>
                    <li>• Covering Finchley, Hendon, Mill Hill, Whetstone and High Barnet</li>
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
                      Fast route for Barnet homeowners
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

                <div id="barnet-quote" className="space-y-6">
                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                    <div className="p-5">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                        Built for Barnet homeowners
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
                          <label className="text-[11px] font-medium text-slate-700">Barnet postcode</label>
                          <input
                            name="postcode"
                            required
                            placeholder="N20 0JZ"
                            onFocus={(e) => {
                              e.target.placeholder = "";
                            }}
                            onBlur={(e) => {
                              if (!e.target.value) e.target.placeholder = "N20 0JZ";
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
                            <option value="Single storey rear extension drawings">
                              Single storey rear extension drawings
                            </option>
                            <option value="Double storey rear extension drawings">
                              Double storey rear extension drawings
                            </option>
                            <option value="Loft conversion drawings">Loft conversion drawings</option>
                            <option value="Garage conversion drawings">Garage conversion drawings</option>
                            <option value="Outbuilding or garden room drawings">
                              Outbuilding or garden room drawings
                            </option>
                            <option value="Internal remodelling drawings">Internal remodelling drawings</option>
                            <option value="Planning drawings only">Planning drawings only</option>
                            <option value="Building regulation pack only">Building regulation pack only</option>
                            <option value="New build house drawings">New build house drawings</option>
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-slate-700">
                            Brief description of your project
                          </label>
                          <textarea
                            name="projectDetails"
                            rows={4}
                            placeholder="For example: rear extension to a 1930s semi detached house in Barnet with a larger open plan kitchen diner and improved garden access."
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
                            Typical projects include single storey rear extensions, double storey extensions,
                            loft conversions, garage conversions and garden rooms.
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
                      src={DRAWINGS_BOARD_IMAGE}
                      alt="Barnet drawings board and approved scheme showcase"
                      width={1600}
                      height={1000}
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
                Planning approved Barnet flagship project
              </h2>

              <p className="mx-auto mt-3 max-w-3xl text-center text-[13px] leading-7 text-slate-700">
                This Barnet flagship case study is designed to showcase a full approval journey. It is set up to
                hold one strong project with extension, loft and outbuilding elements so homeowners can see a real
                local example of what WEDRAWPLANS can achieve.
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
                    src={DRAWINGS_BOARD_IMAGE}
                    alt="Planning drawings for approved Barnet flagship project including plans elevations and sections"
                    width={1600}
                    height={1000}
                    className="h-full w-full object-cover"
                  />
                </button>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-4">
                <CaseMetric
                  title="Single storey"
                  body="Rear extension element can be shown here once final Barnet material is added."
                />
                <CaseMetric
                  title="Double storey"
                  body="Double storey approved proposal can be shown as part of the same flagship scheme."
                />
                <CaseMetric
                  title="Loft conversion"
                  body="Dormer or loft element can be integrated into the same Barnet case study."
                />
                <CaseMetric
                  title="Outbuilding"
                  body="Garden room or outbuilding approval can be shown as part of the wider transformation."
                />
              </div>

              <p className="mx-auto mt-4 max-w-3xl text-center text-[13px] leading-7 text-slate-700">
                A complete drawing package prepared clearly, professionally, and ready for the next stage of approval.
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

          <ServiceInternalLinks boroughName="Barnet" />

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl space-y-10 px-4 lg:px-6">
              <div className="grid items-start gap-10 md:grid-cols-[1.25fr,0.95fr]">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Architectural drawing services in Barnet
                  </h2>

                  <p className="text-[13px] leading-7 text-slate-700">
                    WEDRAWPLANS deliver planning drawings and technical packs for Barnet homeowners and property
                    developers. We design and draw single storey and double storey house extensions, side return and
                    wraparound extensions, loft conversions, garage conversions, internal reconfiguration, outbuildings,
                    and small residential schemes. Every package is structured to reduce delays, improve approval
                    confidence, and give builders clear information to price and build accurately.
                  </p>

                  <p className="text-[13px] leading-7 text-slate-700">
                    We work throughout Finchley, Hendon, Golders Green, Mill Hill, Whetstone, Totteridge, High Barnet,
                    East Barnet, New Barnet, Friern Barnet and nearby streets. If you are in N20, NW4, EN5 or close by,
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
                        Built for Barnet homeowners
                      </div>
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-[13px] text-slate-700">
                        <li>Fixed fee quote with deliverables listed</li>
                        <li>Survey within 48 hours where possible</li>
                        <li>Barnet specific planning route guidance</li>
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
                      src={DRAWINGS_BOARD_IMAGE}
                      alt="Architectural drawings laid out neatly for a Barnet project"
                      width={1600}
                      height={1000}
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
                      src={BARNET_MAP_IMAGE}
                      alt="Barnet approved projects map and borough coverage image"
                      width={1600}
                      height={1000}
                      className="h-56 w-full object-cover"
                    />
                    <div className="space-y-2 p-5">
                      <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                        Barnet approved locations and local coverage
                      </h3>
                      <p className="text-[13px] leading-7 text-slate-700">
                        This section is reserved for a Barnet map showing approved project locations across the borough.
                        Once postcode markers are added, it becomes a strong local proof block for homeowners comparing
                        providers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <ShowcaseCard
                  title="Single storey rear extension"
                  image={SINGLE_STOREY_IMAGE}
                  alt="Single storey rear extension approved project showcase in Barnet"
                  body="Use this section to showcase one strong Barnet single storey rear extension approval. It should show a practical family-home improvement that feels highly relevant to local homeowners."
                  onClick={scrollToForm}
                />
                <ShowcaseCard
                  title="Double storey rear extension"
                  image={DOUBLE_STOREY_IMAGE}
                  alt="Double storey rear extension approved project showcase in Barnet"
                  body="Use this section to showcase a Barnet double storey extension approval. This is a strong trust signal because it shows WEDRAWPLANS can handle more substantial domestic schemes, not just simple layouts."
                  onClick={scrollToForm}
                />
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <ShowcaseCard
                  title="Loft conversion"
                  image={LOFT_IMAGE}
                  alt="Loft conversion approved project showcase in Barnet"
                  body="Use this section to showcase a Barnet loft conversion approval. It should show clear roof design thinking, usable added space, and the kind of work local homeowners often search for first."
                  onClick={scrollToForm}
                />
                <ShowcaseCard
                  title="Outbuilding and garden room"
                  image={OUTBUILDING_IMAGE}
                  alt="Outbuilding approved project showcase in Barnet"
                  body="Use this section to showcase a Barnet outbuilding or garden room approval. This helps capture homeowners searching for extra space outside the main house without moving."
                  onClick={scrollToForm}
                />
              </div>

              <div className="space-y-5">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Barnet project proof and portfolio strength
                </h2>

                <p className="text-[13px] text-slate-700">
                  Barnet is one of the boroughs where a real portfolio can do the heavy lifting for lead generation.
                  Instead of only talking about services, this page is designed to prove local capability through
                  approved projects, different extension types, loft work, outbuildings and eventual postcode-based
                  map markers across the borough.
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                  <ProofCard
                    title="Approved project range"
                    body="Single storey rear, double storey rear, loft conversion and outbuilding work can all be shown within one strong Barnet proof system."
                  />
                  <ProofCard
                    title="Local homeowner confidence"
                    body="Barnet homeowners are more likely to enquire when they can see approval history that looks relevant to their own house type and street condition."
                  />
                  <ProofCard
                    title="Separate larger-scheme route"
                    body="Bigger multi-unit and development schemes can be linked discreetly so domestic homeowners still feel this page is designed for them."
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Larger residential developments and conversion schemes
                  </h3>
                  <p className="mt-2 text-[13px] leading-7 text-slate-700">
                    We also work on larger development and conversion projects. To keep this Barnet page focused on
                    homeowners, we direct bigger schemes through a separate route.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/new-build"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] font-semibold text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                    >
                      View larger residential development work
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Barnet areas we cover
                  </h3>
                  <Image
                    src={BARNET_MAP_IMAGE}
                    alt="Barnet streets and local housing across Finchley Hendon Mill Hill Whetstone and surrounding areas"
                    width={1600}
                    height={1000}
                    className="mb-3 rounded-xl object-cover"
                  />
                  <p className="text-[13px] text-slate-700">Drawings for the whole borough of Barnet, including:</p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-700">
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Finchley</li>
                      <li>Hendon</li>
                      <li>Mill Hill</li>
                      <li>Whetstone</li>
                      <li>Totteridge</li>
                      <li>High Barnet</li>
                    </ul>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Golders Green</li>
                      <li>Colindale</li>
                      <li>Burnt Oak</li>
                      <li>East Barnet</li>
                      <li>New Barnet</li>
                      <li>Friern Barnet</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Popular projects in Barnet
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-[13px] text-slate-700">
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Single storey rear extensions</li>
                      <li>Double storey rear extensions</li>
                      <li>Side and side return extensions</li>
                      <li>Loft conversions and dormers</li>
                      <li>Hip to gable loft conversions</li>
                    </ul>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Garage conversions</li>
                      <li>Outbuildings and garden rooms</li>
                      <li>Internal reconfiguration</li>
                      <li>Open plan kitchen and living spaces</li>
                      <li>Refurbishment and insulation upgrades</li>
                    </ul>
                  </div>
                  <Image
                    src={HERO_IMAGE}
                    alt="Premium Barnet extension and kitchen family space image"
                    width={1600}
                    height={1000}
                    className="mt-2 rounded-xl object-cover"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Permitted development limits in Barnet
                </h2>

                <p className="text-[13px] text-slate-700">
                  This is a simplified guide to common permitted development limits. Final confirmation depends on
                  your house type, location and any restrictions, including sensitive sites and areas where
                  additional control may apply.
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
                      Outbuildings
                    </h3>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Garden rooms and studios often work under permitted development</li>
                      <li>Heights near boundaries are tightly controlled</li>
                      <li>Use must remain incidental to the main house</li>
                      <li>We design around comfort, storage, natural light and realistic use</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Planning drawings for Barnet
                  </h3>
                  <p className="text-[13px] leading-7 text-slate-700">
                    Our Barnet planning drawings are set out for smooth validation and clear review. We make sure
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
                    Building regulation drawings for Barnet
                  </h3>
                  <p className="text-[13px] leading-7 text-slate-700">
                    Our Barnet building regs packs focus on buildability and compliance. They reduce site questions,
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
                  Local planning knowledge for Barnet projects
                </h2>
                <p className="text-[13px] leading-7 text-emerald-900">
                  Barnet includes family housing, established residential roads, conservation sensitivities in some
                  locations, and streets where context and proportion matter. We shape each scheme to suit local
                  character so approval confidence is as strong as possible while keeping the layout practical for
                  build cost, natural light and space gain.
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
                    <h3 className="font-semibold text-slate-900">Do I need planning permission in Barnet</h3>
                    <p>
                      Many extensions and lofts can be permitted development. We check your address and advise the best
                      route from the start so you avoid delays.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">How fast can you survey</h3>
                    <p>In most cases we can arrange the initial measured survey within 48 hours of instruction.</p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">Do you submit to Barnet Council</h3>
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
                    <h3 className="font-semibold text-slate-900">Do you cover Finchley and Hendon</h3>
                    <p>
                      Yes. We cover Finchley, Hendon, Mill Hill, Whetstone, Totteridge, East Barnet and nearby
                      areas. Share your postcode and we will confirm survey options.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">
                      Can you help with garage conversions and garden rooms
                    </h3>
                    <p>
                      Yes. We prepare drawings for both and advise whether the right path is permitted development,
                      lawful certificate or full planning.
                    </p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">How do you help approval chances in Barnet</h3>
                    <p>
                      We set out clear dimensions, neighbour relationships and a proportionate design approach. In more
                      sensitive settings we focus on roof form, massing and materials so the proposal reads well to
                      planners.
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
                Ready to move your Barnet project forward
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed fee and suggested next steps for
                your Barnet extension, loft conversion, refurbishment, garage conversion, outbuilding or small
                development project.
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

          <SmartPlanningAssistant boroughName="Barnet" />
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
                Building Regulations and small residential development projects across Barnet, Finchley, Hendon,
                Mill Hill and surrounding areas.
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

function ShowcaseCard({
  title,
  image,
  alt,
  body,
  onClick,
}: {
  title: string;
  image: string;
  alt: string;
  body: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="overflow-hidden rounded-2xl border border-slate-100 bg-white text-left shadow-sm transition hover:-translate-y-0.5"
    >
      <Image src={image} alt={alt} width={1600} height={1000} className="h-64 w-full object-cover" />
      <div className="space-y-2 p-5">
        <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">{title}</h3>
        <p className="text-[13px] leading-7 text-slate-700">{body}</p>
      </div>
    </button>
  );
}

function ProofCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-900">{title}</div>
      <div className="mt-2 text-[13px] leading-7 text-slate-700">{body}</div>
    </div>
  );
}

function CaseMetric({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
      <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">{title}</div>
      <div className="mt-2 text-[12px] leading-6 text-slate-600">{body}</div>
    </div>
  );
}
