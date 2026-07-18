import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import "./ImpressumPage.css";

export default function ImpressumPage() {
  return (
    <>
      <Nav />
      <section style={{ background: "var(--white)", minHeight: "100vh" }}>
        <div className="impressum-wrap">
          <p className="section-eyebrow">Rechtliches</p>
          <h1>Impressum – Sonate KulturForum e.V.</h1>
          <p className="impressum-subtitle">Angaben gemäß § 5 TMG, § 18 Abs. 2 MStV</p>
          <div className="divider" />

          <h2>Herausgeber</h2>
          <p>
            Sonate KulturForum e.V.
            <br />
            Am Rosengarten 90E
            <br />
            06132 Halle (Saale)
          </p>

          <h2>Vertreten durch</h2>
          <p>Olena Kunze (Vorsitzende)</p>

          <h2>Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:info@musikschule-sonate.de">info@musikschule-sonate.de</a>
          </p>

          <h2>Registereintrag</h2>
          <p>
            Eintragung im Vereinsregister
            <br />
            Registergericht: Amtsgericht Stendal
            <br />
            Registernummer: VR 7392
          </p>

          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Olena Kunze
            <br />
            Am Rosengarten 90E, 06132 Halle (Saale)
          </p>

          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
            . Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
            Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
            möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
            umgehend entfernen.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
            Seiten verantwortlich. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne
            konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
            des jeweiligen Autors bzw. Erstellers.
          </p>

          <p style={{ marginTop: "3rem" }}>
            <a href="/">← Zurück zur Startseite</a>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
