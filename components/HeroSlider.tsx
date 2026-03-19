import React, { useEffect, useMemo, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

interface HeroSliderProps {
  slides: Slide[];
  intervalMs?: number;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  intervalMs = 5000,
}) => {
  const [current, setCurrent] = useState(0);

  const safeSlides = useMemo(
    () => slides.filter((slide) => slide?.src),
    [slides]
  );

  useEffect(() => {
    if (safeSlides.length <= 1) return;

    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % safeSlides.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [safeSlides.length, intervalMs]);

  useEffect(() => {
    if (current >= safeSlides.length) {
      setCurrent(0);
    }
  }, [current, safeSlides.length]);

  const goTo = (index: number) => {
    if (!safeSlides.length) return;
    if (index < 0) index = safeSlides.length - 1;
    if (index >= safeSlides.length) index = 0;
    setCurrent(index);
  };

  if (!safeSlides.length) return null;

  return (
    <section className="w-full border-b border-slate-200 bg-[#f8f4f0]">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-14">
        <div className="mb-8 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
            Architectural drawing showcase
          </p>

          <h2 className="mt-3 text-[22px] font-semibold uppercase tracking-[0.12em] text-slate-900 sm:text-[28px] lg:text-[34px]">
            Professional drawings prepared for planning, pricing and construction
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-[13px] text-slate-700 sm:text-[15px] lg:text-[17px]">
            Planning drawings, building regulation details and design packages prepared to help homeowners, builders and councils move forward with clarity.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] bg-white shadow-xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {safeSlides.map((slide, idx) => (
              <div
                key={`${slide.src}-${idx}`}
                className="relative w-full flex-shrink-0"
              >
                <div className="relative h-[260px] sm:h-[360px] md:h-[440px] lg:h-[560px] xl:h-[620px]">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="h-full w-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6 lg:p-8">
                    <div className="max-w-3xl">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/85 sm:text-[11px]">
                        WEDRAWPLANS project showcase
                      </p>
                      <p className="mt-2 text-[18px] font-semibold leading-tight sm:text-[24px] lg:text-[32px]">
                        {slide.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {safeSlides.length > 1 && (
            <>
              <button
                onClick={() => goTo(current - 1)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-lg shadow-md transition hover:bg-white sm:left-4 sm:px-4 sm:py-2.5 sm:text-xl"
              >
                ‹
              </button>

              <button
                onClick={() => goTo(current + 1)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-lg shadow-md transition hover:bg-white sm:right-4 sm:px-4 sm:py-2.5 sm:text-xl"
              >
                ›
              </button>

              <div className="absolute inset-x-0 bottom-3 z-20 flex items-center justify-center gap-2 sm:bottom-4">
                {safeSlides.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to image ${idx + 1}`}
                    onClick={() => goTo(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === current
                        ? "w-8 bg-white"
                        : "w-2.5 bg-white/60 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-full bg-[#64b7c4] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#4da4b4]"
          >
            Get my fixed fee quote
          </a>

          <a
            href="tel:+442036548508"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-[13px] font-semibold text-slate-900 hover:bg-slate-900 hover:text-white"
          >
            Call 020 3654 8508
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
