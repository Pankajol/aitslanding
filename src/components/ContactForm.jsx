import React from 'react';

const ContactForm = () => {
  return (
    <section className="p-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Request SAP Business One ERP Demo </h2>
      <p className='text-xl font-semibold mb-6 text-gray-500'>Get unmatched offers when you deploy SAP B1 with Uneecops</p>
      <form className="bg-white p-6 rounded-lg shadow-lg space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Get in Touch</h3>
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your Email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea id="message" className="w-full p-3 border border-gray-300 rounded-md" rows={4} placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600 transition duration-300">Send Message</button>
          </form>
    </section>
  );
};

export default ContactForm;
