import React, { useState } from "react";

export default function Searching({ eventPhotos }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    // filter berdasarkan nama atau deskripsi foto
    const filtered = eventPhotos.filter((photo) =>
      photo.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="w-full bg-[#f6f6f6] flex flex-col items-center pt-2 px-4">
      {/* Search bar */}
      <form
        onSubmit={handleSearch}
        className="w-full max-w-xl flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari berdasarkan nomor Sesi"
          className="flex-1 px-5 py-2 outline-none text-[#0C0202/48]"
        />
        <button
          type="submit"
          className="bg-[#4382FF] text-white px-6 py-2 font-medium hover:bg-[#356add] transition-all"
        >
          Search
        </button>
      </form>

      {/* Hasil Pencarian */}
      <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
        {results.length > 0 ? (
          results.map((photo) => (
            <div
              key={photo.id}
              className="flex flex-col items-center bg-white rounded-lg overflow-hidden shadow hover:scale-105 transition"
            >
              <img
                src={photo.image}
                alt={photo.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-2 text-center">
                <p className="text-sm font-semibold text-gray-800">{photo.name}</p>
              </div>
            </div>
          ))
        ) : (
          query !== "" && (
            <p className="text-gray-500 mt-6 text-center">
              Tidak ada foto yang cocok dengan pencarian.
            </p>
          )
        )}
      </div>
    </div>
  );
}
