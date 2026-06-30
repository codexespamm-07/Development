import React, { useState } from "react";
import { BLOGS } from "../data";
import { BlogPost } from "../types";
import { Calendar, Clock, ArrowUpRight, BookOpen, X, Share2, Award } from "lucide-react";
import { PeacockDivider } from "./PeacockIcons";

export const BlogNews: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [shareCopied, setShareCopied] = useState(false);

  return (
    <section className="py-24 bg-white relative overflow-hidden text-left" id="blog">
      {/* Subtle peacock background pattern */}
      <div className="absolute inset-0 peacock-pattern pointer-events-none opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-accent bg-accent/10 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Residency Chronicles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary">
            Stories, Culture & Culinary Art
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto leading-relaxed">
            Delve deep into our archives detailing ancient South Indian traditions, the science of Ayurveda, and secrets behind our historic cuisine.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between group transform hover:-translate-y-2 transition-all duration-300"
              id={`blog-post-${post.id}`}
            >
              {/* Cover Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-primary/95 text-accent border border-accent/20 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md">
                  {post.category}
                </span>
              </div>

              {/* Content Detail */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  
                  {/* Meta (Date + Read Time) */}
                  <div className="flex items-center gap-4 text-gray-400 text-xs font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-primary group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setActivePost(post)}
                    className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 font-bold text-xs uppercase tracking-wider group/link"
                    id={`blog-read-${post.id}`}
                  >
                    <span>Read More</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>

      {/* Blog Detail Modal Lightbox */}
      {activePost && (
        <div className="fixed inset-0 bg-primary/80 backdrop-blur-md z-50 flex items-center justify-center p-4" id="blog-modal">
          <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-accent/20 animate-scale-up">
            
            {/* Close Button */}
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2.5 transition-colors focus:outline-none"
              aria-label="Close article"
              id="close-blog-modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-80">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="bg-accent text-primary text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md block w-fit mb-2">
                  {activePost.category}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {activePost.title}
                </h4>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-4">
              
              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-400 text-xs font-mono pb-2 border-b border-gray-100">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  Published {activePost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  Estimated {activePost.readTime}
                </span>
              </div>

              {/* Excerpt + Extended text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
                {activePost.excerpt}
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                At Saravana Residency, we are dedicated to protecting and celebrating these beautiful South Indian traditions. Our guests are invited to participate in weekly cultural exchanges, private culinary workshops, and classical yoga flows curated directly by our expert practitioners.
              </p>

              {/* Call out box */}
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 flex gap-3">
                <Award className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-800">
                  <strong>Special Notice:</strong> Weekly classical Bharatanatyam recitals are performed in our central stone amphitheater every Saturday at sunset. Attendance is complimentary for all registered residency guests.
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setShareCopied(true);
                    setTimeout(() => setShareCopied(false), 2500);
                  }}
                  className="inline-flex items-center gap-1.5 text-gray-500 hover:text-accent font-semibold text-xs uppercase tracking-wider relative"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{shareCopied ? "Link Copied!" : "Share Article"}</span>
                </button>

                <button
                  onClick={() => setActivePost(null)}
                  className="glass-btn-primary font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider"
                >
                  Close Article
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
