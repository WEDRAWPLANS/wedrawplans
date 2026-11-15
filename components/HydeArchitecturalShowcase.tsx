import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Sheet = { file: string; title: string; source: string; alt: string };
type Collection = { key: string; tab: string; title: string; description: string; sheets: Sheet[] };

const BASE = "/images/case-studies/the-hyde-colindale-major-residential-development/";

const collections: Collection[] = [
  {
    key: "design",
    tab: "Original design sheets",
    title: "Original architectural studies",
    description: "Five full-size WEDRAWPLANS drawing sheets, including the front elevation, 3D apartment layouts and privacy/outlook studies.",
    sheets: [
      { file: "hyde-01-design.svg", title: "Proposed front elevation — coloured architectural view", source: "Original design sheet", alt: "Complete proposed front elevation in its architectural context" },
      { file: "hyde-02-design.svg", title: "Flat 1 — three-dimensional design study", source: "Original design sheet", alt: "Flat 1 interior views and original three-dimensional architectural layout" },
      { file: "hyde-03-design.svg", title: "Flat 3 — three-dimensional design study", source: "Original design sheet", alt: "Flat 3 bedroom and living-room visualisations and three-dimensional plan" },
      { file: "hyde-04-design.svg", title: "Flat 1 — sections and outlook studies", source: "Original design sheet", alt: "Architectural sections and external outlook and privacy studies for Flat 1" },
      { file: "hyde-05-design.svg", title: "Proposed front elevation — technical drawing", source: "Original design sheet", alt: "Full front elevation linework with neighbouring building context" }
    ]
  },
  {
    key: "elevations",
    tab: "Elevations & section",
    title: "Elevations, comparisons and building section",
    description: "Seven full-size sheets from the historical design-development drawing set. Some show an earlier 19-unit version and must not be mistaken for the permitted 18-flat scheme.",
    sheets: [
      { file: "hyde-06-elevations.svg", title: "Existing front elevation", source: "Elevation drawing", alt: "Existing front street elevation at Halt Parade" },
      { file: "hyde-07-elevations.svg", title: "Comparison of previous proposals", source: "Historical scheme comparison", alt: "Comparison of earlier proposed elevations and a previously approved arrangement" },
      { file: "hyde-08-elevations.svg", title: "Proposed front elevation", source: "Historical design development", alt: "Six-storey front elevation with adjacent Merit House and Green Point" },
      { file: "hyde-09-elevations.svg", title: "Proposed rear elevation", source: "Historical design development", alt: "Rear elevation with roof garden and surrounding buildings" },
      { file: "hyde-10-elevations.svg", title: "Proposed north elevation", source: "Historical design development", alt: "North elevation showing cladding, glazing and window treatment" },
      { file: "hyde-11-elevations.svg", title: "Proposed south elevation", source: "Historical design development", alt: "South elevation facing Edgware Road with the stepped building form" },
      { file: "hyde-12-elevations.svg", title: "Proposed building section A–A", source: "Historical design development", alt: "Full building section with floor levels, circulation core and basement" }
    ]
  },
  {
    key: "visuals",
    tab: "3D & site visuals",
    title: "Architectural perspectives and street context",
    description: "Four original visual sheets illustrating the site context and architectural form. These are design visualisations, not photographs of a completed WEDRAWPLANS building.",
    sheets: [
      { file: "hyde-13-visuals.svg", title: "The Hyde — street context", source: "Site-context photograph", alt: "Street setting with the buildings surrounding The Hyde site" },
      { file: "hyde-14-visuals.svg", title: "Evening architectural perspective", source: "Original architectural CGI", alt: "Evening street-level architectural rendering of the proposed development" },
      { file: "hyde-15-visuals.svg", title: "Terrace and rear perspective", source: "Original architectural CGI", alt: "Three-dimensional rear and terrace perspective with glass facades" },
      { file: "hyde-16-visuals.svg", title: "Front streetscape perspective", source: "Original architectural CGI", alt: "Street-level view of the proposed building and glazed corner balconies" }
    ]
  }
];

export default function HydeArchitecturalShowcase() {
  const [activeCollection, setActiveCollection] = useState(0);
  const [activeSheet, setActiveSheet] = useState(0);
  const [enlarged, setEnlarged] = useState(false);
  const startX = useRef<number | null>(null);
  const group = collections[activeCollection];
  const sheet = group.sheets[activeSheet] || group.sheets[0];
  const step = (delta: number) => setActiveSheet((current) => (current + delta + group.sheets.length) % group.sheets.length);

  useEffect(() => { setActiveSheet(0); setEnlarged(false); }, [activeCollection]);
  useEffect(() => {
    if (!enlarged) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setEnlarged(false);
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [enlarged, activeCollection]);

  return (
    <div className="overflow-hidden rounded-[18px] border border-[#d5e5dc] bg-white shadow-[0_12px_35px_rgba(20,57,60,.055)]">
      <div className="border-b border-[#dfece5] bg-[#f0f7f3] px-4 py-4 sm:px-5">
        <p className="text-[10px] font-extrabold uppercase tracking-[.17em] text-[#2c785e]">WEDRAWPLANS · THE HYDE, COLINDALE</p>
        <h3 className="mt-1 text-[20px] font-semibold text-[#254a4c] sm:text-[24px]">Architectural drawing gallery</h3>
        <p className="mt-1 text-[12px] leading-5 text-[#5c7676]">Original drawings displayed as complete sheets, with the same maximum-size viewing area and a faint WEDRAWPLANS watermark.</p>
      </div>

      <div className="grid grid-cols-3 gap-1.5 border-b border-[#e3eae6] p-2 sm:gap-2.5 sm:p-3" role="tablist" aria-label="The Hyde architectural gallery categories">
        {collections.map((entry, index) => (
          <button key={entry.key} id={"hyde-tab-" + entry.key} type="button" role="tab" aria-selected={index === activeCollection}
            aria-controls="hyde-sheet-panel" onClick={() => setActiveCollection(index)}
            className={"min-w-0 rounded-[10px] border px-2 py-2.5 text-center text-[10px] font-bold leading-4 transition sm:px-3 sm:text-[12px] " +
              (index === activeCollection ? "border-[#397f78] bg-[#e5f3ec] text-[#215f54]" : "border-[#e0e9e4] bg-white text-[#536f70] hover:border-[#a7c8bb]")}>
            {entry.tab}
            <span className="ml-1 text-[10px] opacity-70">({entry.sheets.length})</span>
          </button>
        ))}
      </div>

      <div id="hyde-sheet-panel" role="tabpanel" aria-labelledby={"hyde-tab-" + group.key}>
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 pb-2 pt-4 sm:px-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#3f8a79]">{group.title}</p>
            <h4 className="mt-1 text-[13px] font-semibold leading-5 text-[#2b4d4f] sm:text-[15px]">{sheet.title}</h4>
          </div>
          <span className="shrink-0 rounded-full border border-[#bdd7cc] bg-[#f4f8f5] px-3 py-1 text-[11px] font-bold tabular-nums text-[#33695f]">{activeSheet + 1} / {group.sheets.length}</span>
        </div>

        <div className="px-2 sm:px-3">
          <div className="relative aspect-[1684/1191] w-full overflow-hidden rounded-[8px] border border-[#e3e9e5] bg-white"
            onTouchStart={(event) => { startX.current = event.touches[0]?.clientX ?? null; }}
            onTouchEnd={(event) => { if (startX.current !== null) { const diff = (event.changedTouches[0]?.clientX ?? 0) - startX.current; if (Math.abs(diff) > 45) step(diff < 0 ? 1 : -1); startX.current = null; } }}>
            <button type="button" onClick={() => setEnlarged(true)} aria-label={"Enlarge complete sheet: " + sheet.title} className="absolute inset-0 block cursor-zoom-in">
              <Image key={sheet.file} src={BASE + sheet.file} alt={sheet.alt} fill sizes="(max-width: 1024px) 100vw, 62vw" className="pointer-events-none select-none object-contain" draggable={false} unoptimized />
            </button>
            <button type="button" aria-label="Previous drawing" onClick={() => step(-1)} className="absolute left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[23px] text-[#275c5c] shadow sm:left-3">‹</button>
            <button type="button" aria-label="Next drawing" onClick={() => step(1)} className="absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[23px] text-[#275c5c] shadow sm:right-3">›</button>
            <button type="button" onClick={() => setEnlarged(true)} className="absolute bottom-2 right-2 z-10 rounded-full border border-[#d5e3df] bg-white/95 px-3 py-1.5 text-[10px] font-semibold text-[#2b6262] shadow-sm sm:bottom-3 sm:right-3">Enlarge sheet ↗</button>
          </div>
        </div>

        <p className="px-4 pt-3 text-[11px] leading-5 text-[#617b7b] sm:px-5">{group.description}</p>

        <div className="mt-3 flex snap-x gap-2 overflow-x-auto border-t border-[#e6eeea] px-3 py-3 sm:px-4" aria-label="Select complete architectural sheet">
          {group.sheets.map((item, index) => (
            <button key={item.file} type="button" onClick={() => setActiveSheet(index)} aria-current={index === activeSheet ? "true" : undefined}
              aria-label={"View " + item.title} className={"w-[97px] shrink-0 snap-start rounded-[10px] border p-1.5 transition sm:w-[113px] " +
                (index === activeSheet ? "border-[#499d93] bg-[#edf7f2]" : "border-[#e0e9e5] bg-white hover:border-[#94c7b6]")}>
              <div className="relative aspect-[1684/1191] overflow-hidden bg-white">
                <Image src={BASE + item.file} alt={item.alt} fill sizes="113px" className="pointer-events-none object-contain" unoptimized loading="lazy" />
              </div>
              <span className="mt-1 block text-center text-[10px] font-bold text-[#426a69]">Drawing {index + 1}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-[#d9e8df] bg-[#f2f8f4] px-4 py-3 text-[11px] leading-5 text-[#486a62] sm:px-5">
        <strong>Planning approval reference: 17/0660/FUL.</strong> Barnet’s record for the 18-flat proposal is the planning evidence. Historical 19-unit design-development sheets are included to illustrate the architectural design process; they are not represented as the approved 18-flat drawings.
      </div>

      {enlarged && (
        <div role="dialog" aria-modal="true" aria-label={"Full-size architectural sheet: " + sheet.title}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#142527]/95 p-3 sm:p-6"
          onClick={() => setEnlarged(false)}>
          <button type="button" onClick={() => setEnlarged(false)} className="absolute right-4 top-4 z-10 rounded-full bg-white px-4 py-2 text-[12px] font-bold text-[#30595c]">Close ✕</button>
          <div className="relative aspect-[1684/1191] w-full max-w-[min(95vw,1600px)] max-h-[84vh]" onClick={(event) => event.stopPropagation()}>
            <Image src={BASE + sheet.file} alt={sheet.alt} fill sizes="95vw" className="pointer-events-none object-contain" unoptimized />
          </div>
          <div className="mt-3 flex items-center gap-5 text-sm font-semibold text-white" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => step(-1)} className="rounded-full border border-white/40 px-4 py-2">‹ Previous</button>
            <span>{activeSheet + 1} of {group.sheets.length}</span>
            <button type="button" onClick={() => step(1)} className="rounded-full border border-white/40 px-4 py-2">Next ›</button>
          </div>
        </div>
      )}
    </div>
  );
}
