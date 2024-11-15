// import React from 'react';

// const ContactForm = () => {
//   return (
//     <section className="w-full h-full flex items-center justify-center p-4">
//       <form action='/contact-us/#wpcf7-f606-o1' className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg space-y-6">
        
//         <h3 className="text-2xl font-bold text-gray-800 text-center">Get in Touch</h3>
        
//         <div>
//           <label htmlFor="name" className="block text-gray-700">Name</label>
//           <input
//             type="text"
//             id="name"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             placeholder="Your Name"
//             required
//           />
//         </div>
        
//         <div>
//           <label htmlFor="company" className="block text-gray-700">Company Name</label>
//           <input
//             type="text"
//             id="company"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             placeholder="Company Name"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="phone" className="block text-gray-700">Phone</label>
//           <input
//             type="tel"
//             id="phone"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             placeholder="Phone Number"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="city" className="block text-gray-700">City</label>
//           <input
//             type="text"
//             id="city"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             placeholder="City"
//             required
//           />
//         </div>
        
//         <div>
//           <label htmlFor="email" className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             id="email"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             placeholder="Your Email"
//             required
//           />
//         </div>
        
//         <div>
//           <label htmlFor="message" className="block text-gray-700">Message</label>
//           <textarea
//             id="message"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             rows={4}
//             placeholder="Your Message"
//             required
//           ></textarea>
//         </div>
        
//         <button
//           type="submit"
//           className="w-full bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 transition duration-300"
//         >
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// };

// export default ContactForm;

// // import React from 'react';
// // const ContactForm = () => {
// //   return (
// //     <section className="contact-form">
// //       <iframe 
// //         src="https://aitsind.com/contact-us/" 
// //         title="Contact Form" 
// //         width="100%" 
// //         height="600px"
// //         frameBorder="0"
// //       />
// //     </section>
// //   );
// // };

// // export default ContactForm;
"use client"
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    city: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});


  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.company.trim()) newErrors.company = 'Company name is required.';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid phone number is required.';
    if (!formData.city.trim()) newErrors.city = 'City is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Reset errors
    setErrors({});

    // Proceed with submission
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: JSON.stringify({ ...formData, access_key:"c4b3f742-0cc5-4810-87c0-561a69b4c817"
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          company: '',
          phone: '',
          city: '',
          email: '',
          message: '',
        });
      })
      .catch(() => alert('Failed to send the message. Please try again.'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section className="w-full h-full flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg space-y-6">
        <h3 className="text-2xl font-bold text-gray-800 text-center">Get in Touch</h3>

        {['name', 'company', 'phone', 'city', 'email', 'message'].map((field) => (
          <div key={field}>
            <label htmlFor={field} className="block text-gray-700 capitalize">
              {field}
            </label>
            {field !== 'message' ? (
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors[field] ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400`}
                placeholder={`Enter your ${field}`}
              />
            ) : (
              <textarea
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors[field] ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400`}
                rows={4}
                placeholder={`Enter your ${field}`}
              />
            )}
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-orange-400 text-white p-3 rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;

