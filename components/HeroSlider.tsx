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
  intervalMs = 4500,
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

  const mobileVisibleSlides = useMemo(() => {
    if (!safeSlides.length) return [];
    return safeSlides;
  }, [safeSlides]);

  const desktopTop = safeSlides.slice(0, 2);
  const desktopMiddle = safeSlides.slice(2, 5);
  const desktopBottom = safeSlides.slice(5, 10);

  if (!safeSlides.length) return null;

  return (
    <section className="w-full border-b border-slate-200 bg-[#f8f4f0]">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-14">
        <div className="mb-8 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
            Real drawings • Real projects • Real build quality
          </p>
          <h2 className="mt-3 text-[22px] font-semibold uppercase tracking-[0.12em] text-slate-900 sm:text-[28px]">
            Real drawings. Real projects. Built across London.
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[13px] text-slate-700 sm:text-[15px]">
            Planning drawings, building regulation details and real extension work
            that help homeowners trust the process and move forward with confidence.
          </p>
        </div>

        {/* MOBILE / TABLET SLIDER */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-[24px] bg-white shadow-md">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {mobileVisibleSlides.map((slide, idx) => (
                <div
                  key={`${slide.src}-${idx}`}
                  className="w-full flex-shrink-0"
                >
                  <div className="relative h-[260px] sm:h-[340px]">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80">
                        WEDRAWPLANS showcase
                      </p>
                      <p className="mt-1 text-[14px] font-semibold">
                        {slide.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {mobileVisibleSlides.length > 1 && (
              <>
                <button
                  onClick={() => goTo(current - 1)}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-lg shadow-md hover:bg-white"
                >
                  ‹
                </button>

                <button
                  onClick={() => goTo(current + 1)}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-lg shadow-md hover:bg-white"
                >
                  ›
                </button>

                <div className="flex items-center justify-center gap-2 px-4 py-4">
                  {mobileVisibleSlides.map((_, idx) => (
                    <button
                      key={idx}
                      aria-label={`Go to image ${idx + 1}`}
                      onClick={() => goTo(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        idx === current
                          ? "w-8 bg-[#64b7c4]"
                          : "w-2.5 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* DESKTOP SHOWCASE */}
        <div className="hidden lg:block">
          <div className="space-y-4">
            {desktopTop.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {desktopTop.map((slide, idx) => (
                  <div
                    key={`${slide.src}-${idx}`}
                    className="group relative overflow-hidden rounded-[26px] bg-white shadow-md"
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-[320px] w-full object-cover object-center transition duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80">
                        Featured project
                      </p>
                      <p className="mt-1 text-[18px] font-semibold">
                        {slide.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {desktopMiddle.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {desktopMiddle.map((slide, idx) => (
                  <div
                    key={`${slide.src}-${idx}`}
                    className="group relative overflow-hidden rounded-[22px] bg-white shadow-sm"
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-[220px] w-full object-cover object-center transition duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                      <p className="text-[14px] font-semibold">{slide.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {desktopBottom.length > 0 && (
              <div className="grid grid-cols-5 gap-4">
                {desktopBottom.map((slide, idx) => (
                  <div
                    key={`${slide.src}-${idx}`}
                    className="group relative overflow-hidden rounded-[18px] bg-white shadow-sm"
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-[145px] w-full object-cover object-center transition duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 text-white">
                      <p className="text-[11px] font-semibold leading-tight">
                        {slide.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
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
