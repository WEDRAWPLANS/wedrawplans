import { useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { caseStudies, categoryForCaseStudy, CaseStudy } from "../../data/caseStudies";
import { CaseStudyHeader, CaseStudyBottom, CaseStudyFooter } from "../../components/CaseStudyChrome";

const QUOTE = "/get-drawings-quote";
const PROJECT_BASE = "/case-studies/";

function ProjectVisual({ item, featured = false }: { item: CaseStudy; featured?: boolean }) {
  const hasProjectDrawing = Boolean(item.heroImage) && (item.heroImage.startsWith("/images/case-studies/") || item.heroImage.startsWith("/images/hyde-"));
  if (hasProjectDrawing) {
    return (
      <div className={"relative overflow-hidden bg-[#f5f6f4] " + (featured ? "min-h-[280px] sm:min-h-[380px]" : "h-44")}>
        <Image
          src={item.heroImage}
          alt={"WEDRAWPLANS architectural drawing or design illustration for " + item.shortTitle}
          fill
          priority={featured}
          sizes={featured ? "(max-width: 900px) 100vw, 55vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-contain p-3 sm:p-5"
        />
      </div>
    );
  }
  return (
    <div className={"flex flex-col items-center justify-center border-b border-[#e5e9e7] bg-[#f7faf8] p-6 text-center " + (featured ? "min-h-[280px] sm:min-h-[380px]" : "h-44")}>
      <svg viewBox="0 0 96 70" width="80" height="58" role="img" aria-label="Architectural drawing sheet illustration">
        <rect x="11" y="7" width="74" height="56" fill="#ffffff" stroke="#bed2ce" strokeWidth="2"/>
        <path d="M18 53H78M18 57H78M31 17H65V49H31zM41 30h17v19H41z" fill="none" stroke="#a1bab8" strokeWidth="1.5"/>
      </svg>
      <p className="mt-3 text-[13px] font-semibold text-[#3b5d61]">{item.shortTitle}</p>
      <p className="mt-1 text-[11px] text-[#718489]">Architectural drawing presentation</p>
    </div>
  );
}

function ProjectCard({ item }: { item: CaseStudy }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#e2e7e4] bg-white transition hover:border-[#a9c7c7] hover:shadow-[0_12px_35px_rgba(20,55,61,0.07)]">
      <Link href={PROJECT_BASE + item.slug} aria-label={"View " + item.shortTitle + " case study"}>
        <ProjectVisual item={item} />
      </Link>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#547074]">
          <span className="rounded-full border border-[#efcbc4] bg-[#fff1ee] px-2.5 py-1 font-semibold text-[#97594f]">{item.outcome}</span>
          <span aria-hidden="true">·</span>
          <span>{item.year}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-[#19363a]">
          <Link href={PROJECT_BASE + item.slug} className="hover:text-[#1c7880]">{item.shortTitle}</Link>
        </h3>
        <p className="mt-2 text-[13px] leading-6 text-[#526268]">{item.service}</p>
        <p className="mt-3 text-[12px] leading-5 text-[#687a7c]">{item.authority} · {item.reference}</p>
        <Link href={PROJECT_BASE + item.slug} className="mt-auto inline-flex w-fit items-center gap-1.5 pt-5 text-[13px] font-semibold text-[#126d78] underline-offset-4 hover:underline">
          View project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function CaseStudiesHub() {
  const featured = caseStudies.find((item) => item.featured) || caseStudies[0];
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All project types");
  const [council, setCouncil] = useState("All councils");

  const types = useMemo(
    () => ["All project types", ...Array.from(new Set(caseStudies.map(categoryForCaseStudy))).sort()],
    []
  );
  const councils = useMemo(
    () => ["All councils", ...Array.from(new Set(caseStudies.map((item) => item.authority))).sort()],
    []
  );
  const filtered = useMemo(() => caseStudies.filter((item) => {
    const searchable = [item.title, item.shortTitle, item.location, item.authority, item.service, item.reference].join(" ").toLowerCase();
    return searchable.includes(query.trim().toLowerCase())
      && (type === "All project types" || categoryForCaseStudy(item) === type)
      && (council === "All councils" || item.authority === council);
  }), [query, type, council]);

  function reset() { setQuery(""); setType("All project types"); setCouncil("All councils"); }

  return (
    <>
      <Head>
        <title>Planning Approvals & Project Case Studies | WEDRAWPLANS London</title>
        <meta name="description" content="Explore WEDRAWPLANS planning permissions, extensions, loft conversions and architectural drawing projects across London and Hertfordshire. Find a similar project and request a fixed-fee quotation." />
        <meta name="robots" content={process.env.VERCEL_ENV === "production" ? "index,follow,max-image-preview:large" : "noindex,nofollow"} />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/case-studies" />
      </Head>

      <main className="min-h-screen bg-[#fafbf9] text-[#23383d]">
        <CaseStudyHeader />

        <div className="border-b border-[#edcfca] bg-[#fbeae6] px-5 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-[#98584f]">
          Selected planning approvals &amp; architectural projects
        </div>
        <section className="border-b border-[#e7ebe8] bg-white">
          <div className="mx-auto max-w-7xl px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#247b82]">WEDRAWPLANS · Selected projects</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.13] tracking-tight text-[#20373b] sm:text-5xl lg:text-[54px]">
              Planning approvals &amp; project case studies
            </h1>
            <p className="mt-6 max-w-3xl text-[16px] leading-8 text-[#52666a]">
              Explore architectural drawing projects across London and the surrounding areas. Each case study explains the proposed works, the planning route and the decision, helping you understand how we can assist with a similar property.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#browse-projects" className="rounded-full border border-[#86b5b9] bg-white px-6 py-3 text-sm font-semibold text-[#236c73] hover:bg-[#eef7f6]">Browse approved projects</Link>
              <Link href={QUOTE} className="rounded-full bg-[#51aab8] px-6 py-3 text-sm font-semibold text-white hover:bg-[#318e9c]">Get your fixed-fee quote</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16" aria-labelledby="featured-heading">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#347b80]">Featured project</p>
              <h2 id="featured-heading" className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Recent planning approval in Wandsworth</h2>
            </div>
          </div>
          <div className="grid overflow-hidden rounded-[22px] border border-[#e0e7e4] bg-white lg:grid-cols-[1.12fr_.88fr]">
            <ProjectVisual item={featured} featured />
            <div className="flex flex-col justify-center px-6 py-9 sm:px-10">
              <p className="text-[12px] font-semibold text-[#217782]">{featured.outcome} · {featured.year}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#21393d] sm:text-3xl">{featured.shortTitle}</h3>
              <p className="mt-4 text-[14px] leading-7 text-[#53676b]">{featured.summary}</p>
              <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-[#e4eae7] pt-5 text-[12px]">
                <div><dt className="text-[#6b7b80]">Planning authority</dt><dd className="mt-1 font-semibold">{featured.authority}</dd></div>
                <div><dt className="text-[#6b7b80]">Reference</dt><dd className="mt-1 font-semibold">{featured.reference}</dd></div>
              </dl>
              <Link href={PROJECT_BASE + featured.slug} className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#146d77] underline-offset-4 hover:underline">
                View project details <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section id="browse-projects" className="border-y border-[#e3e9e6] bg-[#f4f7f5]" aria-labelledby="browse-heading">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#317982]">Project archive</p>
                <h2 id="browse-heading" className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Find a project relevant to you</h2>
                <p className="mt-3 max-w-3xl text-[14px] leading-7 text-[#617175]">
                  Browse by work type, planning authority or location. Projects are shown once here and linked to the relevant services and local pages throughout WEDRAWPLANS.
                </p>
              </div>
              <p className="text-[13px] font-semibold text-[#4f6c71]">{caseStudies.length} selected projects</p>
            </div>

            <div className="mt-8 grid gap-3 rounded-[16px] border border-[#dce5e1] bg-white p-4 sm:p-5 lg:grid-cols-[1.2fr_1fr_1fr_auto]">
              <label className="block">
                <span className="mb-2 block text-[12px] font-semibold">Search projects</span>
                <input aria-label="Search projects" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Town, street, postcode or project" className="w-full rounded-lg border border-[#d6e1de] bg-white px-3.5 py-3 text-sm text-[#1d3b3d] outline-none focus:border-[#4f9da6] focus:ring-2 focus:ring-[#d4eff1]" />
              </label>
              <label className="block">
                <span className="mb-2 block text-[12px] font-semibold">Project type</span>
                <select value={type} onChange={(e) => setType(e.target.value)} className="w-full rounded-lg border border-[#d6e1de] bg-white px-3.5 py-3 text-sm text-[#1d3b3d] outline-none focus:border-[#4f9da6]">
                  {types.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-[12px] font-semibold">Planning authority</span>
                <select value={council} onChange={(e) => setCouncil(e.target.value)} className="w-full rounded-lg border border-[#d6e1de] bg-white px-3.5 py-3 text-sm text-[#1d3b3d] outline-none focus:border-[#4f9da6]">
                  {councils.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <button onClick={reset} type="button" className="self-end rounded-lg border border-[#d6e1de] px-5 py-3 text-sm font-semibold text-[#315e65] hover:bg-[#f1f7f6]">Clear</button>
            </div>

            <p className="mt-5 text-[13px] text-[#5d7375]" role="status">
              Showing {filtered.length} of {caseStudies.length} projects
            </p>
            {filtered.length ? (
              <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filtered.map((item) => <ProjectCard key={item.slug} item={item} />)}
              </div>
            ) : (
              <div className="mt-5 rounded-[16px] border border-[#dce5e1] bg-white p-8 text-center">
                <p className="font-semibold">No projects match these filters.</p>
                <button type="button" onClick={reset} className="mt-3 text-sm font-semibold text-[#17727c] underline">Show all projects</button>
              </div>
            )}
          </div>
        </section>

        <CaseStudyBottom projectType="house extension" />
        <CaseStudyFooter />
      </main>
    </>
  );
}
