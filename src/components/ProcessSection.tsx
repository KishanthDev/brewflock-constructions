import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    { title: 'Consultation', description: 'We start by understanding your vision and requirements.' },
    { title: 'Planning & Design', description: 'Our experts create a detailed plan and design for your project.' },
    { title: 'Construction', description: 'Our skilled team brings the design to life with precision and quality.' },
    { title: 'Handover', description: 'We ensure a smooth handover and your complete satisfaction.' },
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Process</h2>
        <div className="relative">
          <div className="border-l-2 border-yellow-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-1/2"></div>
              <div className="w-1/2 px-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
