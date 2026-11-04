import Link from "next/link";

export default function PortfolioJourneyLinks({ serviceLabel }: { serviceLabel: string }) {
  return (
    <section aria-label="Explore more WEDRAWPLANS services and approved projects" className="border-t border-[#dce8e4] bg-[#f3f8f6]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#31737b]">WEDRAWPLANS · London &amp; M25</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#254247]">Explore approved architectural projects</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#4d696e]">
          Browse our wider portfolio of planning approvals and architectural drawing projects across London and nearby areas.
          These examples show our broader experience; contact us to discuss the drawing requirements for your {serviceLabel} project.
        </p>
        <nav aria-label="Useful next steps" className="mt-5 flex flex-wrap items-center gap-3">
          <Link href="/case-studies" className="inline-flex rounded-full bg-[#245963] px-5 py-3 text-sm font-semibold text-white hover:bg-[#173e46]">See our approved projects →</Link>
          <Link href="/get-drawings-quote" className="inline-flex rounded-full border border-[#8eb9b6] bg-white px-5 py-3 text-sm font-semibold text-[#245963] hover:bg-[#e9f3f0]">Get a fixed-fee quote</Link>
          <Link href="/" className="inline-flex px-3 py-3 text-sm font-semibold text-[#245963] underline underline-offset-4 hover:text-[#173e46]">← Back to homepage</Link>
        </nav>
      </div>
    </section>
  );
}
