"use client";

import { motion } from "framer-motion";

export default function AGB() {
  return (
    <main className="flex flex-col items-center justify-center px-4 sm:px-2 mt-20 mb-20 max-w-4xl mx-auto">
      <motion.h1
        className="text-3xl sm:text-4xl	 font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        Allgemeine Geschäftsbedingungen (AGB)
      </motion.h1>

      <motion.section
        className="text-lg leading-8 space-y-6 text-justify"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <p>
          <strong>1. Geltungsbereich:</strong> Diese Allgemeinen
          Geschäftsbedingungen (AGB) gelten für alle Dienstleistungsverträge
          zwischen Krazius Solutions und unseren Kunden. Sie regeln die
          Erbringung von Webentwicklungs-, Design- und IT-Beratungsleistungen.
        </p>

        <p>
          <strong>2. Vertragspartner:</strong> Der Dienstleistungsvertrag kommt
          zustande mit:
          <br /> Firma: Krazius Solutions
          <br /> Adresse: Hauptstraße 60, 73489 Jagstzell
          <br /> Geschäftsführer: Kevin Krazius
          <br /> E-Mail: kevin@krazius-solutions.com
          <br /> Telefon: +49 162 405 9165
          <br /> USt-IdNr.: DE453628349
        </p>

        <p>
          <strong>3. Vertragsabschluss:</strong> Der Vertrag kommt durch
          schriftliche Auftragsbestätigung oder Beginn der Leistungserbringung
          zustande. Angebote sind freibleibend und unverbindlich, sofern nicht
          ausdrücklich als verbindlich bezeichnet.
        </p>

        <p>
          <strong>4. Leistungsumfang:</strong> Der Umfang der zu erbringenden
          Leistungen ergibt sich aus der jeweiligen Projektbeschreibung oder dem
          Angebot. Änderungswünsche des Kunden können zu Mehrkosten führen und
          bedürfen der schriftlichen Vereinbarung.
        </p>

        <p>
          <strong>5. Mitwirkungspflichten:</strong> Der Kunde ist verpflichtet,
          alle für die Leistungserbringung erforderlichen Informationen,
          Materialien und Zugänge rechtzeitig zur Verfügung zu stellen.
          Verzögerungen aufgrund fehlender Mitwirkung gehen zu Lasten des
          Kunden.
        </p>

        <p>
          <strong>6. Preise und Zahlungsbedingungen:</strong> Alle Preise
          verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Die Zahlung
          erfolgt nach Rechnungsstellung binnen 14 Tagen ohne Abzug. Bei
          Projekten über 5.000€ können Teilzahlungen vereinbart werden.
        </p>

        <p>
          <strong>7. Urheberrechte und Nutzungsrechte:</strong> Die von uns
          erstellten Werke unterliegen dem Urheberrecht. Mit vollständiger
          Bezahlung erhält der Kunde die erforderlichen Nutzungsrechte für den
          vereinbarten Zweck. Quelltexte und Entwicklungsunterlagen bleiben
          unser Eigentum.
        </p>

        <p>
          <strong>8. Gewährleistung:</strong> Wir gewährleisten die
          vertragsgemäße Erbringung unserer Leistungen. Mängel sind unverzüglich
          schriftlich anzuzeigen. Die Gewährleistungsfrist beträgt 12 Monate ab
          Abnahme der Leistung.
        </p>

        <p>
          <strong>9. Haftung:</strong> Unsere Haftung ist auf Vorsatz und grobe
          Fahrlässigkeit beschränkt. Bei leichter Fahrlässigkeit haften wir nur
          bei Verletzung wesentlicher Vertragspflichten und begrenzt auf den
          vorhersehbaren Schaden. Die Haftung für Datenverlust ist auf den
          typischen Wiederherstellungsaufwand beschränkt.
        </p>

        <p>
          <strong>10. Vertraulichkeit:</strong> Beide Parteien verpflichten
          sich, vertrauliche Informationen der anderen Partei geheim zu halten
          und nur für den Vertragszweck zu verwenden.
        </p>

        <p>
          <strong>11. Schlussbestimmungen:</strong> Es gilt das Recht der
          Bundesrepublik Deutschland. Ausschließlicher Gerichtsstand für alle
          Streitigkeiten ist Ellwangen, sofern der Kunde Vollkaufmann ist.
          Sollten einzelne Bestimmungen unwirksam sein, bleibt der übrige
          Vertrag davon unberührt.
        </p>
      </motion.section>
    </main>
  );
}
