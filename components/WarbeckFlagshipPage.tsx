import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "../data/caseStudies";
import { CaseStudyHeader, CaseStudyFooter, CaseStudyBottom } from "./CaseStudyChrome";
import ProjectQuickQuotePanel from "./ProjectQuickQuotePanel";
import WarbeckTotalRefurbShowcase from "./WarbeckTotalRefurbShowcase";

const COUNCIL = "https://property.lbhf.gov.uk/NECSWS/ES/Presentation/Planning/OnlinePlanning/OnlinePlanningOverview?applicationNumber=2019%2F01824%2FCLP&guid=84f6c954-95ad-4217-af79-803a51dad2e7#";
const CANONICAL = "https://www.wedrawplans.co.uk/case-studies/warbeck-road-hammersmith-fulham-loft-certificate";

export default function WarbeckFlagshipPage({ item, indexable }: { item: CaseStudy; indexable: boolean }) {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Total Refurb – Warbeck Road, Shepherd’s Bush W12",
    description: item.seoDescription,
    mainEntityOfPage: CANONICAL,
    author: { "@type": "Organization", name: "WEDRAWPLANS", url: "https://www.wedrawplans.co.uk/" },
    publisher: { "@type": "Organization", name: "WEDRAWPLANS", url: "https://www.wedrawplans.co.uk/" },
    citation: COUNCIL,
    about: ["Loft conversion", "Certificate of Lawfulness", "Building Regulations drawings", "Home refurbishment"],
  };
  const architecturalService = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalService",
    "@id": "https://www.wedrawplans.co.uk/#architectural-service",
    name: "WEDRAWPLANS – Architectural Planning and Building Regulations Drawings",
    url: "https://www.wedrawplans.co.uk/",
    description: "Fixed-fee architectural planning, lawful-development and Building Regulations drawing services for homeowners in West London.",
    serviceType: ["Measured surveys", "Loft conversion drawings", "Certificate of Lawfulness drawings", "Building Regulations technical drawings", "Structural coordination"],
    provider: { "@type": "Organization", name: "WEDRAWPLANS", url: "https://www.wedrawplans.co.uk/" },
    areaServed: [
      { "@type": "Place", name: "Shepherd’s Bush, London W12" },
      { "@type": "AdministrativeArea", name: "London Borough of Hammersmith and Fulham" },
      { "@type": "Place", name: "West London" }
    ]
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wedrawplans.co.uk/" },
      { "@type": "ListItem", position: 2, name: "Case studies", item: "https://www.wedrawplans.co.uk/case-studies" },
      { "@type": "ListItem", position: 3, name: "Warbeck Road, Shepherd’s Bush", item: CANONICAL },
    ],
  };

  return (
    <>
      <Head>
        <title>Total Refurb – Warbeck Road, Shepherd’s Bush W12 | WEDRAWPLANS</title>
        <meta name="description" content={item.seoDescription || "WEDRAWPLANS total refurbishment in Shepherd’s Bush W12: loft conversion Certificate of Lawfulness, Building Regulations drawings and construction progress."} />
        <meta name="robots" content={indexable ? "index,follow,max-image-preview:large" : "noindex,nofollow"} />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Total Refurb – Warbeck Road, Shepherd’s Bush W12 | WEDRAWPLANS" />
        <meta property="og:description" content={item.summary} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content="https://www.wedrawplans.co.uk/images/case-studies/warbeck-road/p05-3d-composite.webp" />
        <meta property="og:image:alt" content="WEDRAWPLANS 3D loft design over P05 Rev A roof elevations, Warbeck Road, Shepherd’s Bush W12" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Total Refurb – Warbeck Road, Shepherd’s Bush W12 | WEDRAWPLANS" />
        <meta name="twitter:description" content={item.seoDescription} />
        <meta name="twitter:image" content="https://www.wedrawplans.co.uk/images/case-studies/warbeck-road/p05-3d-composite.webp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(architecturalService) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      </Head>

      <main className="min-h-screen bg-[#f8f6f2] text-[#263235]">
        <CaseStudyHeader />
        <div className="border-b border-[#e6e2dc] bg-white">
          <nav aria-label="Breadcrumb" className="mx-auto flex max-w-7xl flex-wrap gap-2 px-5 py-4 text-[12px] text-[#647476] sm:px-8">
            <Link href="/" className="hover:text-[#af4c47]">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/case-studies" className="hover:text-[#af4c47]">Case studies</Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-[#334649]">Warbeck Road, Shepherd’s Bush</span>
          </nav>
        </div>

        <section className="border-b border-[#e6ded6] bg-[#f8f6f2]">
          <div className="mx-auto max-w-7xl px-5 pb-9 pt-10 sm:px-8 sm:pb-12 sm:pt-14">
            <div className="max-w-5xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#a84f49] sm:text-xs">West London total refurbishment · Shepherd’s Bush, W12</p>
              <h1 className="mt-4 max-w-5xl text-[32px] font-semibold leading-[1.12] tracking-tight text-[#252c30] sm:text-[46px] lg:text-[54px]">Total Refurb – Warbeck Road, Shepherd’s Bush W12</h1>
              <h2 className="mt-5 max-w-4xl text-[17px] font-medium leading-8 text-[#465459] sm:text-xl">Full Architectural Design, Certificate of Lawfulness Approval &amp; Building Regulations Package</h2>
              <p className="mt-4 max-w-4xl text-[15px] leading-8 text-[#566468]">{item.summary}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href={COUNCIL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#a9443f] px-5 py-3 text-[13px] font-bold leading-6 text-white hover:bg-[#87332f]">
                  Verified Certificate of Lawfulness: 2019/01824/CLP (Granted 12 Aug 2019) <span aria-hidden="true">↗</span>
                </a>
                <a href="#case-study-quote" className="inline-flex min-h-12 items-center rounded-xl border border-[#ceb8b2] bg-white px-5 py-3 text-[13px] font-semibold text-[#7e3e3c] hover:bg-[#fff6f3]">Request a fixed-fee quote</a>
              </div>
              <p className="mt-3 text-[11px] leading-6 text-[#697477]">The 2019 certificate confirms only the proposed rear dormer and three front rooflights. The separate Building Regulations designs are presented as technical project work, not as evidence of Building Control certification.</p>
            </div>
          </div>
        </section>

        <section aria-label="Full Warbeck Road architectural case study" className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 space-y-8 lg:col-span-8">
            <WarbeckTotalRefurbShowcase />
            <section className="rounded-[18px] border border-[#e4ded7] bg-white p-6 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#a84f49]">Design decisions and technical coordination</p>
              <h2 className="mt-2 text-[25px] font-semibold text-[#2c383a]">One home. Two distinct approval and design stages.</h2>
              <p className="mt-4 text-[14px] leading-8 text-[#5c6a6d]">{item.proof}</p>
              <p className="mt-4 text-[14px] leading-8 text-[#5c6a6d]">{item.wdpService}</p>
              <p className="mt-4 text-[12px] leading-7 text-[#697779]">Historical drawings and thermal specifications are presented as evidence of the 2019 project, not as a claim that the same details satisfy today’s Building Regulations.</p>
            </section>
            <section className="rounded-[18px] border border-[#e4ded7] bg-white p-6 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#a84f49]">West London architectural drawing services</p>
              <h2 className="mt-2 text-[23px] font-semibold text-[#2c383a]">Planning and Building Regulations drawings across West London</h2>
              <p className="mt-4 text-[14px] leading-8 text-[#5c6a6d]">For homeowners considering loft conversions, roof extensions, open-plan alterations or complete refurbishments, WEDRAWPLANS prepares coordinated architectural planning and Building Regulations drawing packages across Shepherd’s Bush (W12), Hammersmith &amp; Fulham (W6), Chiswick (W4), Acton (W3), Ealing (W5/W13), Notting Hill and Holland Park (W11), Kensington &amp; Chelsea (W8/SW3), and Richmond and Kew.</p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-[13px] font-semibold text-[#a34a43]">
                <Link href="/areas/hammersmith-and-fulham" className="underline underline-offset-4">Hammersmith &amp; Fulham drawings</Link>
                <Link href="/areas/ealing" className="underline underline-offset-4">Ealing drawings</Link>
                <Link href="/areas/kensington-and-chelsea" className="underline underline-offset-4">Kensington &amp; Chelsea</Link>
                <Link href="/areas/richmond" className="underline underline-offset-4">Richmond drawings</Link>
                <Link href="/building-regulation-drawings" className="underline underline-offset-4">Building Regulations service</Link>
              </div>
            </section>
          </div>

          <aside className="min-w-0 space-y-5 lg:col-span-4 lg:sticky lg:top-24" aria-label="Warbeck Road project facts and homeowner enquiry">
            <section className="rounded-[18px] border border-[#e5ded6] bg-white p-5 shadow-[0_8px_32px_rgba(34,34,34,.045)] sm:p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#a84f49]">Project fact file</p>
              <h2 className="mt-2 text-[20px] font-semibold text-[#2c383a]">Warbeck Road, Shepherd’s Bush</h2>
              <dl className="mt-4 divide-y divide-[#ece7e1] text-[13px]">
                {[
                  ["Location", "Warbeck Road, Shepherd’s Bush, London W12"],
                  ["Planning authority", "London Borough of Hammersmith & Fulham"],
                  ["Reference", "2019/01824/CLP"],
                  ["Decision", "Granted 12 August 2019"],
                  ["Planning route", "Certificate of Lawfulness – Classes B & C"],
                  ["Rear dormer volume", "15.5 m³"],
                  ["Rooflights", "3 flush front rooflights"],
                  ["Scope", "Total refurbishment, 15.5 m³ rear dormer loft conversion and Building Regulations pack"],
                  ["Services delivered", "Measured survey, lawful-development planning drawings, Building Regulations package and structural coordination"],
                  ["Technical package", "Architectural Building Regulations drawings"],
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] gap-3 py-3">
                    <dt className="font-medium text-[#737b7d]">{label}</dt>
                    <dd className="font-semibold leading-6 text-[#354448]">{value}</dd>
                  </div>
                ))}
              </dl>
              <a className="mt-4 inline-flex min-h-11 items-center rounded-xl border border-[#d9bbb4] px-4 py-2 text-[12px] font-bold text-[#a34a43] hover:bg-[#fff6f3]" href={COUNCIL} target="_blank" rel="noopener noreferrer">Verify council certificate ↗</a>
            </section>
            <div id="case-study-quote" className="scroll-mt-28">
              <ProjectQuickQuotePanel source="case-study-gallery" projectSlug={item.slug} projectTitle={item.shortTitle} suggestedService="Planning and building regulation drawing package" sticky={false}/>
            </div>
          </aside>
        </section>
        <CaseStudyBottom quoteHref="#case-study-quote" projectType="home refurbishment or loft conversion" />
        <CaseStudyFooter />
      </main>
    </>
  );
}
