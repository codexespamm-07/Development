import React, { useState } from "react";
import { Send, CheckCircle2, Sparkles, Bell } from "lucide-react";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic regex check
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please provide a valid email address.");
      return;
    }

    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 6000);
  };

  return (
    <section className="bg-primary py-16 sm:py-20 relative overflow-hidden border-t border-accent/20" id="newsletter">
      {/* Subtle background peacock feather texture */}
      <div className="absolute inset-0 peacock-pattern pointer-events-none opacity-5" />

      {/* Decorative Gold Highlights */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Subtitle icon */}
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/20 border border-accent/30 text-accent">
          <Bell className="w-5 h-5 animate-bounce" />
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Get Updates & Sanctuary Whispers
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
            Subscribe to our seasonal chronicles. Receive imperial recipes, traditional yoga guides, and exclusive, member-only retreat booking offers.
          </p>
        </div>

        {/* Subscription Form */}
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto pt-2">
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-grow bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-accent rounded-xl px-5 py-3.5 text-sm outline-none transition-all shadow-inner backdrop-blur-md"
              required
            />
            
            <button
              type="submit"
              className="glass-btn-accent font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 shrink-0 group"
              id="newsletter-subscribe-btn"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary group-hover:text-white" />
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-400 text-xs font-semibold text-left mt-2 pl-2">
              {error}
            </p>
          )}
        </form>

        {/* Success confirmation */}
        {success && (
          <div className="max-w-md mx-auto p-3.5 glass-accent rounded-xl text-accent flex items-center gap-2.5 text-xs sm:text-sm justify-center animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
            <span>
              Congratulations! You are subscribed to <strong>Saravana Sanctuary Updates</strong>. Check your inbox for your 15% booking discount code.
            </span>
          </div>
        )}

        <div className="text-[10px] text-white/50 font-mono">
          * We value your privacy. Unsubscribe anytime with a single click. No spam, ever.
        </div>

      </div>
    </section>
  );
};
