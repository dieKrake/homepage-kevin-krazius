import React from "react";
import SectionHeading from "@/components/section-heading";

export default function ChatbotsPage() {
  return (
    <main className="flex flex-col items-center px-4 pt-36">
      <SectionHeading>Chatbots</SectionHeading>
      <section className="max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
        <p className="mb-3 text-gray-300">
          Intelligente Chatbots auf Basis von RAG-Technologie. Automatisieren Sie Ihren Kundensupport 
          und bieten Sie Ihren Kunden rund um die Uhr Unterstützung.
        </p>
        <div className="mt-10 p-8 border border-white/10 rounded-xl bg-white/5">
          <p className="text-gray-400 italic">Hier entstehen in Kürze detaillierte Informationen zu unseren KI-Chatbot-Lösungen.</p>
        </div>
      </section>
    </main>
  );
}
