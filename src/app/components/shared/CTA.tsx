"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

type CTAProps = {
  title: string;
  subtitle: string;
};

export default function CTA({ title, subtitle }: CTAProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_6c3mcxg",
        "template_ne64rkr",
        e.currentTarget,
        "_gfR3C8kvslD-gMvX",
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent!");
          e.currentTarget.reset();
        },
        () => {
          setLoading(false);
          alert("Failed to send message. Please try again.");
        },
      );
  };

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

      {/* CONTACT FORM */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-xl mt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="input-field"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="input-field"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="How can I help you?"
          className="input-field mt-4 min-h-[140px]"
          required
        />

        <button type="submit" className="neon-btn relative mt-6 w-full">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

      <motion.a href="/cv" className="neon-btn relative mt-6">
        View CV
      </motion.a>

      {/* WHATSAPP BUTTON */}
      <motion.a
        href="https://wa.me/2349062288078?text=Hi%20Simon!%20I%20saw%20your%20portfolio%20and%20I’d%20love%20to%20discuss%20a%20role%20or%20collaboration."
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
