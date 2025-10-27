import React from 'react';

export default function Photo_Move_Container_2() {
  const items = [
    {
      id: 1,
      imageUrl: "/img-8.jpg",
      title: "Ask",
      description:
        "Sampaikan Keinginanmu Punya ide pose unik atau tema khusus? Jangan ragu untuk bertanya! Tim kami siap membantu merealisasikan visi Anda. Sampaikan semua keinginan Anda dan biarkan kami menciptakan sesi photobooth yang sesuai dengan karakter acara Anda.",
    },
    {
      id: 2,
      imageUrl: "/img-3.jpeg",
      title: "Grab",
      description:
        "Pilih Foto Terbaikmu Setelah beraksi di photobooth, kini saatnya memilih foto-foto favoritmu! Jelajahi semua jepretan seru, ekspresi unik, dan momen tak terlupakan. Pilih yang terbaik untuk dicetak atau dibagikan, karena setiap momen berharga layak diabadikan.",
    },
    {
      id: 3,
      imageUrl: "/img-4.jpeg",
      title: "Download",
      description:
        "Unduh Kenanganmu Seketika Tidak perlu menunggu lama! Semua hasil foto photobooth Anda dapat diunduh langsung dalam resolusi tinggi. Simpan kenangan istimewa ini di perangkatmu, bagikan secara digital, atau cetak kapan saja. Akses mudah, kenangan abadi!",
    },
    {
      id: 4,
      imageUrl: "/img-16.jpg",
      title: "Print",
      description:
        "Cetak Momen Indahmu Sempurnakan pengalaman photobooth Anda dengan cetakan instan berkualitas tinggi. Dapatkan hasil cetak yang tajam dan berwarna, langsung dari lokasi acara. Bawalah pulang kenangan berharga ini sebagai suvenir unik atau hadiah untuk orang tersayang.",
    },
  ];

  return (
    <div className="p-3 bg-[#f6f6f6]">
      <div className="grid m-2 sm:m-8 lg:m-16 grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-around bg-white rounded-md transition duration-300 ease-in-out hover:shadow-xl overflow-hidden p-3 sm:p-4 h-[400px] sm:h-[300px]"
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
              <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4 text-[#0C0202] truncate">
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
