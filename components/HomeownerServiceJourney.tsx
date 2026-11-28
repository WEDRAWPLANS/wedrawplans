import Link from "next/link";

/**
 * Shared homeowner journey used by the four primary service landing pages.
 * Cross-links related services naturally without changing canonical URLs.
 * No tracking scripts, third-party assets or form submission logic.
 */
type ServiceKey = "extension" | "loft" | "new-build" | "building";

const services: Array<{
  key: ServiceKey;
  title: string;
  detail: string;
  href: string;
}> = [
  {
    key: "extension",
    title: "House extension drawings",
    detail: "Rear, side-return and two-storey extensions, with planning advice and clear drawing packs.",
    href: "/extension-plans",
  },
  {
    key: "loft",
    title: "Loft conversion plans",
    detail: "Practical dormers, stairs and roof-space layouts for an additional room or bathroom.",
    href: "/loft-conversion-plans",
  },
  {
    key: "new-build",
    title: "New-build house plans",
    detail: "Single houses, side plots and infill sites, from early design to planning drawings.",
    href: "/new-build-plans",
  },
  {
    key: "building",
    title: "Building Regulations drawings",
    detail: "Technical packages for Building Control, builder quotations and structural coordination.",
    href: "/building-regulation-drawings",
  },
];

const relevantProof: Record<ServiceKey, { title: string; href: string }> = {
  extension: {
    title: "See our approved Wandsworth house extension",
    href: "/case-studies/sistova-road-wandsworth-extension-basement",
  },
  loft: {
    title: "See the granted Pendle Road lawful-development certificate",
    href: "/case-studies/pendle-road-wandsworth-max-space-loft-conversion",
  },
  "new-build": {
    title: "Explore our Greenwich residential development experience",
    href: "/case-studies/700-woolwich-road-greenwich-two-new-flats",
  },
  building: {
    title: "See original extension technical drawings from Hoddesdon",
    href: "/case-studies/cranbourne-drive-hoddesdon-planning-project",
  },
};

export default function HomeownerServiceJourney({
  current,
  quoteAnchor,
}: {
  current: ServiceKey;
  quoteAnchor: string;
}) {
  const otherServices = services.filter((service) => service.key !== current);
  const proof = relevantProof[current];

  return (
    <section aria-labelledby="wdp-other-drawings-heading" className="border-b border-[#dbe8ed] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6 lg:py-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087e95]">
              Your home improvement, one clear route
            </p>
            <h2 id="wdp-other-drawings-heading" className="mt-2 text-2xl font-extrabold tracking-tight text-[#173c4c] sm:text-3xl">
              Know what you want to build? We can help with the drawings.
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Choose the relevant drawing service below, or send your postcode to get help deciding.
              No existing drawings or photographs are needed for an initial enquiry.
            </p>
          </div>
          <a
            href={quoteAnchor}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#087e95] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#056779] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087e95]"
          >
            Get my fixed-fee quote
          </a>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {otherServices.map((service) => (
            <Link
              key={service.key}
              href={service.href}
              className="group rounded-2xl border border-[#d8e6ea] bg-[#f8fbfc] p-5 transition hover:border-[#087e95] hover:bg-[#eff8fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087e95]"
            >
              <h3 className="text-base font-bold text-[#173c4c] group-hover:text-[#087e95]">
                {service.title} <span aria-hidden="true">→</span>
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.detail}</p>
            </Link>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-100 pt-4 text-sm">
          <span className="font-semibold text-slate-700">See our real project experience:</span>
          <Link href={proof.href} className="font-bold text-[#087e95] underline underline-offset-4 hover:text-[#056779]">
            {proof.title}
          </Link>
        </div>
      </div>
    </section>
  );
}
