import React from 'react';
import { MessageSquare, PenTool, HardHat, Key } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    { 
      id: '01',
      title: 'Consultation & Scope', 
      description: 'We begin with a deep dive into your vision, requirements, timeline, and budget constraints to ensure total alignment.',
      icon: MessageSquare
    },
    { 
      id: '02',
      title: 'Planning & Architecture', 
      description: 'Our engineers and designers draft comprehensive structural plans, 3D renderings, and secure all necessary local permits.',
      icon: PenTool
    },
    { 
      id: '03',
      title: 'Active Construction', 
      description: 'Our expert crews break ground, providing you with transparent, milestone-based updates as your structure comes to life.',
      icon: HardHat
    },
    { 
      id: '04',
      title: 'Final Handover', 
      description: 'Following a rigorous quality assurance walkthrough and safety inspection, we hand over the keys to your new space.',
      icon: Key
    },
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm block mb-3">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our Proven Process
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A seamless, transparent journey from the first handshake to the final key handover. We eliminate the stress of complex builds.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* The Vertical Line (Left on mobile, Center on Desktop) */}
          <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-1 bg-slate-200 md:-translate-x-1/2 rounded-full">
            {/* Animated glowing progress line (Optional visual flair) */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#ea580c] to-transparent rounded-full"></div>
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''} group`}
                >
                  
                  {/* Timeline Node (The Icon Circle) */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center md:-translate-x-1/2 z-10 group-hover:border-orange-200 group-hover:bg-[#ea580c] transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Card Content Wrapper */}
                  {/* Padding pushes content away from the center line on desktop, and away from the left line on mobile */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 lg:pr-24 text-left md:text-right' : 'md:pl-16 lg:pl-24 text-left'}`}>
                    
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 group-hover:shadow-xl group-hover:border-orange-200 transition-all duration-300 relative overflow-hidden">
                      
                      {/* Watermark Step Number */}
                      <div className={`absolute -bottom-4 -right-2 text-8xl font-black text-slate-50 opacity-50 pointer-events-none transition-all duration-300 group-hover:text-orange-50 ${isEven ? 'md:left-4 md:right-auto' : ''}`}>
                        {step.id}
                      </div>

                      <div className="relative z-10">
                        <span className="text-[#ea580c] font-black text-lg mb-2 block">Step {step.id}</span>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-base">
                          {step.description}
                        </p>
                      </div>
                      
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;