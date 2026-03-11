"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith("gallery-"));

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Visual Showcase</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">Industrial Gallery</h3>
          <p className="text-foreground/70">
            A glimpse into our manufacturing prowess and the high-quality products we deliver to our global clientele.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, idx) => (
            <div
              key={image.id}
              className={cn(
                "relative group overflow-hidden rounded-2xl bg-white",
                idx === 1 || idx === 2 ? "lg:row-span-2 h-[300px] lg:h-full" : "h-[300px]"
              )}
            >
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Search size={20} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Re-importing cn here to ensure it works within the file
import { cn } from "@/lib/utils";
