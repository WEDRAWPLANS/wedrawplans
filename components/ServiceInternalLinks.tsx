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

const NEARBY_BOROUGHS: Record<string, string[]> = {
  Enfield: [
    "Barnet",
    "Haringey",
    "Waltham Forest",
    "Redbridge",
    "Hackney",
    "Islington",
    "Camden",
    "Harrow",
  ],
  Croydon: [
    "Bromley",
    "Lambeth",
    "Southwark",
    "Lewisham",
    "Sutton",
    "Merton",
    "Wandsworth",
  ],
  Ealing: [
    "Hounslow",
    "Hammersmith and Fulham",
    "Brent",
    "Harrow",
    "Richmond upon Thames",
    "Kensington and Chelsea",
    "Westminster",
  ],
};

const FALLBACK_BOROUGHS: string[] = [
  "Barnet",
  "Ealing",
  "Enfield",
  "Haringey",
  "Harrow",
  "Redbridge",
  "Waltham Forest",
  "Croydon",
];

export default function ServiceInternalLinks({
  boroughName,
}: {
  boroughName: string;
}) {
  const nearby =
    NEARBY_BOROUGHS[boroughName] ||
    FALLBACK_BOROUGHS.filter((b) => b !== boroughName);

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
            className="rounded-2xl border bg-slate-50 p-6 hover:bg-white"
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
            className="rounded-2xl border bg-slate-50 p-6 hover:bg-white"
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
            className="rounded-2xl border bg-slate-50 p-6 hover:bg-white"
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

        {/* BOROUGH INTERLINKING */}
        <div className="mt-10">
          <h3 className="text-lg font-extrabold tracking-tight">
            Nearby borough pages
          </h3>

          <p className="mt-2 max-w-3xl text-slate-700">
            Explore our local pages for nearby boroughs. If you are close to the border,
            these pages may be relevant for your project.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {/* Current borough (kept visible, but disabled) */}
            <a
              href={`/areas/${currentSlug}`}
              aria-disabled="true"
              className="rounded-xl border bg-slate-900 p-4 text-white opacity-90"
            >
              <div className="text-[12px] font-extrabold uppercase tracking-[0.14em]">
                Current
              </div>
              <div className="mt-1 text-sm font-semibold">{boroughName}</div>
              <div className="mt-2 text-[12px] opacity-90">
                You are here
              </div>
            </a>

            {nearby
              .filter((b) => b !== boroughName)
              .map((b) => {
                const slug = slugifyBorough(b);
                return (
                  <a
                    key={b}
                    href={`/areas/${slug}`}
                    className="rounded-xl border bg-slate-50 p-4 hover:bg-white"
                  >
                    <div className="text-sm font-semibold text-slate-900">
                      {b}
                    </div>
                    <div className="mt-2 text-[12px] text-blue-600 underline underline-offset-4">
                      View {b} page
                    </div>
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
