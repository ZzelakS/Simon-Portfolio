// components/shared/AnimatedGlow.tsx
"use client";

import { motion } from "framer-motion";

export default function AnimatedGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Purple glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[160px]"
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "-20%", left: "-10%" }}
      />

      {/* Blue glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[160px]"
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 120, -80, 0],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "-20%", right: "-10%" }}
      />

    </div>
  );
}
