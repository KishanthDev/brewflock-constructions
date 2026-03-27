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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || isMenuOpen
          ? 'bg-slate-900/90 backdrop-blur-md border-slate-700/50 shadow-lg py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo / Brand */}
          <a href="#" className="inline-flex items-center gap-2 group z-50 relative">
            <div className="p-2 rounded-lg bg-slate-800/40 border border-slate-600/50 backdrop-blur-md group-hover:bg-slate-800/60 transition-colors">
              <HardHat className="w-5 h-5 text-[#ea580c]" />
            </div>
            <span className="text-sm md:text-base font-bold tracking-widest text-white uppercase group-hover:text-slate-200 transition-colors">
              Brewflock <span className="text-[#ea580c] hidden sm:inline">Constructions</span>
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
        className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 shadow-2xl transition-all duration-300 ease-in-out origin-top ${
          isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
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