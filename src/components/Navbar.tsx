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

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

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
              "p-2 rounded-xl transition-all duration-500 ease-in-out text-primary",
              scrolled 
                ? "bg-primary/5" 
                : "bg-white shadow-md border-white/20 border"
            )}
            onClick={() => setIsOpen(true)}
          >
            <Menu className="size-9" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Content */}
      <div
        className={cn(
          "fixed top-0 right-0 w-[80vw] h-full bg-white z-[70] md:hidden transition-transform duration-500 ease-in-out shadow-2xl flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header with Logo and Close */}
        <div className="p-6 flex items-center justify-between border-b border-border">
          <div className="relative w-24 h-12">
            <Image
              src="/amco-logo.jpg"
              alt="AMCO Valves Logo"
              fill
              className="object-contain"
            />
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-primary p-2"
          >
            <X className="size-8" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-8 py-5 text-xl font-bold text-primary uppercase border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Footer in Drawer */}
        <div className="mt-auto p-8 border-t border-border">
          <Button variant="secondary" size="lg" className="w-full rounded-xl font-bold uppercase tracking-wider" asChild onClick={() => setIsOpen(false)}>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
