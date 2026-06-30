import React from "react";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, ExternalLink, Shield, Send } from "lucide-react";
import logo from "../assets/images/residency_logo_1782826761564.jpg";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleQuickScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const instagramImages = [
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1600100397608-f010e42edb84?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=150&q=80",
  ];

  return (
    <footer className="bg-primary text-white pt-20 pb-8 relative overflow-hidden text-left border-t border-accent/20" id="contact">
      {/* Subtle peacock background pattern */}
      <div className="absolute inset-0 peacock-pattern pointer-events-none opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
        
        {/* Column 1: Brand & Socials (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-12 h-12 rounded-full border border-accent overflow-hidden bg-primary flex items-center justify-center">
              <img
                src={logo}
                alt="DSM Sri Saravana Residency"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-white tracking-wide leading-none">
                Sri Saravana
              </span>
              <span className="text-[10px] text-accent font-sans uppercase tracking-[0.25em] font-medium">
                Residency • Devotion & Comfort
              </span>
            </div>
          </div>

          <p className="text-white/80 text-sm leading-relaxed max-w-sm">
            Nestled in the historical cradle of South India, Saravana Residency honors multi-generational architecture, holistic Ayurvedic wellness therapies, and imperial dining custom-tailored for discerning global travellers.
          </p>

          {/* Gold Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-accent/30 hover:border-accent bg-primary-dark text-accent hover:text-primary hover:bg-accent flex items-center justify-center transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-accent/30 hover:border-accent bg-primary-dark text-accent hover:text-primary hover:bg-accent flex items-center justify-center transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-accent/30 hover:border-accent bg-primary-dark text-accent hover:text-primary hover:bg-accent flex items-center justify-center transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-accent/30 hover:border-accent bg-primary-dark text-accent hover:text-primary hover:bg-accent flex items-center justify-center transition-all duration-300"
              aria-label="WhatsApp"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links (2.5 Cols) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-serif text-lg font-bold text-accent">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-sm text-white/85">
            <li>
              <a href="#home" onClick={(e) => handleQuickScroll(e, "#home")} className="hover:text-accent flex items-center gap-1 group">
                <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleQuickScroll(e, "#about")} className="hover:text-accent flex items-center gap-1 group">
                <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                About Us
              </a>
            </li>
            <li>
              <a href="#rooms" onClick={(e) => handleQuickScroll(e, "#rooms")} className="hover:text-accent flex items-center gap-1 group">
                <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                Luxury Suites
              </a>
            </li>
            <li>
              <a href="#destinations" onClick={(e) => handleQuickScroll(e, "#destinations")} className="hover:text-accent flex items-center gap-1 group">
                <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                Local Highlights
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={(e) => handleQuickScroll(e, "#gallery")} className="hover:text-accent flex items-center gap-1 group">
                <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                Visual Gallery
              </a>
            </li>
            <li>
              <a href="#blog" onClick={(e) => handleQuickScroll(e, "#blog")} className="hover:text-accent flex items-center gap-1 group">
                <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                Residency Chronicles
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info (3 Cols) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-serif text-lg font-bold text-accent">
            Residency Contact
          </h4>
          <ul className="space-y-3.5 text-sm text-white/90">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span>
                12A, Temple Car Street, <br />
                Near Brihadeeswarar Shrine, <br />
                Thanjavur, Tamil Nadu — 613001
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <a href="tel:+914362223456" className="hover:text-accent">
                +91 4362 223 456
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <a href="mailto:welcome@saravanaresidency.com" className="hover:text-accent">
                welcome@saravanaresidency.com
              </a>
            </li>
            <li className="flex items-center gap-2 text-xs text-accent font-semibold pt-1">
              <Shield className="w-4 h-4 shrink-0" />
              <span>Registered Heritage Property Grade A</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Instagram Grid (3 Cols) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-serif text-lg font-bold text-accent">
            Residency Feed
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {instagramImages.map((img, i) => (
              <a
                key={i}
                href="#"
                className="relative block rounded-lg overflow-hidden aspect-square border border-white/5 hover:border-accent transition-colors group"
              >
                <img
                  src={img}
                  alt={`Instagram photo ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </a>
            ))}
          </div>
          <p className="text-[10px] text-white/50 italic text-center">
            Tag #SaravanaResidency on Instagram
          </p>
        </div>

      </div>

      {/* Bottom Bar: Copyright & Payment Icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
        <div>
          <p>© {currentYear} Saravana Residency Private Limited. All Rights Reserved.</p>
          <p className="text-[10px] text-white/40 mt-1">
            Built under Grade A Architectural Restoration Scheme, Govt of Tamil Nadu.
          </p>
        </div>

        {/* Payment Icons */}
        <div className="flex items-center gap-3 bg-primary-dark/50 border border-white/10 px-4 py-2 rounded-xl">
          <span className="text-[10px] text-accent uppercase font-bold tracking-widest mr-1">
            Secure Payments
          </span>
          <div className="flex items-center gap-2 select-none">
            {/* Visa */}
            <span className="font-bold text-[10px] tracking-tighter text-blue-400 border border-blue-400/20 px-1.5 py-0.5 rounded bg-blue-950/40">
              VISA
            </span>
            {/* Mastercard */}
            <span className="font-bold text-[10px] tracking-tighter text-red-400 border border-red-400/20 px-1.5 py-0.5 rounded bg-red-950/40">
              MC
            </span>
            {/* Amex */}
            <span className="font-bold text-[10px] tracking-tighter text-amber-400 border border-amber-400/20 px-1.5 py-0.5 rounded bg-amber-950/40">
              AMEX
            </span>
            {/* UPI */}
            <span className="font-mono font-bold text-[10px] tracking-tighter text-emerald-400 border border-emerald-400/20 px-1.5 py-0.5 rounded bg-emerald-950/40">
              UPI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
