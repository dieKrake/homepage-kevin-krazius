import React from "react";
import SectionHeading from "@/components/section-heading";

export default function WebsitesPage() {
  return (
    <main className="flex flex-col items-center px-4 pt-36">
      <SectionHeading>Websites</SectionHeading>
      <section className="max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
        <p className="mb-3 text-gray-300">
          Wir erstellen moderne, responsive und performante Websites, die Ihre Marke optimal präsentieren. 
          Von der Konzeption bis zum Launch unterstützen wir Sie bei jedem Schritt.
        </p>
        <div className="mt-10 p-8 border border-white/10 rounded-xl bg-white/5">
          <p className="text-gray-400 italic">Hier entstehen in Kürze detaillierte Informationen zu unseren Website-Lösungen.</p>
        </div>
      </section>
    </main>
  );
}
