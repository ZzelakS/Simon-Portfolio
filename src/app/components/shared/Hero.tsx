"use client";

import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  cta1: string;
  cta2: string;
}

export default function Hero({ title, subtitle, cta1, cta2 }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start relative px-6 md:px-12">

      {/* Hero Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1224]/80 to-[#060a14]/80 -z-10 pointer-events-none"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold leading-tight text-white max-w-3xl"
      >
        {title}
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
      >
        {subtitle}
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex flex-wrap gap-6 mt-8"
      >
        <motion.a
          href="#projects"
          className="neon-btn relative"
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ y: 0, scale: 0.98 }}
        >
          {cta1}
        </motion.a>

        <motion.a
          href="#contact"
          className="neon-btn relative"
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ y: 0, scale: 0.98 }}
        >
          {cta2}
        </motion.a>
      </motion.div>
    </section>
  );
}
