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
  },
  {
    title: "Email Marketing",
    description:
      "Automating personalized campaigns to boost customer engagement and conversions.",
  },
  {
    title: "Analytics & Marketing",
    description:
      "Data-driven insights to optimize marketing efforts and improve ROI.",
  },
  {
    title: "Video Marketing",
    description:
      "Compelling video content to enhance brand storytelling and audience engagement.",
  },
  {
    title: "E-commerce Marketing",
    description:
      "Driving online sales with targeted strategies for product visibility and conversions.",
  },
];

const Services = () => {
  return (
    <section
      className="flex flex-col items-center px-6 py-12 lg:px-12"
      id="services"
    >
      {/* Header with animation */}
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>
      <motion.p
        className="text-lg text-muted-foreground text-center max-w-2xl mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        We offer tailored solutions to help businesses scale and succeed in the
        digital landscape.
      </motion.p>

      {/* Services Grid with hover animation */}
      <motion.div
        className="grid gap-6 w-full sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-foreground">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action with animated button */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold mb-2">
          Ready to Elevate Your Business?
        </h3>
        <p className="mb-4">
          Let's collaborate and turn your ideas into reality.
        </p>
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
