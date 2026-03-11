
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Certificates() {
  const certImg1 = PlaceHolderImages.find(img => img.id === "cert-industrial-1");
  const certImg2 = PlaceHolderImages.find(img => img.id === "cert-industrial-2");

  return (
    <section id="certificates" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-4">
              Quality Standards
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Certified for Excellence
            </h3>
            <p className="text-foreground/60 text-lg mb-10 leading-relaxed">
              AMCO Valves is committed to the highest standards of safety and quality. Our manufacturing processes are audited and certified by leading global certification bodies.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "ISO 9001:2015",
                "API 6D",
                "CE Certified",
                "Fire Safe Tested",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-6 py-2.5 bg-white border border-border rounded-full text-sm font-medium text-primary hover:border-secondary/30 transition-colors shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-end gap-6">
            <div className="relative w-full max-w-[400px] aspect-[1.4/1] rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              {certImg1 && (
                <Image
                  src={certImg1.imageUrl}
                  alt={certImg1.description}
                  fill
                  className="object-cover"
                  data-ai-hint={certImg1.imageHint}
                />
              )}
            </div>
            <div className="relative w-full max-w-[300px] aspect-[1.2/1] rounded-[2rem] overflow-hidden shadow-xl transition-transform hover:scale-[1.05] duration-500 -mt-12 hidden md:block">
              {certImg2 && (
                <Image
                  src={certImg2.imageUrl}
                  alt={certImg2.description}
                  fill
                  className="object-cover"
                  data-ai-hint={certImg2.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
