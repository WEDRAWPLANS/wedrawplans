import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [active, setActive] = useState<number | null>(null);
  const current = collections[stage];
  const selected = active === null ? null : current.items[active];

  function chooseStage(next: Stage) {
    setActive(null);
    setStage(next);
  }
  function navigate(direction: number) {
    setActive(index => index === null ? null : (index + direction + current.items.length) % current.items.length);
  }

  useEffect(() => {
    if (active === null) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive(index => index === null ? null : (index + 1) % collections[stage].items.length);
      if (event.key === "ArrowLeft") setActive(index => index === null ? null : (index - 1 + collections[stage].items.length) % collections[stage].items.length);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, stage]);

  return (
    <div className="min-w-0 space-y-7" aria-label="Woolwich Road planning, Building Regulations and construction">
      <section className="overflow-hidden rounded-[20px] border border-[#d9e7e1] bg-white shadow-[0_10px_32px_rgba(24,72,67,.04)]">
        <header className="bg-gradient-to-r from-[#edf7f2] to-[#f9fbf9] px-5 py-6 sm:px-7 sm:py-8">
          <p className="text-[11px] font-semibold uppercase tracking-[.13em] text-[#28776f]">Woolwich Road · Greenwich</p>
          <h2 className="mt-2 text-[23px] font-semibold leading-tight text-[#244b4e] sm:text-[29px]">An additional storey. Two new homes. One coordinated project.</h2>
          <p className="mt-3 text-[13px] leading-7 text-[#567175]">
            WEDRAWPLANS provided planning, Building Regulations construction drawings and structural engineering coordination for this mixed-use residential project. During construction, planning permission was secured for two further two-bedroom flats above the western wing, bringing the revised scheme to 16 residential apartments alongside two commercial units.
          </p>
          <p className="mt-3 text-[13px] leading-7 text-[#567175]">
            The work also included construction-stage coordination and planning-condition submissions. The completed development received its final Building Control certificate.
          </p>
          <a href={council} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center rounded-full border border-[#b6d7ce] bg-white px-5 py-3 text-[12px] font-semibold text-[#276d70] hover:bg-[#eaf7f1]">Royal Greenwich planning documents ↗</a>
        </header>

        <div className="px-5 pb-2 pt-6 sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[.13em] text-[#a46d62]">Project drawings and construction photography</p>
          <h3 className="mt-2 text-[21px] font-semibold text-[#25494d] sm:text-[25px]">Explore the project</h3>
          <p className="mt-2 text-[13px] leading-6 text-[#60777a]">Choose a category, then tap any thumbnail to view the drawing or photograph in detail.</p>
        </div>

        <div className="grid grid-cols-3 gap-2 px-3 py-4 sm:gap-3 sm:px-6" role="tablist" aria-label="Choose project gallery">
          {stages.map((key, index) => (
            <button key={key} type="button" role="tab" id={"woolwich-tab-" + key} aria-controls="woolwich-gallery" aria-selected={stage === key} onClick={() => chooseStage(key)}
              className={"min-w-0 rounded-[13px] border px-2 py-3 text-center transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#26787b] sm:px-3 sm:py-4 " + (stage === key ? "border-[#26777b] bg-[#26777b] text-white shadow-sm" : "border-[#d6e6e0] bg-[#f9fcfa] text-[#376166] hover:border-[#94c0b6]")}>
              <span className="block text-[10px] font-semibold uppercase opacity-80">0{index + 1}</span>
              <span className="mt-1 block text-[11px] font-bold leading-4 sm:text-[13px]">{collections[key].shortLabel}</span>
              <span className="mt-1 block text-[10px] opacity-80">{collections[key].items.length} images</span>
            </button>
          ))}
        </div>

        <div id="woolwich-gallery" role="tabpanel" aria-labelledby={"woolwich-tab-" + stage} className="border-t border-[#e3ece7] px-4 py-6 sm:px-7">
          <h4 className="text-[18px] font-semibold leading-6 text-[#274b50] sm:text-[21px]">{current.heading}</h4>
          <p className="mb-5 mt-2 text-[12px] leading-6 text-[#627a7d]">{current.intro}</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4" aria-label={current.label + " thumbnail gallery"}>
            {current.items.map((item, index) => (
              <button key={item.file} type="button" onClick={() => setActive(index)}
                className="group min-w-0 overflow-hidden rounded-[12px] border border-[#d9e7e0] bg-white p-2 text-left shadow-[0_3px_10px_rgba(24,72,67,.035)] transition hover:border-[#71aaa2] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#26787b]"
                aria-label={"Enlarge " + item.title}>
                <span className="relative block aspect-[4/3] overflow-hidden rounded-[7px] bg-[#f6f9f7]">
                  <Image src={asset(item.file)} alt={item.title} fill draggable={false} sizes="(max-width: 640px) 44vw, (max-width: 1024px) 25vw, 170px" className={"transition group-hover:scale-[1.03] " + (stage === "construction" ? "object-cover" : "object-contain")} />
                </span>
                <span className="mt-2 block text-[10px] font-bold uppercase tracking-[.03em] text-[#317770]">{stage === "technical" ? "BR" : stage === "planning" ? "Drawing" : "Photo"} {index + 1}</span>
                <span className="mt-0.5 block min-h-[34px] text-[11px] font-medium leading-[17px] text-[#375d62]">{item.title}</span>
                <span className="mt-1 inline-block text-[10px] font-semibold text-[#29787b] group-hover:underline">View larger +</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2" aria-label="Project services">
        <div className="rounded-[17px] border border-[#d8e7e0] bg-white p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[.11em] text-[#a16e63]">Planning and additional homes</p>
          <h3 className="mt-2 text-[17px] font-semibold text-[#294f52]">Permission secured during construction</h3>
          <p className="mt-2 text-[12px] leading-6 text-[#60787a]">The additional-floor design was coordinated with the existing building, its access, parking and rooftop amenity arrangements. Royal Greenwich granted permission under reference 20/0899/F.</p>
        </div>
        <div className="rounded-[17px] border border-[#d8e7e0] bg-white p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[.11em] text-[#a16e63]">Detailed design and delivery</p>
          <h3 className="mt-2 text-[17px] font-semibold text-[#294f52]">Building Regulations and structural coordination</h3>
          <p className="mt-2 text-[12px] leading-6 text-[#60787a]">Construction drawings addressed building fabric, ventilation, fire and acoustic requirements, services and the interface between the rooftop steel frame and existing structure, with support through the construction programme.</p>
        </div>
      </section>

      <section className="rounded-[18px] border border-[#cfe3da] bg-[#f3faf6] p-5 sm:p-7">
        <h3 className="text-[20px] font-semibold text-[#25494e]">Planning an extension, rooftop addition or residential development?</h3>
        <p className="mt-3 text-[13px] leading-7 text-[#59767a]">WEDRAWPLANS provides planning drawings, Building Regulations packages and structural coordination for homeowners and developers across London. Tell us what you would like to achieve and request a fixed-fee quotation.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={quote} className="inline-flex min-h-11 items-center rounded-full bg-[#26747a] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#195960]">Get your fixed-fee quote</Link>
          <Link href="/building-regulation-drawings" className="inline-flex min-h-11 items-center rounded-full border border-[#b5d5ca] bg-white px-5 py-3 text-[12px] font-semibold text-[#286d72]">Building Regulations services</Link>
        </div>
      </section>

      {selected && active !== null ? (
        <div className="fixed inset-0 z-[100] flex flex-col bg-[#101a1c]/95 px-2 pb-4 pt-3 text-white sm:px-6 sm:pb-6" role="dialog" aria-modal="true" aria-label={selected.title}>
          <div className="mx-auto mb-3 flex w-full max-w-[1600px] items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-[.12em] text-[#b7ddd4]">{current.label} · {active + 1} of {current.items.length}</p>
              <h4 className="truncate text-[14px] font-semibold sm:text-[17px]">{selected.title}</h4>
            </div>
            <button autoFocus type="button" onClick={() => setActive(null)} className="min-h-11 shrink-0 rounded-full border border-white/60 bg-white/10 px-5 text-[12px] font-semibold hover:bg-white/20" aria-label="Close image viewer">Close ×</button>
          </div>
          <div className="relative mx-auto min-h-0 w-full max-w-[1600px] flex-1 overflow-hidden rounded-lg bg-white">
            <Image src={asset(selected.file)} alt={selected.title} fill priority sizes="100vw" className="object-contain" draggable={false} />
          </div>
          <div className="mx-auto mt-3 flex w-full max-w-[1600px] items-center justify-between gap-3">
            <button type="button" onClick={() => navigate(-1)} className="min-h-11 shrink-0 rounded-full border border-white/50 px-4 text-[12px] font-semibold hover:bg-white/15" aria-label="Previous image">‹ Previous</button>
            <p className="max-w-[68%] text-center text-[11px] leading-5 text-[#d5e2df] sm:text-[12px]">{selected.detail}</p>
            <button type="button" onClick={() => navigate(1)} className="min-h-11 shrink-0 rounded-full border border-white/50 px-4 text-[12px] font-semibold hover:bg-white/15" aria-label="Next image">Next ›</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
