import React from 'react';

const PlanningExecutionSection: React.FC = () => {
    // 1. Restructured data to separate descriptions from highlighted tools
    const items = [
        {
            step: '01',
            title: 'Architectural Planning & Design',
            description: 'Laying the groundwork with comprehensive plans and innovative designs tailored to your project\'s unique needs and site requirements.',
            tools: [],
        },
        {
            step: '02',
            title: '3D Modeling & Visualization',
            description: 'Bringing concepts to life before construction begins with hyper-realistic 3D models and immersive visual experiences.',
            tools: ['SketchUp', 'Lumion', 'Revit', 'Photoshop'], // Highlighted tools
        },
        {
            step: '03',
            title: 'Working Drawings & Execution',
            description: 'Producing detailed, highly precise technical blueprints to ensure flawless and seamless on-site execution.',
            tools: ['AutoCAD', 'Revit'], // Highlighted tools
        },
    ];

    return (
        <section id="planning-execution" className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* ── HEADER ── */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <span className="text-[#ea580c] font-semibold uppercase tracking-widest text-sm block mb-4">
                        Our Process
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        Planning & Execution
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        We combine meticulous planning with cutting-edge technology to ensure flawless project execution from initial concept to final handover.
                    </p>
                </div>

                {/* ── TIMELINE CONTAINER ── */}
                <div className="relative">
                    
                    {/* Vertical connecting line (Hidden on mobile, visible on desktop) */}
                    <div className="hidden md:block absolute left-[27px] top-6 bottom-6 w-[2px] bg-slate-100" />

                    <div className="space-y-8 md:space-y-12">
                        {items.map((item, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row items-start gap-4 md:gap-10 group">
                                
                                {/* Step Number Indicator */}
                                <div className="flex-shrink-0 relative z-10">
                                    <div className="w-14 h-14 bg-white rounded-full border-4 border-orange-50 flex items-center justify-center shadow-sm group-hover:border-orange-100 group-hover:scale-110 transition-all duration-500">
                                        <span className="text-[#ea580c] font-bold text-lg font-serif">
                                            {item.step}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 w-full">
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 group-hover:text-[#ea580c] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                        {item.description}
                                    </p>

                                    {/* 2. Highlighted Software Tags Section */}
                                    {item.tools.length > 0 && (
                                        <div className="mt-5 pt-5 border-t border-slate-200/60">
                                            <p className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold mb-3">
                                                Powered By
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {item.tools.map((tool, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1.5 bg-orange-100/50 text-[#ea580c] text-xs font-bold tracking-wide rounded-lg border border-orange-200/50 hover:bg-orange-100 transition-colors cursor-default"
                                                    >
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default PlanningExecutionSection;