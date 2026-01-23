"use client";

import { motion } from "framer-motion";

type CTAProps = {
  title: string;
  subtitle: string;
};

export default function CTA({ title, subtitle }: CTAProps) {
  return (
    <section className="section-card flex flex-col items-center text-center py-16 mx-6 md:mx-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-white max-w-3xl"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
      >
        {subtitle}
      </motion.p>

      {/* =========================
          CONTACT FORM
      ========================== */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-xl mt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input-field"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input-field"
            required
          />
        </div>

        <textarea
          placeholder="How can I help you?"
          className="input-field mt-4 min-h-[140px]"
          required
        />

        <button
          type="submit"
          className="neon-btn relative mt-6 w-full"
        >
          Send Message
        </button>
      </motion.form>

      {/* =========================
          WHATSAPP BUTTON
      ========================== */}
      <motion.a
        href="https://wa.me/234XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="neon-btn relative mt-6"
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ y: 0, scale: 0.98 }}
      >
        WhatsApp
      </motion.a>
    </section>
  );
}
