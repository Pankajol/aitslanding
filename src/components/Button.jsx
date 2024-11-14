"use client"
import React, { useState } from 'react';
import ContactForm from './ContactForm';
import { X } from 'lucide-react';


const SetDemoButton = ({ buttonText = "Schedule Demo" }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="p-6">
      <button
        onClick={handleButtonClick}
        className="mt-6 bg-orange-400 text-black px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        {buttonText}
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md max-h-[90vh] mx-4 md:mx-0 overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              <X />
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default SetDemoButton;
