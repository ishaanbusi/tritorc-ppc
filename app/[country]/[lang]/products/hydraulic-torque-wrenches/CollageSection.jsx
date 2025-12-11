"use client";
import Image from "next/image";

export default function CollageSection() {
  const images = [
    "/images/collage/TSL in Wind Turbine Gen 01.jpg",
    "/images/collage/Dry Rental Gen New 01.jpg",
    "/images/collage/ECITB Training Gen 103.png",
    "/images/collage/Gemini_Generated_Image_mf1dddmf1dddmf1dddmf1d.png",
    "/images/collage/Hot Tapping ONGC 002.jpeg",
    // "/images/collage/Hot Tapping ONGC Gen 002.png",
    "/images/collage/TSL in Wind Turbine Gen White - HR.png",
  ];

  return (
    <section className="w-full py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="
              overflow-hidden rounded-xl
              grayscale hover:grayscale-0
              transition-all duration-700 ease-in-out
              transform hover:scale-[1.03]
            "
          >
            <Image
              src={src}
              alt={`Collage Image ${idx + 1}`}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
