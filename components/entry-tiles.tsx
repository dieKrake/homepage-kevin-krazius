"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  FaCheck,
  FaCrown,
  FaBolt,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

export default function EntryTiles() {
  const tiles = [
    {
      title: "KI-gestütztes Prototyping",
      badge: "Warp-Geschwindigkeit",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      icon: FaBolt,
      iconBgColor: "bg-blue-500/10",
      iconColor: "text-blue-400",
      description:
        "Durch modernste KI-gestützte Entwicklungsprozesse bringen wir Ihre Website in Rekordzeit online. Erste Prototypen sehen Sie oft schon nach Tagen statt Wochen.",
      features: [
        "Live-Prototypen in Rekordzeit",
        "Anpassungen in Echtzeit",
        "Kürzere Entwicklungszyklen",
        "Zukunftssichere Next.js-Technologie",
      ],
      ctaText: "Ablauf ansehen",
      ctaHref: "/pricing",
      isPopular: false,
    },
    {
      title: "Maximale Sichtbarkeit",
      badge: "Google Top-Rankings",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      icon: FaChartLine,
      iconBgColor: "bg-amber-500/10",
      iconColor: "text-amber-400",
      description:
        "Eine schöne Website nützt nichts, wenn sie nicht gefunden wird. Wir optimieren Ihren Auftritt von Grund auf für Google-Suchergebnisse und lokale Suchen.",
      features: [
        "Lokale SEO-Dominanz (Google Maps)",
        "Technische OnPage-Optimierung",
        "Optimiert für blitzschnelle Ladezeiten",
        "Google Business Profile Integration",
      ],
      ctaText: "Zu den Paketen",
      ctaHref: "/pricing",
      isPopular: false,
    },
    {
      title: "Rundum-Sorglos-Service",
      badge: "100% Sorgenfrei",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      icon: FaShieldAlt,
      iconBgColor: "bg-purple-500/10",
      iconColor: "text-purple-400",
      description:
        "Keine Wartungssorgen, kein Hosting-Stress. Wir übernehmen Updates, Backups, Sicherheit und Support, damit Sie sich voll auf Ihr Geschäft konzentrieren können.",
      features: [
        "Premium-Hosting & SSL inklusive",
        "Regelmäßige Sicherheits-Updates",
        "Automatische Backups & Monitoring",
        "Inkludierte monatliche Support-Stunden",
      ],
      ctaText: "Service entdecken",
      ctaHref: "/pricing",
      isPopular: false,
    },
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
          Ihre Erfolgsfaktoren für eine starke Website
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Wir bauen nicht nur schöne Seiten. Wir kombinieren modernste
          Technologie, zielgerichtete Sichtbarkeit und sorgenfreie Betreuung zu
          einem echten Wachstumsmotor für Ihr Business.
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
              <div className="flex justify-between items-center mb-6">
                <span
                  className={`text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border ${tile.badgeColor}`}
                >
                  {tile.badge}
                </span>
                <div
                  className={`p-2.5 rounded-xl ${tile.iconBgColor} text-lg flex items-center justify-center`}
                >
                  <tile.icon className={`${tile.iconColor}`} size={18} />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {tile.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[5rem]">
                {tile.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
                {tile.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <span
                      className={`mt-1 flex-shrink-0 ${tile.isPopular ? "text-amber-500" : "text-blue-500"}`}
                    >
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
                    const target = document.getElementById(
                      tile.ctaHref.substring(1),
                    );
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
