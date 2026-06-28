"use client";

import { servicesData } from "@/lib/data";
import { motion } from "motion/react";
import SectionHeading from "./section-heading";
import React from "react";
import Link from "next/link";
import { FaRocket, FaSearch, FaRobot, FaShieldAlt } from "react-icons/fa";

const icons = [
  <FaRocket className="text-blue-500" />,
  <FaSearch className="text-emerald-500" />,
  <FaRobot className="text-amber-500" />,
  <FaShieldAlt className="text-purple-500" />,
];

export default function Services() {
  return (
    <section
      className="scroll-mt-28 mb-28 flex flex-col items-center w-full"
      id="services"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.175 }}
        className="w-full flex justify-center mt-4"
      >
        <SectionHeading>
          Unsere Leistungen für Ihren digitalen Erfolg
        </SectionHeading>
      </motion.div>

      <motion.section
        className="mb-16 max-w-[50rem] text-center leading-8 scroll-mt-28 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-gray-300 text-lg">
          Bei Krazius Solutions kombinieren wir moderne, hochperformante{" "}
          <span className="text-white font-medium">Next.js Webentwicklung</span>{" "}
          mit effektiver{" "}
          <span className="text-white font-medium">
            Suchmaschinenoptimierung (SEO)
          </span>{" "}
          und intelligenten{" "}
          <span className="text-white font-medium">
            RAG KI-Chatbot-Lösungen
          </span>
          .
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[72rem] px-4 mb-16">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-2xl group-hover:scale-110 transition-transform duration-300">
                {icons[index]}
              </div>
              <h3 className="text-2xl font-bold text-white leading-tight">
                {service.title}
              </h3>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
              {service.description}
            </p>

            <ul className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
              {service.tags.map((tag, tagIndex) => (
                <li
                  key={tagIndex}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[0.7rem] uppercase tracking-wider text-gray-400"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center"
      >
        <Link
          href="/pricing"
          className="group bg-gray-900 text-white px-8 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition-all border border-white/10 shadow-lg"
        >
          Unsere Preismodelle entdecken
        </Link>
      </motion.div>
    </section>
  );
}
