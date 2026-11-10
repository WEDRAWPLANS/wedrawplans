import React from "react";
import Link from "next/link";
import { boroughIntent } from "../data/boroughIntent";
import { caseStudyBySlug } from "../data/caseStudies";

type Props = { slug: string };

const SERVICE_LINKS = [
  { href: "/extension-plans", label: "Extension plans", detail: "Existing and proposed plans, elevations and supporting planning information." },
  { href: "/loft-conversion-plans", label: "Loft conversion drawings", detail: "Roof plans, dormer elevations, stair arrangements and key sections." },
  { href: "/building-regulation-drawings", label: "Building Regulation drawings", detail: "Construction details and Building Control information, with structural engineer coordination as required." },
];

export default function BoroughIntentCapture({ slug }: Props) {
  const info = boroughIntent[slug];
  if (!info) return null;

  const evidence = info.evidence
    .map((id) => caseStudyBySlug[id])
    .filter((item) => item && item.approved);

  return (
    <section aria-labelledby={"borough-intent-" + slug} className="border-t border-slate-200 bg-[#f6faf8] px-4 py-12 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">Planning, Building Regulations and structural coordination</p>
        <h2 id={"borough-intent-" + slug} className="mt-3 max-w-4xl text-2xl font-bold leading-tight text-[#193f48] sm:text-3xl">
          {info.heading}
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 sm:text-base">
          Looking for architectural and planning drawings in {info.name}? WEDRAWPLANS helps homeowners in {info.localities} understand their options for extensions, lofts and alterations. {info.context}
        </p>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {info.topics.map((topic, index) => (
            <article key={topic} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold leading-6 text-[#173e46]">{topic}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {index === 0
                  ? "For planning applications, prior approval or lawful development evidence where appropriate, we can prepare accurate existing and proposed drawings, elevations and the relevant site information."
                  : index === 1
                  ? "We review the property layout, roof or alteration proposal and applicable planning route before defining the drawing package; permission is never assumed."
                  : "Technical drawing packs can cover construction sections, insulation, ventilation and fire-safety notes, alongside structural engineer coordination where required."}
              </p>
              <Link className="mt-3 inline-block text-sm font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-600" href={SERVICE_LINKS[index].href}>
                {SERVICE_LINKS[index].label} →
              </Link>
            </article>
          ))}
        </div>
        {evidence.length > 0 ? (
          <div className="mt-8 rounded-xl border border-teal-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-[#173e46]">Approved WEDRAWPLANS work in {info.name}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-700">
              Explore actual project outcomes and drawing examples. Each approval relates to its own site; it does not guarantee consent for another property.
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {evidence.map((item) => (
                <li key={item.slug}>
                  <Link className="text-sm font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-600" href={"/case-studies/" + item.slug}>
                    {item.shortTitle || item.title} →
                  </Link>
                  <span className="mt-1 block text-xs text-slate-600">{item.authority} · {item.outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-7 text-sm leading-6 text-slate-700">
            Want to see how our drawings are presented? <Link href="/case-studies" className="font-semibold text-teal-800 underline underline-offset-4">View approved WEDRAWPLANS projects from other locations</Link>. We will review your own property independently.
          </p>
        )}
        <div className="mt-8 grid gap-5 border-t border-slate-200 pt-7 md:grid-cols-2">
          <div>
            <h3 className="text-base font-semibold text-[#173e46]">What drawings are needed for my project?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Depending on the proposal, the pack may include existing and proposed floor plans, elevations, roof plans, sections and site information. We identify the suitable planning or permitted-development route before agreeing the scope.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-[#173e46]">Can planning, Building Regulations and structural design be coordinated?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Yes. WEDRAWPLANS can coordinate the architectural planning drawings, technical Building Regulation drawings and structural engineer input as one managed process, with each stage and any third-party work clearly specified in your quotation.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3 rounded-xl bg-[#173e46] p-5 text-white">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold">Get a fixed-fee drawing quote in {info.name}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-100">Tell us your postcode and project type; we will set out the planning, technical and structural scope separately where required.</p>
          </div>
          <Link href="/get-drawings-quote" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#173e46] hover:bg-teal-50">Request a quote →</Link>
        </div>
      </div>
    </section>
  );
}
