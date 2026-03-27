import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    { title: 'General Contracting', description: 'Comprehensive management for your entire project.' },
    { title: 'Design-Build', description: 'A streamlined approach from concept to completion.' },
    { title: 'Construction Management', description: 'Expert oversight of your construction project.' },
    { title: 'Pre-construction Services', description: 'Planning and coordination before breaking ground.' },
    { title: 'Renovation & Remodeling', description: 'Transforming spaces with quality and care.' },
    { title: 'Sustainable Building', description: 'Eco-friendly solutions for a greener future.' },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
