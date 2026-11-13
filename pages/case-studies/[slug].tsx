import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { caseStudies, caseStudyBySlug, categoryForCaseStudy, CaseStudy } from "../../data/caseStudies";
import { CaseStudyHeader, CaseStudyBottom, CaseStudyFooter } from "../../components/CaseStudyChrome";
import CaseStudyGalleryQuote from "../../components/CaseStudyGalleryQuote";
import GrangeRoadCombinedShowcase from "../../components/GrangeRoadCombinedShowcase";
import { BARNET_COUNCIL_DOCUMENTS } from "../../data/councilPlanningEvidence";

const QUOTE = "/get-drawings-quote";

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-[#e4ebe7] py-3.5 first:border-t-0">
      <dt className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#66797b]">{label}</dt>
      <dd className="mt-1 text-[14px] font-semibold leading-6 text-[#253f41]">{value}</dd>
    </div>
  );
}

export default function CaseStudyPage({ item }: { item: CaseStudy }) {
  const isReddings = item.slug === "the-reddings-mill-hill-extension-basement-loft";
  const isAllum = item.slug === "allum-lane-elstree-major-house-extension";
  const isSistova = item.slug === "sistova-road-wandsworth-extension-basement";
  const isCromwell = item.slug === "cromwell-road-hounslow-rear-extension";
  const isBrockley = item.slug === "brockley-road-lewisham-two-flat-conversion";
  const isHarrowStudios = item.slug === "burnt-oak-broadway-harrow-retail-flats";
  const isCannon = item.slug === "cannon-lane-pinner-5-metre-rear-extension";
  const isSunburyCare = item.slug === "sunbury-avenue-mill-hill-accessible-garden-care-outbuilding";
  const isGreenwichTen = item.slug === "chestnut-rise-plumstead-greenwich-ten-flats-lawfulness";
  const isHendonHMO = item.slug === "sevington-road-hendon-seven-bedroom-hmo-planning-approval";
  const isCranbourneCombined = item.slug === "cranbourne-drive-hoddesdon-planning-project";
  const isSuttonLoft = item.slug === "sutton-loft-conversion-planning-permission-wallington";
  const isLeicesterCombined = item.slug === "leicester-road-barnet-rear-extension-planning-building-regulations-structural";
  const isGrangeCombined = item.slug === "grange-road-edgware-side-extension-lawful-development-building-regulations";
  const isFeaturedLayout = isReddings || isAllum || isSistova || isCromwell || isBrockley || isHarrowStudios || isCannon || isSunburyCare || isGreenwichTen || isHendonHMO || isCranbourneCombined || isSuttonLoft || isLeicesterCombined || isGrangeCombined;
  const useOriginalDrawingGallery = item.slug === "sistova-road-wandsworth-extension-basement" || item.slug === "cromwell-road-hounslow-rear-extension" || isFeaturedLayout;
  const isProduction = process.env.VERCEL_ENV === "production";
  const hasApprovedVisual = [item.heroImage, item.secondaryImage].some(src => Boolean(src) && (src.startsWith("/images/case-studies/") || src.startsWith("/images/hyde-")));
  const showGallery = hasApprovedVisual || Boolean(item.projectVideoUrl);
    const canonical = "https://www.wedrawplans.co.uk/case-studies/" + item.slug;
  const quoteHref = "/get-drawings-quote?source=case-study&project=" + encodeURIComponent(item.slug);
  const category = categoryForCaseStudy(item);
  // Only link to individually verified council records, never a guessed keyVal.
  // Some WEDRAWPLANS projects have multiple planning decisions: keep each
  // decision's evidence distinct and do not imply each record is an approval.
  const barnetProjectReferences = item.authority === "London Borough of Barnet"
    ? Array.from(new Set([
        ...(item.reference.match(/\b\d{2}\/\d{3,5}\/[A-Z0-9]+\b/g) || []),
        ...(item.decisions || []).map((decision) => decision.reference),
      ]))
    : [];
  const councilRecordEntries = barnetProjectReferences
    .filter((ref) => BARNET_COUNCIL_DOCUMENTS[ref])
    .map((ref) => ({ reference: ref, url: BARNET_COUNCIL_DOCUMENTS[ref] }));
  const primaryReference = item.reference.match(/\b\d{2}\/\d{3,5}\/[A-Z0-9]+\b/)?.[0];
  const primaryCouncilDocumentUrl =
    item.councilApplicationUrl ||
    (primaryReference ? BARNET_COUNCIL_DOCUMENTS[primaryReference] : undefined);
  const relatedCouncilRecords = councilRecordEntries.filter((record) => record.url !== primaryCouncilDocumentUrl);

  const related = caseStudies
    .filter((project) => project.slug !== item.slug)
    .map((project) => ({
      project,
      score:
        (categoryForCaseStudy(project) === category ? 6 : 0)
        + (project.authority === item.authority ? 5 : 0)
        + (project.relatedArea === item.relatedArea ? 3 : 0)
        + (project.relatedService === item.relatedService ? 2 : 0),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ project }) => project);

  const articleJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.summary,
    author: { "@type": "Organization", name: "WEDRAWPLANS", url: "https://www.wedrawplans.co.uk/" },
    publisher: { "@type": "Organization", name: "WEDRAWPLANS", url: "https://www.wedrawplans.co.uk/" },
    mainEntityOfPage: canonical,
    about: [item.service, item.authority, item.location],
    ...((primaryCouncilDocumentUrl || councilRecordEntries.length)
      ? { citation: Array.from(new Set([
          ...(primaryCouncilDocumentUrl ? [primaryCouncilDocumentUrl] : []),
          ...councilRecordEntries.map((record) => record.url),
        ])) }
      : {}),
  };
  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wedrawplans.co.uk/" },
      { "@type": "ListItem", position: 2, name: "Planning Approvals & Case Studies", item: "https://www.wedrawplans.co.uk/case-studies" },
      { "@type": "ListItem", position: 3, name: item.shortTitle, item: canonical },
    ],
  };

  return (
    <>
      <Head>
        <title>{item.title} | WEDRAWPLANS</title>
        <meta name="description" content={item.seoDescription || (item.summary + " See the project details and request a fixed-fee drawing quote from WEDRAWPLANS.")} />
        <meta name="robots" content={process.env.VERCEL_ENV === "production" ? "index,follow,max-image-preview:large" : "noindex,nofollow"} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={item.title + " | WEDRAWPLANS"} />
        <meta property="og:description" content={item.summary} />
        <meta property="og:url" content={canonical} />
        {item.heroImage ? <meta property="og:image" content={"https://www.wedrawplans.co.uk" + item.heroImage} /> : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />
      </Head>

      <main className="min-h-screen bg-[#fafbf9] text-[#23383d]">
        <CaseStudyHeader />

        <div className="border-b border-[#edcfca] bg-[#fbeae6]">
          <div className="mx-auto max-w-7xl px-5 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-[#98584f] sm:px-8">
            Selected WEDRAWPLANS planning projects
          </div>
        </div>
        <div className="border-b border-[#e5eae7] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[12px] text-[#637578]">
              <Link href="/" className="hover:text-[#217a82]">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/case-studies" className="hover:text-[#217a82]">Planning approvals &amp; projects</Link>
              <span aria-hidden="true">/</span>
              <span className="font-semibold text-[#36565a]">{item.shortTitle}</span>
            </nav>
          </div>
        </div>

        <section className="bg-white">
          <div className={isFeaturedLayout ? "mx-auto grid max-w-7xl gap-5 px-5 pb-8 pt-8 sm:px-8 sm:pb-9 sm:pt-10" : "mx-auto grid max-w-7xl gap-9 px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:grid-cols-[1.25fr_.75fr] lg:gap-16"}>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#257b83]">{category} · {item.year}</p>
              <h1 className={isFeaturedLayout ? "mt-2 max-w-5xl text-3xl font-semibold leading-[1.17] tracking-tight text-[#223b3e] sm:text-4xl" : "mt-4 max-w-3xl text-3xl font-semibold leading-[1.17] tracking-tight text-[#223b3e] sm:text-4xl lg:text-[46px]"}>{item.title}</h1>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#efcbc4] bg-[#fff0ed] px-3.5 py-1.5 text-[12px] font-semibold text-[#97594f]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c78175]" aria-hidden="true" />{item.outcome}
              </div>
              <p className={isFeaturedLayout ? "mt-4 max-w-4xl text-[15px] leading-7 text-[#52666b]" : "mt-6 max-w-3xl text-[16px] leading-8 text-[#52666b]"}>{item.summary}</p>
              <div className={isFeaturedLayout ? "mt-5 flex flex-wrap items-center gap-3" : "mt-7 flex flex-wrap items-center gap-3"}>
                <Link href={isFeaturedLayout ? "#case-study-quote" : quoteHref} className="rounded-full bg-[#51aab8] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#318e9c]">
                  Get your fixed-fee quote
                </Link>
                <Link href={item.relatedService} className="rounded-full border border-[#cbdad7] bg-white px-6 py-3.5 text-sm font-semibold text-[#2f646a] hover:bg-[#f0f7f6]">
                  Explore {category === "Extensions" ? "extension" : "related"} services
                </Link>
              </div>
            </div>
            <aside className={isFeaturedLayout ? "self-start rounded-[17px] border border-[#dbe7e2] bg-[#f5f9f7] px-5 py-3 sm:px-6" : "self-start rounded-[20px] border border-[#dbe7e2] bg-[#f5f9f7] p-6 sm:p-7"} aria-label="Project information">
              <h2 className={isFeaturedLayout ? "sr-only" : "text-lg font-semibold"}>Project information</h2>
              <dl className={isFeaturedLayout ? "grid gap-x-5 sm:grid-cols-2 lg:grid-cols-3" : "mt-4"}>
                <Detail label="Location" value={item.location} />
                <Detail label="Planning authority" value={item.authority} />
                <Detail label="Application reference" value={item.reference} />
                <Detail label="Project type" value={item.service} />
                {item.decisionDate ? <Detail label="Decision date" value={item.decisionDate} /> : null}
                <Detail label="Planning outcome" value={item.outcome} />
              </dl>
              {primaryCouncilDocumentUrl || relatedCouncilRecords.length ? (
                <div className="mt-5 rounded-[16px] border border-[#bddbd4] bg-white p-4 shadow-[0_5px_18px_rgba(20,81,76,0.04)] sm:p-5">
                  <div className="flex items-start gap-3">
                    <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e6f4ef] text-[18px] text-[#247267]">✓</span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#2b756d]">
                        Independent planning evidence
                      </p>
                      <h3 className="mt-1 text-[15px] font-semibold leading-6 text-[#24464a]">
                        Official council application record
                      </h3>
                      <p className="mt-1 text-[12px] leading-5 text-[#667c7e]">
                        {item.authority} · Reference {item.reference}
                      </p>
                    </div>
                  </div>
                  {primaryCouncilDocumentUrl ? (
                    <a
                      href={primaryCouncilDocumentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex min-h-11 w-full items-center justify-between gap-3 rounded-xl bg-[#266f78] px-4 py-3 text-left text-[13px] font-bold text-white no-underline transition-colors hover:bg-[#19545c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#266f78]"
                      aria-label={`Open official council planning application ${primaryReference || item.reference} (new tab)`}
                    >
                      <span>View council planning documents</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                  {relatedCouncilRecords.length > 0 ? (
                    <div className="mt-4 border-t border-[#dce8e4] pt-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#557574]">
                        Additional planning records at this property
                      </p>
                      <div className="mt-2 flex flex-col gap-2">
                        {relatedCouncilRecords.map((record) => (
                          <a
                            key={record.reference}
                            href={record.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#226f78] underline underline-offset-4 hover:text-[#164d55] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#226f78]"
                          >
                            {record.reference} — view council documents <span aria-hidden="true">↗</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  <p className="mt-3 text-[11px] leading-5 text-[#6a7c7e]">
                    Opens the council-held application record in a new tab. Check its documents section for the submitted drawings, supporting reports and decision notice.
                  </p>
                </div>
              ) : null}
            </aside>
          </div>
        </section>

        {isGrangeCombined ? <GrangeRoadCombinedShowcase project={item} /> : useOriginalDrawingGallery ? <CaseStudyGalleryQuote projects={[item]} context="project" /> : null}
        {showGallery && !useOriginalDrawingGallery ? (
        <section id="project-drawings" className="border-y border-[#e2e9e5] bg-[#f5f8f6]" aria-labelledby="drawing-heading">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#347c81]">WEDRAWPLANS architectural drawings</p>
                <h2 id="drawing-heading" className="mt-2 text-2xl font-semibold sm:text-3xl">Project drawings &amp; design</h2>
              </div>
              <span className="text-[12px] text-[#587274]">{item.shortTitle}</span>
            </div>
            {!isHarrowStudios && item.heroImage && (item.heroImage.startsWith("/images/case-studies/") || item.heroImage.startsWith("/images/hyde-")) ? (
              <figure className="overflow-hidden rounded-[18px] border border-[#dee5e1] bg-white p-3 shadow-[0_8px_34px_rgba(32,70,73,0.035)] sm:p-5">
                <Image src={item.heroImage} alt={"WEDRAWPLANS project drawing or architectural visualisation — " + item.shortTitle} width={1500} height={1000} priority sizes="(max-width: 768px) 100vw, 85vw" className="mx-auto h-auto max-h-[780px] w-full object-contain"/>
                <figcaption className="mt-3 border-t border-[#edf0ee] px-1 pt-3 text-[12px] leading-5 text-[#617579]">
                  Architectural drawings by WEDRAWPLANS, prepared to explain the proposal, its relationship to the existing building and the details considered during the planning process.
                </figcaption>
              </figure>
            ) : null}
            {!isHarrowStudios && item.secondaryImage && (item.secondaryImage.startsWith("/images/case-studies/") || item.secondaryImage.startsWith("/images/hyde-")) && item.secondaryImage !== item.heroImage ? (
              <figure className="mt-5 overflow-hidden rounded-[18px] border border-[#dee5e1] bg-white p-5">
                <Image src={item.secondaryImage} alt={"Additional architectural illustration for " + item.shortTitle} width={1450} height={900} className="h-auto w-full object-contain"/>
              </figure>
            ) : null}
            {item.projectVideoUrl ? (
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-[16px] border border-[#d7e7e1] bg-white px-5 py-4">
                <div>
                  <p className="text-[14px] font-semibold text-[#264d51]">WEDRAWPLANS project video</p>
                  <p className="mt-1 text-[12px] leading-6 text-[#60797b]">Explore the architectural design and understand how WEDRAWPLANS developed the proposal.</p>
                </div>
                <a href={item.projectVideoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-[#b7d6d0] px-5 py-2.5 text-[13px] font-semibold text-[#26737c] hover:bg-[#eaf6f2]">View project video ↗</a>
              </div>
            ) : null}
            {item.mediaNote && !isProduction ? <p className="mt-4 text-[12px] leading-6 text-[#657a7c]">{item.mediaNote}</p> : null}
          </div>
        </section>
        ) : null}

        {item.slug === "sunbury-avenue-mill-hill-side-rear-extension" ? (
          <section aria-labelledby="sunbury-planning-experience" className="border-y border-[#dce8e1] bg-[#f1f7f3]">
            <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#367969]">Selected planning experience · Mill Hill</p>
                <h2 id="sunbury-planning-experience" className="mt-2 text-[22px] font-semibold leading-tight text-[#24464a] sm:text-[27px]">Five Barnet planning decisions. Coordinated architectural drawings.</h2>
                <p className="mt-3 text-[13px] leading-7 text-[#58716e]">
                  This project demonstrates WEDRAWPLANS' experience with successive house-extension proposals, from single-storey rear additions to two-storey side and rear alterations. The council references and individual decisions are documented below.
                </p>
              </div>
              <div className="rounded-[15px] border border-[#cdded4] bg-white p-5">
                <p className="text-[13px] font-semibold text-[#285951]">Planning a similar extension?</p>
                <p className="mt-2 text-[12px] leading-6 text-[#607672]">We can review the existing property, assess relevant permissions and prepare a fixed-fee architectural drawing package suited to the proposed work.</p>
                <Link href={quoteHref} className="mt-4 inline-flex rounded-full bg-[#27767a] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#1c5d63]">Get your fixed-fee drawing quote</Link>
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-9 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#357d81]">The proposal</p>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Scope of work</h2>
              {item.highlights?.length ? (
                <ul className="mt-5 space-y-4">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-[15px] leading-7 text-[#51676b]">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#56a9b2]" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-7 border-l-[3px] border-[#64aeb5] bg-[#f3f8f6] px-5 py-4">
                <p className="text-[13px] font-semibold text-[#2b6269]">Considering a similar project?</p>
                <p className="mt-2 text-[13px] leading-6 text-[#5c7274]">We can help assess the appropriate planning route, prepare architectural drawings and coordinate the application documents required for your property.</p>
                <Link href={quoteHref} className="mt-3 inline-block text-[13px] font-semibold text-[#17717b] underline-offset-4 hover:underline">Request a quotation →</Link>
              </div>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#357d81]">The decision</p>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Planning outcome &amp; drawing work</h2>
              <p className="mt-5 text-[15px] leading-8 text-[#51676b]">{item.proof}</p>
              {item.decisions?.length ? (
                <div className="mt-6">
                  <h3 className="text-[16px] font-semibold">Planning decisions at this property</h3>
                  <div className="mt-3 grid gap-3">
                    {item.decisions.map((decision) => (
                      <div key={decision.reference} className="rounded-[14px] border border-[#e2e8e4] bg-[#fafbf9] p-4">
                        <p className="text-[12px] font-semibold text-[#226f76]">{decision.reference} · {decision.outcome}</p>
                        <p className="mt-2 text-[13px] leading-6 text-[#5a6c71]">{decision.description}</p>
                        {item.authority === "London Borough of Barnet" && BARNET_COUNCIL_DOCUMENTS[decision.reference] ? (
                          <a
                            href={BARNET_COUNCIL_DOCUMENTS[decision.reference]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex text-[12px] font-semibold text-[#226f78] underline underline-offset-4 hover:text-[#164d55]"
                          >
                            View documents for {decision.reference} on Barnet Council ↗
                          </a>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              {item.approvedDrawings ? (
                <div className="mt-6 rounded-[16px] border border-[#e2e8e4] bg-[#fafbf9] p-5">
                  <h3 className="text-[14px] font-semibold">Approved documents referenced by the council</h3>
                  <p className="mt-2 text-[13px] leading-7 text-[#586f73]">{item.approvedDrawings}</p>
                  {primaryCouncilDocumentUrl ? (
                    <a
                      href={primaryCouncilDocumentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#226f78] underline underline-offset-4 hover:text-[#164d55] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#226f78]"
                    >
                      Compare with the official council document list <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="border-t border-[#e2e9e5] bg-[#f9fbf9]" aria-labelledby="wedrawplans-service-heading">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[1.16fr_.84fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#a5675f]">Architectural drawing service</p>
              <h2 id="wedrawplans-service-heading" className="mt-3 text-2xl font-semibold leading-snug text-[#233f42] sm:text-3xl">How WEDRAWPLANS supported this approval</h2>
              <p className="mt-5 text-[15px] leading-8 text-[#526a6e]">{item.wdpService}</p>
              <Link href={item.relatedService} className="mt-4 inline-flex text-[13px] font-semibold text-[#1e727e] underline-offset-4 hover:underline">Explore our related architectural drawing service →</Link>
            </div>
            <aside className="self-start rounded-[18px] border border-[#deebe6] bg-white p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-[#294c50]">Planning a similar project?</h3>
              <p className="mt-3 text-[14px] leading-7 text-[#596f72]">{item.homeownerGuidance}</p>
              <p className="mt-4 text-[13px] leading-6 text-[#667a7d]">Tell us the property postcode and what you would like to achieve. We will explain the next drawing and planning steps.</p>
              <Link href={quoteHref} className="mt-5 inline-flex rounded-full bg-[#64b7c4] px-6 py-3 text-[13px] font-semibold text-white hover:bg-[#4da4b4]">Get your fixed-fee quote</Link>
            </aside>
          </div>
        </section>

        {item.keyConditions?.length ? (
          <section className="border-y border-[#e5eae7] bg-[#f6f9f7]">
            <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
              <h2 className="text-xl font-semibold sm:text-2xl">Relevant planning conditions</h2>
              <ul className="mt-5 grid gap-3 text-[14px] leading-7 text-[#51656a] md:grid-cols-2">
                {item.keyConditions.map((condition) => (
                  <li key={condition} className="rounded-xl border border-[#e1e9e4] bg-white px-5 py-4">{condition}</li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
            <div className="grid items-center gap-8 rounded-[22px] border border-[#dae7e2] bg-[#eef6f3] p-7 sm:p-10 lg:grid-cols-[1.3fr_.7fr]">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#36747c]">Your next project</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">Planning similar work at your property?</h2>
                <p className="mt-4 max-w-2xl text-[14px] leading-7 text-[#566c70]">
                  {item.leadAngle} Share the postcode and your proposal so we can outline the drawing requirements and provide a fixed-fee quotation.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <Link href={quoteHref} className="rounded-full bg-[#51aab8] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#318e9c]">Get your fixed-fee quote</Link>
                <Link href={item.relatedArea} className="text-[13px] font-semibold text-[#236d76] underline-offset-4 hover:underline">See local drawing services →</Link>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="border-y border-[#e5eae7] bg-[#f6f9f7]">
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold sm:text-3xl">Related planning projects</h2>
                <Link href="/case-studies" className="text-[13px] font-semibold text-[#23727b] underline-offset-4 hover:underline">View all projects →</Link>
              </div>
              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {related.map((project) => (
                  <Link key={project.slug} href={"/case-studies/" + project.slug} className="group rounded-[16px] border border-[#dfe7e3] bg-white p-6 hover:border-[#a9c6c7] hover:shadow-sm">
                    <p className="text-[11px] font-semibold text-[#2a7880]">{project.outcome}</p>
                    <h3 className="mt-3 text-[17px] font-semibold leading-snug text-[#274145] group-hover:text-[#197582]">{project.shortTitle}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-[#65777a]">{project.service}</p>
                    <p className="mt-4 text-[12px] font-semibold text-[#2b747d]">View project →</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
        <CaseStudyBottom projectType={category === "Extensions" ? "house extension" : category === "Loft conversions" ? "loft conversion" : "residential or commercial project"} />
        <CaseStudyFooter />
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: caseStudies.map((item) => ({ params: { slug: item.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params?.slug || "");
  const item = caseStudyBySlug[slug];
  if (!item) return { notFound: true };
  return { props: { item } };
};
