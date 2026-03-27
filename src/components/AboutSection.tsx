import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Us</h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img src="https://via.placeholder.com/600x400" alt="About BrewFlock" className="rounded-xl shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <p className="text-lg text-gray-600 mb-6">
              BrewFlock Constructions is a premier construction company dedicated to building the future. With over two decades of experience, we specialize in creating high-quality, sustainable, and innovative residential and commercial properties.
            </p>
            <p className="text-lg text-gray-600">
              Our team of certified professionals is committed to excellence, ensuring every project is completed on time, within budget, and to the highest standards of safety and quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
