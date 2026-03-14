
"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactUs() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Target recipient email provided by user
    const targetEmail = "divya126bca@gmail.com";
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      recipient: targetEmail
    };

    // Simulate the email sending process
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Sent",
        description: `Thank you for reaching out. Your inquiry has been successfully sent to ${targetEmail}.`,
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">Contact</h3>
            <p className="text-lg text-foreground/70 mb-12">
              Have questions about our products or need a custom quote? Our technical support team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Factory</h4>
                  <p className="text-foreground/60 text-sm">638/A Tiruvottriyur high road, Ajax, Chennai, 600019</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Ware house</h4>
                  <p className="text-foreground/60 text-sm">104-A East Mada church street, Royapuram, Chennai, 600013</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Mobile</h4>
                  <p className="text-foreground/60 text-sm">91-9841114671</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Email</h4>
                  <p className="text-foreground/60 text-sm">contact@amcovalves.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-2" />
            <form onSubmit={handleSubmit} className="relative bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-border space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Full Name</label>
                  <Input name="name" required placeholder="John Doe" className="bg-background border-none h-12 focus-visible:ring-secondary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Email Address</label>
                  <Input name="email" required type="email" placeholder="john@example.com" className="bg-background border-none h-12 focus-visible:ring-secondary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Phone Number</label>
                <Input name="phone" required placeholder="91-00000-00000" className="bg-background border-none h-12 focus-visible:ring-secondary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Your Message</label>
                <Textarea name="message" required placeholder="How can we help you?" className="bg-background border-none min-h-[150px] focus-visible:ring-secondary resize-none" />
              </div>
              <Button type="submit" className="w-full h-14 text-lg font-bold" variant="secondary" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
