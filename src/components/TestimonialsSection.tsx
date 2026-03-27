import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  // Upgraded data with more context to build trust
  const testimonials = [
    { 
      name: 'Sarah Jenkins', 
      role: 'CEO, Apex Tech Park',
      project: 'Commercial Build',
      quote: 'Brewflock delivered our 50,000 sq ft office complex not only on time but strictly within budget. Their project managers communicated transparently every step of the way. Highly recommended for large-scale enterprise builds.',
      rating: 5
    },
    { 
      name: 'David & Emily Chen', 
      role: 'Homeowners',
      project: 'Custom Residential',
      quote: 'Building a custom home can be terrifying, but the team made it a dream. The attention to detail in the structural framework and the luxury interior finishes completely exceeded our expectations. They truly build legacies.',
      rating: 5
    },
    { 
      name: 'Marcus Thorne', 
      role: 'Director of Operations',
      project: 'Industrial Facility',
      quote: 'We required a highly specialized industrial warehouse with complex electrical and HVAC requirements. Brewflock handled the engineering challenges flawlessly. A highly professional and technically proficient firm.',
      rating: 5
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm block mb-3">
            Client Success
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Built on Trust.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Don't just take our word for it. Hear from the businesses and families who have trusted us to bring their most important projects to life.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-orange-200 transition-all duration-300 relative group ${
                // Optional: Stagger the middle card slightly lower for a dynamic layout
                index === 1 ? 'lg:translate-y-6 lg:hover:translate-y-4' : ''
              }`}
            >
              
              {/* Massive Decorative Quote Icon */}
              <div className="absolute top-6 right-6 text-slate-200 group-hover:text-orange-100 transition-colors duration-500 pointer-events-none">
                <Quote className="w-16 h-16" fill="currentColor" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500" fill="currentColor" />
                  ))}
                </div>

                {/* The Quote */}
                <p className="text-slate-700 leading-relaxed text-lg mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Client Info & Project Tag */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                  
                  {/* Small Project Category Badge */}
                  <span className="hidden sm:inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-[#ea580c] shadow-sm">
                    {testimonial.project}
                  </span>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;