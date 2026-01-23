"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6">

      {/* 🌌 CINEMATIC GALAXY OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/70 via-black/40 to-black/80
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          relative z-10
          text-center max-w-xl space-y-6
          text-white
        "
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          Simon Okpe Alachi
        </h1>

        <p className="text-lg text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          I build systems and stories at the intersection of culture and technology.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
          <Link
            href="/dev"
            className="
              px-6 py-3
              border border-white/60
              rounded-lg
              hover:bg-white hover:text-black
              transition
              backdrop-blur-sm
            "
          >
            Software / Systems
          </Link>

          <Link
            href="/creator"
            className="
              px-6 py-3
              border border-white/60
              rounded-lg
              hover:bg-white hover:text-black
              transition
              backdrop-blur-sm
            "
          >
            Creative / Content
          </Link>
        </div>

        <p className="text-sm text-white/60 pt-8">
          Based in Nigeria · Working globally
        </p>
      </motion.div>
    </main>
  );
}
