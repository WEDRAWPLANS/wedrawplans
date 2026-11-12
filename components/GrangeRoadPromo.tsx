import Image from "next/image";
import Link from "next/link";

type Props = { context?: "home" | "service" | "local" };
const href = "/case-studies/grange-road-edgware-side-extension-lawful-development-building-regulations";

export default function GrangeRoadPromo({ context = "service" }: Props) {
  return (
    <section aria-label="WEDRAWPLANS Grange Road side extension and Building Regulations example" className="border-y border-[#dce8e1] bg-[#f4f9f5] py-9 sm:py-11">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 md:grid-cols-[minmax(0,1fr)_minmax(0,.85fr)] lg:px-6">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#2f7867]">Edgware · Barnet · Lawful Development Certificate granted</p>
          <h2 className="mt-3 max-w-2xl text-[22px] font-semibold leading-tight text-[#254c50] sm:text-[27px]">Side extension drawings, Building Regulations &amp; structural coordination — one genuine project</h2>
          <p className="mt-4 max-w-2xl text-[13px] leading-7 text-[#5a7576]">
            {context === "local" ? "An Edgware example for Barnet homeowners: " : "A genuine WEDRAWPLANS project: "}
            a 3 m-wide side extension with a 2016 Barnet Certificate of Lawfulness, followed by a separate technical drawing package. Explore the original planning sheet first, then BR01 and four more Building Regulations sheets, all presented with discreet WEDRAWPLANS watermarks.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold text-[#396b63]">
            <span className="rounded-full border border-[#c7ded3] bg-white px-3 py-1.5">Lawful development</span>
            <span className="rounded-full border border-[#c7ded3] bg-white px-3 py-1.5">Building Regulations</span>
            <span className="rounded-full border border-[#c7ded3] bg-white px-3 py-1.5">Structural coordination</span>
          </div>
          <Link href={href} className="mt-5 inline-flex rounded-full bg-[#27777d] px-6 py-3 text-[12px] font-bold text-white hover:bg-[#1c5e64]">Explore the approved side extension and technical drawings →</Link>
        </div>
        <Link href={href} className="block overflow-hidden rounded-[18px] border border-[#d1e1d7] bg-white p-3 shadow-[0_10px_30px_rgba(32,82,76,.05)]" aria-label="Open the Grange Road side extension project">
          <div className="relative aspect-[1880/1329]">
            <Image src="/images/case-studies/grange-road-edgware-side-extension/planning-01-proposed-floor-and-roof.webp" alt="WEDRAWPLANS original proposed floor and roof drawings for a lawful side extension in Edgware, with subtle diagonal watermark" fill sizes="(max-width: 768px) 100vw, 42vw" draggable={false} className="pointer-events-none object-contain" />
          </div>
          <p className="mt-2 text-center text-[11px] font-semibold text-[#557677]">Proposed planning sheet · Full-sheet redacted web preview</p>
        </Link>
      </div>
    </section>
  );
}
