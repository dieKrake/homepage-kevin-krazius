"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./section-heading";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      name: "Michael Müller",
      role: "Inhaber, Müller Elektrotechnik",
      review: "Durch die Website-Miete von Krazius Solutions hatten wir keinerlei hohe Einstiegskosten und sind direkt professionell online gegangen. Schon nach drei Monaten haben wir über Google spürbar mehr qualifizierte Anfragen erhalten. Der Rundum-Service spart uns jede Woche kostbare Zeit!",
      stars: 5,
    },
    {
      name: "Dr. med. dent. Sabina Schmidt",
      role: "Zahnärztin, Praxis Dr. Schmidt",
      review: "Der integrierte RAG KI-Chatbot ist ein absoluter Segen für unser Team. Er beantwortet über 80% der wiederkehrenden Fragen zu Leistungen, Abläufen und Notdiensten vollautomatisch — selbst am Wochenende — und sammelt zuverlässig Kontaktdaten ein. Ein echter Gamechanger!",
      stars: 5,
    },
    {
      name: "Christian Weber",
      role: "Geschäftsführer, Weber & Partner Immobilien",
      review: "Unsere veraltete WordPress-Seite wurde durch eine pfeilschnelle Next.js-Website ersetzt. Die Ladezeit ist phänomenal und unsere Google-Rankings in der Region haben sich drastisch verbessert. Die laufende SEO-Pflege im Monatsabo funktioniert absolut reibungslos.",
      stars: 5,
    },
  ];

  return (
    <section className="scroll-mt-28 mb-28 w-full max-w-[72rem] px-4 flex flex-col items-center">
      <SectionHeading>Was unsere Kunden sagen</SectionHeading>
      
      <motion.p 
        className="text-gray-400 text-center max-w-2xl mb-16 -mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Erfahren Sie, wie wir anderen Unternehmen dabei geholfen haben, ihre Sichtbarkeit zu maximieren, Prozesse zu automatisieren und kontinuierlich neue Kunden zu gewinnen.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {reviews.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-between p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-white/5 pointer-events-none">
              <FaQuoteLeft size={48} />
            </div>

            <div>
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-amber-500">
                {[...Array(item.stars)].map((_, sIndex) => (
                  <FaStar key={sIndex} size={16} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-sm leading-relaxed italic mb-8 relative z-10">
                "{item.review}"
              </p>
            </div>

            {/* Author */}
            <div className="border-t border-white/5 pt-4">
              <h4 className="font-semibold text-white text-base">{item.name}</h4>
              <p className="text-gray-500 text-xs mt-0.5">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
