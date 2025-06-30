"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import React from "react";

const Main = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div className="relative w-full">
      {/* Background Image with overlay color */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Home.jpg')",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#E1F4FF", opacity: 0.8 }}
        />
      </div>

      {/* Content Layer */}
      <div
        className={`relative z-10 flex flex-col md:flex-row w-full justify-around py-10 px-4 gap-6 ${
          language === "ar" ? "md:flex-row-reverse text-right" : "text-left"
        }`}
      >
        {/* Text Section */}
        <div className="md:pr-8 text-center md:text-left">
          <h1 className="md:text-[41px] text-3xl text-[#007BFF] font-semibold max-w-xl leading-tight mb-3">
            {t.title}
          </h1>
          <span className="text-[#373737] text-2xl font-normal ">
            {t.subtitle}
          </span>

          <div
            className={`flex gap-4 flex-wrap justify-center md:mt-28 md:px-28 ${
              language === "ar" ? "md:justify-end" : "md:justify-start"
            }`}
          >
            {/* Google Play */}
            <a
              href="#"
              className="flex items-center bg-[#252B42] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#1e1e30] transition"
            >
              <div className="relative w-8 h-9">
                <Image src="/images/Vector.png" fill alt="Google Play" />
              </div>
              <div
                className={`ml-3 text-left ${
                  language === "ar" ? "text-right ml-0 mr-3" : ""
                }`}
              >
                <p className="text-xs">{t.downloadGoogle.line1}</p>
                <p className="text-sm font-semibold">
                  {t.downloadGoogle.line2}
                </p>
              </div>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="flex items-center bg-[#252B42] text-white px-4 py-3 rounded-lg shadow-md hover:bg-[#1e1e30] transition"
            >
              <div className="relative w-8 h-9">
                <Image
                  src="/images/apple.png"
                  alt="App Store"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className={`ml-3 text-left ${
                  language === "ar" ? "text-right ml-0 mr-3" : ""
                }`}
              >
                <p className="text-xs">{t.downloadApple.line1}</p>
                <p className="text-sm font-semibold">{t.downloadApple.line2}</p>
              </div>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/images/screen.png"
            height={600}
            width={250}
            alt="screen"
            className="object-contain"
          />
          <Image
            src="/images/chat.png"
            alt="chat"
            width={60}
            height={60}
            className={`fixed md:right-10 hidden md:block ${
              isArabic && "left-10"
            } } `}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
