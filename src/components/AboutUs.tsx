import { CheckCircle2, Factory, History, ShieldCheck, Globe } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Globe size={14} />
              About AMCO Valves
            </div>
            <h3 className="text-[52px] font-bold text-primary leading-[1.1]">
              Trusted by Industry <span className="text-secondary block">Since 1986</span>
            </h3>
          </div>
          <div className="lg:text-right">
            <p className="text-xl text-foreground/50 leading-relaxed max-w-xl ml-auto">
              Manufacturers of <span className="font-bold text-primary">AMCO™</span> brand Industrial & Instrumentation Valves, recognized as the most reliable single-point source for versatile valve requirements.
            </p>
          </div>
        </div>

        {/* Detailed Grid Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-20">
          <div className="space-y-8">
            <div className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/10">
              <h4 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Factory className="text-secondary" size={28} />
                Industry Applications
              </h4>
              <p className="text-foreground/70 leading-relaxed">
                We manufacture quality valves for a wide spectrum of users in Process & Chemical, Refineries, Fertilizers, Pharma, Thermal & Nuclear Power, Textiles, Sugar, Steel, Food & Oil, and Water Treatment industries. From Sewage to LPG Bottling and Offshore platforms, our reach is comprehensive.
              </p>
            </div>
            
            <div className="p-10 rounded-[2.5rem] bg-white border border-border shadow-sm">
              <h4 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <History className="text-secondary" size={28} />
                Technical Evolution
              </h4>
              <p className="text-foreground/70 leading-relaxed">
                From a modest beginning in 1986, we have made rapid strides in technology and stature. Managed by qualified personnel with extensive experience, we are recognized as a reliable single-point source for versatile industrial valve requirements.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-10 rounded-[2.5rem] bg-white border border-border shadow-sm">
              <h4 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <ShieldCheck className="text-secondary" size={28} />
                Quality Assurance
              </h4>
              <p className="text-foreground/70 leading-relaxed">
                Using quality raw materials from reputed foundries, we employ a Statistical Quality Assurance system with inspection at every stage. We have adequate capacity to undertake large volume orders with committed deliveries and consistent quality.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-secondary/5 border border-secondary/10">
              <h4 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <CheckCircle2 className="text-secondary" size={28} />
                Exacting Standards
              </h4>
              <p className="text-foreground/70 leading-relaxed">
                Whether for planned project installations or contingent maintenance replacements, we gear ourselves up to exacting requirements. Marginal stocks of standard sizes are maintained to ensure supply well within time.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center p-14 bg-primary rounded-[35px] text-white shadow-2xl">
          <h4 className="text-3xl md:text-4xl font-bold mb-6">
            At AMCO, you do not have to pay a premium for Quality.
          </h4>
          <p className="text-white/40 text-lg">Engineered for Excellence since 1986. Delivered with Integrity.</p>
        </div>
      </div>
    </section>
  );
}
