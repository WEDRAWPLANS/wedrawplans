import Link from "next/link";

import { LONDON_AREAS } from "../data/londonAreas";

const OUTER_AREAS = [
  ["Hertfordshire", "/areas/hertfordshire"],
  ["Essex", "/areas/essex"],
  ["Surrey borders and M25", "/areas/surrey-borders-m25"],
] as const;

export default function LondonAreaLinks({
  heading = "Architectural drawing services across London",
}: {
  heading?: string;
}) {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">{heading}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          WEDRAWPLANS supports homeowners across every London borough, plus selected surrounding M25 areas.
          Choose your area for local planning, extension, loft and Building Regulations guidance.
        </p>
        <nav aria-label="London borough architectural drawing pages" className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {LONDON_AREAS.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 transition hover:border-sky-300 hover:bg-white"
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="mt-5 flex flex-wrap gap-2">
          {OUTER_AREAS.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-sky-400"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
