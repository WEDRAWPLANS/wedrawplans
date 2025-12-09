// components/HeroSlider.tsx
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

  // Auto advance
  useEffect(() => {
    if (slides.length <= 1) return;

    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  const goTo = (index: number) => {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    setCurrent(index);
  };

  if (!slides.length) return null;

  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden rounded-lg md:rounded-xl shadow-sm md:shadow">
          {/* Slider track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 h-[230px] sm:h-[280px] md:h-[360px] lg:h-[420px]"
              >
                {/* Important: use next/image in real app if you like */}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>

          {/* Left arrow */}
          {slides.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => goTo(current - 1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white px-3 py-2 text-sm font-medium shadow-sm"
              >
                ‹
              </button>

              {/* Right arrow */}
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => goTo(current + 1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white px-3 py-2 text-sm font-medium shadow-sm"
              >
                ›
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => goTo(idx)}
                    className={`h-2.5 w-2.5 rounded-full border border-black/30 transition
                    ${idx === current ? "bg-black/80" : "bg-white/80 hover:bg-black/40"}`}
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
