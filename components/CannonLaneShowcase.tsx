import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "../data/caseStudies";

const SLIDES = [
  { src: "/images/case-studies/cannon-lane-pinner-5-metre-rear-extension/cannon-lane-rear-extension-3d.webp", title: "Garden-facing architectural design", label: "3D DESIGN", description: "A garden perspective of the proposed single-storey rear addition, illustrating the glazing, scale and relationship to the existing house.", width: 1676, height: 939 },
  { src: "/images/case-studies/cannon-lane-pinner-5-metre-rear-extension/p05-proposed-floor-and-roof-plans.webp", title: "Ground-floor and roof plans", label: "DRAWING 1 · P05", description: "The proposed ground-floor layout connects the rear addition with the kitchen, dining and existing accommodation. The adjoining roof plan communicates the overall arrangement.", width: 2048, height: 1427 },
  { src: "/images/case-studies/cannon-lane-pinner-5-metre-rear-extension/p07-proposed-elevations-and-section.webp", title: "Rear elevation and side section", label: "DRAWING 2 · P07", description: "The rear elevation and side section set out the 5 metre depth, roof form, scale and relationship with the original building.", width: 2048, height: 1427 },
] as const;

export default function CannonLaneShowcase({ project }: { project: CaseStudy }) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const current = SLIDES[index];
  const change = (next: number) => { setIndex((next + SLIDES.length) % SLIDES.length); setZoom(false); };
  return (
    <div className="space-y-6 select-none" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}>
      <section className="overflow-hidden rounded-[20px] border border-[#d5e5df] bg-white shadow-[0_18px_48px_rgba(20,76,66,.07)]" aria-label="Cannon Lane architectural drawing gallery">
        <div className="border-b border-[#e3eee7] bg-[#ecf6ef] px-5 py-6 sm:px-7">
          <p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#3d7862]">Planning permission granted · Pinner HA5</p>
          <h2 className="mt-2 text-[24px] font-semibold leading-tight text-[#24494d] sm:text-[31px]">A 5 metre rear extension, explained through design</h2>
          <p className="mt-3 max-w-3xl text-[14px] leading-7 text-[#526e70]">
            Explore the garden perspective and original WEDRAWPLANS planning sheets for the rear extension at Cannon Lane. The drawings explain the new arrangement and the proposal's relationship to the existing home.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#a06d59]">{current.label} · {index + 1} OF {SLIDES.length}</p>
            <h3 className="mt-1 text-[16px] font-bold text-[#2c5054] sm:text-[19px]">{current.title}</h3>
          </div>
          <div className="flex items-center gap-2">
            {index > 0 ? <button type="button" onClick={() => setZoom(!zoom)} aria-pressed={zoom} className="rounded-full border border-[#bcd4c9] bg-white px-4 py-2.5 text-[12px] font-semibold text-[#2d6866] hover:bg-[#eef7ef]">{zoom ? "Fit sheet" : "Enlarge sheet"}</button> : null}
            <button type="button" onClick={() => change(index - 1)} aria-label="Previous image" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#bcd4c9] text-[27px] text-[#2a696b] hover:bg-[#eef7ef]">‹</button>
            <button type="button" onClick={() => change(index + 1)} aria-label="Next image" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#bcd4c9] text-[27px] text-[#2a696b] hover:bg-[#eef7ef]">›</button>
          </div>
        </div>
        <figure className="mx-3 overflow-hidden rounded-xl border border-[#e1eae5] bg-[#f6f8f6] sm:mx-5">
          <div className={zoom && index > 0 ? "max-h-[72vh] overflow-auto" : "overflow-hidden"} style={{ WebkitTouchCallout: "none" }}>
            <Image key={current.src} src={current.src} alt={current.title + " — Cannon Lane, Pinner"} width={current.width} height={current.height} sizes="(max-width: 1024px) 100vw, 68vw" draggable={false} className={zoom && index > 0 ? "pointer-events-none h-auto w-[1050px] max-w-none select-none" : "pointer-events-none h-auto w-full select-none object-contain"} priority={index === 0} />
          </div>
          <figcaption className="border-t border-[#e4eae6] bg-white px-4 py-4 text-[13px] leading-6 text-[#597477]">{current.description}</figcaption>
        </figure>
        <div className="px-3 py-5 sm:px-5">
          <p className="mb-3 text-[12px] font-bold text-[#526c70]">Choose a view</p>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {SLIDES.map((slide, i) => (
              <button key={slide.src} type="button" onClick={() => change(i)} aria-label={"Show " + slide.title} aria-current={i === index ? "true" : undefined}
                className={"min-w-0 overflow-hidden rounded-xl border-2 bg-white text-left transition " + (i === index ? "border-[#2d8b7c] shadow-sm" : "border-[#e1ebe5] hover:border-[#97c0b4]")}>
                <div className="relative aspect-[4/3] bg-[#f6f9f6]">
                  <Image src={slide.src} alt="" fill sizes="(max-width: 640px) 32vw, 180px" className="pointer-events-none object-contain" draggable={false} />
                </div>
                <p className="px-2 pb-3 pt-2 text-[10px] font-bold leading-4 text-[#426568] sm:text-[12px]">{slide.label}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="rounded-[18px] border border-[#d8e5dd] bg-white px-5 py-6 sm:px-7">
        <p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#37765c]">The architectural approach</p>
        <h3 className="mt-2 text-[22px] font-semibold leading-tight text-[#24494b]">More useful living space, carefully connected to the original home</h3>
        <p className="mt-3 text-[14px] leading-7 text-[#547174]">The proposal focuses on a generous single-storey rear extension with an approximately 5 metre projection. WEDRAWPLANS coordinated the ground-floor arrangement, roof layout and elevations so the depth, scale and appearance could be assessed together. The planning approval also covered a front porch, garage-to-study conversion and associated alterations.</p>
        <p className="mt-3 text-[13px] leading-6 text-[#607b7d]">Harrow Council granted householder planning permission under P/4793/21 on 8 March 2022, subject to conditions. The design visual is an architectural illustration, not a photograph of a completed build.</p>
        <Link href="#case-study-quote" className="mt-5 inline-flex rounded-full bg-[#236f75] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#1a565e]">Discuss your extension · get a fixed-fee quote</Link>
      </section>
    </div>
  );
}
