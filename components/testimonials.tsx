"use client";
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "The team exceeded our expectations! Their strategies helped us grow exponentially.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    feedback:
      "Professional and results-driven. Our engagement skyrocketed within months!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Johnson",
    feedback:
      "Fantastic service! The insights and execution were top-notch. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center px-6 py-12 lg:px-12 bg-gray-100">
      {/* Header */}
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Clients Say
      </motion.h2>
      <motion.p
        className="text-lg text-gray-600 text-center max-w-2xl mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Real feedback from businesses and individuals who trusted our expertise.
      </motion.p>

      {/* Testimonials Grid */}
      <motion.div
        className="grid gap-6 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-2xl shadow-lg bg-white hover:shadow-xl flex flex-col items-center text-center transition"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Avatar className="mb-4">
              <AvatarImage src={testimonial.image} alt={testimonial.name} />
            </Avatar>
            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
            <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
