"use client";

import { servicesData } from "@/lib/data";
import ServiceCard from "./service-card";
import { motion } from "motion/react";
import SectionHeading from "./section-heading";
import React from "react";
import Link from "next/link";

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
          Unsere Leistungen für Ihren digitalen Erfolg
        </SectionHeading>
      </motion.div>

      <motion.section
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-12 scroll-mt-28 w-full my-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <p className="mb-3">
          Bei Krazius Solutions kombinieren wir moderne, hochperformante{" "}
          <span className="font-medium">Next.js Webentwicklung</span> mit
          effektiver{" "}
          <span className="font-medium">Suchmaschinenoptimierung (SEO)</span>{" "}
          und intelligenten{" "}
          <span className="font-medium">RAG KI-Chatbot-Lösungen</span>. Unser
          Ziel ist es, Ihrem Betrieb einen erstklassigen Online-Auftritt zu
          verschaffen, der aktiv Neukunden gewinnt und Ihre internen Prozesse
          spürbar entlastet.
        </p>

        <p>
          Ob Sie eine komplett neue Website benötigen, Ihren bestehenden
          Webauftritt grundlegend überarbeiten wollen oder durch automatisierte
          KI-Assistenten Zeit einsparen möchten — wir bieten Ihnen
          maßgeschneiderte, transparente Lösungen zum monatlichen Festpreis
          (Website-Miete) oder als klassisches Projektgeschäft.
        </p>
      </motion.section>

      <div className="flex flex-wrap gap-x-2 gap-y-8 justify-center xl:mx-2 mb-12">
        {servicesData.map((service, index) => (
          <React.Fragment key={index}>
            <ServiceCard {...service} />
          </React.Fragment>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center"
      >
        <Link
          href="/pricing"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition border border-white/10"
        >
          Unsere Preismodelle entdecken
        </Link>
      </motion.div>
    </section>
  );
}
