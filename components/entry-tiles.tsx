"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { FaCheck, FaCrown } from "react-icons/fa";

export default function EntryTiles() {
  const tiles = [
    {
      title: "Website-Miete",
      badge: "Beliebter Einstieg",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      price: "ab 149 €",
      period: "/ Monat",
      description: "Keine hohen Setup-Kosten. Voller Service inkl. Hosting, DSGVO-Konformität und laufenden Updates.",
      features: [
        "0 € Setup-Kosten",
        "Modernes responsive Design",
        "Premium Hosting & SSL-Zertifikat",
        "Basis SEO & Google-Anmeldung",
        "1 Stunde Textpflege monatlich"
      ],
      ctaText: "Abo-Details ansehen",
      ctaHref: "/pricing",
      isPopular: false,
    },
    {
      title: "Premium KI-Success",
      badge: "Bester ROI",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      price: "ab 399 €",
      period: "/ Monat",
      description: "Das ultimative Wachstumsmodell. Professionelle Next.js Website gebündelt mit RAG KI-Chatbot zur automatischen Kundengewinnung.",
      features: [
        "Inkl. vollständiger Website",
        "Lokale SEO-Optimierung (Maps)",
        "24/7 KI-Support-Chatbot",
        "Automatisierte Lead-Erfassung",
        "Laufendes Chatbot-Finetuning"
      ],
      ctaText: "KI-Duo entdecken",
      ctaHref: "/pricing",
      isPopular: true,
    },
    {
      title: "Einmaliger Kauf",
      badge: "Maximale Unabhängigkeit",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      price: "ab 1.990 €",
      period: "einmalig",
      description: "Volles Eigentum an der Website ab Tag 1. Ideal für Unternehmen mit vorhandenem Budget und eigenem Server.",
      features: [
        "Einmalige Investition",
        "Volle Eigentumsrechte am Code",
        "Professionelles SEO-Setup",
        "Optimiert für Google PageSpeed",
        "Optionale Wartung ab 49€/Monat"
      ],
      ctaText: "Projekt anfragen",
      ctaHref: "#contact",
      isPopular: false,
    }
  ];

  return (
    <section className="scroll-mt-28 py-16 w-full max-w-[72rem] px-4 mx-auto">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl font-semibold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Wählen Sie Ihren Weg zum digitalen Erfolg
        </motion.h2>
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Egal ob flexibler monatlicher Rundum-Service oder klassische Einmalinvestition — wir haben das passende Modell für Ihre Wachstumsziele.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {tiles.map((tile, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 ${
              tile.isPopular 
                ? "bg-white/[0.07] border-amber-500/40 shadow-[0_0_30px_rgba(245,158,11,0.15)] md:scale-105 z-10" 
                : "bg-white/[0.03] border-white/10 hover:border-white/20"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            {tile.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-gray-950 font-semibold px-4 py-1 rounded-full text-xs flex items-center gap-1.5 shadow-lg">
                <FaCrown size={12} />
                EMPFEHLUNG
              </div>
            )}

            <div>
              {/* Card Header */}
              <div className="flex justify-between items-center mb-4">
                <span className={`text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border ${tile.badgeColor}`}>
                  {tile.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{tile.title}</h3>
              
              <div className="flex items-baseline mb-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-white">{tile.price}</span>
                <span className="text-gray-400 text-sm ml-1">{tile.period}</span>
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[4rem]">
                {tile.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
                {tile.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className={`mt-1 flex-shrink-0 ${tile.isPopular ? "text-amber-500" : "text-blue-500"}`}>
                      <FaCheck size={12} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div>
              {tile.ctaHref.startsWith("#") ? (
                <button
                  onClick={() => {
                    const target = document.getElementById(tile.ctaHref.substring(1));
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 text-center ${
                    tile.isPopular
                      ? "bg-amber-500 hover:bg-amber-600 text-gray-950 font-semibold"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                  }`}
                >
                  {tile.ctaText}
                </button>
              ) : (
                <Link
                  href={tile.ctaHref}
                  className={`block w-full py-3 rounded-xl font-medium transition-all duration-300 text-center ${
                    tile.isPopular
                      ? "bg-amber-500 hover:bg-amber-600 text-gray-950 font-semibold"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                  }`}
                >
                  {tile.ctaText}
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
