import React from 'react';

const IconPlaceholder: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export function WhyChooseUs() {
  const features = [
    {
      icon: IconPlaceholder,
      title: "Transparent Process",
      desc: "No hidden costs or surprises. We keep you informed at every stage with clear communication."
    },
    {
      icon: IconPlaceholder,
      title: "Expertise & Experience",
      desc: "Backed by deep industry knowledge, we handle every project with confidence and care."
    },
    {
      icon: IconPlaceholder,
      title: "Innovative Solutions",
      desc: "We bring smart, forward-thinking ideas to every build, making spaces more modern and efficient."
    },
    {
      icon: IconPlaceholder,
      title: "End to End Service",
      desc: "Our team supports you through every step, ensuring your space is delivered exactly as promised."
    },
    {
      icon: IconPlaceholder,
      title: "Quality Standards",
      desc: "Maintain the same high standards of craftsmanship, materials, and attention to detail across all residential and commercial projects."
    }
  ];

  const stats = [
    { value: "100", suffix: "%", label: "Full Delight Clients" },
    { value: "15", suffix: "Years", label: "Structural Warranty" },
    { value: "104", suffix: "+", label: "Happy Families" },
    { value: "105k", suffix: "SQFT", label: "Successfully Constructed" } 
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[#ea580c] font-semibold uppercase tracking-widest text-sm block mb-4">
            Why Choose Us?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Why we're your best choice
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            With years of experience and a focus on collaboration, we bring creativity, adaptability, and a strong commitment to quality to deliver results that truly exceed expectations.
          </p>
        </div>

        {/* ── FEATURES GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16 md:mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center text-center p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative Corner Flare */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center h-full">
                {/* Icon Container */}
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-colors duration-500 shadow-sm">
                  <feature.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-[#ea580c] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── STATS SECTION (2x2 on Mobile, 1x4 on Desktop) ── */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          
          {/* Subtle Accent Line at the top of the dark box */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[#ea580c]/50 to-transparent"></div>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 lg:gap-8 lg:divide-x divide-slate-800 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center px-2">
                
                <div className="flex items-baseline gap-1 text-[#ea580c] mb-2">
                  <span className="text-4xl md:text-5xl font-black tracking-tight">{stat.value}</span>
                  <span className="text-xl md:text-2xl font-bold">{stat.suffix}</span>
                </div>
                
                <p className="text-slate-300 font-semibold text-xs md:text-sm uppercase tracking-widest leading-snug max-w-[150px]">
                  {stat.label}
                </p>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}