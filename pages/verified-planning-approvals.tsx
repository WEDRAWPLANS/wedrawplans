import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { caseStudies, CaseStudy } from "../data/caseStudies";
import { BARNET_COUNCIL_DOCUMENTS } from "../data/councilPlanningEvidence";
import { CaseStudyHeader, CaseStudyBottom, CaseStudyFooter } from "../components/CaseStudyChrome";

const SITE = "https://www.wedrawplans.co.uk";
const PAGE = "/verified-planning-approvals";
const BARNET = "London Borough of Barnet";
const HOMEOWNER_PRIORITY = [
  "sunbury-avenue-mill-hill-side-rear-extension",
  "leicester-road-barnet-rear-extension-planning-building-regulations-structural",
  "the-reddings-mill-hill-extension-basement-loft",
  "sunbury-avenue-mill-hill-accessible-garden-care-outbuilding",
  "dryfield-road-edgware-conservation-extension",
  "sefton-avenue-mill-hill-prior-approval",
  "tithe-walk-mill-hill-loft-conversion",
  "northolm-edgware-two-storey-extension",
  "deans-way-edgware-lawful-loft",
  "reddings-close-mill-hill-lawful-loft",
  "13-reddings-close-mill-hill-first-floor-extension",
  "station-road-hendon-side-extension",
  "leicester-road-barnet-4m-rear-extension",
];
const preferredPosition = (slug: string) => {
  const index = HOMEOWNER_PRIORITY.indexOf(slug);
  return index < 0 ? 1000 : index;
};

const verifiedBarnet = caseStudies
  .filter((project) => project.authority === BARNET)
  .sort((a, b) => preferredPosition(a.slug) - preferredPosition(b.slug));
const homeownerProjects = verifiedBarnet.filter((project) => HOMEOWNER_PRIORITY.includes(project.slug));
const otherProjects = verifiedBarnet.filter((project) => !HOMEOWNER_PRIORITY.includes(project.slug));
const wandsworthProject = caseStudies.find((project) => project.slug === "sistova-road-wandsworth-extension-basement");
const verifiedReferences = Object.keys(BARNET_COUNCIL_DOCUMENTS);

function projectReferences(project: CaseStudy) {
  const primary = project.reference.match(/\b\d{2}\/\d{3,5}\/[A-Z0-9]+\b/g) || [];
  const related = (project.decisions || []).map((decision) => decision.reference);
  return Array.from(new Set([...primary, ...related]))
    .filter((ref) => Boolean(BARNET_COUNCIL_DOCUMENTS[ref]));
}

function EvidenceProject({ project }: { project: CaseStudy }) {
  const records = projectReferences(project);
  const isRefusalHistory = project.slug === "finchley-mixed-use-ground-floor-residential-lawfulness";
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[18px] border border-[#dce7e2] bg-white shadow-[0_5px_20px_rgba(29,62,61,.035)]">
      {project.heroImage && project.heroImage.startsWith("/images/") ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-[#e3ebe7] bg-[#f7faf8]">
          <Image src={project.heroImage} alt={"WEDRAWPLANS architectural drawing presentation for " + project.shortTitle} fill
            sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[.12em] text-[#267580]">{project.year} · {project.authority}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-[#214145]">{project.shortTitle}</h3>
        <p className="mt-2 text-[13px] font-medium leading-6 text-[#467078]">{project.outcome}</p>
        <p className="mt-2 line-clamp-3 text-[13px] leading-6 text-[#5b6f73]">{project.service}</p>
        <div className="mt-4 border-t border-[#e7efeb] pt-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[.1em] text-[#64797b]">Official council documents</p>
          <div className="flex flex-wrap gap-2">
            {records.map((ref) => (
              <a key={ref} href={BARNET_COUNCIL_DOCUMENTS[ref]} target="_blank" rel="noopener noreferrer"
                aria-label={"View Barnet Council documents for " + ref + " (opens new tab)"}
                className="rounded-lg border border-[#c5dcd5] bg-[#f3faf7] px-3 py-2 text-[12px] font-semibold text-[#246b70] underline-offset-4 hover:border-[#84b8ad] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246b70]">
                {ref} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          {isRefusalHistory ? (
            <p className="mt-2 text-[11px] leading-5 text-[#697f7e]">Includes the earlier refused application as well as the subsequent lawful-use certificate. These are different outcomes.</p>
          ) : null}
        </div>
        <Link href={"/case-studies/" + project.slug}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-[13px] font-semibold text-[#15717a] underline-offset-4 hover:underline">
          Explore drawings and project details <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function VerifiedPlanningApprovals() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Selected WEDRAWPLANS planning projects with official council records",
    description: "Selected WEDRAWPLANS architectural drawing projects with independently accessible official council planning records.",
    url: SITE + PAGE,
    publisher: { "@type": "Organization", name: "WEDRAWPLANS", url: SITE },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: verifiedBarnet.map((project, index) => ({
        "@type": "ListItem", position: index + 1,
        name: project.shortTitle,
        url: SITE + "/case-studies/" + project.slug,
      })),
    },
  };
  return (
    <>
      <Head>
        <title>Selected Planning Projects & Official Council Records | WEDRAWPLANS</title>
        <meta name="description" content="Explore selected WEDRAWPLANS extension, loft and planning projects with original drawings and official council records for independent verification." />
        <meta name="robots" content={process.env.VERCEL_ENV === "production" ? "index,follow,max-image-preview:large" : "noindex,nofollow"} />
        <link rel="canonical" href={SITE + PAGE} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Selected Planning Projects | Official Council Evidence | WEDRAWPLANS" />
        <meta property="og:description" content="Explore selected WEDRAWPLANS project examples, architectural drawings and official council planning records." />
        <meta property="og:url" content={SITE + PAGE} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      <main className="min-h-screen bg-[#fafbf9] text-[#243d42]">
        <CaseStudyHeader />
        <div className="border-b border-[#e8d8d1] bg-[#fceee9] py-3 text-center text-[11px] font-semibold uppercase tracking-[.15em] text-[#9f5b53]">
          A selection of our work · Independent planning evidence
        </div>
        <section className="border-b border-[#e2e9e5] bg-white">
          <div className="mx-auto max-w-7xl px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16">
            <p className="text-[12px] font-semibold uppercase tracking-[.17em] text-[#2a7882]">Selected WEDRAWPLANS planning projects</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-[1.13] tracking-tight text-[#20383b] sm:text-5xl">
              A sample of our projects. <span className="text-[#237980]">Official council evidence.</span>
            </h1>
            <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#536b70]">
              Explore a selection of WEDRAWPLANS architectural drawings and planning outcomes, supported by direct links to councils' public application documents.
              From house extensions in Barnet to a basement extension in Wandsworth, these projects demonstrate our design and planning experience.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#verified-projects" className="rounded-full bg-[#287780] px-6 py-3 text-sm font-semibold text-white hover:bg-[#175a63]">Explore verified projects</Link>
              <Link href="/get-drawings-quote?source=verified-approvals" className="rounded-full border border-[#9dbec0] px-6 py-3 text-sm font-semibold text-[#246c75] hover:bg-[#eff8f6]">Get your fixed-fee quote</Link>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[#dce9e4] bg-[#f6faf8] p-4">
                <p className="text-2xl font-semibold tabular-nums text-[#234c50]">{verifiedBarnet.length}</p>
                <p className="mt-1 text-[12px] leading-5 text-[#547073]">Sample Barnet case-study presentations with official planning evidence</p>
              </div>
              <div className="rounded-xl border border-[#dce9e4] bg-[#f6faf8] p-4">
                <p className="text-2xl font-semibold tabular-nums text-[#234c50]">{verifiedReferences.length}</p>
                <p className="mt-1 text-[12px] leading-5 text-[#547073]">Distinct council records supporting these examples, including historic outcomes</p>
              </div>
              <div className="rounded-xl border border-[#dce9e4] bg-[#f6faf8] p-4">
                <p className="text-2xl font-semibold tabular-nums text-[#234c50]">1</p>
                <p className="mt-1 text-[12px] leading-5 text-[#547073]">Wandsworth example with an official council application link</p>
              </div>
            </div>
          </div>
        </section>
        <section className="border-b border-[#e3e9e5] bg-[#f4f8f6]">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
            <h2 className="text-xl font-semibold text-[#254a4d]">What can you independently check?</h2>
            <div className="mt-4 grid gap-4 text-[13px] leading-7 text-[#526a6d] md:grid-cols-3">
              <p className="rounded-xl border border-[#dce8e4] bg-white p-5"><strong className="block text-[14px] text-[#2b5557]">Application references</strong>Find the correct council application number and decision description.</p>
              <p className="rounded-xl border border-[#dce8e4] bg-white p-5"><strong className="block text-[14px] text-[#2b5557]">Council documents</strong>Open the public document list to review relevant plans, reports and decision records.</p>
              <p className="rounded-xl border border-[#dce8e4] bg-white p-5"><strong className="block text-[14px] text-[#2b5557]">Our architectural work</strong>Compare council records with the project drawings and explanation in each case study.</p>
            </div>
            <p className="mt-5 max-w-5xl text-[12px] leading-6 text-[#687d7b]">
              Planning permission, prior approval and lawful-development certificates are different legal outcomes. Some historic records show
              refusals, amended schemes or superseded permissions. A planning decision does not itself constitute Building Regulations approval.
              The external council registers may display complete property addresses and applicant information.
            </p>
          </div>
        </section>
        <section id="verified-projects" className="mx-auto max-w-7xl scroll-mt-36 px-5 py-12 sm:px-8 sm:py-16" aria-labelledby="domestic-evidence-heading">
          <p className="text-[12px] font-semibold uppercase tracking-[.15em] text-[#2a7980]">Residential project evidence</p>
          <h2 id="domestic-evidence-heading" className="mt-2 text-2xl font-semibold text-[#263f42] sm:text-3xl">
            House extensions, lofts and outbuildings in Barnet
          </h2>
          <p className="mt-4 max-w-3xl text-[14px] leading-7 text-[#5b7174]">
            Explore selected residential projects, their drawings, planning approach and official council documents.
            Where a property has several applications, each is linked to its corresponding council record.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {homeownerProjects.map((project) => <EvidenceProject key={project.slug} project={project} />)}
          </div>
        </section>
        <section className="border-y border-[#e0e9e4] bg-[#f5f8f6]">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
            <p className="text-[12px] font-semibold uppercase tracking-[.15em] text-[#2a7980]">Additional project types</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Residential conversions and specialist planning cases</h2>
            <p className="mt-4 max-w-3xl text-[14px] leading-7 text-[#5b7174]">
              These selected examples demonstrate other planning routes. They are presented separately from domestic extensions, with relevant council decision histories.
            </p>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {otherProjects.map((project) => <EvidenceProject key={project.slug} project={project} />)}
            </div>
          </div>
        </section>
        {wandsworthProject?.councilApplicationUrl ? (
          <section className="border-b border-[#e1e8e4] bg-white">
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
              <p className="text-[12px] font-semibold uppercase tracking-[.15em] text-[#2a7980]">Wandsworth planning evidence</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Approved side and rear extension with basement lightwell</h2>
              <p className="mt-3 max-w-3xl text-[14px] leading-7 text-[#587174]">
                Sistova Road — planning application {wandsworthProject.reference}. Explore the existing and proposed architectural drawings and the documented council decision.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={"/case-studies/" + wandsworthProject.slug} className="rounded-full bg-[#287780] px-5 py-3 text-[13px] font-semibold text-white hover:bg-[#185a63]">View Wandsworth case study</Link>
                <a href={wandsworthProject.councilApplicationUrl} target="_blank" rel="noopener noreferrer"
                  className="rounded-full border border-[#9cbfbb] px-5 py-3 text-[13px] font-semibold text-[#236d75] hover:bg-[#f1f8f5]">
                  View Wandsworth Council record ↗
                </a>
              </div>
            </div>
          </section>
        ) : null}
        <section className="bg-[#fbfcfa]">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
            <h2 className="text-xl font-semibold sm:text-2xl">Planning an extension or loft conversion of your own?</h2>
            <p className="mt-3 max-w-3xl text-[14px] leading-7 text-[#5b7174]">
              We prepare planning drawings, lawful-development and prior-approval submissions and Building Regulations drawing packages,
              with structural coordination where instructed. Every property is different; we can explain the appropriate route and provide a project-specific fixed-fee quotation.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-[13px] font-semibold text-[#226e77]">
              <Link href="/areas/barnet" className="underline underline-offset-4 hover:text-[#174e56]">Planning drawing services in Barnet →</Link>
              <Link href="/case-studies" className="underline underline-offset-4 hover:text-[#174e56]">Explore the full project archive →</Link>
            </div>
          </div>
        </section>
        <CaseStudyBottom projectType="house extension, loft conversion or Building Regulations drawing package" />
        <CaseStudyFooter />
      </main>
    </>
  );
}
