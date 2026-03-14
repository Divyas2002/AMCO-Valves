"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Factory, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}</>;
}

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section className="relative min-h-[100svh] md:h-[850px] flex items-center pt-24 md:pt-20 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 md:via-white/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          {/* Custom Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary px-4 py-2 rounded-full mb-6 md:mb-8">
            <ShieldCheck size={16} className="md:size-[18px]" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase">Precision Engineered Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[65px] font-bold text-primary leading-[1.1] md:leading-[1.05] mb-6 md:mb-8">
            Pioneering the <br className="hidden md:block" /> Future of <br className="hidden md:block" /> <span className="text-secondary">Industrial Flow</span>
          </h1>
          
          <p className="text-base md:text-xl text-foreground/70 mb-8 md:text-lg lg:text-xl md:mb-10 max-w-xl leading-relaxed">
            AMCO Valves delivers world-class ball valve solutions designed for extreme environments. Reliability, durability, and engineering excellence in every piece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
            <Button variant="secondary" size="lg" className="h-12 md:h-14 px-8 md:px-10 text-base md:text-lg rounded-xl font-bold" asChild>
              <Link href="#products">
                Explore Catalog <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 md:h-14 px-8 md:px-10 text-base md:text-lg bg-white border-none text-primary hover:bg-white hover:text-secondary hover:shadow-lg transition-all rounded-xl font-bold shadow-sm" asChild>
              <Link href="#about">Learn More</Link>
            </Button>
          </div>

          {/* Stats Section with Counter Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 pt-6 md:pt-8 pb-12 md:pb-0 border-t border-black/5">
            {[
              { icon: Zap, end: 200, label: "Projects Completed" },
              { icon: Users, end: 300, label: "Happy Customers" },
              { icon: Factory, end: 10, label: "Work Facilities" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-secondary">
                  <stat.icon size={32} className="md:size-9" />
                </div>
                <div className="flex flex-col">
                  <span className="text-primary font-bold text-2xl md:text-3xl leading-none mb-1">
                    <Counter end={stat.end} />+
                  </span>
                  <p className="text-foreground/50 text-xs md:text-sm font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
