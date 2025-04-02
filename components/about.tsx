"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="sm:px-4 mb-28 md:max-w-[65rem] sm:max-w-[60rem] text-center leading-8 sm:mt-16 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Über mich</SectionHeading>
      <div className="flex flex-col-reverse md:flex-row gap-16 items-center">
        <div className="text-center md:text-left flex-1 md:max-w-[65%]">
          <p>
            Mein Name ist Kevin Krazius und ich bin Informatiker aus
            Leidenschaft mit besonderem Fokus auf moderner Webentwicklung. Mein
            Studium gab mir das technische Fundament – meine kontinuierliche
            Weiterbildung hält mich an der Spitze aktueller Entwicklungen.
          </p>

          <p>
            Mein Tech-Stack:{" "}
            <span className="font-medium">
              React, Next.js, Node.js und MongoDB
            </span>
            . Ich bleibe stets auf dem neuesten Stand, um Ihren digitalen
            Auftritt zukunftssicher zu gestalten.
          </p>

          <p>
            <span className="italic">Künstliche Intelligenz</span> sehe ich als
            entscheidenden Innovationstreiber. Mit AI-Integration erschaffen wir
            heute Websites, die effizienter, personalisierter und
            benutzerfreundlicher sind als je zuvor.
          </p>

          <p>
            Mein Ansatz: Ihre Website ist Ihre{" "}
            <span className="font-medium">digitale Visitenkarte</span>. Ich
            setze technisches Know-how gezielt für Ihren Geschäftserfolg ein –
            verständlich erklärt und transparent umgesetzt.
          </p>
        </div>
        <div className="relative mx-auto md:mx-0 md:w-[320px] md:h-[320px] sm:w-[300px] sm:h-[300px] w-[255px] h-[255px] md:ml-24 opacity-90">
          <img
            src="/website_pic.jpg"
            alt="Kevin Krazius"
            className="rounded-full object-cover h-full w-full shadow-xl border-4 border-gray-500 border-opacity-50"
            style={{ objectPosition: "center 5%" }}
          />
        </div>
      </div>
    </motion.section>
  );
}
