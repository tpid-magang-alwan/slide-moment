import React from "react";
import { Link } from "react-router-dom"; // ✅ tambahkan import Link

export default function Home_Container_1() {
  const content = {
    image: "/img-1.jpeg",
    heading: "We Remember Moments, Not Days",
    text: "Jadikan setiap momen berharga tak terlupakan. Kami hadir untuk membantu Anda mengenang kembali setiap kenangan, karena kami percaya, yang kita ingat bukanlah hari, melainkan momen-momen istimewa. Sebuah foto bukan hanya selembar kertas, melainkan jendela menuju kenangan. Kami bantu Anda merawat dan merayakan setiap momen, karena kenangan bukanlah tentang hari yang terlewati, melainkan tentang momen-momen yang abadi.",
    button: "Event Galleries",
  };

  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center text-[#0C0202] overflow-hidden py-10 md:py-16">
      
      {/* Bagian Kiri: Gambar */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-4 md:px-6 mb-6 md:mb-0">
        <div className="w-4/5 h-[300px] sm:h-[280px] md:h-[300px] max-w-full overflow-hidden shadow-sm">
          <img
            src={content.image}
            alt="Moment"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Bagian Kanan: Teks dan Tombol */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-4 md:px-8">
        <div className="w-full sm:w-4/5 bg-[#ffffff] p-5 sm:p-6 rounded-lg flex flex-col">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-center md:text-left">
              {content.heading}
            </h2>
            <p className="text-sm md:text-sm text-[#0C0202] leading-relaxed mb-5">
              {content.text}
            </p>
          </div>

          {/* ✅ Tombol yang menaut ke /event-galleries */}
          <Link
            to="/event-galleries"
            className="w-full py-4 sm:w-auto bg-[#f6f6f6] text-[#0C0202] text-ms md:text-xs font-semibold rounded-full shadow-sm hover:bg-indigo-700 hover:text-white transition duration-300 text-center"
          >
            {content.button}
          </Link>
        </div>
      </div>

    </div>
  );
}
