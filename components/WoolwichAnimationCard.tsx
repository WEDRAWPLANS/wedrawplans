import { useEffect, useState } from "react";

const base = "/images/case-studies/700-woolwich-road-greenwich-two-new-flats/";
const vimeo = "https://vimeo.com/396459625";
const locallyHostedVideo = "/videos/woolwich-road-architectural-animation.mp4";

export default function WoolwichAnimationCard({ compact = false }: { compact?: boolean }) {
  const [localVideoAvailable, setLocalVideoAvailable] = useState(false);
  useEffect(() => {
    let active = true;
    fetch(locallyHostedVideo, { method: "HEAD" })
      .then(response => { if (active) setLocalVideoAvailable(response.ok && (response.headers.get("content-type") || "").includes("video")); })
      .catch(() => { if (active) setLocalVideoAvailable(false); });
    return () => { active = false; };
  }, []);
  return (
    <div className="overflow-hidden rounded-[18px] border border-[#d9e6df] bg-white shadow-sm">
      <div className="px-5 py-5 sm:px-7">
        <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#28725f]">
          WEDRAWPLANS · Original architectural animation
        </p>
        <h3 className="mt-2 text-[21px] font-semibold leading-tight text-[#254a4d] sm:text-[26px]">
          Woolwich Road · Two additional rooftop flats
        </h3>
        <p className="mt-2 text-[13px] leading-6 text-[#526d71]">
          Explore the original rooftop-extension design for the two new fourth-floor flats.
        </p>
      </div>
      {localVideoAvailable ? (
        <video
          className="aspect-video w-full bg-[#19333b]"
          src={locallyHostedVideo}
          controls
          preload="metadata"
          poster={base + "planning-05-cover-perspective.webp"}
          playsInline
          aria-label="WEDRAWPLANS original Woolwich Road architectural animation"
        />
      ) : (
        <a href={vimeo} target="_blank" rel="noopener noreferrer" className="group relative block aspect-video overflow-hidden bg-[#213c43]" aria-label="Watch the original Woolwich Road architectural animation on Vimeo in a new tab">
          <img src={base + "planning-05-cover-perspective.webp"} alt="WEDRAWPLANS original rooftop residential development architectural visualisation" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
          <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/25" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-[74px] w-[74px] items-center justify-center rounded-full border-2 border-white bg-[#163d45]/90 text-[32px] text-white shadow-xl transition group-hover:scale-110" aria-hidden="true">▶</span>
          </span>
          <span className="absolute bottom-4 left-4 right-4 rounded-xl bg-[#133b46]/90 px-4 py-3 text-center text-[14px] font-bold text-white sm:left-auto sm:right-6">Watch original animation on Vimeo ↗</span>
        </a>
      )}
      <p className="px-5 py-3 text-[11px] leading-5 text-[#637b80] sm:px-7">
        {localVideoAvailable ? "The original animation plays directly on this website." : "The original video opens on Vimeo while website-hosted playback is unavailable."}</p>
    </div>
  );
}
