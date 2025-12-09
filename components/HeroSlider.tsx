import React, { useEffect, useState } from "react";

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

  // Auto-slide smoothly, no jump back
  useEffect(() => {
    if (slides.length <= 1) return;

    const id = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, intervalMs);

    return () => clearTimeout(id);
  }, [current, slides.length, intervalMs]);

  const goTo = (index: number) => {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    setCurrent(index);
  };

  if (!slides.length) return null;

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
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
                  h-[220px]
                  sm:h-[260px]
                  md:h-[340px]
                  lg:h-[410px]
                  xl:h-[440px]
                "
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-full w-full object-contain bg-white"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          {slides.length > 1 && (
            <>
              <button
                onClick={() => goTo(current - 1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-[20px] shadow-md"
              >
                ‹
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => goTo(current + 1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-[20px] shadow-md"
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
