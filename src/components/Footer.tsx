
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-40 h-40">
                <Image
                  src="/amco-logo.jpg"
                  alt="AMCO Valves Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-white/60 max-w-sm mb-6">
              Precision engineered valve solutions for the global energy and industrial sectors. Quality and reliability at the core of everything we do.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, idx) => (
                <Link key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link href="#about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="#products" className="hover:text-secondary transition-colors">Products</Link></li>
              <li><Link href="#certificates" className="hover:text-secondary transition-colors">Certifications</Link></li>
              <li><Link href="#gallery" className="hover:text-secondary transition-colors">Image Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Compliance</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-xs">
          <p>© {new Date().getFullYear()} AMCO Valves. All Rights Reserved. Engineered for excellence.</p>
        </div>
      </div>
    </footer>
  );
}
