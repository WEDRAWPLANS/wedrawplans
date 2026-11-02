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
  title = "Selected WEDRAWPLANS planning approvals",
  intro = "See how our architectural drawings have supported planning applications across London and the surrounding areas. Each project provides a relevant example of the work we undertake.",
}: Props) {
  const items = slugs
    .map((slug) => caseStudies.find((item) => item.slug === slug))
    .filter((item): item is (typeof caseStudies)[number] => Boolean(item));

  if (!items.length) return null;

  return (
    <section aria-label="Selected planning projects" className="border-y border-[#e1e9e5] bg-[#f5f8f6] py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#337b82]">
              WEDRAWPLANS project experience
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-[#274045] sm:text-3xl">{title}</h2>
            <p className="mt-4 text-[14px] leading-7 text-[#596c70]">{intro}</p>
          </div>
          <Link href="/case-studies" className="text-[13px] font-semibold text-[#22727c] underline-offset-4 hover:underline">
            Browse all projects →
          </Link>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.slug} className="flex flex-col rounded-[16px] border border-[#dde7e2] bg-white p-5 sm:p-6">
              <p className="text-[11px] font-semibold text-[#387968]">{item.outcome}</p>
              <h3 className="mt-3 text-[17px] font-semibold leading-snug text-[#264145]">{item.shortTitle}</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#5b6c70]">{item.service}</p>
              <p className="mt-3 text-[12px] leading-5 text-[#728183]">{item.authority} · {item.reference}</p>
              <Link href={"/case-studies/" + item.slug} className="mt-auto inline-flex w-fit pt-5 text-[13px] font-semibold text-[#1d737d] underline-offset-4 hover:underline">
                View project details →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link href="/get-drawings-quote" className="inline-flex rounded-full bg-[#51aab8] px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-[#318e9c]">
            Get your fixed-fee quote
          </Link>
          <span className="text-[13px] leading-6 text-[#65777a]">
            Planning an extension, loft conversion or other project? Tell us what you have in mind.
          </span>
        </div>
      </div>
    </section>
  );
}
