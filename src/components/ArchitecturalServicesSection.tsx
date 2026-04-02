import React from 'react';
import { 
    Building, 
    Building2, 
    Home, 
    LandPlot, 
    SquareGanttChart,
    Palette,
    PencilRuler 
} from 'lucide-react';

const ArchitecturalServicesSection: React.FC = () => {
    const services = [
        { title: 'Architectural Design', icon: SquareGanttChart },
        { title: 'Building Design', icon: Building },
        { title: 'House Planning', icon: Home },
        { title: 'Residential Design', icon: Home },
        { title: 'Commercial Architecture', icon: Building2 },
        { title: 'Landscape Design', icon: LandPlot },
        { title: 'Interior & Exterior', icon: Palette },
        { title: 'Floor Plan Design', icon: PencilRuler },
    ];

    return (
        // Notice the background is bg-slate-50 here for contrast
        <section id="architectural-services" className="py-20 md:py-28 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <span className="text-[#ea580c] font-semibold uppercase tracking-widest text-sm block mb-4">
                        Design Services
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        Architectural Services
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        We provide a complete range of architectural services, from initial concept to final design, ensuring every detail aligns with your vision.
                    </p>
                </div>

                {/* Unified Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div 
                                key={index} 
                                className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-pointer"
                            >
                                {/* Decorative Corner Flare */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icon Container */}
                                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-colors duration-500 mb-6 shadow-sm">
                                        <Icon className="w-6 h-6 stroke-[1.5]" />
                                    </div>
                                    
                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-[#ea580c] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
            </div>
        </section>
    );
};

export default ArchitecturalServicesSection;