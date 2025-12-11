"use client";

import ReelVideoPlayer from "./ReelVideoPlayer";

export default function VideoGallery({ videos }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.slice(0, 3).map((v, i) => (
            <ReelVideoPlayer key={i} video={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
