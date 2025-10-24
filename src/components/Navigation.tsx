import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "Startseite" },
    { path: "/about", label: "Über Uns" },
    { path: "/gallery", label: "Galerie" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Kontakt" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center text-xl sm:text-2xl font-serif">
            <img
              src={logo}
              alt="Goldschmiede Salanitro Logo"
              className="h-6 sm:h-8 mr-2"
            />
            Goldschmiede <span className="text-gold">Salanitro</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isActive(link.path) ? "text-gold" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="gold" size="sm" asChild>
              <Link to="/contact">Beratung vereinbaren</Link>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle className="text-left font-serif flex items-center">
                  <img
                    src={logo}
                    alt="Goldschmiede Salanitro Logo"
                    className="h-6 mr-2"
                  />
                  Goldschmiede <span className="text-gold">Salanitro</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium py-2 px-4 rounded-lg transition-colors ${
                      isActive(link.path)
                        ? "bg-gold/10 text-gold"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button variant="gold" className="mt-4" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Beratung vereinbaren
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;