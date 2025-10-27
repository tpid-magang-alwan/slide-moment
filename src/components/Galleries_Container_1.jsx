import React from "react";

export default function Galleries_Container_1() {
  const imageUrl = "/img-17.jpg"; 
  const titleText = "EVENT GALLERIES";


  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full h-[280px] md:h-[400] overflow-hidden">
        <img
          src={imageUrl}
          alt="Gambar Lebar Penuh"
          className="inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="w-full py-12 flex flex-col justify-center items-center my-2">
        <h1 className="text-lg md:text-3xl text-[#0C0202] text-center">
          {titleText}
        </h1>
        <div className="w-14 h-[1px] bg-[#0C0202] mt-1"></div>
      </div>
    </div>
  );
}

