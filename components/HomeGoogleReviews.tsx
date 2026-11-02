import Link from "next/link";

type Props = { googleProfileUrl: string; googleReviewsUrl: string };

export default function HomeGoogleReviews({ googleProfileUrl, googleReviewsUrl }: Props) {
  return (
    <section id="google-reviews" aria-labelledby="google-reviews-heading" className="border-t border-[#e7dad1] bg-[#fff9f5] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid items-center gap-8 rounded-[24px] border border-[#ebdfd6] bg-white px-6 py-8 shadow-[0_14px_36px_rgba(31,56,62,0.045)] sm:px-10 sm:py-10 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a2635b]">Independent customer feedback</p>
            <h2 id="google-reviews-heading" className="mt-3 text-[20px] font-medium leading-snug tracking-tight text-[#233d43] sm:text-[24px]">
              See what our clients say on Google
            </h2>
            <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#5a6d72]">
              Choosing the right architectural drawing consultant matters. Read customer feedback about WEDRAWPLANS and explore our planning and drawing services for your own project.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#57aab8] px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-[#378c9b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#247583]">
                Read our Google reviews <span className="ml-2" aria-hidden="true">↗</span>
              </a>
              <Link href="/case-studies" className="inline-flex items-center justify-center rounded-full border border-[#b7d4d6] bg-white px-6 py-3 text-[13px] font-semibold text-[#2c747c] transition hover:bg-[#f0f8f7]">
                View approved projects
              </Link>
            </div>
          </div>
          <div className="rounded-[20px] border border-[#e3e9e7] bg-[#f7faf8] px-6 py-8 text-center sm:px-8">
            <p className="text-[18px] font-semibold tracking-tight text-[#374a4e]">Google customer reviews</p>
            <div className="mt-5 flex justify-center" role="img" aria-label="Five stars representing a published five-star customer review">
              <span aria-hidden="true" className="text-[36px] leading-none tracking-[0.13em] text-[#e4a528] sm:text-[43px]">★★★★★</span>
            </div>
            <p className="mt-4 text-[16px] font-semibold text-[#27454a]">Five-star customer feedback</p>
            <p className="mx-auto mt-3 max-w-sm text-[12px] leading-6 text-[#687b80]">
              WEDRAWPLANS has received a five-star customer review. Visit our Google Business Profile to read the published feedback and check the current overall rating.
            </p>
            <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#277987] underline underline-offset-4 hover:text-[#175663]">
              Read our Google reviews <span aria-hidden="true">↗</span>
            </a>
            <a href={googleProfileUrl} target="_blank" rel="noopener noreferrer" className="mt-3 block text-[11px] text-[#6c7b80] underline-offset-4 hover:underline">
              View our full Google Business Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
