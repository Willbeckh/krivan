"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in Branding & Strategy, Email Marketing, Analytics, Video Marketing, and E-commerce Marketing.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply reach out to us via our contact page, and we'll schedule a consultation to understand your needs.",
  },
  {
    question: "Do you provide customized solutions?",
    answer:
      "Yes! We tailor our services to fit your specific business goals and industry requirements.",
  },
  {
    question: "What makes you different from competitors?",
    answer:
      "Our data-driven approach, innovative strategies, and commitment to client success set us apart.",
  },
];

const FAQ = () => {
  return (
    <section className="flex flex-col items-center px-6 py-12 lg:px-12">
      {/* Header */}
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.p
        className="text-lg text-gray-600 text-center max-w-2xl mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Find answers to the most common questions about our services.
      </motion.p>

      {/* FAQ Accordion */}
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="md:text-xl text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQ;
