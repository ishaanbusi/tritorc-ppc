"use client";

import Image from "next/image";
import React from "react";

// ROW 1 COUNTRIES
const row1 = [
  { name: "United States", flag: "https://flagcdn.com/w1280/us.png" },
  { name: "United Kingdom", flag: "https://flagcdn.com/w1280/gb.png" },
  { name: "Japan", flag: "/flags/japan.png" },
  { name: "Australia", flag: "/flags/australia.png" },
  { name: "France", flag: "/flags/france.png" },
  { name: "Italy", flag: "/flags/italy.png" },
];

// ROW 2 COUNTRIES
const row2 = [
  { name: "Canada", flag: "/flags/canada.png" },
  { name: "Brazil", flag: "/flags/brazil.png" },
  { name: "Mexico", flag: "/flags/mexico.png" },
  { name: "South Korea", flag: "/flags/southkorea.png" },
  { name: "Netherlands", flag: "/flags/netherlands.png" },
  { name: "Sweden", flag: "/flags/sweden.png" },
];

// ROW 3 COUNTRIES
const row3 = [
  { name: "India", flag: "/flags/india.png" },
  { name: "Singapore", flag: "/flags/singapore.png" },
  { name: "UAE", flag: "/flags/uae.png" },
  { name: "Turkey", flag: "/flags/turkey.png" },
  { name: "South Africa", flag: "/flags/southafrica.png" },
  { name: "New Zealand", flag: "/flags/newzealand.png" },
];

function MarqueeRow({ items, reverse }) {
  return (
    <div className="overflow-hidden w-full py-4">
      <div
        className={`flex gap-6 min-w-max animate-marquee ${
          reverse ? "animate-marquee-reverse" : ""
        }`}
      >
        {/* repeat row 2x for smooth looping */}
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl shadow-md px-5 py-4 flex items-center gap-4 min-w-[260px]"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={item.flag}
                alt={item.name}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="font-semibold text-[18px]">{item.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 tracking-widest text-[11px]">
                  GLOBAL SHIPPING COVERAGE
                </span>
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CountryMarquee() {
  return (
    <div className="w-full bg-white py-12 space-y-4">
      {/* Row 1 → right */}
      <MarqueeRow items={row1} reverse={false} />

      {/* Row 2 → left */}
      <MarqueeRow items={row2} reverse={true} />

      {/* Row 3 → right */}
      <MarqueeRow items={row3} reverse={false} />
    </div>
  );
}
