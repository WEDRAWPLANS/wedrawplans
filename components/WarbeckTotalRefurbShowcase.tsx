import { useEffect, useState } from "react";

const BASE = "/images/case-studies/warbeck-road/";
const COUNCIL = "https://property.lbhf.gov.uk/NECSWS/ES/Presentation/Planning/OnlinePlanning/OnlinePlanningOverview?applicationNumber=2019%2F01824%2FCLP&guid=84f6c954-95ad-4217-af79-803a51dad2e7#";

type Media = {
  file: string;
  alt: string;
  caption: string;
  eyebrow: string;
  aspect?: string;
  feature?: boolean;
};

function ProjectImage({ file, alt, caption, eyebrow, aspect = "aspect-[4/3]", feature = false }: Media) {
  const [loaded, setLoaded] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const url = BASE + file;
  useEffect(() => {
    if (!lightbox) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(false);
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [lightbox]);
  return (
    <figure className="min-w-0 overflow-hidden rounded-[18px] border border-[#d6e5df] bg-white shadow-[0_10px_28px_rgba(35,66,63,.06)]">
      <div className="flex items-center justify-between gap-3 border-b border-[#e4ece7] px-4 py-3 sm:px-5">
        <span className="text-[10px] font-bold uppercase tracking-[.13em] text-[#247168]">{eyebrow}</span>
        {loaded ? <span className="text-[11px] font-semibold text-[#557976]">Click to enlarge</span> : null}
      </div>
      <div className={"relative overflow-hidden bg-[#f4f7f4] " + aspect}>
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(130deg,#f5f9f6,#e8f2ee)] px-6 text-center text-[12px] font-medium tracking-[.05em] text-[#66867f]">{eyebrow}</div>
        <img
          src={url}
          alt={alt}
          loading="lazy"
          className={"absolute inset-0 z-10 h-full w-full " + (feature ? "object-cover" : "object-contain")}
          onLoad={() => setLoaded(true)}
          onError={(event) => { event.currentTarget.style.display = "none"; setLoaded(false); }}
        />
        {loaded ? <button type="button" aria-label={"Enlarge " + eyebrow} onClick={() => setLightbox(true)} className="absolute inset-0 z-20 cursor-zoom-in focus-visible:outline-4 focus-visible:outline-[#277b80]"><span className="absolute bottom-3 right-3 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#286e70] shadow">Enlarge image</span></button> : null}
      </div>
      <figcaption className="px-4 py-3.5 text-[12px] leading-6 text-[#597275] sm:px-5">{caption}</figcaption>
      {lightbox && loaded ? (
        <div role="dialog" aria-modal="true" aria-label={"Enlarged " + eyebrow} className="fixed inset-0 z-[110] flex items-center justify-center bg-[#0c2021]/95 p-3 sm:p-6" onClick={() => setLightbox(false)}>
          <button type="button" onClick={() => setLightbox(false)} className="absolute right-4 top-3 rounded-full bg-white px-5 py-2 text-[13px] font-bold text-[#1c4143]">Close ×</button>
          <img src={url} alt={alt} className="max-h-[87vh] max-w-[96vw] object-contain" onClick={(event) => event.stopPropagation()} />
        </div>
      ) : null}
    </figure>
  );
}

const FACTS = [
  ["Location", "Warbeck Road · Shepherd's Bush W12"],
  ["Local authority", "London Borough of Hammersmith & Fulham"],
  ["Certificate", "2019/01824/CLP · 12 August 2019"],
  ["Planning route", "Permitted development · Class B and Class C"],
  ["Design", "Rear dormer · 3 front rooflights · 15.5m³"],
  ["Technical service", "Full-house Building Regulations drawing package"],
];

export default function WarbeckTotalRefurbShowcase() {
  return (
    <div className="space-y-9">
      <section aria-labelledby="warbeck-project-intro" className="overflow-hidden rounded-[22px] border border-[#d5e4de] bg-white shadow-[0_12px_42px_rgba(22,62,61,.065)]">
        <div className="bg-[#eef6f1] px-5 py-6 sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#287568]">Total Refurb · Shepherd's Bush · West London</p>
          <h3 id="warbeck-project-intro" className="mt-2 text-[25px] font-semibold tracking-tight text-[#253f43] sm:text-[31px]">One coordinated planning and technical design service</h3>
          <p className="mt-3 text-[14px] leading-7 text-[#4c686a]">A rear dormer loft conversion and comprehensive house refurbishment, combining a granted Certificate of Lawfulness with detailed Building Regulations drawings for structural remodelling, fire protection, insulation and services.</p>
        </div>
        <div className="grid border-t border-[#dbe9e2] sm:grid-cols-2">
          {FACTS.map(([label, value]) => <div key={label} className="border-b border-[#e5eee9] px-5 py-3.5 sm:px-7"><dt className="text-[10px] font-bold uppercase tracking-[.12em] text-[#69918a]">{label}</dt><dd className="mt-1 text-[13px] font-semibold leading-6 text-[#2f5053]">{value}</dd></div>)}
        </div>
        <div className="p-5 sm:p-7">
          <a href={COUNCIL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#276e75] px-5 py-3 text-center text-[13px] font-bold text-white hover:bg-[#1c565d] sm:w-auto">
            View Official Council Approval Record (Ref: 2019/01824/CLP) ↗
          </a>
          <p className="mt-3 text-[11px] leading-5 text-[#61797a]">Hammersmith &amp; Fulham issued a Certificate of Lawfulness on 12 August 2019 for the rear roof extension and three front rooflights. The certificate is separate from Building Regulations approval.</p>
        </div>
      </section>

      <section aria-labelledby="warbeck-visual-concept">
        <div className="mb-4">
          <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#287568]">Drawing to design</p>
          <h3 id="warbeck-visual-concept" className="mt-2 text-2xl font-semibold text-[#284c4e] sm:text-[29px]">From approved elevations to the architectural vision</h3>
          <p className="mt-3 text-[13px] leading-7 text-[#617679]">A combined view of proposed planning elevation P05 Rev A and a three-dimensional interior design study illustrates how technical drawings and spatial design are developed together.</p>
        </div>
        <ProjectImage file="p05-3d-composite.webp" eyebrow="WEDRAWPLANS · 2D + 3D concept" alt="Approved rear and front elevations layered with a WEDRAWPLANS three-dimensional interior layout" caption="Approved elevation geometry alongside the proposed interior design study. Illustration of design intent, not a photograph of completed finishes." aspect="aspect-[16/9]" feature />
      </section>

      <section aria-labelledby="warbeck-regulations" className="space-y-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#287568]">Genuine architectural technical drawings</p>
          <h3 id="warbeck-regulations" className="mt-2 text-2xl font-semibold text-[#284c4e] sm:text-[29px]">Building Regulations drawings &amp; structural coordination</h3>
          <p className="mt-3 text-[13px] leading-7 text-[#617679]">The drawings extend beyond planning elevations, showing construction build-ups, thermal performance, fire protection, acoustic measures, structural interfaces and services. The examples below are from the original WEDRAWPLANS technical package; the drawings themselves do not establish a Building Control completion certificate.</p>
        </div>
        <ProjectImage file="br-16-section-aa.webp" eyebrow="Drawing 1 · BR-16 · Section A-A" alt="WEDRAWPLANS technical section through the full building and loft showing roof insulation, protected steelwork, floor build-ups and stairs" caption="Section A-A: roof and ground-floor insulation design targets of 0.19 W/m²K, acoustic floor separation, fire-protected steelwork and stair integration. Original project technical detailing." aspect="aspect-[16/11]" />
        <div className="grid gap-4 sm:grid-cols-2">
          <ProjectImage file="br-02-ground-floor.webp" eyebrow="Drawing 2 · BR-02" alt="Ground-floor WEDRAWPLANS services and structural coordination drawing for open-plan kitchen and living room" caption="Ground-floor services: open-plan kitchen, living and dining arrangement, structural interfaces, drainage, lighting and detection positions." />
          <ProjectImage file="br-05-loft-floor.webp" eyebrow="Drawing 3 · BR-05" alt="Loft-level Building Regulations services drawing showing bedroom en-suite and wardrobe arrangements" caption="Loft-level services: bedroom suite, en-suite, wardrobe and protected escape/service provisions." />
        </div>
        <ProjectImage file="br-07-ground-first-plans.webp" eyebrow="Drawing 4 · BR-07" alt="Ground and first-floor proposed layouts with steel supports, wall removals and bedroom arrangements" caption="Whole-house coordination: new ground-floor openings and reorganised first-floor accommodation." aspect="aspect-[16/10]" />
      </section>

      <section aria-labelledby="warbeck-site">
        <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#287568]">Built on site</p>
        <h3 id="warbeck-site" className="mt-2 text-2xl font-semibold text-[#284c4e] sm:text-[29px]">From the drawing board to construction</h3>
        <p className="mb-5 mt-3 text-[13px] leading-7 text-[#617679]">Original site photography documents the loft structure as the new floor, roof framing, partitions and opening arrangements take shape. These are construction-progress images, not finished-room photographs.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <ProjectImage file="construction-loft-framing-01.webp" eyebrow="Construction 01" alt="Warbeck Road loft construction showing new timber roof framing, stud partitions and roof opening" caption="Dormer and internal framing in progress, with roof structure, partitions and window opening visible." />
          <ProjectImage file="construction-stairwell-02.webp" eyebrow="Construction 02" alt="Warbeck Road loft conversion during construction, exposing timber roof joists and steelwork" caption="Timber joists, roof construction and upper-floor works before internal finishes." />
        </div>
      </section>

      <section aria-labelledby="warbeck-design-spaces">
        <h3 id="warbeck-design-spaces" className="text-2xl font-semibold text-[#284c4e] sm:text-[29px]">Space planning and three-dimensional design</h3>
        <p className="mb-5 mt-3 text-[13px] leading-7 text-[#617679]">Design studies communicate the proposed bedroom suite, en-suite and walk-in wardrobe, alongside the reconfigured ground-floor living, kitchen and dining spaces.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <ProjectImage file="3d-loft-suite-visual.webp" eyebrow="3D view 1 · Loft suite" alt="WEDRAWPLANS three-dimensional loft suite showing bedroom en-suite and walk-in wardrobe" caption="Loft accommodation designed around practical sleeping, bathing and storage zones." />
          <ProjectImage file="3d-ground-floor-perspective.webp" eyebrow="3D view 2 · Living spaces" alt="Three-dimensional layout showing new kitchen dining living areas and rear garden connection" caption="Open-plan living concept with kitchen, dining and rear garden connection." />
        </div>
      </section>

      <section className="rounded-[19px] border border-[#d6e7de] bg-[#edf6f1] p-5 sm:p-7" aria-labelledby="warbeck-combined-service">
        <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#276d65]">Planning + Building Regulations</p>
        <h3 id="warbeck-combined-service" className="mt-2 text-2xl font-semibold text-[#284c4e]">One joined-up approach for your home</h3>
        <p className="mt-3 text-[13px] leading-7 text-[#526d70]">A coordinated architectural drawing package helps connect the council approval route with the technical detail builders need to price and plan the work. WEDRAWPLANS prepared the rear dormer lawfulness submission and a separate Building Regulations package addressing the wider refurbishment and structural alterations. This approach helps clarify design decisions and reduce avoidable coordination questions on site.</p>
        <p className="mt-4 text-[12px] leading-6 text-[#597274]">Serving homeowners in Shepherd's Bush, Hammersmith, Chiswick, Acton, Ealing, Notting Hill, Holland Park, Kensington, Chelsea, Richmond and Kew.</p>
        <a href="#case-study-quote" className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#277985] px-6 py-3 text-center text-[13px] font-bold text-white hover:bg-[#1c5e69] sm:w-auto">Request a combined Planning + Building Regulations quote →</a>
      </section>
    </div>
  );
}
