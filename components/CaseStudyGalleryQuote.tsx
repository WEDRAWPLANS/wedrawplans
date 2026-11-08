import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { CaseStudy } from "../data/caseStudies";
import { categoryForCaseStudy } from "../data/caseStudies";
import ProjectMediaSlider from "./ProjectMediaSlider";
import ProjectQuickQuotePanel from "./ProjectQuickQuotePanel";
import ApprovedDrawingShowcase from "./ApprovedDrawingShowcase";
import BrockleyCaseStudyShowcase from "./BrockleyCaseStudyShowcase";
import HarrowStudioConversionShowcase from "./HarrowStudioConversionShowcase";
import CannonLaneShowcase from "./CannonLaneShowcase";
import SunburyCareOutbuildingShowcase from "./SunburyCareOutbuildingShowcase";
import GreenwichTenFlatsShowcase from "./GreenwichTenFlatsShowcase";
import HendonHMOShowcase from "./HendonHMOShowcase";

type Props = {
  projects: CaseStudy[];
  context: "project" | "hub";
};

function serviceFor(project: CaseStudy): string {
  // Flat conversions should lead to the actual conversion enquiry category, not new-build drawings.
  if (/hmo|house in multiple occupation/i.test(project.service)) return "HMO plans";
  if (/flat conversion|conversion to.*flats|residential conversion|studio flats|existing-use certificate|ten self-contained residential flats/i.test(project.service)) return "Property conversion drawings";
  if (/garden care|garden studio|garden room|outbuilding/i.test(project.service)) return "Garden room or outbuilding drawings";
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
  const drawings = media.filter((image) => /\/(?:full-sheet|drawing)-\d+\.(jpg|jpeg|webp|png)$/i.test(image.src));
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
          <p className="mt-2 max-w-[550px] text-[12px] leading-6 text-[#526d70] sm:text-[13px]">Explore the original architectural drawings prepared for this approved project, including proposed floor plans, elevations, structural layouts and Building Regulations details.</p>
        </header>
        {chosen ? (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 pb-2 pt-4 sm:px-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#8b7772]">Drawing {Math.min(selected, drawings.length - 1) + 1} of {drawings.length}</p>
                <h4 className="mt-1 text-[14px] font-semibold leading-5 text-[#25494e] sm:text-[16px]">{chosen.caption.replace(/^Architectural drawing \d+\s*[—–-]\s*/, "")}</h4>
              </div>
              <div className="flex shrink-0 gap-2">
                <button type="button" aria-label="Previous drawing" onClick={() => setSelected((n) => (n + drawings.length - 1) % drawings.length)} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#bdd5ce] bg-white text-[#245b60] transition hover:bg-[#eff7f3] focus-visible:ring-2 focus-visible:ring-[#2e9eaa]">‹</button>
                <button type="button" aria-label="Next drawing" onClick={() => setSelected((n) => (n + 1) % drawings.length)} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#bdd5ce] bg-white text-[#245b60] transition hover:bg-[#eff7f3] focus-visible:ring-2 focus-visible:ring-[#2e9eaa]">›</button>
              </div>
            </div>
            <figure className="mx-3 mb-4 rounded-[12px] border border-[#dce7e2] bg-[#f5f7f5] p-2 sm:mx-5 sm:p-4">
              <div className="relative mx-auto h-[320px] w-full sm:h-[440px] lg:h-[485px]">
                <Image key={chosen.src} src={chosen.src} alt={chosen.alt + " — original WEDRAWPLANS architectural drawing"} fill sizes="(max-width: 1024px) 96vw, 62vw" className="pointer-events-none object-contain" draggable={false} />
              </div>
              
            </figure>
            <div className="border-t border-[#e5ece8] px-3 py-4 sm:px-5">
              <p className="mb-3 text-[11px] font-semibold text-[#426468]">Explore the approved architectural drawings:</p>
              <div className="flex snap-x snap-mandatory gap-2.5 overflow-x-auto pb-2" aria-label="Select architectural drawing">
                {drawings.map((drawing, index) => (
                  <button key={drawing.src} type="button" onClick={() => setSelected(index)} aria-current={selected === index ? "true" : undefined} aria-label={"View drawing " + (index + 1) + ": " + drawing.alt} className={"w-[102px] shrink-0 snap-start rounded-xl border p-1.5 text-left transition focus-visible:ring-2 focus-visible:ring-[#2a97a3] sm:w-[117px] " + (selected === index ? "border-[#3e9d9c] bg-[#e9f5f1] shadow-[0_3px_12px_rgba(26,91,86,.12)]" : "border-[#dfebe6] bg-white hover:border-[#9bc6bc]")}>
                    <div className="relative h-[82px] rounded-md bg-[#f3f5f3] sm:h-[92px]">
                      <Image src={drawing.src} alt="" fill sizes="117px" className="pointer-events-none object-contain" draggable={false} />
                    </div>
                    <span className="mt-1.5 block text-center text-[10px] font-bold text-[#41656a]">Drawing {index + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : null}
        <div className="border-t border-[#d9e8e1] bg-[#f1f8f3] px-4 py-5 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#28765b]">Planning approval · London Borough of Barnet</p>
          <p className="mt-2 text-[13px] leading-6 text-[#365d58]">Planning permission was granted in 2019 for part single- and part two-storey front, side and rear extensions, following demolition of the existing garage and creation of a basement level. A separate lawful-development certificate covered the hip-to-gable roof enlargement, rear dormer with Juliette balcony and three front-facing rooflights.</p>
          <p className="mt-2 text-[11px] font-semibold text-[#28705b]">Planning reference: 18/7533/HSE · Lawful-development reference: 18/4693/192</p>
        </div>
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

      <p className="rounded-xl border border-[#dce9e2] bg-[#eff7f3] px-4 py-3 text-[12px] leading-6 text-[#4e7070]">This completed Mill Hill project demonstrates how carefully coordinated planning drawings, detailed architectural design and Building Regulations information can support complex alterations to an existing home. WEDRAWPLANS prepared the drawings for the extensions, basement and loft proposals, with the relevant planning approvals secured through Barnet Council.</p>
    </div>
  );
}


function AllumLaneShowcase({ project, quoteHeight }: { project: CaseStudy; quoteHeight?: number }) {
  const [designIndex, setDesignIndex] = useState(0);
  const [drawingIndex, setDrawingIndex] = useState(0);
  const media = project.galleryImages || [];
  const designs = media.filter((image) => /\/3d-0[123]\.(webp|jpg|jpeg|png)$/i.test(image.src));
  const drawings = media.filter((image) => /\/full-drawing-0[568]\.(webp|jpg|jpeg|png)$/i.test(image.src));
  const featured = designs[Math.min(designIndex, designs.length - 1)];
  const selectedDrawing = drawings[Math.min(drawingIndex, drawings.length - 1)];

  return (
    <div className="space-y-8 select-none" onContextMenu={(event) => event.preventDefault()} onDragStart={(event) => event.preventDefault()}>
      <section aria-labelledby="allum-architectural-visuals" className="overflow-hidden rounded-[20px] border border-[#d9e7e2] bg-white shadow-[0_14px_32px_rgba(22,68,70,.055)]">
        <header className="border-b border-[#e3ebe6] px-4 py-5 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#a56b62]">Original proposed 3D architectural design</p>
          <h3 id="allum-architectural-visuals" className="mt-1 text-[23px] font-semibold text-[#26494d] sm:text-[29px]">Architectural 3D Visuals</h3>
          <p className="mt-2 max-w-[610px] text-[13px] leading-6 text-[#61777b]">Three selected views illustrate the approved architectural design. Select a view to explore.</p>
        </header>
        {featured ? (
          <>
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 pb-2 pt-4 sm:px-6">
              <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#55767a]">3D visual {designIndex + 1} of {designs.length}</p>
              <div className="flex gap-2">
                <button type="button" aria-label="Previous 3D design visual" onClick={() => setDesignIndex((i) => (i + designs.length - 1) % designs.length)} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#bad3cc] bg-white text-[#245b60] hover:bg-[#edf7f2]">‹</button>
                <button type="button" aria-label="Next 3D design visual" onClick={() => setDesignIndex((i) => (i + 1) % designs.length)} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#bad3cc] bg-white text-[#245b60] hover:bg-[#edf7f2]">›</button>
              </div>
            </div>
            <figure className="mx-3 mb-3 overflow-hidden rounded-[13px] border border-[#dce6e2] bg-[#eef2ef] sm:mx-5">
              <div className="relative aspect-[4/3] w-full">
                <Image key={featured.src} src={featured.src} alt={featured.alt} fill sizes="(max-width: 1024px) 96vw, 62vw" className="pointer-events-none object-contain" draggable={false} priority={false} />
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"><span className="-rotate-[24deg] whitespace-nowrap text-[clamp(24px,5vw,67px)] font-extrabold tracking-[.10em] text-slate-500/5">WEDRAWPLANS</span></span>
              </div>
              <figcaption className="border-t border-[#e1e9e4] bg-white px-4 py-3 text-[12px] font-semibold leading-5 text-[#41696e]">{featured.caption.replace(/^3D design \d+\s*[—–-]\s*/, "")}</figcaption>
            </figure>
            <div className="flex gap-2.5 overflow-x-auto px-3 pb-4 pt-1 sm:px-5" aria-label="Choose architectural 3D visual">
              {designs.map((image, i) => (
                <button key={image.src} type="button" onClick={() => setDesignIndex(i)} aria-label={"View 3D design " + (i + 1)} aria-current={i === designIndex ? "true" : undefined} className={"w-[112px] shrink-0 rounded-lg border p-1.5 transition sm:w-[130px] " + (i === designIndex ? "border-[#399699] bg-[#e9f5f1]" : "border-[#dce7e2] bg-white hover:border-[#9cc6bf]")}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#eff3f1]">
                    <Image src={image.src} alt="" fill sizes="130px" className="pointer-events-none object-contain" draggable={false} />
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"><span className="-rotate-[24deg] text-[10px] font-bold tracking-wide text-slate-500/5">WEDRAWPLANS</span></span>
                  </div>
                  <span className="mt-1.5 block text-[10px] font-bold text-[#426970]">3D View {i + 1}</span>
                </button>
              ))}
            </div>
          </>
        ) : null}
      </section>

      <section aria-labelledby="allum-full-architectural-drawings" className="overflow-hidden rounded-[20px] border border-[#d9e7e2] bg-white shadow-[0_14px_32px_rgba(22,68,70,.055)]">
        <header className="border-b border-[#dfe9e3] bg-[#edf6f1] px-4 py-5 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#ab6a60]">Genuine WEDRAWPLANS approved project documents</p>
          <h3 id="allum-full-architectural-drawings" className="mt-1.5 text-[24px] font-semibold text-[#23474b] sm:text-[29px]">Real Drawing Examples</h3>
          <p className="mt-2 max-w-[640px] text-[13px] leading-6 text-[#567278]">Explore selected approved architectural drawings: Drawings 5, 6 and 8 only. Each drawing is displayed in full with a discreet grey WEDRAWPLANS watermark.</p>
        </header>
        {selectedDrawing ? (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 pb-2 pt-4 sm:px-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#86766f]">Drawing {[5, 6, 8][drawingIndex]} · {drawingIndex + 1} of {drawings.length}</p>
                <h4 className="mt-1 text-[14px] font-semibold leading-5 text-[#2b5154] sm:text-[16px]">{selectedDrawing.caption.replace(/^Drawing \d+\s*[—–-]\s*/, "")}</h4>
              </div>
              <div className="flex shrink-0 gap-2">
                <button type="button" aria-label="Previous drawing" onClick={() => setDrawingIndex((i) => (i + drawings.length - 1) % drawings.length)} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#bdd6ce] bg-white text-[#245d63] hover:bg-[#eff7f3]">‹</button>
                <button type="button" aria-label="Next drawing" onClick={() => setDrawingIndex((i) => (i + 1) % drawings.length)} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#bdd6ce] bg-white text-[#245d63] hover:bg-[#eff7f3]">›</button>
              </div>
            </div>
            <figure className="mx-3 mb-4 rounded-[12px] border border-[#e0e8e3] bg-[#f7f8f6] p-2 sm:mx-5 sm:p-4">
              <div className="relative mx-auto h-[320px] w-full sm:h-[440px] lg:h-[485px]">
                <Image key={selectedDrawing.src} src={selectedDrawing.src} alt={selectedDrawing.alt} fill sizes="(max-width: 1024px) 96vw, 62vw" className="pointer-events-none object-contain" draggable={false} />
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"><span className="-rotate-[24deg] whitespace-nowrap text-[clamp(24px,5vw,67px)] font-extrabold tracking-[.10em] text-slate-500/5">WEDRAWPLANS</span></span>
              </div>
            </figure>
            <div className="border-t border-[#e6ece7] px-3 py-4 sm:px-5">
              <p className="mb-3 text-[11px] font-semibold text-[#476a6e]">Explore the architectural drawing package:</p>
              <div className="flex gap-2.5 overflow-x-auto pb-2" aria-label="Select architectural drawing">
                {drawings.map((image, i) => (
                  <button key={image.src} type="button" onClick={() => setDrawingIndex(i)} aria-label={"View drawing " + (i + 1) + ": " + image.alt} aria-current={i === drawingIndex ? "true" : undefined} className={"w-[102px] shrink-0 rounded-xl border p-1.5 transition sm:w-[117px] " + (i === drawingIndex ? "border-[#379b9a] bg-[#eaf5f0]" : "border-[#dce8e2] bg-white hover:border-[#a1c8bc]")}>
                    <div className="relative h-[82px] rounded-md bg-[#f5f7f4] sm:h-[92px]">
                      <Image src={image.src} alt="" fill sizes="117px" className="pointer-events-none object-contain" draggable={false} />
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"><span className="-rotate-[24deg] text-[9px] font-bold tracking-wide text-slate-500/5">WEDRAWPLANS</span></span>
                    </div>
                    <span className="mt-2 block text-center text-[10px] font-bold text-[#3d666b]">Drawing {[5, 6, 8][i]}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : null}
        <div className="border-t border-[#dce9e3] bg-[#f0f8f3] px-4 py-5 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#31735a]">Planning permission · Hertsmere Borough Council</p>
          <p className="mt-2 text-[13px] leading-6 text-[#3b645a]">This Elstree design illustrates how existing floor plans, comprehensive proposed layouts, architectural elevations and a 45-degree right-of-light study can work together to support a substantial householder extension proposal.</p>
          <p className="mt-2 text-[11px] font-semibold text-[#28725b]">Recorded planning reference: 20/0662/HSE</p>
        </div>
      </section>
      <section className="rounded-[16px] border border-[#dce8e2] bg-[#f3f9f5] p-5 sm:p-6">
        <h3 className="text-[17px] font-semibold text-[#2a4f51]">Planning a similar extension in Elstree or Hertsmere?</h3>
        <p className="mt-2 text-[13px] leading-7 text-[#577577]">Whether your project involves larger front and rear extensions, altered rooflines, contemporary glazing or additional family accommodation, WEDRAWPLANS can prepare coordinated planning drawings, 3D design visuals and technical drawing packages tailored to your property.</p>
        <a href="#case-study-quote" className="mt-3 inline-flex rounded-full bg-[#2b7a83] px-5 py-2.5 text-[12px] font-bold text-white hover:bg-[#22636a]">Get your fixed-fee drawing quote →</a>
      </section>
    </div>
  );
}

export default function CaseStudyGalleryQuote({ projects, context }: Props) {
  const project = projects[0];
  const isHub = context === "hub";
  const isReddings = !isHub && project?.slug === "the-reddings-mill-hill-extension-basement-loft";
  const isAllum = !isHub && project?.slug === "allum-lane-elstree-major-house-extension";
  const isSistova = !isHub && project?.slug === "sistova-road-wandsworth-extension-basement";
  const isCromwell = !isHub && project?.slug === "cromwell-road-hounslow-rear-extension";
  const isBrockley = !isHub && project?.slug === "brockley-road-lewisham-two-flat-conversion";
  const isHarrowStudios = !isHub && project?.slug === "burnt-oak-broadway-harrow-retail-flats";
  const isCannon = !isHub && project?.slug === "cannon-lane-pinner-5-metre-rear-extension";
  const isSunburyCare = !isHub && project?.slug === "sunbury-avenue-mill-hill-accessible-garden-care-outbuilding";
  const isGreenwichTen = !isHub && project?.slug === "chestnut-rise-plumstead-greenwich-ten-flats-lawfulness";
  const isHendonHMO = !isHub && project?.slug === "sevington-road-hendon-seven-bedroom-hmo-planning-approval";
  const isApprovedDrawingShowcase = isSistova || isCromwell;
  const quotePanelRef = useRef<HTMLDivElement>(null);
  const [quoteHeight, setQuoteHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (!isAllum || !quotePanelRef.current) return;
    const panel = quotePanelRef.current;
    const measure = () => setQuoteHeight(Math.ceil(panel.getBoundingClientRect().height));
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(panel);
    return () => observer.disconnect();
  }, [isAllum]);
  if (!project) return null;
  return (
    <section id="project-drawings" aria-labelledby="project-gallery-heading" className="border-y border-[#e3e9e6] bg-[#f4f8f7]">
      <div className="mx-auto max-w-7xl px-5 py-8 pb-24 sm:px-8 sm:py-11 lg:pb-12">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#a36a63]">WEDRAWPLANS architectural drawings</p>
            <h2 id="project-gallery-heading" className="mt-2 text-2xl font-semibold tracking-tight text-[#284549] sm:text-3xl">
              {isHub ? "Explore our approved planning projects" : isReddings ? "A real project, from before to after" : isAllum ? "A real approved project, from plans to 3D design" : isApprovedDrawingShowcase ? "Approved planning drawings & architectural 3D design" : isBrockley ? "Approved two-flat conversion · original architectural design" : isHarrowStudios ? "Three studio flats approved above retail · drawings and 3D walkthroughs" : isCannon ? "5 metre rear extension · original design and approved drawings" : isSunburyCare ? "Accessible garden outbuilding · original architectural design" : isGreenwichTen ? "Ten-flat existing-use case · original drawings and planning evidence" : isHendonHMO ? "Seven-bedroom HMO · approved architectural plans and planning assessment" : "Project drawings & design"}
            </h2>
            <p className="mt-3 max-w-3xl text-[14px] leading-7 text-[#61777b]">
              {isHub
                ? "Browse selected projects and planning outcomes. Request a fixed-fee quote while you explore."
                : isHarrowStudios
                  ? "See how WEDRAWPLANS developed a coordinated design for three studio homes above a retained shop, securing Harrow Council's planning approval. Explore the layouts, architectural drawings and design walkthroughs."
                  : isCannon
                    ? "Explore the approved 5 metre rear extension in Pinner through its garden-facing 3D design and original council-listed planning drawings."
                    : isSunburyCare
                      ? "Discover how accessible design and carefully prepared architectural drawings secured a Barnet Certificate of Lawfulness for this ancillary garden care building."
                      : isGreenwichTen
                        ? "Explore how Greenwich considered existing-layout drawings, the historic occupation record and corroborating council evidence before certifying ten self-contained flats as a lawful established use."
                        : isHendonHMO
                          ? "Discover how a carefully planned seven-bedroom HMO conversion in Hendon addressed accommodation standards, neighbouring amenity, transport and noise considerations before Barnet granted conditional planning permission."
                          : "Explore the architectural project presentation and ask us about drawings for your own property."}
            </p>
          </div>
          {isHub ? <Link href="#browse-projects" className="text-[13px] font-semibold text-[#27757e] underline-offset-4 hover:underline">Browse all approved projects →</Link> : <span className="text-[12px] text-[#667f81]">{project.shortTitle}</span>}
        </div>
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(330px,.7fr)] lg:gap-7">
          <div className="min-w-0">
            {isReddings ? <RealProjectShowcase project={project} /> : isAllum ? <AllumLaneShowcase project={project} quoteHeight={quoteHeight} /> : isApprovedDrawingShowcase ? <ApprovedDrawingShowcase project={project} kind={isSistova ? "sistova" : "cromwell"} /> : isBrockley ? <BrockleyCaseStudyShowcase project={project} /> : isHarrowStudios ? <HarrowStudioConversionShowcase project={project} /> : isCannon ? <CannonLaneShowcase project={project} /> : isSunburyCare ? <SunburyCareOutbuildingShowcase project={project} /> : isGreenwichTen ? <GreenwichTenFlatsShowcase project={project} /> : isHendonHMO ? <HendonHMOShowcase project={project} /> : <ProjectMediaSlider projects={projects} mode={context} />}
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
          <div id="case-study-quote" ref={quotePanelRef} className="scroll-mt-24 lg:sticky lg:top-5 lg:self-start"><ProjectQuickQuotePanel source={isHub ? "case-studies-hub" : "case-study-gallery"} projectSlug={isHub ? "" : project.slug} projectTitle={isHub ? "" : project.shortTitle} suggestedService={isHub ? "" : serviceFor(project)} /></div>
        </div>
      </div>
      {(isReddings || isAllum || isApprovedDrawingShowcase || isBrockley || isHarrowStudios || isCannon || isSunburyCare || isGreenwichTen || isHendonHMO) ? <a href="#case-study-quote" className="fixed inset-x-0 bottom-0 z-40 flex min-h-[60px] items-center justify-center border-t border-[#bcd5d0] bg-[#224b4e] px-5 py-3 text-[14px] font-bold text-white shadow-[0_-10px_30px_rgba(0,0,0,.13)] lg:hidden">Get your fixed-fee drawing quote →</a> : null}
    </section>
  );
}
