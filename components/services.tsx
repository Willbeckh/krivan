"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useFeaturedServices } from "@/lib/hooks/useFeaturedServices";

const FeaturedServices = () => {
  const { services, isLoading } = useFeaturedServices();

  if (isLoading) return null;
  if (!services?.length) return null;

  return (
    <section
      id="services"
      className="flex flex-col items-center px-6 py-12 lg:px-12"
    >
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>
      <motion.p
        className="text-lg max-w-2xl text-center mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        We offer tailored solutions to help businesses scale and succeed in the
        digital landscape.
      </motion.p>

      <motion.div
        className="grid gap-6 w-full sm:grid-cols2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all bg-gradient-to-br from-blue-50 to-white dark:from-gray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Full-Width Image */}
            <div className="relative w-full h-48">
              {service.image?.url && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${service.image.url}`}
                  alt={service.title}
                  fill
                  className="w-full h-full object-cover brightness-100 dark:brightness-80"
                />
              )}

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

              <Link
                href={`/services/${service.slug}`}
                className="text-blue-600 hover:underline"
              >
                Read more →
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold mb-2">
          Explore more of our Services.
        </h3>
        <Button asChild>
          <Link
            href="/services"
            className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700"
          >
            Explore More
          </Link>
        </Button>
      </motion.div> */}
    </section>
  );
};

export default FeaturedServices;
