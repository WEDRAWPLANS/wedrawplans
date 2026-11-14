import BoroughIntentCapture from "../../components/BoroughIntentCapture";
import BarnetCombinedExtensionPromo from "../../components/BarnetCombinedExtensionPromo";
import BoroughMasterHero, { BoroughMasterHeader } from "../../components/BoroughMasterHero";
import React, { useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";

import ApprovalEvidenceStrip from "../../components/ApprovalEvidenceStrip";
const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20quote%20for%20plans%20in%20Harrow";
const GOOGLE_BUSINESS_PROFILE_LINK = "https://share.google/D3KId64vHtHSKPALr";

export default function HarrowAreaPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "Harrow" });
  }

  function scrollToForm() {
    const el = document.getElementById("harrow-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const localBusinessJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "WEDRAWPLANS",
      url: "https://www.wedrawplans.co.uk/areas/harrow",
      telephone: "+44 20 3654 8508",
      email: "info@wedrawplans.com",
      image: "https://www.wedrawplans.co.uk/images/case-studies/cannon-lane-pinner-5-metre-rear-extension/cannon-lane-rear-extension-3d.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "201 Borough High Street",
        addressLocality: "London",
        postalCode: "SE1 1JA",
        addressCountry: "UK",
      },
      areaServed: [
        "Harrow",
        "Harrow on the Hill",
        "Harrow Weald",
        "North Harrow",
        "South Harrow",
        "West Harrow",
        "Wealdstone",
        "Rayners Lane",
        "Kenton",
        "Queensbury",
        "Pinner borders",
        "Stanmore borders",
        "Edgware borders",
      ],
      description:
        "Architectural drawings in Harrow for house extensions, loft conversions, refurbishments, garage conversions and new builds. Fixed fee planning and building regulation packs covering Harrow on the Hill, Kenton, Rayners Lane, Wealdstone and the wider borough.",
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
          name: "Do I need planning permission for a rear extension in Harrow",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. Many rear extensions in Harrow can be permitted development, depending on house type, depth, height and location. We confirm the correct route after checking your address.",
          },
        },
        {
          "@type": "Question",
          name: "Are loft conversions usually approved in Harrow",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Many loft conversions are acceptable in Harrow where design is proportionate and respects street character. Conservation areas and corner plots can require more careful design and sometimes full planning.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Harrow Council take to decide planning applications",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Householder planning applications are normally decided within 6 to 8 weeks after validation. Lawful Development Certificates are typically around 4 to 6 weeks, depending on workload.",
          },
        },
        {
          "@type": "Question",
          name: "Do you manage the submission to Harrow Council",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare drawings, complete forms, submit via the Planning Portal, monitor progress and respond to planning officer queries where needed.",
          },
        },
        {
          "@type": "Question",
          name: "Can you prepare building regulation drawings for Harrow projects",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare technical drawings for Building Control, including sections, construction notes, insulation build ups, ventilation layouts, and coordination with structural design.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you carry out a measured survey in Harrow",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In most cases we can arrange the initial measured survey within 48 hours of instruction, subject to availability and access.",
          },
        },
        {
          "@type": "Question",
          name: "What drawings are usually required for a Harrow planning submission",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Typical requirements include existing and proposed floor plans, elevations, roof plans, sections, and a site location plan and block plan. We confirm the exact list based on your proposal.",
          },
        },
        {
          "@type": "Question",
          name: "Can you coordinate structural engineer calculations",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We coordinate with structural engineers so steels, load paths, and critical details align with the drawings and the build.",
          },
        },
      ],
    }),
    []
  );

  return (
    <>
      <Head>
        <title>Rear extension planning drawings and loft plans in Harrow | WEDRAWPLANS</title>
        <meta name="description" content="Rear extension planning drawings and loft plans in Harrow. Planning and Building Regulation drawings in Harrow. Get a fixed-fee quotation." />
        <meta
          name="keywords"
          content="architectural drawings Harrow, extension drawings Harrow, loft conversion drawings Harrow, planning drawings Harrow, building regulation drawings Harrow, architectural services Harrow"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Architectural Drawings in Harrow | WEDRAWPLANS" />
        <meta property="og:description" content="Harrow architectural drawings for extensions, loft conversions, flat conversions and Building Regulations. Explore our local approval and request a fixed-fee quote." />
        <meta property="og:url" content="https://www.wedrawplans.co.uk/areas/harrow" />
        <meta property="og:image" content="https://www.wedrawplans.co.uk/images/case-studies/cannon-lane-pinner-5-metre-rear-extension/cannon-lane-rear-extension-3d.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas/harrow" />
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
        <BoroughMasterHeader boroughName={"Harrow"} />

        <main>
          <BoroughMasterHero boroughName={"Harrow"} formId={"harrow-quote"} headline={"Architectural Drawings in Harrow for Extensions, Lofts and New Builds"} showcaseImage={{ src: "/images/case-studies/cannon-lane-pinner-5-metre-rear-extension/cannon-lane-rear-extension-3d.webp", alt: "Architectural garden perspective of a 5 metre rear extension in Cannon Lane, Pinner", fit: "cover", watermarkEmbedded: true, caption: "Planning-approved 5 metre rear extension · Cannon Lane, Pinner · see the architectural drawing gallery below." }} />

<ApprovalEvidenceStrip
  slugs={["cannon-lane-pinner-5-metre-rear-extension","burnt-oak-broadway-harrow-retail-flats"]}
  title="Our Harrow approvals: 5 metre extension and three studio flats"
  intro="Explore a 5 metre rear extension with original Pinner planning drawings and an approved Harrow scheme creating three studio homes above an existing shop. Both case studies include the council planning reference and original WEDRAWPLANS project work."
/>

          <section aria-labelledby="harrow-studio-case-heading" className="border-b border-[#dce7e0] bg-[#edf6f1] py-11 sm:py-14">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="max-w-3xl">
                <p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#28735d]">Harrow Council approval · P/0076/21 · Original architectural work</p>
                <h2 id="harrow-studio-case-heading" className="mt-2 text-[27px] font-semibold leading-tight text-[#24494c] sm:text-[33px]">
                  Three studio flats approved above an existing Harrow shop
                </h2>
                <p className="mt-3 text-[14px] leading-7 text-[#536f73]">
                  At Burnt Oak Broadway, WEDRAWPLANS helped turn a compact mixed-use building into an approved proposal for three self-contained studio flats—two on the first floor and one in the attic—without removing the ground-floor shop.
                  The design incorporated a rear shop extension, dormer and supporting facilities, with planning permission granted by Harrow Council in August 2021. Explore the layouts and plans behind that result.
                </p>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { src: "/images/case-studies/burnt-oak-broadway-harrow-retail-flats/first-floor-video-poster.webp", title: "Two first-floor studio flats", label: "3D walkthrough 01" },
                  { src: "/images/case-studies/burnt-oak-broadway-harrow-retail-flats/attic-floor-video-poster.webp", title: "One attic-floor studio flat", label: "3D walkthrough 02" }
                ].map((video) => (
                  <Link key={video.src} href="/case-studies/burnt-oak-broadway-harrow-retail-flats#harrow-3d-animations" className="group overflow-hidden rounded-[18px] border border-[#d5e5dd] bg-white shadow-[0_8px_30px_rgba(20,76,66,.06)]">
                    <div className="relative aspect-video bg-[#e8efea]">
                      <Image src={video.src} alt={video.title + " — architectural 3D design for the approved Burnt Oak Broadway studio-flat conversion"} fill sizes="(max-width: 640px) 100vw, 46vw" className="pointer-events-none object-cover transition-transform duration-300 group-hover:scale-[1.015]" draggable={false} />
                    </div>
                    <div className="px-4 py-4">
                      <p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-[#9a6e5e]">{video.label}</p>
                      <h3 className="mt-1 text-[15px] font-bold text-[#2b5558]">{video.title}</h3>
                      <span className="mt-2 inline-block text-[12px] font-bold text-[#21727b]">Explore the studio layout in 3D →</span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/case-studies/burnt-oak-broadway-harrow-retail-flats" className="inline-flex rounded-full bg-[#256e76] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#1a5960]">See how WEDRAWPLANS secured planning approval</Link>
                <button type="button" onClick={scrollToForm} className="rounded-full border border-[#bad8cd] bg-white px-5 py-3 text-[12px] font-bold text-[#296b70] hover:bg-[#e2f2e8]">Request a fixed-fee quote</button>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="Harrow" />

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-5xl space-y-10 px-4 lg:px-6">
              <div className="grid items-start gap-10 md:grid-cols-[1.7fr,1.3fr]">
                <div className="space-y-4">
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Architectural drawing services in Harrow
                  </h2>
                  <p className="text-[13px] leading-7 text-slate-700">
                    WEDRAWPLANS deliver planning drawings and technical packs for Harrow homeowners and property developers. We design and draw single storey and double storey house extensions, side return and wraparound extensions, loft conversions, internal reconfiguration, outbuildings, and small new build schemes. Every package is structured to reduce delays, improve approval confidence, and give builders clear information to price and build accurately.
                  </p>
                  <p className="text-[13px] leading-7 text-slate-700">
                    We work throughout Harrow on the Hill, Harrow Weald, North Harrow, South Harrow, West Harrow, Wealdstone, Kenton, Rayners Lane and nearby streets. If you are in HA1, HA2, HA3, HA5 or HA7 we can advise quickly.
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
                        Your drawing package
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
                        What to expect from WEDRAWPLANS
                      </div>
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-[13px] text-slate-700">
                        <li>Fixed fee quote with deliverables listed</li>
                        <li>Survey within 48 hours where possible</li>
                        <li>Harrow specific planning route guidance</li>
                        <li>WhatsApp updates if you prefer</li>
                        <li>Clear next steps after every stage</li>
                        <li>Support until submission is complete</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-2xl border border-[#d5e5db] bg-[#f3faf5] p-5 shadow-sm sm:p-6">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#28735e]">From survey to council-ready plans</p>
                    <h3 className="mt-3 text-[20px] font-semibold leading-snug text-[#233c42]">Professional drawings for planning and Building Control</h3>
                    <p className="mt-3 text-[13px] leading-7 text-[#536a6e]">We produce accurate existing and proposed plans, elevations and sections. Where included in the agreed scope, we coordinate technical information and structural engineer input.</p>
                    <ul className="mt-4 space-y-2 text-[13px] leading-6 text-[#425d60]">
                      <li>✓ Fixed fee and clearly defined drawing package</li>
                      <li>✓ Appropriate planning route checked for your property</li>
                      <li>✓ Building Regulations support where required</li>
                    </ul>
                  </div>
                  <button type="button" onClick={scrollToForm} className="mt-6 w-full rounded-full bg-[#236d75] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#19555d]">Get your fixed-fee quote</button>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <section aria-labelledby="harrow-area-cover-heading" className="rounded-2xl border border-[#dce7e1] bg-[#f5faf7] p-5 shadow-sm sm:p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#29715b]">Local drawing services</p>
                  <h3 id="harrow-area-cover-heading" className="mt-2 text-[21px] font-semibold leading-snug text-[#233f45]">Harrow areas we cover</h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#526b71]">We prepare planning and technical drawings throughout Harrow, including these neighbourhoods and nearby borough borders.</p>
                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {["Harrow on the Hill","Harrow Weald","North Harrow","South Harrow","West Harrow","Wealdstone","Kenton","Rayners Lane","Queensbury","Pinner","Stanmore","Edgware","Hatch End","Northwick Park"].map((area) => (
                      <span key={area} className="rounded-lg border border-[#dce8e0] bg-white px-3 py-2 text-[12px] leading-5 text-[#3d5960]">{area}</span>
                    ))}
                  </div>
                </section>
                <section aria-labelledby="harrow-homeowner-projects-heading" className="rounded-2xl border border-[#dce7e1] bg-white p-5 shadow-sm sm:p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#29715b]">For homeowners and landlords</p>
                  <h3 id="harrow-homeowner-projects-heading" className="mt-2 text-[21px] font-semibold leading-snug text-[#233f45]">Popular Harrow projects</h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#526b71]">Choose the type of project you are considering and ask for a tailored, fixed-fee drawing quotation.</p>
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {["Rear extensions","Side and wraparound extensions","Loft and dormer conversions","Garage conversions","Outbuildings and studios","Internal remodelling","Flat conversions","New-build homes"].map((project) => (
                      <span key={project} className="rounded-lg border border-[#e0e8e3] bg-[#f7faf8] px-3 py-3 text-[12px] leading-5 text-[#3d5960]">{project}</span>
                    ))}
                  </div>
                  <Link href="/case-studies/burnt-oak-broadway-harrow-retail-flats" className="mt-5 inline-flex text-[12px] font-bold text-[#226d76] underline underline-offset-4">See our approved Harrow project →</Link>
                </section>
              </div>

              <section id="harrow-approved-rear-extension" aria-labelledby="harrow-cannon-heading" className="overflow-hidden rounded-[22px] border border-[#cbded4] bg-white shadow-[0_14px_38px_rgba(25,75,61,.08)]">
                <div className="border-b border-[#dbe9e1] bg-[#eaf5ec] px-5 py-6 sm:px-7">
                  <p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#34775b]">Featured Harrow approval · Cannon Lane, Pinner</p>
                  <h2 id="harrow-cannon-heading" className="mt-2 text-[25px] font-semibold leading-tight text-[#23494c] sm:text-[32px]">5 metre rear extension · planning permission granted</h2>
                  <p className="mt-3 max-w-3xl text-[14px] leading-7 text-[#546f72]">A substantial garden-facing extension for a Pinner family home, supported by clear architectural floor plans, roof design, elevations and a 3D perspective. Harrow Council granted householder planning permission under P/4793/21 on 8 March 2022.</p>
                </div>
                <div className="p-3 sm:p-5">
                  <Link href="/case-studies/cannon-lane-pinner-5-metre-rear-extension" className="group block overflow-hidden rounded-[15px] border border-[#dce7e1] bg-[#f6faf7]">
                    <div className="relative aspect-video">
                      <Image src="/images/case-studies/cannon-lane-pinner-5-metre-rear-extension/cannon-lane-rear-extension-3d.webp" alt="Garden-side architectural design for the Cannon Lane five metre extension in Pinner" fill sizes="(max-width: 768px) 100vw, 850px" className="pointer-events-none object-cover transition-transform duration-300 group-hover:scale-[1.012]" draggable={false} />
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2 bg-white px-4 py-3">
                      <span className="text-[12px] font-semibold text-[#3e6266]">Garden-facing architectural perspective</span>
                      <span className="text-[12px] font-bold text-[#237780]">View case study →</span>
                    </div>
                  </Link>
                  <p className="mt-5 text-[12px] font-bold uppercase tracking-[.13em] text-[#657b72]">Two original planning sheets · complete views</p>
                  <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      { src: "/images/case-studies/cannon-lane-pinner-5-metre-rear-extension/p05-proposed-floor-and-roof-plans.webp", title: "Drawing 1 · Proposed floor and roof plans", desc: "Ground-floor layout, kitchen connection and roof design" },
                      { src: "/images/case-studies/cannon-lane-pinner-5-metre-rear-extension/p07-proposed-elevations-and-section.webp", title: "Drawing 2 · Elevations and section", desc: "Rear appearance and the 5,000 mm extension dimension" }
                    ].map((drawing) => (
                      <Link key={drawing.src} href="/case-studies/cannon-lane-pinner-5-metre-rear-extension#project-drawings" className="group min-w-0 overflow-hidden rounded-[14px] border border-[#dce7e2] bg-white hover:border-[#95c1b2]">
                        <div className="relative aspect-[1.435/1] bg-[#fafcfa]">
                          <Image src={drawing.src} alt={drawing.title} fill sizes="(max-width: 640px) 100vw, 400px" className="pointer-events-none object-contain" draggable={false} />
                        </div>
                        <div className="border-t border-[#e5ede8] px-3 py-3">
                          <h3 className="text-[13px] font-bold text-[#2d5859]">{drawing.title}</h3>
                          <p className="mt-1 text-[12px] leading-5 text-[#6c8081]">{drawing.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Link href="/case-studies/cannon-lane-pinner-5-metre-rear-extension" className="inline-flex rounded-full bg-[#246e76] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#1d5962]">Explore all three views &amp; project details</Link>
                    <button type="button" onClick={scrollToForm} className="inline-flex rounded-full border border-[#b4d4c8] bg-white px-5 py-3 text-[12px] font-bold text-[#286b69] hover:bg-[#f1f8f3]">Get a fixed-fee drawing quote</button>
                  </div>
                </div>
              </section>

              <div className="space-y-5">
                <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                  Planning and permitted development in Harrow
                </h2>
                <p className="text-[13px] text-slate-700">
                  Harrow follows its Local Plan alongside the London Plan. Many smaller house extensions and loft conversions can be carried out under permitted development, while larger schemes, conversions and new dwellings require full planning permission.
                </p>

                <div className="grid gap-8 text-[13px] text-slate-700 md:grid-cols-3">
                  <div>
                    <h3 className="mb-2 font-semibold uppercase tracking-[0.14em] text-slate-900">Rear extensions</h3>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Up to 3m deep on terrace houses</li>
                      <li>Up to 4m on semi detached houses</li>
                      <li>Up to 6m to 8m with prior approval where eligible</li>
                      <li>Maximum 4m high for many single storey cases</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold uppercase tracking-[0.14em] text-slate-900">Loft conversions</h3>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Volume allowance typically 40 to 50 cubic metres depending on house type</li>
                      <li>No extensions on the front roof slope in many cases</li>
                      <li>Side windows often require obscure glazing and fixed opening</li>
                      <li>External materials should be similar to existing</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold uppercase tracking-[0.14em] text-slate-900">Outbuildings</h3>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Maximum 2.5m high near boundaries in many cases</li>
                      <li>Cannot be used as a separate dwelling</li>
                      <li>Use must be incidental to the main house</li>
                      <li>Not more than 50 percent of garden area covered by buildings</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Planning drawings for Harrow
                  </h3>
                  <p className="text-[13px] leading-7 text-slate-700">
                    Our Harrow planning drawings are set out for smooth validation and clear review. We make sure key heights, depths and neighbour relationships are communicated properly to reduce unnecessary planning queries.
                  </p>
                  <ul className="list-disc space-y-1 pl-4 text-[13px] text-slate-700">
                    <li>Existing and proposed floor plans</li>
                    <li>Existing and proposed elevations</li>
                    <li>Roof plans and key sections</li>
                    <li>Block plan and site location plan</li>
                    <li>Key notes to support clarity and validation</li>
                    <li>Design statement support where needed</li>
                  </ul>
                </div>

                <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Building regulation drawings for Harrow
                  </h3>
                  <p className="text-[13px] leading-7 text-slate-700">
                    Our Harrow building regs packs focus on buildability and compliance. They reduce site questions, help builders price accurately, and give Building Control the technical information they need.
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
                  Local planning knowledge for Harrow projects
                </h2>
                <p className="text-[13px] leading-7 text-emerald-900">
                  Harrow includes varied suburban streets, conservation areas and individual property constraints. We assess the relevant planning context, neighbours, roof form and design requirements before recommending a suitable application route or drawing package. Planning permission is never guaranteed.
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
                    <h3 className="font-semibold text-slate-900">Do I need planning permission in Harrow</h3>
                    <p>
                      Many extensions and lofts can be permitted development. We check your address and advise the best route from the start so you avoid delays.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">How fast can you survey</h3>
                    <p>In most cases we can arrange the initial measured survey within 48 hours of instruction.</p>
                  </div>
                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">Do you submit to Harrow Council</h3>
                    <p>Yes. We handle submission, monitor progress and respond to planning officer queries.</p>
                  </div>
                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">Can you coordinate structural design</h3>
                    <p>
                      Yes. We coordinate with structural engineers so beams and load paths are designed and shown correctly on the drawings.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">How do you help approval chances in Harrow</h3>
                    <p>
                      We set out clear dimensions, neighbour relationships and proportionate design. On sensitive sites we focus on scale, roof form and street fit so the proposal reads well to planners.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-4">
                    <h3 className="font-semibold text-slate-900">What is the next step</h3>
                    <p>
                      Send your postcode and a short description. We reply with fixed drawing fees and the recommended route: permitted development, lawful certificate, prior approval or full planning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4 rounded-2xl bg-slate-900 p-6 text-white md:flex-row md:items-center md:p-8">
                <div>
                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em]">Ready to start your project</h2>
                  <p className="mt-2 text-[13px] text-slate-300">
                    Send your postcode and a short description. We review and reply with fixed drawing fees and recommended next steps.
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
                <Link href="/extension-plans" className="underline">
                  extension drawings
                </Link>
                ,{" "}
                <Link href="/loft-conversion-plans" className="underline">
                  loft drawings
                </Link>{" "}
                and{" "}
                <Link href="/new-build-plans" className="underline">
                  new build drawings
                </Link>
                .
              </div>
            </div>
          </section>

          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
              <h2 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                Ready to move your Harrow project forward
              </h2>

              <p className="mt-3 text-[13px] text-slate-700">
                Share a few details and WEDRAWPLANS will reply with a clear fixed fee and suggested next steps for your Harrow extension, loft conversion, refurbishment or small new build scheme.
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

        <BarnetCombinedExtensionPromo context="local" area="Harrow" />
          <BoroughIntentCapture slug="harrow" />
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
                WEDRAWPLANS provide architectural drawings for house extensions, loft conversions, planning applications, Building Regulations and small new build projects across Harrow and surrounding areas.
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
                <Link href="/extension-plans" className="hover:text-white">
                  Extension Drawings
                </Link>
                <Link href="/loft-conversion-plans" className="hover:text-white">
                  Loft Drawings
                </Link>
                <Link href="/new-build-plans" className="hover:text-white">
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
