"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Dev", href: "/dev" },
    { label: "Creator", href: "/creator" },
    { label: "CV", href: "/cv" }, // 👈 added
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition ${
        scrolled
          ? "bg-[rgba(10,14,35,0.8)] backdrop-blur-md border-b border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl tracking-wide">
            Simon Okpe Alachi
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-gray-300 hover:text-white transition ${
                    active ? "text-white" : ""
                  }`}
                >
                  {link.label}

                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-2 w-full h-0.5 bg-white rounded"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 bg-gray-900 border border-gray-700 rounded-xl p-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 text-gray-300 hover:text-white ${
                  pathname === link.href ? "text-white" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
