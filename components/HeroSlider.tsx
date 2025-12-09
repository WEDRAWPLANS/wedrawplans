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

  // Auto-advance
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
    <section className="w-full bg-white border-b border-slate-200 overflow-hidden">
      {/* FULL WIDTH CONTAINER */}
      <div className="w-full relative overflow-hidden">

        {/* Sliding Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="
                w-full flex-shrink-0
                h-[260px] 
                sm:h-[330px]
                md:h-[420px]
                lg:h-[520px]
                xl:h-[560px]
              "
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={() => goTo(current - 1)}
          aria-label="Prev"
          className="
            absolute left-4 top-1/2 -translate-y-1/2 
            z-20 bg-white/80 hover:bg-white 
            shadow-md rounded-full px-3 py-2 text-xl
          "
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => goTo(current + 1)}
          aria-label="Next"
          className="
            absolute right-4 top-1/2 -translate-y-1/2 
            z-20 bg-white/80 hover:bg-white 
            shadow-md rounded-full px-3 py-2 text-xl
          "
        >
          ›
        </button>

      </div>
    </section>
  );
};

export default HeroSlider;
