"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./section-heading";
import { FaStar, FaQuoteLeft, FaExternalLinkAlt } from "react-icons/fa";
import { testimonialsData } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="scroll-mt-28 mb-28 w-full max-w-[72rem] px-4 flex flex-col items-center">
      <SectionHeading>Was unsere Kunden sagen</SectionHeading>

      <motion.p
        className="text-gray-400 text-center max-w-2xl mb-16 -mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Erfahren Sie, wie wir anderen Unternehmen dabei geholfen haben, ihre
        Sichtbarkeit zu maximieren, Prozesse zu automatisieren und
        kontinuierlich neue Kunden zu gewinnen.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {testimonialsData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-between p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 relative group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-white/5 pointer-events-none">
              <FaQuoteLeft size={48} />
            </div>

            <div>
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-amber-500">
                {[...Array(item.stars)].map((_, sIndex) => (
                  <FaStar key={sIndex} size={16} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-sm leading-relaxed italic mb-8 relative z-10">
                "{item.review}"
              </p>
            </div>

            {/* Author */}
            <div className="border-t border-white/5 pt-4 flex justify-between items-end">
              <div>
                <h4 className="font-semibold text-white text-base">
                  {item.name}
                </h4>
                <p className="text-gray-500 text-xs mt-0.5">{item.role}</p>
              </div>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors p-2 -mr-2"
                  title="Website besuchen"
                >
                  <FaExternalLinkAlt size={14} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
