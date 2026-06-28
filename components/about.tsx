"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "motion/react";
import Link from "next/link";

export default function About() {
  return (
    <motion.section
      className="sm:px-4 mb-28 md:max-w-[65rem] sm:max-w-[60rem] text-center leading-8 sm:mt-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex flex-col-reverse md:flex-row gap-16 items-center">
        <div className="text-left flex-1 md:max-w-[65%]">
          <h2 className="text-3xl font-medium mb-8 text-left">Über mich</h2>
          <p>
            Mein Name ist Kevin Krazius und ich bin KI-Spezialist aus
            Leidenschaft mit Fokus auf intelligente Chatbot-Lösungen. Meine
            <span className="font-medium">
              {" "}
              Bachelorarbeit mit KI-Schwerpunkt
            </span>{" "}
            und praktische Erfahrung im{" "}
            <span className="font-medium">
              LLM- und Prompt-Engineering
            </span>{" "}
            bilden das Fundament für maßgeschneiderte Automatisierungslösungen.
          </p>

          <p>
            Mein KI-Tech-Stack:{" "}
            <span className="font-medium">
              RAG-Technologie, OpenAI GPT, LangChain und Vector-Datenbanken
            </span>
            . Ich entwickle Chatbots, die nicht nur antworten, sondern Ihr
            Unternehmenswissen intelligent nutzen und kontinuierlich dazulernen.
          </p>

          <p>
            <span className="italic">RAG-Technologie</span> (Retrieval-Augmented
            Generation) ermöglicht es Chatbots, auf Ihre spezifischen
            Unternehmensdaten zuzugreifen und präzise, kontextbezogene Antworten
            zu geben. So wird Ihr Chatbot zum intelligenten Berater, der Ihre
            Kunden mit Fachwissen unterstützt.
          </p>

          <p>
            Mein Fokus:{" "}
            <span className="font-medium">
              Kleinunternehmen und Einzelunternehmer{" "}
            </span>
            verdienen professionelle KI-Lösungen. Ich entwickle erschwingliche,
            maßgeschneiderte Chatbots, die Ihre Kundenbetreuung automatisieren
            und Ihnen mehr Zeit für Ihr Kerngeschäft verschaffen – verständlich
            erklärt und transparent umgesetzt.
          </p>

          <div className="mt-8 flex justify-start">
            <Link
              href="/about"
              className="group bg-gray-900 text-white px-6 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition border border-white/10"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
        <div className="relative mx-auto md:mx-0 md:w-[320px] md:h-[320px] sm:w-[300px] sm:h-[300px] w-[255px] h-[255px] md:ml-24 opacity-90">
          <img
            src="/website_pic.jpg"
            alt="Kevin Krazius"
            className="rounded-full object-cover h-full w-full shadow-xl border-4 border-gray-500 border-opacity-50 opacity-80"
            style={{ objectPosition: "center 5%" }}
          />
        </div>
      </div>
    </motion.section>
  );
}
