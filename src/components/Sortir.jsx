import React, { useState } from "react";

export default function Sortir() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    "all",
    "wedding",
    "birthday",
    "seminar & workshop",
    "graduation",
    "gathering",
  ];

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    console.log(`Filter aktif: ${category}`);
  };

  return (
    <div className="w-full flex flex-col items-center">

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 px-2 sm:px-4 w-full">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterClick(category)}
            className={`px-5 py-2 text-xs md:text-sm uppercase rounded-full border border-gray-300 transition-all duration-200 ease-in-out ${
              activeFilter === category
                ? "bg-[#4382FF] text-white shadow-md scale-105"
                : "bg-white text-gray-700 hover:bg-[#4382FF] hover:text-[#ffffff]"
            }`}

          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
