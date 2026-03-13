"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Gallery() {
  // Filter for gallery images defined in placeholder-images.json
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith("gallery-"));

  return (
    <section id="gallery" className="py-24 bg-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-secondary font-bold text-xs uppercase tracking-[0.4em] mb-6">
            Visual Showcase
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Industrial Gallery
          </h3>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A glimpse into our manufacturing processes and the high-quality products we deliver to our global clientele.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-[1.3/1] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.03] group border-4 border-white/5"
            >
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={image.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}