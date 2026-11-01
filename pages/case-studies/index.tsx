import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { caseStudies, CaseStudy } from "../../data/caseStudies";

function categoryFor(item: CaseStudy): string {
  const service = item.service.toLowerCase();
  if (/loft|dormer|gable/.test(service)) return "Loft conversions";
  if (/kerb|crossover/.test(service)) return "Dropped kerbs";
  if (/heritage|listed|shopfront|mixed-use/.test(service)) return "Heritage & commercial";
  if (/flat conversion|residential conversion|multi-unit|additional floor|major residential/.test(service)) return "Residential development";
  if (/extension|prior approval/.test(service)) return "Extensions";
  return "Other projects";
}

export default function CaseStudiesHub() {
  const featured = caseStudies.find((item) => item.featured)!;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All project types");
  const [authority, setAuthority] = useState("All planning authorities");
  const categories = ["All project types", ...Array.from(new Set(caseStudies.map(categoryFor))).sort()];
  const authorities = ["All planning authorities", ...Array.from(new Set(caseStudies.map((item) => item.authority))).sort()];
  const results = caseStudies.filter((item) => {
    const text = [item.title, item.location, item.authority, item.service, item.reference].join(" ").toLowerCase();
    return text.includes(search.trim().toLowerCase())
      && (category === "All project types" || categoryFor(item) === category)
      && (authority === "All planning authorities" || item.authority === authority);
  });
  return (
    <>
      <Head>
        <title>Planning Approvals & Case Studies | WEDRAWPLANS London</title>
        <meta
          name="description"
          content="Explore selected WEDRAWPLANS planning approvals and project case studies across London and surrounding M25 areas. Extensions, lofts, flats, heritage, mixed-use, prior approval and more."
        />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/case-studies" />
      </Head>

      <main className="min-h-screen bg-[#f8f4f0] text-slate-900">
        <section className="border-b border-slate-200 bg-[#fdf8f3]">
          <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6 lg:py-12">
            <Link href="/" className="inline-block">
              <img src="/images/wedrawplans-logo.png" alt="WEDRAWPLANS" className="h-20 w-auto object-contain" />
            </Link>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
              Selected WEDRAWPLANS approvals & project evidence
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
              Real projects. Real planning evidence. A clearer route for your project.
            </h1>
            <p className="mt-5 max-w-3xl text-[14px] leading-7 text-slate-700">
              Browse selected WEDRAWPLANS projects across London and surrounding M25 areas, including house
              extensions, loft conversions, flat conversions, mixed-use schemes, heritage work, prior approvals
              and specialist homeowner applications.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/get-drawings-quote" className="rounded-full bg-[#64b7c4] px-6 py-3 text-sm font-semibold text-white">
                Get your fixed-fee quote
              </Link>
              <Link href="/extension-plans" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold">
                Planning an extension?
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1.05fr_.95fr] lg:px-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
              <Image src={featured.heroImage} alt={featured.shortTitle} width={1400} height={900} className="h-full min-h-[360px] w-full object-cover" priority />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Flagship case study • {featured.outcome}
              </div>
              <h2 className="mt-3 text-3xl font-semibold">{featured.title}</h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-700">{featured.summary}</p>
              <div className="mt-5 rounded-2xl border border-slate-200 bg-[#f8f4f0] p-4 text-[13px] leading-6">
                <strong>{featured.authority}</strong><br />
                Application {featured.reference} • {featured.year}
              </div>
              <Link href={"/case-studies/" + featured.slug} className="mt-6 inline-flex w-fit rounded-full bg-[#20243b] px-5 py-3 text-sm font-semibold text-white">
                View Sistova Road case study
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-red-700">22 flagship projects</p>
                <h2 className="mt-2 text-3xl font-semibold">Selected planning approvals & case studies</h2>
              </div>
              <Link href="/get-drawings-quote" className="hidden rounded-full bg-[#64b7c4] px-5 py-2.5 text-sm font-semibold text-white md:inline-flex">
                Get your fixed-fee quote
              </Link>
            </div>

            <div className="mt-7 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-3">
              <input aria-label="Search projects" type="search" value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search town, street or project" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900" />
              <select aria-label="Filter by project type" value={category} onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900">
                {categories.map((name) => <option key={name} value={name}>{name}</option>)}
              </select>
              <select aria-label="Filter by planning authority" value={authority} onChange={(e) => setAuthority(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900">
                {authorities.map((name) => <option key={name} value={name}>{name}</option>)}
              </select>
            </div>
            <p className="mt-4 text-sm text-slate-600">Showing {results.length} of {caseStudies.length} projects.</p>
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {results.map((item) => (
                <article key={item.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  {item.heroImage.startsWith("/images/case-studies/") ? (
                    <div className="relative h-48 bg-slate-100">
                      <Image src={item.heroImage} alt={"Architectural drawings — " + item.shortTitle} fill className="object-contain" />
                    </div>
                  ) : (
                    <div className="flex h-48 flex-col justify-center bg-[#20243b] p-6 text-white">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9edce4]">WEDRAWPLANS project archive</p>
                      <p className="mt-4 text-xl font-semibold">{item.shortTitle}</p>
                      <p className="mt-2 text-xs text-slate-200">{item.service}</p>
                    </div>
                  )}
                  <div className="p-5">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      {item.outcome}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">{item.shortTitle}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-slate-600">{item.service}</p>
                    <p className="mt-3 text-[11px] text-slate-500">{item.authority} • {item.reference}</p>
                    <Link href={"/case-studies/" + item.slug} className="mt-4 inline-flex text-[12px] font-semibold underline underline-offset-4">
                      View case study
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            {results.length === 0 ? (
              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
                No matching cases in this selection. Try clearing one of the filters.
              </div>
            ) : null}
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[#20243b] text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 text-center lg:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9edce4]">Planning something similar?</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold">Tell us what you want to build and get your fixed-fee drawing quote.</h2>
            <Link href="/get-drawings-quote" className="mt-6 inline-flex rounded-full bg-[#64b7c4] px-7 py-3 text-sm font-semibold text-white">
              Get your fixed-fee quote
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
