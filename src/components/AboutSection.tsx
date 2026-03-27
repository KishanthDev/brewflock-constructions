import React from "react";
import { CheckCircle2, PhoneCall, ArrowRight } from "lucide-react";

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm block mb-3">
            About Brewflock
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Building better spaces for all.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Brewflock Constructions is a trusted construction company committed to creating high-quality, practical, and stylish spaces that consistently exceed client expectations across South India.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image with Experience Badge */}
          <div className="relative relative-group">
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-orange-100 rounded-[2rem] transform -rotate-3 -z-10"></div>
            
            <img
              src="/aboutus.jpg" 
              alt="BrewFlock Construction Project"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover border-4 border-white relative z-10 bg-slate-200"
            />
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -right-8 md:-right-12 bg-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-xl z-20 border border-slate-700 max-w-[200px] transform transition-transform hover:-translate-y-2 duration-300 hidden sm:block">
              <div className="text-5xl font-black text-[#ea580c] mb-1">30+</div>
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                Major Projects Completed
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="space-y-8 lg:pl-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              With major projects completed across Bengaluru, Mysore, and Hassan, we take pride in our expertise in commercial, residential, industrial, and infrastructure development. Our goal is to bring client visions to life with lasting, high-quality results that meet their needs and enhance their spaces for the long term.
            </p>

            {/* Upgraded Features List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Dedicated Project Team",
                "Guaranteed Timely Delivery",
                "No Hidden Costs",
                "Premium Materials",
                "In-house Architecture",
                "Transparent Estimates"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-[#ea580c] shrink-0" />
                  <span className="font-semibold text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Footer / CTA Area */}
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-6 border-t border-slate-200">
              
              {/* Primary Button */}
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-orange-900/20 active:scale-95"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </a>

              {/* Contact Block */}
              <div className="flex items-center gap-4 w-full sm:w-auto border sm:border-none border-slate-200 p-4 sm:p-0 rounded-xl">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                  <PhoneCall className="w-6 h-6 text-[#ea580c]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Call 24/7 Support
                  </p>
                  <a href="tel:+917338287427" className="group">
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-[#ea580c] transition-colors">
                      +91 733 828 7427
                    </h3>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;