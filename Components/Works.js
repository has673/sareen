"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import ar from "@/app/locale/ar";
import en from "@/app/locale/en";

export default function Works() {
  const { language } = useLanguage();
  const t = language === "ar" ? ar : en;
  const features = t.works.features;

  return (
    <div className="bg-white px-4 py-10">
      {/* Heading */}
      <h1 className="text-center text-[#252B42] text-3xl md:text-4xl font-normal">
        {t.works.heading}
      </h1>
      <p className="text-[#737373] text-center text-sm md:text-base mt-2">
        {t.works.subtitle1}
      </p>
      <p className="text-[#737373] text-center text-sm md:text-base">
        {t.works.subtitle2}
      </p>

      {/* Main Section */}
      <section
        className="py-16 min-h-screen flex items-center justify-center"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div className="mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Features */}
          <div
            className={`flex flex-col items-center justify-center gap-12 w-full lg:w-1/4 text-center ${
              language === "ar" ? "lg:items-end lg:text-right" : "lg:text-left"
            }`}
          >
            {[features[0], features[2]].map((f, i) => (
              <div key={i}>
                <div className="w-12 h-12 flex items-center justify-center text-blue-500 text-2xl md:text-3xl font-bold mb-2 rounded-full bg-[#CFE6FF] hover:bg-[#007BFF] hover:text-white cursor-pointer">
                  {f.no}
                </div>
                <h3 className="text-base text-[#252B42] font-bold md:my-4">
                  {f.title}
                </h3>
                <p className="text-[#737373] text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative flex justify-center items-center w-full lg:w-1/2 my-8 lg:my-0">
            <div className="absolute w-[400px] h-[400px] rounded-full bg-[#007BFF] z-0" />
            <div className="z-10 relative">
              <Image
                src="/screen.png"
                alt="App Mockup"
                width={390}
                height={500}
                className="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm lg:max-w-md h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right Features */}
          <div
            className={`flex flex-col items-center justify-center gap-12 w-full lg:w-1/4 text-center ${
              language === "ar" ? "lg:items-end lg:text-right" : "lg:text-left"
            }`}
          >
            {[features[1], features[3]].map((f, i) => (
              <div key={i}>
                <div className="w-12 h-12 flex items-center justify-center text-blue-500 text-2xl md:text-3xl font-bold mb-2 rounded-full bg-[#CFE6FF] hover:bg-[#007BFF] hover:text-white cursor-pointer">
                  {f.no}
                </div>
                <h3 className="text-base text-[#252B42] font-bold md:my-4">
                  {f.title}
                </h3>
                <p className="text-[#737373] text-sm ">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
