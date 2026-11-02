import Link from "next/link";
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

export default function CaseStudyGalleryQuote({ projects, context }: Props) {
  const project = projects[0];
  if (!project) return null;
  const isHub = context === "hub";
  return (
    <section id="project-drawings" aria-labelledby="project-gallery-heading" className="border-y border-[#e3e9e6] bg-[#f4f8f7]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#a36a63]">WEDRAWPLANS architectural drawings</p>
            <h2 id="project-gallery-heading" className="mt-2 text-2xl font-semibold tracking-tight text-[#284549] sm:text-3xl">
              {isHub ? "Explore our approved planning projects" : "Project drawings & design"}
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
            {!isHub && project.slug === "the-reddings-mill-hill-extension-basement-loft" ? (
              <div className="mb-5 overflow-hidden rounded-2xl border border-[#dce7e4] bg-white">
                <video controls playsInline preload="metadata" poster="/images/video-main-poster.jpg" className="aspect-video w-full object-contain bg-[#17252b]" aria-label="The Reddings original architectural design animation"><source src="/videos/barnet-planning-project.mp4" type="video/mp4" /></video>
                <div className="px-4 py-3 text-xs font-semibold text-[#517077]">Original WEDRAWPLANS architectural animation · The Reddings, Mill Hill</div>
              </div>
            ) : null}
            <ProjectMediaSlider projects={projects} mode={context} />
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
          <div className="lg:sticky lg:top-4 lg:self-start"><ProjectQuickQuotePanel source={isHub ? "case-studies-hub" : "case-study-gallery"} projectSlug={isHub ? "" : project.slug} projectTitle={isHub ? "" : project.shortTitle} suggestedService={isHub ? "" : serviceFor(project)} /></div>
        </div>
      </div>
    </section>
  );
}
