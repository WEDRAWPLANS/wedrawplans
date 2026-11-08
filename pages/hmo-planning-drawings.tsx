import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyHeader, CaseStudyFooter } from "../components/CaseStudyChrome";
import ProjectQuickQuotePanel from "../components/ProjectQuickQuotePanel";

const PAGE = "https://www.wedrawplans.co.uk/hmo-planning-drawings";
const CASE = "/case-studies/sevington-road-hendon-seven-bedroom-hmo-planning-approval";
const DRAWING = "/images/case-studies/sevington-road-hendon-seven-bedroom-hmo/approved-proposed-p03-rev-c.webp";

const services = [
  ["Existing and proposed floor plans", "Clear measured layouts showing proposed room arrangements, circulation, shared facilities and accommodation across each floor."],
  ["HMO planning applications", "Architectural plans and application support tailored to the council's planning route and the scale of the proposed change of use."],
  ["Room and amenity considerations", "Drawing information to help explain bedroom dimensions, living accommodation, garden access, refuse and cycle-storage proposals."],
  ["Coordination with other specialists", "Identify where acoustic assessment, fire safety, transport evidence, licensing advice or Building Regulations input may also be needed."],
];

const questions = [
  {
    q: "Do I need planning permission to convert a house to an HMO?",
    a: "That depends on the specific building, intended number of occupants, existing planning use and any relevant local restrictions such as an Article 4 direction. WEDRAWPLANS can assess the proposal's drawing and submission requirements before quoting."
  },
  {
    q: "Does HMO planning permission mean the property has an HMO licence?",
    a: "No. Planning permission, HMO licensing and Building Regulations are separate matters. An approved planning layout does not itself confirm a licence or that the building meets fire-safety, room-size or other operational requirements."
  },
  {
    q: "Can you prepare drawings for an existing HMO?",
    a: "Yes. Existing-layout drawings can help with a proposed planning submission, an assessment of the existing use, property conversion proposals and coordination with the appropriate specialists. The correct route depends on the property's evidence and history."
  },
  {
    q: "Why might an HMO application be refused?",
    a: "The council may consider the suitability of the location, accommodation quality, neighbouring amenity, noise, parking, refuse arrangements and compliance with applicable policies. The Barnet case study illustrates how a proposal was assessed against those matters."
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": PAGE + "#service",
    name: "HMO Planning Drawings and Residential Conversion Plans",
    serviceType: ["HMO architectural drawings", "HMO change of use plans", "House in Multiple Occupation planning drawings", "Existing and proposed floor plans"],
    provider: { "@type": "Organization", name: "WEDRAWPLANS", url: "https://www.wedrawplans.co.uk" },
    areaServed: [{ "@type": "Place", name: "London" }, { "@type": "Place", name: "Barnet" }, { "@type": "Place", name: "Hendon" }],
    url: PAGE,
    description: "WEDRAWPLANS provides fixed-fee architectural drawing quotations for HMO conversions, changes of use and shared-house planning projects in London."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(x => ({ "@type": "Question", name:x.q, acceptedAnswer: { "@type": "Answer", text:x.a } }))
  },
];

export default function HmoPlanningDrawingsPage() {
  return (
    <>
      <Head>
        <title>HMO Planning Drawings &amp; Conversion Plans London | WEDRAWPLANS</title>
        <meta name="description" content="Architectural drawings for HMOs and shared-house conversions in London. See our Barnet seven-bedroom HMO planning approval and request a fixed-fee quotation."/>
        <link rel="canonical" href={PAGE}/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="HMO Planning Drawings & Conversion Plans | WEDRAWPLANS"/>
        <meta property="og:description" content="Planning and existing/proposed architectural drawings for HMO conversions. Explore an approved seven-bedroom Barnet example."/>
        <meta property="og:url" content={PAGE}/>
        <meta property="og:image" content={"https://www.wedrawplans.co.uk" + DRAWING}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
      </Head>
      <CaseStudyHeader/>
      <main className="min-h-screen bg-[#fafbf9] text-[#243f43]">
        <section className="border-b border-[#dce9e2] bg-gradient-to-br from-[#eaf6ef] via-[#f7fbf8] to-white">
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(330px,.9fr)] lg:items-start">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#27755e]">London · Barnet · Hendon · Residential conversions</p>
              <h1 className="mt-4 max-w-3xl text-[35px] font-semibold leading-tight tracking-tight sm:text-[46px]">HMO planning drawings that make the proposal clear</h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#516d72]">
                Whether you're considering a shared house, a change of use or improvements to an established
                House in Multiple Occupation, a well-prepared architectural submission helps explain how the
                accommodation works and how the planning issues have been addressed.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#hmo-quote" className="inline-flex rounded-full bg-[#276f78] px-6 py-3.5 text-[13px] font-bold text-white hover:bg-[#1d5860]">Get your fixed-fee quote</a>
                <Link href={CASE} className="inline-flex rounded-full border border-[#b6d0c5] bg-white px-6 py-3.5 text-[13px] font-semibold text-[#246b72]">View our seven-bedroom HMO approval</Link>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Planning drawings", "HMO conversions", "Fixed-fee quotation"].map(x=><div key={x} className="rounded-[13px] border border-[#d5e6dd] bg-white px-4 py-3 text-center text-[12px] font-semibold text-[#3c6767]">{x}</div>)}
              </div>
            </div>
            <div id="hmo-quote" className="scroll-mt-24 lg:sticky lg:top-5">
              <ProjectQuickQuotePanel source="case-study-gallery" projectSlug="hmo-planning-drawings-service" projectTitle="HMO planning drawings" suggestedService="HMO plans"/>
            </div>
          </div>
        </section>

        <section className="border-b border-[#e2ece6] bg-white py-12 sm:py-16" aria-labelledby="hmo-approved-example">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)] sm:px-8">
            <Link href={CASE} className="block overflow-hidden rounded-[18px] border border-[#e0e8e3] bg-[#fcfdfb] shadow-[0_15px_34px_rgba(22,74,68,.07)]" aria-label="Explore the approved seven-bedroom Hendon HMO">
              <div className="relative aspect-[3309/2339]">
                <Image src={DRAWING} alt="Approved architectural ground, first and loft-floor plans for the seven-bedroom Hendon HMO" fill sizes="(max-width: 768px) 100vw, 53vw" className="pointer-events-none object-contain" draggable={false}/>
              </div>
            </Link>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#24785b]">Actual project · Planning permission granted 2018</p>
              <h2 id="hmo-approved-example" className="mt-3 text-[27px] font-semibold leading-tight">Seven-bedroom HMO planning approval in Hendon</h2>
              <p className="mt-4 text-[13px] leading-7 text-[#587277]">
                Barnet Council granted full planning permission for a seven-bedroom HMO on Sevington Road.
                The planning officer's report considered room layout and amenity, access to public transport,
                parking, potential noise and neighbourhood objections before recommending approval.
              </p>
              <p className="mt-3 text-[12px] leading-6 text-[#5e7779]">
                Reference 18/5641/FUL · Granted 6 December 2018 · Maximum occupancy of 13 people under the permission.
                Planning permission is not confirmation of a current HMO licence or implemented works.
              </p>
              <Link href={CASE} className="mt-5 inline-flex rounded-full bg-[#286e75] px-6 py-3 text-[12px] font-bold text-white hover:bg-[#1c5860]">See the plans and case-study analysis</Link>
            </div>
          </div>
        </section>

        <section className="border-b border-[#e1e9e3] bg-[#f4f8f5] py-12 sm:py-16" aria-labelledby="hmo-services">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#267961]">Our architectural services</p>
            <h2 id="hmo-services" className="mt-2 text-[28px] font-semibold leading-tight sm:text-[34px]">Drawings, evidence and a clear submission strategy</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {services.map(([name,description],i)=>(
                <article key={name} className="rounded-[17px] border border-[#dde9e1] bg-white p-6">
                  <p className="text-[12px] font-bold tracking-[.14em] text-[#28775f]">{String(i+1).padStart(2,"0")}</p>
                  <h3 className="mt-2 text-[18px] font-semibold">{name}</h3>
                  <p className="mt-3 text-[13px] leading-7 text-[#5b7478]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#e3ece6] bg-white py-12 sm:py-16" aria-labelledby="hmo-questions">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <h2 id="hmo-questions" className="text-[28px] font-semibold leading-tight sm:text-[34px]">Questions about HMO conversion plans</h2>
            <div className="mt-7 grid gap-4">
              {questions.map(q=>(
                <article key={q.q} className="rounded-[15px] border border-[#e0e9e3] bg-[#fafcfb] p-5 sm:p-6">
                  <h3 className="text-[16px] font-semibold">{q.q}</h3>
                  <p className="mt-2 text-[13px] leading-7 text-[#5c7678]">{q.a}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#hmo-quote" className="inline-flex rounded-full bg-[#276e75] px-6 py-3 text-[12px] font-bold text-white">Request fixed-fee HMO plans</a>
              <Link href="/areas/barnet" className="inline-flex rounded-full border border-[#bfd7cc] px-6 py-3 text-[12px] font-semibold text-[#24666a]">Planning drawings in Barnet</Link>
              <Link href="/commercial/change-of-use" className="inline-flex rounded-full border border-[#bfd7cc] px-6 py-3 text-[12px] font-semibold text-[#24666a]">Conversion &amp; change-of-use drawings</Link>
            </div>
          </div>
        </section>
      </main>
      <CaseStudyFooter/>
    </>
  );
}
