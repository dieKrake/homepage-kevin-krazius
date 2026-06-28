"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BsBorderWidth, BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="z-[999] relative">
      {/* Navbar Container */}
      <motion.div
        className={clsx(
          "fixed top-0 left-1/2 -translate-x-1/2 w-full h-[5rem] transition-all duration-300 border-b",
          scrolled
            ? "bg-gray-950/80 backdrop-blur-lg border-white/10 h-[4.5rem]"
            : "bg-transparent border-transparent",
        )}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className="flex fixed top-0 left-1/2 h-[5rem] w-full -translate-x-1/2 px-4 sm:px-8 max-w-screen-2xl items-center justify-between transition-all duration-300">
        {/* Company Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <Link href="/" className="cursor-pointer group">
            <Image
              src="/Krazius-Solutions-Logo.webp"
              alt="Logo"
              width={120}
              height={120}
              className="h-12 sm:h-14 w-auto group-hover:scale-105 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden custom-sm:flex items-center gap-2 bg-white/5 border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-sm">
          <ul className="flex flex-row items-center gap-1 text-[0.95rem] font-medium">
            {links.map((link) => (
              <li
                key={link.hash}
                className="relative flex items-center justify-center"
              >
                <Link
                  className={clsx(
                    "relative px-4 py-2 transition-colors duration-200 rounded-full",
                    pathname === link.hash
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200",
                  )}
                  href={link.hash}
                >
                  {link.name}
                  {link.hash === pathname && (
                    <motion.span
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a
              href="https://wa.me/1624059165"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/10 active:scale-95"
            >
              <span className="hidden min-[1350px]:block">Kontakt</span>
              <BsWhatsapp className="text-xl" />
            </a>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="block custom-sm:hidden p-2.5 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors"
          >
            <BsBorderWidth size={24} />
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[5.5rem] left-4 right-4 p-4 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl custom-sm:hidden shadow-2xl z-[1000]"
            >
              <ul className="flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.hash}>
                    <Link
                      className={clsx(
                        "flex w-full items-center px-5 py-4 rounded-xl transition-all",
                        pathname === link.hash
                          ? "bg-white/10 text-white font-semibold"
                          : "text-gray-400 hover:bg-white/5 hover:text-white",
                      )}
                      href={link.hash}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
