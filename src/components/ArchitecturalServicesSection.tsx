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
        { title: 'Commercial Architect', icon: Building2 },
        { title: 'Landscape Design', icon: LandPlot },
        { title: 'Interior & Exterior', icon: Palette },
        { title: 'Floor Plan Design', icon: PencilRuler },
    ];

    // Duplicate the array to create a seamless infinite loop
    const duplicatedServices = [...services, ...services, ...services];

    return (
        // Reduced top/bottom padding to tighten vertical spacing
        <section id="architectural-services" className="py-16 md:py-20 bg-slate-50 overflow-hidden">
            
            {/* Custom animation: Right to Left, continuous movement */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes scroll-right-to-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                .animate-marquee {
                    animation: scroll-right-to-left 40s linear infinite;
                }
            `}} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-12">
                {/* ── HEADER ── */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-[#ea580c] font-semibold uppercase tracking-widest text-sm block mb-3">
                        Design Services
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                        Architectural Services
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        We provide a complete range of architectural services, from initial concept to final design, ensuring every detail aligns with your vision.
                    </p>
                </div>
            </div>

            {/* ── ANIMATED SCROLLING TRACK ── */}
            <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-2">
                
                {/* Tighter gaps between cards (gap-4 md:gap-6) */}
                <div className="flex w-max animate-marquee gap-4 md:gap-6 px-4">
                    {duplicatedServices.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div 
                                key={index} 
                                // Slightly smaller card width and inner padding for a cleaner cluster
                                className="w-60 md:w-64 group relative bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-pointer flex-shrink-0"
                            >
                                {/* Decorative Corner Flare */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full items-center text-center">
                                    {/* Icon Container */}
                                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-colors duration-500 mb-5 shadow-sm">
                                        <Icon className="w-7 h-7 stroke-[1.5]" />
                                    </div>
                                    
                                    {/* Content */}
                                    <h3 className="text-base md:text-lg font-bold text-slate-800 leading-snug group-hover:text-[#ea580c] transition-colors duration-300">
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