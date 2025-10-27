import React from "react";

export default function Sesi_Container_1() {
  const imageUrl = "/img-21.jpeg"; 
  const titleText = "The Wedding Of Fufu & Fafa";
  const locationText = "Hotel Tentrem Yogyakarta";
  const dateText = "15 Januari 2023";

  return (
    <div className="w-full flex flex-col bg-[#f6f6f6] mb-16">
      <div className="flex w-full h-[280px] md:h-[400] overflow-hidden">
        <img
          src={imageUrl}
          alt="Gambar Lebar Penuh"
          className="inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="w-full pt-12 flex flex-col justify-center items-center mt-2">
        <h1 className="text-lg md:text-3xl font-semibold text-[#0C0202] text-center">
          {titleText}
        </h1>
        <p className="text-sm md:text-md text-[#0C0202] mt-4 mb-2">
          {locationText}
        </p>
        <p className="text-sm md:text-md text-[#0C0202]">
          {dateText}
        </p>
      </div>
    </div>
  );
}
