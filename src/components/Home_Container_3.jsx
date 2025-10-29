import React from "react"; 
import { Link } from "react-router-dom";

export default function Home_Container_3() {
  const images = [
    "/img-1.jpeg",
    "/img-2.jpeg",
    "/img-3.jpeg",
    "/img-4.jpeg",
    "/img-5.jpeg",
    "/img-6.jpeg",
    "/img-7.jpeg",
    "/img-8.jpg",
    "/img-9.jpg",
    "/img-10.jpg",
    "/img-11.jpeg",
    "/img-12.jpeg",
    "/img-13.jpg",
    "/img-14.jpeg",
    "/img-15.jpeg",
    "/img-16.jpg",
    "/img-17.jpg",
    "/img-18.jpeg",
    "/img-19.jpeg",
    "/img-20.jpeg",
  ];

  const content = {
    heading: "Moment",
    paragraph1:
      "Jadikan setiap momen berharga tak terlupakan. Kami hadir karena percaya yang kita ingat bukanlah hari, melainkan momen-momen istimewa. Sebuah foto adalah jendela menuju kenangan. Kami bantu Anda merawat dan merayakan setiap momen, karena kenangan bukanlah tentang hari yang terlewati, melainkan tentang momen-momen yang abadi.",
    paragraph2:
      "Dengan layanan kami, Anda dapat dengan mudah mengabadikan dan merayakan setiap momen penting dalam hidup Anda. Dengan Kami Anda akan menciptakan album kenangan yang akan selalu menghangatkan hati.",
    button: "Book Now",
  };

  return (
    <div className="flex flex-col md:flex-row w-full items-center text-[#0C0202] overflow-hidden my-16 py-8 md:py-0">
      
      {/* 🟩 Bagian Kiri: Grid Gambar */}
      <div className="md:w-1/2 p-4 flex justify-center items-center">
        <div className="w-full max-w-[520px] h-auto md:h-[380px] grid grid-cols-5 grid-rows-4 gap-[2px] overflow-hidden">
          {images.map((src, i) => (
            <div 
              key={i} 
              className="overflow-hidden aspect-square md:aspect-auto" // ✅ persegi di android, persegi panjang di desktop
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 🟦 Bagian Kanan: Teks dan Tombol */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-[90%] md:w-4/5 bg-[#ffffff] p-5 sm:p-6 rounded-md flex flex-col">
          <div>
            <h2 className="text-xl sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center md:text-left">
              {content.heading}
            </h2>
            <p className="text-sm md:text-sm text-[#0C0202] leading-relaxed text-justify md:text-left mb-3">
              {content.paragraph1}
            </p>
            <p className="text-sm md:text-sm text-[#0C0202] leading-relaxed text-justify md:text-left mb-5">
              {content.paragraph2}
            </p>
          </div>

          {/* Tombol WhatsApp */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-3 px-6 bg-[#f6f6f6] text-[#0C0202] text-ms md:text-xs font-semibold rounded-full shadow-sm hover:bg-indigo-700 hover:text-white transition duration-300 mx-auto md:mx-0 text-center"
          >
            {content.button}
          </a>
        </div>
      </div>
    </div>
  );
}
