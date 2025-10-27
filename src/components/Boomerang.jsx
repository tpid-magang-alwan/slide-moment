import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaDownload } from "react-icons/fa";

export default function Boomerang() {
  const videoRef = useRef(null);
  const [boomerangData, setBoomerangData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Ambil data dari CMS
  useEffect(() => {
    async function fetchBoomerang() {
      try {
        // Ganti dengan endpoint CMS kamu (misalnya Strapi)
        const res = await fetch("https://your-cms-domain.com/api/boomerang?populate=*");
        const data = await res.json();

        setBoomerangData(data.data?.attributes || null);
        setIsLoading(false);
      } catch (err) {
        console.error("Gagal mengambil data Boomerang:", err);
        setIsLoading(false);
      }
    }

    fetchBoomerang();
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play();
    } else if (video) {
      video.pause();
    }
  };

  const handleDownload = () => {
    if (!boomerangData?.video?.url) return;
    const link = document.createElement("a");
    link.href = boomerangData.video.url;
    link.download = "boomerang.mp4";
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4 mb-10 mx-4 sm:px-8 md:px-16 bg-[#f6f6f6]">
      {/* ====== VIDEO SECTION ====== */}
      <div
        className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden flex items-center justify-center bg-gray-200"
        onClick={handlePlay}
      >
        {/* Jika video ditemukan */}
        {boomerangData?.video?.url ? (
          <>
            <video
              ref={videoRef}
              src={boomerangData.video.url}
              className="w-full h-full object-cover"
              loop
              muted
            />
            {/* Overlay tombol Play */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition">
              <FaPlay className="text-white text-5xl opacity-80" />
            </div>
          </>
        ) : (
          // Jika video tidak ditemukan
          <p className="text-gray-600 text-lg font-medium">
            Video tidak ditemukan
          </p>
        )}
      </div>

      {/* ====== DOWNLOAD BUTTON ====== */}
      <button
        onClick={handleDownload}
        disabled={!boomerangData?.video?.url}
        className={`w-full max-w-md flex items-center justify-center gap-2 mt-6 px-6 py-3 rounded-full transition duration-300 ${
          boomerangData?.video?.url
            ? "bg-[#639EA6] hover:bg-[#2d6df3] text-white"
            : "bg-gray-400 text-white cursor-not-allowed"
        }`}
      >
        <FaDownload className="text-sm" />
        <span className="font-medium">Download</span>
      </button>
    </div>
  );
}
