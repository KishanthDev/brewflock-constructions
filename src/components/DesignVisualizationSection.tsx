import React from 'react';
import { Layers3, Camera, Ruler, LayoutPanelLeft, Sun } from 'lucide-react';

const DesignVisualizationSection: React.FC = () => {
    const services = [
        { title: '3D Modeling & Elevation Design', icon: Layers3 },
        { title: 'Architectural Visualization', icon: Camera },
        { title: 'Concept Design', icon: Ruler },
        { title: 'Floor Plan Design', icon: LayoutPanelLeft },
        { title: 'Interior & Exterior Visualization', icon: Sun },
    ];

    return (
        <section id="design-visualization" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm block mb-3">
                        Visualization
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Design & Visualization
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        We create stunning, photorealistic visualizations that help you see your project before it's built.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="group">
                                <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-slate-500 border-2 border-slate-200 group-hover:border-[#ea580c] group-hover:text-[#ea580c] transition-all duration-300 transform group-hover:scale-110">
                                    <Icon className="w-12 h-12" />
                                </div>
                                <h3 className="mt-5 font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
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