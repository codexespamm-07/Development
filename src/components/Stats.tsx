import React, { useState, useEffect, useRef } from "react";
import { Award, RefreshCw, Compass, Users } from "lucide-react";

interface StatItem {
  id: string;
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

export const Stats: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    years: 0,
    retention: 0,
    stays: 0,
    guests: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const statsList: StatItem[] = [
    {
      id: "years",
      icon: <Award className="w-6 h-6 text-accent" />,
      value: 18,
      suffix: "+",
      label: "Years of Heritage Experience",
    },
    {
      id: "retention",
      icon: <RefreshCw className="w-6 h-6 text-accent" />,
      value: 96,
      suffix: "%",
      label: "Guest Retention Rate",
    },
    {
      id: "stays",
      icon: <Compass className="w-6 h-6 text-accent" />,
      value: 1420,
      suffix: "+",
      label: "Tours & Stays Completed",
    },
    {
      id: "guests",
      icon: <Users className="w-6 h-6 text-accent" />,
      value: 12500,
      suffix: "+",
      label: "Happy Guests Welcomed",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate count-up
          const duration = 2000; // 2 seconds animation
          const steps = 50;
          const stepTime = duration / steps;
          
          let currentStep = 0;
          
          const timer = setInterval(() => {
            currentStep++;
            
            setCounts({
              years: Math.min(Math.round((18 / steps) * currentStep), 18),
              retention: Math.min(Math.round((96 / steps) * currentStep), 96),
              stays: Math.min(Math.round((1420 / steps) * currentStep), 1420),
              guests: Math.min(Math.round((12500 / steps) * currentStep), 12500),
            });
            
            if (currentStep >= steps) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      className="bg-primary py-16 sm:py-20 relative overflow-hidden border-y border-accent/25"
      id="stats-section"
    >
      {/* Background low-opacity peacock feather motifs */}
      <div className="absolute inset-0 peacock-pattern pointer-events-none opacity-5" />

      {/* Decorative Gold Border Accent */}
      <div className="absolute top-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="absolute bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {statsList.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center space-y-2 group"
              id={`stat-item-${stat.id}`}
            >
              {/* Gold Circled Icon with pulse-on-hover */}
              <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center bg-primary-dark shadow-inner group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              {/* Counter Number */}
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-accent select-none">
                {counts[stat.id] || 0}
                <span>{stat.suffix}</span>
              </div>

              {/* Label */}
              <p className="text-text-light/95 text-xs sm:text-sm font-medium uppercase tracking-widest max-w-[180px] leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
