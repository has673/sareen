// "use client";

// import Image from "next/image";
// import { useLanguage } from "@/app/context/LanguageContext";
// import React from "react";

// const Main = () => {
//   const { t, language } = useLanguage();
//   const isArabic = language === "ar";

//   return (
//     <div className="relative w-full">
//       {/* Background Image with overlay color */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/images/Home.jpg')",
//         }}
//       >
//         <div
//           className="absolute inset-0"
//           style={{ backgroundColor: "#E1F4FF", opacity: 0.8 }}
//         />
//       </div>

//       {/* Content Layer */}
//       <div
//         className={`relative z-10 flex flex-col md:flex-row w-full justify-around py-10 px-4 gap-6 ${
//           language === "ar" ? "md:flex-row-reverse text-right" : "text-left"
//         }`}
//       >
//         {/* Text Section */}
//         <div
//           className={` text-center md:text-left ${
//             language === "ar" ? "pl-8" : "md:pr-8"
//           }`}
//         >
//           <h1
//             className="md:text-[41px] text-3xl text-[#007BFF] font-semibold max-w-xl leading-tight mb-3"
//             dir={isArabic ? "text-right" : "text-left"}
//           >
//             {t.title}
//           </h1>
//           <span
//             className={`text-[#373737] text-2xl font-normal ${
//               language === "ar" && "md:pl-32"
//             }`}
//           >
//             {t.subtitle}
//           </span>

//           <div
//             className={`flex gap-4 flex-wrap justify-center md:mt-20 md:px-28 ${
//               language === "ar" ? "md:justify-end" : "md:justify-start"
//             }`}
//           >
//             {/* Google Play */}
//             <a
//               href="#"
//               className="flex items-center bg-[#252B42] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#1e1e30] transition"
//             >
//               <div className="relative w-8 h-9">
//                 <Image src="/images/Vector.png" fill alt="Google Play" />
//               </div>
//               <div
//                 className={`ml-3 text-left ${
//                   language === "ar" ? "text-right ml-0 mr-3" : ""
//                 }`}
//               >
//                 <p className="text-xs">{t.downloadGoogle.line1}</p>
//                 <p className="text-sm font-semibold">
//                   {t.downloadGoogle.line2}
//                 </p>
//               </div>
//             </a>

//             {/* App Store */}
//             <a
//               href="#"
//               className="flex items-center bg-[#252B42] text-white px-4 py-3 rounded-lg shadow-md hover:bg-[#1e1e30] transition"
//             >
//               <div className="relative w-8 h-9">
//                 <Image
//                   src="/images/apple.png"
//                   alt="App Store"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div
//                 className={`ml-3 text-left ${
//                   language === "ar" ? "text-right ml-0 mr-3" : ""
//                 }`}
//               >
//                 <p className="text-xs">{t.downloadApple.line1}</p>
//                 <p className="text-sm font-semibold">{t.downloadApple.line2}</p>
//               </div>
//             </a>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="flex justify-center">
//           <Image
//             src="/images/screen.png"
//             height={600}
//             width={250}
//             alt="screen"
//             className="object-contain"
//           />
//           <Image
//             src="/images/chat.png"
//             alt="chat"
//             width={60}
//             height={60}
//             className={`fixed md:right-10 hidden md:block ${
//               isArabic && "left-10"
//             } } `}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getStrapiMedia } from "../utils/getStrapiMedia";

const Main = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";
  const [data, setData] = useState(null);

  // GET STRAPI DATA
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/homepages?locale=${language}&populate=mobilePic`
      )
      .then((res) => setData(res.data.data));
  }, [language]);

  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState("");
  const phoneNumber = "+9203101537550"; // Replace with your WhatsApp number

  const handleSend = () => {
    if (!query.trim()) return;
    const message = encodeURIComponent(query);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
    setShowModal(false);
    setQuery("");
  };
  return (
    <div className="relative w-full">
      {/* Background Image with overlay color */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Home.jpg')" }}
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
        <div
          className={`text-center md:text-left ${
            language === "ar" ? "pl-8" : "md:pr-8"
          }`}
        >
          <h1
            className="md:text-[41px] text-3xl text-[#007BFF] font-semibold max-w-xl leading-tight mb-3"
            dir={isArabic ? "text-right" : "text-left"}
          >
            {/* {t.title} */}
            {data && data[0]?.title}
          </h1>
          <span
            className={`text-[#373737] text-2xl font-normal ${
              language === "ar" && "md:pl-32"
            }`}
          >
            {/* {t.subtitle} */}
            {data && data[0]?.description}
          </span>

          <div
            className={`flex gap-4 flex-wrap justify-center md:mt-20 md:px-28 ${
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
          {data && data.length > 0 && data[0].mobilePic?.url && (
            <Image
              src={getStrapiMedia(data[0].mobilePic.url)}
              height={600}
              width={250}
              alt="screen"
              className="object-contain"
            />
          )}
        </div>
      </div>

      {/* Floating Icons (wrapped in vertical spacing) */}
      <div className="fixed right-6 bottom-6 flex flex-col items-end space-y-4 z-50 md:block hidden">
        {/* Chat Modal Toggle Icon */}
        <a
          onClick={(e) => {
            e.preventDefault();
            setShowModal(!showModal);
          }}
          aria-label="Chat with us on WhatsApp"
          href="#"
        >
          <Image
            src="/images/chat.png"
            alt="Chat Support"
            width={50}
            height={50}
            className="hover:scale-105 transition-transform duration-200 mb-2"
          />
        </a>

        {/* WhatsApp Direct Icon */}
        <a
          href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20need%20help`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open WhatsApp directly"
        >
          <Image
            src="/images/w-icon.png"
            alt="WhatsApp"
            width={50}
            height={50}
            className="hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed bottom-24 right-6 z-50 bg-white shadow-lg rounded-xl p-4 w-96 h-110">
          <div className="flex flex-col h-full">
            {/* Title */}
            <h2
              className="text-lg font-semibold mb-3 border-b pb-2"
              style={{ color: "#007BFF" }}
            >
              Chat With Us
            </h2>

            {/* Textarea */}
            <textarea
              placeholder="Type your query..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 resize-none border border-gray-300 rounded p-2 mb-3"
            />

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="text-white px-4 py-1 rounded cursor-pointer"
                style={{ backgroundColor: "#007BFF" }}
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
