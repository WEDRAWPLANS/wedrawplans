import React, { useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import { caseStudies } from "../../data/caseStudies";

const CATEGORIES = [
  "All",
  "Extensions",
  "Lofts & LDC",
  "Conversions",
  "New build & development",
  "Heritage & commercial",
  "Dropped kerb"
];

function statusLabel(status: string) {
  if (status === "Lawful") return "Lawful development";
  if (status === "Prior approval") return "Prior approval";
  if (status === "Current project") return "Current project";
  return "Planning approved";
}

export default function CaseStudiesHub() {
  const [category, setCategory] = useState("All");

  const visible = useMemo(
    () =>
      category === "All"
        ? caseStudies
        : caseStudies.filter((item) => item.category === category),
    [category]
  );

  const approvedCount = caseStudies.filter((item) => item.status !== "Current project").length;

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wedrawplans.co.uk/" },
      { "@type": "ListItem", position: 2, name: "Planning Approvals & Case Studies", item: "https://www.wedrawplans.co.uk/case-studies" }
    ]
  };

  const collectionJson = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "WEDRAWPLANS Planning Approvals & Case Studies",
    url: "https://www.wedrawplans.co.uk/case-studies",
    description:
      "Selected WEDRAWPLANS planning approvals, lawful development decisions and project case studies across London and surrounding areas."
  };

  return (
    <>
      <Head>
        <title>Planning Approvals & Case Studies London | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Explore selected WEDRAWPLANS planning approvals and case studies across London and the M25: extensions, lofts, flats, listed buildings, developments and more. Get your fixed fee."
        />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/case-studies" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJson) }} />
      </Head>

      <SiteHeader />

      <main className="bg-white text-slate-950">
        <section className="border-y border-slate-200 bg-[#f8f4f0]">
          <div className="mx-auto max-w-6xl px-4 py-14 lg:px-6 lg:py-18">
            <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#4da4b4]">
                  REAL PROJECTS · REAL COUNCIL EVIDENCE
                </div>
                <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">
                  Planning Approvals & Case Studies
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700">
                  See the kind of projects WEDRAWPLANS has prepared across London and surrounding areas.
                  From house extensions and loft conversions to apartment schemes, flat conversions,
                  listed-building work and vehicle crossovers, these selected projects show real planning
                  experience backed by council references and drawing evidence.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/get-drawings-quote"
                    className="rounded-full bg-[#64b7c4] px-6 py-3 text-sm font-extrabold text-white hover:bg-[#4da4b4]"
                  >
                    Get your fixed fee
                  </Link>
                  <a
                    href="tel:+442036548508"
                    className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 hover:bg-slate-50"
                  >
                    Call 020 3654 8508
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  SELECTED WEDRAWPLANS EVIDENCE
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-950 p-5 text-white">
                    <div className="text-3xl font-black">{caseStudies.length}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-300">
                      flagship case studies
                    </div>
                  </div>
                  <div className="rounded-2xl bg-[#eaf7f8] p-5">
                    <div className="text-3xl font-black text-slate-950">{approvedCount}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-600">
                      approved / lawful / prior approval
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-slate-200 p-4">
                  <div className="font-bold">Documented experience from 2015 to 2026</div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Older approvals demonstrate longevity. Recent 2025–2026 projects demonstrate that
                    WEDRAWPLANS remains active across current planning work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={
                    "rounded-full px-4 py-2 text-xs font-bold transition " +
                    (category === item
                      ? "bg-slate-950 text-white"
                      : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50")
                  }
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((item) => (
                <article
                  key={item.slug}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <Link href={"/case-studies/" + item.slug} className="block">
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      <img
                        src={item.hero}
                        alt={item.shortTitle + " WEDRAWPLANS case study"}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-900 shadow-sm">
                        {statusLabel(item.status)}
                      </div>
                      {item.rank === 1 ? (
                        <div className="absolute bottom-4 left-4 rounded-full bg-[#64b7c4] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">
                          Flagship No. 1
                        </div>
                      ) : null}
                    </div>

                    <div className="p-6">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4da4b4]">
                        {item.category} · {item.year}
                      </div>
                      <h2 className="mt-2 text-xl font-extrabold tracking-tight">{item.shortTitle}</h2>
                      <p className="mt-2 text-sm font-semibold text-slate-600">
                        {item.service}
                      </p>
                      <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-700">
                        {item.summary}
                      </p>
                      <div className="mt-5 flex items-center justify-between gap-3">
                        <span className="text-xs text-slate-500">{item.applicationRef}</span>
                        <span className="text-sm font-bold text-sky-700">View case study →</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-14 text-white">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#76c8d2]">
                  YOUR PROJECT COULD BE NEXT
                </div>
                <h2 className="mt-3 text-3xl font-black tracking-tight">
                  Planning an extension, loft, conversion or development?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                  Send your postcode and a short description. WEDRAWPLANS will review the likely
                  planning route and reply with a clear fixed fee for the drawings and support you need.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="/get-drawings-quote"
                  className="rounded-full bg-[#64b7c4] px-7 py-3.5 text-sm font-extrabold text-white hover:bg-[#4da4b4]"
                >
                  Get your fixed fee
                </Link>
                <a
                  href="https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20fixed%20fee%20quote"
                  className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10"
                >
                  WhatsApp WEDRAWPLANS
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
