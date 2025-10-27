import React from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

export default function Event_Container_2() {
  // Data dummy sementara (bisa diganti dari CMS nantinya)
  const sesiData = [
    {
      id: 1,
      image: "/img-1.jpeg",
      link: "/sesi",
    },
    {
      id: 2,
      image: "/img-2.jpeg",
      link: "/sesi/2",
    },
    {
      id: 3,
      image: "/img-3.jpeg",
      link: "/sesi/3",
    },
    {
      id: 4,
      image: "/img-4.jpeg",
      link: "/sesi/4",
    },
    {
      id: 5,
      image: "/img-5.jpeg",
      link: "/sesi/5",
    },
    {
      id: 6,
      image: "/img-6.jpeg",
      link: "/sesi/6",
    },
    {
      id: 7,
      image: "/img-7.jpeg",
      link: "/sesi/7",
    },
    {
      id: 8,
      image: "/img-8.jpg",
      link: "/sesi/8",
    },
    {
      id: 9,
      image: "/img-9.jpg",
      link: "/sesi/8",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-24 py-12 bg-none">
      {sesiData.map((sesi) => (
        <Link
          key={sesi.id}
          to={sesi.link}
          className="flex flex-col items-center overflow-hidden group transition-all duration-300 cursor-pointer"
        >
          {/* Gambar */}
          <div className="w-full h-60 overflow-hidden bg-amber-700 rounded-sm">
            <img
              src={sesi.image}
              alt={sesi.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>

          {/* Tombol View */}
          <div className="w-full flex justify-center py-3">
            <button
              type="button"
              className="w-full flex justify-center items-center gap-2 bg-[#639EA6] text-white px-5 py-2 rounded-full text-sm font-medium"
              onMouseEnter={(e) => {
                const img = e.currentTarget
                  .closest(".group")
                  .querySelector("img");
                img.classList.add("scale-110");
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget
                  .closest(".group")
                  .querySelector("img");
                img.classList.remove("scale-110");
              }}
            >
              <FaEye />
              View
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
