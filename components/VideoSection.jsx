"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useState, useRef } from "react";

export default function VideoSection({ product }) {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [orientations, setOrientations] = useState({});
  const videoRefs = useRef([]);

  // Use real product videos
  let videos = Array.isArray(product?.videos) ? product.videos : [];

  // If no videos → fallback to images
  if (videos.length === 0 && Array.isArray(product?.images)) {
    videos = product.images.map((img, idx) => ({
      title: `Behind The Scenes ${idx + 1}`,
      thumbnail: img,
      duration: "2:30",
      url: null,
    }));
  }

  const handleOrientation = (idx, img) => {
    const isVertical = img.naturalHeight > img.naturalWidth;
    setOrientations((prev) => ({
      ...prev,
      [idx]: isVertical ? "vertical" : "landscape",
    }));
  };

  const handlePlay = (idx) => {
    // Pause all other videos
    videoRefs.current.forEach((vid, i) => {
      if (vid && i !== idx) vid.pause();
    });

    setPlayingIndex(idx);
    setTimeout(() => {
      videoRefs.current[idx]?.play();
    }, 50);
  };

  const handleClose = (idx) => {
    videoRefs.current[idx]?.pause();
    setPlayingIndex(null);
  };

  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-bold mb-4">
            Behind the Scenes
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Manufacturing Excellence
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how we manufacture precision torque tools
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, idx) => {
            const orientation = orientations[idx] || "landscape";

            return (
              <div
                key={idx}
                className={`relative rounded-3xl overflow-hidden shadow-2xl group
                  ${
                    orientation === "vertical"
                      ? "aspect-[9/16]"
                      : "aspect-video"
                  }
                `}
              >
                {/* If playing → show real video element */}
                {playingIndex === idx && video.url ? (
                  <div className="relative w-full h-full bg-black">
                    <video
                      src={video.url}
                      ref={(el) => (videoRefs.current[idx] = el)}
                      controls
                      className="w-full h-full object-contain"
                    />

                    {/* Close Button */}
                    <button
                      onClick={() => handleClose(idx)}
                      className="absolute top-4 right-4 bg-black/70 text-white rounded-full p-2"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Thumbnail */}
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      onLoadingComplete={(img) => handleOrientation(idx, img)}
                      className="object-cover opacity-80 group-hover:opacity-50 transition"
                    />

                    {/* Play Button */}
                    <button
                      onClick={() => video.url && handlePlay(idx)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#D6312F] blur-xl opacity-50" />
                        <div className="w-20 h-20 bg-[#D6312F] rounded-full flex items-center justify-center">
                          <Play
                            className="w-10 h-10 text-white ml-1"
                            fill="white"
                          />
                        </div>
                      </div>
                    </button>

                    {/* Duration */}
                    {video.duration && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-white text-xs font-bold rounded-full">
                        {video.duration}
                      </div>
                    )}

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <h3 className="text-white font-bold text-lg">
                        {video.title}
                      </h3>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
