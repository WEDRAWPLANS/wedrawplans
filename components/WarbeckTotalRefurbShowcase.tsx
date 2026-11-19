import { useState } from "react";
import WarbeckWatermark from "./WarbeckWatermark";

const BASE = "/images/case-studies/warbeck-road/";
const COUNCIL = "https://property.lbhf.gov.uk/NECSWS/ES/Presentation/Planning/OnlinePlanning/OnlinePlanningOverview?applicationNumber=2019%2F01824%2FCLP&guid=84f6c954-95ad-4217-af79-803a51dad2e7#";

type GalleryItem = {
  file: string;
  label: string;
  heading: string;
  description: string;
};

const DRAWINGS: GalleryItem[] = [
  {
    file: "p05-proposed-elevations-cad.webp",
    label: "Drawing 1 · P05 Rev A",
    heading: "Proposed architectural elevations",
    description: "P05 Revision A — proposed roof elevations with the 15.5m³ rear dormer volume and three front rooflights certified lawful under Classes B and C in 2019."
  },
  {
    file: "br-16-section-aa.webp",
    label: "Drawing 2 · BR-16",
    heading: "Building Regulations Section A–A",
    description: "2019 technical Section A–A showing specified roof/floor insulation (including a stated U-value of 0.19 W/m²K), resilient bars and double 12.5mm dBCheck acoustic lining, and fire-protected structural steelwork."
  },
  {
    file: "br-02-ground-floor.webp",
    label: "Drawing 3 · BR-02",
    heading: "Ground-floor Building Regulations drawing",
    description: "Open-plan ground floor indicating structural 203 × 203 UC beam interfaces, concrete padstones, pad foundations, FD30 fire doors, drainage and mechanical/electrical services coordination. Engineering design requires separate verification."
  },
  {
    file: "br-05-loft-floor.webp",
    label: "Drawing 4 · BR-05",
    heading: "Loft-floor Building Regulations drawing",
    description: "Master bedroom suite with en-suite and walk-in wardrobe; historical technical drawing identifying a 203 × 203 UC52 structural beam and mains-operated interlinked smoke detection along the protected escape route."
  },
  {
    file: "br-07-ground-first-plans.webp",
    label: "Drawing 5 · BR-07",
    heading: "Proposed ground and first-floor plans",
    description: "Coordinated floor layouts for the open-plan living areas and circulation, providing context for the technical structural and building services drawings."
  }
];

const VISUALS: GalleryItem[] = [
  { file: "3d-loft-suite-visual.webp", label: "3D visual 1", heading: "Loft suite design", description: "A visual study of sleeping, bathing and storage areas." },
  { file: "3d-loft-suite-reverse.webp", label: "3D visual 2", heading: "Loft interior, alternative view", description: "A second view of the proposed loft accommodation." },
  { file: "3d-open-plan-overview.webp", label: "3D visual 3", heading: "Open-plan layout", description: "An overview of the proposed living spaces." },
  { file: "3d-ground-floor-perspective.webp", label: "3D visual 4", heading: "Ground-floor perspective", description: "A design view of the reconfigured kitchen, dining and living areas." }
];

const PHOTOS: GalleryItem[] = [
  { file: "construction-loft-framing-01.webp", label: "Site photograph 1", heading: "Loft structure in progress", description: "Timber roof framing, structural supports and opening formation during construction." },
  { file: "construction-stairwell-02.webp", label: "Site photograph 2", heading: "Stairwell and roof construction", description: "On-site roof and upper-floor works before interior finishes." }
];

function Photograph({ item }: { item: GalleryItem }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-[#e8ddd8] bg-white">
      <div className="relative flex min-h-[220px] items-center justify-center bg-[#faf8f5] p-3 sm:p-4">
        <img src={BASE + item.file} alt={item.heading + " — Warbeck Road, Shepherd's Bush"} loading="lazy" className="block h-auto max-h-[360px] w-full object-contain" />
        <WarbeckWatermark inverse={item.file.startsWith("construction-")} />
      </div>
      <figcaption className="p-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#a9443f]">{item.label}</p>
        <p className="mt-1 text-sm font-semibold text-[#2c383a]">{item.heading}</p>
        <p className="mt-1 text-xs leading-5 text-[#697477]">{item.description}</p>
      </figcaption>
    </figure>
  );
}

export default function WarbeckTotalRefurbShowcase() {
  const [selected, setSelected] = useState(0);
  const drawing = DRAWINGS[selected];

  return (
    <div className="space-y-8">
      <section aria-labelledby="warbeck-signature" className="overflow-hidden rounded-[20px] border border-[#e2d6cf] bg-white">
        <div className="border-b border-[#eaded6] px-5 py-5 sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#a64b45]">Signature presentation · Planning evidence and architectural design</p>
          <h2 id="warbeck-signature" className="mt-2 text-[22px] font-semibold tracking-tight text-[#2a3538] sm:text-[28px]">Approved roof elevations and 3D design, clearly presented</h2>
          <p className="mt-2 max-w-3xl text-[13px] leading-7 text-[#617173]">The full P05 Rev A elevation stays visible beside a separate architectural 3D study. No drawing details are hidden behind a floating render.</p>
        </div>
        <div className="grid min-w-0 gap-4 bg-[#f8f6f2] p-4 sm:p-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,.7fr)]">
          <figure className="min-w-0 overflow-hidden rounded-xl border border-[#e5dad3] bg-white">
            <div className="relative flex min-h-[260px] items-center justify-center bg-white p-3 sm:min-h-[360px] sm:p-5">
              <img src={BASE + "p05-proposed-elevations-cad.webp"} alt="P05 Rev A approved rear roof elevation and 15.5 cubic metre dormer calculation, Warbeck Road Shepherd’s Bush" className="block h-auto max-h-[460px] w-full object-contain" loading="eager" />
              <WarbeckWatermark />
            </div>
            <figcaption className="border-t border-[#ebe4de] px-4 py-3 text-[12px] font-semibold leading-6 text-[#435558]">P05 Rev A · 2019 lawful rear roof extension · 15.5m³ dormer · three front rooflights</figcaption>
          </figure>
          <figure className="min-w-0 overflow-hidden rounded-xl border border-[#e5dad3] bg-white">
            <div className="relative flex min-h-[250px] items-center justify-center bg-[#f9f7f4] p-3 sm:min-h-[360px] sm:p-4">
              <img src={BASE + "3d-loft-suite-visual.webp"} alt="Original architectural 3D design visual for the Warbeck Road total refurbishment" className="block h-auto max-h-[430px] w-full object-contain" loading="eager" />
              <WarbeckWatermark />
            </div>
            <figcaption className="border-t border-[#ebe4de] px-4 py-3 text-[12px] font-semibold leading-6 text-[#435558]">Architectural 3D design study · Illustrative proposal, not a construction photograph</figcaption>
          </figure>
        </div>
        <p className="px-5 pb-5 pt-1 text-[11px] leading-6 text-[#6a7b7d] sm:px-7">The Hammersmith &amp; Fulham Certificate of Lawfulness applies to the rear dormer and three front rooflights only, not the separate Building Regulations package.</p>
      </section>

      <section className="overflow-hidden rounded-[20px] border border-[#e8dcd5] bg-white">
        <div className="bg-[#fcf5f1] px-5 py-6 sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[.14em] text-[#a9443f]">Whole-house refurbishment · Rear dormer loft conversion</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#2c383a]">Planning and Building Regulations drawing services</h3>
          <p className="mt-3 text-[14px] leading-7 text-[#566468]">WEDRAWPLANS prepared the measured survey and architectural proposals for this Shepherd's Bush home, including a rear dormer and three front rooflights supported by a granted Certificate of Lawfulness. A separate Building Regulations technical package coordinated the wider refurbishment, structural alterations, services and fire precautions.</p>
        </div>
        <div className="border-t border-[#e6dcd5] bg-[#fbf8f4] px-5 py-5 sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#a9443f]">Certificate of Lawfulness Granted — Roof Works</p>
          <h4 className="mt-1 text-[17px] font-semibold leading-7 text-[#2c383a]">London Borough of Hammersmith &amp; Fulham</h4>
          <p className="mt-1 text-[13px] text-[#59696b]">Ref. 2019/01824/CLP · 12 August 2019 · Rear roof extension and three front rooflights</p>
          <a href={COUNCIL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center rounded-full border border-[#d9bbb4] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#91443e] hover:bg-[#fff1ed]">View the official council record ↗</a>
          <p className="mt-3 text-[11px] leading-5 text-[#6b7779]">The certificate covers the specified roof works, not the complete refurbishment or Building Regulations sign-off.</p>
        </div>
      </section>

      <section aria-labelledby="warbeck-sheet-gallery" className="overflow-hidden rounded-[20px] border border-[#e8ddd8] bg-white shadow-[0_10px_25px_rgba(22,68,70,.045)]">
        <header className="border-b border-[#e8ddd8] bg-[#fbf5f2] px-4 py-5 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#a9443f]">Genuine WEDRAWPLANS architectural drawings</p>
          <h3 id="warbeck-sheet-gallery" className="mt-1.5 text-[23px] font-semibold text-[#2c383a] sm:text-[29px]">Architectural Drawings — Project Gallery</h3>
          <p className="mt-2 max-w-2xl text-[13px] leading-6 text-[#647476]">Browse the planning and Building Regulations drawings in a clean, single-sheet gallery with thumbnails, following our Cranbourne Drive presentation. Each supplied image is displayed at its complete available proportions without additional page cropping or overlays.</p>
        </header>
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 pb-2 pt-4 sm:px-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#a9443f]">{drawing.label} · {selected + 1} of {DRAWINGS.length}</p>
            <h4 className="mt-1 text-[15px] font-semibold text-[#2c383a]">{drawing.heading}</h4>
          </div>
          <div className="flex gap-2">
            <button type="button" aria-label="Previous architectural drawing" onClick={() => setSelected((s) => (s + DRAWINGS.length - 1) % DRAWINGS.length)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dec9c2] bg-white text-lg text-[#91443e] hover:bg-[#fbf5f2]">‹</button>
            <button type="button" aria-label="Next architectural drawing" onClick={() => setSelected((s) => (s + 1) % DRAWINGS.length)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dec9c2] bg-white text-lg text-[#91443e] hover:bg-[#fbf5f2]">›</button>
          </div>
        </div>
        <figure className="mx-3 mb-3 overflow-hidden rounded-xl border border-[#ebe4de] bg-[#faf8f5] p-3 sm:mx-5 sm:p-5">
          <div className="relative">
            <img key={drawing.file} src={BASE + drawing.file} alt={drawing.heading + " — WEDRAWPLANS Warbeck Road project drawing"} className="mx-auto block h-auto max-h-[520px] w-full object-contain" />
            <WarbeckWatermark />
          </div>
          <figcaption className="mt-3 text-[12px] leading-6 text-[#697477]">{drawing.description}</figcaption>
        </figure>
        <div className="border-t border-[#ebe4de] px-4 py-4 sm:px-6">
          <p className="mb-3 text-[11px] font-semibold text-[#697477]">Select a drawing:</p>
          <div className="flex gap-3 overflow-x-auto pb-2" aria-label="Architectural drawing thumbnails">
            {DRAWINGS.map((item, index) => (
              <button key={item.file} type="button" onClick={() => setSelected(index)} aria-label={"View " + item.heading} aria-current={selected === index ? "true" : undefined} className={"w-[110px] shrink-0 rounded-xl border p-2 transition sm:w-[126px] " + (selected === index ? "border-[#a9443f] bg-[#fff1ed]" : "border-[#e8dcd5] bg-white hover:border-[#ceb8b2]")}>
                <span className="relative block">
                  <img src={BASE + item.file} alt="" loading="lazy" className="block h-[76px] w-full object-contain sm:h-[90px]" />
                  <WarbeckWatermark small />
                </span>
                <span className="mt-2 block text-[10px] font-semibold text-[#566468]">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="warbeck-3d-gallery">
        <h3 id="warbeck-3d-gallery" className="text-[23px] font-semibold text-[#2c383a] sm:text-[29px]">3D Architectural Visualisations</h3>
        <p className="mb-5 mt-2 text-[13px] leading-6 text-[#697477]">Original WEDRAWPLANS architectural 3D views showing the intended master suite, en-suite, storage and open-plan family areas. Visualisations illustrate design proposals, not completed finishes.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {VISUALS.map((item) => <Photograph item={item} key={item.file} />)}
        </div>
      </section>

      <section aria-labelledby="warbeck-site-photos">
        <h3 id="warbeck-site-photos" className="text-[23px] font-semibold text-[#2c383a] sm:text-[29px]">Real Construction Photographs</h3>
        <p className="mb-5 mt-2 text-[13px] leading-6 text-[#697477]">Two original site progress photographs: exposed roof joists and timber dormer framing, followed by the new stairwell opening and stud-partition works. These are construction progress images, not final completion photographs.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {PHOTOS.map((item) => <Photograph item={item} key={item.file} />)}
        </div>
      </section>

      <section className="rounded-[18px] border border-[#e8ddd8] bg-[#fbf5f2] p-5 sm:p-7">
        <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#a9443f]">WEDRAWPLANS fixed-fee drawing services</p>
        <h3 className="mt-2 text-xl font-semibold text-[#2c383a]">Planning and Building Regulations drawings for your home</h3>
        <p className="mt-3 text-[13px] leading-7 text-[#566468]">We prepare coordinated planning and Building Regulations drawing packages for loft conversions, extensions and wider home alterations across Shepherd's Bush and West London.</p>
        <a href="#case-study-quote" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#a9443f] px-6 py-3 text-center text-[13px] font-bold text-white hover:bg-[#87332f]">Request your fixed-fee drawing quote →</a>
      </section>
    </div>
  );
}
