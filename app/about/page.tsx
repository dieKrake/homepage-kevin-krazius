import React from "react";
import SectionHeading from "@/components/section-heading";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center px-4 pt-36 pb-20">
      <SectionHeading>Über uns</SectionHeading>
      
      <section className="sm:px-4 md:max-w-[65rem] sm:max-w-[60rem] text-center leading-8 scroll-mt-28">
        <div className="flex flex-col-reverse md:flex-row gap-16 items-center">
          <div className="text-left flex-1 md:max-w-[65%]">
            <h2 className="text-3xl font-medium mb-8 text-left text-white">Kevin Krazius</h2>
            <p className="text-gray-300 mb-4">
              Mein Name ist Kevin Krazius und ich bin KI-Spezialist aus
              Leidenschaft mit Fokus auf intelligente Chatbot-Lösungen. Meine
              <span className="font-medium text-white">
                {" "}
                Bachelorarbeit mit KI-Schwerpunkt
              </span>{" "}
              und praktische Erfahrung im{" "}
              <span className="font-medium text-white">
                LLM- und Prompt-Engineering
              </span>{" "}
              bilden das Fundament für maßgeschneiderte Automatisierungslösungen.
            </p>

            <p className="text-gray-300 mb-4">
              Mein KI-Tech-Stack:{" "}
              <span className="font-medium text-white">
                RAG-Technologie, OpenAI GPT, LangChain und Vector-Datenbanken
              </span>
              . Ich entwickle Chatbots, die nicht nur antworten, sondern Ihr
              Unternehmenswissen intelligent nutzen und kontinuierlich dazulernen.
            </p>

            <p className="text-gray-300 mb-4">
              <span className="italic">RAG-Technologie</span> (Retrieval-Augmented
              Generation) ermöglicht es Chatbots, auf Ihre spezifischen
              Unternehmensdaten zuzugreifen und präzise, kontextbezogene Antworten
              zu geben. So wird Ihr Chatbot zum intelligenten Berater, der Ihre
              Kunden mit Fachwissen unterstützt.
            </p>

            <p className="text-gray-300">
              Mein Fokus:{" "}
              <span className="font-medium text-white">
                Kleinunternehmen und Einzelunternehmer{" "}
              </span>
              verdienen professionelle KI-Lösungen. Ich entwickle erschwingliche,
              maßgeschneiderte Chatbots, die Ihre Kundenbetreuung automatisieren
              und Ihnen mehr Zeit für Ihr Kerngeschäft verschaffen – verständlich
              erklärt und transparent umgesetzt.
            </p>
          </div>
          <div className="relative mx-auto md:mx-0 md:w-[320px] md:h-[320px] sm:w-[300px] sm:h-[300px] w-[255px] h-[255px] md:ml-24 opacity-90">
            <img
              src="/website_pic.jpg"
              alt="Kevin Krazius"
              className="rounded-full object-cover h-full w-full shadow-xl border-4 border-gray-500 border-opacity-50 opacity-80"
              style={{ objectPosition: "center 5%" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
