import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { CaseStudy } from "../data/caseStudies";

type GalleryItem = { image: string; title: string; detail: string; identifier: string; alt: string };
const base = "/images/case-studies/cranbourne-drive-hoddesdon-combined/";
const planning: GalleryItem[] = [
  { image: base + "planning-05-ground-floor.webp", title: "Proposed ground-floor layout", detail: "Rear extension footprint, rooflights and how the enlarged kitchen connects to the garden.", identifier: "Planning sheet · PP05", alt: "Full WEDRAWPLANS planning drawing PP05 showing the proposed ground floor and extension roof plan at Cranbourne Drive" },
  { image: base + "planning-08-front-elevations.webp", title: "Existing and proposed front elevations", detail: "Architectural elevation comparison showing the wider roof-design development.", identifier: "Planning sheet · PP07", alt: "Complete planning drawing of existing and proposed front elevations of the Hoddesdon house" },
  { image: base + "planning-09-existing-3d.webp", title: "Before: existing house visual", detail: "The established massing and roof form before the design work.", identifier: "Planning visual · PP11", alt: "Architectural existing 3D representation of the Cranbourne Drive home, shown as the before stage" },
  { image: base + "planning-10-proposed-3d-side.webp", title: "Roof design and gable concept", detail: "A design-stage study of the altered loft roof, glazing and skylight arrangement.", identifier: "Planning visual · PP12", alt: "Proposed architectural 3D side view showing the loft gable scheme and rooflights" },
  { image: base + "planning-11-proposed-3d-rear.webp", title: "Garden-facing extension and loft vision", detail: "The proposed relationship between the rear glazing, rooflights and upper-level alterations.", identifier: "Planning visual · PP13", alt: "Proposed architectural 3D rear view of the house extension and loft roof design" },
];
const technical: GalleryItem[] = [
  { image: base + "bc-3d-views.webp", title: "Coordinated design, before and proposed", detail: "Front, rear and elevated views illustrate how the rear extension and loft scheme work together.", identifier: "Building Regulations · BC-10", alt: "Full WEDRAWPLANS BC-10 architectural three-dimensional views showing existing and proposed rear and roof forms" },
  { image: base + "bc-ground-floor.webp", title: "Ground-floor technical plan", detail: "Room and opening arrangements, layout dimensions, construction notes and relevant Building Regulations provisions.", identifier: "Building Regulations · BC-04", alt: "Full Building Regulations BC-04 proposed ground floor plan with extension, structural and construction notes" },
  { image: base + "bc-loft-floor.webp", title: "Loft-floor technical plan", detail: "The two-bedroom loft layout, stair, dormer, rooflights, fire-related annotations and dimensional coordination.", identifier: "Building Regulations · BC-05", alt: "Full Building Regulations BC-05 proposed loft floor plan with bedroom layout, stair and rooflight technical notes" },
  { image: base + "bc-ground-loft-3d.webp", title: "3D floor layout coordination", detail: "An accessible overhead illustration of the enlarged ground floor and usable loft arrangement.", identifier: "Building Regulations · BC-12", alt: "Full WEDRAWPLANS BC-12 3D floor layouts for ground floor and loft extension work" },
];

export default function CranbourneCombinedShowcase({ project }: { project: CaseStudy }) {
  const [phase, setPhase] = useState<"planning"|"technical">("technical");
  const [planningIndex,setPlanningIndex] = useState(4);
  const [technicalIndex,setTechnicalIndex] = useState(0);
  const [zoom,setZoom] = useState(false);
  const items=phase==="planning"?planning:technical;
  const index=phase==="planning"?planningIndex:technicalIndex;
  const item=items[index]||items[0];
  const go=(i:number)=>{
    (phase==="planning"?setPlanningIndex:setTechnicalIndex)((i+items.length)%items.length);
    setZoom(false);
  };
  const setPhaseTab=(tab:"planning"|"technical")=>{setPhase(tab);setZoom(false);};

  return (
    <div className="w-full min-w-0 max-w-full space-y-7 select-none" onContextMenu={e=>e.preventDefault()} onDragStart={e=>e.preventDefault()}>
      <section className="overflow-hidden rounded-[22px] border border-[#d5e4dd] bg-white shadow-[0_18px_42px_rgba(25,70,72,.065)]">
        <div className="bg-[#edf7f1] px-5 py-6 sm:px-8 sm:py-8">
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#27745d]">Broxbourne, Hertfordshire · Planning approval · 2026</p>
          <h2 className="mt-3 max-w-3xl text-[26px] font-semibold leading-tight text-[#23474b] sm:text-[33px]">
            One home, two coordinated drawing stages
          </h2>
          <p className="mt-4 max-w-4xl text-[14px] leading-7 text-[#567174]">
            At Cranbourne Drive in Hoddesdon, WEDRAWPLANS worked across the architectural planning
            and Building Regulations stages of a substantial home improvement programme:
            a garden-facing single-storey rear extension and a wider gable-and-loft redesign.
            The project illustrates how a well-evidenced planning case can sit alongside a separate,
            more detailed technical drawing package.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["16 Oct 2026","Rear extension planning permission"],
              ["3.4 metres","Depth assessed for the permitted rear extension"],
              ["9 selected sheets","Five planning-stage and four technical drawings"],
            ].map(([v,l])=><div key={l} className="rounded-xl border border-[#d3e3d8] bg-white/80 px-4 py-4">
              <p className="text-[18px] font-bold text-[#245f5b]">{v}</p>
              <p className="mt-1 text-[11px] leading-5 text-[#627b7a]">{l}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[21px] border border-[#d6e5df] bg-white shadow-[0_15px_38px_rgba(20,68,68,.05)]" aria-labelledby="cranbourne-gallery-title">
        <div className="px-4 pb-4 pt-6 sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#a16d63]">Architecture and technical design</p>
          <h2 id="cranbourne-gallery-title" className="mt-2 text-[24px] font-semibold text-[#25484c] sm:text-[28px]">Explore the two drawing packages</h2>
          <p className="mt-3 max-w-3xl text-[12px] leading-6 text-[#617b7a]">
            Start with the BC-10 existing-and-proposed house visual, then explore the planning design and detailed Building Regulations drawings. Every original sheet is presented in full, with closer inspection available on mobile.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 border-y border-[#deebe3] bg-[#f6faf7] p-3 sm:gap-4 sm:p-5" role="tablist" aria-label="Project drawing stage">
          <button type="button" role="tab" aria-selected={phase==="planning"} onClick={()=>setPhaseTab("planning")}
            className={"rounded-xl px-3 py-4 text-left text-[12px] font-bold leading-5 transition sm:px-5 sm:text-[14px] "+(phase==="planning"?"bg-[#286f74] text-white shadow-sm":"border border-[#d3e3dc] bg-white text-[#42686a] hover:bg-[#edf6f0]")}>
            <span className="block text-[10px] font-semibold uppercase tracking-[.1em] opacity-75">Stage 01 · 5 sheets</span>
            Planning &amp; design
          </button>
          <button type="button" role="tab" aria-selected={phase==="technical"} onClick={()=>setPhaseTab("technical")}
            className={"rounded-xl px-3 py-4 text-left text-[12px] font-bold leading-5 transition sm:px-5 sm:text-[14px] "+(phase==="technical"?"bg-[#286f74] text-white shadow-sm":"border border-[#d3e3dc] bg-white text-[#42686a] hover:bg-[#edf6f0]")}>
            <span className="block text-[10px] font-semibold uppercase tracking-[.1em] opacity-75">Stage 02 · 4 sheets</span>
            Building Regulations
          </button>
        </div>
        <div className="border-b border-[#e5eee8] px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[.12em] text-[#29735d]">{item.identifier} · {index+1} of {items.length}</p>
              <h3 className="mt-1 text-[18px] font-semibold text-[#2b4e50]">{item.title}</h3>
              <p className="mt-1 max-w-xl text-[12px] leading-6 text-[#6a8080]">{item.detail}</p>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" aria-label="Previous drawing" onClick={()=>go(index-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bdD2ca] bg-white text-[23px] text-[#2f6c6f] hover:bg-[#eff7f2]">‹</button>
              <button type="button" aria-label="Next drawing" onClick={()=>go(index+1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bdD2ca] bg-white text-[23px] text-[#2f6c6f] hover:bg-[#eff7f2]">›</button>
            </div>
          </div>
          <button type="button" onClick={()=>setZoom(z=>!z)}
            aria-pressed={zoom}
            className="mt-3 rounded-full border border-[#aacac0] bg-[#eff7f2] px-4 py-2 text-[12px] font-semibold text-[#286a6e] hover:bg-[#e2f0e8]">{zoom?"Fit complete sheet to screen":"Inspect larger drawing detail"}</button>
        </div>
        <figure className="mx-2 my-4 min-w-0 overflow-hidden rounded-xl border border-[#e1ebe4] bg-[#f8fbf9] p-1.5 sm:mx-5 sm:p-3">
          <div className={zoom?"max-w-full overflow-x-auto overscroll-x-contain":"max-w-full overflow-hidden"}>
            <div className={"relative "+(zoom?"w-[960px] md:w-[1250px]":"w-full")} style={{aspectRatio:phase==="planning"?"1276/935":"2384/1684"}}>
              <Image key={item.image} src={item.image} alt={item.alt} fill
                sizes={zoom?"1250px":"(max-width: 768px) 100vw, 75vw"} className="pointer-events-none h-full w-full object-contain" draggable={false}/>
            </div>
          </div>
          <figcaption className="border-t border-[#e2ebe6] px-2 py-3 text-[11px] leading-6 text-[#657d7d]">
            {item.identifier}. {zoom?"Swipe horizontally within the image to inspect the full drawing at larger size.":"The full original sheet fits within the viewing area."}
          </figcaption>
        </figure>
        <div className="flex gap-3 overflow-x-auto overscroll-x-contain border-t border-[#e1ebe4] bg-[#fafcf9] px-3 py-4 sm:px-5" role="group" aria-label="Select a drawing">
          {items.map((v,i)=><button key={v.image} type="button" onClick={()=>go(i)} aria-label={"Show "+v.title} aria-current={index===i?"true":undefined}
            className={"w-[155px] shrink-0 overflow-hidden rounded-xl border p-2 text-left transition sm:w-[180px] "+(index===i?"border-[#318e87] bg-[#ebf7ef]":"border-[#d6e6de] bg-white hover:border-[#9ec7b8]")}>
            <span className="relative block aspect-[1.38] rounded-md bg-[#fbfcfa]"><Image src={v.image} alt="" fill sizes="180px" className="pointer-events-none object-contain" draggable={false}/></span>
            <span className="mt-2 block text-[11px] font-semibold leading-5 text-[#48696d]">{v.title}</span>
          </button>)}
        </div>
      </section>

      <section className="rounded-[20px] border border-[#dce7df] bg-white p-5 sm:p-8">
        <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#ad7468]">Stage 01 · Planning success</p>
        <h2 className="mt-2 text-[23px] font-semibold leading-tight text-[#274b50] sm:text-[28px]">Making the case for a rear extension in an already evolving streetscape</h2>
        <p className="mt-4 text-[13px] leading-7 text-[#577276]">
          The original conservatory was replaced by a modest, low-profile single-storey addition. The submitted
          Design and Access Statement explained why the 3.4-metre rear projection, three rooflights and rear-facing
          glazed openings were appropriate. Rather than relying on generic claims, it examined the established
          neighbouring building lines, daylight, outlook, privacy, the retained rear garden and Broxbourne's
          Residential Design and Amenity guidance.
        </p>
        <p className="mt-3 text-[13px] leading-7 text-[#577276]">
          The planning submission distinguished documented neighbouring decisions from physical examples without a
          verified planning record. Broxbourne Council granted partially retrospective permission on 16 October 2026,
          subject to the approved drawing schedule and matching external materials.
        </p>
        <p className="mt-3 text-[12px] leading-6 text-[#657c7f]">
          Planning reference 07/26/0627/HF. This decision applies to the partially retrospective single-storey rear
          extension. The earlier selected planning illustrations also show broader loft and roof design ideas; they
          are not represented here as the formal approved 2026 drawing set or separate loft planning consent.
        </p>
      </section>

      <section className="rounded-[20px] border border-[#dce7df] bg-white p-5 sm:p-8">
        <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#ad7468]">Stage 02 · Technical development</p>
        <h2 className="mt-2 text-[23px] font-semibold leading-tight text-[#274b50] sm:text-[28px]">From planning concept to coordinated ground-floor and gable-loft technical drawings</h2>
        <p className="mt-4 text-[13px] leading-7 text-[#577276]">
          The Building Regulations drawing pack extends the project story beyond its planning decision. A detailed
          ground-floor plan describes the altered kitchen, dining and living accommodation; the loft plan sets out
          bedrooms, circulation and rooflight positions. The combined 3D design views help homeowners and the
          wider project team understand how the ground- and upper-level interventions fit together.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            ["Architectural detailing","Plans, opening locations, section-related construction notes and dimensional coordination."],
            ["Building Regulations","Technical annotations for ventilation, drainage, insulation, fire protection and material performance."],
            ["Structural engineering coordination","Beam, foundation, opening and roof-related design interfaces identified for engineer verification and the appropriate statutory checks."],
          ].map(([title,body])=><article key={title} className="rounded-xl border border-[#dfe9e3] bg-[#f7faf7] p-4">
            <h3 className="text-[14px] font-semibold text-[#2e5b5e]">{title}</h3>
            <p className="mt-2 text-[12px] leading-6 text-[#61797a]">{body}</p>
          </article>)}
        </div>
        <p className="mt-4 text-[11px] leading-6 text-[#688080]">
          The supplied technical sheets illustrate Building Regulations drawing and structural coordination
          services. They are not a Building Control approval certificate or a set of signed structural calculations;
          engineering verification and statutory approval remain separate requirements.
        </p>
      </section>

      <section className="rounded-[18px] border border-[#c9e0d3] bg-[#edf7f1] p-5 sm:p-7">
        <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#28765e]">Home improvements across EN11, Hertfordshire and Enfield</p>
        <h2 className="mt-2 text-[23px] font-semibold leading-tight text-[#274e4e]">A clearer route through planning, technical drawings and structural coordination</h2>
        <p className="mt-3 text-[13px] leading-7 text-[#597374]">
          Planning a rear extension, kitchen transformation, roof alteration or loft conversion?
          WEDRAWPLANS can scope the planning application, prepare coordinated Building Regulations drawings
          and work with structural engineers so each stage of your project can progress on a sound footing.
          We provide clear fixed-fee quotations setting out the work included.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="#case-study-quote" className="inline-flex rounded-full bg-[#276f75] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#1d575b]">Get your fixed-fee quote</a>
          <Link href="/areas/hertfordshire" className="inline-flex rounded-full border border-[#b2d2c3] bg-white px-5 py-3 text-[12px] font-semibold text-[#286b70]">Hertfordshire services</Link>
          <Link href="/areas/enfield" className="inline-flex rounded-full border border-[#b2d2c3] bg-white px-5 py-3 text-[12px] font-semibold text-[#286b70]">Enfield services</Link>
        </div>
      </section>
    </div>
  );
}
