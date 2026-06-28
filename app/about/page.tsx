"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "motion/react";
import { FaGraduationCap, FaCode, FaRobot, FaRocket } from "react-icons/fa";

export default function AboutPage() {
  const expertise = [
    {
      icon: <FaRocket className="text-blue-500" />,
      title: "Digitale Sichtbarkeit",
      description:
        "Ich sorge dafür, dass Ihr Unternehmen bei Google ganz oben steht. Durch gezieltes Local SEO heben wir Sie von der Konkurrenz ab und ziehen mehr Besucher an.",
    },
    {
      icon: <FaCode className="text-emerald-500" />,
      title: "Conversion-Websites",
      description:
        "Webseiten müssen mehr als nur gut aussehen. Ich entwickle verkaufsstarke Plattformen auf Next.js-Basis, die Besucher gezielt in Kunden verwandeln.",
    },
    {
      icon: <FaRobot className="text-amber-500" />,
      title: "KI-Kundengewinnung",
      description:
        "Automatisierte Lead-Erfassung durch intelligente RAG-Chatbots, die 24/7 Anfragen beantworten, Leads qualifizieren und Termine für Sie buchen.",
    },
    {
      icon: <FaGraduationCap className="text-purple-500" />,
      title: "Strategisches Wachstum",
      description:
        "Als KI-Spezialist entwickle ich für Sie Strategien, die technologische Innovation direkt in messbaren Umsatz und Zeitersparnis übersetzen.",
    },
  ];

  return (
    <main className="flex flex-col items-center px-4 pt-32 pb-20 bg-gray-950 min-h-screen overflow-x-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-20%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-[72rem]">
        {/* Intro Section */}
        <section className="mb-24 flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4 block">
              Über mich
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8 leading-tight">
              Kevin Krazius
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Ich verbinde{" "}
              <span className="text-white font-medium">
                moderne Webentwicklung
              </span>{" "}
              mit zukunftsweisender{" "}
              <span className="text-white font-medium">KI-Expertise</span>. Mein
              Ziel ist es, Unternehmen nicht nur eine digitale Präsenz zu
              verschaffen, sondern echte technologische Wettbewerbsvorteile zu
              generieren.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Vom ersten Entwurf einer hochperformanten Website über die
              gezielte Sichtbarkeit durch Local SEO bis hin zur Integration
              intelligenter{" "}
              <span className="text-white font-medium">RAG-Chatbots</span> — ich
              begleite Sie ganzheitlich bei der digitalen Transformation Ihres
              Geschäfts.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-3xl overflow-hidden border border-white/10 p-2 bg-white/5 backdrop-blur-sm">
              <img
                src="/images/kkrazius_bild.jpg"
                alt="Kevin Krazius - Experte für Webentwicklung und KI-Lösungen"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-all duration-500"
                style={{ objectPosition: "center 5%" }}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </section>

        {/* Expertise Grid */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <SectionHeading>Fokus & Resultate</SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-2xl mb-6 inline-block group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <motion.section
          className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-white/[0.02] text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Meine Mission</h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto italic">
            "Meine Mission ist es, Unternehmen durch die Symbiose aus
            erstklassiger Webpräsenz und modernster KI-Technologie zu maximaler
            Sichtbarkeit und nachhaltiger Kundengewinnung zu verhelfen. Ich
            mache komplexe Innovationen wie RAG-Chatbots für jeden nutzbar –
            damit Technologie nicht nur Zeit spart, sondern aktiv Ihr Wachstum
            antreibt."
          </p>
        </motion.section>
      </div>
    </main>
  );
}
