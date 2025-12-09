import React, { useEffect, useState, useRef } from "react";

type Slide = {
  src: string;
  alt: string;
};

interface HeroSliderProps {
  slides: Slide[];
  speed?: number; // lower = slower
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  speed = 20, // controls smoothness
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  // Smooth infinite sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  // Reset when sliding track finishes 1 full cycle
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (offset >= track.scrollWidth / 2) setOffset(0);
  }, [offset]);

  // Duplicate slides to create seamless infinite loop
  const loopSlides = [...slides, ...slides];

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-0 lg:px-0 overflow-hidden">
        <div
          ref={trackRef}
          className="flex"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: "transform linear",
            whiteSpace: "nowrap",
          }}
        >
          {loopSlides.map((slide, index) => (
            <div
              key={index}
              className="
                flex-shrink-0 
                h-[180px] sm:h-[260px] md:h-[330px] lg:h-[400px] xl:h-[430px]
                w-full
                bg-white
                mr-1
              "
              style={{ width: "100%" }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-contain bg-white"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
