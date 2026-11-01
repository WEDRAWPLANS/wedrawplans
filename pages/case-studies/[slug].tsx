import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { caseStudies, caseStudyBySlug, categoryForCaseStudy, CaseStudy } from "../../data/caseStudies";

export default function CaseStudyPage({ item }: { item: CaseStudy }) {
  const category = categoryForCaseStudy(item);
  const related = caseStudies
    .filter((x) => x.slug !== item.slug)
    .map((x) => ({
      item: x,
      score: (categoryForCaseStudy(x) === category ? 6 : 0)
        + (x.authority === item.authority ? 5 : 0)
        + (x.relatedArea === item.relatedArea ? 3 : 0)
        + (x.relatedService === item.relatedService ? 2 : 0),
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => x.item);
  const canonical = "https://www.wedrawplans.co.uk/case-studies/" + item.slug;
  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wedrawplans.co.uk/" },
      { "@type": "ListItem", position: 2, name: "Planning Approvals & Case Studies", item: "https://www.wedrawplans.co.uk/case-studies" },
      { "@type": "ListItem", position: 3, name: item.shortTitle, item: canonical },
    ],
  };
  const articleJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.summary,
    author: { "@type": "Organization", name: "WEDRAWPLANS" },
    publisher: { "@type": "Organization", name: "WEDRAWPLANS", url: "https://www.wedrawplans.co.uk" },
    mainEntityOfPage: canonical,
    about: [item.service, item.authority, item.location],
  };

  return (
    <>
      <Head>
        <title>{item.shortTitle} | WEDRAWPLANS Case Study</title>
        <meta name="description" content={item.summary + " Get a fixed-fee quote for a similar WEDRAWPLANS project."} />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={item.title + " | WEDRAWPLANS"} />
        <meta property="og:description" content={item.summary} />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />
      </Head>

      <main className="min-h-screen bg-[#f8f4f0] text-slate-900">
        <div className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-xs font-semibold text-amber-900">
          WEDRAWPLANS approval preview — not published on the live website
        </div>
        <header className="border-b border-slate-200 bg-[#fdf8f3]">
          <div className="mx-auto max-w-6xl px-4 py-5 lg:px-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link href="/"><img src="/images/wedrawplans-logo.png" alt="WEDRAWPLANS" className="h-16 w-auto" /></Link>
              <div className="flex gap-3">
                <Link href="/case-studies" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold">All case studies</Link>
                <Link href="/get-drawings-quote" className="rounded-full bg-[#64b7c4] px-4 py-2 text-xs font-semibold text-white">Get your fixed-fee quote</Link>
              </div>
            </div>
          </div>
        </header>

        <section className="border-b border-slate-200 bg-[#fdf8f3]">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
            <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
              <Link href="/">Home</Link><span aria-hidden="true">/</span>
              <Link href="/case-studies">Planning approvals</Link><span aria-hidden="true">/</span>
              <span className="text-slate-900">{item.shortTitle}</span>
            </nav>
            <div className="grid gap-8 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
              <div>
                <div className={"inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] " + (item.approved ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800")}>
                  {item.outcome}
                </div>
                <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{item.title}</h1>
                <p className="mt-5 text-[14px] leading-7 text-slate-700">{item.summary}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Fact label="Location" value={item.location} />
                  <Fact label="Planning authority" value={item.authority} />
                  <Fact label="Application" value={item.reference} />
                  <Fact label="Project type" value={item.service} />
                  {item.decisionDate ? <Fact label="Decision issued" value={item.decisionDate} /> : null}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/get-drawings-quote" className="rounded-full bg-[#64b7c4] px-6 py-3 text-sm font-semibold text-white">Get your fixed-fee quote</Link>
                  <Link href={item.relatedService} className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold">Explore related service</Link>
                </div>
              </div>
              {item.heroImage.startsWith("/images/case-studies/") ? (
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                  <Image src={item.heroImage} alt={"Architectural drawings for " + item.shortTitle} width={1500} height={1000} className="h-[360px] w-full object-contain lg:h-[470px]" priority />
                </div>
              ) : (
                <div className="flex min-h-[360px] flex-col justify-center rounded-3xl border border-slate-200 bg-[#20243b] p-10 text-white shadow-md lg:min-h-[470px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9edce4]">WEDRAWPLANS project archive</p>
                  <h2 className="mt-5 text-3xl font-semibold">{item.shortTitle}</h2>
                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-200">{item.service}</p>
                  <p className="mt-7 border-t border-white/20 pt-5 text-xs text-slate-300">Project-specific drawing imagery is being prepared for the approval preview.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-700">The project</p>
                <h2 className="mt-2 text-2xl font-semibold">What WEDRAWPLANS helped demonstrate</h2>
                <p className="mt-4 text-[14px] leading-7 text-slate-700">{item.proof}</p>
                {item.approvedDrawings ? (
                  <div className="mt-5 rounded-2xl border border-slate-200 bg-[#f8f4f0] p-5">
                    <h3 className="font-semibold">Documents referenced in the decision</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{item.approvedDrawings}</p>
                    {item.keyConditions?.length ? (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                        {item.keyConditions.map((condition) => <li key={condition}>{condition}</li>)}
                      </ul>
                    ) : null}
                  </div>
                ) : null}
                <p className="mt-4 text-[14px] leading-7 text-slate-700">
                  The purpose of this case study is to show the type of planning and drawing work WEDRAWPLANS has handled.
                  Every property is different, so the correct route, design and supporting information should be checked for the specific site.
                </p>
              </div>
              {item.secondaryImage?.startsWith("/images/case-studies/") ? (
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f8f4f0]">
                  <Image src={item.secondaryImage} alt={"Architectural drawing evidence - " + item.shortTitle} width={1200} height={800} className="h-[300px] w-full object-cover" />
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-[#f8f4f0] p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-700">Approved drawing package</p>
                  <h3 className="mt-2 text-xl font-semibold">Plans, elevations and 3D design evidence</h3>
                  <p className="mt-3 text-[13px] leading-6 text-slate-700">
                    {item.heroImage.startsWith("/images/case-studies/")
                      ? "The main visual above uses a project-specific WEDRAWPLANS drawing presentation. Further drawing sheets will be added to this case study as they are prepared for publication."
                      : "Project-specific plans, elevations and visual evidence will be added to this preview only after their content and approval references are checked."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {item.review ? (
          <section className="border-y border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-5xl px-4 lg:px-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-700">Client trust</p>
              <h2 className="mt-2 text-2xl font-semibold">A project backed by genuine client feedback</h2>
              <p className="mt-4 max-w-3xl text-[14px] leading-7 text-slate-700">{item.review}</p>
            </div>
          </section>
        ) : null}

        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <div className="rounded-3xl border border-slate-200 bg-[#20243b] p-7 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9edce4]">{item.leadAngle}</p>
              <h2 className="mt-3 text-3xl font-semibold">Get your fixed-fee quote from WEDRAWPLANS.</h2>
              <p className="mt-4 max-w-3xl text-[14px] leading-7 text-slate-200">
                Send us your postcode and a short description of what you want to build. We will review the likely drawing and planning route and confirm the next steps.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/get-drawings-quote" className="rounded-full bg-[#64b7c4] px-6 py-3 text-sm font-semibold text-white">Get your fixed-fee quote</Link>
                <Link href={item.relatedArea} className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white">See local drawing services</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[#f8f4f0] py-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2 className="text-xl font-semibold">Related WEDRAWPLANS project evidence</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {related.map((x) => (
                <Link key={x.slug} href={"/case-studies/" + x.slug} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700">{x.outcome}</div>
                  <div className="mt-2 font-semibold">{x.shortTitle}</div>
                  <div className="mt-2 text-[12px] leading-5 text-slate-600">{x.service}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</div>
      <div className="mt-1 text-[13px] font-semibold text-slate-900">{value}</div>
    </div>
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
