import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT COLUMN: Image & Contact Info */}
          <div className="flex flex-col space-y-10">
            <div>
              <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm mb-2 block">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Let's discuss your next massive project.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Whether you're looking to build a custom home or a commercial complex, our team of experts is ready to bring your vision to life.
              </p>
            </div>

            {/* Image Wrapper */}
            <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              {/* Replace the src with your actual project image */}
              <img 
                src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                alt="Construction Planning" 
                className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 border-2 border-slate-800/50 rounded-2xl pointer-events-none"></div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 text-[#ea580c]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Call Us Directly</p>
                  <p className="text-lg font-bold">1-800-BREWFLOCK</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 text-[#ea580c]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Email the Team</p>
                  <p className="text-lg font-bold">bids@brewflock.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 text-[#ea580c]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Headquarters</p>
                  <p className="text-lg font-bold">123 Builder Way, Industry City</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="relative">
            {/* Background decorative blur */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ea580c]/20 to-amber-500/20 blur-2xl opacity-50 rounded-[3rem] -z-10"></div>
            
            <div className="bg-slate-800 p-8 md:p-10 rounded-3xl border border-slate-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                Send a Message
              </h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-semibold text-slate-300">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      placeholder="John"
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent transition-all" 
                    />
                  </div>
                  {/* Last Name */}
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-semibold text-slate-300">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent transition-all" 
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent transition-all" 
                  />
                </div>

                {/* Service Interest (Added for construction context) */}
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-300">Service Needed</label>
                  <select 
                    id="service"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent transition-all appearance-none"
                  >
                    <option>Custom Home Build</option>
                    <option>Commercial Construction</option>
                    <option>Remodeling & Renovation</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300">Project Details</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    placeholder="Tell us about your timeline, budget, and vision..."
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2 bg-[#ea580c] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#c2410c] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-orange-900/40"
                >
                  Submit Inquiry <Send className="w-5 h-5" />
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