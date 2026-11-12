import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Media = { file: string; title: string; description: string };
const base = "/images/case-studies/700-woolwich-road-greenwich-two-new-flats/";
const quote = "/get-drawings-quote?source=case-study&project=700-woolwich-road-greenwich-two-new-flats";
const council = "https://planning.royalgreenwich.gov.uk/online-applications/applicationDetails.do?activeTab=documents&keyVal=_GRNW_DCAPR_102414";

const planning: Media[] = [
  { file: "planning-01-proposed-fourth-floor", title: "Proposed fourth-floor layout", description: "The featured planning drawing showing the two additional two-bedroom flats and access to the upper-level accommodation." },
  { file: "planning-02-approved-vs-proposed-section", title: "Approved and proposed building sections", description: "The before-and-proposed comparison showing the extra floor within the building's overall height and massing." },
  { file: "planning-03-proposed-elevations", title: "Proposed building elevations", description: "External elevations illustrating the additional residential accommodation and its relationship to the original building." },
  { file: "planning-04-proposed-second-floor", title: "Proposed second-floor layout", description: "The underlying residential development context and the circulation arrangement serving the development." },
  { file: "planning-05-cover-perspective", title: "Planning presentation and perspective", description: "WEDRAWPLANS presentation drawing prepared for the additional residential storey." },
  { file: "planning-06-comparative-layout", title: "Planning drawing and layout", description: "Supporting original planning-stage drawing retained in complete-sheet format." },
  { file: "planning-07-drawing", title: "Supporting planning drawing", description: "Additional original planning-stage drawing submitted as part of the architectural set." },
  { file: "planning-08-drawing", title: "Supporting planning arrangement", description: "Additional full-sheet planning documentation." },
  { file: "planning-09-elevation", title: "Additional elevation drawing", description: "An original sheet showing the building exterior and approved design context." },
  { file: "planning-10-elevation", title: "Additional building elevation", description: "Original planning elevation illustrating the proposed architectural treatment." },
];
const technical: Media[] = [
  { file: "br-01-fourth-floor-services", title: "BR01 — fourth-floor Building Regulations and services plan", description: "Start here: the complete WEDRAWPLANS technical drawing identifies Flats 15 and 16, coordinated MVHR ducting, fire dampers, protected access, layout and services notes." },
  { file: "br-02-fourth-floor-dimensions", title: "BR02 — dimensioned fourth-floor construction plan", description: "Detailed plan and setting-out dimensions for the two new flats and coordination of construction interfaces." },
  { file: "br-03-roof-layout", title: "BR03 — roof and amenity layout", description: "Roof plan illustrating the upper amenity area, surface-water considerations, equipment and photovoltaic arrangement." },
  { file: "br-04-elevation", title: "BR04 — technical elevation", description: "Building height, floor levels and fire-rated cavity-barrier considerations." },
  { file: "br-05-elevation", title: "BR05 — external finishes and technical elevation", description: "External materials and technical interface details for the additional storey." },
  { file: "br-06-elevation", title: "BR06 — further building elevation", description: "The technical elevation set and its relation to floor and structural levels." },
  { file: "br-07-elevation", title: "BR07 — technical section / elevation", description: "Fire and thermal interface considerations presented in the original WEDRAWPLANS drawing set." },
  { file: "br-08-structural-section", title: "BR08 — construction section and roof build-up", description: "Full building section showing upper-level construction, insulation, living-roof specification and floor build-ups." },
  { file: "br-13-technical-section", title: "BR13 — stair, roof and section details", description: "Sections and component build-ups connecting the top-floor accommodation to the existing building." },
  { file: "br-17-fourth-floor-technical-layout", title: "BR17 — additional fourth-floor technical details", description: "Coordinated plan and construction information for the additional residential units." },
];
const construction: Media[] = [
  { file: "construction-01-street-elevation", title: "The additional storey under construction", description: "Woolwich Road street elevation with scaffolding protecting the works at the top of the existing residential building." },
  { file: "construction-02-roof-steel-frame", title: "Roof steel structure — principal beams", description: "Photograph of the new steel beams and supporting columns for the two additional upper-floor homes." },
  { file: "construction-03-steelwork-installation", title: "The superstructure takes shape", description: "The exposed roof-level steel framing during installation, showing spans and principal member positions." },
  { file: "construction-04-street-view", title: "Street frontage during construction", description: "A second original streetscape photograph illustrating scaffold access, upper-level work and the occupied urban context." },
  { file: "construction-05-active-rooftop-works", title: "Construction activity on the roof", description: "Workers and equipment during erection of the steel frame adjacent to the existing core." },
  { file: "construction-06-structure-span", title: "Steel beam and column grid", description: "A further view of the structural steelwork across the existing roof slab." },
  { file: "construction-07-base-plate-and-connection", title: "Structural steel connection detail", description: "Close-up photograph of steelwork support connections and bolted base plates near the edge of the roof structure." },
  { file: "construction-08-rooftop-frame", title: "Additional steel-frame progress", description: "Roof-level steel members, supports and construction sequencing captured on site." },
];

function EvidenceGallery({ items, prefix, initial = 0 }: { items: Media[]; prefix: string; initial?: number }) {
  const [selected, setSelected] = useState(initial);
  const [zoom, setZoom] = useState(false);
  const item = items[selected];
  const url = base + item.file + ".webp";
  return (
    <div className="space-y-4">
      <figure className="overflow-hidden rounded-[18px] border border-[#dce8e3] bg-white shadow-[0_7px_25px_rgba(34,81,75,.05)]">
        <button type="button" onClick={() => setZoom(true)} className="block w-full cursor-zoom-in bg-[#f7faf8] p-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#286f76] sm:p-4" aria-label={"Enlarge " + item.title}>
          <Image src={url} alt={"Full original WEDRAWPLANS " + item.title + " for the Woolwich Road residential project"} width={2000} height={1450} className="mx-auto h-auto max-h-[720px] w-full object-contain" sizes="(max-width: 768px) 100vw, 850px" />
        </button>
        <figcaption className="px-4 py-4 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#297969]">{prefix} {selected + 1} of {items.length}</p>
          <h3 className="mt-1 text-[17px] font-semibold text-[#25494c]">{item.title}</h3>
          <p className="mt-2 text-[13px] leading-6 text-[#5b7377]">{item.description}</p>
          <p className="mt-2 text-[11px] text-[#778589]">Original WEDRAWPLANS project evidence. Full drawing sheets are shown without cropping; tap to enlarge.</p>
        </figcaption>
      </figure>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4" aria-label={"Select " + prefix.toLowerCase()}>
        {items.map((candidate, index) => (
          <button key={candidate.file} type="button" onClick={() => setSelected(index)} aria-current={index === selected ? "true" : undefined} aria-label={"Show " + candidate.title} className={"min-w-0 rounded-[12px] border bg-white p-2 text-left transition hover:border-[#78aaa5] " + (index === selected ? "border-[#26757a] ring-2 ring-[#beded7]" : "border-[#dbe5e0]")}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-[#f5f8f6]">
              <Image src={base + candidate.file + ".webp"} alt="" fill sizes="(max-width: 640px) 28vw, 150px" className="object-contain" />
            </div>
            <span className="mt-2 block truncate text-[11px] font-semibold text-[#385e61]">{prefix} {index + 1}</span>
          </button>
        ))}
      </div>
      {zoom ? (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black/90 p-3 text-white sm:p-7" role="dialog" aria-modal="true" aria-label={item.title}>
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="truncate text-[13px] font-semibold">{item.title}</p>
            <button type="button" onClick={() => setZoom(false)} className="min-h-11 rounded-full border border-white/40 px-5 text-[13px] font-semibold">Close ×</button>
          </div>
          <div className="relative min-h-0 flex-1">
            <Image src={url} alt={item.title + " enlarged full original WEDRAWPLANS sheet"} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function SectionHeading({ number, heading, intro }: { number: string; heading: string; intro: string }) {
  return (
    <header className="mb-6">
      <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#ac7064]">Part {number} of 3</p>
      <h3 className="mt-2 text-[22px] font-semibold leading-tight text-[#23494f] sm:text-[27px]">{heading}</h3>
      <p className="mt-3 text-[13px] leading-7 text-[#597478]">{intro}</p>
    </header>
  );
}

export default function WoolwichRoadCombinedShowcase() {
  return (
    <div className="space-y-10">
      <section className="rounded-[18px] border border-[#d3e4db] bg-white p-5 sm:p-7">
        <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#287868]">WEDRAWPLANS · a selected residential development project</p>
        <h3 className="mt-3 text-[21px] font-semibold leading-tight text-[#24494c]">From original multi-unit technical design to two more homes above the building</h3>
        <p className="mt-3 text-[13px] leading-7 text-[#526f72]">The original approved development contained 14 flats and two commercial units. During the construction programme, WEDRAWPLANS prepared and coordinated the additional-floor planning proposal for two further two-bedroom homes. Greenwich’s 2020 officer report assessed the proposal alongside parking, access, rooftop amenity space and conservation-area considerations, recommending approval. The submitted drawings identify the new dwellings as Flats 15 and 16.</p>
        <p className="mt-3 text-[13px] leading-7 text-[#526f72]">WEDRAWPLANS also provided the Building Regulations construction drawing package, coordinated structural engineering requirements, construction information and planning-condition submissions. The developer confirms that the development is complete and the final Building Control certificate has been issued. The certificate itself is not reproduced in this gallery.</p>
        <a className="mt-5 inline-flex min-h-11 items-center rounded-full border border-[#bdd7d1] bg-[#f1faf6] px-5 py-3 text-[12px] font-bold text-[#256e74] hover:bg-[#e3f3ec]" target="_blank" rel="noopener noreferrer" href={council}>View the Royal Greenwich application documents ↗</a>
      </section>

      <section id="woolwich-planning" className="scroll-mt-24">
        <SectionHeading number="1" heading="Planning approval for two additional fourth-floor flats" intro="See how the original 14-flat planning permission was supplemented by a carefully coordinated proposal for two further two-bedroom flats, including the approved-versus-proposed layouts, elevations and building sections." />
        <EvidenceGallery items={planning} prefix="Planning drawing" />
      </section>

      <section id="woolwich-building-regulations" className="scroll-mt-24 border-t border-[#d8e6df] pt-9">
        <SectionHeading number="2" heading="Building Regulations and structural engineering coordination" intro="The technical showcase begins with BR01, then moves through the dimensioned plans, roof, external elevations, building sections, fire and acoustic considerations, floor build-ups, insulation and services interfaces. These are technical construction drawings, distinct from the council planning drawings." />
        <EvidenceGallery items={technical} prefix="Building Regulations drawing" />
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            ["Building Control design", "A detailed technical drawing package with services, fire and acoustic coordination, construction elements and protected circulation."],
            ["Structural engineering interfaces", "Coordination of steel support positions, the existing slab, roof penetrations, floor levels and frame connections."],
            ["Environmental performance", "Roof insulation, vapour control, green-roof build-up and mechanical ventilation information shown in the technical sheets."],
            ["Site and statutory coordination", "Information to address construction-stage requirements and the relevant planning-condition process."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-[14px] border border-[#dbe7e1] bg-[#f8fbf9] p-4">
              <h4 className="text-[14px] font-semibold text-[#2b5557]">{title}</h4>
              <p className="mt-2 text-[12px] leading-6 text-[#5b7478]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="woolwich-construction" className="scroll-mt-24 border-t border-[#d8e6df] pt-9">
        <SectionHeading number="3" heading="Construction progress — the new roof-level steel superstructure" intro="Original dated site photographs show the top-floor addition being built: scaffolding on the street elevation, the exposed steel beams and columns, connection plates, framing and contractors at work. Each photo is individually watermarked over the building or structure, not the sky." />
        <EvidenceGallery items={construction} prefix="Construction photograph" />
        <p className="mt-5 text-[12px] leading-6 text-[#687c7f]">Construction photographs document works in progress rather than serving as structural calculation approval or final Building Control certificates.</p>
      </section>

      <section className="rounded-[18px] border border-[#cfe1d7] bg-[#f3faf6] p-6 sm:p-7">
        <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#287969]">Planning · Building Regulations · Structural engineering · Construction support</p>
        <h3 className="mt-3 text-[21px] font-semibold text-[#244b4d]">Planning an extension, loft conversion, flats or a larger residential development?</h3>
        <p className="mt-3 text-[13px] leading-7 text-[#526f72]">WEDRAWPLANS prepares coordinated planning and Building Regulations drawing packages for homeowners and developers in Greenwich and across London. Ask for a clear fixed-fee quotation appropriate to your scheme.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={quote} className="inline-flex min-h-11 items-center rounded-full bg-[#256f75] px-5 py-3 text-[13px] font-bold text-white hover:bg-[#18575f]">Get your fixed-fee quote</Link>
          <Link href="/building-regulation-drawings" className="inline-flex min-h-11 items-center rounded-full border border-[#accdc8] px-5 py-3 text-[12px] font-semibold text-[#286f75]">Building Regulations services</Link>
          <Link href="/areas/greenwich" className="inline-flex min-h-11 items-center rounded-full border border-[#accdc8] px-5 py-3 text-[12px] font-semibold text-[#286f75]">Greenwich projects</Link>
        </div>
      </section>
    </div>
  );
}
