import Image from "next/image";
import Link from "next/link";

/**
 * Two planning-approved London house extensions displayed between the
 * Broxbourne/Elstree showcases and the approved Sutton loft example.
 * Original full-sheet images remain uncropped. No Building Control approval
 * or construction-completion claim is made.
 */
const PROJECTS = [
  {
    id: "home-approved-sistova",
    councilLabel: "Wandsworth planning permission · 15 October 2026",
    name: "Sistova Road, Wandsworth",
    title: "Approved side and rear extension with basement lightwell",
    description:
      "A coordinated planning package for a single-storey side/rear extension, a larger basement and rear lightwell. See the existing and proposed 3D views, planning drawings, fire-safety statement and the council's decision.",
    href: "/case-studies/sistova-road-wandsworth-extension-basement",
    image: "/images/case-studies/sistova-road-wandsworth-extension-basement/01-before-after-3d-design-views.webp",
    alt: "Full WEDRAWPLANS original presentation sheet comparing existing and proposed architectural 3D designs for the planning-approved Sistova Road side and rear extension",
    areaHref: "/areas/wandsworth",
    areaLabel: "Drawings in Wandsworth",
  },
  {
    id: "home-approved-cromwell",
    councilLabel: "Hounslow planning permission · 1 October 2026",
    name: "Cromwell Road, Hounslow",
    title: "Approved rear and side-return extension to create more living space",
    description:
      "Hounslow approved the single-storey rear and side-return infill extension with a rooflight and glazed doors. Explore original before-and-after design views, the proposed plans and the planning decision.",
    href: "/case-studies/cromwell-road-hounslow-rear-extension",
    image: "/images/case-studies/cromwell-road-hounslow-rear-extension/01-before-after-3d-design-views.webp",
    alt: "Full WEDRAWPLANS original architectural 3D design comparison sheet for the planning-approved Cromwell Road Hounslow rear extension",
    areaHref: "/areas/hounslow",
    areaLabel: "Drawings in Hounslow",
  },
] as const;

export default function HomeFeaturedResidentialApprovals() {
  return (
    <>
      {PROJECTS.map((project, index) => (
        <section
          key={project.id}
          id={project.id}
          aria-labelledby={project.id + "-title"}
          className={"border-b border-[#dce8e1] py-9 sm:py-12 " + (index === 0 ? "bg-white" : "bg-[#f4faf7]")}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 md:grid-cols-[minmax(0,1.06fr)_minmax(0,.94fr)] lg:px-6">
            <Link
              href={project.href}
              aria-label={"View the approved architectural planning drawings for " + project.name}
              className="block min-w-0 overflow-hidden rounded-[18px] border border-[#d2e1da] bg-white shadow-[0_12px_32px_rgba(31,75,68,0.08)]"
            >
              <div className="relative aspect-[16/11] w-full bg-[#f7faf9]">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 52vw"
                  className="pointer-events-none object-contain"
                  draggable={false}
                />
              </div>
              <div className="border-t border-[#e2e9e5] px-4 py-2.5 text-[11px] font-semibold text-[#477176]">
                Original WEDRAWPLANS architectural design sheet · View full case study
              </div>
            </Link>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#27745c]">{project.councilLabel}</p>
              <p className="mt-2 text-[12px] font-semibold text-[#487076]">{project.name}</p>
              <h2 id={project.id + "-title"} className="mt-2 text-[23px] font-semibold leading-tight text-[#254b4f] sm:text-[29px]">
                {project.title}
              </h2>
              <p className="mt-3 text-[13px] leading-7 text-[#587377]">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={project.href}
                  className="inline-flex min-h-11 items-center rounded-full bg-[#246e74] px-5 py-3 text-[12px] font-bold text-white transition hover:bg-[#18575e]"
                >
                  View approved project &amp; drawings
                </Link>
                <Link
                  href={project.areaHref}
                  className="inline-flex min-h-11 items-center rounded-full border border-[#b0cec5] bg-white px-5 py-3 text-[12px] font-semibold text-[#286b70]"
                >
                  {project.areaLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
