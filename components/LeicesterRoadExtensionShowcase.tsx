import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { CaseStudy } from "../data/caseStudies";

type Props = { project: CaseStudy };
type Tab = "planning" | "technical" | "decision";

const base = "/images/case-studies/leicester-road-barnet-combined-extension/";

const categories: {key: Tab; label: string; note: string}[] = [
  { key: "planning", label: "Planning drawings", note: "Original proposal drawings and existing context" },
  { key: "technical", label: "Building Regulation drawings", note: "Original preliminary technical sheets and structural interfaces" },
  { key: "decision", label: "Council decision", note: "Redacted Barnet prior-approval notification" },
];

export default function LeicesterRoadExtensionShowcase({ project }: Props) {
  const [tab, setTab] = useState<Tab>("planning");
  const [selected, setSelected] = useState(0);
  const images = project.galleryImages || [];
  const group = useMemo(() => images.filter((_, index) =>
    tab === "planning" ? index < 5 : tab === "technical" ? index >= 5 && index < 11 : index === 11
  ), [images, tab]);
  const active = group[Math.min(selected, group.length - 1)];
  function chooseTab(next: Tab) { setTab(next); setSelected(0); }

  return (
    <div className="space-y-6 select-none" onContextMenu={(event)=>event.preventDefault()} onDragStart={(event)=>event.preventDefault()}>
      <section className="overflow-hidden rounded-[22px] border border-[#d7e6df] bg-white shadow-[0_12px_34px_rgba(24,69,68,.08)]">
        <div className="bg-[#21484d] px-5 py-5 text-white sm:px-7 sm:py-6">
          <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#d6ece3]">WEDRAWPLANS · Barnet extension case study</p>
          <h3 className="mt-2 text-[24px] font-semibold leading-tight sm:text-[28px]">From planning to the technical drawing package</h3>
          <p className="mt-2 text-[13px] leading-6 text-[#d1e8e5]">One coordinated service: planning, Building Regulations drawings and structural engineering liaison.</p>
        </div>
        <div className="bg-[#f8faf8] p-3 sm:p-5">
          <div className="overflow-hidden rounded-[15px] border border-[#d0dfda] bg-[#1b3435]">
            <video controls playsInline muted loop autoPlay preload="metadata" poster={base + "highlights-poster.webp"} className="block aspect-video w-full object-contain" aria-label="Original WEDRAWPLANS architectural 3D animation highlights showing proposed Barnet rear extension">
              <source src={base + "original-architectural-animation-highlights.mp4"} type="video/mp4" />
              Your browser does not support the video. The full original drawing gallery is available below.
            </video>
          </div>
          <p className="mt-3 text-[12px] leading-6 text-[#657d7b]">Original WEDRAWPLANS architectural animation · 16-second website edit from the supplied 49-second design film · subtle faded bottom-right WEDRAWPLANS branding. This is a design visualisation, not footage of completed construction.</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-3">
            {[
              ["4.00m", "Approved rear projection"],
              ["29 Apr 2020", "Prior approval granted"],
              ["BR-01–BR-06", "Preliminary technical drawing set"]
            ].map(([value,label])=>(
              <div key={label} className="rounded-xl border border-[#d8e7df] bg-white px-3 py-3">
                <p className="text-[15px] font-bold text-[#24625b]">{value}</p>
                <p className="mt-1 text-[11px] text-[#657c7b]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[20px] border border-[#d6e6df] bg-white shadow-[0_11px_28px_rgba(28,66,64,.05)]" aria-label="Combined service overview">
        <div className="border-b border-[#dbe9e2] bg-[#edf6f1] px-5 py-5 sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#257362]">Three coordinated stages</p>
          <h3 className="mt-1 text-[22px] font-semibold text-[#254e51]">A simpler journey for homeowners</h3>
          <p className="mt-2 text-[13px] leading-6 text-[#5d7677]">One point of contact for design drawings and coordinated technical information. Council approvals and structural calculations remain separate statutory and professional checks.</p>
        </div>
        <div className="grid gap-3 p-4 sm:p-5">
          {[
            ["01", "Planning and prior approval", "Existing/proposed plans, elevations, roof layout and council liaison. Barnet granted the larger-home-extension prior approval."],
            ["02", "Building Regulations drawings", "Ground-floor services, wall and roof build-ups, floor insulation and U-values, roof joists, foundations, drainage and construction details."],
            ["03", "Structural engineer coordination", "Preliminary structural opening and beam information shown for design coordination, with final beams, supports and foundations to be checked and specified by the structural engineer."]
          ].map(([n,title,body])=>(
            <div key={n} className="flex gap-4 rounded-xl border border-[#e0eae5] bg-[#fbfdfb] p-4">
              <div className="shrink-0 text-[17px] font-bold text-[#a87062]">{n}</div>
              <div><h4 className="text-[15px] font-semibold text-[#2b5052]">{title}</h4><p className="mt-1.5 text-[12px] leading-6 text-[#5d7575]">{body}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-[21px] border border-[#d8e6e1] bg-white shadow-[0_11px_30px_rgba(31,65,64,.06)]" aria-labelledby="leicester-gallery-heading">
        <div className="px-5 pb-4 pt-6 sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#a36b62]">Authentic WEDRAWPLANS drawings</p>
          <h3 id="leicester-gallery-heading" className="mt-1 text-[23px] font-semibold text-[#274c4e]">Explore the planning &amp; construction details</h3>
          <p className="mt-2 text-[13px] leading-6 text-[#637b7a]">Original full-sheet architectural and Building Regulations documents with private details concealed and one faded diagonal WEDRAWPLANS watermark on each drawing.</p>
        </div>
        <div className="flex flex-wrap gap-2 border-y border-[#e1eae4] bg-[#f6faf7] px-3 py-3 sm:px-5" role="tablist" aria-label="Drawing categories">
          {categories.map((item)=>(
            <button key={item.key} type="button" role="tab" aria-selected={tab===item.key} onClick={()=>chooseTab(item.key)} className={"rounded-full px-4 py-2.5 text-[12px] font-bold transition "+(tab===item.key?"bg-[#286f72] text-white":"border border-[#d5e5df] bg-white text-[#426866] hover:border-[#8db9aa]")}>{item.label}</button>
          ))}
        </div>
        <div className="px-4 pt-4 sm:px-6">
          <p className="text-[12px] text-[#5f7978]">{categories.find(x=>x.key===tab)?.note}</p>
          {active && (
            <>
              <div className="mt-3 flex items-center justify-between gap-3">
                <h4 className="text-[14px] font-semibold text-[#315958]">{active.caption}</h4>
                {group.length>1 && <div className="flex shrink-0 gap-2">
                  <button type="button" aria-label="Previous drawing" onClick={()=>setSelected(s=>(s-1+group.length)%group.length)} className="rounded-full border border-[#c8ded4] px-3 py-1.5 text-[#28676b] hover:bg-[#eff7f3]">←</button>
                  <button type="button" aria-label="Next drawing" onClick={()=>setSelected(s=>(s+1)%group.length)} className="rounded-full border border-[#c8ded4] px-3 py-1.5 text-[#28676b] hover:bg-[#eff7f3]">→</button>
                </div>}
              </div>
              <figure className="mt-3 overflow-hidden rounded-[13px] border border-[#e2e8e4] bg-[#fbfcfb] p-2 sm:p-3">
                <div className="relative aspect-[1650/1167] w-full">
                  <Image key={active.src} src={active.src} alt={active.alt} fill draggable={false} sizes="(max-width: 1024px) 94vw, 64vw" className="pointer-events-none object-contain" />
                </div>
                <figcaption className="mt-2 border-t border-[#e6eee8] pt-2 text-[11px] leading-6 text-[#627977]">{active.caption}</figcaption>
              </figure>
              {group.length>1 && <div className="mt-4 flex snap-x gap-2.5 overflow-x-auto pb-4" aria-label="Select a drawing">
                {group.map((item,index)=>(
                  <button key={item.src} onClick={()=>setSelected(index)} type="button" aria-label={"Show "+item.caption} aria-current={selected===index?"true":undefined} className={"w-[126px] shrink-0 snap-start rounded-[11px] border p-1.5 text-left sm:w-[143px] "+(selected===index?"border-[#378e83] bg-[#e9f4ee]":"border-[#dfe9e5] bg-white hover:border-[#b1d1c2]")}>
                    <div className="relative aspect-[1650/1167] w-full"><Image src={item.src} alt="" fill sizes="143px" draggable={false} className="pointer-events-none object-contain" /></div>
                    <p className="mt-1.5 text-center text-[11px] font-bold text-[#4d7271]">Drawing {images.indexOf(item)+1}</p>
                  </button>
                ))}
              </div>}
            </>
          )}
        </div>
        <div className="border-t border-[#deebe3] bg-[#f2f8f3] px-5 py-4 sm:px-7">
          <p className="text-[12px] font-bold text-[#286a57]">Barnet prior approval granted · Ref 20/1467/PNH · 29 April 2020</p>
          <p className="mt-2 text-[12px] leading-6 text-[#607775]">The council decision relates to the planning prior-approval procedure only. The BR drawings supplied are marked preliminary. This case study does not claim Building Control approval, structural certification, or completed construction.</p>
        </div>
      </section>
      <div className="rounded-[17px] border border-[#d8e7e0] bg-[#f3faf5] px-5 py-5 sm:px-6">
        <h3 className="text-[18px] font-semibold text-[#285353]">Considering a 4-metre or 6-metre rear extension?</h3>
        <p className="mt-2 text-[13px] leading-7 text-[#5c7675]">WEDRAWPLANS can advise on the appropriate planning route and prepare coordinated architectural and Building Regulations drawing packages, with structural engineer input where needed. Every site is assessed individually.</p>
        <Link href="#case-study-quote" className="mt-4 inline-flex rounded-full bg-[#287b7b] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#1d6669]">Get your fixed-fee combined package quote →</Link>
      </div>
    </div>
  );
}
