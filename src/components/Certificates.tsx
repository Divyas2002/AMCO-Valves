import Image from "next/image";
import { ShieldCheck, Search, CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Certificates() {
  const certImg = PlaceHolderImages.find(img => img.id === "certification-main");

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
              {/* Approvals Section */}
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

              {/* Third Party Section */}
              <div className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10">
                <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Search className="text-secondary" size={24} />
                  Third Party Inspection
                </h4>
                <div className="flex flex-wrap gap-3">
                  {thirdParty.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-6 py-2.5 bg-white border border-border rounded-full text-sm font-bold text-primary shadow-sm hover:border-secondary/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div className="relative w-full aspect-[1.4/1] rounded-[3rem] overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-500 border-8 border-white">
              {certImg && (
                <Image
                  src={certImg.imageUrl}
                  alt={certImg.description}
                  fill
                  className="object-cover"
                  data-ai-hint={certImg.imageHint}
                />
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-secondary p-8 rounded-[2.5rem] text-white shadow-xl shadow-secondary/20">
                <h5 className="text-3xl font-bold mb-1">API 6D</h5>
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Licensed Mfg.</p>
              </div>
              <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-xl shadow-primary/20">
                <h5 className="text-3xl font-bold mb-1">ISO</h5>
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest">9001:2015 Registered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
