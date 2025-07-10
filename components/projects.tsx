"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { motion } from "framer-motion";

export default function Projects() {
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
          Individuelle Websites für Unternehmen & Selbstständige
        </SectionHeading>
      </motion.div>

      <motion.section
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-12 scroll-mt-28 w-full my-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <p className="mb-3">
          Als Webentwickler spezialisiere ich mich auf die Erstellung von
          maßgeschneiderten Websites und Landing Pages, die perfekt auf die
          Bedürfnisse von Unternehmen und Selbstständigen abgestimmt sind. Ich
          helfe Ihnen, Ihre Online-Präsenz zu stärken und Ihre Ziele durch
          moderne, leistungsstarke Technologien wie{" "}
          <span className="font-medium">React</span> und{" "}
          <span className="font-medium">Next.js</span> zu erreichen. Ob es um
          eine simple Landing Page oder eine komplexe Web-Anwendung geht – ich
          biete Ihnen maßgeschneiderte Lösungen, die sowohl ästhetisch
          ansprechend als auch funktional sind.
        </p>

        <p>
          <span className="italic">Wenn ich nicht gerade Websites baue</span>,
          beschäftige ich mich gerne mit neuen Technologien und verbessere
          kontinuierlich meine Fähigkeiten. Ich arbeite stets daran, meine
          Kunden durch qualitativ hochwertige Lösungen und eine effiziente
          Arbeitsweise zu unterstützen. Lassen Sie uns gemeinsam Ihre
          Online-Präsenz auf das nächste Level heben!
        </p>
      </motion.section>

      <div className="flex flex-wrap gap-x-2 gap-y-8 justify-center xl:mx-2">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
