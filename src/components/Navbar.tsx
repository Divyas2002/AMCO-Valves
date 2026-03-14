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
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out px-4 md:px-12 border-b",
          scrolled 
            ? "py-2 md:py-3 bg-white/95 backdrop-blur-md shadow-md border-border" 
            : "py-4 md:py-6 bg-transparent border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Container */}
          <Link href="/" className="flex items-center group">
            <div className={cn(
              "relative transition-all duration-500",
              "w-[140px] h-[70px] md:w-28 md:h-14"
            )}>
              <Image
                src="/amco-logo.jpg"
                alt="AMCO Valves Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Container */}
          <div className={cn(
            "hidden md:flex items-center gap-8 transition-all duration-300",
            scrolled 
              ? "bg-transparent shadow-none" 
              : "bg-white px-8 py-3 rounded-2xl shadow-lg border border-white/20"
          )}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[16px] font-bold text-primary transition-colors hover:text-secondary whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="secondary" size="sm" className="rounded-xl font-bold px-6 h-10 text-[16px]" asChild>
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              className={cn(
                "p-2 rounded-xl transition-all duration-300 text-primary",
                scrolled 
                  ? "bg-primary/5" 
                  : "bg-white shadow-md border-white/20 border"
              )}
              onClick={() => setIsOpen(true)}
            >
              <Menu className="size-8" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay System */}
      <div
        className={cn(
          "fixed inset-0 z-[100] md:hidden transition-all duration-500",
          isOpen ? "visible" : "invisible"
        )}
      >
        {/* Backdrop - Opaque with blur */}
        <div
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer Content - Solid White Background */}
        <div
          className={cn(
            "absolute top-0 right-0 w-[80vw] max-w-[320px] h-full bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Drawer Header */}
          <div className="p-6 flex items-center justify-between border-b border-border bg-white sticky top-0 z-10">
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
              className="text-primary p-2 hover:bg-muted rounded-full transition-colors"
            >
              <X className="size-8" />
            </button>
          </div>

          {/* Scrollable Link List */}
          <div className="flex-1 overflow-y-auto py-4 bg-white">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-5 text-xl font-bold text-primary uppercase border-b border-border/50 hover:bg-muted/50 transition-all flex items-center justify-between group"
                >
                  {link.name}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-secondary">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-8 border-t border-border bg-white mt-auto">
            <Button variant="secondary" size="lg" className="w-full h-14 rounded-xl font-bold uppercase tracking-wider shadow-lg" asChild onClick={() => setIsOpen(false)}>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}