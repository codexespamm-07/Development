import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Destinations } from "./components/Destinations";
import { Rooms } from "./components/Rooms";
import { Stats } from "./components/Stats";
import { Gallery } from "./components/Gallery";
import { VideoStory } from "./components/VideoStory";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { BlogNews } from "./components/BlogNews";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { BookingDetails, Room } from "./types";
import { CheckCircle2, MessageSquare, X, Sparkles, Send, Award } from "lucide-react";

export default function App() {
  const [lastBookingQuery, setLastBookingQuery] = useState<BookingDetails | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [selectedInquiryRoom, setSelectedInquiryRoom] = useState<Room | null>(null);

  // Scroll to booking widget from Navbar / other components
  const scrollToBookingWidget = () => {
    const element = document.getElementById("home");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      // Try to focus the date input inside the booking widget
      const checkInInput = document.querySelector("input[type='date']");
      if (checkInInput) {
        setTimeout(() => {
          (checkInInput as HTMLInputElement).focus();
        }, 800);
      }
    }
  };

  // Scroll to Rooms section
  const scrollToRoomsSection = () => {
    const element = document.getElementById("rooms");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // Scroll to destinations or services section
  const scrollToDestinationsSection = () => {
    const element = document.getElementById("destinations");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const handleCheckAvailability = (details: BookingDetails) => {
    setLastBookingQuery(details);
    showNotification(
      `Special Rate Query Registered: ${details.rooms} room(s) for ${details.adults} adult(s) from ${details.checkIn} to ${details.checkOut}.`
    );
  };

  const handleBookRoom = (room: Room) => {
    setSelectedInquiryRoom(room);
    setShowInquiryModal(true);
  };

  const handleInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const guestName = formData.get("guestName") as string;
    
    setShowInquiryModal(false);
    showNotification(
      `Thank you, ${guestName}! Your booking request for the luxury "${selectedInquiryRoom?.name}" has been registered. Our heritage curator Sundaram Raghavan will contact you within 2 hours.`
    );
    setSelectedInquiryRoom(null);
  };

  const showNotification = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 8000);
  };

  // Setup simple scroll reveal observer for nice smooth entrances requested by the user
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal-on-scroll");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => revealEls.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen bg-[#F7FAFC] font-sans antialiased text-gray-800 selection:bg-accent selection:text-primary relative">
      
      {/* Dynamic Success Notification Bar (floating) */}
      {successMessage && (
        <div className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 max-w-md bg-primary border-2 border-accent rounded-2xl shadow-2xl p-5 z-50 text-white animate-slide-up">
          <div className="flex items-start gap-4 text-left">
            <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1.5 flex-grow">
              <h4 className="font-serif text-base font-bold text-accent flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Inquiry Confirmed
              </h4>
              <p className="text-xs text-white/90 leading-relaxed font-normal">
                {successMessage}
              </p>
            </div>
            <button
              onClick={() => setSuccessMessage(null)}
              className="text-white/60 hover:text-white shrink-0 focus:outline-none"
              aria-label="Close message"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Assistance Button (standard boutique hotel touch) */}
      <a
        href="https://wa.me/1234567890?text=Hello,%20I%20am%20interested%20in%20booking%20a%20sanctuary%20stay%20at%20Saravana%20Residency."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-2xl z-40 transition-transform hover:scale-110 group focus:outline-none"
        aria-label="Contact Concierge on WhatsApp"
        id="whatsapp-float-btn"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-6 transition-transform" />
        <span className="absolute right-16 bg-primary border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
          Chat With Concierge
        </span>
      </a>

      {/* Sticky Navbar */}
      <Navbar onBookClick={scrollToBookingWidget} />

      {/* Hero Section with reservation card */}
      <Hero
        onCheckAvailability={handleCheckAvailability}
        onExploreRooms={scrollToRoomsSection}
        onExploreServices={scrollToDestinationsSection}
      />

      {/* Welcome / About Us Section */}
      <div className="reveal-on-scroll">
        <About />
      </div>

      {/* Rooms and Accommodations Section */}
      <div className="reveal-on-scroll">
        <Rooms onBookRoom={handleBookRoom} />
      </div>

      {/* Destinations / Highlights Section */}
      <div className="reveal-on-scroll">
        <Destinations />
      </div>

      {/* Stats counter Section */}
      <Stats />

      {/* Gallery Section */}
      <div className="reveal-on-scroll">
        <Gallery />
      </div>

      {/* Video Story Section */}
      <div className="reveal-on-scroll">
        <VideoStory />
      </div>

      {/* Team / Guardians Section */}
      <div className="reveal-on-scroll">
        <Team />
      </div>

      {/* Testimonials Carousel Section */}
      <Testimonials />

      {/* Blog & Chronicles Section */}
      <div className="reveal-on-scroll">
        <BlogNews />
      </div>

      {/* Newsletter signup Section */}
      <Newsletter />

      {/* Footer & Contacts */}
      <Footer />

      {/* Interactive Booking Inquiry Form Overlay */}
      {showInquiryModal && selectedInquiryRoom && (
        <div className="fixed inset-0 bg-[#0B4F6C]/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="glass-light rounded-[16px] overflow-hidden max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-scale-up">
            
            {/* Close */}
            <button
              onClick={() => setShowInquiryModal(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 focus:outline-none"
              aria-label="Close form"
              id="close-inquiry-modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title banner */}
            <div className="bg-primary text-white p-6 text-left relative">
              <div className="absolute inset-0 peacock-pattern pointer-events-none opacity-5" />
              <div className="inline-flex items-center gap-1.5 text-accent text-xs font-bold uppercase tracking-widest mb-1.5">
                <Award className="w-4 h-4" />
                <span>Selected Sanctuary Suite</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                {selectedInquiryRoom.name}
              </h3>
              <p className="text-white/75 text-xs mt-1">
                Rates starting from <strong className="text-accent">${selectedInquiryRoom.price} /Person</strong> with premium breakfast.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleInquirySubmit} className="p-6 sm:p-8 text-left space-y-4">
              
              <div className="grid grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5 col-span-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="guestName"
                    placeholder="Sundaram Iyer"
                    className="w-full bg-white/45 hover:bg-white/65 border border-white/60 focus:border-accent focus:bg-white rounded-xl py-3 px-4 text-sm font-semibold text-gray-700 outline-none transition-colors shadow-sm"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="guestEmail"
                    placeholder="guest@domain.com"
                    className="w-full bg-white/45 hover:bg-white/65 border border-white/60 focus:border-accent focus:bg-white rounded-xl py-3 px-4 text-sm font-semibold text-gray-700 outline-none transition-colors shadow-sm"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="guestPhone"
                    placeholder="+91 98765 43210"
                    className="w-full bg-white/45 hover:bg-white/65 border border-white/60 focus:border-accent focus:bg-white rounded-xl py-3 px-4 text-sm font-semibold text-gray-700 outline-none transition-colors shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Special instructions */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  Dietary / Wellness Preferences (Optional)
                </label>
                <textarea
                  name="preferences"
                  rows={2}
                  placeholder="e.g., Traditional Ayurvedic vegan diet, extra dhyana yoga mats, soft pillow choice..."
                  className="w-full bg-white/45 hover:bg-white/65 border border-white/60 focus:border-accent focus:bg-white rounded-xl py-3 px-4 text-sm font-semibold text-gray-700 outline-none transition-colors resize-none shadow-sm"
                />
              </div>

              {/* Terms Warning */}
              <p className="text-[10px] text-gray-400 italic leading-normal">
                * Note: Your details are encrypted. No prepayment is required for this inquiry. Our reservations team will contact you directly to confirm bedding layout and flight arrangements.
              </p>

              {/* CTA */}
              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowInquiryModal(false)}
                  className="w-1/3 glass-btn-primary py-3.5 rounded-[12px] text-xs uppercase tracking-wider"
                >
                  Cancel
                </button>
                
                <button
                  type="submit"
                  className="w-2/3 glass-btn-accent font-bold py-3.5 px-4 rounded-[12px] text-xs uppercase tracking-widest flex items-center justify-center gap-2 group"
                  id="submit-inquiry-cta"
                >
                  <span>Submit Booking Request</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
