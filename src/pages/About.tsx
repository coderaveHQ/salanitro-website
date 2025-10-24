import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import workspaceImage from "@/assets/about-workspace.jpg";
import masterImage from "@/assets/master-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Story Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4">
                Unsere Geschichte
              </h1>
              <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Von Juwelier Teschen zur Goldschmiede Salanitro
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <img 
                  src={workspaceImage} 
                  alt="Goldschmiede Werkstatt" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold rounded-full w-32 h-32 flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <div className="text-sm text-primary font-medium">seit</div>
                    <div className="text-4xl font-serif text-primary">1899</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Die Geschichte meiner Familie reicht weit zurück:<br />
                  1899 gründete mein Ur-Ur-Großvater den Juwelier Teschen – ein Geschäft, das über viele Jahrzehnte für Qualität, Handwerkskunst und Vertrauen stand.<br />
                  Darauf folgte seine Tochter Änne Teschen, später mein Großvater Klaus Bölts, der das Familienerbe mit Leidenschaft weiterführte.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Am 125. Jahrestag des Juwelier Teschen habe ich meine eigene Werkstatt eröffnet – die Goldschmiede Salanitro.<br />
                  Sie steht für das, was meine Familie seit über einem Jahrhundert prägt: handwerkliche Präzision, Erfahrung und die Liebe zu edlen Materialien.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Für mich bedeutet Tradition nicht Stillstand, sondern Weiterentwicklung.<br />
                  Alte Techniken und modernes Design gehören zusammen – genau wie meine Wurzeln:<br />
                  Deutsche Handwerkskunst trifft italienische Eleganz.<br />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Master Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
                Über mich
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Giuseppe Salanitro, Goldschmied aus Solingen
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-background rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src={masterImage} 
                  alt="Giuseppe Salanitro - Goldschmiedemeister" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Schon früh wusste ich: Das Goldschmiedehandwerk ist mehr als nur ein Beruf – es ist meine Berufung.<br />
                    2019 begann ich meine Ausbildung bei der Hloschek Gold- und Platinschmiede und entdeckte, was es bedeutet, Ideen aus Metall und Edelsteinen Wirklichkeit werden zu lassen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Das Handwerk liegt mir im Blut:<br />
                    Mein Ur-Ur-Großvater war Optiker und Uhrmachermeister, mein Großvater Uhrmachermeister – und meine Mutter Goldschmiedin.<br />
                    Heute führe ich diese Familientradition in meiner eigenen Werkstatt fort und vereine dabei deutsche Präzision mit italienischem Designgefühl.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ob Silber, Gold oder Platin – jedes Schmuckstück entsteht bei mir nach den Vorstellungen meiner Kunden. Mit Zeit, Sorgfalt und dem Anspruch, ein Stück zu schaffen, das Generationen überdauert.
                  </p>
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

export default About;
