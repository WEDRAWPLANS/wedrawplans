import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "../data/caseStudies";

type Slide = { project: CaseStudy; src: string; alt: string; caption: string };
type Props = { projects: CaseStudy[]; mode: "project" | "hub" };

function projectMedia(project: CaseStudy) {
  const allowed = (src: string) => Boolean(src) &&
    (src.startsWith("/images/case-studies/") || src.startsWith("/images/hyde-"));
  const extra = (project.galleryImages || []).filter((image) => allowed(image.src))
    .map((image) => ({ src: image.src, alt: image.alt, caption: image.caption }));
  const primary = [project.heroImage, project.secondaryImage]
    .filter(allowed)
    .map((src, index) => ({
      src,
      alt: (index === 0 ? "Architectural drawing or design view" : "Additional project illustration") + " — " + project.shortTitle,
      caption: index === 0 ? "WEDRAWPLANS architectural design" : "Additional architectural project view",
    }));
  const known = new Set<string>();
  return (extra.length ? extra : primary).filter((item) => {
    if (known.has(item.src)) return false;
    known.add(item.src);
    return true;
  });
}

export default function ProjectMediaSlider({ projects, mode }: Props) {
  const slides: Slide[] = mode === "hub"
    ? projects.map((project) => ({ project, ...projectMedia(project)[0] || { src: "", alt: "", caption: "" } }))
    : projects.flatMap((project) => {
        const images = projectMedia(project);
        return images.length
          ? images.map((image) => ({ project, ...image }))
          : [{ project, src: "", alt: "", caption: "" }];
      });

  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const touchStart = useRef<number | null>(null);
  const current = slides[index] || slides[0];
  const length = slides.length;
  const canChange = length > 1;

  useEffect(() => { setIndex(0); setLightbox(false); }, [mode]);
  useEffect(() => {
    if (!lightbox) return;
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") setLightbox(false);
    }
    document.addEventListener("keydown", keydown);
    return () => document.removeEventListener("keydown", keydown);
  }, [lightbox]);

  const go = (direction: number) => setIndex(i => (i + direction + length) % length);
  if (!current) return null;

  const isPreview = process.env.VERCEL_ENV !== "production";
  return (
    <div className="overflow-hidden rounded-[18px] border border-[#dce5e3] bg-white shadow-[0_9px_28px_rgba(23,57,60,0.055)]">
      <div className="relative flex min-h-[300px] flex-col justify-center bg-[#f7faf9] sm:min-h-[390px] lg:min-h-[430px]"
        role="region" aria-roledescription="carousel" aria-label={mode === "hub" ? "Selected WEDRAWPLANS planning projects" : "Project architectural drawings"}
        onContextMenu={(event) => event.preventDefault()} onDragStart={(event) => event.preventDefault()}
        onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
        onTouchEnd={(event) => { if (touchStart.current !== null && canChange) { const change = (event.changedTouches[0]?.clientX || 0) - touchStart.current; if (Math.abs(change) > 55) go(change < 0 ? 1 : -1); } touchStart.current = null; }}>
        {current.src ? (
          <button type="button" aria-label={"Enlarge " + current.project.shortTitle + " architectural image"} onClick={() => setLightbox(true)} className="relative block h-[300px] w-full cursor-zoom-in sm:h-[390px] lg:h-[430px]">
            <Image src={current.src} alt={current.alt} fill priority={index === 0} sizes="(max-width: 1024px) 100vw, 57vw" className="pointer-events-none select-none object-contain p-4 sm:p-6" draggable={false}/>
            <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#2f6970] shadow-sm">Enlarge view ↗</span>
          </button>
        ) : (
          <div className="flex min-h-[300px] flex-col items-center justify-center px-8 py-10 text-center sm:min-h-[390px] lg:min-h-[430px]">
            <svg width="100" height="75" viewBox="0 0 100 75" fill="none" aria-hidden="true" className="text-[#a4c0bb]">
              <rect x="8" y="7" width="84" height="61" rx="2" fill="white" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M15 58H85M15 62H85M28 16H72V53H28zM38 29H61V53H38zM28 40h-13M72 40h13" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <p className="mt-5 text-xl font-semibold leading-snug text-[#2d5056]">{current.project.shortTitle}</p>
            <p className="mt-2 max-w-sm text-[13px] leading-6 text-[#688187]">
              {isPreview ? "Explore WEDRAWPLANS planning drawings and project design" : "Approved planning project · WEDRAWPLANS architectural drawings"}
            </p>
            <p className="mt-4 max-w-md text-[13px] leading-6 text-[#567075]">{current.project.service}</p>
          </div>
        )}
        {canChange && <>
          <button type="button" aria-label="Previous drawing or project" onClick={() => go(-1)} className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#d0dedd] bg-white/95 text-2xl text-[#295b63] shadow-sm hover:bg-[#e9f5f2] focus-visible:ring-2 focus-visible:ring-[#56a3b0]">‹</button>
          <button type="button" aria-label="Next drawing or project" onClick={() => go(1)} className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#d0dedd] bg-white/95 text-2xl text-[#295b63] shadow-sm hover:bg-[#e9f5f2] focus-visible:ring-2 focus-visible:ring-[#56a3b0]">›</button>
        </>}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-[#d6e8dd] bg-[#f0f7f2] px-4 py-2.5 sm:px-5" aria-label="Council decision status">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.07em] text-[#245b41] sm:text-[12px]">
          <span aria-hidden="true" className="text-[16px] leading-none">✓</span>
          {current.project.outcome}
        </span>
        <span className="text-[11px] font-medium text-[#557366]">
          {current.project.authority} · {current.project.reference}
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#e5eeeb] bg-white px-5 py-4">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[12px] font-semibold text-[#375c62]">{current.project.shortTitle}</p>
          <p className="mt-1 text-[11px] text-[#6a7d81]">{current.src ? current.caption : current.project.authority}</p>
        </div>
        {mode === "hub" ? <Link href={"/case-studies/" + current.project.slug} className="rounded-full border border-[#b5d7d8] px-4 py-2 text-[12px] font-semibold text-[#27737d] hover:bg-[#edf8f6]">View this project →</Link> : null}
        {canChange ? <span className="shrink-0 text-[12px] font-semibold tabular-nums text-[#5e7b7e]">{index + 1} / {length}</span> : null}
      </div>
      {canChange && <div className="flex flex-wrap items-center justify-center gap-2 border-t border-[#edf0f0] bg-white px-4 py-3">
        {slides.map((slide, i) => <button key={slide.project.slug + "-" + i} type="button" aria-label={"View " + slide.project.shortTitle + " slide " + (i + 1)} aria-current={i === index ? "true" : undefined} onClick={() => setIndex(i)} className={"h-2.5 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-[#64b7c4] " + (i === index ? "w-7 bg-[#5aa7b5]" : "w-2.5 bg-[#cbdedb] hover:bg-[#95bcbc]")} />)}
      </div>}

      {lightbox && current.src && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#15282d]/95 p-3 sm:p-8" role="dialog" aria-modal="true" aria-label={"Enlarged architectural view — " + current.project.shortTitle} onClick={() => setLightbox(false)} onContextMenu={(event) => event.preventDefault()} onDragStart={(event) => event.preventDefault()}>
        <button type="button" aria-label="Close enlarged view" onClick={() => setLightbox(false)} className="absolute right-4 top-4 z-10 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#2d5960]">Close ✕</button>
        <div className="relative h-[82vh] w-full max-w-[1500px]" onClick={(e) => e.stopPropagation()}>
          <Image src={current.src} alt={current.alt} fill sizes="100vw" className="pointer-events-none select-none object-contain" draggable={false}/>
        </div>
      </div>}
    </div>
  );
}
