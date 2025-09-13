"use client";

import { motion } from "framer-motion";

export default function Impressum() {
  return (
    <main className="flex flex-col items-center justify-center px-4 sm:px-0 mt-20 mb-20 max-w-4xl mx-auto">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Impressum
      </motion.h1>

      <motion.section
        className="text-lg leading-8 space-y-6 text-justify"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="impressum"
      >
        <p>
          <strong>Angaben gemäß § 5 TMG:</strong>
          <br /> Firma: Krazius Solutions
          <br /> Adresse: Hauptstraße 60, 73489 Jagstzell
          <br /> Geschäftsführer: Kevin Krazius
        </p>

        <p>
          <strong>Kontakt:</strong>
          <br /> Telefon: +49 162 405 9165
          <br /> E-Mail: kevin@krazius-solutions.com
        </p>

        <p>
          <strong>
            Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
          </strong>
          <br /> DE453628349
        </p>

        <p>
          <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
          <br /> Kevin Krazius
          <br /> Adresse: Hauptstraße 60, 73489 Jagstzell
        </p>

        <p>
          <strong>Streitschlichtung:</strong> Die Europäische Kommission stellt
          eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            className="underline text-blue-600"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <p>
          <strong>Haftung für Inhalte:</strong> Als Diensteanbieter sind wir
          gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
          allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>

        <p>
          <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu
          externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
          haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
          übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
          jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
      </motion.section>
    </main>
  );
}
