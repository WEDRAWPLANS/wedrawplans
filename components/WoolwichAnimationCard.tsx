const base = "/images/case-studies/700-woolwich-road-greenwich-two-new-flats/";
const video = "/videos/woolwich-road-architectural-animation.mp4";
export default function WoolwichAnimationCard({ compact = false }: { compact?: boolean }) {
  return (
    <section className="overflow-hidden rounded-[18px] border border-[#d9e6df] bg-white shadow-sm" aria-label="WEDRAWPLANS Woolwich Road architectural animation">
      <div className="px-5 py-5 sm:px-7">
        <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#28725f]">WEDRAWPLANS · RESIDENTIAL DEVELOPMENT EXPERTISE</p>
        <h3 className="mt-2 text-[21px] font-semibold leading-tight text-[#254a4d] sm:text-[26px]">Woolwich Road, Greenwich · A Complete Residential Development</h3>
        <p className="mt-2 text-[13px] leading-6 text-[#526d71]">Explore this substantial mixed-use residential development, for which WEDRAWPLANS delivered full-building Building Regulations and project management from piling and foundations through to completion and handover. During construction, we also secured planning permission for two additional flats.</p>
      </div>
      <video className="aspect-video w-full bg-[#19333b]" controls preload="metadata" playsInline poster={base + "planning-05-cover-perspective.webp"} aria-label="Watch WEDRAWPLANS original Woolwich Road architectural animation">
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <p className="px-5 py-3 text-[11px] leading-5 text-[#637b80] sm:px-7">PLANNING + BUILDING REG + STRUCTURE + PROJECT MANAGEMENT.{compact ? "" : " Discover the whole-building technical scope, the additional-flats planning approval and the construction journey below."}</p>
    </section>
  );
}
