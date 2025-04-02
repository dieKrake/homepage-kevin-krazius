"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.p
        className="mb-2 text-lg sm:text-xl text-gray-50 !leading-[1.6] text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Ihre Website in professionellen Händen
      </motion.p>

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Moderne Webentwicklung
        <br />
        <Highlight className="text-white">für Ihren digitalen Erfolg</Highlight>
      </motion.h1>

      <motion.p
        className="text-lg sm:text-2xl text-gray-50 !leading-[1.6] text-center mt-12"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Kostenlosen Termin zur Analyse ihrer Website vereinbaren:
      </motion.p>

      <div className="flex gap-4 mt-8">
        <motion.button
          className="group flex items-center justify-center gap-2 w-full px-3 py-3 rounded-full border-2 transition-all duration-300 text-black hover:text-gray-950 transform hover:scale-110 bg-white hover:bg-gray-50 border-none"
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
          className="group flex items-center justify-center gap-2 w-full px-3 py-3 rounded-full border-2 transition-all duration-300 text-black hover:text-gray-950 transform hover:scale-110 bg-white hover:bg-gray-50 border-none"
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
    </HeroHighlight>
  );
}
