"use client";
import React from "react";
import Image from "next/image"; // Use <img> if you're not using Next.js
import { useLanguage } from "@/app/context/LanguageContext";

const FeatureCard = ({ icon, title, description }) => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";
  return (
    <div
      className="bg-[#EAF3FE] p-6 rounded-xl max-w-sm w-full shadow-sm hover:shadow-md transition duration-300"
      dir={`${isArabic && "rtl"}`}
    >
      {/* Icon */}
      <div className="mb-4">
        <div className="bg-white w-20 h-20 flex justify-center items-center rounded-[10px]">
          {" "}
          <Image
            src={icon}
            alt={title}
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#0E1F51] mb-2">{title}</h3>

      {/* Line Divider */}
      <div className="flex gap-x-3 my-4">
        {" "}
        <div className="h-1.5  w-15 bg-[#007BFF] rounded-full "></div>
        <div className="h-1.5  w-5 bg-[#007BFF] rounded-full "></div>
      </div>

      {/* Description */}
      <p className="text-sm text-[#000000]">{description}</p>
    </div>
  );
};

export default FeatureCard;
