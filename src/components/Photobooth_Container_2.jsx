import React from 'react';

export default function Photobooth_Container_2() {
  const items = [
    {
      id: 1,
      imageUrl: "/img-21.jpeg",
      title: "Pose !",
      description:
        "Setiap pose menceritakan sebuah kisah. Kami hadir untuk membimbing Anda, memastikan setiap ekspresi dan gerakan terabadikan dengan sempurna. Biarkan kami mengubah pose Anda menjadi karya seni yang akan Anda kenang selamanya.",
    },
    {
      id: 2,
      imageUrl: "/img-14.jpeg",
      title: "Grab",
      description:
        "Setelah sesi photobooth yang seru, saatnya memilih foto-foto favoritmu. Lihat kembali semua pose dan ekspresi, lalu pilih yang paling pas untuk dicetak atau dibagikan. Setiap jepretan adalah kenangan berharga yang tak boleh dilewatkan!",
    },
    {
      id: 3,
      imageUrl: "/img-17.jpg",
      title: "Download",
      description:
        "Unduh Kenanganmu Kapan Saja Tidak sabar untuk melihat kembali semua foto? Kami menyediakan akses mudah untuk mengunduh semua hasil photobooth Anda dalam resolusi tinggi. Simpan di perangkatmu, jadikan wallpaper, atau cetak sendiri di kemudian hari! Kenangan indah selalu dalam genggaman.",
    },
    {
      id: 4,
      imageUrl: "/img-19.jpeg",
      title: "Share",
      description:
        "Bagikan Kebahagiaanmu! Momen bahagia layak untuk dibagikan! Dengan fitur sharing kami, Anda bisa langsung membagikan foto-foto favorit dari photobooth ke media sosial atau teman-teman dan keluarga. Sebarkan senyum, tawa, dan kenangan indah agar semua orang bisa ikut merasakan kebahagiaanmu.",
    },
  ];

  return (
    <div className="p-3 bg-[#f6f6f6]">
      <div className="grid m-2 sm:m-8 lg:m-16 grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 content-center justify-items-center">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-center bg-white rounded-md transition duration-300 ease-in-out hover:shadow-xl overflow-hidden p-3 sm:p-4 w-[350px] h-[350px] sm:w-[350px] sm:h-[170px] lg:w-[600px] lg:h-[300px]"
          >
            {/* Gambar */}
            <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex-shrink-0">
              <img
                src={item.imageUrl}
                alt={`Gambar ${item.title}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Teks */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center px-3 sm:px-6 py-2 sm:py-4 overflow-hidden">
              <h3 className="text-base sm:text-base font-bold mb-2 sm:mb-4 text-[#0C0202] truncate">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#0C0202] line-clamp-6">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
