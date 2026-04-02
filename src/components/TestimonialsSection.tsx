import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
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
    <section id="testimonials" className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* CSS to hide the scrollbar but keep functionality */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="text-[#ea580c] font-semibold uppercase tracking-widest text-sm block mb-4">
            Client Success
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Built on Trust.
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the businesses and families who have trusted us to bring their most important projects to life.
          </p>
        </div>

        {/* ── RESPONSIVE GRID / CAROUSEL ── */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none pb-8 lg:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              // Mobile: Fixed width (85vw) to allow next card to peek. Desktop: Auto width.
              className={`w-[85vw] sm:w-[350px] lg:w-auto shrink-0 snap-center bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-orange-200 transition-all duration-300 relative group flex flex-col ${
                // Optional: Stagger the middle card slightly lower for a dynamic layout on desktop
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
                <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Client Info & Project Tag */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                  
                  {/* Small Project Category Badge */}
                  <span className="hidden sm:inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-[#ea580c] shadow-sm whitespace-nowrap ml-2">
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