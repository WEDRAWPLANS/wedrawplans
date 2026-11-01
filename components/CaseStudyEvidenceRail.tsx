import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { caseStudyBySlug } from "../data/caseStudies";

const ROUTE_CASES: Record<string, string[]> = {
  "/": [
    "sistova-road-wandsworth-extension-basement",
    "the-hyde-colindale-apartments",
    "woolwich-road-greenwich-two-extra-flats"
  ],
  "/extension-plans": [
    "sistova-road-wandsworth-extension-basement",
    "allum-lane-elstree-major-extension",
    "sunbury-avenue-mill-hill-extension",
    "northolm-edgware-two-storey-extension",
    "reddings-close-13-first-floor-side-extension",
    "dryfield-road-edgware-conservation-extension"
  ],
  "/planning-drawings": [
    "sistova-road-wandsworth-extension-basement",
    "brockley-road-lewisham-two-flat-conversion",
    "hall-lane-chingford-dropped-kerb"
  ],
  "/lawful-development-certificate-drawings": [
    "tithe-walk-mill-hill-lawful-loft",
    "deans-way-edgware-lawful-loft",
    "alnwick-road-eltham-lawful-loft"
  ],
  "/new-build-plans": [
    "the-hyde-colindale-apartments",
    "woolwich-road-greenwich-two-extra-flats",
    "brockley-road-lewisham-two-flat-conversion"
  ],
  "/commercial/shopfronts": [
    "mile-end-road-listed-building-door",
    "electric-avenue-brixton-shopfront",
    "burnt-oak-broadway-retail-flat-conversion"
  ],
  "/areas/wandsworth": ["sistova-road-wandsworth-extension-basement"],
  "/areas/barnet": [
    "sunbury-avenue-mill-hill-extension",
    "tithe-walk-mill-hill-lawful-loft",
    "northolm-edgware-two-storey-extension",
    "reddings-close-mill-hill-planning-journey",
    "reddings-close-13-first-floor-side-extension",
    "dryfield-road-edgware-conservation-extension"
  ],
  "/areas/greenwich": [
    "woolwich-road-greenwich-two-extra-flats",
    "alnwick-road-eltham-lawful-loft"
  ],
  "/areas/lewisham": ["brockley-road-lewisham-two-flat-conversion"],
  "/areas/hounslow": ["cromwell-road-hounslow-rear-extension"],
  "/areas/harrow": ["burnt-oak-broadway-retail-flat-conversion"],
  "/areas/tower-hamlets": ["mile-end-road-listed-building-door"],
  "/areas/lambeth": ["electric-avenue-brixton-shopfront"],
  "/areas/waltham-forest": ["hall-lane-chingford-dropped-kerb"],
  "/areas/hertfordshire": [
    "allum-lane-elstree-major-extension",
    "cranbourne-drive-hoddesdon-planning"
  ]
};

function statusLabel(status: string) {
  if (status === "Lawful") return "Lawful development";
  if (status === "Prior approval") return "Prior approval";
  if (status === "Current project") return "Current project";
  return "Planning approved";
}

export default function CaseStudyEvidenceRail() {
  const router = useRouter();

  if (router.pathname.startsWith("/case-studies")) return null;

  const slugs = ROUTE_CASES[router.pathname];
  if (!slugs?.length) return null;

  const cases = slugs
    .map((slug) => caseStudyBySlug[slug])
    .filter(Boolean)
    .slice(0, router.pathname === "/extension-plans" ? 6 : 3);

  if (!cases.length) return null;

  return (
    <section className="border-t border-slate-200 bg-[#f8f4f0] py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4da4b4]">
              REAL WEDRAWPLANS PROJECT EVIDENCE
            </div>
            <h2 className="mt-2 max-w-3xl text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
              See projects similar to the one you are planning
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
              Selected approvals and planning projects prepared by WEDRAWPLANS.
              Use the examples below to see the type of work we handle, then get
              a clear fixed fee for your own property.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            View all case studies
          </Link>
        </div>

        <div className={"mt-7 grid gap-5 " + (cases.length > 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-3")}>
          {cases.map((item) => (
            <article
              key={item.slug}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <Link href={"/case-studies/" + item.slug} className="block">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.hero}
                    alt={item.shortTitle + " WEDRAWPLANS project"}
                    className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-900 shadow-sm">
                    {statusLabel(item.status)}
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4da4b4]">
                    {item.authority}
                  </div>
                  <h3 className="mt-2 text-lg font-extrabold tracking-tight text-slate-950">
                    {item.shortTitle}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-700">
                    {item.summary}
                  </p>
                  <div className="mt-4 text-sm font-bold text-sky-700">
                    View project evidence →
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl bg-slate-950 p-6 text-white sm:flex-row sm:items-center">
          <div>
            <div className="text-lg font-extrabold">
              Planning something similar?
            </div>
            <div className="mt-1 text-sm text-slate-300">
              Send your postcode and brief. We will review the likely route and give you a clear fixed fee.
            </div>
          </div>
          <Link
            href="/get-drawings-quote"
            className="inline-flex shrink-0 rounded-full bg-[#64b7c4] px-6 py-3 text-sm font-extrabold text-white hover:bg-[#4da4b4]"
          >
            Get your fixed fee
          </Link>
        </div>
      </div>
    </section>
  );
}
