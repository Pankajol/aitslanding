import React from 'react';

const CustomLinkButton = ({ href, linkText }) => {
  return (
    <a
      href={href}
      className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 text-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkText}
    </a>
  );
};

export default CustomLinkButton;
