// import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Link, useLocation } from "react-router-dom";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   // 🔹 Fungsi scroll halus tanpa kedip (untuk Our Product)
//   const scrollToSection = (id) => {
//     setTimeout(() => {
//       const section = document.getElementById(id);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 100);
//   };

//   // 🔹 Fungsi scroll + kedip (untuk Contact)
//   const scrollToContact = () => {
//     setTimeout(() => {
//       const footer = document.getElementById("Contact");
//       if (footer) {
//         footer.scrollIntoView({ behavior: "smooth" });

//         // Efek berkedip sementara
//         footer.classList.add("blink");
//         setTimeout(() => {
//           footer.classList.remove("blink");
//         }, 1500);
//       }
//     }, 100);
//   };

//   return (
//     <nav className="flex items-center justify-between w-full bg-white shadow-md py-3 px-6 md:px-24 relative z-50">
//       {/* Logo */}
//       <div className="flex items-center">
//         <Link to="/">
//           <img
//             src="/logo-slidemoment.jpeg"
//             alt="Slide Moment Logo"
//             className="w-24 md:w-28 h-auto object-contain"
//           />
//         </Link>
//       </div>

//       {/* Tombol Menu Mobile */}
//       <button
//         className="md:hidden text-2xl text-[#0C0202]"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <FiX /> : <FiMenu />}
//       </button>

//       {/* Menu */}
//       <div
//         className={`${
//           isOpen
//             ? "flex flex-col absolute top-full left-0 w-full bg-white shadow-md py-4"
//             : "hidden"
//         } md:flex md:items-center md:space-x-12 text-[#0C0202] font-medium transition-all`}
//       >
//         {/* Event Galleries */}
//         <Link to="/event-galleries" className="hover:text-indigo-600 py-2 px-4">
//           Event Galleries
//         </Link>

//         {/* ✅ Our Product → scroll ke OurProduct (tanpa kedip) */}
//         <Link
//           to="/"
//           onClick={() => scrollToSection("OurProduct")}
//           className="hover:text-indigo-600 py-2 px-4"
//         >
//           Our Product
//         </Link>

//         {/* ✅ Contact → scroll ke footer dengan kedip */}
//         <Link
//           to={location.pathname}
//           onClick={scrollToContact}
//           className="hover:text-indigo-600 py-2 px-4"
//         >
//           Contact
//         </Link>
//       </div>
//     </nav>
//   );
// }
