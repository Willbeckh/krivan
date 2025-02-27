"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Branding & Strategy",
    description:
      "Crafting unique brand identities and strategic positioning for maximum impact.",
    image:
      "https://i.pinimg.com/736x/c0/e4/07/c0e4076a07d8b430b5e1e0a47a4af39f.jpg",
  },
  {
    title: "Email Marketing",
    description:
      "Automating personalized campaigns to boost customer engagement and conversions.",
    image:
      "https://i.pinimg.com/1200x/02/9f/c5/029fc5a49627001c48f5f77c5350c4c5.jpg",
  },
  {
    title: "Analytics & Marketing",
    description:
      "Data-driven insights to optimize marketing efforts and improve ROI.",
    image:
      "https://i.pinimg.com/736x/7e/a4/bf/7ea4bfa5e4be71f9678e5b70ce9b0956.jpg",
  },
  {
    title: "Content Marketing",
    description:
      "Compelling video content to enhance brand storytelling and audience engagement.",
    image:
      "https://i.pinimg.com/736x/a8/66/8b/a8668bc39b8f63b3ccb9d78bad99bf60.jpg",
  },
  {
    title: "E-commerce Marketing",
    description:
      "Driving online sales with targeted strategies for product visibility and conversions.",
    image:
      "https://i.pinimg.com/736x/ba/c5/69/bac569e7155c021f846e1def9d3793ce.jpg",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center px-6 py-12 lg:px-12 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
    >
      {/* Header */}
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>
      <motion.p
        className="text-lg text-center max-w-2xl mb-10 text-[hsl(var(--muted-foreground))]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        We offer tailored solutions to help businesses scale and succeed in the
        digital landscape.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        className="grid gap-6 w-full sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all bg-gradient-to-br from-blue-50 to-white dark:from-gray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Full-Width Image */}
            <div className="relative w-full h-48">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover brightness-100 dark:brightness-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 dark:from-black/60 to-transparent" />
            </div>
            {/* Text Section */}
            <div className="p-6">
              <h3 className="text-3xl font-bold mb-2 text-[hsl(var(--foreground))]">
                {service.title}
              </h3>
              <p className="text-base text-[hsl(var(--muted-foreground))]">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold mb-2 text-[hsl(var(--foreground))]">
          Explore more of our Services.
        </h3>
     
        <Button asChild>
          <Link
            href="/contact"
            className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default Services;
