import React, { useState, useEffect } from 'react';
import { HardHat, Menu, X, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items array for cleaner mapping
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled || isMenuOpen
        ? 'bg-slate-900/90 backdrop-blur-md border-slate-700/50 shadow-lg py-3'
        : 'bg-transparent border-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo / Brand */}
          <a
            href="#"
            className="inline-flex items-center gap-3 group z-50 relative p-1 -ml-1 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c] transition-all"
          >
            {/* Logo Icon Wrapper */}
            <div className="relative flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-600/50 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-slate-700/60 group-hover:border-slate-500/70 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.2)] overflow-hidden">

              <img
                src="/favicon.jpeg"
                alt="Brewflock Logo"
                className="w-7 h-7 object-contain transform transition-transform duration-300 group-hover:scale-110"
              />

            </div>

            {/* Brand Name */}
            <span className="text-base md:text-lg font-extrabold tracking-[0.15em] text-white uppercase transition-all duration-300 group-hover:text-slate-100">
              Brewflock{' '}
              <span className="text-[#ea580c] hidden sm:inline transition-colors duration-300 group-hover:text-[#f97316]">
                Constructions
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                {/* Animated underline on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ea580c] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ea580c] text-white text-sm font-bold hover:bg-[#c2410c] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-orange-900/20"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden z-50 relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 shadow-2xl transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
      >
        <div className="px-6 py-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-slate-300 hover:text-[#ea580c] transition-colors py-2 border-b border-slate-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 w-full mt-4 px-5 py-4 rounded-xl bg-[#ea580c] text-white font-bold hover:bg-[#c2410c] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Get a Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;