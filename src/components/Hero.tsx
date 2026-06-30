import React, { useState } from "react";
import { Calendar as CalendarIcon, Users, ChevronDown, Check, Sparkles } from "lucide-react";
import { BookingDetails } from "../types";
import { MajesticPeacock } from "./PeacockIcons";
import logo from "../assets/images/residency_logo_1782826761564.jpg";

interface HeroProps {
  onCheckAvailability: (details: BookingDetails) => void;
  onExploreRooms: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onCheckAvailability,
  onExploreRooms,
  onExploreServices,
}) => {
  // Use dates aligned with user metadata (June 30, 2026)
  const [booking, setBooking] = useState<BookingDetails>({
    checkIn: "2026-06-30",
    checkOut: "2026-07-05",
    rooms: 1,
    adults: 2,
    children: 0,
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability(booking);
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 5000);
  };

  return (
    <header className="relative min-h-screen pt-20 flex flex-col justify-between overflow-hidden" id="home">
      {/* Hero Background with Temple Blue overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1920&q=85"
          alt="Saravana Residency Luxury Resort and Pool at sunset"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-[#F7FAFC]" />
      </div>

      {/* Jewel-toned subtle peacock emblem in top right background */}
      <div className="absolute top-24 right-0 lg:right-10 opacity-15 lg:opacity-20 pointer-events-none z-10 hidden sm:block">
        <MajesticPeacock size={300} className="text-accent animate-pulse-slow" />
      </div>

      {/* Main content layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center pt-16 pb-12 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Headline and CTAs (Left side on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent font-medium text-xs tracking-widest uppercase mb-2">
              <img src={logo} alt="DSM logo" className="w-5 h-5 rounded-full object-cover border border-accent/50" />
              <span>A Celestial South Indian Paradise</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-light tracking-wide leading-tight">
              Serene Retreat at <br />
              <span className="text-accent relative inline-block">
                Sri Saravana Residency
                <svg className="absolute left-0 bottom-1 w-full h-2 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 0 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-text-light/85 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Immerse yourself in authentic luxury, where traditional Temple Architecture meets premium hospitality. Rejuvenate with specialized Ayurveda treatments, divine South Indian imperial dining, and a peaceful private pool sanctuary.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onExploreRooms}
                className="glass-btn-light px-8 py-3.5 rounded-[12px] font-bold uppercase text-xs tracking-wider"
                id="hero-explore-rooms"
              >
                Explore Rooms
              </button>
              <button
                onClick={onExploreServices}
                className="glass-btn-accent px-8 py-3.5 rounded-[12px] font-bold uppercase text-xs tracking-wider"
                id="hero-our-services"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Majestic Peacock corner graphic overlay at mobile screen */}
          <div className="absolute bottom-6 right-4 block sm:hidden opacity-30 z-0 pointer-events-none">
            <MajesticPeacock size={120} />
          </div>
        </div>
      </div>

      {/* Floating White Booking Card Widget (Below the hero section context, centered on page) */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8 lg:-mb-16 transform translate-y-0 lg:translate-y-8">
        <div className="glass-light rounded-[16px] shadow-2xl p-6 sm:p-8 relative">
          
          {/* Subtle peacock feather corner stamp */}
          <div className="absolute right-0 top-0 w-24 h-24 overflow-hidden rounded-tr-2xl pointer-events-none opacity-10 hidden md:block">
            <div className="rotate-45 translate-x-4 -translate-y-4">
              <MajesticPeacock size={100} />
            </div>
          </div>

          <h3 className="font-serif text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
            Reserve Your Haven of Peace
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
            {/* Check-In */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                Check-In Date
              </label>
              <div className="relative">
                <CalendarIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-accent w-4.5 h-4.5" />
                <input
                  type="date"
                  value={booking.checkIn}
                  onChange={(e) => setBooking({ ...booking, checkIn: e.target.value })}
                  min="2026-06-30"
                  className="w-full bg-white/45 hover:bg-white/65 border border-white/60 focus:border-accent focus:bg-white rounded-xl py-3 pl-11 pr-3 text-sm font-semibold text-gray-700 outline-none transition-colors shadow-sm"
                  required
                />
              </div>
            </div>

            {/* Check-Out */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                Check-Out Date
              </label>
              <div className="relative">
                <CalendarIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-accent w-4.5 h-4.5" />
                <input
                  type="date"
                  value={booking.checkOut}
                  onChange={(e) => setBooking({ ...booking, checkOut: e.target.value })}
                  min={booking.checkIn || "2026-06-30"}
                  className="w-full bg-white/45 hover:bg-white/65 border border-white/60 focus:border-accent focus:bg-white rounded-xl py-3 pl-11 pr-3 text-sm font-semibold text-gray-700 outline-none transition-colors shadow-sm"
                  required
                />
              </div>
            </div>

            {/* Rooms Dropdown */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                Rooms
              </label>
              <div className="relative">
                <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 text-accent w-4.5 h-4.5" />
                <select
                  value={booking.rooms}
                  onChange={(e) => setBooking({ ...booking, rooms: Number(e.target.value) })}
                  className="w-full bg-white/45 hover:bg-white/65 border border-white/60 focus:border-accent focus:bg-white rounded-xl py-3 pl-11 pr-8 text-sm font-semibold text-gray-700 outline-none transition-colors appearance-none shadow-sm"
                >
                  <option value={1}>1 Sanctuary Room</option>
                  <option value={2}>2 Rooms</option>
                  <option value={3}>3+ Rooms</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Adults */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                Adults
              </label>
              <div className="relative">
                <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 text-accent w-4.5 h-4.5" />
                <select
                  value={booking.adults}
                  onChange={(e) => setBooking({ ...booking, adults: Number(e.target.value) })}
                  className="w-full bg-white/45 hover:bg-white/65 border border-white/60 focus:border-accent focus:bg-white rounded-xl py-3 pl-11 pr-8 text-sm font-semibold text-gray-700 outline-none transition-colors appearance-none shadow-sm"
                >
                  <option value={1}>1 Adult</option>
                  <option value={2}>2 Adults</option>
                  <option value={3}>3 Adults</option>
                  <option value={4}>4 Adults</option>
                  <option value={5}>5+ Adults</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Children */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                Children
              </label>
              <div className="relative">
                <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 text-accent w-4.5 h-4.5" />
                <select
                  value={booking.children}
                  onChange={(e) => setBooking({ ...booking, children: Number(e.target.value) })}
                  className="w-full bg-white/45 hover:bg-white/65 border border-white/60 focus:border-accent focus:bg-white rounded-xl py-3 pl-11 pr-8 text-sm font-semibold text-gray-700 outline-none transition-colors appearance-none shadow-sm"
                >
                  <option value={0}>0 Children</option>
                  <option value={1}>1 Child</option>
                  <option value={2}>2 Children</option>
                  <option value={3}>3+ Children</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full glass-btn-accent font-bold py-3.5 px-4 rounded-[12px] text-xs uppercase tracking-widest"
                id="hero-check-availability"
              >
                Check Rates
              </button>
            </div>
          </form>

          {/* Booking notification feedback */}
          {bookingSuccess && (
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-2 text-sm justify-center animate-fade-in">
              <Check className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Rooms available for <strong>{booking.adults} adults</strong>, check-in <strong>{booking.checkIn}</strong> to <strong>{booking.checkOut}</strong>! Special heritage discount applied.
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
