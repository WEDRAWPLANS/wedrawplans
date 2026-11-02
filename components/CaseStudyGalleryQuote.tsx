import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { CaseStudy } from "../data/caseStudies";
import { categoryForCaseStudy } from "../data/caseStudies";
import ProjectMediaSlider from "./ProjectMediaSlider";
import ProjectQuickQuotePanel from "./ProjectQuickQuotePanel";

type Props = {
  projects: CaseStudy[];
  context: "project" | "hub";
};

function serviceFor(project: CaseStudy): string {
  const category = categoryForCaseStudy(project);
  if (category === "Extensions") return "House extension drawings";
  if (category === "Loft conversions") return "Loft conversion drawings";
  if (category === "Dropped kerbs") return "Dropped kerb plans";
  if (category === "Residential development") return "New build drawings";
  if (category === "Heritage & commercial") return "Planning drawings";
  return "Planning drawings";
}


type ReddingsProject = CaseStudy;

function RealProjectShowcase({ project }: { project: ReddingsProject }) {
  const [selected, setSelected] = useState(0);
  const media = project.galleryImages || [];
  const before = media.find((image) => image.src.endsWith("/before-20261102.jpg") || image.src.endsWith("/before.jpg"));
  const after = media.find((image) => image.src.endsWith("/after.jpg"));
  const visuals = media.filter((image) => /\/3d-[^/]+\.(jpg|jpeg|webp|png)$/i.test(image.src));
  const drawings = media.filter((image) => /\/drawing-\d+\.(jpg|jpeg|webp|png)$/i.test(image.src));
  const chosen = drawings[Math.min(selected, drawings.length - 1)];
  const photoPair = [
    { image: before, label: "BEFORE", title: "The original house", note: "Existing property before the works" },
    { image: after, label: "AFTER", title: "The completed transformation", note: "Enhanced presentation photograph of the completed project" },
  ];

  return (
    <div className="space-y-9 select-none" onContextMenu={(event) => event.preventDefault()} onDragStart={(event) => event.preventDefault()}>
      <section aria-labelledby="real-project-before-after">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.19em] text-[#aa6b61]">The transformation · real project</p>
            <h3 id="real-project-before-after" className="mt-1.5 text-[22px] font-semibold tracking-tight text-[#26474b] sm:text-[27px]">Before &amp; after</h3>
          </div>
          <span className="rounded-full border border-[#bcd6ce] bg-[#ecf5f0] px-3 py-1 text-[11px] font-bold text-[#276752]">Completed project</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
          {photoPair.map(({ image, label, title, note }) => (
            <figure key={label} className="overflow-hidden rounded-[15px] border border-[#dbe5e1] bg-white shadow-[0_12px_35px_rgba(25,65,69,.065)]">
              <div className="flex items-center justify-between gap-2 border-b border-[#e9eeeb] px-3 py-2.5 sm:px-4">
                <span className={"rounded-md px-2 py-1 text-[10px] font-extrabold tracking-[.13em] " + (label === "AFTER" ? "bg-[#d7efe5] text-[#21644d]" : "bg-[#e9eeee] text-[#45666b]")}>{label}</span>
                <span className="hidden text-[10px] font-semibold text-[#718486] sm:block">MILL HILL · NW7</span>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-[#eaf0ee]">
                {image ? <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 48vw, (max-width: 1024px) 46vw, 30vw" className="pointer-events-none object-cover" draggable={false} priority={label === "AFTER"} /> : null}
              </div>
              <figcaption className="min-h-[83px] px-3 py-3 sm:min-h-[89px] sm:px-4">
                <strong className="block text-[12px] leading-5 text-[#294a4e] sm:text-[15px]">{title}</strong>
                <span className="mt-1 block text-[10px] leading-4 text-[#718286] sm:text-[12px] sm:leading-5">{note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section aria-labelledby="real-drawing-examples" className="overflow-hidden rounded-[19px] border border-[#d7e5df] bg-white shadow-[0_14px_40px_rgba(24,64,68,.055)]">
        <header className="border-b border-[#e1eae6] bg-[#edf5f1] px-4 py-5 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#a56b62]">The real architectural drawing package</p>
          <h3 id="real-drawing-examples" className="mt-1.5 text-[24px] font-semibold leading-tight tracking-tight text-[#23484b] sm:text-[29px]">Real Drawing Examples</h3>
          <p className="mt-2 max-w-[550px] text-[12px] leading-6 text-[#526d70] sm:text-[13px]">Explore all 12 genuine WEDRAWPLANS presentation sheets. The full drawing sheet and its original border are shown together, exactly as a professional portfolio should present them.</p>
        </header>
        {chosen ? (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 pb-2 pt-4 sm:px-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#8b7772]">Original drawing sheet {Math.min(selected, drawings.length - 1) + 1} of {drawings.length}</p>
                <h4 className="mt-1 text-[14px] font-semibold leading-5 text-[#25494e] sm:text-[16px]">{chosen.caption.replace(/^Architectural drawing \d+\s*[—–-]\s*/, "")}</h4>
              </div>
              <div className="flex shrink-0 gap-2">
                <button type="button" aria-label="Previous drawing sheet" onClick={() => setSelected((n) => (n + drawings.length - 1) % drawings.length)} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#bdd5ce] bg-white text-[#245b60] transition hover:bg-[#eff7f3] focus-visible:ring-2 focus-visible:ring-[#2e9eaa]">‹</button>
                <button type="button" aria-label="Next drawing sheet" onClick={() => setSelected((n) => (n + 1) % drawings.length)} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#bdd5ce] bg-white text-[#245b60] transition hover:bg-[#eff7f3] focus-visible:ring-2 focus-visible:ring-[#2e9eaa]">›</button>
              </div>
            </div>
            <figure className="mx-3 mb-4 rounded-[12px] border border-[#dce7e2] bg-[#f5f7f5] p-2 sm:mx-5 sm:p-4">
              <div className="relative mx-auto h-[320px] w-full sm:h-[440px] lg:h-[485px]">
                <Image key={chosen.src} src={chosen.src} alt={chosen.alt + " — complete architectural presentation sheet"} fill sizes="(max-width: 1024px) 96vw, 62vw" className="pointer-events-none object-contain" draggable={false} />
              </div>
              <figcaption className="mt-2 border-t border-[#e2e7e3] pt-2 text-center text-[10px] font-medium text-[#617579] sm:text-[11px]">Complete original sheet · full border preserved · no cropped drawings</figcaption>
            </figure>
            <div className="border-t border-[#e5ece8] px-3 py-4 sm:px-5">
              <p className="mb-3 text-[11px] font-semibold text-[#426468]">Select a sheet to see the complete drawing:</p>
              <div className="flex snap-x snap-mandatory gap-2.5 overflow-x-auto pb-2" aria-label="Select drawing sheet">
                {drawings.map((drawing, index) => (
                  <button key={drawing.src} type="button" onClick={() => setSelected(index)} aria-current={selected === index ? "true" : undefined} aria-label={"Show drawing " + (index + 1) + ": " + drawing.alt} className={"w-[102px] shrink-0 snap-start rounded-xl border p-1.5 text-left transition focus-visible:ring-2 focus-visible:ring-[#2a97a3] sm:w-[117px] " + (selected === index ? "border-[#3e9d9c] bg-[#e9f5f1] shadow-[0_3px_12px_rgba(26,91,86,.12)]" : "border-[#dfebe6] bg-white hover:border-[#9bc6bc]")}>
                    <div className="relative h-[82px] rounded-md bg-[#f3f5f3] sm:h-[92px]">
                      <Image src={drawing.src} alt="" fill sizes="117px" className="pointer-events-none object-contain" draggable={false} />
                    </div>
                    <span className="mt-1.5 block text-center text-[10px] font-bold text-[#41656a]">Sheet {String(index + 1).padStart(2, "0")}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : null}
        <div className="border-t border-[#d9e8e1] bg-[#f1f8f3] px-4 py-3 text-[11px] font-semibold leading-5 text-[#28634d] sm:px-6">✓ Planning permission and lawful-development certificate secured · Barnet 18/7533/HSE &amp; 18/4693/192</div>
      </section>

      {visuals.length > 0 ? (
        <section aria-labelledby="design-visuals-heading">
          <div className="mb-4">
            <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#a56b62]">From drawings to visual design</p>
            <h3 id="design-visuals-heading" className="mt-1 text-[22px] font-semibold text-[#26474b] sm:text-[27px]">Original 3D Design Visuals</h3>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            {visuals.map((visual, index) => (
              <figure key={visual.src} className="overflow-hidden rounded-[15px] border border-[#dce7e3] bg-white shadow-[0_10px_28px_rgba(26,67,71,.055)]">
                <div className="relative aspect-[4/3] bg-[#e9eeeb]">
                  <Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 640px) 48vw, (max-width: 1024px) 46vw, 30vw" className="pointer-events-none object-contain" draggable={false} />
                </div>
                <figcaption className="px-3 py-3 text-[11px] font-semibold leading-5 text-[#42666c] sm:px-4 sm:text-[13px]">{index === 0 ? "3D design · Rear elevation & terrace" : "3D design · Roof & garden overview"}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <p className="rounded-xl border border-[#dce9e2] bg-[#eff7f3] px-4 py-3 text-[12px] leading-6 text-[#4e7070]">Real project photography, original WEDRAWPLANS 3D design, and an authentic 12-sheet architectural drawing package — presented together as one completed project.</p>
    </div>
  );
}

export default function CaseStudyGalleryQuote({ projects, context }: Props) {
  const project = projects[0];
  if (!project) return null;
  const isHub = context === "hub";
  const isReddings = !isHub && project.slug === "the-reddings-mill-hill-extension-basement-loft";
  return (
    <section id="project-drawings" aria-labelledby="project-gallery-heading" className="border-y border-[#e3e9e6] bg-[#f4f8f7]">
      <div className="mx-auto max-w-7xl px-5 py-8 pb-24 sm:px-8 sm:py-11 lg:pb-12">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#a36a63]">WEDRAWPLANS architectural drawings</p>
            <h2 id="project-gallery-heading" className="mt-2 text-2xl font-semibold tracking-tight text-[#284549] sm:text-3xl">
              {isHub ? "Explore our approved planning projects" : isReddings ? "A real project, from before to after" : "Project drawings & design"}
            </h2>
            <p className="mt-3 max-w-3xl text-[14px] leading-7 text-[#61777b]">
              {isHub
                ? "Browse selected projects and planning outcomes. Request a fixed-fee quote while you explore."
                : "Explore the architectural project presentation and ask us about drawings for your own property."}
            </p>
          </div>
          {isHub ? <Link href="#browse-projects" className="text-[13px] font-semibold text-[#27757e] underline-offset-4 hover:underline">Browse all 24 projects →</Link> : <span className="text-[12px] text-[#667f81]">{project.shortTitle}</span>}
        </div>
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(330px,.7fr)] lg:gap-7">
          <div className="min-w-0">
            {isReddings ? <RealProjectShowcase project={project} /> : <ProjectMediaSlider projects={projects} mode={context} />}
            {!isHub && project.projectVideoUrl && project.slug !== "the-reddings-mill-hill-extension-basement-loft" ? (
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-[15px] border border-[#dce7e4] bg-white px-5 py-4">
                <div>
                  <p className="text-[14px] font-semibold text-[#36595e]">Architectural project video</p>
                  <p className="mt-1 text-[12px] leading-6 text-[#71858a]">View the WEDRAWPLANS project presentation.</p>
                </div>
                <a href={project.projectVideoUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#b7d2d2] px-4 py-2.5 text-[12px] font-semibold text-[#2b777e] hover:bg-[#f0f8f6]">View video ↗</a>
              </div>
            ) : null}
            {!isHub && project.animationSlot && process.env.VERCEL_ENV !== "production" ? (
              <div className="mt-4 rounded-[15px] border border-dashed border-[#b7ceca] bg-white px-5 py-5 text-[13px] text-[#687d7e]">Architectural animation canvas ready for the Allum Lane video.</div>
            ) : null}
            {!isHub && project.constructionSlot && process.env.VERCEL_ENV !== "production" ? (
              <div className="mt-4 rounded-[15px] border border-dashed border-[#b7ceca] bg-white px-5 py-5 text-[13px] text-[#687d7e]">Construction-progress photographs can be added to this project's gallery.</div>
            ) : null}
          </div>
          <div id="case-study-quote" className="scroll-mt-24 lg:sticky lg:top-5 lg:self-start"><ProjectQuickQuotePanel source={isHub ? "case-studies-hub" : "case-study-gallery"} projectSlug={isHub ? "" : project.slug} projectTitle={isHub ? "" : project.shortTitle} suggestedService={isHub ? "" : serviceFor(project)} /></div>
        </div>
      </div>
      {isReddings ? <a href="#case-study-quote" className="fixed inset-x-0 bottom-0 z-40 flex min-h-[60px] items-center justify-center border-t border-[#bcd5d0] bg-[#224b4e] px-5 py-3 text-[14px] font-bold text-white shadow-[0_-10px_30px_rgba(0,0,0,.13)] lg:hidden">Get your fixed-fee drawing quote →</a> : null}
    </section>
  );
}
