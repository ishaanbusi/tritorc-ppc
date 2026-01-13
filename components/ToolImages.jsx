"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ToolImages() {
  const images = [
    "/images/tsl-app.jpg",
    "/images/tsl-case.png",
    "/images/tsl-pump.jpg",
    "/images/collage/collage-1.png",
  ];

  // duplicate for infinite illusion
  const slides = [...images, ...images, ...images];

  const [index, setIndex] = useState(images.length);

  const CARD_WIDTH = 520;
  const GAP = 24;

  const slideStyle = {
    transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`,
    transition: "transform 0.6s ease",
  };

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIndex((prev) => prev - 1);
  };

  // ♾️ RESET (true infinite)
  const handleTransitionEnd = () => {
    if (index >= images.length * 2) {
      setIndex(images.length);
    }
    if (index <= images.length - 1) {
      setIndex(images.length * 2 - 1);
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#0b1625] via-[#0e1b2e] to-[#0b1625] py-20 overflow-hidden">
      {/* HEADER */}
      <div className="text-center mb-10 px-4">
        <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-xs sm:text-sm font-semibold text-white mb-3">
          Real-World Performance
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
          Tools in Action
        </h2>
        <p className="text-sm sm:text-lg text-gray-300">
          Real-world applications across industries
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="relative">
        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black text-white p-2 sm:p-3 rounded-full"
        >
          <ChevronLeft size={22} />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black text-white p-2 sm:p-3 rounded-full"
        >
          <ChevronRight size={22} />
        </button>

        {/* VIEWPORT */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-6 px-12 sm:px-20"
            style={slideStyle}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((img, i) => (
              <div
                key={i}
                className="
                  relative
                  min-w-[280px] sm:min-w-[420px] lg:min-w-[520px]
                  h-[180px] sm:h-[240px] lg:h-[300px]
                  rounded-xl sm:rounded-2xl
                  overflow-hidden
                  bg-gray-800
                  shadow-xl
                  flex-shrink-0
                "
              >
                <Image
                  src={img}
                  alt="Tool in action"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
