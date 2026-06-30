import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, Compass, Phone } from "lucide-react";
import logo from "../assets/images/residency_logo_1782826761564.jpg";

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Rooms", href: "#rooms" },
    { label: "Destinations & Services", href: "#destinations" },
    { label: "Gallery", href: "#gallery" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  // Track scroll position to add transparency/shadow or highlight link
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Highly optimized active section tracker using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: "-15% 0px -75% 0px", // triggers when section is in top area of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B4F6C]/85 backdrop-blur-md shadow-lg border-b border-accent/20 py-3"
          : "bg-[#0B4F6C]/70 backdrop-blur-md py-5 border-b border-white/5"
      }`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center gap-2.5 group"
            >
              {/* Gold peacock and vel luxury brand logo */}
              <div className="w-12 h-12 rounded-full border border-accent overflow-hidden bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                <img
                  src={logo}
                  alt="DSM Sri Saravana Residency"
                  className="w-full h-full object-cover animate-fade-in"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-2xl font-bold text-text-light tracking-wide leading-none">
                  Sri Saravana
                </span>
                <span className="text-[9px] sm:text-[10px] text-accent font-sans uppercase tracking-[0.1em] sm:tracking-[0.25em] font-medium block mt-1">
                  Residency • Devotion & Comfort
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 uppercase text-xs ${
                  activeSection === link.href.substring(1)
                    ? "text-accent font-semibold"
                    : "text-text-light/85 hover:text-accent"
                }`}
              >
                {link.label}
                {/* Underline Hover Effect */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent transform transition-transform duration-300 origin-left ${
                    activeSection === link.href.substring(1)
                      ? "scale-x-100"
                      : "scale-x-0 hover:scale-x-100"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onBookClick}
              className="flex items-center gap-2 glass-btn-accent font-bold px-6 py-2.5 rounded-[12px] text-sm uppercase tracking-wider group"
              id="nav-book-now-btn"
            >
              <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Book Now
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onBookClick}
              className="sm:hidden glass-btn-accent p-2 rounded-[10px]"
              aria-label="Book appointment"
            >
              <Calendar className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-light hover:text-accent p-2 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle menu"
              id="hamburger-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen border-t border-accent/20 bg-[#0B4F6C]/90 backdrop-blur-md" : "max-h-0"
        }`}
        id="mobile-nav-panel"
      >
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block px-3 py-3 rounded-md text-base font-medium tracking-wide uppercase text-sm ${
                activeSection === link.href.substring(1)
                  ? "bg-accent/15 text-accent border-l-4 border-accent"
                  : "text-text-light/90 hover:bg-accent/10 hover:text-accent"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-accent/15">
            <button
              onClick={() => {
                setIsOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center gap-2 glass-btn-accent font-bold px-4 py-3 rounded-[12px] text-sm uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4" />
              Book Your Sanctuary
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
