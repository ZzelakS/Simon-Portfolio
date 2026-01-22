"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="section-card flex flex-col items-center text-center py-16 mx-6 md:mx-12">
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-white max-w-3xl"
      >
        Let’s build something impactful.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
      >
        I combine software, AI, and marketing expertise to craft experiences that grow businesses.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap gap-6 mt-8 justify-center"
      >
        <motion.a
          href="#contact"
          className="neon-btn relative"
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ y: 0, scale: 0.98 }}
        >
          Contact
        </motion.a>

        <motion.a
          href="#booking"
          className="neon-btn relative"
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ y: 0, scale: 0.98 }}
        >
          Book a Call
        </motion.a>
      </motion.div>

    </section>
  );
}
