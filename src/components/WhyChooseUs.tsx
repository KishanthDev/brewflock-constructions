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
      desc: "No hidden costs or surprises. We keep you informed at every stage with clear communication and honest pricing."
    },
    {
      icon: IconPlaceholder,
      title: "Expertise and Experience",
      desc: "Backed by deep industry knowledge, we handle every project with confidence and care, delivering reliable results that last."
    },
    {
      icon: IconPlaceholder,
      title: "Innovative Solutions",
      desc: "We bring smart, forward-thinking ideas to every build, making spaces more functional, modern, and efficient for everyday use."
    },
    {
      icon: IconPlaceholder,
      title: "End to End Service",
      desc: "Our experienced team supports you through every step, ensuring your space is delivered exactly as promised, on time and with care."
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
    { value: "105,000", suffix: "SQFT", label: "Successfully Constructed" }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-yellow-500 font-bold uppercase tracking-wider text-sm">
            Why Choose Us?
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-800 sm:text-5xl">
            Why we're your best choice
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            With years of experience and a focus on collaboration, we bring creativity, adaptability, and a strong commitment to quality. We work closely with clients to deliver results that truly exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-500">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-700">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center pt-6 sm:pt-0 px-4">
                <div className="flex items-baseline gap-1 text-yellow-500">
                  <span className="text-5xl font-black tracking-tight">{stat.value}</span>
                  <span className="text-2xl font-bold">{stat.suffix}</span>
                </div>
                <p className="mt-2 text-white font-semibold text-lg uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}