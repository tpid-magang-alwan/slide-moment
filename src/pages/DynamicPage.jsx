import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API_BASE_URL from "../config/api";

function DynamicPage() {
  const { slug } = useParams();
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/pages/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("📦 Data API (DynamicPage):", data);
        setPage(data);
      })
      .catch((err) => console.error("❌ Gagal ambil data:", err));
  }, [slug]);

  if (!page) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading halaman {slug}...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f6f6f6] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">{page.title}</h1>

        {page.sections?.map((section, index) => (
          <section key={index} className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-600 mb-4">{section.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.rows?.map((row, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  {row.image && (
                    <img
                      src={row.image}
                      alt={row.title}
                      className="rounded-lg w-full h-48 object-cover mb-3"
                    />
                  )}
                  <h3 className="text-lg font-medium">{row.title}</h3>
                  {row.description && (
                    <p className="text-sm text-gray-600 mt-1">{row.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default DynamicPage;
