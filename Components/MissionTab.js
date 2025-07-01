"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";
import React from "react";

const MissionTab = ({ heading, image, text }) => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";
  return (
    <div className="bg-white rounded-[10px]  px-2 md:h-[100px] md:w-[263px]  ">
      <div className="flex md:flex-row flex-col justify-center gap-4 py-3">
        <div className="bg-[#007BFF]/10 p-3 rounded-[10px] flex items-center justify-center md:w-[70px] w-full ">
          <Image src={image} width={35} height={35} alt="icon" />
        </div>
        <div>
          <p
            className={`text-base font-bold text-[#007BFF] md:max-w-[148px]  ${
              isArabic && "md:ml-[60%]"
            }`}
          >
            {heading}
          </p>
          <p className="text-base font-medium text-[#0E1F51] md:max-w-[148px] ">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionTab;
