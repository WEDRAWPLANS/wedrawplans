import Link from "next/link";
import { caseStudies } from "../data/caseStudies";

type Props = {
  slugs?: string[];
  title?: string;
  intro?: string;
};

export default function ApprovalEvidenceStrip({
  slugs = [
    "sistova-road-wandsworth-extension-basement",
    "allum-lane-elstree-major-house-extension",
    "sunbury-avenue-mill-hill-side-rear-extension",
  ],
  title = "Real WEDRAWPLANS project evidence",
  intro = "Selected examples from our planning and drawing portfolio. Every project below links to a fuller case study with the relevant council, application route and project scope.",
}: Props) {
  const items = slugs
    .map((slug) => caseStudies.find((item) => item.slug === slug))
    .filter(Boolean);

  return (
    <section className="border-y border-slate-200 bg-[#f8f4f0] py-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-red-700">
            Selected planning evidence
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
          <p className="mt-3 text-[13px] leading-7 text-slate-700">{intro}</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((item: any) => (
            <article key={item.slug} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                {item.approved ? item.outcome : "WEDRAWPLANS project"}
              </div>
              <h3 className="mt-2 text-[15px] font-semibold text-slate-900">{item.shortTitle}</h3>
              <p className="mt-2 text-[12px] leading-6 text-slate-600">{item.service}</p>
              <p className="mt-2 text-[11px] font-medium text-slate-500">
                {item.authority} • {item.reference}
              </p>
              <Link
                href={"/case-studies/" + item.slug}
                className="mt-4 inline-flex text-[12px] font-semibold text-slate-900 underline underline-offset-4"
              >
                View project case study
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            href="/case-studies"
            className="rounded-full bg-[#20243b] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white"
          >
            View planning approvals & case studies
          </Link>
          <Link
            href="/get-drawings-quote"
            className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white"
          >
            Get your fixed-fee quote
          </Link>
        </div>
      </div>
    </section>
  );
}
