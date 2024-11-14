import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section className="py-12 px-6 md:px-10 flex flex-col md:flex-row bg-white rounded-lg shadow-lg">
      {/* Contact Info Section */}
      <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">CONTACT US</h2>
        <p className="text-lg text-gray-700">
          C-301, Groma House, Vashi,<br />
          Navi Mumbai - 400705, INDIA
        </p>
        <p className="text-lg text-gray-700">Mobile: +91-9004902553</p>
        <p className="text-lg text-gray-700">Telephone: 022-4571-4570</p>
        <p className="text-lg text-gray-700">E-mail: sales@aitsind.com</p>
        <p className="text-lg text-gray-700">Website: <a href="http://www.aitsind.com" className="text-blue-600">www.aitsind.com</a></p>
      </div>

      {/* Contact Form Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        {/* <form className="bg-white p-6 rounded-lg shadow-lg space-y-6">
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
        </form> */}
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
