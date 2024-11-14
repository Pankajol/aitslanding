import React from 'react';

const ERPSection = () => {
  return (
    <section className="bg-white p-10 space-y-10 md:space-y-0 md:flex md:items-center md:space-x-10 rounded-lg shadow-lg">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Implementation of ERP Software</h2>
        <p className="text-lg text-gray-700">
          AITS also provides unparalleled SAP Business Expertise. Our team of certified SAP consultants offers in-depth knowledge of the entire SAP ecosystem, ensuring tailored solutions for your business.
        </p>
        
        {/* List of Services */}
        <ul className="list-disc ml-6 text-gray-700">
          <li><strong>SAP Implementation and Customization</strong>: Implement solutions that fit your needs.</li>
          <li><strong>SAP Integration</strong>: Seamlessly connect SAP with other critical applications.</li>
          <li><strong>SAP Support and Training</strong>: Get ongoing support and training for maximized value.</li>
        </ul>
        
        {/* Benefits Section */}
        <div className="space-y-2 text-gray-700 mt-6">
          <p><strong>Increase operational efficiency</strong>: Streamline processes and free resources for strategy.</p>
          <p><strong>Gain real-time insights</strong>: Make data-driven, informed decisions.</p>
          <p><strong>Boost profitability</strong>: Optimize resources and reduce costs.</p>
        </div>

        {/* Call to Action Button */}
        <button className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition duration-300">
          Contact Us Today
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <img 
          src="https://aitsind.com/wp-content/uploads/2024/04/AITS-Implementation-Process-768x432.jpeg" 
          alt="AITS ERP Implementation Process" 
          className="rounded-lg shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default ERPSection;
