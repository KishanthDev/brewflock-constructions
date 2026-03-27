import React from 'react';

const ProjectsSection: React.FC = () => {
  const projects = [
    { title: 'Modern Villa', image: 'https://via.placeholder.com/600x400' },
    { title: 'City Scape Tower', image: 'https://via.placeholder.com/600x400' },
    { title: 'Suburban Family Home', image: 'https://via.placeholder.com/600x400' },
    { title: 'Commercial Office Space', image: 'https://via.placeholder.com/600x400' },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group rounded-xl overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
