import React from 'react';

const industries = [
  {
    name: "Banking & Finance",
    description:
      "Enhance regulatory compliance, streamline customer onboarding, and get real-time data insights for smarter financial decisions.",
    image: "https://aitsind.com/wp-content/uploads/2024/04/Banking-300x180.jpg", // Replace with actual image URLs
  },
  {
    name: "Chemical Industry",
    description:
      "Optimize production, improve safety compliance, and ensure quality traceability throughout the supply chain.",
    image: "https://aitsind.com/wp-content/uploads/2024/04/Chemicals-300x169.jpg",
  },
  {
    name: "Food & Beverages",
    description:
      "Streamline recipe management and quality assurance, improve safety compliance, and reduce waste.",
    image: "https://aitsind.com/wp-content/uploads/2024/04/Retail-300x169.jpg",
  },
  {
    name: "Hospital Sector",
    description:
      "Enhance patient care coordination, improve billing accuracy, and manage staff and supplies efficiently.",
    image: "https://aitsind.com/wp-content/uploads/2024/04/Pharma-300x169.jpg",
  },
  {
    name: "Logistics",
    description:
      "Optimize route planning and warehouse management, reduce transportation costs, and provide real-time shipment updates.",
    image: "https://aitsind.com/wp-content/uploads/2024/04/Logistics-300x169.jpg",
  },
  {
    name: "Manufacturing",
    description:
      "Improve production efficiency, enhance quality control, and leverage data insights for better forecasting.",
    image: "https://aitsind.com/wp-content/uploads/2024/04/Manufacturing-300x169.jpg",
  },
  {
    name: "Retail Industry",
    description:
      "Offer a unified customer experience, improve inventory management, and target marketing campaigns effectively.",
    image: "https://aitsind.com/wp-content/uploads/2024/04/Packaging-300x169.jpg",
  },
  {
    name: "Textile Industry",
    description:
      "Streamline production, enhance quality control, and improve supply chain visibility.",
    image: "https://aitsind.com/wp-content/uploads/2024/04/Textile-300x169.jpg",
  },
  // {
  //   name: "Trading Industry",
  //   description:
  //     "Automate trade orders, manage risks, and improve portfolio tracking with real-time data analysis.",
  //   image: "https://example.com/trading-industry-demo.png",
  // },
];

const ERPIndustries = () => {
  return (
    <section className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {industries.map((industry, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <img src={industry.image} alt={`${industry.name} Demo`} className="w-full h-48 object-cover rounded-md" />
          <h3 className="mt-4 text-xl font-bold text-gray-800">{industry.name}</h3>
          <p className="mt-2 text-gray-700">{industry.description}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </div>
      ))}
    </section>
  );
};

export default ERPIndustries;
