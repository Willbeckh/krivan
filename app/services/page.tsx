"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Example Button component (Tailwind + forward ref)
import { Button } from "@/components/ui/button";
import { Description } from "@radix-ui/react-dialog";

// Example array of specialized services
const specializedServices = [
  {
    title: "Influencer Matching & Management",
    description: "Connecting brands with the right influencers.",
  },
  {
    title: "AI-Powered Audience Targeting & Adverts",
    description:
      "Using AI to predict consumer behavior and personalize marketing.  AI generated videos and images",
  },
  {
    title: "Neuromarketing Analysis",
    description: "Studying customer psychology to enhance ad effectiveness.",
  },
  {
    title: "Growth Hacking Strategies",
    description: "Fast-tracking brand growth through unconventional tactics.",
  },
  {
    title: "Hyperlocal Marketing",
    description: "Targeting specific communities with customized ads.",
  },
  {
    title: "Voice Search & Smart Device Optimization",
    description: "Ensuring brands are discoverable via voice assistants.",
  },
  {
    title: "NFT & Blockchain Marketing",
    description: "Promoting digital assets and Web3 brands.",
  },
  {
    title: "Reputation & Crisis Management",
    description: "Protecting brands from PR disasters.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      {/**
       * =========================
       *  HERO SECTION
       * =========================
       */}
      <section className="container mx-auto px-4 py-10 lg:py-16 flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Award-winning <br /> Customer Service Agency
          </motion.h1>
          <motion.p
            className="text-lg text-[hsl(var(--muted-foreground))] mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Grow your business exponentially with cutting-edge marketing
            solutions, data-driven insights, and unmatched customer support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Button asChild className="bg-[#C9A760]">
              <Link
                href="/contact"
                className="px-6 py-3 text-slate-900 transition"
              >
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://i.pinimg.com/736x/7c/ba/a8/7cbaa80308e1cb81df20e2705d9c91cb.jpg"
            alt="Hero"
            className="w-full max-w-sm rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/**
       * =========================
       * SERVICES GRID
       * =========================
       */}
      <section className="container mx-auto px-4 py-10 lg:py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">
            Unique & Specialized Services
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Stay ahead of the competition with forward-thinking tactics and
            cutting-edge technology.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {specializedServices.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--foreground))]">
                {service.title}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/**
       * =========================
       * FINAL CTA
       * =========================
       */}
      <section className=" py-10 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Supercharge Your Growth?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Our team of experts is here to help you take your business to the
            next level. Let’s work together to create an unstoppable brand.
          </p>
          <Button asChild>
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
