import React from 'react';

export default function Photo_Move_Container_2() {
  const items = [
    {
      id: 1,
      imageUrl: "/img-6.jpeg",
      title: "Snap",
      description:
        "Tangkap momen-momen spontan dan tak terlupakan Anda dalam format foto berbingkai. Layanan Snap memungkinkan Anda mengabadikan kebahagiaan dan tawa bersama orang terkasih. Anda bisa membuat kolase foto yang unik, baik untuk kenangan pribadi maupun dibagikan ke media sosial.",
    },
    {
      id: 2,
      imageUrl: "/img-17.jpg",
      title: "Hashtag",
      description:
        "Jadikan acara atau momen spesial Anda mudah ditemukan di media sosial. Dengan fitur Hashtag ini, Anda bisa membuat tagar khusus seperti #AnnadanBima, sehingga semua tamu dapat berbagi foto dan video di satu tempat.",
    },
    {
      id: 3,
      imageUrl: "/img-9.jpg",
      title: "Slideshow",
      description:
        "Ubah koleksi foto Anda menjadi cerita yang hidup dan berkesan. Layanan Slideshow kami akan merangkai foto-foto pilihan Anda menjadi video yang dinamis, lengkap dengan transisi yang halus dan musik yang menyentuh hati.",
    },
    {
      id: 4,
      imageUrl: "/img-10.jpg",
      title: "Tag",
      description:
        "Tandai dan kenali orang-orang penting di setiap foto Anda. Dengan fitur Tag, Anda dapat dengan mudah menandai teman, keluarga, atau pasangan di setiap gambar yang diunggah. Ini bukan hanya membantu orang lain mengenali siapa saja yang ada di dalam foto, tetapi juga mempermudah mereka yang ditandai untuk menemukan foto mereka sendiri.",
    },
    {
      id: 5,
      imageUrl: "/img-12.jpeg",
      title: "Available Template",
      description:
        "Kami menawarkan beragam pilihan desain bingkai dan tata letak yang siap pakai untuk memenuhi setiap kebutuhan kreatif Anda. Dengan Template yang tersedia ini, Anda bisa memilih gaya yang paling sesuai dengan tema acara Anda, mulai dari yang minimalis dan modern hingga yang penuh ornamen.",
    },
  ];

  return (
    <div className="p-3 bg-[#f6f6f6]">
      {/* Grid utama */}
      <div className="grid m-2 sm:m-8 lg:m-16 grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`
              flex flex-col sm:flex-row items-stretch bg-white rounded-xl 
              transition duration-300 ease-in-out hover:shadow-xl overflow-hidden 
              w-full sm:w-[500px] lg:w-[600px] h-auto sm:h-[260px]
              ${index === items.length - 1 ? "sm:col-span-2 justify-self-center" : ""}
            `}
          >
            {/* Gambar */}
            <div className="w-full sm:w-1/2 p-3 aspect-[3/2] sm:aspect-auto">
              <img
                src={item.imageUrl}
                alt={`Gambar ${item.title}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Konten teks */}
            <div id={item.title === "Available Template" ? "Template" : undefined} className="w-full sm:w-1/2 flex flex-col justify-center p-4">
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
