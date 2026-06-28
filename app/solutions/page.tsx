"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "@/components/section-heading";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaShieldAlt,
  FaRocket,
  FaGoogle,
  FaUserCheck,
} from "react-icons/fa";

export default function WebsitesPage() {
  const benefits = [
    {
      icon: <FaRocket className="text-blue-500 text-3xl" />,
      title: "Pfeilschnelle Next.js Ladezeiten",
      desc: "Unsere Websites basieren auf Next.js und React. Durch Server-Side-Rendering und optimierte Code-Auslieferung laden sie in Millisekunden. Ein echter Vorteil für Ihre Konversionsrate und Suchmaschinen-Platzierung.",
    },
    {
      icon: <FaGoogle className="text-amber-500 text-3xl" />,
      title: "Lokale SEO-Optimierung",
      desc: "Wir bauen SEO direkt in das Fundament Ihrer Website ein. Mit semantischem HTML, optimierten Meta-Daten, schnellen Ladezeiten und Verknüpfung zu Google My Business steigen Ihre Google-Rankings in Ihrer Region.",
    },
    {
      icon: <FaMobileAlt className="text-emerald-500 text-3xl" />,
      title: "Mobile First & Responsive Design",
      desc: "Weit über 60% aller lokalen Suchen werden auf Smartphones durchgeführt. Unsere Designs sind für alle Bildschirmgrößen — vom kleinen Smartphone bis zum großen 4K-Bildschirm — perfekt angepasst und leicht bedienbar.",
    },
    {
      icon: <FaShieldAlt className="text-purple-500 text-3xl" />,
      title: "100% DSGVO-Rechtssicherheit",
      desc: "Keine Abmahnungen riskieren. Wir integrieren DSGVO-konforme Cookie-Banner, verschlüsselte HTTPS-Verbindungen, sichere Kontaktformulare und rechtssichere Verlinkungen zu Impressum und AGB.",
    },
    {
      icon: <FaLaptopCode className="text-cyan-500 text-3xl" />,
      title: "Modernste Web-Technologien",
      desc: "Vergessen Sie langsame WordPress-Templates. Wir entwickeln maßgeschneiderten, sauberen Code mit React, Tailwind CSS und Framer Motion für flüssige Animationen und ein interaktives Premium-Erlebnis.",
    },
    {
      icon: <FaUserCheck className="text-rose-500 text-3xl" />,
      title: "All-Inclusive Wartung",
      desc: "Sie müssen sich um nichts kümmern. Unser Website-Abo beinhaltet schnelles Hosting, automatische Backups, regelmäßige Sicherheits-Updates und Text- oder Inhaltsänderungen auf Abruf.",
    },
  ];

  return (
    <main className="flex flex-col items-center px-4 pt-32 pb-20 bg-gray-950 min-h-screen">
      <div className="w-full max-w-[72rem] flex flex-col items-center">
        {/* Header Sektion */}
        <div className="text-center mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            Digitaler Maßanzug
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            High-End Websites für Ihr Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed"
          >
            Wir kombinieren Warp-Geschwindigkeit mit modernstem Design.
            Verwandeln Sie Ihren Online-Auftritt in ein echtes Marketing-Asset,
            das 24/7 für Sie arbeitet.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="mb-2 bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center border border-white/5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Prozess-Sektion */}
        <div className="w-full bg-gradient-to-b from-transparent via-white/[0.02] to-transparent border-y border-white/5 py-16 px-6 sm:px-10 mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            In 4 Schritten zu Ihrer neuen Website
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Kostenloses Erstgespräch",
                desc: "Wir analysieren Ihre Ziele, Zielgruppen und bestehenden Auftritte, um das perfekte Konzept zu definieren.",
              },
              {
                step: "02",
                title: "Konzeption & Design",
                desc: "Wir erstellen ein modernes, individuelles UI-Design, das exakt auf Ihre Corporate Identity abgestimmt ist.",
              },
              {
                step: "03",
                title: "Entwicklung & SEO",
                desc: "Ihre Seite wird mit Next.js handprogrammiert, für Suchmaschinen optimiert und auf Höchstgeschwindigkeit getrimmt.",
              },
              {
                step: "04",
                title: "Launch & Support",
                desc: "Wir schalten Ihre Website live und betreuen Sie im All-Inclusive Abo fortlaufend mit Updates und SEO-Optimierung.",
              },
            ].map((p, index) => (
              <div key={index} className="flex flex-col gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-blue-500/40">
                  {p.step}
                </span>
                <h4 className="font-bold text-white text-lg">{p.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            Bereit für Ihren professionellen Online-Auftritt?
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
            Lassen Sie uns in einem unverbindlichen, 15-minütigen Gespräch
            herausfinden, welches Paket am besten zu Ihrem Unternehmen passt.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/10"
          >
            Kostenloses Erstgespräch vereinbaren
          </button>
        </div>
      </div>
    </main>
  );
}
