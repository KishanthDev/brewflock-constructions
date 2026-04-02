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
        <section id="design-visualization" className="py-20 md:py-28 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* ── HEADER ── */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <span className="text-[#ea580c] font-semibold uppercase tracking-widest text-sm block mb-4">
                        Visualization
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        Design & Visualization
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        We create stunning, photorealistic visualizations that allow you to explore and perfect your project before construction even begins.
                    </p>
                </div>

                {/* ── MINIMAL FLOATING GRID ── */}
                {/* Using flex-wrap with center alignment so 5 items always look perfectly balanced on any screen size */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 md:gap-x-12 lg:gap-x-16">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div 
                                key={index} 
                                className="group flex flex-col items-center text-center w-[140px] md:w-[160px] cursor-pointer"
                            >
                                {/* Floating Minimal Icon */}
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center text-slate-400 shadow-sm border border-slate-100 group-hover:border-orange-100 group-hover:bg-orange-50 group-hover:text-[#ea580c] group-hover:shadow-lg group-hover:-translate-y-2 transition-all duration-500">
                                    <Icon className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5]" />
                                </div>
                                
                                {/* Refined Typography */}
                                <h3 className="mt-6 text-sm md:text-base font-bold text-slate-700 group-hover:text-[#ea580c] transition-colors duration-300 leading-snug">
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