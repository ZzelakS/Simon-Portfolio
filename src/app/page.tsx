"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-semibold">
          Simon Okpe Alachi
        </h1>

        <p className="text-lg opacity-80">
          I build systems and stories at the intersection of culture and technology.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
          <Link
            href="/creator"
            className="px-6 py-3 border rounded-lg hover:bg-white hover:text-black transition"
          >
            Creative / Content
          </Link>

          <Link
            href="/dev"
            className="px-6 py-3 border rounded-lg hover:bg-white hover:text-black transition"
          >
            Software / Systems
          </Link>
        </div>

        <p className="text-sm opacity-50 pt-8">
          Based in Nigeria · Working globally
        </p>
      </motion.div>
    </main>
  );
}
