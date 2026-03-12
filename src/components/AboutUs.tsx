import { CheckCircle2, Factory, History, ShieldCheck } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-secondary font-bold text-sm uppercase tracking-widest mb-3">Our Legacy</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-8">
            Manufacturers of “AMCO™” brand Valves Since 1986
          </h3>
          <p className="text-lg text-foreground/70 leading-relaxed mb-6">
            We are Manufacturers of “AMCO™” brand Low pressure & High pressure IBR & Non IBR Industrial & Instrumentation Valves in the small sector ever since 1986.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
              <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Factory className="text-secondary" size={24} />
                Versatile Industry Applications
              </h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                We Manufacture Quality Valves of almost all types for a wide spectrum of users in the Process & Chemical, Refineries & Petrochemicals, Fertilizers, Drugs & Pharmaceuticals, Thermal Power Stations, Nuclear & Atomic Power Stations, Textiles, Dyes & Intermediates, Paints & Varnishes, Sugar, Breweries & Distilleries, Soaps & Detergents, Steel Plants, Food & Oil Industry, Solvent Extraction Plants, Sewage, Effluent & Water Treatment, Cooling Water, Ship Yards and Marine Management, Water Works, Pulp & Paper, LPG Bottling Plants, Onshore & Offshore platforms, Slurry & Ash handling.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl bg-white border border-border shadow-sm">
              <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <History className="text-secondary" size={24} />
                Rapid Strides in Technology
              </h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Our Unit is managed by a team of qualified personnel with extensive experience in the field. From a modest beginning in 1986, we have since made rapid strides in technology and statute and are today recognized by our esteemed customers as the most reliable single point source for their versatile requirement of Valves. Their sustained support bears ample testimony for the confidence reposed in us.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-border shadow-sm">
              <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <ShieldCheck className="text-secondary" size={24} />
                Quality Assurance System
              </h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                We use Quality Raw Materials (Castings & Forgings) from reputed foundries/forge shops and we have Statistical Quality Assurance system with inspection at every stage of Manufacture to ensure sustained quality in our supplies. We have adequate capacity in terms of expertise and finance and are in a position to undertake large volume of orders with committed deliveries.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-secondary/10 border border-secondary/20">
              <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-secondary" size={24} />
                Exacting Requirements
              </h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Whether it be a well planned project installation or contingent maintenance replacement, we at AMCO gear ourselves up to our customers exacting requirements and supply well within time as Marginal stocks of standard sizes and ranges of valves are available with us.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center p-10 bg-primary rounded-[3rem] text-white">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">
            At AMCO, you do not have to pay a premium for Quality.
          </h4>
          <p className="text-white/60">Engineered for Excellence. Delivered with Integrity.</p>
        </div>
      </div>
    </section>
  );
}
