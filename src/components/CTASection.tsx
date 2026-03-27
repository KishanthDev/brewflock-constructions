import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-yellow-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to build something amazing?</h2>
        <p className="text-lg mb-8">Let's talk about your next project.</p>
        <a href="#contact" className="bg-white text-yellow-500 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300">Get a Quote</a>
      </div>
    </section>
  );
};

export default CTASection;
