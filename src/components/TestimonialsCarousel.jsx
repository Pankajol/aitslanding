"use client";
import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Client 1",
    feedback: "This ERP solution transformed our business operations.",
    image: "https://example.com/client1.jpg",
  },
  {
    name: "Client 2",
    feedback: "AITS provides unmatched ERP customization and support.",
    image: "https://example.com/client2.jpg",
  },
  {
    name: "Client 3",
    feedback: "Excellent service with fast implementation.",
    image: "https://example.com/client3.jpg",
  },
  {
    name: "Client 4",
    feedback: "A trustworthy partner for ERP solutions.",
    image: "https://example.com/client4.jpg",
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-6">Client Testimonials</h2>
      <Slider {...settings} className="max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="italic text-gray-700 mb-3">{testimonial.feedback}</p>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsCarousel;
