import Image from "next/image";
import Link from "next/link";

type Props = { area?: string; context?: "home" | "service" | "local" };
const href="/case-studies/leicester-road-barnet-rear-extension-planning-building-regulations-structural";
export default function BarnetCombinedExtensionPromo({ area="Barnet", context="service" }: Props) {
  return (
    <section aria-label="Barnet combined planning and Building Regulations rear extension case study" className="border-y border-[#dce8e1] bg-[#f2f8f4] py-8 sm:py-10">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 md:grid-cols-[minmax(0,1.04fr)_minmax(230px,.7fr)] lg:px-6">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#2b7163]">Real WEDRAWPLANS project · Barnet prior approval granted</p>
          <h2 className="mt-2 text-[22px] font-semibold leading-tight text-[#244b50] sm:text-[26px]">Rear extension, planning &amp; Building Regulations drawings — together</h2>
          <p className="mt-3 max-w-2xl text-[13px] leading-7 text-[#566f70]">
            {context==="local" ? "For homeowners in "+area+" and nearby North London, " : "For homeowners considering more space, "}
            discover a genuine 4-metre Barnet extension with original animation, council prior approval, WEDRAWPLANS Building Regulations drawings and structural engineer coordination notes.
            The technical sheets are clearly identified as preliminary and subject to separate professional checks.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold text-[#3d6964]">
            <span className="rounded-full border border-[#cbdcd2] bg-white px-3 py-1.5">Planning</span>
            <span className="rounded-full border border-[#cbdcd2] bg-white px-3 py-1.5">Building Regulations</span>
            <span className="rounded-full border border-[#cbdcd2] bg-white px-3 py-1.5">Structural coordination</span>
          </div>
          <Link href={href} className="mt-5 inline-flex rounded-full bg-[#297b80] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#1b666c]">
            Explore the approved Barnet extension →
          </Link>
        </div>
        <Link href={href} aria-label="View Barnet rear extension combined services case study" className="block overflow-hidden rounded-[15px] border border-[#d4e3db] bg-white p-2 shadow-sm">
          <Image src="/images/case-studies/leicester-road-barnet-combined-extension/highlights-poster.webp" alt="Original WEDRAWPLANS 3D animation still of proposed rear extension in Barnet" width={960} height={540} sizes="(max-width:768px) 100vw, 460px" className="h-auto w-full rounded-[9px] object-contain"/>
          <p className="px-2 py-2 text-[11px] font-medium text-[#5e7774]">View the original architectural animation and drawings</p>
        </Link>
      </div>
    </section>
  );
}
