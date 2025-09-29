"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsBorderWidth, BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const hideLinksOnPaths = ["/impressum", "/agb"];
  const shouldShowLinks = !hideLinksOnPaths.includes(pathname);

  return (
    <header className="z-[999] relative">
      {/* Background and structure */}
      <motion.div
        className="fixed top-0 left-1/2 h-[5.7rem] w-full rounded-none border border-opacity-40 shadow-black/[0.03] backdrop-blur-[0.5rem] bg-gray-950 border-black/40 bg-opacity-90"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[1.5rem] left-1/2 h-12 w-full -translate-x-1/2 py-2 custom-sm:top-[0.7rem] custom-sm:h-[initial] custom-sm:py-0 max-w-screen-2xl">
        <motion.div
          className="flex items-center"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {/* Company Logo */}
          <motion.div className="flex items-center custom-sm:ml-4 absolute left-1/2 -translate-x-1/2 custom-sm:left-0 custom-sm:translate-x-0 custom-sm:relative">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/Krazius-Solutions-Logo.webp"
                alt="Logo"
                width={100}
                height={100}
                className="h-16 w-auto"
              />
            </Link>
          </motion.div>

          {/* BsBorderWidth Icon - visible only on small screens */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute ml-5 block custom-sm:hidden transform -translate-y-1/2"
          >
            <BsBorderWidth
              size={32}
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer text-white focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition"
            />
          </motion.div>

          {/* Menu for small screens - animated */}
          <AnimatePresence>
            {menuOpen &&
              shouldShowLinks && ( // Verstecke das Menü, wenn wir auf /impressum oder /agb sind
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 0.98, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-48 sm:w-[300px] ml-1 mt-36 custom-sm:hidden bg-gray-800 rounded-lg"
                >
                  <ul className="flex flex-col items-center justify-center gap-y-1 text-[1.3rem] font-medium text-gray-500">
                    {links.map((link) => (
                      <li key={link.hash}>
                        <Link
                          className={clsx(
                            "flex w-full items-center justify-center px-5 py-3 hover:text-black/90 transition text-gray-500 hover:text-gray-300",
                            {}
                          )}
                          href={link.hash}
                          onClick={() => {
                            setMenuOpen(false); // Close the menu after selecting a link
                          }}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
          </AnimatePresence>

          {/* Menu for large screens */}
          <div className="hidden absolute custom-sm:flex left-1/2 -translate-x-1/2">
            {shouldShowLinks && ( // Verstecke die Links, wenn wir auf /impressum oder /agb sind
              <ul className="flex flex-row items-center justify-center gap-5 text-[1.4rem] font-medium text-gray-500">
                {links.map((link) => (
                  <li
                    key={link.hash}
                    className="relative flex items-center justify-center"
                  >
                    <Link
                      className={clsx(
                        "flex w-full items-center justify-center px-3 py-3 transition text-gray-500 hover:text-gray-300",
                        {}
                      )}
                      href={link.hash}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* WhatsApp Icon */}
          <motion.div
            className="absolute right-0 -top-0 custom-sm:top-2 transform -translate-y-1/2 rounded-full custom-sm:px-2 px-0"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <a
              className="px-[0.5rem] py-[0.5rem] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer text-white"
              href={"https://wa.me/1624059165"}
              style={{ backgroundColor: "rgb(3, 7, 18)" }}
            >
              <h1 className="hidden min-[1240px]:block">+49 162 405 9165</h1>
              <BsWhatsapp className="text-3xl custom-sm:text-4xl" />
            </a>
          </motion.div>
        </motion.div>
      </nav>
    </header>
  );
}
