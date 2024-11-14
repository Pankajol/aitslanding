import React from 'react';

const ContactForm = () => {
  return (
    <section className="w-full h-full flex items-center justify-center p-4">
      <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg space-y-6">
        
        <h3 className="text-2xl font-bold text-gray-800 text-center">Get in Touch</h3>
        
        <div>
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Your Name"
            required
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-gray-700">Company Name</label>
          <input
            type="text"
            id="company"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Company Name"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700">Phone</label>
          <input
            type="tel"
            id="phone"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Phone Number"
            required
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-gray-700">City</label>
          <input
            type="text"
            id="city"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="City"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Your Email"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea
            id="message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            rows={4}
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
