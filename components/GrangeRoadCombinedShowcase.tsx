import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { CaseStudy } from "../data/caseStudies";

type Sheet = { src: string; code: string; name: string; summary: string; alt: string };
const base = "/images/case-studies/grange-road-edgware-side-extension/";
const quote = "/get-drawings-quote?source=case-study&project=grange-road-edgware-side-extension-lawful-development-building-regulations";
const council = "https://publicaccess.barnet.gov.uk/online-applications/applicationDetails.do?activeTab=documents&keyVal=O4U9H5JII8C00";
const planning: Sheet[] = [
  { src: base + "planning-01-proposed-floor-and-roof.webp", code: "Planning drawing 1", name: "Proposed floor and roof plans", summary: "The side extension, revised ground-floor layout, front entrance and roof relationship are shown together on the featured proposed sheet.", alt: "Full-sheet WEDRAWPLANS proposed floor and roof drawing, redacted and subtly watermarked, for the Edgware side extension" },
  { src: base + "planning-02-existing-floor-and-roof.webp", code: "Planning drawing 2", name: "Existing floor and roof plans", summary: "The original layout, boundaries, principal rooms and existing roof arrangement establish the baseline for the proposed extension.", alt: "Existing floor and roof plans, full sheet with subtle WEDRAWPLANS watermark" },
  { src: base + "planning-03-front-and-side.webp", code: "Planning drawing 3", name: "Front and side elevations", summary: "Existing and proposed street-side elevations explain the entrance relocation and the modest relationship with the original home.", alt: "Full-sheet existing and proposed front and side elevations with discreet WEDRAWPLANS watermark" },
  { src: base + "planning-04-rear-and-side.webp", code: "Planning drawing 4", name: "Rear and side elevations", summary: "Existing and proposed elevations demonstrate the side extension's roof form, height and relationship to the neighboring property.", alt: "Original WEDRAWPLANS rear and side architectural elevations with private details redacted" },
];
const technical: Sheet[] = [
  { src: base + "br-01-ground-floor-services.webp", code: "Building Regulations · BR01", name: "Ground floor and services — BR01", summary: "Start with the technical ground-floor layout and service drawing, including the construction arrangement and electrical, drainage and ventilation symbols.", alt: "WEDRAWPLANS Building Regulations drawing BR01 showing ground floor plan and coordinated services" },
  { src: base + "br-02-roof-and-section.webp", code: "Building Regulations · BR02", name: "Roof rafter plan and section A–A", summary: "The roof layout, construction section and typical partition and service penetration details support technical design coordination.", alt: "Building Regulations drawing BR02 showing roof rafters, roof section and partition details" },
  { src: base + "br-03-front-section-foundations.webp", code: "Building Regulations · BR03", name: "Front elevation, foundations and drainage", summary: "Front elevation and section A–A with foundation, drainage, lintel, steelwork and permeable paving notes. Structural assumptions remain subject to specialist design where required.", alt: "Technical drawing BR03 with front elevation, construction section, foundation and drainage design notes" },
  { src: base + "br-04-rear-elevation-notes.webp", code: "Building Regulations · BR04", name: "Rear elevation and detailed specifications", summary: "Roof and eaves build-ups, external walls, ground-floor construction and other performance notes are brought together for the technical package.", alt: "Building Regulations drawing BR04 featuring the rear elevation, roof eaves and written technical specifications" },
  { src: base + "br-07-boundary-section.webp", code: "Building Regulations · BR07", name: "Boundary and ground-level sections", summary: "Section B–B and ground-level construction details illustrate the boundary, paving, retention and drainage interfaces.", alt: "Building Regulations drawing BR07 showing boundary sections and paving construction detail" },
];

export default function GrangeRoadCombinedShowcase({ project }: { project: CaseStudy }) {
  const [stage, setStage] = useState<"planning" | "technical">("planning");
  const [planningIndex, setPlanningIndex] = useState(0);
  const [technicalIndex, setTechnicalIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const sheets = stage === "planning" ? planning : technical;
  const currentIndex = stage === "planning" ? planningIndex : technicalIndex;
  const current = sheets[currentIndex] || sheets[0];
  const pick = (n: number) => {
    const next = (n + sheets.length) % sheets.length;
    if (stage === "planning") setPlanningIndex(next); else setTechnicalIndex(next);
    setZoom(false);
  };
  const chooseStage = (s: "planning" | "technical") => { setStage(s); setZoom(false); };

  return (
    <div aria-label={project.shortTitle + " planning and Building Regulations drawings"} className="min-w-0 space-y-8 py-6 sm:py-10" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}>
      <section className="overflow-hidden rounded-[22px] border border-[#d5e4dd] bg-white shadow-[0_15px_45px_rgba(22,65,70,.06)]" aria-labelledby="grange-heading">
        <div className="bg-gradient-to-r from-[#edf7f2] to-[#f8fbf8] px-5 py-7 sm:px-9 sm:py-9">
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#2d786c]">Barnet · Edgware · Certificate of Lawfulness granted</p>
          <h2 id="grange-heading" className="mt-3 max-w-4xl text-[24px] font-semibold leading-tight text-[#244c51] sm:text-[34px]">
            Side extension, planning-stage drawings, Building Regulations &amp; structural coordination
          </h2>
          <p className="mt-4 max-w-4xl text-[14px] leading-7 text-[#577173]">
            This Edgware project demonstrates the value of a coordinated approach from the first planning drawing to later technical details. WEDRAWPLANS prepared the architectural information for a side extension that Barnet confirmed as lawful on 20 April 2016. Separate Building Regulations drawings then addressed construction details, service layouts and structural design interfaces, showing homeowners how each stage can be clearly documented.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["20 Apr 2016", "Barnet certificate granted"],
              ["3 m × 7.19 m", "Proposed side extension footprint"],
              ["4 + 5 sheets", "Planning drawings and technical details"],
            ].map(([n, t]) => (
              <div key={t} className="rounded-xl border border-[#d6e6df] bg-white/90 px-4 py-4">
                <p className="text-[19px] font-bold text-[#245e5e]">{n}</p>
                <p className="mt-1 text-[12px] leading-5 text-[#637d7b]">{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={quote} className="rounded-full bg-[#24777c] px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-[#185e64]">Get your fixed-fee quote</Link>
            <a href={council} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#bbd8d2] bg-white px-6 py-3 text-[13px] font-semibold text-[#286a6d] hover:bg-[#f4f9f6]">Barnet council-approved drawing record ↗</a>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[22px] border border-[#dae8df] bg-white shadow-[0_12px_36px_rgba(30,80,76,.045)]" aria-labelledby="grange-drawings">
        <header className="px-5 py-6 sm:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#9b6b5e]">Planning Drawings &amp; Building Regulations Details</p>
          <h2 id="grange-drawings" className="mt-2 text-[24px] font-semibold text-[#27494d] sm:text-[29px]">Explore the two drawing packages</h2>
          <p className="mt-3 max-w-3xl text-[13px] leading-7 text-[#627b7b]">The planning drawings explain the proposed floor layout, elevations and roof relationship that informed the Certificate of Lawfulness. The separate BR01-led Building Regulations package illustrates service layouts, roof and floor construction, foundations and structural coordination.</p>
        </header>
        <div className="grid grid-cols-2 gap-3 border-y border-[#e0ebe3] bg-[#f7faf8] p-3 sm:p-5" role="tablist" aria-label="Select drawing stage">
          <button type="button" role="tab" aria-selected={stage === "planning"} onClick={() => chooseStage("planning")}
            className={"rounded-xl px-3 py-4 text-left text-[12px] font-bold leading-5 sm:px-5 sm:text-[14px] " + (stage === "planning" ? "bg-[#27767b] text-white shadow-sm" : "border border-[#d6e7de] bg-white text-[#456a6c] hover:bg-[#eef6f1]")}>
            <span className="block text-[10px] font-medium uppercase tracking-[.1em] opacity-80">Stage 01 · Four sheets</span>Planning &amp; permitted development
          </button>
          <button type="button" role="tab" aria-selected={stage === "technical"} onClick={() => chooseStage("technical")}
            className={"rounded-xl px-3 py-4 text-left text-[12px] font-bold leading-5 sm:px-5 sm:text-[14px] " + (stage === "technical" ? "bg-[#27767b] text-white shadow-sm" : "border border-[#d6e7de] bg-white text-[#456a6c] hover:bg-[#eef6f1]")}>
            <span className="block text-[10px] font-medium uppercase tracking-[.1em] opacity-80">Stage 02 · Five sheets</span>Building Regulations &amp; details
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-5 sm:px-7">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[.13em] text-[#287b73]">{current.code} · {currentIndex + 1} of {sheets.length}</p>
            <h3 className="mt-1 text-[19px] font-semibold text-[#274c50]">{current.name}</h3>
            <p className="mt-2 max-w-3xl text-[12px] leading-6 text-[#617b7a]">{current.summary}</p>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => pick(currentIndex - 1)} aria-label="Previous drawing" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bed6ce] bg-white text-[24px] text-[#276c70] hover:bg-[#f0f7f3]">‹</button>
            <button type="button" onClick={() => pick(currentIndex + 1)} aria-label="Next drawing" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bed6ce] bg-white text-[24px] text-[#276c70] hover:bg-[#f0f7f3]">›</button>
          </div>
          <button type="button" onClick={() => setZoom((value) => !value)} aria-pressed={zoom} className="rounded-full border border-[#bed6cd] bg-[#f2f8f4] px-5 py-2.5 text-[12px] font-semibold text-[#2c6c70] hover:bg-[#e4f3ec]">
            {zoom ? "Fit full sheet" : "Inspect larger"}
          </button>
        </div>
        <figure className="mx-2 mb-5 overflow-hidden rounded-xl border border-[#e1e8e3] bg-[#fbfdfb] p-2 sm:mx-6 sm:p-4">
          <div className={zoom ? "max-w-full overflow-x-auto overscroll-x-contain" : "max-w-full overflow-hidden"}>
            <div className={zoom ? "relative w-[1000px] md:w-[1400px]" : "relative w-full"} style={{ aspectRatio: stage === "planning" ? "1880 / 1329" : "2000 / 1414" }}>
              <Image key={current.src} src={current.src} alt={current.alt} fill priority={currentIndex === 0 && stage === "planning"} draggable={false} sizes={zoom ? "1400px" : "(max-width: 800px) 100vw, 82vw"} className="pointer-events-none object-contain" />
            </div>
          </div>
          <figcaption className="mt-3 border-t border-[#e5eee8] pt-3 text-[11px] leading-6 text-[#668180]">
            {current.code}. {stage === "planning" ? "Architectural planning information for the side extension." : "Building Regulations construction design information for the same project."} {zoom ? "Swipe to inspect details." : "Select Inspect larger for additional detail."}
          </figcaption>
        </figure>
        <div className="flex gap-3 overflow-x-auto border-t border-[#e1ebe5] bg-[#f9fcfa] px-4 py-5 sm:px-6" role="group" aria-label="Choose drawing">
          {sheets.map((s, i) => (
            <button type="button" key={s.src} onClick={() => pick(i)} aria-label={"View " + s.name} aria-current={currentIndex === i ? "true" : undefined}
              className={"w-[150px] shrink-0 rounded-xl border p-2 text-left sm:w-[190px] " + (i === currentIndex ? "border-[#28817b] bg-[#ecf7f1]" : "border-[#d7e6df] bg-white hover:border-[#9dcab9]")}>
              <span className="relative block aspect-[1.42] rounded-md bg-white"><Image src={s.src} alt="" fill sizes="190px" className="pointer-events-none object-contain" draggable={false}/></span>
              <span className="mt-2 block text-[11px] font-semibold leading-5 text-[#45696b]">{s.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2" aria-label="Planning and Building Regulations details">
        <div className="rounded-[20px] border border-[#d8e5dc] bg-white p-5 sm:p-7">
          <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#a46f60]">Stage 01 · Lawful development secured</p>
          <h2 className="mt-3 text-[21px] font-semibold text-[#275055]">A permitted-development route confirmed by Barnet</h2>
          <p className="mt-4 text-[13px] leading-7 text-[#5c7678]">The original application sought a certificate for a single-storey side extension and the relocation of the entrance door to the front. The officer assessed a 3 m-wide, 7.19 m-deep extension, approximately 2.65 m to eaves and 3.05 m to the ridge. Barnet concluded the proposal was lawful under Class A of the permitted-development rules applicable at the 2016 decision date.</p>
          <p className="mt-3 text-[13px] leading-7 text-[#5c7678]">The officer report recorded the site as within the Watling Estate Conservation Area, with permitted-development rights retained for the application. The decision is a <strong>Lawful Development Certificate</strong>, not a separate grant of householder planning permission.</p>
          <a href={council} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full border border-[#b8d5ce] bg-[#f3faf6] px-5 py-3 text-[12px] font-semibold text-[#286c70] hover:bg-[#e5f4ec]">View Barnet's original application and approved drawing schedule ↗</a>
        </div>
        <div className="rounded-[20px] border border-[#d8e5dc] bg-white p-5 sm:p-7">
          <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#a46f60]">Stage 02 · Technical drawing package</p>
          <h2 className="mt-3 text-[21px] font-semibold text-[#275055]">Moving from council plans to construction information</h2>
          <p className="mt-4 text-[13px] leading-7 text-[#5c7678]">The separate BR01–BR07 selection demonstrates ground-floor and service coordination, roof rafter layout, construction sections, foundations, insulation, drainage, external walls and boundary details. These are the kinds of technical drawings used to coordinate Building Control and construction requirements after the planning-lawfulness stage.</p>
          <p className="mt-3 text-[13px] leading-7 text-[#5c7678]">The sheets refer to structural engineer confirmation for relevant roof, lintel, beam and foundation matters. They demonstrate coordination of structural interfaces, but the supplied records do not establish a separate structural calculation approval or Building Control completion certificate.</p>
          <Link href="/building-regulation-drawings" className="mt-5 inline-flex rounded-full border border-[#b8d5ce] bg-[#f3faf6] px-5 py-3 text-[12px] font-semibold text-[#286c70] hover:bg-[#e5f4ec]">Explore our Building Regulations drawing service →</Link>
        </div>
      </section>

      <div className="flex flex-col items-start gap-4 rounded-[20px] border border-[#cce0d7] bg-[#eff8f2] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#29765e]">WEDRAWPLANS · London &amp; M25</p>
          <h2 className="mt-2 text-[22px] font-semibold text-[#244a4c]">Planning a side extension of your own?</h2>
          <p className="mt-2 max-w-2xl text-[13px] leading-6 text-[#567373]">We can advise on the suitable planning or certificate route, then quote separately or together for Building Regulations drawings and structural coordination appropriate to your property.</p>
        </div>
        <Link href={quote} className="shrink-0 rounded-full bg-[#23767c] px-6 py-3 text-[13px] font-semibold text-white hover:bg-[#185c64]">Get your fixed-fee quote</Link>
      </div>
    </div>
  );
}
