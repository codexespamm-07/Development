import React, { useState } from "react";
import { GALLERY_IMAGES } from "../data";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles } from "lucide-react";
import { PeacockDivider, PeacockFeather } from "./PeacockIcons";

export const Gallery: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx(activeIdx === 0 ? GALLERY_IMAGES.length - 1 : activeIdx - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx(activeIdx === GALLERY_IMAGES.length - 1 ? 0 : activeIdx + 1);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="gallery">
      {/* Subtle background texture */}
      <div className="absolute inset-0 peacock-pattern pointer-events-none opacity-5" />

      {/* Embedded peacock feathers floating behind headers */}
      <div className="absolute top-12 left-10 opacity-10 pointer-events-none -scale-x-100 hidden lg:block">
        <PeacockFeather size={80} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-accent bg-accent/10 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Visual Pleasures</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary">
            Peacock Gallery of Marvels
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto leading-relaxed">
            Take a visual walk through our serene hallways, crystal waters, therapeutic massage chambers, and traditional stone courtyards.
          </p>
        </div>

        {/* Gallery Masonry Grid - Styled with Peacock feather frame borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setActiveIdx(idx)}
              className="cursor-pointer group relative p-2 bg-gradient-to-tr from-accent/40 via-accent/10 to-accent/40 rounded-2xl hover:shadow-2xl hover:shadow-accent/25 transition-all duration-500"
              id={`gallery-thumb-${img.id}`}
            >
              {/* Inner picture container with frame borders */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-primary">
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Translucent overlay with peacock feather icon on hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                  <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent mb-3 animate-bounce">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <p className="font-serif text-white font-semibold text-sm leading-snug">
                    {img.caption}
                  </p>
                  <span className="text-[10px] text-accent uppercase font-bold tracking-widest mt-2 block">
                    Click to Enlarge
                  </span>
                </div>
              </div>

              {/* Decorative corner accent only visible on hover/glow */}
              <div className="absolute top-4 right-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <svg className="w-6 h-6 rotate-45" viewBox="0 0 100 100" fill="none">
                  <path d="M50 10 C30 10, 25 45, 50 85 C75 45, 70 10, 50 10 Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {activeIdx !== null && (
        <div
          onClick={() => setActiveIdx(null)}
          className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-between items-center py-6 px-4 select-none animate-fade-in"
          id="gallery-lightbox"
        >
          {/* Top Bar with Caption & Close */}
          <div className="w-full max-w-5xl flex justify-between items-center text-white z-10 border-b border-white/10 pb-4">
            <div className="text-left">
              <span className="text-xs text-accent font-bold uppercase tracking-widest block mb-1">
                Saravana Gallery · 0{activeIdx + 1} / 0{GALLERY_IMAGES.length}
              </span>
              <h4 className="font-serif text-sm sm:text-lg font-semibold text-white/90">
                {GALLERY_IMAGES[activeIdx].caption}
              </h4>
            </div>
            
            <button
              onClick={() => setActiveIdx(null)}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-colors focus:outline-none"
              aria-label="Close Lightbox"
              id="close-lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Central Image and Arrows Container */}
          <div className="relative w-full max-w-5xl h-[60vh] flex items-center justify-center my-4">
            {/* Left navigation arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-12 z-10 bg-white/10 hover:bg-white/20 hover:text-accent text-white p-3 rounded-full transition-all focus:outline-none"
              aria-label="Previous Image"
              id="prev-image-btn"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Picture inside Lightbox */}
            <img
              src={GALLERY_IMAGES[activeIdx].url}
              alt={GALLERY_IMAGES[activeIdx].caption}
              className="max-h-full max-w-full object-contain rounded-xl border-2 border-accent/40 shadow-2xl animate-scale-up"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />

            {/* Right navigation arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-12 z-10 bg-white/10 hover:bg-white/20 hover:text-accent text-white p-3 rounded-full transition-all focus:outline-none"
              aria-label="Next Image"
              id="next-image-btn"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Indicators */}
          <div className="flex gap-2.5 z-10">
            {GALLERY_IMAGES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx(dotIdx);
                }}
                className={`h-2 rounded-full transition-all ${
                  activeIdx === dotIdx ? "bg-accent w-6" : "bg-white/30 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Elegant Separator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <PeacockDivider color="#C8A24A" />
      </div>
    </section>
  );
};
