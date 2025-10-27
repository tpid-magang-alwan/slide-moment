import React from "react";

export default function Instaprint_Container_1() {
  const imageUrl = "/img-21.jpeg"; 
  const titleText = "INSTAPRINT";


  return (
    <div className="w-full flex flex-col bg-[#f6f6f6]">
      <div className="flex w-full h-[280px] md:h-[400] pxoverflow-hidden">
        <img
          src={imageUrl}
          alt="Gambar Lebar Penuh"
          className="inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="w-full pt-12 flex flex-col justify-center items-center mt-2">
        <h1 className="text-lg md:text-3xl text-[#0C0202] text-center">
          {titleText}
        </h1>
        <div className="w-14 h-[1px] bg-[#0C0202] mt-1"></div>
      </div>
    </div>
  );
}