import React from 'react';

export default function Photo_Move_Container_2() {
  const items = [
    {
      id: 1,
      imageUrl: "/img-18.jpeg",
      title: "Ask",
      description:
        "Sampaikan Keinginanmu Punya ide pose unik atau tema khusus? Jangan ragu untuk bertanya! Tim kami siap membantu merealisasikan visi Anda. Sampaikan semua keinginan Anda dan biarkan kami menciptakan sesi photobooth yang sesuai dengan karakter acara Anda.",
    },
    {
      id: 2,
      imageUrl: "/img-1.jpeg",
      title: "Grab",
      description:
        "Pilih Foto Terbaikmu Setelah beraksi di photobooth, kini saatnya memilih foto-foto favoritmu! Jelajahi semua jepretan seru, ekspresi unik, dan momen tak terlupakan. Pilih yang terbaik untuk dicetak atau dibagikan, karena setiap momen berharga layak diabadikan.",
    },
    {
      id: 3,
      imageUrl: "/img-20.jpeg",
      title: "Download",
      description:
        "Unduh Kenanganmu Kapan Saja! Tidak sabar untuk melihat kembali semua foto? Kami menyediakan akses mudah untuk mengunduh semua hasil photobooth Anda dalam resolusi tinggi. Simpan di perangkatmu, jadikan wallpaper, atau cetak sendiri di kemudian hari! Kenangan indah selalu dalam genggaman.",
    },
    {
      id: 4,
      imageUrl: "/img-10.jpg",
      title: "Print",
      description:
        "Cetak Momen Indahmu Sempurnakan pengalaman photobooth Anda dengan cetakan instan berkualitas tinggi. Dapatkan hasil cetak yang tajam dan berwarna, langsung dari lokasi acara. Bawalah pulang kenangan berharga ini sebagai suvenir unik atau hadiah untuk orang tersayang.",
    },
  ];

  return (
    <div className="p-3 bg-[#f6f6f6]">
      <div className="grid m-2 sm:m-8 lg:m-16 grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-stretch bg-white rounded-xl transition duration-300 ease-in-out hover:shadow-xl overflow-hidden w-full sm:w-[500px] lg:w-[600px] h-auto sm:h-[260px]"
          >
            {/* Gambar */}
            <div className="w-full sm:w-1/2 p-3 aspect-[3/2] sm:aspect-auto">
              <img
                src={item.imageUrl}
                alt={`Gambar ${item.title}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Konten teks (tanpa scroll) */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center p-4">
              <h3 className="text-lg font-bold mb-2 text-[#0C0202]">
                {item.title}
              </h3>
              <p className="text-sm text-[#0C0202] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
