import { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { getFooter } from "../services/api";

export default function Footer() {
  const [footer, setFooter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFooter()
      .then((res) => {
        setFooter(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const defaultCopyright = `© ${new Date().getFullYear()} Slide Moment. All Rights Reserved.`;

  // Convert socials object -> array
  const socialsArray =
    footer && footer.socials && typeof footer.socials === "object"
      ? Object.entries(footer.socials).map(([name, url]) => ({
          name,
          url,
        }))
      : [];

  return (
    <footer
      id="Contact"
      className="flex items-center justify-between w-full bg-[#eeeeee] shadow-inner py-3 px-4 sm:px-10 md:px-24 text-[#0C0202] transition-all duration-300"
    >
      {/* LEFT SIDE TEXT */}
      <div className="text-[10px] sm:text-xs md:text-sm font-medium">
        {footer?.description ?? defaultCopyright}
      </div>

      {/* RIGHT SIDE SOCIAL ICONS */}
      <div className="flex items-center space-x-3 sm:space-x-5 text-[14px] sm:text-lg md:text-xl">
        {loading || socialsArray.length === 0 ? (
          <>
            {/* DEFAULT ICONS IF EMPTY */}
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
          </>
        ) : (
          socialsArray.map((item, idx) => {
            const name = item.name.toLowerCase();
            let Icon = null;
            let hoverColor = "transition";

            if (name === "instagram") {
              Icon = FaInstagram;
              hoverColor = "hover:text-pink-500 transition";
            }
            if (name === "whatsapp") {
              Icon = FaWhatsapp;
              hoverColor = "hover:text-green-500 transition";
            }
            if (name === "tiktok") {
              Icon = FaTiktok;
              hoverColor = "hover:text-black transition";
            }

            if (!Icon) return null;

            return (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={hoverColor}
              >
                <Icon />
              </a>
            );
          })
        )}
      </div>
    </footer>
  );
}
