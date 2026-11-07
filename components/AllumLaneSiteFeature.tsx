import Image from "next/image";
import Link from "next/link";

const PROJECT = "/case-studies/allum-lane-elstree-major-house-extension";
const POSTER = "/images/case-studies/allum-lane/3d-03.webp";

type Props = {
  placement?: "home" | "service" | "regional";
  title?: string;
  intro?: string;
};

export default function AllumLaneSiteFeature({
  placement = "service",
  title = "Allum Lane, Elstree — original 3D architectural design",
  intro = "Explore an approved major house-extension scheme in Hertsmere, with coordinated existing and proposed plans, three selected architectural 3D views and three approved drawing examples.",
}: Props) {
  const isHome = placement === "home";
  const isRegional = placement === "regional";
  return (
    <section
      id={isHome ? "allum-lane-home-showcase" : undefined}
      aria-label="WEDRAWPLANS Allum Lane architectural project showcase"
      className={"border-y border-[#dce8e2] " + (isHome ? "bg-[#f3f8f5] py-8 sm:py-11" : isRegional ? "bg-[#f8faf8] py-8 sm:py-10" : "bg-[#f4f9f6] py-9 sm:py-12")}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-7">
        <div className={"grid items-center gap-5 md:gap-8 " + (isHome ? "lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]" : "md:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)]")}>
          <div className="overflow-hidden rounded-[17px] border border-[#d5e3dc] bg-white shadow-[0_12px_28px_rgba(27,59,63,.07)]">
            <Link href={PROJECT} className="group block" aria-label="Open the selected Allum Lane 3D visuals and approved drawing examples">
              <div className="relative aspect-video bg-[#edf3ef]">
                <Image
                  src={POSTER}
                  alt="Original 3D architectural design for the approved Allum Lane Elstree extension, showing glazed gables and the rear garden"
                  fill
                  sizes="(max-width: 768px) 100vw, 47vw"
                  className="pointer-events-none object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  draggable={false}
                />
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-[#e7eee9] px-4 py-2.5">
                <span className="text-[11px] font-semibold text-[#42666c]">Original WEDRAWPLANS 3D design</span>
                <span className="text-[11px] font-bold text-[#26747b]">View project →</span>
              </div>
            </Link>
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-[10px] font-bold uppercase tracking-[.17em] text-[#aa675f]">Approved architectural project</p>
              <span className="rounded-full border border-[#bad9c7] bg-[#e8f5eb] px-2.5 py-1 text-[10px] font-bold text-[#2a6b4f]">Hertsmere · 2020</span>
            </div>
            <h2 className="mt-2 text-[22px] font-semibold leading-tight tracking-tight text-[#233f43] sm:text-[27px]">{title}</h2>
            <p className="mt-3 text-[13px] leading-7 text-[#536e73] sm:text-[14px]">{intro}</p>
            <p className="mt-2 text-[12px] leading-6 text-[#59767a]">
              Architectural design work, not photographs of a completed building. Hertsmere planning reference: <strong>20/0662/HSE</strong>.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <Link href={PROJECT} className="rounded-full bg-[#236c76] px-5 py-2.5 text-[12px] font-bold text-white transition hover:bg-[#19515a]">
                Explore the 3D visuals &amp; 3 drawings →
              </Link>
              <Link href="/get-drawings-quote?source=allum-lane-showcase" className="rounded-full border border-[#a9cbc5] bg-white px-5 py-2.5 text-[12px] font-bold text-[#286872] transition hover:bg-[#ebf5ef]">
                Get a fixed-fee quote
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
