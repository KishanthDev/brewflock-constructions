import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img src="https://via.placeholder.com/1920x1080" alt="Construction Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Building Your Future</h1>
        <p className="text-lg md:text-2xl mb-8">High-quality construction services for residential and commercial projects.</p>
        <a href="#contact" className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-300">
          Get a Quote
        </a>
      </div>
    </section>
  );
};

export default HeroSection;