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

const Footer = () => {
  return (
    <footer className="w-full" id="contact">
      {/* Contact Section */}
      {/* Contact Section */}
      <div className="py-8 bg-[#F9FAFB] relative">
        <div className="container mx-auto px-4">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-full max-w-7xl ">
            <div
              className="bg-white rounded-2xl px-8 py-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0"
              style={{ boxShadow: "0px 10px 100px 0px #0000003D" }}
            >
              {/* Email */}
              <div className="flex items-center gap-4 w-full md:w-1/2 justify-center md:justify-start">
                <div className="bg-[#007BFF] rounded-full p-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-700 font-medium break-words">
                  info@youremail.com
                </span>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-10 w-px bg-[#6C6C72] mx-4"></div>

              {/* Phone */}
              <div className="flex items-center gap-4 w-full md:w-1/2 justify-center md:justify-end">
                <div className="bg-[#007BFF] rounded-full p-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-700 font-medium break-words">
                  +880 321 655 9985
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer */}
      <div className="bg-[#232233] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {/* Logo and Description */}
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <Image
                src="/images/logoblack.png"
                alt="logo"
                width={134}
                height={128}
              />
              <p className="text-white text-base leading-relaxed font-normal max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </p>
              <div className="flex gap-4 pt-2">
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
              <h3 className="text-lg font-semibold">QUICK LINK</h3>
              <ul className="space-y-3">
                {["About", "Features", "Screenshot", "Blog"].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-white  transition-colors text-sm md:text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4 mt-16">
              <h3 className="text-lg font-semibold">NEWS LETTER</h3>
              <p className="text-white text-base leading-relaxed font-normal">
                Subscribe our newsletter to get our latest update & news
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="w-full  rounded bg-white h-12 px-4 sm:px-5 pr-10 text-sm sm:text-base text-black"
                    placeholder="Enter your Email"
                  />
                  <div className="absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none">
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
            <p className="text-gray-400 text-sm flex justify-center items-center gap-2">
              <span className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
                <span className="text-xs">©</span>
              </span>
              Copyright 2025 Sareen. All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
