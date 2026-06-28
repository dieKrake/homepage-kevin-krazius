"use client";

import React from "react";
import { motion } from "motion/react";

export default function Catchphrase() {
  return (
    <section className="w-full relative overflow-hidden py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-y border-white/5">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[50rem] mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-blue-500 font-semibold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            UNSERE PHILOSOPHIE
          </span>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-relaxed md:leading-snug">
            "Eine Website ohne Suchmaschinenoptimierung (SEO) ist wie eine Visitenkarte in der Wüste."
          </blockquote>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed mt-2">
            Wir sorgen dafür, dass Sie genau dort gefunden werden, wo Ihre Kunden bereits nach Ihnen suchen: 
            <span className="text-white font-medium"> Ganz oben bei Google.</span> Konzentrieren Sie sich voll und ganz auf Ihr Kerngeschäft — während Ihre neue Online-Präsenz rund um die Uhr vollautomatisch neue Anfragen generiert.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
