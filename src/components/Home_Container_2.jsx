import React from "react";
import { Link } from "react-router-dom"; // ✅ tambahkan import Link

export default function Home_Container_2() {
  const products = [
    {
      id: 1,
      title: "Photobooth",
      desc: "Abadikan momen seru dan tak terlupakan bersama teman-teman dengan berbagai properti lucu dan latar belakang unik. Cukup pose, jepret, dan bawa pulang kenangan manis dalam bentuk foto cetak instan.",
    },
    {
      id: 2,
      title: "Instaprint",
      desc: "Cetak foto langsung dari media sosial atau galeri ponsel Anda. Hubungkan perangkat Anda, pilih foto favorit, dan dapatkan hasilnya dalam sekejap.",
    },
    {
      id: 3,
      title: "Photo on the Move",
      desc: "Jangan lewatkan satu pun momen penting di acara Anda. Layanan kami akan berkeliling mengabadikan setiap sudut acara, lalu langsung mencetak foto di tempat. Semua tamu bisa membawa pulang kenang-kenangan tanpa perlu antre di satu tempat.",
    },
    {
      id: 4,
      title: "Template",
      desc: "Pilih dari berbagai desain bingkai dan tata letak eksklusif untuk mempercantik foto Anda. Buat cetakan foto Anda semakin berkesan dengan desain unik yang dapat disesuaikan dengan tema acara.",
    },
  ];

  // ✅ perbaiki tautan agar sesuai dengan rute React Router
  const gallery = [
    {
      thumb: "/img-7.jpeg",
      full: "/photobooth",
      alt: "",
      title: "Photobooth",
    },
    {
      thumb: "/img-13.jpg",
      full: "/instaprint",
      alt: "",
      title: "Instaprint",
    },
    {
      thumb: "/img-15.jpeg",
      full: "/photo-move",
      alt: "",
      title: "Photo on the Move",
    },
    {
      thumb: "/img-16.jpg",
      full: "/instaprint", // ✅ Template diarahkan ke Instaprint
      alt: "",
      title: "Template",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full items-center text-[#0C0202] overflow-hidden py-8 md:py-0">
      {/* Bagian Produk */}
      <div className="w-full md:w-1/2 p-4 flex justify-center">
        <div className="w-[90%] md:w-4/5 max-h-[500px] md:h-[85%] flex flex-col overflow-y-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-center md:text-left">
            Our Product
          </h3>

          <div className="w-full space-y-2">
            {products.map(({ id, title, desc }) => (
              <div
                key={id}
                className="bg-white rounded-xl shadow-lg p-3 sm:p-3 max-w-2xl mx-auto flex items-start space-x-3"
              >
                <div className="flex items-center justify-center h-6 w-6 rounded-full border border-white shadow-md text-sm font-semibold text-[#0C0202] bg-gray-50 flex-shrink-0 mt-0.5">
                  {id}
                </div>
                <p className="text-sm md:text-sm text-[#0C0202] leading-relaxed">
                  <strong>{title}:</strong> {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bagian Galeri */}
      <div className="md:w-1/2 justify-center items-center">
        <div className="grid grid-cols-2 gap-1 w-[85%] mx-auto">
          {gallery.map(({ thumb, full, alt, title }, i) => (
            <Link
              key={i}
              to={full} // ✅ gunakan Link to
              className="relative group overflow-hidden h-50"
            >
              <img
                src={thumb}
                alt={alt}
                className="w-full h-full align-middle object-cover transition duration-300 group-hover:brightness-110"
              />

              {/* Lapisan gelap */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300"></div>

              {/* Judul di atas gambar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-md sm:text-base font-semibold text-center px-2">
                  {title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
