const base = "/images/case-studies/700-woolwich-road-greenwich-two-new-flats/";
const video = "/videos/woolwich-road-architectural-animation.mp4";
export default function WoolwichAnimationCard({ compact = false }: { compact?: boolean }) {
  return (
    <section className="overflow-hidden rounded-[18px] border border-[#d9e6df] bg-white shadow-sm" aria-label="WEDRAWPLANS Woolwich Road architectural animation">
      <div className="px-5 py-5 sm:px-7">
        <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#28725f]">WEDRAWPLANS · Original architectural animation</p>
        <h3 className="mt-2 text-[21px] font-semibold leading-tight text-[#254a4d] sm:text-[26px]">Woolwich Road · Two additional rooftop flats</h3>
        <p className="mt-2 text-[13px] leading-6 text-[#526d71]">Explore the original proposal for two additional fourth-floor flats through our own architectural animation.</p>
      </div>
      <video className="aspect-video w-full bg-[#19333b]" controls preload="metadata" playsInline poster={base + "planning-05-cover-perspective.webp"} aria-label="Watch WEDRAWPLANS original Woolwich Road architectural animation">
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <p className="px-5 py-3 text-[11px] leading-5 text-[#637b80] sm:px-7">Original WEDRAWPLANS architectural animation, hosted directly on our website and watermarked with our logo.{compact ? "" : " Explore the approved planning drawings and Building Regulations evidence below."}</p>
    </section>
  );
}
