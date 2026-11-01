import React from "react";
import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import SiteHeader from "../../components/SiteHeader";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import { caseStudies, caseStudyBySlug, type CaseStudy } from "../../data/caseStudies";

type Props = {
  item: CaseStudy;
};

function statusLabel(status: string) {
  if (status === "Lawful") return "Lawful development";
  if (status === "Prior approval") return "Prior approval";
  if (status === "Current project") return "Current planning project";
  return "Planning approved";
}

export default function CaseStudyPage({ item }: Props) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, {
      boroughName: "Case Study · " + item.shortTitle
    });
  }

  const related = caseStudies
    .filter(
      (candidate) =>
        candidate.slug !== item.slug &&
        (candidate.category === item.category ||
          candidate.authority === item.authority)
    )
    .slice(0, 3);

  const canonical = "https://www.wedrawplans.co.uk/case-studies/" + item.slug;
  const description =
    item.shortTitle +
    " WEDRAWPLANS case study: " +
    item.service +
    ". " +
    statusLabel(item.status) +
    ". Get your fixed-fee quote.";

  const articleJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description,
    image: "https://www.wedrawplans.co.uk" + item.hero,
    author: {
      "@type": "Organization",
      name: "WEDRAWPLANS",
      url: "https://www.wedrawplans.co.uk/"
    },
    publisher: {
      "@type": "Organization",
      name: "WEDRAWPLANS",
      url: "https://www.wedrawplans.co.uk/"
    },
    mainEntityOfPage: canonical,
    about: [
      item.service,
      item.location,
      item.authority,
      item.applicationRef
    ]
  };

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.wedrawplans.co.uk/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Planning Approvals & Case Studies",
        item: "https://www.wedrawplans.co.uk/case-studies"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: item.shortTitle,
        item: canonical
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{item.shortTitle} Case Study | WEDRAWPLANS</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={item.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={"https://www.wedrawplans.co.uk" + item.hero} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
        />
      </Head>

      <SiteHeader />

      <main className="bg-white text-slate-950">
        <section className="border-y border-slate-200 bg-[#f8f4f0]">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6 lg:py-14">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
              <span>›</span>
              <Link href="/case-studies" className="hover:text-slate-900">
                Case Studies
              </Link>
              <span>›</span>
              <span className="text-slate-700">{item.shortTitle}</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-slate-950 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    {statusLabel(item.status)}
                  </span>
                  <span className="rounded-full border border-slate-300 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700">
                    {item.year}
                  </span>
                  {item.rank === 1 ? (
                    <span className="rounded-full bg-[#64b7c4] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
                      Flagship case study
                    </span>
                  ) : null}
                </div>

                <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#4da4b4]">
                  {item.eyebrow}
                </div>
                <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">
                  {item.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700">
                  {item.summary}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      Local authority
                    </div>
                    <div className="mt-1 text-sm font-bold">{item.authority}</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      Application reference
                    </div>
                    <div className="mt-1 text-sm font-bold">{item.applicationRef}</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      Project
                    </div>
                    <div className="mt-1 text-sm font-bold">{item.service}</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      Location
                    </div>
                    <div className="mt-1 text-sm font-bold">
                      {item.location} · {item.postcode}
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#fixed-fee"
                    className="rounded-full bg-[#64b7c4] px-6 py-3 text-sm font-extrabold text-white hover:bg-[#4da4b4]"
                  >
                    Get your fixed fee
                  </a>
                  <a
                    href="tel:+442036548508"
                    className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 hover:bg-slate-50"
                  >
                    Call 020 3654 8508
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="relative min-h-[360px] bg-slate-100">
                  <img
                    src={item.hero}
                    alt={item.shortTitle + " WEDRAWPLANS project drawing or project image"}
                    className="h-full min-h-[360px] w-full object-cover"
                  />
                </div>
                <div className="border-t border-slate-200 p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4da4b4]">
                    WEDRAWPLANS PROJECT EVIDENCE
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {item.proof}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {item.reviewHighlight ? (
          <section className="border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-7 lg:px-6">
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700">
                  CLIENT TRUST
                </div>
                <div className="mt-2 text-lg font-extrabold">{item.reviewHighlight}</div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  We use genuine project feedback as supporting trust evidence. We do not manufacture testimonials or claim guaranteed planning outcomes.
                </p>
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-white py-12">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.9fr,1.1fr] lg:px-6">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4da4b4]">
                THE PLANNING TASK
              </div>
              <h2 className="mt-2 text-3xl font-black tracking-tight">
                What WEDRAWPLANS needed to solve
              </h2>
              <div className="mt-6 space-y-3">
                {item.challenge.map((point) => (
                  <div
                    key={point}
                    className="flex gap-3 rounded-2xl border border-slate-200 p-4"
                  >
                    <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#64b7c4]" />
                    <p className="text-sm leading-6 text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4da4b4]">
                THE OUTCOME
              </div>
              <h2 className="mt-2 text-3xl font-black tracking-tight">
                Clear drawings. Clear evidence. A stronger planning story.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-700">{item.result}</p>

              <div className="mt-6 rounded-3xl bg-slate-950 p-6 text-white">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#76c8d2]">
                  VERIFIED PROJECT RECORD
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-200">{item.proof}</p>
              </div>
            </div>
          </div>
        </section>

        {item.gallery?.length ? (
          <section className="border-y border-slate-200 bg-slate-50 py-12">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4da4b4]">
                    DRAWING & PROJECT VIEW
                  </div>
                  <h2 className="mt-2 text-3xl font-black tracking-tight">
                    More from this project type
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-slate-600">
                  Drawings and visual material are used to help prospective clients understand the level of presentation and coordination WEDRAWPLANS can provide.
                </p>
              </div>

              <div className={"mt-7 grid gap-6 " + (item.gallery.length > 1 ? "md:grid-cols-2" : "")}>
                {item.gallery.map((src, index) => (
                  <div
                    key={src + index}
                    className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                  >
                    <img
                      src={src}
                      alt={item.shortTitle + " supporting drawing view " + (index + 1)}
                      className="h-[340px] w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href={item.relatedArea.href}
                className="rounded-3xl border border-slate-200 p-6 transition hover:bg-slate-50"
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4da4b4]">
                  LOCAL EXPERIENCE
                </div>
                <div className="mt-2 text-xl font-extrabold">{item.relatedArea.label}</div>
                <div className="mt-3 text-sm font-bold text-sky-700">View local service →</div>
              </Link>
              <Link
                href={item.relatedService.href}
                className="rounded-3xl border border-slate-200 p-6 transition hover:bg-slate-50"
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4da4b4]">
                  RELATED SERVICE
                </div>
                <div className="mt-2 text-xl font-extrabold">{item.relatedService.label}</div>
                <div className="mt-3 text-sm font-bold text-sky-700">View service →</div>
              </Link>
            </div>
          </div>
        </section>

        <section id="fixed-fee" className="bg-slate-950 py-14 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.9fr,1.1fr] lg:px-6">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#76c8d2]">
                PLANNING SOMETHING SIMILAR?
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Get your fixed fee
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                Send the postcode and a short description of your project. WEDRAWPLANS will review the likely route and reply with a clear scope and fixed fee for the drawings and planning support.
              </p>
              <div className="mt-6 space-y-2 text-sm text-slate-200">
                <div>✓ Clear fixed-fee scope</div>
                <div>✓ London, Outer London and M25 coverage</div>
                <div>✓ Planning and Building Regulations drawings available</div>
                <div>✓ Real project experience you can inspect</div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-6 text-slate-950 shadow-xl"
            >
              <input type="hidden" name="service" value={item.service} />
              <input type="hidden" name="projectSource" value={"Case Study: " + item.slug} />

              <div className="text-lg font-extrabold">
                Request your fixed-fee quote
              </div>
              <p className="mt-1 text-sm text-slate-600">
                We will use your postcode and brief to recommend the right next step.
              </p>

              <div className="mt-5 grid gap-3">
                <input
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#64b7c4]"
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    name="phone"
                    required
                    placeholder="Telephone"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#64b7c4]"
                  />
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#64b7c4]"
                  />
                </div>
                <input
                  name="postcode"
                  required
                  placeholder="Property postcode"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#64b7c4]"
                />
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us briefly what you would like to do"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#64b7c4]"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#64b7c4] px-6 py-3 text-sm font-extrabold text-white hover:bg-[#4da4b4]"
                >
                  Get your fixed fee
                </button>
              </div>
            </form>
          </div>
        </section>

        {related.length ? (
          <section className="bg-[#f8f4f0] py-12">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4da4b4]">
                    MORE REAL PROJECTS
                  </div>
                  <h2 className="mt-2 text-2xl font-black tracking-tight">
                    Related WEDRAWPLANS case studies
                  </h2>
                </div>
                <Link href="/case-studies" className="text-sm font-bold text-sky-700">
                  View all →
                </Link>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {related.map((candidate) => (
                  <Link
                    key={candidate.slug}
                    href={"/case-studies/" + candidate.slug}
                    className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                  >
                    <img
                      src={candidate.hero}
                      alt={candidate.shortTitle + " WEDRAWPLANS case study"}
                      className="h-44 w-full object-cover"
                    />
                    <div className="p-5">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4da4b4]">
                        {statusLabel(candidate.status)}
                      </div>
                      <div className="mt-2 font-extrabold">{candidate.shortTitle}</div>
                      <div className="mt-2 text-sm text-slate-600">{candidate.service}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: caseStudies.map((item) => ({
    params: { slug: item.slug }
  })),
  fallback: false
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = String(params?.slug || "");
  const item = caseStudyBySlug[slug];

  if (!item) {
    return { notFound: true };
  }

  return {
    props: {
      item
    }
  };
};
