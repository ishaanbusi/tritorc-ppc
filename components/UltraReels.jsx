"use client";

import React, { useRef, useState, useEffect } from "react";
import { X, Volume2, VolumeX } from "lucide-react";

const videos = [
  { title: "Quality Control", src: "/videos/QC.mp4" },
  { title: "Manufacturing Line", src: "/videos/Manufacturing.mp4" },
  { title: "Design & Assembly", src: "/videos/Designing.mp4" },
];

export default function UltraReels() {
  const [isMobile, setIsMobile] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);

  useEffect(() => {
    const detect = () => setIsMobile(window.innerWidth < 1024);
    detect();
    window.addEventListener("resize", detect);
    return () => window.removeEventListener("resize", detect);
  }, []);

  return (
    <section className="py-12 lg:py-16">
      <div className="text-center mb-8 lg:mb-12">
        <span className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-bold mb-4">
          Behind the Scenes
        </span>
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
          Manufacturing Excellence
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Precision engineering in action
        </p>
      </div>

      {isMobile ? (
        <MobileReels videos={videos} />
      ) : (
        <>
          <DesktopGrid videos={videos} openModal={setModalIndex} />
          {modalIndex !== null && (
            <ReelModal
              index={modalIndex}
              setIndex={setModalIndex}
              videos={videos}
            />
          )}
        </>
      )}
    </section>
  );
}

/* Mobile Reels */
function MobileReels({ videos }) {
  const [active, setActive] = useState(0);
  const videoRefs = useRef([]);
  const startY = useRef(0);

  useEffect(() => {
    const v = videoRefs.current[active];
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
    return () => videoRefs.current[active]?.pause();
  }, [active]);

  const handleSwipe = (e) => {
    const delta = e.changedTouches[0].clientY - startY.current;
    if (delta > 80 && active > 0) setActive(active - 1);
    else if (delta < -80 && active < videos.length - 1) setActive(active + 1);
  };

  return (
    <div className="h-screen overflow-hidden relative">
      {videos.map((v, i) => (
        <div
          key={i}
          onTouchStart={(e) => (startY.current = e.touches[0].clientY)}
          onTouchEnd={handleSwipe}
          className="absolute inset-0 transition-transform duration-500"
          style={{ transform: `translateY(${(i - active) * 100}%)` }}
        >
          <MobileReel video={v} setRef={(el) => (videoRefs.current[i] = el)} />
        </div>
      ))}
    </div>
  );
}

const MobileReel = React.memo(({ video, setRef }) => {
  const [muted, setMuted] = useState(true);

  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <video
        ref={setRef}
        src={video.src}
        className="w-full h-full object-cover"
        muted={muted}
        loop
        autoPlay
        playsInline
      />
      <button
        onClick={() => setMuted((m) => !m)}
        className="absolute top-4 right-4 p-2 bg-black/40 rounded-full hover:bg-black/60 transition-colors"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted ? (
          <VolumeX size={20} className="text-white" />
        ) : (
          <Volume2 size={20} className="text-white" />
        )}
      </button>
      <div className="absolute bottom-6 left-4 text-white">
        <h3 className="text-lg font-semibold">{video.title}</h3>
      </div>
    </div>
  );
});

MobileReel.displayName = "MobileReel";

/* Desktop Grid with Expanded Spacing */
function DesktopGrid({ videos, openModal }) {
  const [posters, setPosters] = useState({});
  const hoverRefs = useRef([]);

  useEffect(() => {
    videos.forEach((video, index) => {
      const vid = document.createElement("video");
      vid.src = video.src;
      vid.muted = true;
      vid.crossOrigin = "anonymous";
      vid.preload = "metadata";

      vid.addEventListener("loadeddata", () => {
        vid.currentTime = 0.1;
      });

      vid.addEventListener("seeked", () => {
        const canvas = document.createElement("canvas");
        canvas.width = vid.videoWidth;
        canvas.height = vid.videoHeight;
        canvas
          .getContext("2d")
          ?.drawImage(vid, 0, 0, canvas.width, canvas.height);
        setPosters((p) => ({
          ...p,
          [index]: canvas.toDataURL("image/jpeg", 0.7),
        }));
      });
    });
  }, [videos]);

  useEffect(() => {
    hoverRefs.current.forEach((vid) => {
      if (vid) {
        vid.play().catch(() => {});
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
      {videos.map((v, i) => (
        <div
          key={i}
          onClick={() => openModal(i)}
          className="cursor-pointer rounded-2xl overflow-hidden relative bg-black aspect-[9/16] group shadow-lg hover:shadow-2xl transition-shadow"
        >
          {posters[i] && (
            <img
              src={posters[i]}
              alt={v.title}
              className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300"
            />
          )}
          <video
            ref={(el) => (hoverRefs.current[i] = el)}
            src={v.src}
            muted
            loop
            autoPlay
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-white font-semibold text-sm">{v.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

/* Modal */
function ReelModal({ index, setIndex, videos }) {
  const vidRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.currentTime = 0;
      vidRef.current.play().catch(() => {});
    }
  }, [index]);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <button
        className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
        onClick={() => setIndex(null)}
        aria-label="Close"
      >
        <X className="text-white w-7 h-7" />
      </button>

      <div className="relative w-[340px] h-[85vh] bg-black rounded-2xl overflow-hidden shadow-2xl">
        <video
          ref={vidRef}
          src={videos[index].src}
          muted={muted}
          loop
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setMuted((m) => !m)}
          className="absolute top-3 right-3 p-2 bg-black/40 rounded-full hover:bg-black/60 transition-colors"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? (
            <VolumeX size={20} className="text-white" />
          ) : (
            <Volume2 size={20} className="text-white" />
          )}
        </button>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="font-semibold">{videos[index].title}</h3>
        </div>
      </div>
    </div>
  );
}
