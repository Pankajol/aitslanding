import React from 'react';
import SetDemoButton from './Button';

const Features = () => {
  return (
    <section className="bg-blue-200 p-10 space-y-10 md:space-y-0 md:flex md:items-center md:space-x-10 rounded-lg shadow-lg">
      {/* <div className="max-w-7xl mx-auto px-6 space-y-8 flex"> */}
        {/* Text and Information Div */}
        <div className="md:w-1/2">
          <img
            src="https://aitsind.com/wp-content/uploads/2024/09/Best-ERP-Software.png"
            alt="Best ERP Software"
            className="rounded-lg shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300"
          />
         
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            BEST AITS ERP Business Solution
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AITS goes beyond software. We foster a community for SAP customers and SAP Business One customers. Connect with peers, share experiences, and maximize the value of your ERP solutions.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Looking for the best ERP software? AITS offers a solution that streamlines business processes and boosts productivity. Built to fit your organization's unique needs, no matter the size or industry.
          </p> 
          <SetDemoButton buttonText='SCHEDULE FREE DEMO' />
        </div>

        {/* Image and Demo Div */}
   
      {/* </div> */}
    </section>
  );
};

export default Features;
