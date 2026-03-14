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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700 ease-in-out px-4 md:px-12 border-b",
        scrolled 
          ? "py-2 md:py-3 bg-white/95 backdrop-blur-md shadow-md border-border" 
          : "py-4 md:py-6 bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Container */}
        <div className="transition-all duration-500 ease-in-out">
          <Link href="/" className="flex items-center group">
            <div className="relative w-20 h-10 md:w-28 md:h-14 transition-transform group-hover:scale-105">
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
        <div className={cn(
          "hidden md:flex items-center gap-8 transition-all duration-700 ease-in-out",
          scrolled 
            ? "bg-transparent shadow-none border-transparent px-0 py-0 rounded-none" 
            : "bg-white px-8 py-3 rounded-2xl rounded-bl-[40px] shadow-lg border border-white/20"
        )}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[16px] font-extrabold text-primary transition-colors hover:text-secondary whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="secondary" size="sm" className="rounded-xl font-extrabold px-6 h-10 text-[16px]" asChild>
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            className={cn(
              "p-2 rounded-xl transition-all duration-500 ease-in-out text-primary border",
              scrolled 
                ? "bg-primary/5 border-transparent" 
                : "bg-white shadow-md border-white/20"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-9" /> : <Menu className="size-9" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 bg-primary z-40 md:hidden transition-transform duration-500 ease-in-out flex flex-col items-center justify-center gap-6",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white p-2"
        >
          <X className="size-10" />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-xl font-extrabold text-white/90 hover:text-secondary"
          >
            {link.name}
          </Link>
        ))}
        <Button variant="secondary" size="lg" asChild className="mt-4 rounded-xl font-extrabold" onClick={() => setIsOpen(false)}>
          <Link href="#contact">Contact Us</Link>
        </Button>
      </div>
    </nav>
  );
}
