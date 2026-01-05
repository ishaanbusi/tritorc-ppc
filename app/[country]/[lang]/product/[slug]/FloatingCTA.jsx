"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function FloatingCTA({ datasheetUrl }) {
  const [visible, setVisible] = useState(false);

  // ✅ Read params directly from route
  const params = useParams();
  const country = params?.country;
  const lang = params?.lang;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🛡️ Safety guard (prevents undefined URLs)
  if (!country || !lang) return null;

  return (
    <section
      className={`
        fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-3
        bg-white/80 backdrop-blur-xl rounded-2xl px-6 py-3
        shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-white/30 z-50
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }
      `}
    >
      {/* GET QUOTE */}
      <Link href={`/${country}/${lang}/contact`}>
        <button
          className="
            px-5 py-2.5 rounded-xl 
            bg-red-600 text-white text-sm font-medium
            hover:bg-red-700 transition
          "
        >
          Get a Quote
        </button>
      </Link>

      {/* DATASHEET */}
      {datasheetUrl && (
        <a
          href={datasheetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-5 py-2.5 rounded-xl 
            bg-white/70 text-gray-900 text-sm font-medium
            border border-gray-300 shadow-sm
            hover:bg-white transition text-center
          "
        >
          Datasheet
        </a>
      )}
    </section>
  );
}
