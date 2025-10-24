import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif mb-4">
              Goldschmiede <span className="text-gold">Salanitro</span>
            </h3>
            <p className="text-sm text-footer-foreground/80 mb-4">
              Handgefertigte Schmuckstücke mit Leidenschaft, Präzision und unvergleichlicher Handwerkskunst seit 1899.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/salanitro_" className="text-footer-foreground/80 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:goldschmiede@salanitro.de" className="text-footer-foreground/80 hover:text-gold transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <address className="text-sm text-footer-foreground/80 not-italic space-y-2">
              <p>Stresemannstraße 6</p>
              <p>42719 Solingen</p>
              <p className="mt-3">+49 (0) 177-7821020</p>
              <p>goldschmiede@salanitro.de</p>
            </address>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Öffnungszeiten</h4>
            <div className="text-sm text-footer-foreground/80 space-y-2">
              <div className="flex justify-between gap-4">
                <span>Montag</span>
                <span className="text-gold">Geschlossen</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Dienstag</span>
                <span className="text-gold">09:30 - 13:00 | 14:30 - 16:00</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Mittwoch</span>
                <span className="text-gold">11:00 - 13:00 | 14:30 - 17:00</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Donnerstag</span>
                <span className="text-gold">11:00 - 13:00 | 14:30 - 17:00</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Freitag</span>
                <span className="text-gold">09:30 - 13:00 | 14:30 - 16:00</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Samstag</span>
                <span className="text-gold">Geschlossen</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sonntag</span>
                <span className="text-gold">Geschlossen</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Schnelllinks</h4>
            <nav className="text-sm text-footer-foreground/80 space-y-2">
              <Link to="/" className="block hover:text-gold transition-colors">
                Startseite
              </Link>
              <Link to="/about" className="block hover:text-gold transition-colors">
                Über Uns
              </Link>
              <Link to="/gallery" className="block hover:text-gold transition-colors">
                Galerie
              </Link>
              <Link to="/faq" className="block hover:text-gold transition-colors">
                FAQ
              </Link>
              <Link to="/contact" className="block hover:text-gold transition-colors">
                Kontakt
              </Link>
              <Link to="/impressum" className="block hover:text-gold transition-colors">
                Impressum
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-footer-foreground/20 pt-8 text-center text-sm text-footer-foreground/60">
          <p>© 2025 Goldschmiede Salanitro. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
