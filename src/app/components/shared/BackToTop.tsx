"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{ position: "fixed" }} // 🔥 forces viewport anchoring
      className={`
        right-6
        bottom-[max(1.5rem,env(safe-area-inset-bottom))]
        isolate
        z-[2147483647]
        neon-btn
        p-3
        rounded-full
        transition-all
        duration-300
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
      `}
    >
      <ArrowUp size={18} />
    </button>
  );
}
