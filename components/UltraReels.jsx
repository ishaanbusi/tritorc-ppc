"use client";

import React, { useRef, useState, useEffect } from "react";
import { X, Volume2, VolumeX } from "lucide-react";

// STATIC VIDEO LIST
const videos = [
  {
    title: "Quality Control",
    src: "/videos/QC.mp4",
  },
  {
    title: "Manufacturing Line",
    src: "/videos/Manufacturing.mp4",
  },
  {
    title: "Design & Assembly",
    src: "/videos/Designing.mp4",
  },
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
    <div className="py-20">
      {/* SECTION HEADER */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-bold mb-4">
          Behind the Scenes
        </div>
        <h2 className="text-4xl lg:text-5xl font-black">
          Manufacturing Excellence
        </h2>
        <p className="text-xl text-gray-600 mt-4">
          Watch precision engineering in action
        </p>
      </div>

      {/* MOBILE = REELS / DESKTOP = GRID */}
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
    </div>
  );
}

/* ---------------------------------------------------
   📱 MOBILE FULLSCREEN REELS
--------------------------------------------------- */
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
    return () => {
      if (videoRefs.current[active]) videoRefs.current[active].pause();
    };
  }, [active]);

  const handleSwipe = (e) => {
    const delta = e.changedTouches[0].clientY - startY.current;

    if (delta > 80 && active > 0) setActive(active - 1);
    if (delta < -80 && active < videos.length - 1) setActive(active + 1);
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

function MobileReel({ video, setRef }) {
  const [muted, setMuted] = useState(true);

  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <video
        ref={setRef}
        src={video.src}
        className="w-full h-full object-cover"
        muted={muted}
        loop
        playsInline
      />

      {/* MUTE BUTTON */}
      <button
        onClick={() => setMuted((m) => !m)}
        className="absolute top-6 right-6 p-2 bg-black/40 rounded-full"
      >
        {muted ? (
          <VolumeX className="text-white" />
        ) : (
          <Volume2 className="text-white" />
        )}
      </button>

      {/* TITLE */}
      <div className="absolute bottom-10 left-5 text-white">
        <h3 className="text-xl font-bold">{video.title}</h3>
      </div>
    </div>
  );
}

/* ---------------------------------------------------
   💻 DESKTOP GRID WITH HOVER AUTOPLAY + POSTERS
--------------------------------------------------- */
function DesktopGrid({ videos, openModal }) {
  const [posters, setPosters] = useState({});
  const hoverRefs = useRef([]);

  // GENERATE POSTERS (NO BLACK SCREEN)
  useEffect(() => {
    videos.forEach((video, index) => {
      const vid = document.createElement("video");
      vid.src = video.src;
      vid.muted = true;
      vid.crossOrigin = "anonymous";
      vid.preload = "auto";

      vid.addEventListener("loadeddata", () => {
        vid.currentTime = 0.05; // ensures a real frame, not blank
      });

      vid.addEventListener("seeked", () => {
        const canvas = document.createElement("canvas");
        canvas.width = vid.videoWidth;
        canvas.height = vid.videoHeight;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);

        setPosters((p) => ({
          ...p,
          [index]: canvas.toDataURL("image/jpeg", 0.7),
        }));
      });
    });
  }, []);

  const handleHover = (i, play) => {
    const vid = hoverRefs.current[i];
    if (vid) play ? vid.play().catch(() => {}) : vid.pause();
  };

  return (
    <div className="grid grid-cols-3 gap-6  mx-auto px-6">
      {videos.map((v, i) => (
        <div
          key={i}
          onClick={() => openModal(i)}
          onMouseEnter={() => handleHover(i, true)}
          onMouseLeave={() => handleHover(i, false)}
          className="cursor-pointer rounded-3xl overflow-hidden relative bg-black aspect-[9/16] group"
        >
          {/* POSTER */}
          <img
            src={posters[i]}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
          />

          {/* HOVER AUTOPLAY VIDEO */}
          <video
            ref={(el) => (hoverRefs.current[i] = el)}
            src={v.src}
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h3 className="font-bold">{v.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------
   🪟 DESKTOP MODAL FULL REEL VIEWER
--------------------------------------------------- */
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
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[9999]">
      {/* CLOSE BUTTON */}
      <button className="absolute top-6 right-6" onClick={() => setIndex(null)}>
        <X className="text-white w-8 h-8" />
      </button>

      <div className="relative w-[380px] h-[90vh] bg-black rounded-3xl overflow-hidden">
        <video
          ref={vidRef}
          src={videos[index].src}
          muted={muted}
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        <button
          onClick={() => setMuted((m) => !m)}
          className="absolute top-4 right-4 p-2 bg-black/40 rounded-full"
        >
          {muted ? (
            <VolumeX className="text-white" />
          ) : (
            <Volume2 className="text-white" />
          )}
        </button>

        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="font-bold text-lg">{videos[index].title}</h3>
        </div>
      </div>
    </div>
  );
}
