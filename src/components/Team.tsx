import React from "react";
import { TEAM } from "../data";
import { Facebook, Instagram, Twitter, PhoneCall, Sparkles, Send } from "lucide-react";
import { PeacockDivider, PeacockFeather } from "./PeacockIcons";

export const Team: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden text-left" id="team">
      {/* Subtle background texture */}
      <div className="absolute inset-0 peacock-pattern pointer-events-none opacity-5" />

      {/* Floating vector decorations */}
      <div className="absolute top-24 right-12 opacity-5 pointer-events-none hidden lg:block">
        <svg className="w-48 h-48 text-accent rotate-12" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="10,5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-accent bg-accent/10 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exemplary Caretakers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary">
            Our Guardians of Hospitality
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto leading-relaxed">
            Meet the experienced, multi-award-winning curators, physicians, and chefs committed to making your stay an elegant, worry-free sanctuary.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between group transform hover:-translate-y-2 transition-all duration-300 relative"
              id={`team-member-${member.id}`}
            >
              {/* Photo with beautiful hover overlays */}
              <div className="relative aspect-[3/4] overflow-hidden bg-primary">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Temple Blue dark translucent overlay appearing on hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-center select-none">
                  <div className="space-y-4">
                    <span className="text-xs text-accent uppercase font-bold tracking-widest block">
                      Connect Direct
                    </span>
                    
                    {/* Gold Social Icons */}
                    <div className="flex justify-center items-center gap-4">
                      {member.socials.facebook && (
                        <a
                          href={member.socials.facebook}
                          className="w-10 h-10 rounded-full border border-accent/40 bg-primary-dark hover:bg-accent text-accent hover:text-primary flex items-center justify-center transition-all duration-300"
                          aria-label={`${member.name} Facebook`}
                        >
                          <Facebook className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a
                          href={member.socials.instagram}
                          className="w-10 h-10 rounded-full border border-accent/40 bg-primary-dark hover:bg-accent text-accent hover:text-primary flex items-center justify-center transition-all duration-300"
                          aria-label={`${member.name} Instagram`}
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          className="w-10 h-10 rounded-full border border-accent/40 bg-primary-dark hover:bg-accent text-accent hover:text-primary flex items-center justify-center transition-all duration-300"
                          aria-label={`${member.name} Twitter`}
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.whatsapp && (
                        <a
                          href={member.socials.whatsapp}
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-full border border-accent/40 bg-primary-dark hover:bg-accent text-accent hover:text-primary flex items-center justify-center transition-all duration-300"
                          aria-label={`${member.name} WhatsApp`}
                        >
                          <Send className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-[10px] text-white/70 italic">
                      Highly skilled in heritage hospitality guidelines
                    </p>
                  </div>
                </div>

                {/* Constant Role Badge for clean design */}
                <div className="absolute bottom-4 left-4 bg-primary/95 border border-accent/20 text-[10px] text-accent font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                  {member.role.split(" & ")[0]}
                </div>
              </div>

              {/* Text Name & Role */}
              <div className="p-5 text-center bg-white border-t border-gray-50">
                <h3 className="font-serif text-lg font-bold text-primary group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Elegant Separator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <PeacockDivider color="#C8A24A" />
      </div>
    </section>
  );
};
