"use client";
import { motion } from "framer-motion";
import styles from "./styles/hero.module.css";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Constants for reusable values
const TAGLINE = "Branding, Strategy, Video Marketing";

const HEADER_CONTENT = {
  description: "Drive Public Impact Through Innovative Digital Strategies.",
};

export default function Hero() {
  return (
    <header className="flex flex-col gap-4 md:gap-6 items-center">
      <h1 className="sr-only">Krivan Digital Agency Home Page</h1>

      <div className="relative w-full h-[400px] p-0">
        {/* Decorative elements */}
        <div
          className={`w-20 h-8 bg-[#0A1C26] rounded-tl-xl ${styles.slantedEdge}`}
        ></div>
        <div
          className={`absolute bottom-4 right-0 w-20 h-8 bg-[#C9A760] rounded-br-xl ${styles.slantedEdge2}`}
        ></div>

        {/* Floating icons */}
        <Image
          src="/images/tiktok.svg"
          alt="tiktok icon"
          width={48}
          height={48}
          className="absolute hidden lg:block right-40 top-16 opacity-85"
        ></Image>

        <Image
          src="/images/video.png"
          alt="video icon"
          width={48}
          height={48}
          className="absolute hidden lg:block left-24 bottom-32"
        ></Image>

        {/* Tagline */}
        <p className="absolute top-1 left-[5rem] px-1 uppercase text-[#C9A760] text-xs/6">
          &#10687; {TAGLINE}
        </p>

        {/* Main content */}
        <div className="flex flex-col justify-center items-center w-full h-80 bg-gradient-to-r from-[#0A1C26] to-[#C9A760] rounded-tr-xl rounded-bl-xl">
          <div className="flex flex-col text-white !leading-tight mx-auto max-w-xl text-center p-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">
              We support the <span className="text-yellow-300">growth</span> of
              your business.🚀
            </h1>
            <p className="text-md md:text-lg !leading-tight mx-auto max-w-xl mt-6 text-center">
              {HEADER_CONTENT.description}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-1 absolute bottom-3 right-14 w-fit px-8 h-8 bg-[#C9A760] rounded-bl-xl cursor-pointer text-white shadow-lg transition-all ${styles.slantedEdge} `}
        >
          Book Strategy Call
          <ArrowUpRight color="black" />
        </motion.button>
      </div>

      {/* Divider */}
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </header>
  );
}
