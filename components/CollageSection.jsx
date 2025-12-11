"use client";
import Image from "next/image";

export default function CollageSection() {
  const images = [
    "/images/collage/CBTL for Wind Application 201.jpg",
    "/images/collage/Dry Rental Gen New 01.jpg",
    "/images/collage/ECITB Training Gen 103.png",
    "/images/collage/collage-1.png",
    "/images/collage/Hot Tapping ONGC 002.jpeg",
    "/images/collage/tsl-wind-turbine-white.png",
  ];

  return (
    <section className="w-full py-6 md:py-10">
      <div
        className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        gap-2 
        sm:gap-4 
        h-[70vh] 
        sm:h-[80vh] 
        md:h-[88vh]
        w-full
      "
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="
              overflow-hidden 
              rounded-lg 
              grayscale 
              hover:grayscale-0 
              transition-all 
              duration-700 
              ease-in-out 
              hover:scale-[1.05]
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
