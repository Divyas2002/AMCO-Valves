"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Settings, Maximize, Layers, Gauge, Download } from "lucide-react";
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
    <div className="relative h-48 md:h-60 w-full overflow-hidden bg-muted group/inner">
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
              "w-1 h-1 md:w-1.5 md:h-1.5 rounded-full transition-all duration-300",
              current === i 
                ? "bg-white scale-125" 
                : "bg-white/40"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-left max-w-3xl mb-12 md:mb-16">
          <h2 className="text-secondary font-bold text-sm uppercase tracking-widest mb-3">Product Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">Our Valve Solutions</h3>
          <p className="text-foreground/70 text-sm md:text-base mb-8">
            Discover our comprehensive range of 13 precision-engineered Ball Valves designed for the world's most demanding industrial environments.
          </p>
        </div>

        <div className="flex flex-wrap justify-start gap-6 md:gap-8 mb-16 md:mb-20">
          {productData.map((product) => (
            <Card key={product.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] overflow-hidden hover:shadow-2xl transition-all duration-500 border-none bg-white rounded-[1.5rem] md:rounded-[2rem] flex flex-col">
              <ProductImageSlider productId={product.id} title={product.title} />
              
              <CardHeader className="p-4 md:p-6 pb-2">
                <CardTitle className="text-lg md:text-xl font-bold text-primary line-clamp-1">{product.title}</CardTitle>
                <p className="text-secondary font-semibold text-[10px] md:text-xs line-clamp-1">{product.specs}</p>
              </CardHeader>
              <CardContent className="p-4 md:p-6 flex-grow">
                <ul className="space-y-1.5 md:space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/70 text-[11px] md:text-xs">
                      <div className="w-1 h-1 rounded-full bg-secondary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          {/* Brochure Card */}
          <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(75%-1.5rem)] relative min-h-[250px] md:h-[250px] mt-8 md:mt-10">
            <div 
              className="h-full relative flex flex-col items-center justify-center py-8 md:py-6 px-6 md:px-10 bg-primary rounded-[1.5rem] md:rounded-[2rem] text-white shadow-xl transition-all duration-500 group overflow-hidden gap-6 md:gap-8"
            >
              <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 w-full text-center">
                <h4 className="text-2xl md:text-[32px] font-bold leading-tight">
                  Get our complete product catalog with technical specifications
                </h4>
              </div>
              
              <div className="relative z-10 shrink-0">
                <a 
                  href="/brochure.pdf" 
                  download="AMCO_Valves_Brochure.pdf"
                  className="inline-flex items-center gap-3 bg-secondary px-8 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-xl shadow-secondary/20 hover:bg-secondary/90 transition-all hover:translate-y-[-2px] animate-glow"
                >
                  <Download className="size-6 md:size-6" />
                  Download Full Brochure
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {[
            { icon: Maximize, title: "Configurations", desc: "1, 2, 3 Piece Designs" },
            { icon: Layers, title: "Connections", desc: "Threaded, Weld, Flanged" },
            { icon: Settings, title: "Seat Types", desc: "Soft & Metal Seat Options" },
            { icon: Gauge, title: "Mounting", desc: "Floating & Trunnion" }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={cn(
                "p-4 md:p-8 rounded-[1rem] md:rounded-[2rem] border border-border flex flex-col gap-2 md:gap-4 shadow-sm transition-all duration-300 group",
                item.title === "Configurations" 
                  ? "bg-[#09193E] text-white hover:bg-secondary" 
                  : "bg-white text-primary hover:bg-secondary hover:text-white"
              )}
            >
              <item.icon className="text-secondary group-hover:text-white transition-colors size-7 md:size-6" />
              <h4 className="text-sm md:text-lg font-bold">{item.title}</h4>
              <p className={cn(
                "text-[10px] md:text-sm group-hover:text-white/90",
                item.title === "Configurations" ? "text-white/70" : "text-foreground/60"
              )}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
