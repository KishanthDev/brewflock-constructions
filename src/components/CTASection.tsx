import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Floating CTA Card */}
        <div className="relative bg-[#0B1120] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800">

          {/* Background Textures & Glows */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
          
          {/* Top Right Orange Glow */}
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#ea580c] opacity-20 blur-[100px] pointer-events-none"></div>
          
          {/* Bottom Left Amber Glow */}
          <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-amber-500 opacity-10 blur-[100px] pointer-events-none"></div>

          {/* Content Wrapper */}
          <div className="relative z-10 px-8 py-16 md:py-20 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">

            {/* Left Side: Text */}
            <div className="max-w-2xl">
              <span className="text-[#ea580c] font-bold uppercase tracking-widest text-sm block mb-4">
                Ready to break ground?
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Let's build something <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-amber-500">
                  extraordinary.
                </span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-0">
                Connect with our engineering and design team today for a comprehensive consultation and detailed project estimate.
              </p>
            </div>

            {/* Right Side: Dual Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              
              {/* Primary Action */}
              <a 
                href="#contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ea580c] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#c2410c] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-orange-900/40 group"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
              
              {/* Secondary Action */}
              <a 
                href="tel:+917338287427" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 text-white font-bold py-4 px-8 rounded-xl hover:bg-slate-700 active:scale-[0.98] transition-all duration-300 border border-slate-700 hover:border-slate-500"
              >
                <PhoneCall className="w-5 h-5 text-[#ea580c]" />
                Call Us Now
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;