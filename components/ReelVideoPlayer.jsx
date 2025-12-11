"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play, Volume2, VolumeX } from "lucide-react";

export default function ReelVideoPlayer({ video }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <div
      className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden bg-black cursor-pointer group"
      onClick={togglePlay}
    >
      {/* Thumbnail when paused */}
      {!playing && (
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover"
        />
      )}

      {/* Actual Video */}
      <video
        ref={videoRef}
        muted={muted}
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        {video.sources?.map((source, i) => (
          <source key={i} src={source.src} type={source.type} />
        ))}
      </video>

      {/* Play button overlay */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-[#D6312F] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition">
            <Play className="w-10 h-10 text-white ml-1" />
          </div>
        </div>
      )}

      {/* Mute button */}
      {playing && (
        <button
          className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white"
          onClick={toggleMute}
        >
          {muted ? <VolumeX /> : <Volume2 />}
        </button>
      )}

      {/* Title & Duration */}
      <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
        <h3 className="text-xl font-bold">{video.title}</h3>
        <p className="text-sm opacity-80">{video.duration}</p>
      </div>
    </div>
  );
}
