"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Settings, Maximize, Layers, Gauge, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  type CarouselApi 
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const productData = [
  { id: "1", title: "1 Piece Ball Valve", specs: "Economical, Reduced Port", features: ["Compact Design", "Minimal Leakage Paths"] },
  { id: "2", title: "2 Piece Ball Valve", specs: "Full Port, Robust", features: ["Two-part Body", "Easy Maintenance"] },
  { id: "3", title: "3 Piece Ball Valve", specs: "Maintenance-Friendly", features: ["In-line Serviceable", "Swing-out Design"] },
  { id: "4", title: "Flanged Ball Valve", specs: "ASME B16.5 Standard", features: ["Flanged Connection", "High Durability"] },
  { id: "5", title: "Socket Weld Valve", specs: "API 607 Fire Safe", features: ["Secure Jointing", "Leak Proof"] },
  { id: "6", title: "Butt Weld Valve", specs: "Industrial Grade", features: ["High Temperature", "Strong Weld"] },
  { id: "7", title: "Screwed Ball Valve", specs: "NPT / BSP Threaded", features: ["Quick Install", "Versatile Usage"] },
  { id: "8", title: "High Pressure Valve", specs: "Class 800 - 2500", features: ["Heavy Duty", "Safety Tested"] },
  { id: "9", title: "Trunnion Mounted", specs: "High Pressure Ops", features: ["Low Torque", "Double Block"] },
  { id: "10", title: "Floating Ball Valve", specs: "Self-Relieving Seats", features: ["Bi-directional", "Reliable Seal"] },
  { id: "11", title: "Soft Seat Valve", specs: "PTFE / RPTFE Seats", features: ["Zero Leakage", "Chemical Resistant"] },
  { id: "12", title: "Metal Seat Valve", specs: "Stellite Overlays", features: ["Abrasive Media", "Extremely Tough"] },
  { id: "13", title: "Instrumentation Valve", specs: "High Precision", features: ["Small Bore", "Fine Control"] },
];

/**
 * A sub-component to handle the nested image slider for each product card.
 */
function ProductImageSlider({ productId, title }: { productId: string, title: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const mainImage = PlaceHolderImages.find(img => img.id === `product-${productId}`);
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith("gallery-")).slice(0, 2);
  const sliderImages = mainImage ? [mainImage, ...galleryImages] : galleryImages;

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  const scrollTo = useCallback((index: number) => {
    if (!api) return;
    api.scrollTo(index);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
  }, [api, onSelect]);

  return (
    <div className="relative h-60 w-full overflow-hidden bg-muted group/inner">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full h-full">
        <CarouselContent className="h-full ml-0">
          {sliderImages.map((img, idx) => (
            <CarouselItem key={`${productId}-img-${idx}`} className="pl-0 h-full">
              <div className="relative w-full h-full">
                <Image
                  src={img.imageUrl}
                  alt={`${title} - View ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  data-ai-hint={img.imageHint}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all duration-300",
              current === i 
                ? "bg-white scale-125" 
                : "bg-white/40"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute top-4 left-4 z-10">
        <Badge variant="secondary" className="px-4 py-1.5 font-bold uppercase tracking-wider text-[10px]">
          Industrial
        </Badge>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold text-sm uppercase tracking-widest mb-3">Product Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">Our Valve Solutions</h3>
          <p className="text-foreground/70 mb-8">
            Discover our comprehensive range of 13 precision-engineered Ball Valves designed for the world's most demanding industrial environments.
          </p>
        </div>

        {/* Grid layout for all products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {productData.map((product) => (
            <Card key={product.id} className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 border-none bg-white rounded-[2rem] flex flex-col">
              <ProductImageSlider productId={product.id} title={product.title} />
              
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-primary line-clamp-1">{product.title}</CardTitle>
                <p className="text-secondary font-semibold text-xs line-clamp-1">{product.specs}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/70 text-xs">
                      <div className="w-1 h-1 rounded-full bg-secondary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Maximize, title: "Configurations", desc: "1, 2, 3 Piece Designs" },
            { icon: Layers, title: "Connections", desc: "Threaded, Weld, Flanged" },
            { icon: Settings, title: "Seat Types", desc: "Soft & Metal Seat Options" },
            { icon: Gauge, title: "Mounting", desc: "Floating & Trunnion" }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={cn(
                "p-8 rounded-[2rem] border border-border flex flex-col gap-4 shadow-sm transition-all duration-300 group",
                item.title === "Configurations" 
                  ? "bg-[#09193E] text-white hover:bg-secondary" 
                  : "bg-white text-primary hover:bg-secondary hover:text-white"
              )}
            >
              <item.icon size={32} className="text-secondary group-hover:text-white transition-colors" />
              <h4 className="text-lg font-bold">{item.title}</h4>
              <p className={cn(
                "text-sm group-hover:text-white/90",
                item.title === "Configurations" ? "text-white/70" : "text-foreground/60"
              )}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Download Brochure button centered at the very bottom */}
        <div className="text-center">
          <Button variant="secondary" size="lg" className="rounded-xl font-bold px-8 shadow-lg hover:shadow-secondary/20 transition-all" asChild>
            <a href="/brochure.pdf" download="AMCO_Valves_Brochure.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
