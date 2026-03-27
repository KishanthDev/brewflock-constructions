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
  // Upgraded data array to include specific icons for each service
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
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Refined Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm block mb-3">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Comprehensive Construction Services
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Delivering end-to-end solutions with uncompromising quality, precision, and a commitment to bringing your vision to reality.
          </p>
        </div>

        {/* Upgraded Grid with Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col relative overflow-hidden cursor-pointer"
              >
                {/* Decorative background flare on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none"></div>

                {/* Interactive Icon Box */}
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-slate-600 group-hover:bg-[#ea580c] group-hover:text-white transition-colors duration-300 relative z-10">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#ea580c] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* "Learn More" Micro-interaction */}
                <div className="flex items-center font-bold text-sm text-slate-900 group-hover:text-[#ea580c] transition-colors duration-300 mt-auto relative z-10">
                  Learn more 
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
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