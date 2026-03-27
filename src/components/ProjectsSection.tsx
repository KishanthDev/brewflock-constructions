import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  // Upgraded data array with high-res Unsplash images, categories, and localized context
  const projects = [
    { 
      title: 'The Sapphire Tech Park', 
      category: 'Commercial Build',
      location: 'Bengaluru, Karnataka',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      span: 'md:col-span-2 lg:col-span-2' // Makes this image span wider for a dynamic grid
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
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Refined Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm block mb-3">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Featured Projects
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-slate-600 font-semibold hover:text-[#ea580c] transition-colors group">
            View All Projects 
            <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Dynamic Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`relative group rounded-2xl overflow-hidden cursor-pointer h-[400px] md:h-[450px] shadow-lg ${project.span}`}
            >
              {/* Image with smooth zoom on hover */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              
              {/* Permanent bottom gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Top Category Tag */}
              <div className="absolute top-6 left-6">
                <span className="bg-[#ea580c] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                  {project.category}
                </span>
              </div>

              {/* Bottom Content Reveal */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 leading-tight">
                  {project.title}
                </h3>
                
                {/* Location with Icon - Slides in opacity on hover */}
                <div className="flex items-center gap-2 text-slate-300 opacity-80 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                  <MapPin className="w-4 h-4 text-[#ea580c]" />
                  <span className="text-sm font-medium">{project.location}</span>
                </div>

                {/* Hidden "View Details" button that fades in */}
                <div className="overflow-hidden">
                  <div className="flex items-center gap-2 text-[#ea580c] font-bold text-sm uppercase tracking-wider opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    View Project Details <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-only View All Button */}
        <div className="mt-10 flex justify-center md:hidden">
          <button className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">
            View All Projects <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;