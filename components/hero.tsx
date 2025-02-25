"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GrowthChart } from "./bar-chart";
import { ArrowUpRight } from "lucide-react";
import InsightsCard from "./insights-card";
import Link from "next/link";

// Constants for reusable values
const TAGLINE = "Branding, Strategy, Video Marketing";

const HEADER_CONTENT = {
  description: "Drive Public Impact Through Innovative Digital Strategies.",
};

export default function Hero() {
  return (
    <header className="flex flex-col gap-4 md:gap-6 items-center">
      <h1 className="sr-only">Krivan Digital Agency Home Page</h1>

      <div className="relative w-full h-screen p-0">
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

        {/* Main content */}
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <div className="flex flex-col !leading-tight mx-auto max-w-xl text-center p-4">
            <h1 className="text-2xl lg:text-4xl font-bold drop-shadow-lg">
              We support the <span className="text-[#C9A760]">growth</span> of
              your business.🚀
            </h1>
            <p className="text-md text-muted-foreground !leading-tight mx-auto max-w-xl mt-6 text-center">
              {HEADER_CONTENT.description}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://cal.com/christopher-wachiuri-df5lcn/30min"
              target="_blank"
              className={`flex items-center gap-1 w-fit p-4 h-10 bg-[#C9A760] rounded-lg cursor-pointer text-white shadow-lg transition-all `}
            >
              Book Strategy Call
              <ArrowUpRight color="black" />
            </Link>
          </motion.button>

          <div className="p-2">
            <div className="relative lg:absolute lg:right-0 lg:top-52 -z-10 p-6">
              <div className="absolute inset-10  w-full md:w-1/2 lg:w-1/3 xl:w-[300px] bg-gradient-to-br from-transparent to-[#0A1C26] bg-opacity-50 blur-xl"></div>
              <div className="relative z-10">
                <GrowthChart />
              </div>
            </div>

            <div className="hidden lg:block lg:absolute lg:left-0 lg:top-48 w-full -z-10 p-6">
              <div className="absolute inset-0 w-full md:w-1/2 lg:w-1/3 xl:w-[200px] bg-gradient-to-br from-transparent to-[#0A1C26] bg-opacity-50 blur-xl"></div>
              <div className="relative z-10">
                <InsightsCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </header>
  );
}
