"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import SimpleWave from "./simple-wave";

export default function IntroSimple() {
  return (
    <section
      id="home"
      className="relative mt-[-4rem] custom-sm:mt-12 max-w-[120rem] text-center md:text-left sm:mb-0 scroll-mt-[100rem] px-4 md:px-8 overflow-hidden sm:w-screen h-[32rem]"
    >
      <style jsx>{`
        .wave-container {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.7;
          /* Die einfache Welle braucht weniger Transformation */
          transform: translateX(0%) translateY(0%) scale(1.5);
        }

        /* Media Query für kleine Bildschirme */
        @media (max-width: 1239px) {
          .wave-container {
            transform: translateX(0%) translateY(0%) scale(0);
          }
        }
      `}</style>

      {/* Hauptinhalt */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-40">
        <div className="mt-24 flex-1 max-w-2xl ml-0 md:ml-44">
          <motion.p
            className="mb-2 text-lg sm:text-xl text-gray-50 !leading-[1.6]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Ihre Website in professionellen Händen
          </motion.p>

          <motion.h1
            className="mb-6 text-4xl sm:text-5xl font-bold !leading-[1.2]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Moderne Webentwicklung für Ihren digitalen Erfolg
          </motion.h1>

          <motion.p
            className="text-lg sm:text-2xl text-gray-50 !leading-[1.6]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Kostenlosen Termin zur Analyse ihrer Website vereinbaren:
          </motion.p>

          <div className="flex gap-4 mt-8">
            <motion.button
              className={clsx(
                "group flex items-center justify-center gap-2 w-full px-3 py-3 rounded-full border-2 transition-all duration-300 text-gray-900 hover:text-gray-950 transform hover:scale-110 bg-gray-300 hover:bg-gray-50 border-none",
                {}
              )}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.9,
                ease: "easeOut",
              }}
            >
              Kostenlose Analyse
            </motion.button>

            <motion.button
              className={clsx(
                "group flex items-center justify-center gap-2 w-full px-3 py-3 rounded-full border-2 transition-all duration-300 text-gray-900 hover:text-gray-950 transform hover:scale-110 bg-gray-300 hover:bg-gray-50 border-none",
                {}
              )}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.9,
                ease: "easeOut",
              }}
            >
              Mehr erfahren
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
