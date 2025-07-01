"use client";

import Image from "next/image";
import React from "react";
import MissionTab from "./MissionTab";
import { useLanguage } from "@/app/context/LanguageContext";

const OurWorks = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div
      className="w-full"
      style={{
        background: "linear-gradient(180deg, #F2F8FF 0%, #CCE4FF 100%)",
      }}
    >
      <div
        className={`flex flex-col-reverse md:flex-row md:justify-center py-12 px-6 md:px-16 gap-10 items-center ${
          isArabic ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Section */}
        <div className="flex flex-col justify-center md:max-w-xl text-center md:text-left">
          <span
            className={`text-black text-2xl font-bold mb-2 ${
              isArabic && "md:ml-[80%]"
            }`}
          >
            {t.ourWorks.tagline}
          </span>
          <h2
            className={`text-[#007BFF] text-3xl md:text-4xl font-bold leading-tight mb-4 ${
              isArabic && "md:ml-[48%] text-wrap"
            }`}
          >
            {t.ourWorks.heading}
          </h2>
          <p className="text-base font-medium text-[#333] mb-6">
            {t.ourWorks.description}
          </p>

          {/* Vision & Mission */}
          <div className="flex flex-col sm:flex-row gap-4 md:pt-6">
            <MissionTab
              heading={t.ourWorks.vision.title}
              image="/bulb.png"
              text={t.ourWorks.vision.text}
            />
            <MissionTab
              heading={t.ourWorks.mission.title}
              image="/star.png"
              text={t.ourWorks.mission.text}
            />
          </div>
        </div>

        {/* Image */}
        <div className="relative w-[90%] max-w-[350px] md:max-w-[500px] md:h-[460px] h-[280px] flex-shrink-0">
          <Image
            src="/images/people.png"
            alt="people working"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
