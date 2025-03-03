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
          Geschäftsbedingungen (AGB) gelten für alle Bestellungen, die über
          unsere Website getätigt werden. Sie regeln das Verhältnis zwischen dem
          Betreiber dieser Website und den Kunden, die über unsere Plattform
          Waren oder Dienstleistungen beziehen.
        </p>

        <p>
          <strong>2. Vertragspartner:</strong> Der Kaufvertrag kommt zustande
          mit:
          <br /> Firma: [Dein Firmenname]
          <br /> Adresse: [Straße, Hausnummer, Postleitzahl, Ort]
          <br /> Geschäftsführer: [Name des Geschäftsführers]
          <br /> E-Mail: [E-Mail-Adresse]
          <br /> Telefon: [Telefonnummer]
        </p>

        <p>
          <strong>3. Vertragsabschluss:</strong> Der Vertrag kommt durch das
          Klicken auf den Button "Kaufen" und die anschließende Bestätigung der
          Bestellung durch uns zustande. Die Bestellbestätigung stellt keine
          Annahme des Angebots dar, sondern informiert nur darüber, dass die
          Bestellung eingegangen ist.
        </p>

        <p>
          <strong>4. Widerrufsrecht:</strong> Sie haben das Recht, binnen 14
          Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die
          Widerrufsfrist beträgt 14 Tage ab dem Tag, an dem Sie die Ware
          erhalten haben. Um Ihr Widerrufsrecht auszuüben, müssen Sie uns
          mittels einer eindeutigen Erklärung (z. B. per Post oder E-Mail) über
          Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
        </p>

        <p>
          <strong>5. Preise und Versandkosten:</strong> Alle Preise verstehen
          sich einschließlich der gesetzlichen Mehrwertsteuer. Zusätzlich zu den
          angegebenen Preisen berechnen wir Versandkosten. Die genauen
          Versandkosten werden Ihnen im Bestellprozess angezeigt.
        </p>

        <p>
          <strong>6. Zahlungsbedingungen:</strong> Die Zahlung erfolgt per
          Vorkasse, Kreditkarte oder PayPal. Die Ware wird nach Zahlungseingang
          versendet.
        </p>

        <p>
          <strong>7. Gewährleistung und Haftung:</strong> Es gelten die
          gesetzlichen Gewährleistungsrechte. Wir haften nicht für Schäden, die
          durch unsachgemäßen Gebrauch der Ware verursacht wurden.
        </p>

        <p>
          <strong>8. Schlussbestimmungen:</strong> Es gilt das Recht der
          Bundesrepublik Deutschland. Ausschließlicher Gerichtsstand für alle
          Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist unser
          Geschäftssitz.
        </p>
      </motion.section>
    </main>
  );
}
