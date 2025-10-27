import React from 'react';

export default function Photo_Move_Container_2() {
  const items = [
    {
      id: 1,
      imageUrl: "/img-21.jpeg", 
      title: "Ask",
      description: "Sampaikan Keinginanmu Punya ide pose unik atau tema khusus? Jangan ragu untuk bertanya! Tim kami siap membantu merealisasikan visi Anda. Sampaikan semua keinginan Anda dan biarkan kami menciptakan sesi photobooth yang sesuai dengan karakter acara Anda.",
    },
    {
      id: 2,
      imageUrl: "/img-14.jpeg",
      title: "Grab",
      description: "Pilih Foto Terbaikmu Setelah beraksi di photobooth, kini saatnya memilih foto-foto favoritmu! Jelajahi semua jepretan seru, ekspresi unik, dan momen tak terlupakan. Pilih yang terbaik untuk dicetak atau dibagikan, karena setiap momen berharga layak diabadikan.",
    },
    {
      id: 3,
      imageUrl: "/img-17.jpg",
      title: "Download",
      description: "Unduh Kenanganmu Seketika Tidak perlu menunggu lama! Semua hasil foto photobooth Anda dapat diunduh langsung dalam resolusi tinggi. Simpan kenangan istimewa ini di perangkatmu, bagikan secara digital, atau cetak kapan saja. Akses mudah, kenangan abadi!",
    },
    {
      id: 4,
      imageUrl: "/img-19.jpeg",
      title: "Print",
      description: "Cetak Momen Indahmu Sempurnakan pengalaman photobooth Anda dengan cetakan instan berkualitas tinggi. Dapatkan hasil cetak yang tajam dan berwarna, langsung dari lokasi acara. Bawalah pulang kenangan berharga ini sebagai suvenir unik atau hadiah untuk orang tersayang.",
    },
  ];

  return (
    <div className="p-8 bg-[#f6f6f6]">
      <div className="grid m-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {items.map((item) => (
          <div 
            key={item.id} 
            // Div induk: Gunakan 'flex' dan 'p-4' untuk padding internal
            className="flex flex-row items-stretch bg-white rounded-md transition duration-300 ease-in-out hover:shadow-xl"
          >
            <div className="w-1/2 flex-shrink-0"> 
              <img 
                src={item.imageUrl} 
                alt={`Gambar ${item.title}`}
                // Pastikan gambar mengisi div 50% dan memiliki aspek rasio
                className="w-full h-full object-cover rounded-md aspect-square"
              />
            </div>

            {/* Div Kedua: Judul dan Deskripsi - Gunakan 'w-1/2' untuk lebar 50% */}
            <div className="w-1/2 flex flex-col justify-center px-6"> 
              <h3 className="text-xl font-bold mb-6 text-[#0C0202]">{item.title}</h3>
              <p className="text-sm text-[#0C0202]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}