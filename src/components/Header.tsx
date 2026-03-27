import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-white">BrewFlock</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-yellow-500 transition-colors">About</a>
            <a href="#services" className="text-white hover:text-yellow-500 transition-colors">Services</a>
            <a href="#projects" className="text-white hover:text-yellow-500 transition-colors">Projects</a>
            <a href="#contact" className="text-white hover:text-yellow-500 transition-colors">Contact</a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <a href="#about" className="block text-white py-2" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" className="block text-white py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#projects" className="block text-white py-2" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="block text-white py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
