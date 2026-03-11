"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { caseStudiesData } from "@/lib/data";

export default function CaseStudies() {
  return (
    <motion.section
      className="mb-28 max-w-[53rem] text-center sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="case-studies"
    >
      <SectionHeading>Erfolgreiche Chatbot-Projekte</SectionHeading>

      <div className="grid gap-8 md:gap-12 mt-12">
        {caseStudiesData.map((caseStudy, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-white/10 p-6 rounded-lg text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-700 dark:text-white/70 mb-4">
                  {caseStudy.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:w-48 md:text-right">
                <div className="bg-black/[0.05] dark:bg-white/5 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-600 dark:text-white/60 mb-1">
                    Branche
                  </p>
                  <p className="font-semibold">{caseStudy.industry}</p>

                  <p className="text-sm font-medium text-gray-600 dark:text-white/60 mb-1 mt-3">
                    Ergebnisse
                  </p>
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {caseStudy.results}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
