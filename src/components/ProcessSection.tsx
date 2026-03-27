import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ProcessSection: React.FC = () => {
  // State to track the currently selected step (1 to 6)
  const [activeStep, setActiveStep] = useState(1);

  // The data structure for our 6-step process
  const steps = [
    {
      id: 1,
      label: 'Raise a Request',
      title: 'Step 1 – Raise a Request',
      description: 'Start by sharing your vision with us. Whether it’s a residential or commercial project, we’ll understand your requirements and set the foundation for your dream space.',
      // UPDATED: Fresh image of an architectural consultation/office
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    },
    {
      id: 2,
      label: 'Meet our Expert',
      title: 'Step 2 – Meet Our Expert',
      description: 'Consult with our experienced team to discuss your ideas. Our experts provide guidance, suggestions, and tailored solutions to bring your vision to life, ensuring clarity.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 3,
      label: 'Book with Us',
      title: 'Step 3 – Book with Us',
      description: 'Once you are satisfied with the plan, confirm your project with us. We offer flexible packages and clear agreements to ensure a smooth start, giving you confidence.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 4,
      label: 'Receive Designs',
      title: 'Step 4 – Receive Designs',
      description: 'Our team will present customized architectural designs that align with your vision. Every design is carefully crafted to maximize space, functionality, and aesthetics.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop'
    },
    {
      id: 5,
      label: 'Track & Transact',
      title: 'Step 5 – Track & Transact',
      description: 'Stay updated with our transparent tracking system. You’ll be able to monitor progress, make secure payments, and ensure everything is on schedule.',
      // UPDATED: Fresh image of active construction progress
      image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 6,
      label: 'Settle In',
      title: 'Step 6 – Settle In',
      description: 'Once construction is complete, it’s time to enjoy your new space. We ensure you’re fully satisfied with the final result, and our team will help with any final touches.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop'
    }
  ];

  // Find the currently active step data
  const currentStepData = steps.find(step => step.id === activeStep) || steps[0];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm block mb-3">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-slate-900 font-bold mb-2">
            Dream - Design - Build - Live.
          </p>
          <p className="text-slate-600 leading-relaxed">
            From concept to creation, we ensure every step brings you closer to your ideal home, built with care and crafted to last.
          </p>
        </div>

        {/* --- 1. Interactive Top Navigation Bar --- */}
        <div className="mb-12 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex justify-between items-center min-w-[800px] relative">
            
            {/* The background connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
            
            {/* The active progress line */}
            <div 
              className="absolute top-1/2 left-0 h-1 bg-[#ea580c] -translate-y-1/2 z-0 transition-all duration-500 ease-out"
              style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
            ></div>

            {/* The Step Nodes */}
            {steps.map((step) => {
              const isActive = step.id === activeStep;
              const isPassed = step.id < activeStep;
              
              return (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className="relative z-10 flex flex-col items-center cursor-pointer group w-32"
                >
                  {/* The Circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 border-4 shadow-sm
                    ${isActive 
                      ? 'bg-[#ea580c] border-orange-200 text-white scale-110 shadow-orange-500/30' 
                      : isPassed 
                        ? 'bg-orange-100 border-orange-200 text-[#ea580c]' 
                        : 'bg-white border-slate-200 text-slate-400 group-hover:border-slate-300'
                    }`}
                  >
                    {isPassed ? <CheckCircle2 className="w-6 h-6" /> : step.id}
                  </div>
                  
                  {/* The Label */}
                  <span className={`mt-4 text-sm font-semibold text-center transition-colors duration-300
                    ${isActive ? 'text-[#ea580c]' : 'text-slate-500 group-hover:text-slate-700'}
                  `}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- 2. Dynamic Content Box --- */}
        {/* We use a key to force React to re-mount and animate the box when the step changes */}
        <div 
          key={activeStep} 
          className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
          <div className="grid lg:grid-cols-2">
            
            {/* Left Image */}
            <div className="h-[300px] lg:h-[500px] relative overflow-hidden">
              <img 
                src={currentStepData.image} 
                alt={currentStepData.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent lg:hidden"></div>
            </div>

            {/* Right Text Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-[#ea580c] font-black text-xl mb-4 block">
                Step 0{currentStepData.id}
              </span>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">
                {currentStepData.title.split('– ')[1] || currentStepData.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                {currentStepData.description}
              </p>
              
              <div>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-orange-900/20 active:scale-95"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;