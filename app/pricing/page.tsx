"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/section-heading";
import { FaCheck, FaTimes, FaCrown } from "react-icons/fa";

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const abos = [
    {
      title: "Smart Start",
      subtitle: "Die solide Basis",
      price: "149 €",
      period: "/ Monat",
      description:
        "Perfekt für Kleinstunternehmer und Gründer, die schnell einen professionellen und rechtssicheren Webauftritt benötigen.",
      features: [
        "1-Page Landing Page",
        "100% Mobile Responsive",
        "Premium Hosting & SSL-Schutz",
        "DSGVO-konformes Cookie-Banner",
        "Impressum & AGB Integration",
        "Basis-SEO (Google-Anmeldung)",
        "1 Stunde Textpflege / Monat",
      ],
      cta: "Jetzt anfragen",
      isPopular: false,
    },
    {
      title: "Business Growth",
      subtitle: "Die Neukunden-Maschine",
      price: "249 €",
      period: "/ Monat",
      description:
        "Unsere Komplettlösung für wachsende Unternehmen, die das Maximum aus ihrer Google-Sichtbarkeit herausholen möchten.",
      features: [
        "Multi-Page Website (bis 5 Seiten)",
        "100% Mobile Responsive",
        "Premium Hosting & SSL-Schutz",
        "DSGVO-konformes Cookie-Banner",
        "Lokale SEO-Optimierung (Maps)",
        "Google Business Profil Anbindung",
        "Monatlicher Performance-Report",
        "Missed-Call Automation",
        "2 Stunden Support / Monat",
      ],
      cta: "Beliebtestes Paket anfragen",
      isPopular: true,
    },
    {
      title: "Premium Scale",
      subtitle: "Maximale Performance",
      price: "349 €",
      period: "/ Monat",
      description:
        "Die Rundum-Sorglos-Lösung für etablierte Unternehmen mit hohem Anspruch an Design, Content und Support.",
      features: [
        "Individuelles Design & Strategie",
        "Unbegrenzte Seitenanzahl",
        "Premium Hosting & High-Speed SSL",
        "Erweitertes SEO & Content-Plan",
        "Wöchentliche Backups & Monitoring",
        "DSGVO-Full-Service & Rechtsschutz",
        "Priorisierter Support (5 Std.)",
        "Persönlicher Ansprechpartner",
      ],
      cta: "Premium-Lösung anfragen",
      isPopular: false,
    },
  ];

  const addons = [
    {
      title: "RAG KI-Chatbot",
      price: "ab 99 €",
      period: "/ Monat",
      description:
        "Intelligenter 24/7 Support-Assistent, geschult auf Ihren Firmendaten. Inklusive Lead-Erfassung und WhatsApp-Anbindung.",
      setup: "+ 990 € einmaliges Setup",
    },
    {
      title: "Local SEO Pro",
      price: "99 €",
      period: "/ Monat",
      description:
        "Aktive monatliche Optimierung Ihrer lokalen Sichtbarkeit, Google Maps Pflege und Linkaufbau.",
      setup: "Keine Setup-Gebühr",
    },
    {
      title: "Content & Blog",
      price: "ab 199 €",
      period: "/ Monat",
      description:
        "Professionelle monatliche Blogartikel oder News-Beiträge zur Steigerung der organischen Reichweite.",
      setup: "Individuell",
    },
  ];

  const faqs = [
    {
      q: "Wie lange ist die Mindestvertragslaufzeit bei den Web-Abos?",
      a: "Unsere monatlichen Web-Abos (Website-as-a-Service) haben eine Mindestlaufzeit von 24 Monaten. Danach verlängert sich der Vertrag automatisch um jeweils 12 Monate und ist mit einer Frist von 3 Monaten kündbar.",
    },
    {
      q: "Warum ist das Abo-Modell für mich besser als ein Einmalkauf?",
      a: "Das Abo-Modell minimiert Ihr finanzielles Risiko, da keine hohen Initialkosten anfallen. Zudem übernehmen wir das Hosting, die Updates, Backups, die DSGVO-Sicherheit und monatliche Inhaltsänderungen. Ihre Website bleibt dadurch über Jahre hinweg modern und technisch auf dem neuesten Stand.",
    },
    {
      q: "Gehört die Website nach Ablauf der Laufzeit mir?",
      a: "Während der Abolaufzeit mieten Sie die Website inklusive unseres Full-Service-Betreuungspakets. Nach Ablauf der 24-monatigen Mindestlaufzeit können Sie die Website auf Wunsch gegen eine einmalige Ablösegebühr in Ihr Eigentum übernehmen und auf ein eigenes Hosting umziehen.",
    },
    {
      q: "Was ist ein RAG KI-Chatbot und wie hilft er mir?",
      a: "RAG (Retrieval-Augmented Generation) bedeutet, dass wir den KI-Chatbot gezielt mit Ihren Unternehmensdaten (Leistungen, FAQs, Dokumente) füttern. Er antwortet dadurch absolut präzise und halluziniert nicht. Auf der Website agiert er als 24/7-Mitarbeiter, der Kunden berät, Fragen beantwortet und Kontaktdaten (Leads) für Sie einsammelt.",
    },
    {
      q: "Was ist die 'Missed-Call Automation'?",
      a: "Diese Automation sorgt dafür, dass Ihnen kein potenzieller Kunde verloren geht. Wenn Sie einen Anruf verpassen, sendet das System dem Anrufer automatisch eine freundliche SMS oder WhatsApp-Nachricht und bietet die Möglichkeit, direkt einen Termin zu vereinbaren oder eine Nachricht zu hinterlassen. Die Daten werden sofort als Lead für Sie gespeichert.",
    },
    {
      q: "Bieten Sie auch klassische Einmalzahlungen an?",
      a: "Ja, absolut. Wenn Sie Ihre Website direkt kaufen möchten, bieten wir individuelle Next.js-Projekte ab einmalig 1.990 € an. Auf Wunsch können Sie danach einen kleinen Wartungsvertrag für Updates und Hosting ab 49 €/Monat dazubuchen.",
    },
  ];

  return (
    <main className="flex flex-col items-center px-4 pt-32 pb-20 bg-gray-950 min-h-screen">
      <div className="w-full max-w-[72rem] flex flex-col items-center">
        {/* Header Sektion */}
        <div className="text-center mb-16 max-w-2xl">
          <SectionHeading>Transparente Preismodelle</SectionHeading>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Sichern Sie sich einen professionellen Online-Auftritt zum
            monatlichen Festpreis inklusive Full-Service oder investieren Sie
            einmalig in volle Unabhängigkeit.
          </p>
        </div>

        {/* Website Miete (Abos) Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch w-full mb-20">
          {abos.map((abo, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 ${
                abo.isPopular
                  ? "bg-white/[0.07] border-amber-500/40 shadow-[0_0_30px_rgba(245,158,11,0.15)] md:scale-105 z-10"
                  : "bg-white/[0.03] border-white/10 hover:border-white/20"
              }`}
            >
              {abo.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-gray-950 font-semibold px-4 py-1 rounded-full text-xs flex items-center gap-1.5 shadow-lg">
                  <FaCrown size={12} />
                  BESTSELLER
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {abo.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium mb-6 uppercase tracking-wider">
                  {abo.subtitle}
                </p>

                <div className="flex items-baseline mb-6">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    {abo.price}
                  </span>
                  <span className="text-gray-400 text-sm ml-1.5 font-medium">
                    {abo.period}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-8 leading-relaxed min-h-[4.5rem]">
                  {abo.description}
                </p>

                <ul className="space-y-3.5 mb-8 border-t border-white/5 pt-6">
                  {abo.features.map((feat, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span
                        className={`mt-1 flex-shrink-0 ${abo.isPopular ? "text-amber-500" : "text-blue-500"}`}
                      >
                        <FaCheck size={12} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`w-full py-3.5 rounded-xl font-medium transition-all duration-300 text-center ${
                  abo.isPopular
                    ? "bg-amber-500 hover:bg-amber-600 text-gray-950 font-semibold shadow-lg shadow-amber-500/10"
                    : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                }`}
              >
                {abo.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Zusatzoptionen Section */}
        <div className="w-full mb-24">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Optionale Zusatzleistungen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
              >
                <h4 className="text-lg font-bold text-white mb-2">
                  {addon.title}
                </h4>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-xl font-bold text-white">
                    {addon.price}
                  </span>
                  <span className="text-gray-500 text-xs">{addon.period}</span>
                </div>
                <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                  {addon.description}
                </p>
                <div className="text-[10px] font-medium text-blue-400 uppercase tracking-wider bg-blue-500/5 px-2 py-1 rounded border border-blue-500/10 inline-block">
                  {addon.setup}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Einmalkauf Box */}
        <div className="w-full bg-gradient-to-r from-gray-900/50 to-gray-900 border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row justify-between items-center gap-8 mb-24">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Klassischer Kauf
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-3">
              Individuelles Website-Projekt
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Sie bevorzugen eine einmalige Investition für maximale
              Unabhängigkeit? Wir erstellen Ihre maßgeschneiderte
              Next.js-Website schlüsselfertig ab einmalig{" "}
              <span className="text-white font-semibold">1.990 €</span>.
              Profitieren Sie von uneingeschränktem Eigentum am Code und
              exzellentem initialen SEO-Setup. Optionaler Wartungsvertrag
              (Hosting, SSL, Backups & Support) ab 49 €/Monat buchbar.
            </p>
          </div>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="flex-shrink-0 bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/10"
          >
            Projekt anfragen
          </button>
        </div>

        {/* FAQ Sektion */}
        <div className="w-full max-w-4xl border-t border-white/5 pt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Häufig gestellte Fragen (FAQ)
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/5 rounded-xl bg-white/[0.01] overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-5 text-left font-medium text-white flex justify-between items-center hover:bg-white/[0.02] transition"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                >
                  <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                  <span className="text-xl text-gray-500 select-none">
                    {activeFaq === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeFaq === index
                      ? "max-h-[300px] border-t border-white/5"
                      : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-gray-400 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
