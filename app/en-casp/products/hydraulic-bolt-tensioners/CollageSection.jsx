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
    <section className="w-full">
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          gap-0
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
              grayscale
              hover:grayscale-0
              transition
              duration-300
              ease-in-out
            "
          >
            <Image
              src={src}
              alt={`Collage Image ${idx + 1}`}
              width={800}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
}
