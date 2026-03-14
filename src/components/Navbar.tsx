"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Certificates", href: "#certificates" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-6 md:px-12",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-start justify-between">
        {/* Logo Container */}
        <div className="bg-white px-4 py-2 rounded-lg shadow-md transition-all duration-300">
          <Link href="/" className="flex items-center group">
            <div className="relative w-24 h-12 md:w-28 md:h-14 transition-transform group-hover:scale-105">
              <Image
                src="/amco-logo.jpg"
                alt="AMCO Valves Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Nav Container */}
        <div className="hidden md:flex items-center gap-8 bg-white px-8 py-3 rounded-2xl rounded-bl-[40px] shadow-lg border border-white/20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-primary/80 transition-colors hover:text-secondary whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="secondary" size="sm" className="rounded-xl font-bold px-6 h-10" asChild>
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            className="p-3 rounded-xl bg-white shadow-md text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 bg-primary z-40 md:hidden transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-8",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-white p-2"
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-white/90 hover:text-secondary"
          >
            {link.name}
          </Link>
        ))}
        <Button variant="secondary" size="lg" asChild className="mt-4 rounded-xl font-bold" onClick={() => setIsOpen(false)}>
          <Link href="#contact">Contact Us</Link>
        </Button>
      </div>
    </nav>
  );
}
