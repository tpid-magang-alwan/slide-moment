import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-full bg-[#eeeeee] shadow-inner py-3 px-4 sm:px-10 md:px-24 text-[#0C0202] transition-all duration-300">
      {/* Kiri: Copyright */}
      <div className="text-[10px] sm:text-xs md:text-sm font-medium">
        © {new Date().getFullYear()} Slide Moment. All Rights Reserved.
      </div>

      {/* Kanan: Media Sosial */}
      <div className="flex items-center space-x-3 sm:space-x-5 text-[14px] sm:text-lg md:text-xl">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaTiktok />
        </a>
      </div>
    </footer>
  );
}
