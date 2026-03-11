import { CheckCircle2, Award, Users, Globe } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Our Legacy</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Leading Manufacturer of Industrial Ball Valves
          </h3>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Founded with a vision to redefine industrial flow control, AMCO Valves has established itself as a premier manufacturer of high-performance ball valves. Our state-of-the-art manufacturing facility combines traditional craftsmanship with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Award className="text-secondary" size={40} />,
              title: "Quality Assured",
              desc: "Every valve undergoes rigorous high-pressure testing and quality checks before dispatch."
            },
            {
              icon: <Users className="text-secondary" size={40} />,
              title: "Expert Team",
              desc: "Our engineers possess decades of experience in valve design and metallurgy."
            },
            {
              icon: <Globe className="text-secondary" size={40} />,
              title: "Global Reach",
              desc: "Supplying precision-engineered valves to oil, gas, and power industries worldwide."
            },
            {
              icon: <CheckCircle2 className="text-secondary" size={40} />,
              title: "Certified Solutions",
              desc: "Compliant with international standards including ISO, API, and CE certifications."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-background border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
              <p className="text-foreground/60 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
