import Link from "next/link";

export default function Impressum() {
  return (
    <main className="flex flex-col items-center justify-center px-4 sm:px-0 mt-20 mb-20 max-w-4xl mx-auto">
      <Link href="/" className="underline mb-8 text-2xl text-center">
        Zur Startseite
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-center">Impressum</h1>

      <section className="text-lg leading-8 space-y-6 text-justify">
        <p>
          <strong>Angaben gemäß § 5 TMG:</strong>
          <br /> Firma: [Dein Firmenname]
          <br /> Adresse: [Straße, Hausnummer, Postleitzahl, Ort]
          <br /> Geschäftsführer: [Name des Geschäftsführers]
        </p>

        <p>
          <strong>Kontakt:</strong>
          <br /> Telefon: [Telefonnummer]
          <br /> E-Mail: [E-Mail-Adresse]
        </p>

        <p>
          <strong>
            Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
          </strong>
          <br /> [USt-IdNr.]
        </p>

        <p>
          <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
          <br /> [Name des Verantwortlichen]
          <br /> Adresse: [Adresse des Verantwortlichen]
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
      </section>
    </main>
  );
}
