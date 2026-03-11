import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Factory, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
            <ShieldCheck size={18} />
            <span className="text-sm font-semibold tracking-wide uppercase">Precision Engineered Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Pioneering the Future of <span className="text-secondary">Industrial Flow</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-xl">
            AMCO Valves delivers world-class ball valve solutions designed for extreme environments. Reliability, durability, and engineering excellence in every piece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" size="lg" className="h-14 px-8 text-lg" asChild>
              <Link href="#products">
                Explore Catalog <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg bg-white border-white text-[hsl(222,74%,14%)] hover:bg-white hover:text-[hsl(17,88%,54%)] transition-all" asChild>
              <Link href="#about">Learn More</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
            <div className="flex flex-col gap-1">
              <div className="text-white font-bold text-3xl flex items-center gap-3">
                <Factory className="text-secondary shrink-0" size={28} />
                <span>25+</span>
              </div>
              <p className="text-white/60 text-sm font-medium">Years Experience</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-white font-bold text-3xl flex items-center gap-3">
                <ShieldCheck className="text-secondary shrink-0" size={28} />
                <span>100%</span>
              </div>
              <p className="text-white/60 text-sm font-medium">Quality Testing</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-white font-bold text-3xl flex items-center gap-3">
                <Zap className="text-secondary shrink-0" size={28} />
                <span>500+</span>
              </div>
              <p className="text-white/60 text-sm font-medium">Global Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
