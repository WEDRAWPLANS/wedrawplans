import Image from "next/image";
import Link from "next/link";

const URL="/case-studies/cranbourne-drive-hoddesdon-planning-project";
const IMAGE="/images/case-studies/cranbourne-drive-hoddesdon-combined/planning-11-proposed-3d-rear.webp";

type Props={ context?: "Hertfordshire"|"Enfield"|"Building Regulations"|"Loft conversions"|"Homepage" };

export default function CranbournePromo({context="Hertfordshire"}:Props){
  const regional=context==="Enfield"?"Hoddesdon in nearby Hertfordshire":"Cranbourne Drive, Hoddesdon EN11";
  return <section aria-labelledby={"cranbourne-promo-"+context.replace(/\s+/g,"-").toLowerCase()}
      className="border-y border-[#d7e6de] bg-[#eef7f1] py-9 sm:py-12">
    <div className="mx-auto grid max-w-6xl min-w-0 items-center gap-6 px-4 md:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:px-6">
      <Link href={URL} className="block min-w-0 overflow-hidden rounded-[18px] border border-[#d7e6dd] bg-white shadow-[0_14px_35px_rgba(26,64,67,.075)]" aria-label="Explore the Hoddesdon combined planning and Building Regulations case study">
        <div className="relative aspect-[1276/935]">
          <Image src={IMAGE} alt="Proposed rear-extension and gable loft architectural illustration from Cranbourne Drive, Hoddesdon" fill sizes="(max-width: 768px) 100vw, 52vw"
            className="pointer-events-none object-contain" draggable={false}/>
        </div>
      </Link>
      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#27765d]">Broxbourne planning approval · 16 October 2026</p>
        <h2 id={"cranbourne-promo-"+context.replace(/\s+/g,"-").toLowerCase()} className="mt-3 text-[24px] font-semibold leading-tight text-[#25494e] sm:text-[30px]">
          One coordinated extension project: planning, technical drawings &amp; loft design
        </h2>
        <p className="mt-3 text-[13px] leading-7 text-[#5c777a]">
          Our {regional} case study shows how WEDRAWPLANS supported an approved partially retrospective
          3.4m rear extension, with a separate Building Regulations drawing pack for ground-floor
          improvements and a gable loft conversion design. Explore the architectural visuals,
          detailed plans and the evidence behind the planning decision.
        </p>
        <p className="mt-2 text-[11px] leading-6 text-[#687f81]">
          Planning permission covers the rear extension; the loft technical drawings are a separate project stage.
          This is not a claim of Building Control approval or separate loft planning permission.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={URL} className="inline-flex rounded-full bg-[#246f76] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#19575c]">
            View the combined-package case study
          </Link>
          <Link href="/building-regulation-drawings" className="inline-flex rounded-full border border-[#b2cfc0] bg-white px-5 py-3 text-[12px] font-semibold text-[#276b70]">
            Building Regulations services
          </Link>
        </div>
      </div>
    </div>
  </section>
}
