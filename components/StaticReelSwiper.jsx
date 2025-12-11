"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/mousewheel";

import Image from "next/image";
import { Play, Volume2, VolumeX } from "lucide-react";

export default function StaticReelSwiper() {
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [muted, setMuted] = useState(true);

  // YOUR 3 STATIC REELS (vertical reels)
  const videos = [
    {
      title: "Quality Control",
      duration: "1:30",
      thumbnail: "/images/videos/qc.jpg",
      sources: [
        { src: "/videos/QC.webm", type: "video/webm" },
        { src: "/videos/QC.mp4", type: "video/mp4" },
      ],
    },
    {
      title: "Manufacturing Process",
      duration: "2:45",
      thumbnail: "/images/videos/manuf.jpg",
      sources: [
        { src: "/videos/Manufacturing.webm", type: "video/webm" },
        { src: "/videos/Manufacturing.mp4", type: "video/mp4" },
      ],
    },
    {
      title: "Design Overview",
      duration: "1:10",
      thumbnail: "/images/videos/design.jpg",
      sources: [
        { src: "/videos/Designing.webm", type: "video/webm" },
        { src: "/videos/Designing.mp4", type: "video/mp4" },
      ],
    },
  ];

  // Auto-play the active reel
  const onSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);

    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === swiper.activeIndex) {
        v.muted = muted;
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  };

  // Tap to play/pause
  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) video.play();
    else video.pause();
  };

  // Toggle mute
  const toggleMute = (e) => {
    e.stopPropagation();
    const newMuted = !muted;
    setMuted(newMuted);

    videoRefs.current.forEach((v) => {
      if (v) v.muted = newMuted;
    });
  };

  return (
    <div className="w-full h-screen bg-black">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel
        modules={[Mousewheel]}
        className="h-full"
        onSlideChange={onSlideChange}
      >
        {videos.map((video, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black"
              onClick={() => togglePlay(i)}
            >
              {/* Reel Video */}
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                className="w-full h-full object-cover"
                playsInline
                muted={muted}
              >
                {video.sources.map((s, x) => (
                  <source key={x} src={s.src} type={s.type} />
                ))}
              </video>

              {/* Thumbnail overlay before video starts */}
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className={`object-cover absolute inset-0 transition-opacity duration-300 ${
                  activeIndex === i ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className={`transition ${
                    activeIndex === i ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="w-24 h-24 bg-[#D6312F] rounded-full flex items-center justify-center shadow-2xl">
                    <Play className="w-12 h-12 text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Title + Duration */}
              <div className="absolute bottom-20 left-6 right-6 text-white drop-shadow-xl">
                <h2 className="text-2xl font-bold">{video.title}</h2>
                <p className="opacity-80">{video.duration}</p>
              </div>

              {/* Mute Button */}
              <button
                onClick={toggleMute}
                className="absolute top-8 right-8 bg-black/40 p-3 rounded-full text-white"
              >
                {muted ? <VolumeX size={28} /> : <Volume2 size={28} />}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
