import Link from "next/link";
import { boroughDetails } from "./BoroughHomeownerOffer";

/** Compact price message within each local page's existing first-screen hero, not a separate top banner. */
export default function BoroughHeroPrice({ slug }: { slug: string }) {
  const info = boroughDetails[slug];
  if (!info) return null;
  const isCity = slug === "city-of-london";
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 rounded-xl border border-[#c8dcd8] bg-white px-4 py-3 shadow-sm sm:px-5" aria-label={"WEDRAWPLANS fixed fee starting offer for " + info.name}>
      <div className="min-w-[130px]">
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#2a7278]">{isCity ? "Residential planning drawings" : "Extension & loft planning drawings"}</p>
        <p className="mt-1 text-[25px] font-extrabold leading-none tracking-tight text-[#213d41]">From £750</p>
      </div>
      <p className="max-w-sm flex-1 text-[12px] leading-5 text-[#4e6365]">
        For qualifying straightforward residential planning drawing packages in {info.name}. A written fixed-fee quote confirms the scope; surveys, council fees and technical Building Regulations drawings are separate unless specifically included.
      </p>
      <Link href="/get-drawings-quote" className="inline-flex shrink-0 rounded-full bg-[#236d7b] px-4 py-2.5 text-center text-[12px] font-bold text-white transition hover:bg-[#175261]">
        Get your fixed-fee quote
      </Link>
    </div>
  );
}
