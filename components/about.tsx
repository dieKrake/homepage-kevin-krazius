"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function About() {
  return (
    <motion.section
      className="w-full max-w-[72rem] px-4 mb-28 scroll-mt-28 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="about"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-center p-8 sm:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
        <div className="relative flex-shrink-0">
          <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-2xl overflow-hidden border border-white/10 p-2 bg-white/5">
            <img
              src="/images/kkrazius_bild.jpg"
              alt="Kevin Krazius"
              className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
              style={{ objectPosition: "center 5%" }}
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl -z-10" />
        </div>

        <div className="flex-1 text-left">
          <span className="text-blue-500 font-semibold tracking-widest uppercase text-xs mb-4 block">
            Über uns
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Kevin Krazius <span className="text-blue-500">-</span> Full-Stack
            Developer
          </h2>

          <div className="space-y-4 text-gray-400 leading-relaxed text-base sm:text-lg">
            <p>
              Wir verbinden{" "}
              <span className="text-white font-medium">
                moderne Webentwicklung
              </span>{" "}
              mit zukunftsweisender{" "}
              <span className="text-white font-medium">KI-Expertise</span>.
              Unser Ziel ist es, Unternehmen nicht nur eine digitale
              Visitenkarte zu geben, sondern eine echte Wachstumsmaschine zu
              bauen.
            </p>
            <p>
              Durch unsere Spezialisierung auf{" "}
              <span className="text-white font-medium">RAG-Systeme</span>{" "}
              entwickeln wir Chatbots, die Ihre Kundenberatung automatisieren
              und verpasste Chancen in wertvolle Leads verwandeln.
            </p>
            <p>
              Von der pfeilschnellen Next.js Website über messbares Local SEO
              bis hin zu vollautomatisierten Prozessabläufen — wir begleiten Sie
              ganzheitlich auf Ihrem Weg zum digitalen Erfolg.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all active:scale-95"
            >
              Vollständiges Profil ansehen
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
