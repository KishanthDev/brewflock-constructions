import React from 'react';
import { Layers3, Camera, Ruler, LayoutPanelLeft, Sun } from 'lucide-react';

const DesignVisualizationSection: React.FC = () => {
    const services = [
        { title: '3D Modeling & Elevation', icon: Layers3 },
        { title: 'Architectural Visualization', icon: Camera },
        { title: 'Concept Design', icon: Ruler },
        { title: 'Floor Plan Design', icon: LayoutPanelLeft },
        { title: 'Interior & Exterior', icon: Sun },
    ];

    // Duplicated array for the seamless mobile marquee loop
    const duplicatedServices = [...services, ...services, ...services];

    return (
        <section id="design-visualization" className="py-14 md:py-20 bg-slate-50 overflow-hidden">
            
            {/* Custom animation: Right to Left, continuous movement */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes scroll-rtl {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                .animate-marquee-mobile {
                    animation: scroll-rtl 25s linear infinite;
                }
            `}} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* ── HEADER ── */}
                <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
                    <span className="text-[#ea580c] font-semibold uppercase tracking-[0.2em] text-xs block mb-2">
                        Visualization
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        Design & Visualization
                    </h2>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        Photorealistic visuals that help you explore and refine your project before construction begins.
                    </p>
                </div>

                {/* ── DESKTOP GRID (Hidden on Mobile) ── */}
                <div className="hidden md:flex flex-wrap justify-center gap-x-10 gap-y-10">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div 
                                key={index} 
                                className="group flex flex-col items-center text-center w-[140px] cursor-pointer"
                            >
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center 
                                    text-slate-400 border border-slate-100 shadow-sm transition-all duration-300
                                    group-hover:text-[#ea580c] group-hover:border-orange-200 group-hover:shadow-md group-hover:-translate-y-1"
                                >
                                    <Icon className="w-8 h-8 stroke-[1.5]" />
                                </div>
                                <h3 className="mt-4 text-sm font-semibold text-slate-700 
                                    group-hover:text-[#ea580c] transition-colors duration-200 leading-snug">
                                    {service.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ── MOBILE ANIMATED SCROLL (Hidden on Desktop) ── */}
            <div className="md:hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pt-2 pb-6">
                <div className="flex w-max animate-marquee-mobile gap-x-6 px-4">
                    {duplicatedServices.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div 
                                key={index} 
                                className="group flex flex-col items-center text-center w-[120px] flex-shrink-0 cursor-pointer"
                            >
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                                    text-slate-400 border border-slate-100 shadow-sm transition-all duration-300
                                    active:text-[#ea580c] active:border-orange-200 active:-translate-y-1"
                                >
                                    <Icon className="w-6 h-6 stroke-[1.5]" />
                                </div>
                                <h3 className="mt-3 text-xs font-semibold text-slate-700 leading-snug">
                                    {service.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
};

export default DesignVisualizationSection;