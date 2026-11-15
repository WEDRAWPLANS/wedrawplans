import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const BASE = "/images/case-studies/the-hyde-colindale-major-residential-development/";
const COUNCIL = "https://publicaccess.barnet.gov.uk/online-applications/applicationDetails.do?activeTab=documents&keyVal=OKT5JEJIMAU00";

const slides = [
  {
    file: "hyde-16-visuals.svg",
    label: "01 / 05",
    title: "The Hyde — architectural street perspective",
    description: "Original 3D visualisation presenting the street-facing form, glazing and urban setting.",
    alt: "WEDRAWPLANS three-dimensional architectural perspective of the six-storey mixed-use design at The Hyde, Colindale",
    type: "Architectural CGI",
  },
  {
    file: "hyde-14-visuals.svg",
    label: "02 / 05",
    title: "Evening street-level architectural visualisation",
    description: "A closer view of material treatments, entrance design, balconies and the relationship to street level.",
    alt: "Original WEDRAWPLANS evening architectural CGI showing the facade, entrance and glazed balconies at The Hyde",
    type: "Architectural CGI",
  },
  {
    file: "hyde-15-visuals.svg",
    label: "03 / 05",
    title: "Terraces, roof form and the rear architectural concept",
    description: "An original design perspective illustrating the stepped building form and outdoor amenity areas.",
    alt: "Original WEDRAWPLANS architectural 3D design of the rear terraces, landscaping and glazing at Halt Parade",
    type: "Architectural CGI",
  },
  {
    file: "hyde-01-design.svg",
    label: "04 / 05",
    title: "Development scale and streetscape",
    description: "A full architectural sheet showing how the proposal relates to neighbouring buildings.",
    alt: "Complete WEDRAWPLANS front elevation architectural study of The Hyde with its surrounding townscape",
    type: "Architectural drawing",
  },
  {
    file: "hyde-04-design.svg",
    label: "05 / 05",
    title: "Planning design detail — sections, daylight and outlook",
    description: "Architectural sections and apartment outlook studies demonstrating detailed design consideration.",
    alt: "WEDRAWPLANS architectural planning sections and outlook studies for the proposed residential development",
    type: "Architectural drawing",
  },
] as const;

export default function HydeDeveloperShowcase() {
  const [active, setActive] = useState(0);
  const [enlarged, setEnlarged] = useState(false);
  const touchX = useRef<number | null>(null);
  const current = slides[active] || slides[0];
  const go = (step: number) => setActive((index) => (index + step + slides.length) % slides.length);

  useEffect(() => {
    if (!enlarged) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setEnlarged(false);
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [enlarged]);

  return (
    <section id="hyde-showcase" aria-labelledby="hyde-developer-showcase-heading" className="border-y border-[#dceae4] bg-[#f4f8f5]">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[.18em] text-[#246d60]">
            WEDRAWPLANS · PLANNING APPROVAL GRANTED · BARNET 2017
          </p>
          <h2 id="hyde-developer-showcase-heading" className="mt-3 text-[27px] font-extrabold leading-tight tracking-tight text-[#24484d] sm:text-[34px] lg:text-[40px]">
            The Hyde, Colindale — New-build planning experience for landowners and developers
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-7 text-[#4d686a] sm:text-[17px]">
            A six-storey mixed-use development at 1–5 Halt Parade, London NW9 5AH.
            Barnet Council granted planning permission in 2017 for 18 self-contained flats
            and 40 m² of B1 commercial floorspace, with associated parking, refuse and landscaping.
            Explore original WEDRAWPLANS design visuals and architectural drawing studies.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-[1160px] overflow-hidden rounded-[17px] border border-[#d8e6de] bg-white shadow-[0_18px_50px_rgba(35,65,59,.10)]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e1eae5] px-4 py-3 sm:px-5">
            <span className="text-[11px] font-bold uppercase tracking-[.11em] text-[#38796b]">{current.type}</span>
            <span className="text-[12px] font-bold tabular-nums text-[#44666a]">{current.label}</span>
          </div>

          <div className="relative aspect-[1360/962] w-full select-none overflow-hidden bg-white"
            role="region" aria-label="Five original architectural images and drawings from The Hyde"
            aria-roledescription="carousel"
            onTouchStart={(event) => { touchX.current = event.touches[0]?.clientX ?? null; }}
            onTouchEnd={(event) => {
              if (touchX.current !== null) {
                const dx = (event.changedTouches[0]?.clientX ?? 0) - touchX.current;
                if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
              }
              touchX.current = null;
            }}>
            <button type="button" className="absolute inset-0 block w-full cursor-zoom-in" onClick={() => setEnlarged(true)} aria-label={"View full-size architectural image: " + current.title}>
              <Image src={BASE + current.file} alt={current.alt} fill loading="lazy"
                sizes="(max-width: 1280px) 100vw, 1160px"
                className="pointer-events-none select-none object-contain" unoptimized draggable={false}/>
            </button>
            <button type="button" onClick={() => go(-1)} aria-label="Previous architectural image"
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#d7e5df] bg-white/95 text-[23px] text-[#25555c] shadow-md hover:bg-[#f0f8f4] sm:left-4 sm:h-12 sm:w-12">‹</button>
            <button type="button" onClick={() => go(1)} aria-label="Next architectural image"
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#d7e5df] bg-white/95 text-[23px] text-[#25555c] shadow-md hover:bg-[#f0f8f4] sm:right-4 sm:h-12 sm:w-12">›</button>
          </div>

          <div className="flex flex-col gap-4 border-t border-[#e1eae5] bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="min-w-0">
              <h3 className="text-[16px] font-bold text-[#274d52] sm:text-[20px]">{current.title}</h3>
              <p className="mt-1 max-w-3xl text-[12px] leading-5 text-[#657c7e] sm:text-[13px]">{current.description}</p>
            </div>
            <button type="button" onClick={() => setEnlarged(true)} className="shrink-0 self-start rounded-full border border-[#bad3c8] px-4 py-2 text-[12px] font-semibold text-[#286b62] hover:bg-[#edf7f1]">Enlarge drawing ↗</button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 border-t border-[#edf1ee] px-4 py-3" aria-label="Select a showcase slide">
            {slides.map((slide, index) => (
              <button key={slide.file} type="button" onClick={() => setActive(index)}
                aria-label={"View image " + (index + 1) + ": " + slide.title}
                aria-current={index === active ? "true" : undefined}
                className={"h-2.5 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-[#399e92] " +
                  (index === active ? "w-8 bg-[#307c72]" : "w-2.5 bg-[#bfd4ce] hover:bg-[#85b7a9]")}/>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-[1160px] rounded-[17px] border border-[#cfe5d9] bg-white px-5 py-6 sm:px-8 sm:py-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#e2f3e9] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.10em] text-[#247255]">Planning approved in 2017</span>
            <span className="text-[12px] font-semibold text-[#486b6c]">London Borough of Barnet · 17/0660/FUL</span>
          </div>
          <h3 className="mt-3 text-[22px] font-bold text-[#244b4f] sm:text-[26px]">
            Developer-grade planning drawings and architectural design, backed by real council evidence
          </h3>
          <p className="mt-3 max-w-5xl text-[14px] leading-7 text-[#526e70] sm:text-[15px]">
            The Hyde demonstrates WEDRAWPLANS' experience with the design challenges of a multi-unit
            new-build site: the building's scale and relationship to neighbouring properties,
            residential layouts, private amenity, architectural appearance, outlook and privacy.
            Our original design studies help explain how such matters can be communicated clearly
            through plans, elevations, sections and 3D architectural visualisations.
          </p>
          <p className="mt-3 max-w-5xl text-[14px] leading-7 text-[#526e70] sm:text-[15px]">
            Own a plot, commercial site or land with development potential in London or around the M25?
            WEDRAWPLANS can help prospective developers and landowners assess a concept, develop a
            planning-led design, prepare coordinated new-build drawings and supporting statements,
            and address relevant local planning requirements before and during an application.
            Services and consultant input are agreed for each site. Planning permission is subject to
            council assessment and cannot be guaranteed.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={COUNCIL} target="_blank" rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#266d77] px-5 py-3 text-[13px] font-bold text-white hover:bg-[#1b5760]">
              View official Barnet planning documents ↗
            </a>
            <Link href="/case-studies/the-hyde-colindale-major-residential-development"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#b9d3ca] px-5 py-3 text-[13px] font-bold text-[#246c6e] hover:bg-[#eef7f3]">
              Explore the full Hyde case study
            </Link>
            <a href="#new-build-quote" className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#b9d3ca] px-5 py-3 text-[13px] font-bold text-[#246c6e] hover:bg-[#eef7f3]">
              Discuss your development site
            </a>
          </div>
          <p className="mt-4 text-[11px] leading-5 text-[#758788]">
            Images are original architectural design and historical development studies, not completed-building photography.
            Some studies are from earlier design iterations and are not represented as the specific approved 18-flat plan set.
            Planning approval evidence refers to Barnet application 17/0660/FUL, granted 21 August 2017.
          </p>
        </div>
      </div>

      {enlarged && (
        <div role="dialog" aria-modal="true" aria-label={"Enlarged architectural image: " + current.title}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#122529]/95 p-3 sm:p-6"
          onClick={() => setEnlarged(false)}>
          <button type="button" onClick={() => setEnlarged(false)}
            className="absolute right-4 top-4 z-20 rounded-full bg-white px-4 py-2 text-[12px] font-bold text-[#285861]">Close ✕</button>
          <div className="relative aspect-[1360/962] w-full max-w-[min(95vw,1500px)] max-h-[82vh]"
            onClick={(event) => event.stopPropagation()}>
            <Image src={BASE + current.file} alt={current.alt} fill sizes="95vw" unoptimized
              className="pointer-events-none select-none object-contain" draggable={false}/>
          </div>
          <div className="mt-3 flex items-center gap-5 text-[13px] font-semibold text-white" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => go(-1)} className="rounded-full border border-white/40 px-4 py-2">‹ Previous</button>
            <span>{active + 1} of {slides.length}</span>
            <button type="button" onClick={() => go(1)} className="rounded-full border border-white/40 px-4 py-2">Next ›</button>
          </div>
        </div>
      )}
    </section>
  );
}
