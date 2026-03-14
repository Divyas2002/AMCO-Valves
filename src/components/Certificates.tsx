import Image from "next/image";
import { ShieldCheck, Search, CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Certificates() {
  const certLogos = [
    PlaceHolderImages.find(img => img.id === "cert-iso"),
    PlaceHolderImages.find(img => img.id === "cert-tuv"),
    PlaceHolderImages.find(img => img.id === "cert-tata"),
    PlaceHolderImages.find(img => img.id === "cert-sgs"),
  ].filter(Boolean);

  const approvals = [
    "ISO 9001:2015",
    "IBR",
    "CE PED 2014/68/EU ANNEX III MODULE H (ON REQUEST)",
    "SIL-2 (ON REQUEST)",
    "FUGITIVE EMISSION TEST ISO 15848-1:2015 (ON REQUEST)",
    "FIRE TEST FOR BALL VALVES – API 607-2016, 7TH EDITION (ON REQUEST)",
    "EAC TR CU 032/2013 (ON REQUEST)",
    "ATEX 2014/34/EU (ON REQUEST)",
    "NDT (VT, LPT, MPT, UT, RT & IGC FOR SS (ON REQUEST)",
  ];

  const thirdParty = [
    "DNV",
    "TUV",
    "BV",
    "SGS",
    "TATA Projects",
  ];

  return (
    <section id="certificates" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck size={14} />
              Quality Standards
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Certified for Excellence
            </h3>
            <p className="text-foreground/60 text-lg mb-12 leading-relaxed max-w-xl">
              AMCO Valves is committed to the highest standards of safety and quality. Our manufacturing processes are audited and certified by leading global certification bodies.
            </p>

            <div className="space-y-12">
              <div>
                <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  Approvals & Certificates
                </h4>
                <ul className="grid gap-4 sm:grid-cols-1">
                  {approvals.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-foreground/70 text-sm">
                      <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                      <span className="leading-tight font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {certLogos.map((logo, idx) => (
                <div 
                  key={logo?.id || idx} 
                  className="relative aspect-[1.8/1] rounded-[1.5rem] bg-white border border-border shadow-sm overflow-hidden p-3 flex items-center justify-center hover:shadow-lg hover:border-secondary/20 transition-all duration-300"
                >
                  {logo && (
                    <Image
                      src={logo.imageUrl}
                      alt={logo.description}
                      fill
                      className="object-contain p-8 md:p-10"
                      data-ai-hint={logo.imageHint}
                    />
                  )}
                </div>
              ))}
              
              <div className="col-span-2 bg-primary p-6 md:p-8 rounded-[2rem] text-white shadow-xl shadow-primary/20 flex flex-col justify-center items-center text-center">
                <h5 className="text-lg md:text-xl font-bold mb-2">Global Quality Standards</h5>
                <p className="text-white/80 text-[11px] md:text-xs max-w-xs">
                  Meeting and exceeding international requirements for industrial safety and engineering performance.
                </p>
              </div>

              <div className="col-span-2 p-6 md:p-8 rounded-[2rem] bg-primary/5 border border-primary/10">
                <h4 className="text-base md:text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <Search className="text-secondary" size={20} />
                  Third Party Inspection
                </h4>
                <div className="flex flex-wrap gap-2">
                  {thirdParty.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 md:px-4 py-1.5 bg-white border border-border rounded-full text-[10px] md:text-[12px] font-bold text-primary shadow-sm hover:border-secondary/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
