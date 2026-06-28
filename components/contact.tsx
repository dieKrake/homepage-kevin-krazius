"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "motion/react";
import { sendEmail } from "@/actions/sendEmail";
import ContactSubmitButton from "./contact-submit-button";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const pathname = usePathname();
  const isLegalPage = ["/agb", "/datenschutz", "/impressum"].includes(pathname);

  if (isLegalPage) {
    return null;
  }

  const contactInfo = [
    {
      icon: <FaPhone className="text-blue-500" />,
      label: "Telefon",
      value: "+49 162 405 9165",
      href: "tel:+491624059165",
    },
    {
      icon: <FaWhatsapp className="text-emerald-500" />,
      label: "WhatsApp",
      value: "Chat starten",
      href: "https://wa.me/1624059165",
    },
    {
      icon: <FaEnvelope className="text-amber-500" />,
      label: "E-Mail",
      value: "kevin@krazius-solutions.com",
      href: "mailto:kevin@krazius-solutions.com",
    },
    {
      icon: <FaClock className="text-purple-500" />,
      label: "Öffnungszeiten",
      value: "Mo - Fr, 09:00 - 18:00 Uhr",
    },
    {
      icon: <FaMapMarkerAlt className="text-rose-500" />,
      label: "Adresse",
      value: "Hauptstraße 60, 73489 Jagstzell",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="mt-24 mb-20 sm:mb-28 w-full max-w-[72rem] px-4 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-12">
        <SectionHeading>Kontakt</SectionHeading>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Bereit für Ihren nächsten digitalen Schritt? Kontaktieren Sie uns für
          ein unverbindliches Erstgespräch oder senden Sie uns direkt Ihre
          Anfrage.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Links: Kontakt-Informationen */}
        <div className="flex flex-col gap-6">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col gap-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Direkter Kontakt
            </h3>

            <div className="flex flex-col gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-blue-400 transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rechts: Kontaktformular */}
        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
          <h3 className="text-2xl font-bold text-white mb-8">
            Schreiben Sie uns
          </h3>

          <form
            className="flex flex-col gap-4"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Nachricht erfolgreich gesendet!");
            }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold ml-1">
                E-Mail Adresse
              </label>
              <input
                className="h-14 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:bg-white/10 focus:border-white/20 transition-all outline-none"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="ihre@email.de"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold ml-1">
                Ihre Nachricht
              </label>
              <textarea
                className="h-52 p-4 rounded-xl border border-white/10 bg-white/5 text-white focus:bg-white/10 focus:border-white/20 transition-all outline-none resize-none"
                name="message"
                placeholder="Wie können wir Ihnen helfen?"
                required
                maxLength={5000}
              />
            </div>

            <div className="mt-4">
              <ContactSubmitButton />
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
