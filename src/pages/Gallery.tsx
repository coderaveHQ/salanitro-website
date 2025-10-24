import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

import ring1 from "@/assets/gallery/ring-1.jpg";
import ring2 from "@/assets/gallery/ring-2.jpg";
import ring3 from "@/assets/gallery/ring-3.jpg";
import ring4 from "@/assets/gallery/ring-4.jpg";
import ring5 from "@/assets/gallery/ring-5.jpg";
import ring6 from "@/assets/gallery/ring-6.jpg";
import ring7 from "@/assets/gallery/ring-7.jpg";
import ring8 from "@/assets/gallery/ring-8.jpg";
import ring9 from "@/assets/gallery/ring-9.jpg";
import ring10 from "@/assets/gallery/ring-10.jpg";
import ring11 from "@/assets/gallery/ring-11.jpg";

import necklace1 from "@/assets/gallery/necklace-1.jpg";
import necklace2 from "@/assets/gallery/necklace-2.jpg";
import necklace3 from "@/assets/gallery/necklace-3.jpg";
import necklace4 from "@/assets/gallery/necklace-4.jpg";
import necklace5 from "@/assets/gallery/necklace-5.jpg";
import necklace6 from "@/assets/gallery/necklace-6.jpg";
import necklace7 from "@/assets/gallery/necklace-7.jpg";
import necklace8 from "@/assets/gallery/necklace-8.jpg";
import necklace9 from "@/assets/gallery/necklace-9.jpg";
import necklace10 from "@/assets/gallery/necklace-10.jpg";
import necklace11 from "@/assets/gallery/necklace-11.jpg";
import necklace12 from "@/assets/gallery/necklace-12.jpg";
import necklace13 from "@/assets/gallery/necklace-13.jpg";
import necklace14 from "@/assets/gallery/necklace-14.jpg";
import necklace15 from "@/assets/gallery/necklace-15.jpg";
import necklace16 from "@/assets/gallery/necklace-16.jpg";
import necklace17 from "@/assets/gallery/necklace-17.jpg";
import necklace18 from "@/assets/gallery/necklace-18.jpg";
import necklace19 from "@/assets/gallery/necklace-19.jpg";
import necklace20 from "@/assets/gallery/necklace-20.jpg";
import necklace21 from "@/assets/gallery/necklace-21.jpg";
import necklace22 from "@/assets/gallery/necklace-22.jpg";

import bracelet1 from "@/assets/gallery/bracelet-1.jpg";
import bracelet2 from "@/assets/gallery/bracelet-2.jpg";
import bracelet3 from "@/assets/gallery/bracelet-3.jpg";
import bracelet4 from "@/assets/gallery/bracelet-4.jpg";
import bracelet5 from "@/assets/gallery/bracelet-5.jpg";
import bracelet6 from "@/assets/gallery/bracelet-6.jpg";

import earrings1 from "@/assets/gallery/earrings-1.jpg";
import earrings2 from "@/assets/gallery/earrings-2.jpg";
import earrings3 from "@/assets/gallery/earrings-3.jpg";
import earrings4 from "@/assets/gallery/earrings-4.jpg";
import earrings5 from "@/assets/gallery/earrings-5.jpg";
import earrings6 from "@/assets/gallery/earrings-6.jpg";
import earrings7 from "@/assets/gallery/earrings-7.jpg";

import wedding1 from "@/assets/gallery/wedding-1.jpg";
import wedding2 from "@/assets/gallery/wedding-2.jpg";
import wedding3 from "@/assets/gallery/wedding-3.jpg";
import wedding4 from "@/assets/gallery/wedding-4.jpg";
import wedding5 from "@/assets/gallery/wedding-5.jpg";
import wedding6 from "@/assets/gallery/wedding-6.jpg";
import wedding7 from "@/assets/gallery/wedding-7.jpg";
import wedding8 from "@/assets/gallery/wedding-8.jpg";
import wedding9 from "@/assets/gallery/wedding-9.jpg";
import wedding10 from "@/assets/gallery/wedding-10.jpg";

type Category = "all" | "rings" | "necklaces" | "bracelets" | "earrings" | "wedding";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: Category;
  tags: string[];
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "",
    description: "",
    image: ring1,
    category: "rings",
    tags: ["Ringe"],
  },
  {
    id: 2,
    title: "",
    description: "",
    image: ring2,
    category: "rings",
    tags: ["Ringe"],
  },
  {
    id: 3,
    title: "",
    description: "",
    image: ring3,
    category: "rings",
    tags: ["Ringe"],
  },
  {
    id: 4,
    title: "",
    description: "",
    image: ring4,
    category: "rings",
    tags: ["Ringe"],
  },
  {
    id: 5,
    title: "",
    description: "",
    image: ring5,
    category: "rings",
    tags: ["Ringe"],
  },
  {
    id: 6,
    title: "",
    description: "",
    image: ring6,
    category: "rings",
    tags: ["Ringe"],
  },
  {
    id: 7,
    title: "",
    description: "",
    image: ring7,
    category: "rings",
    tags: ["Ringe"],
  },
  {
    id: 8,
    title: "",
    description: "",
    image: ring8,
    category: "rings",
    tags: ["Ringe"],
  },
  {
    id: 9,
    title: "",
    description: "",
    image: ring9,
    category: "rings",
    tags: ["Ringe"],
  },
  {
    id: 10,
    title: "",
    description: "",
    image: ring10,
    category: "rings",
    tags: ["Ringe"],
  },
  {
    id: 11,
    title: "",
    description: "",
    image: ring11,
    category: "rings",
    tags: ["Ringe"],
  },





  {
    id: 12,
    title: "",
    description: "",
    image: necklace1,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 13,
    title: "",
    description: "",
    image: necklace2,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 14,
    title: "",
    description: "",
    image: necklace3,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 15,
    title: "",
    description: "",
    image: necklace4,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 16,
    title: "",
    description: "",
    image: necklace5,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 17,
    title: "",
    description: "",
    image: necklace6,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 18,
    title: "",
    description: "",
    image: necklace7,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 19,
    title: "",
    description: "",
    image: necklace8,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 20,
    title: "",
    description: "",
    image: necklace9,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 21,
    title: "",
    description: "",
    image: necklace10,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 22,
    title: "",
    description: "",
    image: necklace11,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 23,
    title: "",
    description: "",
    image: necklace12,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 24,
    title: "",
    description: "",
    image: necklace13,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 25,
    title: "",
    description: "",
    image: necklace14,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 26,
    title: "",
    description: "",
    image: necklace15,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 27,
    title: "",
    description: "",
    image: necklace16,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 28,
    title: "",
    description: "",
    image: necklace17,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 29,
    title: "",
    description: "",
    image: necklace18,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 30,
    title: "",
    description: "",
    image: necklace19,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 31,
    title: "",
    description: "",
    image: necklace20,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 32,
    title: "",
    description: "",
    image: necklace21,
    category: "necklaces",
    tags: ["Anhänger"],
  },
  {
    id: 33,
    title: "",
    description: "",
    image: necklace22,
    category: "necklaces",
    tags: ["Anhänger"],
  },





  {
    id: 34,
    title: "",
    description: "",
    image: bracelet1,
    category: "bracelets",
    tags: ["Armschmuck"],
  },
  {
    id: 35,
    title: "",
    description: "",
    image: bracelet2,
    category: "bracelets",
    tags: ["Armschmuck"],
  },
  {
    id: 36,
    title: "",
    description: "",
    image: bracelet3,
    category: "bracelets",
    tags: ["Armschmuck"],
  },
  {
    id: 37,
    title: "",
    description: "",
    image: bracelet4,
    category: "bracelets",
    tags: ["Armschmuck"],
  },
  {
    id: 38,
    title: "",
    description: "",
    image: bracelet5,
    category: "bracelets",
    tags: ["Armschmuck"],
  },
  {
    id: 39,
    title: "",
    description: "",
    image: bracelet6,
    category: "bracelets",
    tags: ["Armschmuck"],
  },





  {
    id: 40,
    title: "",
    description: "",
    image: earrings1,
    category: "earrings",
    tags: ["Ohrschmuck"],
  },
  {
    id: 41,
    title: "",
    description: "",
    image: earrings2,
    category: "earrings",
    tags: ["Ohrschmuck"],
  },
  {
    id: 42,
    title: "",
    description: "",
    image: earrings3,
    category: "earrings",
    tags: ["Ohrschmuck"],
  },
  {
    id: 43,
    title: "",
    description: "",
    image: earrings4,
    category: "earrings",
    tags: ["Ohrschmuck"],
  },
  {
    id: 44,
    title: "",
    description: "",
    image: earrings5,
    category: "earrings",
    tags: ["Ohrschmuck"],
  },
  {
    id: 45,
    title: "",
    description: "",
    image: earrings6,
    category: "earrings",
    tags: ["Ohrschmuck"],
  },
  {
    id: 46,
    title: "",
    description: "",
    image: earrings7,
    category: "earrings",
    tags: ["Ohrschmuck"],
  },






  {
    id: 47,
    title: "",
    description: "",
    image: wedding1,
    category: "wedding",
    tags: ["Trau- & Verlobunsgringe"],
  },
  {
    id: 48,
    title: "",
    description: "",
    image: wedding2,
    category: "wedding",
    tags: ["Trau- & Verlobunsgringe"],
  },
  {
    id: 49,
    title: "",
    description: "",
    image: wedding3,
    category: "wedding",
    tags: ["Trau- & Verlobunsgringe"],
  },
  {
    id: 50,
    title: "",
    description: "",
    image: wedding4,
    category: "wedding",
    tags: ["Trau- & Verlobunsgringe"],
  },
  {
    id: 51,
    title: "",
    description: "",
    image: wedding5,
    category: "wedding",
    tags: ["Trau- & Verlobunsgringe"],
  },
  {
    id: 52,
    title: "",
    description: "",
    image: wedding6,
    category: "wedding",
    tags: ["Trau- & Verlobunsgringe"],
  },
  {
    id: 53,
    title: "",
    description: "",
    image: wedding7,
    category: "wedding",
    tags: ["Trau- & Verlobunsgringe"],
  },
  {
    id: 54,
    title: "",
    description: "",
    image: wedding8,
    category: "wedding",
    tags: ["Trau- & Verlobunsgringe"],
  },
  {
    id: 55,
    title: "",
    description: "",
    image: wedding9,
    category: "wedding",
    tags: ["Trau- & Verlobunsgringe"],
  },
  {
    id: 56,
    title: "",
    description: "",
    image: wedding10,
    category: "wedding",
    tags: ["Trau- & Verlobunsgringe"],
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const categories = [
    { value: "all" as Category, label: "Alles" },
    { value: "rings" as Category, label: "Ringe" },
    { value: "necklaces" as Category, label: "Anhänger" },
    { value: "bracelets" as Category, label: "Armschmuck" },
    { value: "earrings" as Category, label: "Ohrschmuck" },
    { value: "wedding" as Category, label: "Trau- & Verlobunsgringe" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4">
                Galerie
              </h1>
              <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Einblicke in unsere Handwerkskunst
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <Button
                  key={cat.value}
                  variant={activeCategory === cat.value ? "gold" : "outline"}
                  onClick={() => setActiveCategory(cat.value)}
                  className="rounded-full"
                >
                  {cat.label}
                </Button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-white/90">Klicken für Details</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Detail Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl">
          {selectedItem && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-serif mb-2">
                    {selectedItem.title}
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    {selectedItem.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="flex gap-2 mt-4">
                  {selectedItem.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gold/10 text-gold border-gold/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <Button variant="gold" className="w-full" asChild>
                    <a href="/contact">Beratung vereinbaren</a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
