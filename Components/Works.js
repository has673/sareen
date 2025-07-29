"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import ar from "@/app/locale/ar";
import en from "@/app/locale/en";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Works() {
  const { language } = useLanguage();
  const t = language === "ar" ? ar : en;
  const features = t.works.features;
  const [data, setData] = useState(null);

  // GET STRAPI DATA
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/works?locale=${language}&populate=*`
      )
      .then((res) => setData(res.data.data))
      .catch((err) => console.error("Error fetching works:", err));
  }, [language]);
  return (
    <div className="bg-white px-4 py-10">
      {/* Heading */}
      <h1 className="text-center text-[#252B42] text-3xl md:text-4xl font-normal">
        {/* {t.works.heading} */}
        {data && data[0]?.title}
      </h1>
      <p className="text-[#737373] text-center text-sm md:text-base mt-2">
        {/* {t.works.subtitle1} */}
        {data && data[0]?.description}
      </p>
      <p className="text-[#737373] text-center text-sm md:text-base">
        {/* {t.works.subtitle2} */}
        {data && data[0]?.description2}
      </p>
      <section
        className="py-16 min-h-screen flex items-center justify-center"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div className="w-full">
          {/* ✅ Mobile Layout */}
          <div className="flex flex-col gap-12 items-center text-center lg:hidden">
            {/* Feature 1 */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 flex items-center justify-center text-blue-500 text-2xl md:text-3xl font-bold mb-2 rounded-full bg-[#CFE6FF] hover:bg-[#007BFF] hover:text-white cursor-pointer">
                {features[0].no}
              </div>
              <h3 className="text-base text-[#252B42] font-bold md:my-4">
                {features[0].title}
              </h3>
              <p className="text-[#737373] text-sm">{features[0].desc}</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 flex items-center justify-center text-blue-500 text-2xl md:text-3xl font-bold mb-2 rounded-full bg-[#CFE6FF] hover:bg-[#007BFF] hover:text-white cursor-pointer">
                {features[1].no}
              </div>
              <h3 className="text-base text-[#252B42] font-bold md:my-4">
                {features[1].title}
              </h3>
              <p className="text-[#737373] text-sm">{features[1].desc}</p>
            </div>

            {/* Image */}
            <div className="relative flex justify-center items-center w-full my-8">
              <div className="absolute w-[300px] h-[300px] rounded-full bg-[#007BFF] z-0" />
              <div className="z-10 relative">
                <Image
                  src="/screen.png"
                  alt="App Mockup"
                  width={390}
                  height={500}
                  className="rounded-xl shadow-lg w-full max-w-xs h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 flex items-center justify-center text-blue-500 text-2xl md:text-3xl font-bold mb-2 rounded-full bg-[#CFE6FF] hover:bg-[#007BFF] hover:text-white cursor-pointer">
                {features[2].no}
              </div>
              <h3 className="text-base text-[#252B42] font-bold md:my-4">
                {features[2].title}
              </h3>
              <p className="text-[#737373] text-sm">{features[2].desc}</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 flex items-center justify-center text-blue-500 text-2xl md:text-3xl font-bold mb-2 rounded-full bg-[#CFE6FF] hover:bg-[#007BFF] hover:text-white cursor-pointer">
                {features[3].no}
              </div>
              <h3 className="text-base text-[#252B42] font-bold md:my-4">
                {features[3].title}
              </h3>
              <p className="text-[#737373] text-sm">{features[3].desc}</p>
            </div>
          </div>

          {/* ✅ Desktop Layout */}
          <div className="hidden lg:flex flex-row items-center justify-between max-w-7xl mx-auto">
            {/* Left Features (0 & 2) */}
            <div
              className={`flex flex-col gap-12 w-1/4 text-left ${
                language === "ar"
                  ? "items-end text-right"
                  : "items-start text-left"
              }`}
            >
              {/* Feature 1 */}
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 flex items-center justify-center text-blue-500 text-2xl md:text-3xl font-bold mb-2 rounded-full bg-[#CFE6FF] hover:bg-[#007BFF] hover:text-white cursor-pointer">
                  {features[0].no}
                </div>
                <h3 className="text-base text-[#252B42] font-bold md:my-4">
                  {features[0].title}
                </h3>
                <p className="text-[#737373] text-sm">{features[0].desc}</p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 flex items-center justify-center text-blue-500 text-2xl md:text-3xl font-bold mb-2 rounded-full bg-[#CFE6FF] hover:bg-[#007BFF] hover:text-white cursor-pointer">
                  {features[2].no}
                </div>
                <h3 className="text-base text-[#252B42] font-bold md:my-4">
                  {features[2].title}
                </h3>
                <p className="text-[#737373] text-sm">{features[2].desc}</p>
              </div>
            </div>

            {/* Center Image */}
            <div className="relative flex justify-center items-center w-1/2 my-8">
              <div className="absolute w-[400px] h-[400px] rounded-full bg-[#007BFF] z-0" />
              <div className="z-10 relative">
                <Image
                  src="/screen.png"
                  alt="App Mockup"
                  width={390}
                  height={500}
                  className="rounded-xl shadow-lg w-full max-w-sm h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Right Features (1 & 3) */}
            <div
              className={`flex flex-col gap-12 w-1/4 text-left ${
                language === "ar"
                  ? "items-end text-right"
                  : "items-start text-left"
              }`}
            >
              {/* Feature 2 */}
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 flex items-center justify-center text-blue-500 text-2xl md:text-3xl font-bold mb-2 rounded-full bg-[#CFE6FF] hover:bg-[#007BFF] hover:text-white cursor-pointer">
                  {features[1].no}
                </div>
                <h3 className="text-base text-[#252B42] font-bold md:my-4">
                  {features[1].title}
                </h3>
                <p className="text-[#737373] text-sm">{features[1].desc}</p>
              </div>

              {/* Feature 4 */}
              <div
                className={`flex flex-col items-center md:items-start ${
                  language === "en" ? "md:pr-13" : ""
                }`}
              >
                <div className="w-12 h-12 flex items-center justify-center text-blue-500 text-2xl md:text-3xl font-bold mb-2 rounded-full bg-[#CFE6FF] hover:bg-[#007BFF] hover:text-white cursor-pointer">
                  {features[3].no}
                </div>
                <h3 className="text-base text-[#252B42] font-bold md:my-4">
                  {features[3].title}
                </h3>
                <p className="text-[#737373] text-sm">{features[3].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
