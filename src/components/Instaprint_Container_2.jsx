import React from 'react';

export default function Instaprint_Container_2() {
  const items = [
    {
      id: 1,
      imageUrl: "/img-21.jpeg", 
      title: "Snap",
      description: "Tangkap momen-momen spontan dan tak terlupakan Anda dalam format foto berbingkai. Layanan Snap memungkinkan Anda mengabadikan kebahagiaan dan tawa bersama orang terkasih. Anda bisa membuat kolase foto yang unik, baik untuk kenangan pribadi maupun dibagikan ke media sosial.",
    },
    {
      id: 2,
      imageUrl: "/img-14.jpeg",
      title: "Hashtag",
      description: "Jadikan acara atau momen spesial Anda mudah ditemukan di media sosial. Dengan fitur Hashtag ini, Anda bisa membuat tagar khusus seperti #AnnadanBima, sehingga semua tamu dapat berbagi foto dan video di satu tempat.",
    },
    {
      id: 3,
      imageUrl: "/img-17.jpg",
      title: "Slideshow",
      description: "Ubah koleksi foto Anda menjadi cerita yang hidup dan berkesan. Lengkap dengan transisi yang halus dan musik yang menyentuh hati. Ubah koleksi foto Anda menjadi cerita yang hidup dan berkesan. Layanan Slideshow kami akan merangkai foto-foto pilihan Anda menjadi video yang dinamis.",
    },
    {
      id: 4,
      imageUrl: "/img-19.jpeg",
      title: "Tag",
      description: "Tandai dan kenali orang-orang penting di setiap foto Anda. Dengan fitur Tag, Anda dapat dengan mudah menandai teman, keluarga, atau pasangan di setiap gambar yang diunggah. Ini bukan hanya membantu orang lain mengenali siapa saja yang ada di dalam foto.",
    },
  ];

  return (
    <div className="p-8 bg-[#f6f6f6] flex flex-col items-center">
      {/* Grid utama */}
      <div className="grid m-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-row items-stretch bg-white rounded-md transition duration-300 ease-in-out hover:shadow-xl"
          >
            <div className="w-1/2 flex-shrink-0"> 
              <img 
                src={item.imageUrl} 
                alt={`Gambar ${item.title}`}
                className="w-full h-full object-cover rounded-md aspect-square"
              />
            </div>

            <div className="w-1/2 flex flex-col justify-center px-6"> 
              <h3 className="text-xl font-bold mb-6 text-[#0C0202]">{item.title}</h3>
              <p className="text-sm text-[#0C0202]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Card tambahan di tengah */}
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center">
        <div className="flex flex-row bg-white rounded-md shadow-md hover:shadow-xl transition duration-300 ease-in-out overflow-hidden">
          <div className="w-1/2">
            <img
              src="/img-20.jpeg"
              alt="Card Center"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center px-6">
            <h3 className="text-xl font-bold mb-4 text-[#0C0202]">Special Moment</h3>
            <p className="text-sm text-[#0C0202]">
              Setiap kenangan memiliki cerita. Card ini berada di tengah halaman, 
              menjadi simbol keseimbangan antara keseruan dan keindahan setiap momen Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
