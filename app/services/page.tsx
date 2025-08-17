"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAllServices } from "@/lib/hooks/useAllServices";

export default function ServicesPage() {
  const { services, isLoading, error } = useAllServices();

  return (
    <main className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      {/* HERO SECTION */}
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

      {/* SERVICES GRID */}
      <section className="container mx-auto px-4 py-10 lg:py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">Our Services</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Stay ahead of the competition with forward-thinking tactics and
            cutting-edge technology.
          </p>
        </div>

        {/* handle loading */}
        {isLoading && (
          <p className="text-center text-[hsl(var(--muted-foreground))]">
            Loading services...
          </p>
        )}

        {/* handle error */}
        {error && (
          <p className="text-center text-red-500">Failed to load services.</p>
        )}

        {/* handle empty */}
        {!isLoading && !error && (!services || services.length === 0) && (
          <p className="text-center text-[hsl(var(--muted-foreground))]">
            No services added yet.
          </p>
        )}

        {/* render services if any */}
        {!isLoading && !error && (services?.length ?? 0) > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {(services ?? []).map((service, index) => (
              <motion.div
                key={service.id}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-[hsl(var(--muted-foreground))] mb-4">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Read more →
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-10 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Supercharge Your Growth?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Our team of experts is here to help you take your business to the
            next level.
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
