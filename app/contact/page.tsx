"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Map = dynamic(() => import("@/components/dynamic/Map"), {
  ssr: false,
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <section className="container mx-auto px-6 py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Let's Talk
      </motion.h2>

      {/* divider */}
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex gap-8 m-3">
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
              href="https://wa.me/254790923002"
              target="_blank"
              className="text-[#C9A760] hover:text-white transition"
            >
              <FaWhatsapp size={22} />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-primary" />
            <a href="mailto:info@krivangroup.net" className="text-lg">
              info@krivangroup.net
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-primary" />
            <a href="tel:+254790923002" className="text-lg">
              +254 790923002
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-primary" />
            <a href="tel:+971552646305" className="text-lg">
              +971 552646305
            </a>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-primary" />
            <p className="text-lg">
              Lonak Bussines Center, <br />
              Mwiki Rd, 2nd Floor, B21
            </p>
          </div>
        </motion.div>

        <motion.form
          className="space-y-6 bg-background p-6 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </motion.form>
      </div>
      <div className="w-full  h-[300px] rounded-xl overflow-hidden">
        <Map />
      </div>
    </section>
  );
}
