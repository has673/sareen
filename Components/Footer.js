"use client";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  SendHorizonal,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";
import { useLanguage } from "@/app/context/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <footer className="w-full" id="contact" dir={isArabic ? "rtl" : "ltr"}>
      {/* Contact Section */}
      <div className="py-8 bg-[#F9FAFB] relative">
        <div className="container mx-auto px-4">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-full max-w-7xl">
            <div
              className={`bg-white rounded-2xl px-8 py-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 `}
              style={{ boxShadow: "0px 10px 100px 0px #0000003D" }}
            >
              {/* Email */}
              <div
                className={`flex items-center gap-4 w-full md:w-1/2 justify-center ${
                  isArabic ? "md:justify-end" : "md:justify-start"
                }`}
              >
                <div className="bg-[#007BFF] rounded-full p-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <span className="text-[#232233] font-medium break-words">
                  {t.footer.email}
                </span>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-10 w-px bg-[#6C6C72] mx-4"></div>

              {/* Phone */}
              <div
                className={`flex items-center gap-4 w-full md:w-1/2 justify-center 
                  "md:justify-start" 
                `}
              >
                <div className="bg-[#007BFF] rounded-full p-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <span className="text-[#232233] font-medium break-words">
                  {t.footer.phone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#232233] text-white py-12">
        <div className="container mx-auto px-4">
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-12 ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {/* Logo and Description */}
            <div
              className={`space-y-4 flex flex-col items-center md:items-start ${
                isArabic ? "md:items-end" : ""
              }`}
            >
              <Image
                src="/images/logoblack.png"
                alt="logo"
                width={134}
                height={128}
              />
              <p className="text-white text-base leading-relaxed font-normal max-w-xs">
                {t.footer.description}
              </p>
              <div className={`flex pt-2 `}>
                {[FaTiktok, Instagram, Twitter, Youtube].map(
                  (Icon, idx, arr) => (
                    <div className="flex items-center gap-x-2" key={idx}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                      {idx < arr.length - 1 && (
                        <span className="text-gray-400 px-2">|</span>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 mt-16">
              <h3 className="text-lg font-semibold">
                {t.footer.quickLinkTitle}
              </h3>
              <ul className="space-y-3">
                {t.footer.quickLinks.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-white transition-colors text-sm md:text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <span className="text-white font-normal text-[11px] rounded-[7px] border px-4 py-1 border-[#A1A1A1]">
                {t.footer.paymentText}
              </span>
              <div className={`flex gap-x-6 mt-4 `}>
                <Image src="/gpay.png" alt="gpay" width={24} height={24} />
                <Image src="/stc.png" alt="stc" width={20} height={20} />
                <Image src="/mada.png" alt="mada" width={24} height={24} />
                <Image src="/visa.png" alt="visa" width={24} height={24} />
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4 mt-16">
              <h3 className="text-lg font-semibold">
                {t.footer.newsletterTitle}
              </h3>
              <p className="text-white text-base leading-relaxed font-normal">
                {t.footer.newsletterText}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="w-full rounded bg-white h-12 px-4 sm:px-5 pr-10 text-sm sm:text-base text-black"
                    placeholder={t.footer.newsletterPlaceholder}
                    style={{ direction: isArabic ? "rtl" : "ltr" }}
                  />
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 ${
                      isArabic ? "left-1" : "right-1"
                    } pointer-events-none`}
                  >
                    <SendHorizonal
                      color="white"
                      size={16}
                      className="bg-[#007BFF] rounded h-10 w-10 p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p
              className={`text-gray-400 text-sm flex items-center gap-2 
                 justify-center
              `}
            >
              <span className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
                <span className="text-xs">©</span>
              </span>
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
