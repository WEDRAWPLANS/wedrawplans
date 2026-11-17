import { useState } from "react";

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
    file: "br-07-ground-first-plans.webp",
    label: "Drawing 1 · BR-07",
    heading: "Proposed ground and first-floor plans",
    description: "Coordinated floor plans illustrating the reconfigured ground-floor living spaces, structural openings and first-floor accommodation."
  },
  {
    file: "p05-proposed-elevations-cad.webp",
    label: "Drawing 2 · P05 Rev A",
    heading: "Proposed architectural elevations",
    description: "The proposed rear dormer and front rooflight elevations associated with the Certificate of Lawfulness."
  },
  {
    file: "br-16-section-aa.webp",
    label: "Drawing 3 · BR-16",
    heading: "Building Regulations Section A–A",
    description: "Construction section showing thermal insulation, structural interfaces, acoustic separation and fire protection."
  },
  {
    file: "br-02-ground-floor.webp",
    label: "Drawing 4 · BR-02",
    heading: "Ground-floor Building Regulations drawing",
    description: "The services and structural coordination for the reconfigured ground floor."
  },
  {
    file: "br-05-loft-floor.webp",
    label: "Drawing 5 · BR-05",
    heading: "Loft-floor Building Regulations drawing",
    description: "The bedroom suite, en-suite, wardrobe, services and escape provisions."
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
    <figure className="overflow-hidden rounded-xl border border-[#dce7e2] bg-white">
      <div className="flex min-h-[220px] items-center justify-center bg-[#f7f9f7] p-3 sm:p-4">
        <img src={BASE + item.file} alt={item.heading + " — Warbeck Road, Shepherd's Bush"} loading="lazy" className="block h-auto max-h-[360px] w-full object-contain" />
      </div>
      <figcaption className="p-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#2e7975]">{item.label}</p>
        <p className="mt-1 text-sm font-semibold text-[#2a4b4d]">{item.heading}</p>
        <p className="mt-1 text-xs leading-5 text-[#657b7c]">{item.description}</p>
      </figcaption>
    </figure>
  );
}

export default function WarbeckTotalRefurbShowcase() {
  const [selected, setSelected] = useState(0);
  const drawing = DRAWINGS[selected];

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[20px] border border-[#d8e6e0] bg-white">
        <div className="bg-[#eef6f1] px-5 py-6 sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[.14em] text-[#26756c]">Whole-house refurbishment · Rear dormer loft conversion</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#25474a]">Planning and Building Regulations drawing services</h3>
          <p className="mt-3 text-[14px] leading-7 text-[#4e686b]">A coordinated set of architectural drawings for a Shepherd's Bush home: a rear dormer and three front rooflights supported by a granted Certificate of Lawfulness, plus separate Building Regulations drawings for the wider refurbishment and structural alterations.</p>
        </div>
        <div className="border-t border-[#d5e8dd] bg-[#f7faf7] px-5 py-5 sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#2b7966]">Certificate of Lawfulness Granted — Roof Works</p>
          <h4 className="mt-1 text-[17px] font-semibold leading-7 text-[#264d49]">London Borough of Hammersmith &amp; Fulham</h4>
          <p className="mt-1 text-[13px] text-[#4c6a69]">Ref. 2019/01824/CLP · 12 August 2019 · Rear roof extension and three front rooflights</p>
          <a href={COUNCIL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center rounded-full border border-[#9ecbc1] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#236b68] hover:bg-[#eaf5ef]">View the official council record ↗</a>
          <p className="mt-3 text-[11px] leading-5 text-[#647b78]">The certificate covers the specified roof works, not the complete refurbishment or Building Regulations sign-off.</p>
        </div>
      </section>

      <section aria-labelledby="warbeck-sheet-gallery" className="overflow-hidden rounded-[20px] border border-[#d9e7e2] bg-white shadow-[0_10px_25px_rgba(22,68,70,.045)]">
        <header className="border-b border-[#dfe9e3] bg-[#edf6f1] px-4 py-5 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#a36a63]">Genuine WEDRAWPLANS architectural drawings</p>
          <h3 id="warbeck-sheet-gallery" className="mt-1.5 text-[23px] font-semibold text-[#24484b] sm:text-[29px]">Architectural Drawings — Project Gallery</h3>
          <p className="mt-2 max-w-2xl text-[13px] leading-6 text-[#567477]">Browse the planning and Building Regulations drawings in a clean, single-sheet gallery with thumbnails, following our Cranbourne Drive presentation. Each supplied image is displayed at its complete available proportions without additional page cropping or overlays.</p>
        </header>
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 pb-2 pt-4 sm:px-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#34766c]">{drawing.label} · {selected + 1} of {DRAWINGS.length}</p>
            <h4 className="mt-1 text-[15px] font-semibold text-[#2c4f52]">{drawing.heading}</h4>
          </div>
          <div className="flex gap-2">
            <button type="button" aria-label="Previous architectural drawing" onClick={() => setSelected((s) => (s + DRAWINGS.length - 1) % DRAWINGS.length)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bdd6ce] bg-white text-lg text-[#245d63] hover:bg-[#edf6f1]">‹</button>
            <button type="button" aria-label="Next architectural drawing" onClick={() => setSelected((s) => (s + 1) % DRAWINGS.length)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bdd6ce] bg-white text-lg text-[#245d63] hover:bg-[#edf6f1]">›</button>
          </div>
        </div>
        <figure className="mx-3 mb-3 overflow-hidden rounded-xl border border-[#e3ebe6] bg-[#fafbfa] p-3 sm:mx-5 sm:p-5">
          <img key={drawing.file} src={BASE + drawing.file} alt={drawing.heading + " — WEDRAWPLANS Warbeck Road project drawing"} className="mx-auto block h-auto max-h-[520px] w-full object-contain" />
          <figcaption className="mt-3 text-[12px] leading-6 text-[#627a79]">{drawing.description}</figcaption>
        </figure>
        <div className="border-t border-[#e1ebe6] px-4 py-4 sm:px-6">
          <p className="mb-3 text-[11px] font-semibold text-[#4a6c6d]">Select a drawing:</p>
          <div className="flex gap-3 overflow-x-auto pb-2" aria-label="Architectural drawing thumbnails">
            {DRAWINGS.map((item, index) => (
              <button key={item.file} type="button" onClick={() => setSelected(index)} aria-label={"View " + item.heading} aria-current={selected === index ? "true" : undefined} className={"w-[110px] shrink-0 rounded-xl border p-2 transition sm:w-[126px] " + (selected === index ? "border-[#34988f] bg-[#eaf5f0]" : "border-[#d8e6df] bg-white hover:border-[#a0c8bd]")}>
                <img src={BASE + item.file} alt="" loading="lazy" className="block h-[76px] w-full object-contain sm:h-[90px]" />
                <span className="mt-2 block text-[10px] font-semibold text-[#44696b]">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="warbeck-3d-gallery">
        <h3 id="warbeck-3d-gallery" className="text-[23px] font-semibold text-[#284c4e] sm:text-[29px]">3D Architectural Visualisations</h3>
        <p className="mb-5 mt-2 text-[13px] leading-6 text-[#627a79]">Separate design illustrations for the loft suite and reconfigured living spaces. These are design visualisations, not construction photographs.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {VISUALS.map((item) => <Photograph item={item} key={item.file} />)}
        </div>
      </section>

      <section aria-labelledby="warbeck-site-photos">
        <h3 id="warbeck-site-photos" className="text-[23px] font-semibold text-[#284c4e] sm:text-[29px]">Real Construction Photographs</h3>
        <p className="mb-5 mt-2 text-[13px] leading-6 text-[#627a79]">Genuine photographs taken during the works. Displayed at their natural image proportions without a separate enlarge-image control.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {PHOTOS.map((item) => <Photograph item={item} key={item.file} />)}
        </div>
      </section>

      <section className="rounded-[18px] border border-[#d6e7de] bg-[#edf6f1] p-5 sm:p-7">
        <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#287568]">WEDRAWPLANS fixed-fee drawing services</p>
        <h3 className="mt-2 text-xl font-semibold text-[#284c4e]">Planning and Building Regulations drawings for your home</h3>
        <p className="mt-3 text-[13px] leading-7 text-[#526d70]">We prepare coordinated planning and Building Regulations drawing packages for loft conversions, extensions and wider home alterations across Shepherd's Bush and West London.</p>
        <a href="#case-study-quote" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#277985] px-6 py-3 text-center text-[13px] font-bold text-white hover:bg-[#1c5e69]">Request your fixed-fee drawing quote →</a>
      </section>
    </div>
  );
}
