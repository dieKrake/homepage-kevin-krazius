import React from "react";
import SectionHeading from "@/components/section-heading";

export default function PricingPage() {
  return (
    <main className="flex flex-col items-center px-4 pt-36">
      <SectionHeading>Pricing</SectionHeading>
      <section className="max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
        <p className="mb-3 text-gray-300">
          Transparente Preise für individuelle Lösungen. Wir bieten verschiedene Pakete an, 
          die auf die Bedürfnisse Ihres Unternehmens zugeschnitten sind.
        </p>
        <div className="mt-10 p-8 border border-white/10 rounded-xl bg-white/5">
          <p className="text-gray-400 italic">Hier entstehen in Kürze unsere Preismodelle und Service-Pakete.</p>
        </div>
      </section>
    </main>
  );
}
