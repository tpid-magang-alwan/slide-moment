import React from "react";
import { Link } from "react-router-dom";

export default function Galleries_Container_2() {
  const events = [
    {
      id: 1,
      title: "the wedding of fufu & fafa",
      location: "Hotel Grand Pati",
      image: "/img-1.jpeg",
      link: "/event",
    },
    {
      id: 2,
      title: "Birthday Party Kevin",
      location: "Cafe Blossom",
      image: "/img-2.jpeg",
      link: "/event",
    },
    {
      id: 3,
      title: "Seminar AI Revolution",
      location: "Auditorium UNNES",
      image: "/img-3.jpeg",
      link: "/event/3",
    },
    {
      id: 4,
      title: "Graduation Day 2025",
      location: "SMAN 1 Kudus",
      image: "/img-4.jpeg",
      link: "/event/4",
    },
    {
      id: 5,
      title: "Company Gathering",
      location: "Pantai Kartini",
      image: "/img-5.jpeg",
      link: "/event/5",
    },
    {
      id: 6,
      title: "Workshop Fotografi",
      location: "Studio LensArt",
      image: "/img-6.jpeg",
      link: "/event/6",
    },
    {
      id: 7,
      title: "Charity Event 2025",
      location: "Alun-alun Pati",
      image: "/img-7.jpeg",
      link: "/event/7",
    },
    {
      id: 8,
      title: "Wedding of Rina & Dito",
      location: "Gedung Astina",
      image: "/img-8.jpg",
      link: "/event/8",
    },
    {
      id: 9,
      title: "Birthday Surprise Lisa",
      location: "Resto SkyGarden",
      image: "/img-9.jpg",
      link: "/event/9",
    },
    {
      id: 10,
      title: "Tech Seminar 2025",
      location: "Politeknik Negeri Semarang",
      image: "/img-10.jpg",
      link: "/event/10",
    },
    {
      id: 11,
      title: "Graduation SMP 3 Pati",
      location: "Gor Pesantenan",
      image: "/img-11.jpeg",
      link: "/event/11",
    },
    {
      id: 12,
      title: "Employee Gathering",
      location: "Agrowisata Jollong",
      image: "/img-12.jpeg",
      link: "/event/12",
    },
    {
      id: 13,
      title: "Seminar Public Speaking",
      location: "Hotel New Merdeka",
      image: "/img-13.jpg",
      link: "/event/13",
    },
    {
      id: 14,
      title: "Birthday Bash 2025",
      location: "Cafe Kopi Kita",
      image: "/img-14.jpeg",
      link: "/event/14",
    },
    {
      id: 15,
      title: "Wedding of Budi & Lala",
      location: "Gedung Asmoro Pati",
      image: "/img-15.jpeg",
      link: "/event/15",
    },
    {
      id: 16,
      title: "Workshop Desain Grafis",
      location: "Coworking Space DIPO",
      image: "/img-16.jpg",
      link: "/event/16",
    },
  ];

  return (
    <div
      className="
        w-full 
        grid 
        grid-cols-2          /* ✅ 2 kolom di Android */
        sm:grid-cols-2       /* Tablet kecil tetap 2 */
        md:grid-cols-3       /* Desktop sedang 3 */
        lg:grid-cols-4       /* Desktop besar 4 */
        gap-x-4 sm:gap-x-6 
        gap-y-6 sm:gap-y-8 
        px-3 sm:px-8 md:px-20 
        py-10 
        capitalize
      "
    >
      {events.map((event) => (
        <Link
          key={event.id}
          to={event.link}
          className="
            flex flex-col items-center 
            hover:shadow-lg 
            transition duration-300 
            hover:scale-105 
            overflow-hidden
          "
        >
          {/* Gambar Event */}
          <div className="w-full aspect-square rounded-sm overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Judul Event */}
          <div className="mt-3 text-center px-2 my-[3px]">
            <h3
              className="
                font-semibold text-gray-800
                text-sm       /* Mobile */
                sm:text-base        /* Tablet */
                md:text-lg      /* Desktop */
                lg:text-lg        /* Desktop besar */
              "
            >
              {event.title}
            </h3>
          </div>

          {/* Lokasi */}
          <div
            className="
              text-gray-500 text-center px-2
              text-sm sm:text-base md:text-base
              mb-4
            "
          >
            {event.location}
          </div>
        </Link>
      ))}
    </div>
  );
}
