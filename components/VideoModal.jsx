"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * video: {
 *  title, description, duration, thumbnail, sources: [{src,type}], rawUrl
 * }
 *
 * onClose: fn
 */
export default function VideoModal({ video, onClose }) {
  const overlayRef = useRef(null);
  const playerRef = useRef(null);
  const [mountedPlayer, setMountedPlayer] = useState(false);
  const [isYouTube, setIsYouTube] = useState(false);
  const [youTubeEmbed, setYouTubeEmbed] = useState("");

  useEffect(() => {
    // detect youtube
    if (!video) return;
    const u =
      video.rawUrl ||
      (video.sources && video.sources[0] && video.sources[0].src) ||
      "";
    const ytId = extractYouTubeId(u);
    if (ytId) {
      setIsYouTube(true);
      setYouTubeEmbed(
        `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`
      );
    } else {
      setIsYouTube(false);
    }

    // mount actual player after small delay to allow modal animation to start (improves perceived speed)
    const t = setTimeout(() => setMountedPlayer(true), 120);
    return () => clearTimeout(t);
  }, [video]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // click outside
  useEffect(() => {
    const handler = (e) => {
      if (e.target === overlayRef.current) onClose();
    };
    if (overlayRef.current)
      overlayRef.current.addEventListener("click", handler);
    return () => {
      if (overlayRef.current)
        overlayRef.current.removeEventListener("click", handler);
    };
  }, [onClose]);

  // Focus trapping simple: focus player when mounted
  useEffect(() => {
    if (mountedPlayer && playerRef.current) {
      playerRef.current.focus?.();
    }
  }, [mountedPlayer]);

  if (!video) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-50"
          aria-label="Close video"
        >
          ✕
        </button>

        <div className="bg-black rounded-2xl overflow-hidden">
          {/* Player area - keep 16:9 for landscape, but video tag will honor aspect */}
          <div className="relative w-full aspect-video bg-black">
            {!mountedPlayer && (
              // show thumbnail placeholder until mounting
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover"
                priority
              />
            )}

            {mountedPlayer && isYouTube && (
              <iframe
                ref={playerRef}
                title={video.title}
                src={youTubeEmbed}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              />
            )}

            {mountedPlayer && !isYouTube && (
              <video
                ref={playerRef}
                className="w-full h-full"
                controls
                playsInline
                autoPlay
                preload="metadata"
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
              >
                {video.sources && video.sources.length > 0 ? (
                  video.sources.map((s, idx) => (
                    <source
                      key={idx}
                      src={s.src}
                      type={s.type || guessTypeFromUrl(s.src)}
                    />
                  ))
                ) : (
                  // fallback to single rawUrl
                  <source
                    src={video.rawUrl}
                    type={guessTypeFromUrl(video.rawUrl)}
                  />
                )}
                Sorry — your browser does not support embedded videos.
              </video>
            )}
          </div>

          {/* Meta */}
          <div className="p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white text-xl font-bold">{video.title}</h3>
            {video.description && (
              <p className="text-gray-300 mt-2 text-sm">{video.description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* helpers */
function extractYouTubeId(url = "") {
  if (!url) return null;
  try {
    const u = new URL(url.includes("http") ? url : `https://${url}`);
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.slice(1);
    }
    if (u.hostname.includes("youtube.com")) {
      return u.searchParams.get("v");
    }
  } catch (e) {
    // fallback: regex
    const m = url.match(/(?:v=|youtu\.be\/|\/embed\/)([A-Za-z0-9_-]{6,})/);
    if (m) return m[1];
  }
  return null;
}

function guessTypeFromUrl(url = "") {
  const u = (url || "").toLowerCase();
  if (u.includes(".webm")) return "video/webm";
  if (u.includes(".mp4")) return "video/mp4";
  if (u.includes(".ogg") || u.includes(".ogv")) return "video/ogg";
  return "video/mp4";
}
