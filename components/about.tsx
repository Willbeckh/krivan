"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Expertise & Experience",
    description: "Years of industry knowledge to drive impactful strategies.",
  },
  {
    title: "Tailored Solutions",
    description: "Customized services to fit your unique business needs.",
  },
  {
    title: "Data-Driven Approach",
    description: "Making informed decisions backed by analytics & insights.",
  },
  {
    title: "Innovative Strategies",
    description:
      "Staying ahead with modern, cutting-edge marketing techniques.",
  },
];

const About = () => {
  return (
    <section className="flex flex-col items-center px-6 py-12 lg:px-12">
      {/* Header */}
      <motion.h2
        className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Us?
      </motion.h2>
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We focus on delivering measurable results and sustainable growth for
        your business.
      </motion.p>

      {/* Features Grid */}
      <motion.div
        className="grid gap-6 w-full sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl flex flex-col items-center text-center transition"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <CheckCircle className="text-blue-600 dark:text-blue-400 w-12 h-12 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
