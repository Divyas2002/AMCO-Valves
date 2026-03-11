import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Certificates() {
  const certs = PlaceHolderImages.filter(img => img.id.startsWith("cert-"));

  return (
    <section id="certificates" className="py-24 bg-white border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Quality Standards</h2>
            <h3 className="text-3xl font-bold text-primary mb-6">Certified for Excellence</h3>
            <p className="text-foreground/70 mb-8">
              AMCO Valves is committed to the highest standards of safety and quality. Our manufacturing processes are audited and certified by leading global organizations.
            </p>
            <div className="flex flex-wrap gap-4">
              {["ISO 9001:2015", "API 6D", "CE Certified", "Fire Safe Tested"].map((badge) => (
                <span key={badge} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-semibold text-primary">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {certs.map((cert) => (
              <div key={cert.id} className="w-40 h-40 bg-background rounded-2xl flex items-center justify-center p-6 border border-border grayscale hover:grayscale-0 transition-all duration-300">
                <div className="relative w-full h-full">
                  <Image
                    src={cert.imageUrl}
                    alt={cert.description}
                    fill
                    className="object-contain"
                    data-ai-hint={cert.imageHint}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
