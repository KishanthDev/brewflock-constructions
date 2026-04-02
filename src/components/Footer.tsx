import React from 'react';
import { Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] text-slate-300 border-t border-slate-800 relative overflow-hidden">

      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[#ea580c]/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">

        {/* ── UPDATED GRID SECTION ── */}
        {/* Changed to grid-cols-2 for mobile base, adjusting gaps for a cleaner mobile experience */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-6 gap-y-12 lg:gap-8 mb-16">

          {/* Column 1: Brand & Bio (Spans full width on mobile) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3 space-y-6">
            <a href="#" className="inline-flex items-center gap-2 group">
              <div className="relative flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-600/50 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-slate-700/60 group-hover:border-slate-500/70 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.2)] overflow-hidden">
                <img
                  src="/favicon.jpeg"
                  alt="Brewflock Logo"
                  className="w-7 h-7 object-contain transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xl font-bold tracking-widest text-white uppercase">
                Brewflock
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Delivering uncompromising quality and precision for residential, commercial, and industrial projects across South India. We build legacies.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 hover:bg-[#ea580c] hover:text-white border border-slate-700/50 hover:border-transparent transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Spans 1 col on mobile) */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Projects', 'Services', 'Careers', 'Contact Team'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-[#ea580c] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#ea580c] transition-colors"></span>
                    <span className="text-sm md:text-base">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Expertise (Spans 1 col on mobile) */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Expertise</h4>
            <ul className="space-y-4">
              {['Commercial Build', 'Custom Residential', 'Industrial Spaces', 'Renovations', 'Architecture'].map((link, i) => (
                <li key={i}>
                  <a href="#services" className="text-slate-400 hover:text-[#ea580c] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#ea580c] transition-colors"></span>
                    <span className="text-sm md:text-base">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Technical Specs (Spans 1 col on mobile) */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Tech Specs</h4>
            <ul className="space-y-3 text-slate-400 text-xs sm:text-sm">
              <li><strong>Processor:</strong> Intel Ultra 9 / i9</li>
              <li><strong>RAM:</strong> 16GB+ (64GB rec.)</li>
              <li><strong>GPU:</strong> RTX 8GB–16GB</li>
              <li><strong>Storage:</strong> 1TB SSD</li>
              <li><strong>Virtual RAM:</strong> 12GB+</li>
              <li><strong>RAM Type:</strong> DDR5</li>
            </ul>
          </div>

          {/* Column 5: Newsletter (Spans full width on mobile) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3 mt-4 lg:mt-0">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Stay Updated</h4>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Subscribe to our newsletter for the latest industry insights, project reveals, and construction news.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex items-center">
                <div className="absolute left-4 text-slate-500">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-4 pl-12 pr-32 text-white placeholder-slate-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold px-4 rounded-lg transition-colors flex items-center gap-1 text-xs sm:text-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} Brewflock Constructions. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;