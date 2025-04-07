"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./hero-highlight";

export function HeroHighlightDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <HeroHighlight>
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
          className="text-4xl px-4 md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mt-0 sm:mt-10"
        >
          Moderne Webentwicklung
          <br />
          <Highlight className="text-white">
            für Ihren digitalen Erfolg
          </Highlight>
        </motion.h1>

        <motion.p
          className="hidden sm:block text-base sm:text-2xl text-gray-50 !leading-[1.6] text-center mt-12 max-w-4xl mx-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Erreichen Sie mehr Kunden mit einer optimierten und modernen Website.
          Lassen Sie uns in einem ersten Gespräch gemeinsam herausfinden, wie
          wir Ihre Unternehmens-Website verbessern können.
        </motion.p>

        <div className="flex mt-8 justify-center">
          <button
            className="group flex text-sm sm:text-base items-center justify-center px-6 py-3 sm:px-12 sm:py-4 rounded-lg border-2 transition-all duration-300 text-black hover:text-gray-950 bg-white hover:bg-gray-50 border-none md:hover:scale-105"
            style={{
              opacity: 0,
              animation: "fadeIn 0.9s ease-out 0.6s forwards",
            }}
            onClick={() => {
              const servicesSection = document.getElementById("services");
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Mehr erfahren
          </button>
        </div>
      </HeroHighlight>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </motion.div>
  );
}
