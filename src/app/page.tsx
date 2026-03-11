import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Products } from "@/components/Products";
import { Certificates } from "@/components/Certificates";
import { Gallery } from "@/components/Gallery";
import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";
import { AIAssistant } from "@/components/AIAssistant";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <Certificates />
      <Gallery />
      <ContactUs />
      <Footer />
      <AIAssistant />
      <Toaster />
    </main>
  );
}
