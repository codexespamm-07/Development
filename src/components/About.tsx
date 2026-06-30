import React, { useState } from "react";
import { PeacockDivider } from "./PeacockIcons";
import { Compass, ShieldCheck, Heart, Award } from "lucide-react";

export const About: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      {/* Subtle peacock background feather texture */}
      <div className="absolute inset-0 peacock-pattern pointer-events-none opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Overlapping Luxury Images with Gold borders */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-accent shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1600100397608-f010e42edb84?auto=format&fit=crop&w=800&q=80"
                alt="South Indian Temple traditional architecture"
                className="w-full h-[280px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>

            {/* Overlapping Absolute Image */}
            <div className="absolute -bottom-10 -right-6 w-1/2 rounded-2xl overflow-hidden border-4 border-white shadow-2xl hidden sm:block z-20 group">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80"
                alt="Saravana Resort luxurious poolside"
                className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>

            {/* Accent Gold Frame Decoration in Back */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-accent/30 rounded-2xl pointer-events-none -z-10" />
          </div>

          {/* Right Column: Narrative content */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="flex flex-col items-start">
              {/* Gold Accent divider line above heading */}
              <div className="w-16 h-1 bg-accent rounded-full mb-3" />
              <span className="text-xs font-bold text-accent tracking-[0.25em] uppercase">
                Welcome to Sublime Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mt-1 tracking-tight leading-tight">
                Our Sanctuary of Grace & Elegance
              </h2>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Established amidst the historical cradle of South Indian culture, <strong className="text-primary font-semibold">Saravana Residency</strong> is more than a destination—it is a living, breathing celebration of architecture, spiritual peace, and bespoke luxury. 
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Every pillar, courtyard, and lotus pond in our residency is designed in complete alignment with traditional Dravidian design and local environmental patterns, ensuring a deeply refreshing breeze and absolute silence.
            </p>

            {showMore && (
              <div className="space-y-4 pt-2 text-gray-600 text-sm sm:text-base border-t border-gray-100 animate-fade-in text-left">
                <p>
                  Our resort features a dedicated wellness clinic with expert doctors trained in historic Ayurveda methodologies, tailored menus made from organic herbs grown in our own private gardens, and custom meditation pads designed for deep dhyana.
                </p>
                <p>
                  From curated heritage day excursions to Thanjavur temple towers and peaceful Vembanad boat journeys, our dedicated 24/7 concierge team guarantees an authentic immersion into the heart of South Indian royalty.
                </p>
              </div>
            )}

            {/* Custom Perks / Icon list */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="font-semibold text-primary text-sm">Authentic Heritage</h4>
                  <p className="text-xs text-gray-500">True temple design & teak woods</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Compass className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="font-semibold text-primary text-sm">Guided Expeditions</h4>
                  <p className="text-xs text-gray-500">Curated cultural day tours</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Heart className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="font-semibold text-primary text-sm">Ayurvedic Healing</h4>
                  <p className="text-xs text-gray-500">Bespoke holistic therapies</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Award className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="font-semibold text-primary text-sm">Royal Hospitality</h4>
                  <p className="text-xs text-gray-500">Exquisite 24/7 personalized service</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowMore(!showMore)}
                className="glass-btn-accent font-bold px-7 py-3 rounded-[12px] text-sm uppercase tracking-wider"
                id="about-learn-more-btn"
              >
                {showMore ? "Show Less" : "Learn More"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Peacock Divider between sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <PeacockDivider color="#C8A24A" />
      </div>
    </section>
  );
};
