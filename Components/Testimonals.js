"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import axios from "axios";
import { getStrapiMedia } from "../utils/getStrapiMedia";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/above-footers?locale=${language}&populate[0]=firstImage&populate[1]=secondImage&populate[2]=thirdImage`
      )
      .then((res) => setData(res.data.data))
      .catch((err) => console.error("Error fetching images:", err));
  }, [language]);

  // const testimonials = [
  //   {
  //     name: t.testimonials[0].name,
  //     title: t.testimonials[0].title,
  //     image: "/images/ann.png",
  //     text: t.testimonials[0].text,
  //   },
  //   {
  //     name: t.testimonials[1].name,
  //     title: t.testimonials[1].title,
  //     image: "/images/john.jpg",
  //     text: t.testimonials[1].text,
  //   },
  //   {
  //     name: t.testimonials[2].name,
  //     title: t.testimonials[2].title,
  //     image: "/images/jane.jpg",
  //     text: t.testimonials[2].text,
  //   },
  // ];

  const testimonials =
    data && data[0]
      ? [
          {
            name: data[0]?.firstTitle,
            title: data[0]?.firstsub,
            image: getStrapiMedia(data[0].firstImage?.url),
            text: data[0]?.firstDescription,
          },
          {
            name: data[0]?.secondTitle,
            title: data[0]?.secondsub,
            image: getStrapiMedia(data[0].secondImage?.url),
            text: data[0]?.secondDescription,
          },
          {
            name: data[0]?.thirdTitle,
            title: data[0]?.thirdsub,
            image: getStrapiMedia(data[0].thirdImage?.url),
            text: data[0]?.thirdDescription,
          },
        ]
      : [];
  return (
    <div
      className={` ${isArabic ? "text-right" : ""}`}
      style={{
        background: "linear-gradient(90deg, #E1F4FF 0%, #4CBAFA 100%)",
      }}
    >
      <h1 className="text-white font-bold text-3xl text-center pt-3 md:pt-16">
        {/* {t.testimonialsHeading} */}
        {data && data[0]?.title}
      </h1>
      <div className="flex justify-center px-4 mt-3 py-4">
        <p className="text-white font-normal text-base text-center max-w-[600px]">
          {/* {t.testimonialsSubheading} */}
          {data && data[0]?.description}
        </p>
      </div>

      <div className="py-16 flex flex-col items-center">
        <div className="relative w-full max-w-4xl overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials?.map((testimonial, index) => (
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

export default Testimonials;
