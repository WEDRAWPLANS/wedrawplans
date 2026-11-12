import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Stage = "planning" | "technical" | "construction";
type Media = { file: string; title: string; detail: string };
const base = "/images/case-studies/700-woolwich-road-greenwich-two-new-flats/";
const council = "https://planning.royalgreenwich.gov.uk/online-applications/applicationDetails.do?activeTab=documents&keyVal=_GRNW_DCAPR_102414";
const quote = "/get-drawings-quote?source=case-study&project=700-woolwich-road-greenwich-two-new-flats";

const collections: Record<Stage, { label: string; shortLabel: string; heading: string; intro: string; items: Media[] }> = {
  planning: {
    label: "Planning approval", shortLabel: "Planning",
    heading: "Planning permission for two additional flats",
    intro: "The rooftop proposal added two two-bedroom apartments to the mixed-use development. Explore the floor plans, elevations, roof design and related access arrangements submitted to Royal Greenwich.",
    items: [
      { file: "planning-07-drawing", title: "Proposed fourth-floor plan", detail: "Floor plan for the additional two-bedroom apartments, Flats 15 and 16." },
      { file: "planning-02-approved-vs-proposed-section", title: "Approved and proposed sections", detail: "Comparison of the roof-level accommodation and the revised building sections." },
      { file: "planning-09-elevation", title: "Front and rear elevations", detail: "Appearance of the development with the additional upper floor." },
      { file: "planning-03-proposed-elevations", title: "Side elevations", detail: "Side elevations showing the additional storey and overall building height." },
      { file: "planning-10-elevation", title: "Rear elevation and external materials", detail: "Proposed rear elevation and external finish details." },
      { file: "planning-01-proposed-fourth-floor", title: "Roof plan and amenity space", detail: "Roof arrangement, outdoor amenity space, green roof and solar panels." },
      { file: "planning-08-drawing", title: "Ground-floor layout and parking", detail: "Parking, access, cycles and refuse provision associated with the proposal." },
      { file: "planning-04-proposed-second-floor", title: "Second-floor plan", detail: "Existing residential arrangement and circulation below the additional storey." },
      { file: "planning-06-comparative-layout", title: "First-floor residential plan", detail: "The typical residential floor layout and circulation." },
      { file: "planning-05-cover-perspective", title: "Architectural perspective", detail: "Architectural view of the mixed-use development." },
    ],
  },
  technical: {
    label: "Building Regulations", shortLabel: "Building Regs",
    heading: "Building Regulations and construction drawings",
    intro: "A coordinated technical drawing package covering construction layout, protected circulation, ventilation, building fabric, roof details and structural interfaces. BR01 leads the collection.",
    items: [
      { file: "br-01-fourth-floor-services", title: "BR01 — fourth-floor plan and services", detail: "Fourth-floor accommodation, ventilation and services coordination, protected access and construction information." },
      { file: "br-02-fourth-floor-dimensions", title: "BR02 — dimensioned floor plan", detail: "Setting-out dimensions and the detailed construction layout of the new apartments." },
      { file: "br-03-roof-layout", title: "BR03 — roof layout", detail: "Roof arrangement, amenity space, drainage considerations and equipment positions." },
      { file: "br-04-elevation", title: "BR04 — technical elevation", detail: "Building levels, elevations and fire-stopping interfaces." },
      { file: "br-05-elevation", title: "BR05 — external finishes", detail: "Construction elevation and external-material interfaces." },
      { file: "br-06-elevation", title: "BR06 — building elevation", detail: "Elevational information coordinated with construction and structural levels." },
      { file: "br-07-elevation", title: "BR07 — construction elevation", detail: "Building-envelope detailing and junctions with the additional floor." },
      { file: "br-08-structural-section", title: "BR08 — construction section", detail: "Roof construction, thermal build-ups and upper-floor structural interfaces." },
      { file: "br-13-technical-section", title: "BR13 — stair and roof sections", detail: "Stair, roof and building section details for the upper-floor accommodation." },
      { file: "br-17-fourth-floor-technical-layout", title: "BR17 — fourth-floor construction details", detail: "Further technical information and coordinated construction details." },
    ],
  },
  construction: {
    label: "Structural construction", shortLabel: "Site Photos",
    heading: "Structural steelwork and site progress",
    intro: "Construction photography documents the new rooftop structural frame, steel beam-and-column arrangement, connections and the progress of the additional storey.",
    items: [
      { file: "construction-01-street-elevation", title: "Additional storey under construction", detail: "Street elevation during construction of the rooftop extension." },
      { file: "construction-02-roof-steel-frame", title: "Roof-level steel beams", detail: "Steel beams and supporting columns forming the new rooftop structure." },
      { file: "construction-03-steelwork-installation", title: "Steel frame installation", detail: "Main steel framing erected over the existing roof." },
      { file: "construction-04-street-view", title: "Street frontage and scaffolding", detail: "External works and scaffold access at roof level." },
      { file: "construction-05-active-rooftop-works", title: "Rooftop construction", detail: "On-site steelwork installation and construction activity." },
      { file: "construction-06-structure-span", title: "Steel beam and column grid", detail: "Principal steel spans and supporting members." },
      { file: "construction-07-base-plate-and-connection", title: "Steel connection and base plate", detail: "Bolted connections and structural support details." },
      { file: "construction-08-rooftop-frame", title: "Rooftop frame progress", detail: "Additional steel-frame members during construction." },
    ],
  },
};
const stages: Stage[] = ["planning", "technical", "construction"];

function asset(file: string) { return base + file + ".webp"; }

export default function WoolwichRoadCombinedShowcase() {
  const [stage, setStage] = useState<Stage>("planning");
  const [planningIndex, setPlanningIndex] = useState(0);
  const [technicalIndex, setTechnicalIndex] = useState(0);
  const [constructionIndex, setConstructionIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const items = collections[stage].items;
  const index = stage === "planning" ? planningIndex : stage === "technical" ? technicalIndex : constructionIndex;
  const item = items[index] || items[0];
  const go = (i: number) => {
    const next = (i + items.length) % items.length;
    (stage === "planning" ? setPlanningIndex : stage === "technical" ? setTechnicalIndex : setConstructionIndex)(next);
    setZoom(false);
  };
  const setPhaseTab = (next: Stage) => { setStage(next); setZoom(false); };
  const image = (file: string) => base + file + ".webp";

  return (
    <div className="w-full min-w-0 max-w-full space-y-7 select-none" onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()}>
      <section className="overflow-hidden rounded-[22px] border border-[#d5e4dd] bg-white shadow-[0_18px_42px_rgba(25,70,72,.065)]">
        <div className="bg-[#edf7f1] px-5 py-6 sm:px-8 sm:py-8">
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#27745d]">Greenwich, London · Planning permission secured</p>
          <h2 className="mt-3 max-w-3xl text-[26px] font-semibold leading-tight text-[#23474b] sm:text-[33px]">
            Woolwich Road: from planning approval to completed construction
          </h2>
          <p className="mt-4 max-w-4xl text-[14px] leading-7 text-[#567174]">
            WEDRAWPLANS delivered a comprehensive architectural drawing and coordination service
            for this mixed-use Greenwich development. During construction, we secured planning permission
            for two additional two-bedroom apartments at roof level, increasing the scheme from 14 to
            16 homes alongside two commercial units. Our detailed Building Regulations drawings, structural
            engineering coordination and construction support helped bring the project through to completion.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["Two more homes", "Additional upper-floor planning approval"],
              ["Complete design service", "Planning and Building Regulations drawings"],
              ["Construction support", "Structural coordination and site delivery"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-[#d3e3d8] bg-white/80 px-4 py-4">
                <p className="text-[17px] font-bold text-[#245f5b]">{value}</p>
                <p className="mt-1 text-[11px] leading-5 text-[#627b7a]">{label}</p>
              </div>
            ))}
          </div>
          <a href={council} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full border border-[#b2d2c3] bg-white px-5 py-3 text-[12px] font-semibold text-[#286b70] hover:bg-[#e2f0e8]">
            View Royal Greenwich planning records ↗
          </a>
        </div>
      </section>

      <section className="overflow-hidden rounded-[21px] border border-[#d6e5df] bg-white shadow-[0_15px_38px_rgba(20,68,68,.05)]" aria-labelledby="woolwich-gallery-title">
        <div className="px-4 pb-4 pt-6 sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#a16d63]">Architecture, Building Regulations and structural design</p>
          <h2 id="woolwich-gallery-title" className="mt-2 text-[24px] font-semibold text-[#25484c] sm:text-[28px]">Explore the project drawing packages</h2>
          <p className="mt-3 max-w-3xl text-[12px] leading-6 text-[#617b7a]">
            Explore the project’s original planning and Building Regulations drawings and rooftop
            construction photographs. Choose a stage and select a sheet below.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 border-y border-[#deebe3] bg-[#f6faf7] p-3 sm:gap-4 sm:p-5" role="tablist" aria-label="Project drawing stage">
          {stages.map((key, number) => (
            <button key={key} type="button" role="tab" aria-selected={stage === key} aria-controls="woolwich-selected-image" onClick={() => setPhaseTab(key)}
              className={"min-w-0 rounded-xl px-2 py-4 text-left text-[11px] font-bold leading-5 transition sm:px-5 sm:text-[14px] " + (stage === key ? "bg-[#286f74] text-white shadow-sm" : "border border-[#d3e3dc] bg-white text-[#42686a] hover:bg-[#edf6f0]")}>
              <span className="block text-[10px] font-semibold uppercase tracking-[.1em] opacity-75">Stage 0{number + 1} · {collections[key].items.length} images</span>
              {key === "planning" ? "Planning & design" : key === "technical" ? "Building Regulations" : "Construction photos"}
            </button>
          ))}
        </div>

        <div className="border-b border-[#e5eee8] px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[.12em] text-[#29735d]">
                {stage === "planning" ? "Planning drawing" : stage === "technical" ? "Building Regulations" : "Construction photograph"} · {index + 1} of {items.length}
              </p>
              <h3 className="mt-1 text-[18px] font-semibold text-[#2b4e50]">{item.title}</h3>
              <p className="mt-1 max-w-xl text-[12px] leading-6 text-[#6a8080]">{item.detail}</p>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" aria-label="Previous image" onClick={() => go(index - 1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bdd2ca] bg-white text-[23px] text-[#2f6c6f] hover:bg-[#eff7f2]">‹</button>
              <button type="button" aria-label="Next image" onClick={() => go(index + 1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bdd2ca] bg-white text-[23px] text-[#2f6c6f] hover:bg-[#eff7f2]">›</button>
            </div>
          </div>
          <button type="button" onClick={() => setZoom(z => !z)} aria-pressed={zoom}
            className="mt-3 rounded-full border border-[#aacac0] bg-[#eff7f2] px-4 py-2 text-[12px] font-semibold text-[#286a6e] hover:bg-[#e2f0e8]">
            {zoom ? "Fit complete image to screen" : stage === "construction" ? "Inspect larger photograph" : "Inspect larger drawing detail"}
          </button>
        </div>

        <figure id="woolwich-selected-image" className="mx-2 my-4 min-w-0 overflow-hidden rounded-xl border border-[#e1ebe4] bg-[#f8fbf9] p-1.5 sm:mx-5 sm:p-3">
          <div className={zoom ? "max-w-full overflow-x-auto overscroll-x-contain" : "max-w-full overflow-hidden"}>
            <div className={"relative " + (zoom ? "w-[960px] md:w-[1250px]" : "w-full")}
              style={{ aspectRatio: stage === "construction" ? "4/3" : "2384/1684" }}>
              <Image key={item.file} src={image(item.file)} alt={item.title + " — WEDRAWPLANS project"}
                fill sizes={zoom ? "1250px" : "(max-width: 768px) 100vw, 75vw"}
                className="pointer-events-none h-full w-full object-contain" draggable={false} />
            </div>
          </div>
          <figcaption className="border-t border-[#e2ebe6] px-2 py-3 text-[11px] leading-6 text-[#657d7d]">
            {stage === "planning" ? "Planning drawing" : stage === "technical" ? "Building Regulations drawing" : "Construction photograph"} {index + 1}.
            {" "}{zoom ? "Swipe horizontally within the image to inspect at larger size." : "Select another thumbnail below to explore the project."}
          </figcaption>
        </figure>

        <div className="flex gap-3 overflow-x-auto overscroll-x-contain border-t border-[#e1ebe4] bg-[#fafcf9] px-3 py-4 sm:px-5" role="group" aria-label="Select a drawing or photograph">
          {items.map((v, i) => (
            <button key={v.file} type="button" onClick={() => go(i)} aria-label={"Show " + v.title} aria-current={index === i ? "true" : undefined}
              className={"w-[155px] shrink-0 overflow-hidden rounded-xl border p-2 text-left transition sm:w-[180px] " + (index === i ? "border-[#318e87] bg-[#ebf7ef]" : "border-[#d6e6de] bg-white hover:border-[#9ec7b8]")}>
              <span className="relative block aspect-[1.38] rounded-md bg-[#fbfcfa]">
                <Image src={image(v.file)} alt="" fill sizes="180px" className="pointer-events-none object-contain" draggable={false} />
              </span>
              <span className="mt-2 block text-[11px] font-semibold leading-5 text-[#48696d]">{v.title}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-[20px] border border-[#dce7df] bg-white p-5 sm:p-8">
        <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#ad7468]">Stage 01 · Planning permission</p>
        <h2 className="mt-2 text-[23px] font-semibold leading-tight text-[#274b50] sm:text-[28px]">Two additional flats secured during construction</h2>
        <p className="mt-4 text-[13px] leading-7 text-[#577276]">
          Royal Greenwich granted permission under application 20/0899/F for two additional two-bedroom flats
          at fourth-floor level. The new accommodation was coordinated with the existing mixed-use building,
          including access, parking, amenity and external appearance.
        </p>
        <a href={council} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-[12px] font-semibold text-[#286b70] underline underline-offset-4">See the council planning application and drawings ↗</a>
      </section>

      <section className="rounded-[20px] border border-[#dce7df] bg-white p-5 sm:p-8">
        <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#ad7468]">Stage 02 · Technical design</p>
        <h2 className="mt-2 text-[23px] font-semibold leading-tight text-[#274b50] sm:text-[28px]">Building Regulations and structural coordination</h2>
        <p className="mt-4 text-[13px] leading-7 text-[#577276]">
          The BR01-led technical drawing collection illustrates building fabric, fire protection,
          services and ventilation, construction details, roof design and integration with the
          new structural frame. WEDRAWPLANS coordinated detailed drawing information, structural
          engineering interfaces and planning-condition submissions.
        </p>
      </section>

      <section className="rounded-[20px] border border-[#dce7df] bg-white p-5 sm:p-8">
        <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#ad7468]">Stage 03 · Structural construction</p>
        <h2 className="mt-2 text-[23px] font-semibold leading-tight text-[#274b50] sm:text-[28px]">From roof-level steelwork to completion</h2>
        <p className="mt-4 text-[13px] leading-7 text-[#577276]">
          Original site photography records construction of the rooftop steel-frame superstructure,
          including beams, columns and connections, alongside the existing residential building.
          The scheme has been completed and final Building Control certification issued.
        </p>
      </section>

      <section className="rounded-[18px] border border-[#c9e0d3] bg-[#edf7f1] p-5 sm:p-7">
        <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#28765e]">Planning & Building Regulation drawing packages</p>
        <h2 className="mt-2 text-[23px] font-semibold leading-tight text-[#274e4e]">Expert planning and Building Regulations drawing services</h2>
        <p className="mt-3 text-[13px] leading-7 text-[#597374]">
          WEDRAWPLANS delivers clearly scoped fixed-fee architectural drawing packages for house extensions,
          loft conversions, residential conversions, new homes and larger developments. We provide
          planning and Building Regulations drawings, coordinate structural engineering requirements
          and support applications to the relevant authorities. Contact us for a quotation tailored to
          your property and the services required.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="#case-study-quote" className="inline-flex rounded-full bg-[#276f75] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#1d575b]">Get your fixed-fee quote</a>
          <Link href="/building-regulation-drawings" className="inline-flex rounded-full border border-[#b2d2c3] bg-white px-5 py-3 text-[12px] font-semibold text-[#286b70]">Building Regulations services</Link>
          <Link href="/areas/greenwich" className="inline-flex rounded-full border border-[#b2d2c3] bg-white px-5 py-3 text-[12px] font-semibold text-[#286b70]">Greenwich services</Link>
        </div>
      </section>
    </div>
  );
}
