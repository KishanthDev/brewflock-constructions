import React from 'react';
import { Armchair, Building, Hotel } from 'lucide-react';

const InteriorDesignSection: React.FC = () => {
    const services = [
        {
            title: 'Residential Interiors',
            icon: Armchair,
        },
        {
            title: 'Commercial Interiors',
            icon: Building,
        },
        {
            title: 'Hotel & Café Interiors',
            icon: Hotel,
        },
    ];

    return (
        <section id="interior-design" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm block mb-3">
                        Interior Design
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Crafting Inspired Interiors
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Our interior design services transform spaces into functional, beautiful, and personalized environments.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 text-center">
                                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-600 group-hover:bg-[#ea580c] group-hover:text-white transition-colors duration-300 mx-auto">
                                    <Icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default InteriorDesignSection;