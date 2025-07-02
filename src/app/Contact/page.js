"use client";
import Image from "next/image";
import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const Contact = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <section
      className={`bg-white py-10 ${isArabic ? "text-right" : "text-left"}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 px-4 sm:px-6 md:px-24">
        {/* Left: Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="md:text-[56px] text-4xl font-bold text-black mb-3 leading-tight">
            {t.contact.heading.split(" ")[0]}{" "}
            <span className="text-[#007BFF]">
              {t.contact.heading.split(" ")[2]}
            </span>
          </h2>
          <p className="text-black mb-6 text-sm">{t.contact.description}</p>

          <form className={`space-y-4 `} dir={`${isArabic && "rtl"}`}>
            <input
              type="text"
              placeholder={t.contact.placeholders.name}
              className="w-full border border-[#E0E0E0] px-4 py-3 rounded-md placeholder:text-black"
            />
            <input
              type="email"
              placeholder={t.contact.placeholders.email}
              className="w-full border border-[#E0E0E0] px-4 py-3 rounded-md placeholder:text-black"
            />
            <input
              type="text"
              placeholder={t.contact.placeholders.phone}
              className="w-full border border-[#E0E0E0] px-4 py-3 rounded-md placeholder:text-black"
            />
            <input
              type="text"
              placeholder={t.contact.placeholders.subject}
              className="w-full border border-[#E0E0E0] px-4 py-3 rounded-md placeholder:text-black"
            />
            <input
              type="text"
              placeholder={t.contact.placeholders.issue}
              className="w-full border border-[#E0E0E0] px-4 py-3 rounded-md placeholder:text-black"
            />
            <select className="w-full border border-[#E0E0E0] px-4 py-3 rounded-md ">
              <option>{t.contact.placeholders.findUs}</option>
              <option>{t.contact.placeholders.google}</option>
              <option>{t.contact.placeholders.referral}</option>
              <option>{t.contact.placeholders.social}</option>
            </select>

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 w-full rounded-md hover:bg-blue-700 transition"
            >
              {t.contact.send}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 flex  flex-row flex-wrap md:justify-between justify-center gap-4 text-sm text-gray-700 gap-x-3">
            <div className="flex items-center gap-2">
              <Image src="/phone.png" alt="phone" width={31} height={31} />
              <div className="flex flex-col text-[13px]">
                <p className="text-black">{t.contact.phone}</p>
                <span className="text-[#007BFF] ">+966 55 227 0149</span>
              </div>
            </div>

            <div className="flex items-center gap-2 ">
              <Image src="/emailblack.png" alt="email" width={31} height={31} />
              <div className="flex flex-col text-[13px]">
                <p className="text-black">{t.contact.email}</p>
                <span className="text-[#007BFF]">it@sareean.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 relative flex justify-center md:block">
          {/* Image Container */}
          <div className="relative md:h-[550px] md:w-[430px] h-[400px] w-[300px] md:top-[13%] md:left-1/3 mx-auto">
            <Image
              src="/map.png"
              alt="map"
              fill
              className="z-10 object-cover object-top"
            />
          </div>

          {/* Background Circle */}
          <div className="absolute top-5 md:left-77 w-full h-full bg-[#007BFF] z-0 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
