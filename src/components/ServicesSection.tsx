import React from 'react';
import { 
  Building2, 
  PenTool, 
  HardHat, 
  ClipboardList, 
  Hammer, 
  Leaf,
  ArrowRight
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    { 
      title: 'General Contracting', 
      description: 'Comprehensive, end-to-end management for your entire project, ensuring on-time and on-budget delivery.',
      icon: Building2 
    },
    { 
      title: 'Design-Build', 
      description: 'A streamlined, collaborative approach from initial architectural concept to final structural completion.',
      icon: PenTool 
    },
    { 
      title: 'Construction Management', 
      description: 'Expert, on-site oversight coordinating subcontractors, materials, and complex daily operations.',
      icon: HardHat 
    },
    { 
      title: 'Pre-construction', 
      description: 'Rigorous site planning, feasibility studies, and budget coordination before breaking ground.',
      icon: ClipboardList 
    },
    { 
      title: 'Renovation & Remodeling', 
      description: 'Transforming existing spaces with luxury finishes, structural upgrades, and meticulous care.',
      icon: Hammer 
    },
    { 
      title: 'Sustainable Building', 
      description: 'Eco-friendly engineering, energy-efficient materials, and LEED-certified building practices.',
      icon: Leaf 
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white overflow-hidden">
      
      {/* CSS to hide the scrollbar but keep functionality */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="text-[#ea580c] font-semibold uppercase tracking-widest text-sm block mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Construction Services
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Delivering end-to-end solutions with uncompromising quality, precision, and a commitment to bringing your vision to reality.
          </p>
        </div>

        {/* ── RESPONSIVE GRID / CAROUSEL ── */}
        {/* Mobile: Horizontal flex with scroll snap. Desktop: Standard CSS Grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                // Mobile: Fixed width (85vw) to allow next card to peek. Desktop: Auto width.
                className="w-[85vw] sm:w-[350px] md:w-auto shrink-0 snap-center group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col"
              >
                {/* Decorative Corner Flare */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Container */}
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-colors duration-500 mb-6 shadow-sm">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-800 leading-snug mb-3 group-hover:text-[#ea580c] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm mb-8">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center font-bold text-sm text-slate-900 group-hover:text-[#ea580c] transition-colors duration-300 mt-auto">
                    Learn more 
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;