import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-orange-500 font-semibold uppercase tracking-wide mb-2">
            About Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Building better spaces for all
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Desirable Design & Construction is a trusted construction company in Bangalore,
            committed to creating high-quality, practical, and stylish spaces that exceed
            client expectations.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div>
            <img
              src="/images/ELE/2.jpg"
              alt="About BrewFlock"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <p className="text-gray-600 mb-6">
              With over 30 projects completed across Bengaluru, Mysore, and Hassan,
              we take pride in our expertise in commercial, residential, industrial,
              and infrastructure development. Our goal is to bring client visions
              to life with lasting, high-quality results that meet their needs and
              enhance their spaces for the long term.
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {[
                "Dedicated Project Team for Clients",
                "Guaranteed Timely Project Delivery",
                "No Hidden Costs, Clear Estimates",
                "Premium Materials for Every Build",
                "In-house Architectural Design Expertise",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✔</span>
                  <span className="font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              
              {/* Button */}
              <a
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition duration-300"
              >
                Get Free Quote
              </a>

              {/* Contact */}
              <div className="flex items-center gap-3">
                <img
                  src="/images/icon-phone.svg"
                  alt="Phone"
                  className="w-10 h-10"
                />
                <div>
                  <p className="text-sm text-gray-500">
                    Call our support center 24X7
                  </p>
                  <a href="tel:+917338287427">
                    <h3 className="text-lg font-semibold text-gray-900">
                      7338287427
                    </h3>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;