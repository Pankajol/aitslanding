import React from 'react';
import ContactForm from './ContactForm';

const Hero = () => {
  return (
    <section className="bg-blue-200 flex flex-col md:flex-row items-center justify-center p-10 space-y-8 md:space-y-0 md:space-x-8">

      <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left space-y-4 ">

        <h1 className="text-4xl font-bold">Ready to drive your wholesale and distribution business to unprecedented levels of success? With Best ERP Solutions for Your Business.</h1>
        <p className="mt-4 text-lg text-gray-500">Streamline your business operations with our ERP software. Schedule a free demo today!</p>
        <img
          src="https://aitsind.com/wp-content/uploads/2024/05/ERP-Software-for-Businesses_Mesa-de-trabajo-1.png"
          alt="ERP Software Illustration"
          className="rounded-lg shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300"
        />
        <p className="mt-4 text-lg text-gray-500">
          Experience the future of wholesale and distribution with our cutting-edge business solutions designed specifically for your industry. Say goodbye to manual tasks and embrace streamlined, efficient operations.Our distribution management software adapts to the diverse needs of the field, covering everything from inventory management to order fulfillment, shipment tracking, and customer relationship support. Tailored for flexibility, our solutions integrate smoothly with existing workflows, empowering you to oversee every aspect of your business, whether you’re a large wholesaler or a mid-sized distributor</p>
        <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300">
          Schedule Demo
        </button>
      </div>

      <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left space-y-4 ">
        <ContactForm />
      </div>
    </section>
  );
};

export default Hero;
