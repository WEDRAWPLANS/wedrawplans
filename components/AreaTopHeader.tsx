import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  subtitle?: string;
  titleLine?: string;
};

export default function AreaTopHeader({
  subtitle = "Architectural Drawing Consultants",
  titleLine = "Architectural Drawings for Extensions, Lofts + New Builds at an Affordable Fixed Cost",
}: Props) {
  return (
    <header className="bg-[#fdf8f3]/95 backdrop-blur relative z-[9999] border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-3 lg:px-6">
        <div className="flex flex-col items-center text-center">
          <Link href="/" aria-label="Go to homepage" className="inline-block cursor-pointer">
            <Image
              src="/images/wedrawplans-logo.png"
              alt="WEDRAWPLANS"
              width={420}
              height={140}
              className="h-24 w-auto object-contain"
              priority
            />
          </Link>

          <div className="mt-3 text-[11px] tracking-[0.18em] text-slate-600 uppercase">
            {subtitle}
          </div>

          <div className="mt-2 max-w-3xl text-[13px] font-medium text-slate-800">
            {titleLine}
          </div>
        </div>

        <hr className="mt-5 border-t border-slate-600" />
      </div>
    </header>
  );
}
