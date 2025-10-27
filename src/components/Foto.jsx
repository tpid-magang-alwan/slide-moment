import React from "react";
import { FaDownload } from "react-icons/fa";

export default function Foto() {
  // contoh data bisa diambil dari CMS nantinya
  const photos = [
    { id: 1, url: "https://via.placeholder.com/300x200", orientation: "landscape" },
    { id: 2, url: "https://via.placeholder.com/300x200", orientation: "landscape" },
    { id: 3, url: "https://via.placeholder.com/200x300", orientation: "portrait" },
  ];

  const handleDownload = (url, id) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `photo_${id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full flex justify-center items-start gap-6 flex-wrap md:flex-nowrap px-4 py-6">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="relative flex flex-col items-center overflow-hidden"
        >
          {/* Foto */}
          <div
            className={`${
              photo.orientation === "landscape"
                ? "w-full max-w-sm aspect-[3/2]"
                : "w-full max-w-xs aspect-[2/3]"
            } bg-gray-200 flex justify-center items-center rounded-md`}
          >
            {photo.url ? (
              <img
                src={photo.url}
                alt={`Foto ${photo.id}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <p className="text-gray-600">Foto tidak ditemukan</p>
            )}
          </div>

          {/* Tombol Download */}
          <button
            onClick={() => handleDownload(photo.url, photo.id)}
            className={`${
              photo.orientation === "landscape" ? "w-[370px]" : "w-[260px]"
            } flex justify-center items-center gap-2 mt-3 px-4 py-2 bg-[#639EA6] text-white rounded-full text-sm hover:bg-[#3366cc] transition-all duration-200`}
          >
            <FaDownload />
            <span>Download</span>
          </button>
        </div>
      ))}
    </div>
  );
}
