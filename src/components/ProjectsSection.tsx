import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    { 
      title: 'The Sapphire Tech Park', 
      category: 'Commercial Build',
      location: 'Bengaluru, Karnataka',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      span: 'md:col-span-2 lg:col-span-2' 
    },
    { 
      title: 'Bespoke Villa & Luxury Interiors', 
      category: 'Residential',
      location: 'Mysore, Karnataka',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
      span: 'col-span-1'
    },
    { 
      title: 'Heritage Estate Restoration', 
      category: 'Renovation',
      location: 'Hassan, Karnataka',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      span: 'col-span-1'
    },
    { 
      title: 'Apex Corporate Headquarters', 
      category: 'Infrastructure',
      location: 'Bengaluru, Karnataka',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      span: 'md:col-span-2 lg:col-span-2'
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Refined Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm block mb-3">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Featured Projects
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-slate-600 font-semibold hover:text-[#ea580c] transition-colors group">
            View All Projects 
            <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Dynamic Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              // 1. Adjusted mobile height to h-[280px] to fit better on phones
              className={`relative group rounded-3xl overflow-hidden cursor-pointer h-[280px] sm:h-[350px] md:h-[450px] shadow-lg ${project.span}`}
            >
              {/* Image with smooth zoom on hover */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform md:group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              
              {/* Permanent bottom gradient for text readability (slightly darker on mobile for contrast) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent opacity-90 md:opacity-80 md:group-hover:opacity-95 transition-opacity duration-300"></div>
              
              {/* Top Category Tag */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                <span className="bg-[#ea580c] text-white text-[10px] md:text-xs font-bold uppercase tracking-wider py-1.5 px-3 md:px-4 rounded-full shadow-lg">
                  {project.category}
                </span>
              </div>

              {/* Bottom Content Reveal */}
              {/* 2. Removed the Y-axis translate on mobile so text is always visible. Kept it for md and above. */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3 leading-tight">
                  {project.title}
                </h3>
                
                {/* Location with Icon */}
                <div className="flex items-center gap-2 text-slate-300 opacity-100 md:opacity-80 md:group-hover:opacity-100 transition-opacity duration-300 mb-2 md:mb-4">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#ea580c]" />
                  <span className="text-xs md:text-sm font-medium">{project.location}</span>
                </div>

                {/* View Details - Always visible on mobile, fades in on hover for desktop */}
                <div className="overflow-hidden">
                  <div className="flex items-center gap-2 text-[#ea580c] font-bold text-xs md:text-sm uppercase tracking-wider opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 md:delay-100 mt-2 md:mt-0">
                    View Project Details <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-only View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <button className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors shadow-md">
            View All Projects <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;