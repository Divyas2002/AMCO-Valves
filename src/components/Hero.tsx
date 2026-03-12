import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Factory, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section className="relative h-[850px] min-h-[850px] flex items-center pt-20 overflow-hidden">
      {/* Background with Lighter Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        {/* Adjusted gradient for light themed industrial look from the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          {/* Custom Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary px-4 py-2 rounded-full mb-8">
            <ShieldCheck size={18} />
            <span className="text-xs font-bold tracking-[0.1em] uppercase">Precision Engineered Solutions</span>
          </div>

          <h1 className="text-[48px] md:text-[65px] font-bold text-primary leading-[1.05] mb-8">
            Pioneering the <br /> Future of <br /> <span className="text-secondary">Industrial Flow</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-xl leading-relaxed">
            AMCO Valves delivers world-class ball valve solutions designed for extreme environments. Reliability, durability, and engineering excellence in every piece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button variant="secondary" size="lg" className="h-14 px-10 text-lg rounded-xl font-bold" asChild>
              <Link href="#products">
                Explore Catalog <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-10 text-lg bg-white border-none text-primary hover:bg-white hover:shadow-lg transition-all rounded-xl font-bold shadow-sm" asChild>
              <Link href="#about">Learn More</Link>
            </Button>
          </div>

          {/* Stats Section matching the image layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-12 border-t border-black/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center text-secondary">
                <Factory size={36} />
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-bold text-3xl leading-none mb-1">25+</span>
                <p className="text-foreground/50 text-sm font-medium">Years Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center text-secondary">
                <ShieldCheck size={36} />
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-bold text-3xl leading-none mb-1">100%</span>
                <p className="text-foreground/50 text-sm font-medium">Quality Testing</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center text-secondary">
                <Zap size={36} />
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-bold text-3xl leading-none mb-1">500+</span>
                <p className="text-foreground/50 text-sm font-medium">Global Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
