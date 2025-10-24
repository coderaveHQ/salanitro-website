import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Muss ich einen Termin vereinbaren?",
    answer: "Ja, bitte. Ich nehme mir für jeden Kunden persönlich Zeit. Melde dich einfach telefonisch oder über WhatsApp.",
  },
  {
    question: "Welche Leistungen bietest du an?",
    answer: "- Neuanfertigungen nach Wunsch\n- Umarbeitungen & Anpassungen\n- Reparaturen von Schmuckstücken\n- Anfertigung von Trauringen und Verlobungsringen",
  },
  {
    question: "Wie lange dauert eine Anfertigung?",
    answer: "Das hängt vom Auftrag ab – kleine Reparaturen können oft schnell erledigt werden, individuelle Schmuckstücke brauchen mehr Zeit. Gemeinsam besprechen wir deine Wünsche und den Zeitrahmen.",
  },
  {
    question: "Kann ich auch alten Schmuck umarbeiten lassen?",
    answer: "Ja, sehr gerne! Aus bestehenden Stücken etwas Neues zu schaffen, ist eine meiner liebsten Arbeiten.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4">
                FAQ
              </h1>
              <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Häufig gestellte Fragen
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-lg font-semibold pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-12 p-8 bg-gold/5 rounded-lg border border-gold/20 text-center">
                <h3 className="text-2xl font-serif mb-3">Noch Fragen?</h3>
                <p className="text-muted-foreground mb-6">
                  Kontaktieren Sie uns gerne für weitere Informationen oder um einen persönlichen Beratungstermin zu vereinbaren.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gold text-accent-foreground hover:bg-gold-dark h-11 px-8"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;