"use client";

import { motion } from "framer-motion";

interface ShowreelHeroProps {
  videoId: string;
  title: string;
  subtitle: string;
}

export default function ShowreelHero({
  videoId,
  title,
  subtitle
}: ShowreelHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden rounded-3xl">
      
      {/* VIDEO */}
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1&background=1`}
        className="absolute inset-0 w-full h-full object-cover"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] pointer-events-none" />

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-16 max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          {title}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/80">
          {subtitle}
        </p>

        <a
          href="#creator-work"
          className="mt-10 inline-block w-fit px-6 py-3 rounded-xl border border-white/30 text-white backdrop-blur hover:bg-white/10 transition"
        >
          View Creator Work
        </a>
      </motion.div>
    </section>
  );
}
