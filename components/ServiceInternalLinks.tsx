import React from "react";
import Link from "next/link";
import { caseStudies } from "../data/caseStudies";

const CANONICAL_BOROUGH_SLUGS: Record<string, string> = {
  "Kingston upon Thames": "kingston",
  "Richmond upon Thames": "richmond",
};

function slugifyBorough(name: string) {
  if (CANONICAL_BOROUGH_SLUGS[name]) return CANONICAL_BOROUGH_SLUGS[name];
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
"Waltham Forest": {
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
        className="rounded-xl border border-[#e5cbc7] bg-[#fff0ed] p-4 text-[#613e3b]"
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

const BOROUGH_APPROVED_CASES: Record<string, string[]> = {
  Barnet: ["sunbury-avenue-mill-hill-side-rear-extension", "the-reddings-mill-hill-extension-basement-loft", "the-hyde-colindale-major-residential-development", "reddings-close-mill-hill-lawful-loft"],
  Wandsworth: ["sistova-road-wandsworth-extension-basement"],
  Hounslow: ["cromwell-road-hounslow-rear-extension"],
  Hertfordshire: ["allum-lane-elstree-major-house-extension", "cranbourne-drive-hoddesdon-planning-project"],
  Greenwich: ["700-woolwich-road-greenwich-two-new-flats", "alnwick-road-eltham-lawful-loft"],
  Lewisham: ["brockley-road-lewisham-two-flat-conversion"],
  Harrow: ["burnt-oak-broadway-harrow-retail-flats"],
  "Hammersmith and Fulham": ["warbeck-road-hammersmith-fulham-loft-certificate"],
  "Hammersmith & Fulham": ["warbeck-road-hammersmith-fulham-loft-certificate"],
  Lambeth: ["electric-avenue-brixton-shopfront"],
  "Tower Hamlets": ["mile-end-road-listed-building-heritage"],
  "Waltham Forest": ["hall-lane-chingford-dropped-kerb"],
};

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
  const currentHref = boroughName === "London" ? "/areas" : `/areas/${currentSlug}`;
  const localCases = (BOROUGH_APPROVED_CASES[boroughName] || [])
    .map((slug) => caseStudies.find((item) => item.slug === slug))
    .filter((item): item is (typeof caseStudies)[number] => Boolean(item));

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-extrabold tracking-tight">
          Popular services in {boroughName}
        </h2>

        <p className="mt-3 max-w-3xl text-slate-700">
          We provide planning and technical drawing services for extensions, loft conversions,
          garden rooms, outbuildings, solar panels and new build developments. Each service page explains
          what is included, how approvals work, and how to get a fixed quote.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              href: "/planning-drawings",
              title: "Planning Drawings",
              body: `Council-ready planning application drawings for extensions, lofts, conversions and residential projects in ${boroughName}.`,
              cta: "View Planning Drawings",
            },
            {
              href: "/lawful-development-certificate-drawings",
              title: "Permitted Development / LDC",
              body: `Existing and proposed drawings for Lawful Development Certificate and permitted development applications in ${boroughName}.`,
              cta: "View LDC Drawings",
            },
            {
              href: "/garden-room-outbuilding-plans",
              title: "Garden Room & Outbuilding Plans",
              body: `Planning, permitted development and LDC drawings for garden rooms, studios, offices, gyms and outbuildings in ${boroughName}.`,
              cta: "View Garden / Outbuilding Plans",
            },
            {
              href: "/solar-panel-planning-drawings",
              title: "Solar Panel Planning Drawings",
              body: `Roof plans, elevations and planning drawings for rooftop solar and PV installations in ${boroughName}.`,
              cta: "View Solar Planning Drawings",
            },
            {
              href: "/extension-plans",
              title: "Extension Plans",
              body: "Planning drawings and Building Regulations packages for rear, side return, wraparound and two-storey house extensions.",
              cta: "View Extension Plans",
            },
            {
              href: "/loft-conversion-plans",
              title: "Loft Conversion Plans",
              body: "Dormer, mansard, hip-to-gable and rooflight loft designs with planning and technical drawing support.",
              cta: "View Loft Plans",
            },
            {
              href: "/building-regulation-drawings",
              title: "Building Regulation Drawings",
              body: "Technical drawings, construction details and structural coordination for Building Control and construction.",
              cta: "View Building Regulations",
            },
            {
              href: "/new-build-plans",
              title: "New Build Plans",
              body: "New build planning drawings with structural engineering coordination and town planning support.",
              cta: "View New Build Plans",
            },
            {
              href: "/case-studies",
              title: "Planning Approvals & Case Studies",
              body: "See selected WEDRAWPLANS approvals and project evidence across extensions, lofts, conversions, heritage, mixed-use and specialist homeowner projects.",
              cta: "View Approved Projects",
            },
          ].map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="rounded-2xl border bg-slate-50 p-6 transition hover:bg-white"
            >
              <div className="text-sm font-extrabold">{service.title}</div>
              <div className="mt-2 text-sm text-slate-700">{service.body}</div>
              <div className="mt-4 text-sm font-semibold text-blue-600 underline underline-offset-4">
                {service.cta}
              </div>
            </a>
          ))}
        </div>

        {localCases.length ? (
          <div className="mt-10 border-t border-[#e3e9e6] pt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#ad6961]">Selected WEDRAWPLANS projects</p>
            <h3 className="mt-2 text-xl font-semibold text-[#203f43]">Planning approvals relevant to {boroughName}</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
              These approved projects illustrate the type of drawings, design coordination and planning applications we undertake.
              Compare the proposals and see what may be appropriate for your property.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {localCases.map((item) => (
                <Link key={item.slug} href={"/case-studies/" + item.slug} className="block rounded-2xl border border-[#dce5e0] bg-[#f7faf8] p-5 hover:border-[#9dbfc3]">
                  <span className="text-[11px] font-semibold text-[#a36a62]">{item.outcome}</span>
                  <span className="mt-2 block text-[15px] font-semibold text-[#294448]">{item.shortTitle}</span>
                  <span className="mt-2 block text-[12px] leading-6 text-[#617479]">{item.service}</span>
                  <span className="mt-3 block text-[12px] font-semibold text-[#26747c]">View the approved project →</span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-[#e1e7e3] bg-[#f8faf8] p-6">
            <h3 className="text-lg font-semibold text-[#253f42]">Planning approvals and drawings across London</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Explore selected WEDRAWPLANS planning decisions for extensions, loft conversions and residential projects in other London boroughs.
            </p>
            <Link href="/case-studies" className="mt-3 inline-flex text-sm font-semibold text-[#287680] underline-offset-4 hover:underline">Explore approved project examples →</Link>
          </div>
        )}

        <div className="mt-10">
          <h3 className="text-lg font-extrabold tracking-tight">Nearby borough pages</h3>

          <p className="mt-2 max-w-3xl text-slate-700">
            These are the boroughs that directly border {boroughName}. If your property is
            close to the boundary, these local pages may also be relevant for your project.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            <a
              href={currentHref}
              aria-disabled="true"
              className="rounded-xl border border-[#e5cbc7] bg-[#fff0ed] p-4 text-[#613e3b]"
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
