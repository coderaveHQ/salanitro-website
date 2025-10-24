import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const result = await emailjs.send(
        'SROEPGES_EmailJS_Service_ID',
        'SROEPGES_EmailJS_Template_ID',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'SROEPGES_EmailJS_Public_Key'
      );

      toast({
        title: "Nachricht gesendet!",
        description: "Wir werden uns in Kürze bei Ihnen melden.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Fehler beim Senden",
        description: "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4">
                Kontakt
              </h1>
              <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Wir freuen uns auf Ihre Nachricht. Kontaktieren Sie uns.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif mb-8">
                    Besuche uns vor Ort
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-gold" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Adresse</h3>
                        <p className="text-muted-foreground">
                          Stresemannstraße 6<br />
                          42719 Solingen
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-gold" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Kontakt</h3>
                        <p className="text-muted-foreground">
                          Phone: +49 (0) 177-7821020<br />
                          Email: goldschmiede@salanitro.de
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5 text-gold" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Öffnungszeiten</h3>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div className="flex justify-between gap-8">
                            <span>Montag</span>
                            <span className="text-gold">Geschlossen</span>
                          </div>
                          <div className="flex justify-between gap-8">
                            <span>Dienstag</span>
                            <span className="text-gold">09:30 - 13:00 | 14:30 - 16:00</span>
                          </div>
                          <div className="flex justify-between gap-8">
                            <span>Mittwoch</span>
                            <span className="text-gold">11:00 - 13:00 | 14:30 - 17:00</span>
                          </div>
                          <div className="flex justify-between gap-8">
                            <span>Donnerstag</span>
                            <span className="text-gold">11:00 - 13:00 | 14:30 - 17:00</span>
                          </div>
                          <div className="flex justify-between gap-8">
                            <span>Freitag</span>
                            <span className="text-gold">09:30 - 13:00 | 14:30 - 16:00</span>
                          </div>
                          <div className="flex justify-between gap-8">
                            <span>Samstag</span>
                            <span className="text-gold">Geschlossen</span>
                          </div>
                          <div className="flex justify-between gap-8">
                            <span>Sonntag</span>
                            <span className="text-gold">Geschlossen</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
                <h2 className="text-2xl font-serif mb-6">
                  Sende uns eine Nachricht
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-Mail</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Nachricht</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 resize-none"
                    />
                  </div>
                  <Button type="submit" variant="gold" className="w-full" size="lg">
                    Senden
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;