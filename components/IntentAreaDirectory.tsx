import React from "react";
import Link from "next/link";
import { boroughIntent } from "../data/boroughIntent";

type Context = "home" | "extension" | "loft" | "building" | "planning" | "areas";

const PICKS: Record<Exclude<Context, "areas">, string[]> = {
  home: ["barnet","ealing","hounslow","harrow","wandsworth","southwark","sutton","croydon","greenwich","lewisham","hertfordshire","bromley"],
  extension: ["barnet","ealing","hounslow","harrow","wandsworth","croydon","bromley","merton","richmond","islington","sutton","hertfordshire"],
  loft: ["sutton","barnet","greenwich","hammersmith-and-fulham","harrow","enfield","lambeth","kingston","lewisham","wandsworth","hertfordshire","redbridge"],
  building: ["barnet","ealing","hounslow","wandsworth","greenwich","croydon","brent","southwark","hillingdon","merton","hertfordshire","sutton"],
  planning: ["barnet","ealing","harrow","hounslow","wandsworth","lewisham","greenwich","croydon","sutton","southwark","hertfordshire","bromley"],
};

const TITLES: Record<Context, string> = {
  home: "Find planning and house extension drawing services near you",
  extension: "House extension planning drawings by London borough",
  loft: "Loft conversion planning drawings by London borough",
  building: "Building Regulation drawings and Building Control plans by area",
  planning: "Planning permission drawings and approved examples across London",
  areas: "Local extension, loft and Building Regulation drawing services",
};

const ANCHOR: Record<Exclude<Context, "areas">, string> = {
  home: "Planning and extension drawings",
  extension: "House extension plans",
  loft: "Loft conversion drawings",
  building: "Building Regulation drawings",
  planning: "Planning drawings",
};

export default function IntentAreaDirectory({ context }: { context: Context }) {
  const slugs = context === "areas"
    ? Object.keys(boroughIntent)
    : PICKS[context];
  const sorted = context === "areas"
    ? [...slugs].sort((a, b) => boroughIntent[a].name.localeCompare(boroughIntent[b].name))
    : slugs;
  return (
    <section aria-labelledby={"local-intent-links-" + context} className="border-y border-slate-200 bg-white px-4 py-10 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-widest text-teal-700">Local homeowner drawing services</p>
        <h2 id={"local-intent-links-" + context} className="mt-2 max-w-4xl text-2xl font-bold leading-tight text-[#173e46]">
          {TITLES[context]}
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700">
          Select your local authority area to explore common house extension and loft drawing needs, Building Regulation technical packs and relevant WEDRAWPLANS project evidence. Quotes are based on your actual property and the services required.
        </p>
        <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((slug) => {
            const area = boroughIntent[slug];
            if (!area) return null;
            const label = context === "areas" ? area.heading : ANCHOR[context] + " in " + area.name;
            return (
              <li key={slug}>
                <Link href={"/areas/" + slug} className="group flex items-start gap-2 text-sm font-semibold leading-6 text-teal-800 hover:text-teal-600">
                  <span aria-hidden="true" className="mt-0.5 text-teal-600">↗</span>
                  <span className="underline decoration-teal-200 underline-offset-4 group-hover:decoration-teal-600">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        {context !== "areas" ? (
          <p className="mt-5 text-sm text-slate-700">
            <Link href="/areas" className="font-semibold text-teal-800 underline underline-offset-4">See all 33 London boroughs and surrounding M25 towns →</Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
