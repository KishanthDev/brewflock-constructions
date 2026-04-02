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

    return (
        <section id="design-visualization" className="py-14 md:py-20 bg-slate-50">
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

                {/* ── GRID ── */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 md:gap-x-10 md:gap-y-10">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div 
                                key={index} 
                                className="group flex flex-col items-center text-center w-[120px] md:w-[140px]"
                            >
                                {/* ICON */}
                                <div className="w-16 h-16 md:w-18 md:h-18 bg-white rounded-full flex items-center justify-center 
                                    text-slate-400 border border-slate-100 shadow-sm
                                    transition-all duration-300
                                    group-hover:text-[#ea580c]
                                    group-hover:border-orange-200
                                    group-hover:shadow-md
                                    group-hover:-translate-y-1"
                                >
                                    <Icon className="w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />
                                </div>
                                
                                {/* TEXT */}
                                <h3 className="mt-3 text-xs md:text-sm font-semibold text-slate-700 
                                    group-hover:text-[#ea580c] transition-colors duration-200 leading-snug">
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