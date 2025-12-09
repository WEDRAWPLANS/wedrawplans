import React, { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

interface HeroSliderProps {
  slides: Slide[];
  intervalMs?: number;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides, intervalMs = 5000 }) => {
  const [current, setCurrent] = useState(0);

  // Auto-advance like drawplans
  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  const goTo = (index: number) => {
    if (!slides.length) return;
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    setCurrent(index);
  };

  if (!slides.length) return null;

  return (
    // White band under the header – same width as your main content
    <section className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Image strip */}
        <div className="relative w-full overflow-hidden">
          {/* Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className="
                  w-full flex-shrink-0
                  h-[220px]    /* small phones */
                  sm:h-[260px]
                  md:h-[340px]
                  lg:h-[410px] /* desktop – very close to drawplans height */
                  xl:h-[440px]
                "
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Arrows, same style both sides */}
          {slides.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => goTo(current - 1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 px-3 py-2 text-[20px] leading-none shadow-sm hover:bg-white"
              >
                ‹
              </button>

              <button
                type="button"
                aria-label="Next slide"
                onClick={() => goTo(current + 1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 px-3 py-2 text-[20px] leading-none shadow-sm hover:bg-white"
              >
                ›
              </button>

              {/* Small dots in the centre, like drawplans */}
              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goTo(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`
                      h-2 w-2 rounded-full border border-black/40
                      ${idx === current ? "bg-black/80" : "bg-white"}
                    `}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
