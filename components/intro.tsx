"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Intro() {
  return (
    <section
      id="home"
      className="mt-[-4rem] custom-sm:mt-12 mb-28 max-w-[120rem] text-center md:text-left sm:mb-0 scroll-mt-[100rem] px-4 md:px-8"
    >
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-40">
        <div className="mt-24 flex-1 max-w-2xl">
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

        <div className="relative">
          <div className="relative w-[300px] md:[300px] sm:w-[460px]">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src="/website_pic.jpg"
                alt="Kevin portrait foto"
                width="320"
                height="320"
                quality="95"
                priority={true}
                className="w-full h-auto rounded-2xl object-cover border-[0.35rem] border-white shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
