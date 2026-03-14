import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo and About */}
          <div>
            <Link href="#" className="flex items-center mb-6">
              <div className="relative w-36 h-20">
                <Image
                  src="/amco-logo.jpg"
                  alt="AMCO Valves Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Precision engineered valve solutions for the global energy and industrial sectors. Quality and reliability at the core of everything we do.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, idx) => (
                <Link key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
                  <Icon className="size-[22px] md:size-[18px]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link href="#about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="#products" className="hover:text-secondary transition-colors">Products</Link></li>
              <li><Link href="#certificates" className="hover:text-secondary transition-colors">Certifications</Link></li>
              <li><Link href="#gallery" className="hover:text-secondary transition-colors">Image Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Legal</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Compliance</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-5 text-white/60 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-secondary shrink-0 size-[22px] md:size-[18px]" />
                <span>
                  <strong>Factory:</strong><br />
                  638/A Tiruvottriyur high road, Ajax, Chennai, 600019
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin className="text-secondary shrink-0 size-[22px] md:size-[18px]" />
                <span>
                  <strong>Warehouse:</strong><br />
                  104-A East Mada church street, Royapuram, Chennai, 600013
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-secondary shrink-0 size-[22px] md:size-[18px]" />
                <span>91-9841114671</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-secondary shrink-0 size-[22px] md:size-[18px]" />
                <Link href="mailto:contact@amcovalves.com" className="hover:text-secondary transition-colors">
                  contact@amcovalves.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-[15px]">
          <p>© {new Date().getFullYear()} AMCO Valves. All Rights Reserved. Engineered for excellence.</p>
        </div>
      </div>
    </footer>
  );
}
