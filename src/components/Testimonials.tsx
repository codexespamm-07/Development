import React, { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Quote, ChevronLeft, ChevronRight, Star, Heart } from "lucide-react";
import { PeacockFeather } from "./PeacockIcons";

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx(activeIdx === 0 ? TESTIMONIALS.length - 1 : activeIdx - 1);
  };

  const handleNext = () => {
    setActiveIdx(activeIdx === TESTIMONIALS.length - 1 ? 0 : activeIdx + 1);
  };

  const activeReview = TESTIMONIALS[activeIdx];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden border-y border-accent/20" id="testimonials">
      {/* Background low-opacity peacock feather pattern */}
      <div className="absolute inset-0 peacock-pattern pointer-events-none opacity-5" />

      {/* Floaters */}
      <div className="absolute top-12 left-10 opacity-10 pointer-events-none hidden lg:block">
        <PeacockFeather size={120} />
      </div>
      <div className="absolute bottom-12 right-10 opacity-10 pointer-events-none -scale-x-100 hidden lg:block">
        <PeacockFeather size={120} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Quote Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 border border-accent text-accent mb-8 animate-pulse-slow">
          <Quote className="w-8 h-8 fill-accent" />
        </div>

        {/* Testimonial Carousel Frame */}
        <div className="relative min-h-[250px] sm:min-h-[200px] flex items-center justify-center">
          <div className="space-y-6 animate-fade-in" key={activeReview.id}>
            
            {/* Stars rating */}
            <div className="flex justify-center items-center gap-1">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Testimonial Quote Text */}
            <blockquote className="font-serif text-lg sm:text-2xl font-medium italic text-text-light/95 leading-relaxed max-w-3xl mx-auto">
              "{activeReview.comment}"
            </blockquote>

            {/* Guest details */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <img
                src={activeReview.image}
                alt={activeReview.name}
                className="w-16 h-16 rounded-full border-2 border-accent object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
              <div className="text-center sm:text-left">
                <h4 className="font-serif text-lg font-bold text-accent">
                  {activeReview.name}
                </h4>
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-white/75 mt-0.5">
                  <span>{activeReview.role}</span>
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  <span className="flex items-center gap-1 font-mono text-[10px] text-accent font-semibold uppercase">
                    <Heart className="w-3 h-3 text-accent fill-accent" /> Stayed {activeReview.stayDate}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          {/* Left arrow */}
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full glass-btn-accent flex items-center justify-center focus:outline-none hover:scale-110"
            aria-label="Previous Testimonial"
            id="prev-testimonial-btn"
          >
            <ChevronLeft className="w-5 h-5 text-accent" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIdx === i ? "bg-accent w-8" : "bg-white/30 w-2.5"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full glass-btn-accent flex items-center justify-center focus:outline-none hover:scale-110"
            aria-label="Next Testimonial"
            id="next-testimonial-btn"
          >
            <ChevronRight className="w-5 h-5 text-accent" />
          </button>
        </div>

      </div>
    </section>
  );
};
