"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import {
  FaRobot,
  FaDatabase,
  FaWhatsapp,
  FaChartLine,
  FaCheckCircle,
  FaUserClock,
} from "react-icons/fa";

export default function ChatbotsPage() {
  const features = [
    {
      icon: <FaDatabase className="text-blue-500 text-3xl" />,
      title: "RAG-Technologie (Echtes Wissen)",
      desc: "Unsere Chatbots basieren auf RAG (Retrieval-Augmented Generation). Wir füttern das Modell mit Ihren echten Unternehmensdaten (FAQs, Dienstleistungen, PDF-Dokumenten). So gibt der Chatbot 100% korrekte Antworten, maßgeschneidert auf Ihr Fachgebiet.",
    },
    {
      icon: <FaUserClock className="text-amber-500 text-3xl" />,
      title: "24/7 Kundensupport & Lead-Erfassung",
      desc: "Während Sie schlafen, berät Ihr Chatbot Ihre Website-Besucher. Er beantwortet wiederkehrende Fragen sofort und sammelt vollautomatisch qualifizierte Leads (Namen, E-Mail-Adressen, Telefonnummern) für Ihren Vertrieb ein.",
    },
    {
      icon: <FaWhatsapp className="text-emerald-500 text-3xl" />,
      title: "WhatsApp & Social Media Integration",
      desc: "Wir integrieren Ihren KI-Mitarbeiter nicht nur auf Ihrer Website, sondern verbinden ihn auf Wunsch auch mit WhatsApp Business, Facebook Messenger oder Ihrem CRM-System, um alle Anfragen zentral zu kanalisieren.",
    },
    {
      icon: <FaChartLine className="text-purple-500 text-3xl" />,
      title: "Kontinuierliches Finetuning",
      desc: "Eine KI ist nur so gut wie ihr Training. Unser Premium-Abo beinhaltet monatliche Leistungskontrollen und kontinuierliche Aktualisierungen der Wissensdatenbank, damit der Chatbot stetig intelligenter wird.",
    },
    {
      icon: <FaRobot className="text-cyan-500 text-3xl" />,
      title: "Modernste LLMs (GPT-4 / Claude)",
      desc: "Unter der Haube arbeiten modernste KI-Modelle von OpenAI (GPT-4) und Anthropic (Claude AI). Gepaart mit präzisem Prompt Engineering klingt die Kommunikation absolut menschlich, professionell und sympathisch.",
    },
    {
      icon: <FaCheckCircle className="text-rose-500 text-3xl" />,
      title: "Einfaches Setup & Pflege",
      desc: "Sie müssen nichts programmieren oder einrichten. Wir übernehmen das gesamte Setup von der Datenaufbereitung und dem Prompt-Engineering über das Vektordatenbank-Design bis hin zur fertigen Website-Integration.",
    },
  ];

  return (
    <main className="flex flex-col items-center px-4 pt-32 pb-20 bg-gray-950 min-h-screen">
      <div className="w-full max-w-[72rem] flex flex-col items-center">
        {/* Header Sektion */}
        <div className="text-center mb-16 max-w-2xl">
          <SectionHeading>KI-Chatbots für Ihr Unternehmen</SectionHeading>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Automatisieren Sie Ihre Kundenbetreuung rund um die Uhr mit
            intelligenten Chatbots auf Basis von RAG-Technologie und echtem
            Unternehmenswissen.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-20">
          {features.map((feat, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="mb-2 bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center border border-white/5">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{feat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Funktionsweise Sektion */}
        <div className="w-full bg-gradient-to-b from-transparent via-white/[0.02] to-transparent border-y border-white/5 py-16 px-6 sm:px-10 mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Wie funktioniert ein RAG-Chatbot?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                num: "1",
                title: "Daten-Fütterung",
                desc: "Sie liefern uns Ihre Dokumente, Leistungsbeschreibungen oder FAQs. Wir bereiten diese Daten sicher und strukturiert für die KI auf.",
              },
              {
                num: "2",
                title: "Vektordatenbank & Training",
                desc: "Ihr Firmenwissen wird in einer sicheren Vektordatenbank gespeichert. Bei jeder Kundenfrage filtert das System exakt die relevanten Abschnitte heraus.",
              },
              {
                num: "3",
                title: "Präzise KI-Antwort",
                desc: "Das LLM (z.B. GPT-4) formuliert mithilfe der gefundenen Fakten in Echtzeit eine präzise, professionelle und absolut fehlerfreie Antwort.",
              },
            ].map((p, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-extrabold text-xl">
                  {p.num}
                </div>
                <h4 className="font-bold text-white text-lg mt-2">{p.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            Möchten Sie einen Chatbot in Aktion sehen?
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
            Wir erstellen für Sie eine kostenlose Demo-Version, trainiert mit
            Ihren ersten Unternehmensdaten, damit Sie den enormen Mehrwert
            selbst erleben können.
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
            Kostenlose Chatbot-Demo anfragen
          </button>
        </div>
      </div>
    </main>
  );
}
