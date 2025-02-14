import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1C26] text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-[#C9A760]">
            Krivan Marketing
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-xs">
            Elevate your brand with premium digital strategies.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <Link href="/" className="hover:text-[#C9A760] transition">
            Home
          </Link>
          <Link href="#services" className="hover:text-[#C9A760] transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-[#C9A760] transition">
            Contact
          </Link>
        </div>

        {/* Contact Info & Socials */}
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2 text-gray-300">
            <Mail size={18} /> info@krivangroup.net
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <Phone size={18} /> +254 113 743 723
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <MapPin size={18} /> Nairobi, Kenya
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-3">
            <a href="#" className="text-[#C9A760] hover:text-white transition">
              <FaFacebook size={22} />
            </a>
            <a href="#" className="text-[#C9A760] hover:text-white transition">
              <FaLinkedin size={22} />
            </a>
            <a href="#" className="text-[#C9A760] hover:text-white transition">
              <FaInstagram size={22} />
            </a>
            <Link
              href="https://whatsapp.me/254113743723"
              className="text-[#C9A760] hover:text-white transition"
            >
              <FaWhatsapp size={22} />
            </Link>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Krivan Marketing. All rights reserved.
      </div>
    </footer>
  );
}
