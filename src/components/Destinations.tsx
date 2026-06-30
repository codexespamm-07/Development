import React, { useState } from "react";
import { DESTINATIONS } from "../data";
import { ArrowRight, Compass, MapPin, X, Info } from "lucide-react";
import { PeacockDivider } from "./PeacockIcons";
import { Destination } from "../types";

export const Destinations: React.FC = () => {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden text-left" id="destinations">
      {/* Subtle background decoration */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header of Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-accent bg-accent/10 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Exquisite Surroundings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary">
            Curated Local Highlights & Tours
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto font-normal leading-relaxed">
            Step outside our boundaries and experience the rich cultural tapestry, imperial architecture, and tranquil nature trails of ancient Tamil Nadu.
          </p>
        </div>

        {/* Horizontal scroll container with elegant flex cards */}
        <div className="overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-accent flex gap-6 snap-x snap-mandatory" id="destinations-container">
          {DESTINATIONS.map((dest, idx) => (
            <div
              key={dest.id}
              className="flex-shrink-0 w-[290px] sm:w-[350px] snap-start glass-light rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between group transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image with zoom effect */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                
                {/* Accent index stamp */}
                <div className="absolute top-4 left-4 glass-accent text-primary font-bold text-xs px-2.5 py-1.5 rounded-[8px] shadow-md">
                  0{idx + 1}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] text-accent uppercase font-bold tracking-widest block mb-0.5">
                    {dest.tagline}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white leading-tight">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Description & Action */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <p className="text-gray-500 text-xs sm:text-sm line-clamp-3">
                  {dest.description}
                </p>
                
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedDest(dest)}
                    className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 font-bold text-xs uppercase tracking-wider group/link"
                    id={`dest-seemore-${dest.id}`}
                  >
                    <span>See Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] text-gray-400 font-mono flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-accent" />
                    Concierge Arranged
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prompt guiding user */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400 font-mono animate-pulse">
            ← Swipe or scroll to explore more destinations →
          </p>
        </div>
      </div>

      {/* Lightbox / Details Modal */}
      {selectedDest && (
        <div className="fixed inset-0 bg-primary/80 backdrop-blur-md z-50 flex items-center justify-center p-4" id="dest-lightbox">
          <div className="bg-white rounded-3xl overflow-hidden max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-accent/20 animate-scale-up">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedDest(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors focus:outline-none"
              aria-label="Close details"
              id="close-dest-modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64">
              <img
                src={selectedDest.image}
                alt={selectedDest.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs text-accent uppercase font-bold tracking-widest block mb-1">
                  {selectedDest.tagline}
                </span>
                <h4 className="font-serif text-2xl font-bold text-white">
                  {selectedDest.name}
                </h4>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold text-xs bg-accent/10 px-3 py-1.5 rounded-lg w-fit">
                <Info className="w-4 h-4 text-accent shrink-0" />
                <span>Complimentary resort shuttle included in premium bookings</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {selectedDest.description}
              </p>
              <p className="text-gray-500 text-xs italic leading-relaxed">
                * Note: Guided day tours are fully custom-planned based on your wellness goals. Please select these options in your reservation form or communicate with Chief Concierge Arjun Prasanna upon check-in.
              </p>
              
              <div className="pt-4 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => setSelectedDest(null)}
                  className="glass-btn-primary font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider"
                >
                  Close Window
                </button>
              </div>
            </div>
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
