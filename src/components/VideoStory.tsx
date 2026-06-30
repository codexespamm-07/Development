import React, { useState } from "react";
import { Play, X, Sparkles, BookOpen, Flame } from "lucide-react";
import { PeacockDivider, PeacockFeather } from "./PeacockIcons";

export const VideoStory: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden text-left" id="story">
      {/* Decorative gradient blur in background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Embedded peacock feathers floating behind headers */}
      <div className="absolute bottom-12 right-10 opacity-10 pointer-events-none hidden lg:block">
        <PeacockFeather size={90} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl border border-accent/20 relative">
          
          {/* Subtle peacock feather overlay texture */}
          <div className="absolute inset-0 peacock-pattern pointer-events-none opacity-5" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Traditional Story Narration */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 text-white text-left relative">
              <div className="inline-flex items-center gap-2 text-accent bg-accent/20 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase w-fit">
                <BookOpen className="w-3.5 h-3.5" />
                <span>The Legend of Saravana</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Crafted in Stone, <br />
                <span className="text-accent">Blessed by Heritage</span>
              </h2>

              <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                Take a virtual step into our Dravidian architecture. Our resort was constructed over five years, using granite stones hand-carved by multigenerational temple artisans of Mahabalipuram, and sustainable teakwood forests.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <Flame className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent text-sm">Sacred Fire Rituals</h4>
                    <p className="text-xs text-white/70">Daily morning agnihotra rituals to clear energy.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent text-sm">Divine Sound System</h4>
                    <p className="text-xs text-white/70">Acoustics optimized to vibrate with Vedic flute soundscapes.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="glass-btn-accent font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-widest flex items-center gap-2 w-fit"
                  id="story-play-btn-left"
                >
                  <Play className="w-4 h-4 fill-primary" />
                  Watch Video Story
                </button>
              </div>
            </div>

            {/* Right Column: Embedded video play thumbnail with pulsing icon */}
            <div className="lg:col-span-6 relative h-[300px] sm:h-[400px] lg:h-auto min-h-[300px] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80"
                alt="Panoramic view of resort sanctuary"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent lg:block hidden" />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300" />

              {/* Central Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/30 backdrop-blur-md hover:bg-accent/50 text-white flex items-center justify-center border border-accent/40 shadow-2xl relative group focus:outline-none transition-all duration-300 hover:scale-110"
                  aria-label="Play virtual tour video"
                  id="story-pulsing-play-btn"
                >
                  {/* Ripple Pulse Rings */}
                  <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                  <span className="absolute inset-0 rounded-full bg-accent/15 animate-pulse-slow" />
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-accent stroke-accent relative z-10 translate-x-0.5" />
                </button>
              </div>

              {/* Video Badge */}
              <div className="absolute bottom-4 right-4 bg-primary/80 border border-accent/35 text-white text-[10px] font-mono py-1 px-3 rounded-md uppercase tracking-widest">
                Resort Virtual Tour · 2:40 Min
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Video Modal Lightbox (Plays an ambient relaxation resort video) */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" id="video-lightbox">
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-primary border border-accent/20 relative animate-scale-up">
            
            {/* Top Bar with title */}
            <div className="flex justify-between items-center p-4 border-b border-accent/10 bg-primary-dark">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <h4 className="font-serif text-white font-semibold text-sm sm:text-base">
                  Saravana Residency — Divine Sanctum Virtual Tour
                </h4>
              </div>
              <button
                onClick={() => setIsPlaying(false)}
                className="text-white hover:text-accent p-2 rounded-full focus:outline-none"
                aria-label="Close video player"
                id="close-video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video content container (Iframe / HTML5 loop for serenity) */}
            <div className="relative aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Saravana Resort Ambience Drone Footage"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Bottom details */}
            <div className="p-4 bg-primary-dark text-left text-xs text-white/70">
              * Note: For the complete immersive audio experience, please put on high-quality stereo headphones. Experience authentic flute resonance and birds chirping recorded directly on our courtyard ponds.
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
