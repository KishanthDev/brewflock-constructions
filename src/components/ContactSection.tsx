import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="w-full max-w-lg mx-auto">
          <form className="bg-gray-900 p-8 rounded-xl shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 text-gray-800 rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 text-gray-800 rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full px-3 py-2 text-gray-800 rounded-lg"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
