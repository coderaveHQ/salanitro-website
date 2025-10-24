import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-serif mb-8 text-center">
                Impressum
              </h1>
              <div className="w-16 h-1 bg-gold mx-auto mb-12"></div>
              <div className="space-y-8 text-foreground">
                <div>
                  <h2 className="text-2xl font-serif mb-4">Angaben gemäß § 5 TMG</h2>
                  <p className="text-muted-foreground">
                    <strong>Goldschmiede Salanitro</strong><br />
                    Stresemannstraße 6<br />
                    42719 Solingen<br />
                    Deutschland
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-serif mb-4">Kontakt</h2>
                  <p className="text-muted-foreground">
                    <strong>Telefon:</strong> +49 (0) 177-7821020<br />
                    <strong>E-Mail:</strong> goldschmiede@salanitro.de<br />
                    <strong>Web:</strong> https://salanitro.de
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-serif mb-4">Vertreten durch</h2>
                  <p className="text-muted-foreground">
                    <strong>Inhaber:</strong> Giuseppe Salanitro<br />
                    Goldschmied
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-serif mb-4">Handelsregister</h2>
                  <p className="text-muted-foreground">
                    <strong>USt-IdNr.:</strong> DE366747649
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-serif mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                  <p className="text-muted-foreground mb-4">
                    <strong>Berufsbezeichnung:</strong> Goldschmied<br />
                    <strong>Zuständige Kammer:</strong> Handwerkskammer Düsseldorf<br />
                    <strong>Verliehen in:</strong> Deutschland
                  </p>
                  <p className="text-muted-foreground">
                    Es gelten folgende berufsrechtliche Regelungen:<br />
                    Handwerksordnung (HwO)
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-serif mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                  <p className="text-muted-foreground">
                    Giuseppe Salanitro<br />
                    Stresemannstraße 6<br />
                    42719 Solingen
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-serif mb-4">Haftungsausschluss</h2>
                  <h3 className="text-xl font-semibold mb-2 mt-4">Haftung für Inhalte</h3>
                  <p className="text-muted-foreground mb-4">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                  </p>
                  <h3 className="text-xl font-semibold mb-2 mt-4">Haftung für Links</h3>
                  <p className="text-muted-foreground mb-4">
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  </p>
                  <h3 className="text-xl font-semibold mb-2 mt-4">Urheberrecht</h3>
                  <p className="text-muted-foreground">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-serif mb-4">Datenschutz</h2>
                  <p className="text-muted-foreground">
                    Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-serif mb-4">Allgemeine Geschäftsbedingungen (AGB)</h2>
                  <div className="text-muted-foreground">
                    <h3 className="text-xl font-semibold mb-2 mt-4">1. Geltungsbereich</h3>
                    <p className="mb-4">
                      Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, Lieferungen und Leistungen zwischen der Goldschmiede Salanitro (Inhaber: Giuseppe Salanitro, Stresemannstraße 6, 42719 Solingen) und ihren Kunden.
                    </p>
                    <h3 className="text-xl font-semibold mb-2 mt-4">2. Leistungen</h3>
                    <p className="mb-4">
                      Die Goldschmiede Salanitro bietet folgende Leistungen an:<br />
                      - Anfertigung individueller Schmuckstücke<br />
                      - Umarbeitungen und Anpassungen vorhandener Schmuckstücke<br />
                      - Reparaturen von Schmuckstücken<br />
                      - Verkauf von Schmuck und Edelmetallwaren
                    </p>
                    <h3 className="text-xl font-semibold mb-2 mt-4">3. Vertragsschluss</h3>
                    <p className="mb-4">
                      Ein Vertrag kommt zustande, sobald der Kunde ein Angebot der Goldschmiede Salanitro annimmt – mündlich, schriftlich oder durch schlüssiges Handeln. Bei individuellen Anfertigungen wird ein verbindliches Angebot erstellt, das vom Kunden bestätigt werden muss.
                    </p>
                    <h3 className="text-xl font-semibold mb-2 mt-4">4. Preise und Zahlung</h3>
                    <p className="mb-4">
                      Alle Preise verstehen sich in Euro inklusive der gesetzlichen Mehrwertsteuer.<br />
                      Die Bezahlung erfolgt nach Vereinbarung, in der Regel per Barzahlung oder Überweisung. Bei individuellen Schmuckanfertigungen kann eine Anzahlung verlangt werden.
                    </p>
                    <h3 className="text-xl font-semibold mb-2 mt-4">5. Liefer- und Fertigungszeiten</h3>
                    <p className="mb-4">
                      Die Fertigungszeit individueller Schmuckstücke wird im Vorfeld mit dem Kunden abgestimmt. Verzögerungen aufgrund höherer Gewalt oder fehlender Zulieferungen sind möglich und berechtigen nicht zum Rücktritt.
                    </p>
                    <h3 className="text-xl font-semibold mb-2 mt-4">6. Eigentumsvorbehalt</h3>
                    <p className="mb-4">
                      Bis zur vollständigen Bezahlung bleibt die Ware Eigentum der Goldschmiede Salanitro.
                    </p>
                    <h3 className="text-xl font-semibold mb-2 mt-4">7. Gewährleistung und Haftung</h3>
                    <p className="mb-4">
                      Für Mängel gelten die gesetzlichen Bestimmungen.<br />
                      Von der Gewährleistung ausgeschlossen sind Schäden, die durch unsachgemäße Behandlung, Verschleiß oder externe Einflüsse entstehen.
                    </p>
                    <h3 className="text-xl font-semibold mb-2 mt-4">8. Widerrufsrecht bei individuellen Anfertigungen</h3>
                    <p className="mb-4">
                      Bei individuell nach Kundenwunsch gefertigten Schmuckstücken besteht gemäß § 312g Abs. 2 Nr. 1 BGB kein Widerrufsrecht. Für vorgefertigte Ware gilt das gesetzliche Widerrufsrecht.
                    </p>
                    <h3 className="text-xl font-semibold mb-2 mt-4">9. Datenschutz</h3>
                    <p className="mb-4">
                      Die im Rahmen der Geschäftsabwicklung erhobenen Daten werden gemäß der gesetzlichen Datenschutzbestimmungen verarbeitet und nicht ohne Zustimmung an Dritte weitergegeben.
                    </p>
                    <h3 className="text-xl font-semibold mb-2 mt-4">10. Gerichtsstand und anwendbares Recht</h3>
                    <p className="mb-4">
                      Es gilt das Recht der Bundesrepublik Deutschland.<br />
                      Gerichtsstand ist, soweit gesetzlich zulässig, Solingen.
                    </p>
                  </div>
                </div>
                <div className="pt-8 text-sm text-muted-foreground">
                  <p>Stand: Oktober 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;