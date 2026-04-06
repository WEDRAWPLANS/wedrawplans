import React from "react";

function slugifyBorough(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/[^\w-]/g, "");
}

type BoroughLinks = {
  nearby: string[];
  other: string[];
};

const BOROUGH_LINKS: Record<string, BoroughLinks> = {
  "Barking and Dagenham": {
    nearby: ["Redbridge", "Havering", "Newham", "Tower Hamlets", "Greenwich", "Bexley"],
    other: ["Waltham Forest", "Hackney", "Lewisham", "Southwark", "Croydon", "Barnet"],
  },
  Barnet: {
    nearby: ["Enfield", "Haringey", "Camden", "Brent", "Harrow", "Westminster"],
    other: ["Ealing", "Redbridge", "Waltham Forest", "Hammersmith and Fulham", "Kensington and Chelsea", "Richmond upon Thames"],
  },
  Bexley: {
    nearby: ["Greenwich", "Bromley", "Croydon", "Havering", "Barking and Dagenham"],
    other: ["Lewisham", "Southwark", "Redbridge", "Newham", "Wandsworth", "Sutton"],
  },
  Brent: {
    nearby: ["Barnet", "Camden", "Ealing", "Hammersmith and Fulham", "Kensington and Chelsea", "Westminster", "Harrow"],
    other: ["Hillingdon", "Richmond upon Thames", "Merton", "Wandsworth", "Hounslow", "Enfield"],
  },
  Bromley: {
    nearby: ["Croydon", "Lewisham", "Southwark", "Bexley", "Greenwich", "Lambeth", "Sutton"],
    other: ["Merton", "Wandsworth", "Richmond upon Thames", "Kingston upon Thames", "Barnet", "Ealing"],
  },
  Camden: {
    nearby: ["Barnet", "Brent", "Westminster", "Islington", "Haringey", "Hackney", "Kensington and Chelsea"],
    other: ["Hammersmith and Fulham", "Ealing", "Enfield", "Waltham Forest", "Redbridge", "Southwark"],
  },
  Croydon: {
    nearby: ["Bromley", "Lambeth", "Lewisham", "Merton", "Sutton", "Wandsworth", "Southwark"],
    other: ["Kingston upon Thames", "Richmond upon Thames", "Bexley", "Greenwich", "Ealing", "Barnet"],
  },
  Ealing: {
    nearby: ["Hounslow", "Hammersmith and Fulham", "Brent", "Harrow", "Hillingdon", "Richmond upon Thames"],
    other: ["Kensington and Chelsea", "Westminster", "Merton", "Wandsworth", "Barnet", "Camden"],
  },
  Enfield: {
    nearby: ["Barnet", "Haringey", "Waltham Forest", "Redbridge", "Hackney", "Islington", "Camden"],
    other: ["Harrow", "Brent", "Ealing", "Westminster", "Southwark", "Croydon"],
  },
  Greenwich: {
    nearby: ["Bexley", "Bromley", "Lewisham", "Southwark", "Tower Hamlets", "Newham", "Barking and Dagenham"],
    other: ["Croydon", "Lambeth", "Wandsworth", "Redbridge", "Waltham Forest", "Barnet"],
  },
  Hackney: {
    nearby: ["Islington", "Haringey", "Waltham Forest", "Newham", "Tower Hamlets", "Southwark", "Redbridge"],
    other: ["Enfield", "Barnet", "Camden", "Lewisham", "Greenwich", "Westminster"],
  },
  "Hammersmith and Fulham": {
    nearby: ["Kensington and Chelsea", "Westminster", "Brent", "Ealing", "Richmond upon Thames", "Wandsworth"],
    other: ["Merton", "Lambeth", "Camden", "Barnet", "Harrow", "Hounslow"],
  },
  Haringey: {
    nearby: ["Enfield", "Barnet", "Camden", "Islington", "Hackney", "Waltham Forest"],
    other: ["Redbridge", "Brent", "Westminster", "Southwark", "Ealing", "Croydon"],
  },
  Harrow: {
    nearby: ["Barnet", "Brent", "Ealing", "Hillingdon"],
    other: ["Richmond upon Thames", "Hounslow", "Camden", "Kensington and Chelsea", "Wandsworth", "Westminster"],
  },
  Havering: {
    nearby: ["Barking and Dagenham", "Redbridge", "Bexley"],
    other: ["Newham", "Waltham Forest", "Greenwich", "Croydon", "Lewisham", "Barnet"],
  },
  Hillingdon: {
    nearby: ["Ealing", "Harrow", "Hounslow"],
    other: ["Brent", "Richmond upon Thames", "Hammersmith and Fulham", "Wandsworth", "Kensington and Chelsea", "Westminster"],
  },
  Hounslow: {
    nearby: ["Ealing", "Hillingdon", "Richmond upon Thames", "Hammersmith and Fulham"],
    other: ["Wandsworth", "Merton", "Kensington and Chelsea", "Brent", "Westminster", "Harrow"],
  },
  Islington: {
    nearby: ["Camden", "Hackney", "Haringey", "Tower Hamlets", "Southwark", "Westminster"],
    other: ["Barnet", "Enfield", "Waltham Forest", "Kensington and Chelsea", "Lambeth", "Greenwich"],
  },
  "Kensington and Chelsea": {
    nearby: ["Hammersmith and Fulham", "Westminster", "Wandsworth", "Brent", "Camden"],
    other: ["Richmond upon Thames", "Merton", "Lambeth", "Ealing", "Wandsworth", "Barnet"],
  },
  "Kingston upon Thames": {
    nearby: ["Richmond upon Thames", "Merton", "Sutton", "Croydon", "Wandsworth"],
    other: ["Hounslow", "Ealing", "Lambeth", "Bromley", "Kensington and Chelsea", "Westminster"],
  },
  Lambeth: {
    nearby: ["Southwark", "Wandsworth", "Merton", "Croydon", "Lewisham", "Westminster"],
    other: ["Kensington and Chelsea", "Richmond upon Thames", "Kingston upon Thames", "Bromley", "Greenwich", "Hammersmith and Fulham"],
  },
  Lewisham: {
    nearby: ["Southwark", "Greenwich", "Bromley", "Croydon", "Lambeth"],
    other: ["Bexley", "Wandsworth", "Merton", "Tower Hamlets", "Hackney", "Newham"],
  },
  Merton: {
    nearby: ["Wandsworth", "Lambeth", "Croydon", "Sutton", "Kingston upon Thames", "Richmond upon Thames"],
    other: ["Kensington and Chelsea", "Hammersmith and Fulham", "Westminster", "Ealing", "Bromley", "Southwark"],
  },
  Newham: {
    nearby: ["Tower Hamlets", "Hackney", "Waltham Forest", "Redbridge", "Barking and Dagenham", "Greenwich"],
    other: ["Southwark", "Lewisham", "Bexley", "Enfield", "Barnet", "Croydon"],
  },
  Redbridge: {
    nearby: ["Waltham Forest", "Newham", "Barking and Dagenham", "Havering", "Enfield", "Hackney"],
    other: ["Barnet", "Haringey", "Greenwich", "Bexley", "Southwark", "Croydon"],
  },
  "Richmond upon Thames": {
    nearby: ["Wandsworth", "Merton", "Kingston upon Thames", "Hounslow", "Hammersmith and Fulham"],
    other: ["Kensington and Chelsea", "Lambeth", "Westminster", "Ealing", "Sutton", "Croydon"],
  },
  Southwark: {
    nearby: ["Lambeth", "Lewisham", "Greenwich", "Tower Hamlets", "Hackney", "Islington", "Westminster", "Wandsworth"],
    other: ["Croydon", "Bromley", "Merton", "Kensington and Chelsea", "Richmond upon Thames", "Barnet"],
  },
  Sutton: {
    nearby: ["Merton", "Croydon", "Kingston upon Thames", "Bromley"],
    other: ["Wandsworth", "Richmond upon Thames", "Lambeth", "Ealing", "Southwark", "Hounslow"],
  },
  "Tower Hamlets": {
    nearby: ["Hackney", "Newham", "Greenwich", "Southwark", "Islington"],
    other: ["Lewisham", "Redbridge", "Waltham Forest", "Barnet", "Camden", "Westminster"],
  },
  Waltham Forest: {
    nearby: ["Enfield", "Haringey", "Hackney", "Newham", "Redbridge"],
    other: ["Barnet", "Southwark", "Tower Hamlets", "Greenwich", "Lewisham", "Croydon"],
  },
  Wandsworth: {
    nearby: ["Lambeth", "Merton", "Richmond upon Thames", "Kensington and Chelsea", "Hammersmith and Fulham", "Westminster"],
    other: ["Croydon", "Kingston upon Thames", "Sutton", "Southwark", "Hounslow", "Bromley"],
  },
  Westminster: {
    nearby: ["Kensington and Chelsea", "Hammersmith and Fulham", "Brent", "Camden", "Islington", "Lambeth", "Southwark", "Wandsworth"],
    other: ["Ealing", "Richmond upon Thames", "Merton", "Barnet", "Haringey", "Croydon"],
  },
};

const FALLBACK_NEARBY: string[] = [
  "Barnet",
  "Ealing",
  "Enfield",
  "Haringey",
  "Harrow",
  "Redbridge",
];

const FALLBACK_OTHER: string[] = [
  "Croydon",
  "Wandsworth",
  "Richmond upon Thames",
  "Merton",
  "Lambeth",
  "Southwark",
];

function BoroughCard({
  borough,
  current = false,
}: {
  borough: string;
  current?: boolean;
}) {
  const slug = slugifyBorough(borough);

  if (current) {
    return (
      <a
        href={`/areas/${slug}`}
        aria-disabled="true"
        className="rounded-xl border bg-slate-900 p-4 text-white opacity-95"
      >
        <div className="text-[12px] font-extrabold uppercase tracking-[0.14em]">Current</div>
        <div className="mt-1 text-sm font-semibold">{borough}</div>
        <div className="mt-2 text-[12px] opacity-90">You are here</div>
      </a>
    );
  }

  return (
    <a
      href={`/areas/${slug}`}
      className="rounded-xl border bg-slate-50 p-4 transition hover:bg-white"
    >
      <div className="text-sm font-semibold text-slate-900">{borough}</div>
      <div className="mt-2 text-[12px] text-blue-600 underline underline-offset-4">
        View {borough} page
      </div>
    </a>
  );
}

export default function ServiceInternalLinks({
  boroughName,
}: {
  boroughName: string;
}) {
  const boroughLinks = BOROUGH_LINKS[boroughName];

  const nearbyRaw = boroughLinks?.nearby || FALLBACK_NEARBY;
  const otherRaw = boroughLinks?.other || FALLBACK_OTHER;

  const nearby = nearbyRaw.filter((b, i, arr) => b !== boroughName && arr.indexOf(b) === i);
  const other = otherRaw.filter(
    (b, i, arr) => b !== boroughName && !nearby.includes(b) && arr.indexOf(b) === i
  );

  const currentSlug = slugifyBorough(boroughName);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-extrabold tracking-tight">
          Popular services in {boroughName}
        </h2>

        <p className="mt-3 max-w-3xl text-slate-700">
          We provide full design and planning services for extensions, loft conversions
          and new build developments. Each service page explains what is included,
          how approvals work, and how to get a fixed quote.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <a
            href="/extension-plans"
            className="rounded-2xl border bg-slate-50 p-6 transition hover:bg-white"
          >
            <div className="text-sm font-extrabold">Extension Plans</div>
            <div className="mt-2 text-sm text-slate-700">
              Planning drawings and Building Regulations packages for house extensions.
            </div>
            <div className="mt-4 text-sm font-semibold text-blue-600 underline underline-offset-4">
              View Extension Plans
            </div>
          </a>

          <a
            href="/loft-conversion-plans"
            className="rounded-2xl border bg-slate-50 p-6 transition hover:bg-white"
          >
            <div className="text-sm font-extrabold">Loft Conversion Plans</div>
            <div className="mt-2 text-sm text-slate-700">
              Dormer, mansard and hip to gable loft designs with structural engineering.
            </div>
            <div className="mt-4 text-sm font-semibold text-blue-600 underline underline-offset-4">
              View Loft Plans
            </div>
          </a>

          <a
            href="/new-build-plans"
            className="rounded-2xl border bg-slate-50 p-6 transition hover:bg-white"
          >
            <div className="text-sm font-extrabold">New Build Plans</div>
            <div className="mt-2 text-sm text-slate-700">
              New build planning drawings with structural engineering and town planning support.
            </div>
            <div className="mt-4 text-sm font-semibold text-blue-600 underline underline-offset-4">
              View New Build Plans
            </div>
          </a>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-extrabold tracking-tight">Nearby borough pages</h3>

          <p className="mt-2 max-w-3xl text-slate-700">
            These are the boroughs that directly border {boroughName}. If your property is
            close to the boundary, these local pages may also be relevant for your project.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            <a
              href={`/areas/${currentSlug}`}
              aria-disabled="true"
              className="rounded-xl border bg-slate-900 p-4 text-white opacity-95"
            >
              <div className="text-[12px] font-extrabold uppercase tracking-[0.14em]">
                Current
              </div>
              <div className="mt-1 text-sm font-semibold">{boroughName}</div>
              <div className="mt-2 text-[12px] opacity-90">You are here</div>
            </a>

            {nearby.map((b) => (
              <BoroughCard key={b} borough={b} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-extrabold tracking-tight">
            Other London areas we also cover
          </h3>

          <p className="mt-2 max-w-3xl text-slate-700">
            These pages cover other parts of London that may still be useful if you are
            comparing services, moving area, or looking at similar project types elsewhere.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {other.map((b) => (
              <BoroughCard key={b} borough={b} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
