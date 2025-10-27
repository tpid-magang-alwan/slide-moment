import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";  // ✅ tambahkan ini

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full bg-white shadow-md py-3 px-6 md:px-24 relative">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">   {/* ✅ gunakan Link */}
          <img
            src="/logo-slidemoment.jpeg"
            alt="Slide Moment Logo"
            className="w-24 md:w-28 h-auto object-contain"
          />
        </Link>
      </div>

      {/* Tombol Menu Mobile */}
      <button
        className="md:hidden text-2xl text-[#0C0202]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Menu */}
      <div
        className={`${
          isOpen
            ? "flex flex-col absolute top-full left-0 w-full bg-white shadow-md py-4"
            : "hidden"
        } md:flex md:items-center md:space-x-12 text-[#0C0202] font-medium transition-all`}
      >
        <Link to="/event-galleries" className="hover:text-indigo-600 py-2 px-4">
          Event Galleries
        </Link>
        <Link to="#" className="hover:text-indigo-600 py-2 px-4">
          Our Product
        </Link>
        <Link to="#" className="hover:text-indigo-600 py-2 px-4">
          Contact
        </Link>
      </div>
    </nav>
  );
}
