import React from 'react';
import { Mail, Phone, MapPin, Send, Clock, Building } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 relative bg-[#0B1120] text-white overflow-hidden">
      
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Reduced gap from 16 to 10 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#ea580c] text-[10px] font-bold uppercase tracking-widest mb-4">
                <Building className="w-3 h-3" /> Get In Touch
              </div>
              {/* Shrunk headline from 4xl/6xl to 3xl/4xl */}
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
                Let's build <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                  something great.
                </span>
              </h2>
              {/* Reduced text size from text-lg to text-base */}
              <p className="text-slate-400 text-base leading-relaxed max-w-sm">
                Ready to break ground? Our engineering and design teams are standing by to review your project requirements.
              </p>
            </div>

            {/* Compact Contact Cards */}
            <div className="space-y-3">
              {/* Phone Card */}
              <div className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700 text-slate-400 group-hover:text-[#ea580c] group-hover:border-orange-500/30 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">Call Us Directly</p>
                  <p className="text-base font-bold text-slate-200 group-hover:text-white transition-colors">1-800-BREWFLOCK</p>
                </div>
              </div>
              
              {/* Email Card */}
              <div className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700 text-slate-400 group-hover:text-[#ea580c] group-hover:border-orange-500/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">Email the Team</p>
                  <p className="text-base font-bold text-slate-200 group-hover:text-white transition-colors">bids@brewflock.com</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="group flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700 text-slate-400 group-hover:text-[#ea580c] group-hover:border-orange-500/30 transition-colors shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">Headquarters</p>
                  <p className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors leading-tight">123 Builder Way, Industry City, IN 560001</p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-slate-400">
                    <Clock className="w-3 h-3" /> Mon - Fri, 8AM - 6PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="lg:col-span-7 relative">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[105%] bg-gradient-to-tr from-[#ea580c]/10 via-amber-500/5 to-transparent blur-3xl rounded-[3rem] -z-10 pointer-events-none"></div>
            
            {/* Reduced form padding from p-12 to p-8 */}
            <div className="bg-slate-900/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-slate-700/60 shadow-2xl relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-bl-full blur-xl"></div>

              <h3 className="text-xl font-bold mb-6 text-white">Project Inquiry Form</h3>
              
              {/* Reduced form item gap from space-y-6 to space-y-4 */}
              <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="firstName" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 text-sm bg-slate-950/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-[#ea580c] focus:border-[#ea580c] focus:bg-slate-900 transition-all" 
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="lastName" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 text-sm bg-slate-950/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-[#ea580c] focus:border-[#ea580c] focus:bg-slate-900 transition-all" 
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 text-sm bg-slate-950/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-[#ea580c] focus:border-[#ea580c] focus:bg-slate-900 transition-all" 
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="service" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project Type</label>
                    <div className="relative">
                      <select 
                        id="service"
                        className="w-full px-4 py-3 text-sm bg-slate-950/50 border border-slate-700/50 rounded-lg text-slate-300 focus:outline-none focus:ring-1 focus:ring-[#ea580c] focus:border-[#ea580c] focus:bg-slate-900 transition-all appearance-none cursor-pointer"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a service...</option>
                        <option>Commercial Build-out</option>
                        <option>Custom Residential</option>
                        <option>Industrial Infrastructure</option>
                        <option>Architectural Design</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project Scope</label>
                  <textarea 
                    id="message" 
                    rows={3} 
                    className="w-full px-4 py-3 text-sm bg-slate-950/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-[#ea580c] focus:border-[#ea580c] focus:bg-slate-900 transition-all resize-none"
                    placeholder="Briefly describe your requirements..."
                  ></textarea>
                </div>

                {/* Reduced button padding */}
                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2 bg-[#ea580c] text-white font-bold py-3 px-6 mt-2 rounded-lg hover:bg-[#c2410c] hover:shadow-orange-900/50 active:scale-[0.98] transition-all duration-300 shadow-md shadow-orange-900/30 text-sm"
                >
                  Submit Inquiry <Send className="w-4 h-4" />
                </button>
                
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;