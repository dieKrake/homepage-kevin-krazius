"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center text-center">
        {/* Eyebrow Headline */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-500 font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20"
        >
          Ihre Agentur für digitales Wachstum
        </motion.span>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 px-2"
        >
          Mehr Kunden durch <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-purple-400">
            Online-Auftritt & SEO
          </span>
        </motion.h1>

        {/* Sub-headline / Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed mb-12 px-4"
        >
          Wir erstellen & betreuen Ihre hochperformante Next.js Website
          inklusive professioneller SEO-Optimierung. Wahlweise zum monatlichen
          Festpreis oder als klassischer Kauf — auf Wunsch mit intelligenten
          KI-Chatbots.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center justify-center"
        >
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full sm:w-auto bg-white text-gray-950 font-bold px-10 py-5 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl shadow-white/5 active:scale-95"
          >
            Kostenloses Erstgespräch
          </button>
          <Link
            href="/pricing"
            className="w-full sm:w-auto bg-white/5 text-white font-semibold px-10 py-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm active:scale-95"
          >
            Preismodelle ansehen
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
