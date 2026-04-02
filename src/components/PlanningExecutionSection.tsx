import React from 'react';

const PlanningExecutionSection: React.FC = () => {
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
            tools: ['SketchUp', 'Lumion', 'Revit', 'Photoshop'],
        },
        {
            step: '03',
            title: 'Working Drawings & Execution',
            description: 'Producing detailed, highly precise technical blueprints to ensure flawless and seamless on-site execution.',
            tools: ['AutoCAD', 'Revit'],
        },
    ];

    return (
        <section id="planning-execution" className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* ── HEADER (Matched exactly to other sections) ── */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
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

                {/* ── UNIFIED GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {items.map((item, index) => (
                        <div 
                            key={index} 
                            // Exact padding and border radius as other sections
                            className="group relative bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col h-full cursor-pointer"
                        >
                            {/* Decorative Corner Flare */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
                            
                            {/* Decorative Background Watermark Number */}
                            <div className="absolute -top-6 -right-4 text-8xl font-black text-slate-200/40 group-hover:text-orange-100/40 transition-colors duration-500 pointer-events-none select-none z-0">
                                {item.step}
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                
                                {/* Icon Container (Restored to exact dimensions: w-14 h-14 mb-6) */}
                                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-colors duration-500 mb-6 shadow-sm">
                                    <span className="font-bold text-xl">{item.step}</span>
                                </div>
                                
                                {/* Content (Restored exact text sizes and margins) */}
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-slate-800 leading-snug mb-3 group-hover:text-[#ea580c] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-sm mb-8">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Software Tags Section */}
                                {/* By using mt-auto, this always locks to the very bottom. If it doesn't exist (like Step 1), the invisible div below takes over to keep heights even. */}
                                {item.tools.length > 0 ? (
                                    <div className="mt-auto pt-6 border-t border-slate-200/60">
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
                                ) : (
                                    <div className="mt-auto" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default PlanningExecutionSection;