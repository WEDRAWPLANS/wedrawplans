import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { CaseStudy } from "../data/caseStudies";

type Props = { project: CaseStudy };

export default function BrockleyCaseStudyShowcase({ project }: Props) {
  const media = project.galleryImages || [];
  const [index, setIndex] = useState(0);
  const selected = media[Math.min(index, media.length - 1)];

  const selectPrevious = () => setIndex((current) => (current + media.length - 1) % media.length);
  const selectNext = () => setIndex((current) => (current + 1) % media.length);

  return (
    <div className="space-y-7 select-none" onContextMenu={(event) => event.preventDefault()} onDragStart={(event) => event.preventDefault()}>
      <section className="overflow-hidden rounded-[20px] border border-[#dbe7e1] bg-white shadow-[0_15px_40px_rgba(22,69,70,.06)]">
        <div className="border-b border-[#dce9e2] bg-[#edf6f0] px-4 py-5 sm:px-6">
          <p className="text-[11px] font-extrabold uppercase tracking-[.17em] text-[#287359]">Lewisham planning permission granted · 3 December 2025</p>
          <h3 className="mt-2 text-[24px] font-semibold leading-tight text-[#234a4d] sm:text-[29px]">
            Architectural 3D design &amp; four selected technical drawings
          </h3>
          <p className="mt-2 text-[13px] leading-6 text-[#557277]">
            Explore original WEDRAWPLANS architectural views, the proposed second-floor arrangement, building section and elevations.
            Every sheet is shown complete, with one extremely faint grey diagonal WEDRAWPLANS watermark and identifying house numbers removed.
          </p>
        </div>

        {selected ? (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 pb-3 pt-5 sm:px-6">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.15em] text-[#9c6a61]">Selected drawing {index + 1} of {media.length}</p>
                <h4 className="mt-1 text-[15px] font-semibold leading-6 text-[#274d51] sm:text-[17px]">{selected.caption}</h4>
              </div>
              <div className="flex shrink-0 gap-2">
                <button type="button" onClick={selectPrevious} aria-label="Previous architectural drawing" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c3d9cf] bg-white text-[#286269] transition hover:bg-[#ebf7ef] focus-visible:ring-2 focus-visible:ring-[#26858b]">‹</button>
                <button type="button" onClick={selectNext} aria-label="Next architectural drawing" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c3d9cf] bg-white text-[#286269] transition hover:bg-[#ebf7ef] focus-visible:ring-2 focus-visible:ring-[#26858b]">›</button>
              </div>
            </div>
            <figure className="mx-3 mb-4 overflow-hidden rounded-[14px] border border-[#dce8e2] bg-[#f7f9f7] p-2 sm:mx-5 sm:p-4">
              <div className="relative mx-auto aspect-[1.414/1] w-full">
                <Image key={selected.src} src={selected.src} alt={selected.alt} fill sizes="(max-width: 1024px) 96vw, 62vw" className="pointer-events-none object-contain" draggable={false} priority={index === 0} />
              </div>
            </figure>
            <div className="border-t border-[#e4ece7] px-3 py-4 sm:px-5">
              <p className="mb-3 text-[12px] font-semibold text-[#527074]">Select another complete architectural sheet:</p>
              <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2" aria-label="Select Brockley Road architectural drawing">
                {media.map((image, i) => (
                  <button key={image.src} type="button" aria-label={"Show architectural drawing " + (i + 1) + ": " + image.caption} aria-current={index === i ? "true" : undefined} onClick={() => setIndex(i)}
                    className={"w-[134px] shrink-0 snap-start rounded-xl border p-2 text-left transition sm:w-[156px] " + (index === i ? "border-[#348b8b] bg-[#e9f5ef] shadow-[0_4px_12px_rgba(23,96,96,.1)]" : "border-[#dbe7e1] bg-white hover:border-[#9cc4b7]")}>
                    <div className="relative aspect-[1.414/1] rounded-md bg-[#f5f8f6]">
                      <Image src={image.src} alt="" fill sizes="160px" className="pointer-events-none object-contain" draggable={false} />
                    </div>
                    <span className="mt-2 block text-[11px] font-semibold leading-4 text-[#476a6e]">{image.caption}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </section>

      <section className="rounded-[18px] border border-[#cddfd5] bg-[#eff7f2] px-5 py-6 sm:px-6">
        <p className="text-[11px] font-extrabold uppercase tracking-[.17em] text-[#28745b]">Planning-approved outcome · original drawings</p>
        <h3 className="mt-2 text-[21px] font-semibold text-[#25484c]">Two self-contained flats above a retained shop</h3>
        <p className="mt-3 text-[13px] leading-7 text-[#506c70]">
          Lewisham granted retrospective planning permission under DC/25/141346 for conversion of the first and second floors into two self-contained flats.
          Later 2026 Building Control drawings demonstrate the technical design work, including a protected common stair, fire and acoustic separation and smoke-ventilation provisions.
        </p>
        <p className="mt-3 text-[12px] leading-6 text-[#657b7f]">
          Accuracy note: the drawings displayed here are later 2026 technical revisions; the council's 2025 decision notice lists a separate set of approved planning drawing references. These sheets are not presented as approved by the 2025 decision.
        </p>
        <Link href="#case-study-quote" className="mt-5 inline-flex rounded-full bg-[#236e74] px-5 py-3 text-[12px] font-bold text-white transition hover:bg-[#1b5961]">
          Request your fixed-fee quote →
        </Link>
      </section>
    </div>
  );
}
