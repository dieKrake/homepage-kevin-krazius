"use client";

import { servicesData } from "@/lib/data";
import ServiceCard from "./service-card";
import { motion } from "motion/react";
import SectionHeading from "./section-heading";
import React from "react";

export default function Services() {
  return (
    <section
      className="scroll-mt-28 mb-28 flex flex-col items-center justify-between min-h-[40rem]"
      id="services"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="w-full flex justify-center mt-4"
      >
        <SectionHeading>
          KI-Chatbot Lösungen für Kleinunternehmen
        </SectionHeading>
      </motion.div>

      <motion.section
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-12 scroll-mt-28 w-full my-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <p className="mb-3">
          Als KI-Spezialist entwickle ich intelligente Chatbot-Lösungen mit
          <span className="font-medium"> RAG-Technologie</span>, die perfekt auf
          die Bedürfnisse von Kleinunternehmen abgestimmt sind. Ich helfe Ihnen,
          Ihre Kundenbetreuung zu automatisieren und durch moderne{" "}
          <span className="font-medium">KI-Technologien</span> und{" "}
          <span className="font-medium">maschinelles Lernen</span> zu
          optimieren. Von der einfachen FAQ-Automatisierung bis hin zu
          komplexen, branchenspezifischen Beratungs-Chatbots – ich biete Ihnen
          maßgeschneiderte Lösungen für 24/7 Kundenservice.
        </p>

        <p>
          <span className="italic">
            Wenn ich nicht gerade Chatbots entwickle
          </span>
          , beschäftige ich mich mit den neuesten KI-Entwicklungen und
          verbessere kontinuierlich meine Expertise in maschinellem Lernen. Ich
          arbeite stets daran, meine Kunden durch intelligente Automatisierung
          und effiziente KI-Lösungen zu unterstützen. Lassen Sie uns gemeinsam
          Ihre Kundenbetreuung revolutionieren!
        </p>
      </motion.section>

      <div className="flex flex-wrap gap-x-2 gap-y-8 justify-center xl:mx-2">
        {servicesData.map((service, index) => (
          <React.Fragment key={index}>
            <ServiceCard {...service} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
