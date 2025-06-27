"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const Testimonals = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  const testimonials = [
    {
      name: "Ann Lubin",
      title: "Co-Founder",
      image: "/images/ann.png", // Replace with actual image path
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.",
    },
    {
      name: "John Doe",
      title: "CEO",
      image: "/images/john.jpg",
      text: "Facilisis ac erat dictum tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
    },
    {
      name: "Jane Smith",
      title: "Designer",
      image: "/images/jane.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ac erat dictum tincidunt rhoncus.",
    },
  ];
  return (
    <div
      style={{
        background: " linear-gradient(90deg, #E1F4FF 0%, #4CBAFA 100%)",
      }}
    >
      <h1 className="text-white font-bold text-3xl text-center pt-3 md:pt-16">
        Our Happy Customers
      </h1>
      <div className="flex justify-center px-4 mt-3 py-4">
        <p className="text-white font-normal text-base text-center max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>
      <div className=" py-16 flex flex-col items-center">
        <div className="relative w-full max-w-4xl overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full px-6 flex justify-center items-center"
              >
                <div className="bg-white rounded-xl shadow-xl p-8 max-w-xl text-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-3xl font-bold text-[#232233] ">
                    {testimonial.name}
                  </h3>
                  <p className="text-xl text-[#232233] mb-4">
                    {testimonial.title}
                  </p>
                  <p className="text-[#6C6C72] text-base">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex space-x-2 mt-8 cursor-pointer">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full ${
                index === activeIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
