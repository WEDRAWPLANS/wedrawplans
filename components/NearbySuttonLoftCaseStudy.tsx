import Image from "next/image";
import Link from "next/link";

type Props = { context?: "neighbouring" | "home"; area?: string };

const href = "/case-studies/sutton-loft-conversion-planning-permission-wallington";
const image = "/images/case-studies/sutton-wallington-loft-conversion-2026/drawing-01-3d-before-after.webp";

export default function NearbySuttonLoftCaseStudy({ context = "neighbouring", area = "" }: Props) {
  const home = context === "home";
  return (
    <section aria-label="Approved loft conversion example near Sutton" className="border-y border-[#dfebe3] bg-[#f4faf6] py-7 sm:py-9">
      <div className="mx-auto grid max-w-6xl items-center gap-5 px-5 md:grid-cols-[minmax(0,1fr)_minmax(240px,.42fr)] lg:px-6">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#28725d]">Planning permission granted · Sutton Council · November 2026</p>
          <h2 className="mt-2 text-[22px] font-semibold leading-tight text-[#25494e] sm:text-[25px]">Real loft conversion approval in nearby Wallington</h2>
          <p className="mt-3 max-w-2xl text-[13px] leading-7 text-[#567275]">
            WEDRAWPLANS prepared original plans, elevations, sections and 3D design views for a rear dormer, side rooflights and a bedroom with en-suite. Sutton approved the application despite its Area of Special Local Character setting.
            {home ? " Explore the full planning-approved drawing package." : ` If you are considering a loft conversion in ${area || "your area"}, this neighbouring Sutton project illustrates our drawing and planning approach; the same approval cannot be assumed for another property.`}
          </p>
          <Link href={href} className="mt-4 inline-flex rounded-full bg-[#267981] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#1d6167]">
            View Sutton loft approval &amp; original drawings →
          </Link>
        </div>
        <Link href={href} aria-label="View original WEDRAWPLANS approved Sutton loft design sheet" className="block overflow-hidden rounded-[14px] border border-[#d8e4df] bg-white p-2 shadow-sm">
          <Image src={image} alt="Original WEDRAWPLANS 3D sheet showing existing and approved proposed dormer loft design in Wallington, Sutton" width={600} height={423} sizes="(max-width: 768px) 100vw, 360px" className="h-auto w-full object-contain"/>
        </Link>
      </div>
    </section>
  );
}
