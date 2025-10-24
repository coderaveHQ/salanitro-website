import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";
import masterPortrait from "@/assets/master-portrait.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          </div>
          <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center mt-8 md:mt-12 lg:mt-16">
            <div className="text-center text-white max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6">
                <span className="text-gold">Goldschmiede Salanitro</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90">
                Handwerk mit Herz und Geschichte
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/gallery">Kollektion entdecken</Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-primary text-primary-foreground border-primary-foreground hover:bg-primary/90" asChild>
                  <Link to="/contact">Beratung vereinbaren</Link>
                </Button>
              </div>
              <p className="text-sm sm:text-lg md:text-xl mb-4 pt-4 text-white/90">
                Willkommen in der Goldschmiede Salanitro in Solingen.
              </p>
              <p className="text-xs sm:text-sm md:text-lg mb-2 pt-1 text-white/90">
                Hier treffen traditionelle Handwerkskunst und moderne Ideen aufeinander. Jedes Schmuckstück entsteht in liebevoller Handarbeit – individuell, hochwertig und genau nach deinen Vorstellungen.
              </p>
              <p className="text-xs sm:text-sm md:text-lg mb-4 pt-1 text-white/90">
                Ob Trauringe, Umarbeitungen oder ganz besondere Einzelstücke: Gemeinsam finden wir den passenden Weg, deine Ideen in edlem Metall und funkelnden Steinen Wirklichkeit werden zu lassen.
              </p>
            </div>
          </div>
        </section>
        {/* About Preview Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
                Über uns
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Giuseppe Salanitro
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-serif">
                  Goldschmied aus Leidenschaft
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hallo, ich bin Giuseppe – gelernter Goldschmied, kreativer Kopf und seit 2022 selbstständig mit meiner eigenen Werkstatt in Solingen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Die Liebe zum Schmuckhandwerk liegt in meiner Familie: Schon mein Großvater und Urgroßvater führten das traditionsreiche Geschäft Juwelier Teschen. Mit der Goldschmiede Salanitro baue ich dieses Erbe Schritt für Schritt wieder auf – mit frischem Design, modernen Ideen und einem tiefen Respekt für alte Handwerkskunst.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mein Ziel: Schmuckstücke schaffen, die Geschichten erzählen und Menschen ein Leben lang begleiten.
                </p>
                <div className="pt-4">
                  <Button variant="gold" asChild>
                    <Link to="/about">Mehr erfahren</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
                <img
                  src={masterPortrait}
                  alt="Goldschmiedemeister Salanitro"
                  className="relative w-4/5 h-auto mx-auto rounded-2xl shadow-lg block"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Featured Collection Preview */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
                Galerie
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Einblicke in unsere Handwerkskunst
              </p>
            </div>
            <div className="text-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/gallery">Galerie ansehen</Link>
              </Button>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6">
              Bereit für Ihr <span className="text-gold">einzigartiges</span> Schmuckstück?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Vereinbaren Sie noch heute einen Termin für eine persönliche Beratung
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Jetzt Kontakt aufnehmen</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;