"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useHero } from "@/lib/hooks/useHero";
import Link from "next/link";

const FALLBACK = {
  title: "Empowering Your Business from Foundation to Frontline.",
  description:
    "Beyond traditional marketing, we offer tax filing, business registration, and website creation, providing the compliance, structure, and digital presence you need to grow effectively. Drive Public Impact Through Innovative Digital Strategies.",
};

export default function Hero() {
  const { hero, isLoading } = useHero();
  const { title, description } = hero || FALLBACK;

  return ( 
    <header className="text-center p-4">
      <h1 className="sr-only">Krivan Digital Agency Home Page</h1>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Floating icons */}
        <div className="absolute right-[30px] -skew-x-3 animate-float-delay hidden md:block">
          <Image
            src="/images/tiktok.svg"
            alt="tiktok icon"
            width={48}
            height={48}
            className="opacity-70"
          />
        </div>
        <div className="absolute top-2/4 -left-[22px] -rotate-6 animate-float-delay-2 hidden md:block">
          <Image
            src="/images/idea.png"
            alt="idea icon"
            width={48}
            height={48}
          />
        </div>
        <div className="absolute bottom-[10px] left-[-20px] animate-float-delay-2 hidden md:block">
          <Image
            src="/images/video.png"
            alt="video icon"
            width={48}
            height={48}
            className="opacity-70"
          />
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-6xl font-extrabold !leading-tight tracking-tighter text-gray-900 dark:text-gray-50">
              {isLoading ? FALLBACK.title : title}
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {isLoading ? FALLBACK.description : description}
            </p>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <Link
              href="https://cal.com/christopher-wachiuri-df5lcn/30min"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-full shadow-lg text-lg font-semibold bg-[#C9A760] text-white transition-all hover:bg-[#B79A57]"
            >
              Book a Strategy Call <ArrowUpRight size={20} />
            </Link>
          </motion.button>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-16" />
    </header>
  );
}
