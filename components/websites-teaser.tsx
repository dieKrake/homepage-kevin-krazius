"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "motion/react";
import Link from "next/link";

export default function WebsitesTeaser() {
  return (
    <section className="scroll-mt-28 mb-28 flex flex-col items-center">
      <SectionHeading>Moderne Websites</SectionHeading>

      <motion.div
        className="max-w-[45rem] text-center leading-8 mb-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.175 }}
      >
        <p className="text-gray-300">
          Neben intelligenten Chatbots bieten wir auch die Erstellung von
          hochperformanten, modernen Websites an. Unser Fokus liegt auf
          Benutzerfreundlichkeit, Geschwindigkeit und einem Design, das Ihre
          Marke optimal widerspiegelt.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex justify-center"
      >
        <Link
          href="/websites"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition border border-white/10"
        >
          Unsere Website-Lösungen entdecken
        </Link>
      </motion.div>
    </section>
  );
}
