import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center lg:justify-start text-white overflow-hidden">
      
      {/* 1. Background Image & Sophisticated Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Luxury Construction" 
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow" // Slight scale prevents edge bleeding
        />
        {/* Elegant Gradient: Dark on the left for text readability, fading to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/20"></div>
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full mt-16 md:mt-0">
        <div className="max-w-3xl">

          {/* High-Impact Typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[1.05]">
            Building Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-amber-400">
              Future Legacy.
            </span>
          </h1>

          {/* Refined Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
            Uncompromising quality and precision for residential and commercial projects. We don't just build structures; we craft environments that inspire.
          </p>

          {/* Modern Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 bg-[#ea580c] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#c2410c] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-orange-900/40 active:scale-95"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-slate-500/50 text-white font-bold py-4 px-8 rounded-xl hover:bg-slate-800/60 hover:border-slate-400 transition-all duration-300 backdrop-blur-sm active:scale-95"
            >
              View Our Portfolio
            </a>
          </div>

        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;