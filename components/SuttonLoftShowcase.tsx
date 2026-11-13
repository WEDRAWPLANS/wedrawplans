import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { CaseStudy } from "../data/caseStudies";

type Props = { project: CaseStudy };

const descriptions = [
  "Original 3D design sheet: existing and proposed architecture",
  "Approved proposed loft and roof plans",
  "Approved proposed front, rear and side elevations",
  "Approved existing and proposed sections",
  "Approved proposed ground and first-floor plans",
  "Existing loft and roof arrangements",
  "Existing floor plans",
  "Existing elevations"
];

export default function SuttonLoftShowcase({ project }: Props) {
  const [selected, setSelected] = useState(0);
  const drawings = (project.galleryImages || []).filter((item) => !item.src.includes("interior-inspiration"));
  const interior = (project.galleryImages || []).find((item) => item.src.includes("interior-inspiration"));
  const active = drawings[Math.min(selected, Math.max(drawings.length - 1, 0))];
  const change = (direction: number) => setSelected((index) => (index + direction + drawings.length) % drawings.length);

  return (
    <div className="space-y-7 select-none" onContextMenu={(event) => event.preventDefault()} onDragStart={(event) => event.preventDefault()}>
      <section className="overflow-hidden rounded-[21px] border border-[#d5e4df] bg-white shadow-[0_14px_35px_rgba(27,70,68,0.07)]" aria-labelledby="sutton-loft-hero">
        <div className="bg-[#204b4e] px-5 py-5 text-white sm:px-7 sm:py-6">
          <p className="text-[11px] font-bold uppercase tracking-[.19em] text-[#c7e5dc]">WEDRAWPLANS · Approved loft conversion</p>
          <h3 id="sutton-loft-hero" className="mt-1.5 text-[24px] font-semibold leading-tight sm:text-[29px]">From existing roof to approved loft design</h3>
          <p className="mt-2 text-[13px] leading-6 text-[#e3f1ec]">Rear dormer, side rooflights and a bedroom with en-suite · Wallington, Sutton</p>
        </div>
        <div className="p-3 sm:p-5">
          <figure>
            <div className="relative aspect-[2000/1413] w-full overflow-hidden rounded-[13px] border border-[#dce6e2] bg-[#f8faf8]">
              <Image src={project.heroImage} alt="Original WEDRAWPLANS full 3D presentation sheet comparing existing and proposed loft conversion elevations and roof alterations in Wallington, Sutton" fill priority sizes="(max-width: 1024px) 100vw, 65vw" className="pointer-events-none object-contain" draggable={false} />
            </div>
            <figcaption className="mt-3 text-[12px] leading-6 text-[#64797a]">Original WEDRAWPLANS 3D design sheet · Existing and proposed architectural views · Not photographs of completed construction.</figcaption>
          </figure>
          <div className="mt-5 grid gap-2 sm:grid-cols-3">
            {[
              ["03 Nov 2026", "Planning granted"],
              ["DM2026/00755", "Sutton application"],
              ["Bedroom + en-suite", "Approved loft layout"]
            ].map(([value,label]) => (
              <div key={label} className="rounded-xl border border-[#dae8e1] bg-[#f2f8f4] px-3 py-3.5">
                <p className="text-[14px] font-bold text-[#285c56]">{value}</p>
                <p className="mt-1 text-[11px] text-[#607772]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[21px] border border-[#d9e7e0] bg-white shadow-[0_12px_28px_rgba(27,70,68,0.055)]" aria-labelledby="sutton-loft-drawings">
        <div className="border-b border-[#dce9e3] bg-[#edf6f1] px-5 py-5 sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#ad7164]">Original approved architectural drawings</p>
          <h3 id="sutton-loft-drawings" className="mt-1 text-[23px] font-semibold text-[#244c50]">Explore the full drawing package</h3>
          <p className="mt-2 text-[13px] leading-6 text-[#587477]">See how WEDRAWPLANS developed the Sutton loft conversion through existing and proposed roof plans, elevations, sections and 3D architectural design. Together, the drawings explain the rear dormer, side rooflights, bedroom, en-suite and eaves storage considered in the approved application.</p>
        </div>
        {active ? (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 pt-5 sm:px-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#a07066]">Drawing {selected + 1} / {drawings.length}</p>
                <h4 className="mt-1 max-w-[530px] text-[15px] font-semibold leading-6 text-[#294f52]">{descriptions[selected] || active.caption}</h4>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => change(-1)} aria-label="Previous architectural drawing" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c4dad4] text-[24px] text-[#2f676b] transition hover:bg-[#ebf5f1]">‹</button>
                <button type="button" onClick={() => change(1)} aria-label="Next architectural drawing" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c4dad4] text-[24px] text-[#2f676b] transition hover:bg-[#ebf5f1]">›</button>
              </div>
            </div>
            <figure className="mx-3 my-4 overflow-hidden rounded-[12px] border border-[#e0e8e4] bg-[#f9faf8] p-2 sm:mx-5 sm:p-3">
              <div className="relative aspect-[2000/1413] w-full">
                <Image key={active.src} src={active.src} alt={active.alt} fill sizes="(max-width: 1024px) 94vw, 65vw" className="pointer-events-none object-contain" draggable={false}/>
              </div>
              <figcaption className="border-t border-[#e5ece7] px-2 pt-3 text-[12px] leading-6 text-[#5c7574]">{active.caption}</figcaption>
            </figure>
            <div className="border-t border-[#e6ede9] px-3 py-4 sm:px-5">
              <p className="mb-3 text-[11px] font-semibold text-[#4d6f70]">Explore another planning drawing:</p>
              <div className="flex snap-x gap-2.5 overflow-x-auto pb-2" aria-label="Architectural drawing selection">
                {drawings.map((sheet,index) => (
                  <button key={sheet.src} type="button" onClick={() => setSelected(index)} aria-current={selected === index ? "true" : undefined} aria-label={"Open drawing " + (index+1) + ": " + sheet.caption} className={"w-[126px] shrink-0 snap-start rounded-xl border p-1.5 text-left transition sm:w-[139px] " + (selected===index ? "border-[#438d83] bg-[#e7f4ed] shadow-sm" : "border-[#dfe8e3] bg-white hover:border-[#aaccc2]")}>
                    <div className="relative aspect-[2000/1413] rounded-md bg-[#f2f6f3]">
                      <Image src={sheet.src} alt="" fill sizes="139px" className="pointer-events-none object-contain" draggable={false}/>
                    </div>
                    <p className="mt-1.5 text-center text-[11px] font-bold text-[#416b6a]">Drawing {index+1}</p>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : null}
        <div className="border-t border-[#dce8e0] bg-[#eff7f1] px-5 py-5 sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#29705a]">Sutton Council · Planning permission granted</p>
          <p className="mt-2 text-[13px] leading-6 text-[#466b63]">Application DM2026/00755 was granted on 3 November 2026. The officer found the proposed rear dormer and side rooflights sympathetic to the roof and acceptable within the Area of Special Local Character. Planning permission is separate from Building Regulations approval.</p>
        </div>
      </section>

      {interior ? (
        <section className="overflow-hidden rounded-[21px] border border-[#dfe9e3] bg-white shadow-[0_10px_26px_rgba(27,70,68,0.05)]" aria-labelledby="sutton-inspiration-heading">
          <div className="px-5 pt-5 sm:px-7">
            <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#a46e63]">Interior design inspiration</p>
            <h3 id="sutton-inspiration-heading" className="mt-1 text-[22px] font-semibold text-[#294e52]">Imagine the finished loft space</h3>
            <p className="mt-2 text-[13px] leading-6 text-[#607b7a]">A client-supplied collection of en-suite references and conceptual loft interiors. These images illustrate design possibilities and are not claimed to be completed-project photographs.</p>
          </div>
          <div className="p-4 sm:p-6">
            <div className="relative mx-auto aspect-[1086/1147] max-w-[560px] overflow-hidden rounded-[12px] border border-[#e5e9e4] bg-[#fafaf8]">
              <Image src={interior.src} alt={interior.alt} fill sizes="(max-width: 768px) 90vw, 500px" className="pointer-events-none object-contain" draggable={false} />
            </div>
          </div>
        </section>
      ) : null}

      <div className="rounded-[17px] border border-[#d8e6df] bg-[#f2f9f5] p-5 sm:p-6">
        <h3 className="text-[18px] font-semibold text-[#264d4e]">Planning a loft conversion in Sutton or Wallington?</h3>
        <p className="mt-2 text-[13px] leading-7 text-[#597677]">WEDRAWPLANS can prepare architectural planning drawings, roof designs and coordinated Building Regulation drawing packages for rear dormers, rooflights and en-suite loft layouts. Every property needs its own planning assessment.</p>
        <Link href="#case-study-quote" className="mt-4 inline-flex rounded-full bg-[#287d83] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#20686e]">Get your fixed-fee loft drawing quote →</Link>
      </div>
    </div>
  );
}
