"use client";

import Image from "next/image";
import { Settings, Maximize, Layers, Gauge } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const products = [
  {
    id: "product-1pc",
    title: "1 Piece Ball Valve",
    specs: "Economical, Reduced Port",
    features: ["Compact Design", "Minimal Leakage Paths", "Blow-out Proof Stem"],
    image: PlaceHolderImages.find(img => img.id === "product-1pc")
  },
  {
    id: "product-2pc",
    title: "2 Piece Ball Valve",
    specs: "Full Port, Robust Construction",
    features: ["Two-part Body", "Easy Maintenance", "High Flow Capacity"],
    image: PlaceHolderImages.find(img => img.id === "product-2pc")
  },
  {
    id: "product-3pc",
    title: "3 Piece Ball Valve",
    specs: "Maintenance-Friendly Design",
    features: ["In-line Serviceable", "Swing-out Design", "Multiple Connection Options"],
    image: PlaceHolderImages.find(img => img.id === "product-3pc")
  }
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Product Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">Our Valve Solutions</h3>
          <p className="text-foreground/70">
            We specialize in a comprehensive range of Ball Valves designed to meet the most demanding industrial requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-none bg-white">
              <div className="relative h-64 overflow-hidden">
                {product.image && (
                  <Image
                    src={product.image.imageUrl}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={product.image.imageHint}
                  />
                )}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="px-3 py-1 font-bold">BALL VALVE</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">{product.title}</CardTitle>
                <p className="text-secondary font-medium text-sm">{product.specs}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/70 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-primary p-8 rounded-3xl text-white flex flex-col gap-4">
            <Maximize size={32} className="text-secondary" />
            <h4 className="text-lg font-bold">Configurations</h4>
            <p className="text-white/60 text-sm">1 Pc, 2 Pc, 3 Pc Designs</p>
          </div>
          <div className="bg-white p-8 rounded-3xl text-primary border border-border flex flex-col gap-4">
            <Layers size={32} className="text-secondary" />
            <h4 className="text-lg font-bold">Connections</h4>
            <p className="text-foreground/60 text-sm">Screwed, Socket Weld, Butt Weld, Flanged</p>
          </div>
          <div className="bg-white p-8 rounded-3xl text-primary border border-border flex flex-col gap-4">
            <Settings size={32} className="text-secondary" />
            <h4 className="text-lg font-bold">Seat Types</h4>
            <p className="text-foreground/60 text-sm">Soft & Metal Seat Options</p>
          </div>
          <div className="bg-white p-8 rounded-3xl text-primary border border-border flex flex-col gap-4">
            <Gauge size={32} className="text-secondary" />
            <h4 className="text-lg font-bold">Mounting</h4>
            <p className="text-foreground/60 text-sm">Floating & Trunnion Mounted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
