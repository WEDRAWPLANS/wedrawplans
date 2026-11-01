import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "../../data/caseStudies";

export default function CaseStudiesHub() {
  const featured = caseStudies.find((item) => item.featured)!;
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

            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((item, index) => (
                <article key={item.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-48 bg-slate-100">
                    <Image src={item.heroImage} alt={item.shortTitle} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      {index + 1}. {item.approved ? item.outcome : item.outcome}
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
