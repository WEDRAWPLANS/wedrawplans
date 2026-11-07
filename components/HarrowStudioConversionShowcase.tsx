import Image from "next/image";
import { useState } from "react";
import type { CaseStudy } from "../data/caseStudies";

type Props = { project: CaseStudy };

const PROJECT_ROOT = "/images/case-studies/burnt-oak-broadway-harrow-retail-flats/";

const ANIMATIONS = [
  {
    title: "Two first-floor studio flats",
    detail: "See the two independent studio layouts proposed above the existing ground-floor retail premises.",
    poster: PROJECT_ROOT + "first-floor-video-poster.webp",
    src: PROJECT_ROOT + "first-floor-two-studios.mp4",
    duration: "28 seconds",
  },
  {
    title: "One top-floor attic studio",
    detail: "See how the upper roof accommodation was arranged as the third self-contained studio flat.",
    poster: PROJECT_ROOT + "attic-floor-video-poster.webp",
    src: PROJECT_ROOT + "attic-floor-one-studio.mp4",
    duration: "24 seconds",
  },
] as const;

export default function HarrowStudioConversionShowcase({ project }: Props) {
  const drawings = project.galleryImages || [];
  const [drawingIndex, setDrawingIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const selected = drawings[Math.min(drawingIndex, drawings.length - 1)];

  return (
    <div className="select-none space-y-7" onContextMenu={(event) => event.preventDefault()} onDragStart={(event) => event.preventDefault()}>
      <section className="overflow-hidden rounded-[20px] border border-[#d4e5dc] bg-white shadow-[0_15px_40px_rgba(22,69,70,.06)]">
        <div className="bg-[#eaf6ef] px-5 py-6 sm:px-7">
          <p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#23775a]">Harrow Council · Planning permission granted · 6 August 2021</p>
          <h2 className="mt-2 text-[25px] font-semibold leading-tight text-[#24494d] sm:text-[31px]">
            Three studio flats achieved above a retained commercial unit
          </h2>
          <p className="mt-3 max-w-3xl text-[14px] leading-7 text-[#526e72]">
            This approved Burnt Oak Broadway scheme made more effective use of the existing upper-floor accommodation.
            The ground-floor retail use was preserved, while the first floor was arranged as two separate studio flats
            and the attic/top floor as a third studio. The proposal also included a rear retail extension, dormer,
            bin storage and cycle provision.
          </p>
        </div>
        <div className="grid gap-3 px-4 py-5 sm:grid-cols-3 sm:px-6">
          {[
            ["Ground floor", "Commercial retail retained"],
            ["First floor", "2 independent studio flats"],
            ["Attic / top floor", "1 independent studio flat"],
          ].map(([level, result]) => (
            <div key={level} className="rounded-xl border border-[#d8e5df] bg-[#f7faf8] px-4 py-4">
              <p className="text-[10px] font-extrabold uppercase tracking-[.13em] text-[#9a695f]">{level}</p>
              <p className="mt-1 text-[15px] font-bold leading-6 text-[#274f53]">{result}</p>
            </div>
          ))}
        </div>
        <p className="border-t border-[#e4ede8] px-5 py-4 text-[12px] leading-6 text-[#60777a] sm:px-7">
          The approval demonstrates what was achieved for this particular building, not a general maximum number of units
          allowed above commercial premises. Every property requires its own planning, access, daylight, space-standard and fire-safety assessment.
        </p>
      </section>

      <section id="harrow-3d-animations" className="scroll-mt-24 rounded-[20px] border border-[#dbe7e1] bg-white px-4 py-6 shadow-[0_15px_40px_rgba(22,69,70,.06)] sm:px-6">
        <div className="mb-5">
          <p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#28775e]">Original WEDRAWPLANS 3D design</p>
          <h2 className="mt-2 text-[24px] font-semibold text-[#24494d] sm:text-[29px]">Watch the three-flat conversion</h2>
          <p className="mt-2 text-[13px] leading-6 text-[#597277]">Two original architectural walkthrough animations, with the supplied WEDRAWPLANS logo retained as a faded corner watermark. Videos load only when played.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {ANIMATIONS.map((item, i) => (
            <article key={item.src} className="overflow-hidden rounded-[16px] border border-[#dae7df] bg-[#f6faf8]">
              <div className="relative aspect-video overflow-hidden bg-[#e8edeb]">
                {playingVideo === i ? (
                  <video
                    key={item.src}
                    controls
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    poster={item.poster}
                    controlsList="nodownload"
                    disablePictureInPicture
                    className="h-full w-full object-contain"
                    aria-label={item.title}
                    onEnded={() => setPlayingVideo(null)}
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support HTML video.
                  </video>
                ) : (
                  <button type="button" onClick={() => setPlayingVideo(i)} className="group relative block h-full w-full cursor-pointer" aria-label={"Play the original animation: " + item.title}>
                    <Image src={item.poster} alt={"Video preview showing " + item.title + " with the user's original faded WEDRAWPLANS corner logo"} fill sizes="(max-width: 640px) 100vw, 38vw" className="pointer-events-none object-cover transition-transform duration-200 group-hover:scale-[1.015]" draggable={false} />
                    <span className="absolute inset-0 ring-inset transition group-focus-visible:ring-4 group-focus-visible:ring-[#4b8f82]" />
                    <span className="sr-only">Play video</span>
                  </button>
                )}
              </div>
              <div className="px-4 py-4">
                <p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-[#a06f61]">3D walkthrough · {item.duration}</p>
                <h3 className="mt-1 text-[16px] font-bold text-[#274e53]">{item.title}</h3>
                <p className="mt-2 text-[12px] leading-6 text-[#61767a]">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-[20px] border border-[#dbe7e1] bg-white shadow-[0_15px_40px_rgba(22,69,70,.06)]">
        <div className="border-b border-[#dce9e2] bg-[#eff7f2] px-4 py-5 sm:px-6">
          <p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#28765d]">Planning-approved drawing references · Selected original sheets</p>
          <h2 className="mt-2 text-[24px] font-semibold text-[#24494d] sm:text-[29px]">Four complete architectural drawings</h2>
          <p className="mt-2 text-[13px] leading-6 text-[#587277]">
            Explore the retail arrangement, the two first-floor studios, the single attic studio and the proposed side elevation.
            Original sheets are shown in full. Identifying details have been obscured and each image has one discreet
            diagonal WEDRAWPLANS watermark.
          </p>
        </div>
        {selected ? (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 pb-3 pt-5 sm:px-6">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.15em] text-[#9b685e]">Drawing {drawingIndex + 1} of {drawings.length}</p>
                <h3 className="mt-1 text-[15px] font-semibold text-[#274c50] sm:text-[17px]">{selected.caption}</h3>
              </div>
              <div className="flex gap-2">
                <button type="button" aria-label="Previous drawing" onClick={() => setDrawingIndex((i) => (i + drawings.length - 1) % drawings.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c3d9cf] bg-white text-[#286269] hover:bg-[#ebf7ef] focus-visible:ring-2 focus-visible:ring-[#26858b]">‹</button>
                <button type="button" aria-label="Next drawing" onClick={() => setDrawingIndex((i) => (i + 1) % drawings.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c3d9cf] bg-white text-[#286269] hover:bg-[#ebf7ef] focus-visible:ring-2 focus-visible:ring-[#26858b]">›</button>
              </div>
            </div>
            <figure className="mx-3 mb-4 rounded-[14px] border border-[#dce8e2] bg-[#f7f9f7] p-2 sm:mx-5 sm:p-4">
              <div className="relative mx-auto aspect-[1.415/1] w-full">
                <Image key={selected.src} src={selected.src} alt={selected.alt} fill sizes="(max-width: 1024px) 96vw, 65vw" className="pointer-events-none object-contain" draggable={false} priority={drawingIndex === 0} />
              </div>
            </figure>
            <div className="border-t border-[#e4ece7] px-3 py-4 sm:px-5">
              <p className="mb-3 text-[12px] font-semibold text-[#527074]">Select a complete drawing sheet:</p>
              <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2" aria-label="Select an approved Burnt Oak Broadway drawing">
                {drawings.map((sheet, i) => (
                  <button type="button" key={sheet.src} aria-current={drawingIndex === i ? "true" : undefined} aria-label={"Show drawing " + (i + 1) + ": " + sheet.caption} onClick={() => setDrawingIndex(i)}
                    className={"w-[134px] shrink-0 snap-start rounded-xl border p-2 text-left transition sm:w-[156px] " + (drawingIndex === i ? "border-[#348b8b] bg-[#e9f5ef]" : "border-[#dbe7e1] bg-white hover:border-[#9cc4b7]")}>
                    <div className="relative aspect-[1.415/1] rounded-md bg-[#f5f8f6]">
                      <Image src={sheet.src} alt="" fill sizes="160px" className="pointer-events-none object-contain" draggable={false} />
                    </div>
                    <span className="mt-2 block text-[11px] font-semibold leading-4 text-[#476a6e]">{sheet.caption}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </section>

      <section className="rounded-[18px] border border-[#cddfd5] bg-[#eff7f2] px-5 py-6 sm:px-6">
        <p className="text-[11px] font-extrabold uppercase tracking-[.17em] text-[#28745b]">What this approval demonstrates</p>
        <h2 className="mt-2 text-[21px] font-semibold text-[#25484c]">Making better use of space above shops</h2>
        <p className="mt-3 text-[13px] leading-7 text-[#506c70]">
          The planning package carefully identified the existing commercial activity separately from the proposed homes.
          It brought together first-floor living arrangements, the additional attic studio, rear dormer, refuse and cycle storage,
          access and amenity considerations. The granted decision includes conditions relating to fire safety, landscaping
          and cycle parking. Planning permission does not itself constitute Building Regulations approval.
        </p>
        <p className="mt-3 text-[12px] leading-6 text-[#647c7f]">
          Reference P/0076/21 · Harrow Council · granted 6 August 2021. This is a historical approval. Its implementation
          and the present legal status of any uncommenced works have not been verified.
        </p>
        <a href="#case-study-quote" className="mt-5 inline-flex rounded-full bg-[#236e74] px-5 py-3 text-[12px] font-bold text-white transition hover:bg-[#1b5961]">
          Ask for your fixed-fee drawing quote →
        </a>
      </section>
    </div>
  );
}
