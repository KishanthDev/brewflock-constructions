import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    { name: 'John Doe', quote: 'BrewFlock delivered our project on time and on budget. Highly recommended!' },
    { name: 'Jane Smith', quote: 'The team was professional, and the quality of their work exceeded our expectations.' },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-bold text-right text-yellow-500">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
