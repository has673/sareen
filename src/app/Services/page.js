"use client";

import Image from "next/image";
import React from "react";
import FeatureCard from "../../../Components/FeatureCard";
import OurWorks from "../../../Components/OurWorks";
import { useLanguage } from "@/app/context/LanguageContext";

const Services = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div className="bg-white">
      <OurWorks />

      {/* Section Header */}
      <div
        className={`text-[#0E1F51] font-bold flex flex-col justify-center items-center py-2`}
      >
        <span className="text-2xl">{t.services.headerTop}</span>
        <h4 className="text-[40px]">{t.services.headerTitle}</h4>
      </div>

      {/* Feature Cards */}
      <div className="w-full">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 max-w-6xl mx-auto justify-items-center p-3">
          {t.services.features.map((feature, i) => (
            <FeatureCard
              key={i}
              icon={
                [
                  "/web.png",
                  "/ui.png",
                  "/mig.png",
                  "/hub.png",
                  "/web.png",
                  "/email.png",
                ][i]
              }
              title={feature.title}
              description={feature.desc}
            />
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="flex justify-center md:pt-24 md:pb-12 pt-12 pb-6 px-3">
        <div className="relative w-300 h-100 md:w-[945px] md:h-[300px] rounded-[10px] overflow-hidden">
          {/* Background Image */}
          <Image
            alt="main"
            src="/images/videocall.jpg"
            fill
            className="object-cover"
          />

          {/* Colored Overlay */}
          <div className="absolute inset-0 bg-[#73B7FF] opacity-80 mix-blend-multiply"></div>

          {/* Text on Top */}
          <div
            className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-y-4 text-[#F7F7F7] px-4 ${
              isArabic ? "text-right" : "text-center"
            }`}
          >
            <p className="md:text-[32px] text-2xl font-bold">
              <q>{t.services.quote}</q>
            </p>
            <button className="bg-[#007BFF] flex justify-center item-center text-base text-white font-medium rounded-md px-2 py-2">
              {t.services.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
