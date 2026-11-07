import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "../data/caseStudies";

type ProjectKind = "sistova" | "cromwell";

function SistovaFaintWatermark({ small = false }: { small?: boolean }) {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      <span className={"-rotate-[24deg] whitespace-nowrap font-extrabold tracking-[.10em] text-slate-500/5 " + (small ? "text-[9px]" : "text-[clamp(24px,5vw,67px)]")}>WEDRAWPLANS</span>
    </span>
  );
}

const PROJECTS: Record<ProjectKind, {
  eyebrow: string;
  heading: string;
  visualIntro: string;
  drawingIntro: string;
  methodHeading: string;
  method: { title: string; body: string }[];
  outcome: string;
  planning: string;
  localLink: string;
  localText: string;
}> = {
  sistova: {
    eyebrow: "Wandsworth · Approved house extension and basement",
    heading: "A coordinated design for a side and rear extension",
    visualIntro: "Compare the original building and the approved proposal through WEDRAWPLANS' own existing-and-proposed 3D architectural views. These are design drawings, not construction photographs.",
    drawingIntro: "Only four selected WEDRAWPLANS drawing sheets are displayed: existing and proposed 3D views, proposed floor and roof plans, proposed elevations and a proposed section. Each original sheet retains its full drawing border and title block, with one extremely faint diagonal grey WEDRAWPLANS watermark.",
    methodHeading: "How the Wandsworth proposal was developed",
    method: [
      { title: "1 · Working with the existing house", body: "Existing floor and roof plans, elevations and 3D views establish the original building, its side passage and its relationship with neighbouring properties." },
      { title: "2 · Coordinating the new accommodation", body: "The planning drawings illustrate the single-storey side/rear additions, basement enlargement and rear lightwell together with access, rooflights and adjoining boundaries." },
      { title: "3 · Securing the planning outcome", body: "WEDRAWPLANS prepared revised architectural information and a planning-stage fire-safety statement. The Wandsworth decision records approved drawings and conditions concerning exterior finishes and privacy glazing." },
    ],
    outcome: "Planning permission granted · 15 October 2026",
    planning: "London Borough of Wandsworth · 2026/1748",
    localLink: "/areas/wandsworth",
    localText: "Architectural drawing services in Wandsworth",
  },
  cromwell: {
    eyebrow: "Hounslow · Approved side-return and rear infill",
    heading: "Turning an underused side return into better living space",
    visualIntro: "See WEDRAWPLANS' existing-and-proposed architectural 3D illustrations showing the relationship between the original building and the approved rear addition. These are design illustrations rather than photographs of completed construction.",
    drawingIntro: "Five complete original architectural sheets present the existing and proposed layouts, rooflight, rear glazing, elevations and detailed sections. They are displayed with the original drawing borders and WEDRAWPLANS title blocks intact.",
    methodHeading: "How the Hounslow proposal was presented",
    method: [
      { title: "1 · Understanding the existing building", body: "Architectural views and existing elevations document the original rear projection and the side-return space alongside the house." },
      { title: "2 · Developing the rear infill", body: "The proposed drawings describe a single-storey side-return/rear extension with a rooflight and glazed rear doors, designed to improve kitchen and living accommodation while retaining a side passage." },
      { title: "3 · Preparing a coordinated application", body: "The submitted architectural package combined floor plans, elevations, sections and 3D design views with planning-stage fire-safety information. Hounslow's permission was issued subject to the relevant approved drawings and conditions." },
    ],
    outcome: "Planning permission granted · 1 October 2026",
    planning: "London Borough of Hounslow · P/2026/2306",
    localLink: "/areas/hounslow",
    localText: "Architectural drawing services in Hounslow",
  },
};

export default function ApprovedDrawingShowcase({
  project,
  kind,
}: {
  project: CaseStudy;
  kind: ProjectKind;
}) {
  const [drawingIndex, setDrawingIndex] = useState(kind === "sistova" ? 0 : 1);
  const content = PROJECTS[kind];
  const drawings = project.galleryImages || [];
  const leadDrawing = drawings[0];
  const selected = drawings[Math.min(drawingIndex, drawings.length - 1)];
  const changeDrawing = (delta: number) =>
    setDrawingIndex((current) => (current + delta + drawings.length) % drawings.length);

  return (
    <div className="space-y-8 select-none sm:space-y-9" onContextMenu={(event) => event.preventDefault()} onDragStart={(event) => event.preventDefault()}>
      <section aria-label="Existing and proposed architectural design" className="overflow-hidden rounded-[19px] border border-[#d9e6df] bg-white shadow-[0_14px_40px_rgba(24,64,68,.055)]">
        <div className="border-b border-[#e0eae5] bg-[#eff7f2] px-4 py-5 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#a9695f]">{content.eyebrow}</p>
          <h3 className="mt-2 text-[22px] font-semibold leading-snug text-[#24494c] sm:text-[27px]">{content.heading}</h3>
          <p className="mt-2 text-[12px] leading-6 text-[#597276] sm:text-[13px]">{content.visualIntro}</p>
        </div>
        {leadDrawing ? (
          <figure>
            <div className="relative mx-auto aspect-[1.414/1] w-full bg-[#f7f9f6]">
              <Image
                src={leadDrawing.src}
                alt={leadDrawing.alt}
                fill
                priority
                sizes="(max-width: 1024px) 96vw, 62vw"
                className="pointer-events-none object-contain"
                draggable={false}
              />
              {kind === "sistova" ? <SistovaFaintWatermark /> : null}
            </div>
            <figcaption className="flex flex-wrap justify-between gap-2 border-t border-[#e5ece8] px-4 py-3 text-[11px] font-semibold leading-5 text-[#43666b] sm:px-6 sm:text-[12px]">
              <span>Existing &amp; proposed 3D architectural drawings</span>
              <span>Original WEDRAWPLANS presentation</span>
            </figcaption>
          </figure>
        ) : null}
      </section>

      <section aria-labelledby="approved-drawing-gallery" className="overflow-hidden rounded-[19px] border border-[#d9e6df] bg-white shadow-[0_14px_40px_rgba(24,64,68,.055)]">
        <div className="border-b border-[#dfe9e3] bg-[#edf5f1] px-4 py-5 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#a66b62]">WEDRAWPLANS · Original approved project drawings</p>
          <h3 id="approved-drawing-gallery" className="mt-1.5 text-[24px] font-semibold text-[#23474b] sm:text-[29px]">Real Drawing Examples</h3>
          <p className="mt-2 text-[12px] leading-6 text-[#5d7478] sm:text-[13px]">{content.drawingIntro}</p>
        </div>
        {selected ? (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 pb-2 pt-4 sm:px-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#8a7470]">Drawing {drawingIndex + 1} of {drawings.length}</p>
                <h4 className="mt-1 text-[14px] font-semibold leading-5 text-[#284f52] sm:text-[16px]">{selected.caption}</h4>
              </div>
              <div className="flex shrink-0 gap-2">
                <button type="button" aria-label="Previous drawing" onClick={() => changeDrawing(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bdd5ce] bg-white text-[#245b60] hover:bg-[#eff7f3] focus-visible:ring-2 focus-visible:ring-[#2e9eaa]">‹</button>
                <button type="button" aria-label="Next drawing" onClick={() => changeDrawing(1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bdd5ce] bg-white text-[#245b60] hover:bg-[#eff7f3] focus-visible:ring-2 focus-visible:ring-[#2e9eaa]">›</button>
              </div>
            </div>
            <figure className="mx-3 mb-4 rounded-[12px] border border-[#dce7e2] bg-[#f7f8f6] p-2 sm:mx-5 sm:p-4">
              <div className="relative mx-auto h-[320px] w-full sm:h-[440px] lg:h-[485px]">
                <Image
                  key={selected.src}
                  src={selected.src}
                  alt={selected.alt}
                  fill
                  sizes="(max-width: 1024px) 96vw, 62vw"
                  className="pointer-events-none object-contain"
                  draggable={false}
                />
                {kind === "sistova" ? <SistovaFaintWatermark /> : null}
              </div>
            </figure>
            <div className="border-t border-[#e5ece8] px-3 py-4 sm:px-5">
              <p className="mb-3 text-[11px] font-semibold text-[#426468]">Explore the original architectural drawings:</p>
              <div className="flex snap-x snap-mandatory gap-2.5 overflow-x-auto pb-2" aria-label="Select architectural drawing">
                {drawings.map((drawing, i) => (
                  <button
                    key={drawing.src}
                    type="button"
                    onClick={() => setDrawingIndex(i)}
                    aria-label={"View Drawing " + (i + 1) + ": " + drawing.caption}
                    aria-current={drawingIndex === i ? "true" : undefined}
                    className={"w-[102px] shrink-0 snap-start rounded-xl border p-1.5 transition sm:w-[117px] " + (drawingIndex === i ? "border-[#3e9d9c] bg-[#e9f5f1]" : "border-[#dfebe6] bg-white hover:border-[#9bc6bc]")}
                  >
                    <div className="relative h-[82px] rounded-md bg-[#f3f5f3] sm:h-[92px]">
                      <Image src={drawing.src} alt="" fill sizes="117px" className="pointer-events-none object-contain" draggable={false} />
                      {kind === "sistova" ? <SistovaFaintWatermark small /> : null}
                    </div>
                    <span className="mt-1.5 block text-center text-[10px] font-bold text-[#41656a]">Drawing {i + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : null}
        <div className="border-t border-[#d9e8e1] bg-[#f1f8f3] px-4 py-5 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#28674f]">{content.outcome}</p>
          <p className="mt-2 text-[12px] font-semibold leading-6 text-[#345f5b]">{content.planning}</p>
          <p className="mt-2 text-[12px] leading-6 text-[#4b6b67]">This portfolio displays WEDRAWPLANS' original design drawings. Planning permission relates to the recorded application and approved documents, not to any separate Building Regulations approval.</p>
        </div>
      </section>

      <section aria-labelledby="approval-project-story" className="rounded-[17px] border border-[#dce7e2] bg-white p-5 shadow-[0_10px_28px_rgba(22,68,70,.045)] sm:p-6">
        <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#a76d63]">From survey and design to planning decision</p>
        <h3 id="approval-project-story" className="mt-2 text-[21px] font-semibold leading-tight text-[#294b50] sm:text-[24px]">{content.methodHeading}</h3>
        <div className="mt-5 space-y-4">
          {content.method.map((stage) => (
            <div key={stage.title} className="border-l-[3px] border-[#94c8b9] pl-4">
              <h4 className="text-[13px] font-bold text-[#315e61]">{stage.title}</h4>
              <p className="mt-1 text-[12px] leading-6 text-[#587378] sm:text-[13px]">{stage.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link href="#case-study-quote" className="rounded-full bg-[#246d76] px-5 py-3 text-center text-[12px] font-bold text-white hover:bg-[#195860]">Get your fixed-fee drawing quote →</Link>
          <Link href={content.localLink} className="text-[12px] font-semibold text-[#25737b] underline underline-offset-4">{content.localText}</Link>
        </div>
      </section>
    </div>
  );
}
