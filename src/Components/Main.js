import Image from "next/image";
import React from "react";
import { Apple, Play } from "lucide-react";
const Main = () => {
  return (
    <div className="relative w-full" id="Home">
      {/* Background Image with overlay color */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Home.jpg')",
        }}
      >
        {/* Overlay with #E1F4FF */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#E1F4FF", opacity: 0.8 }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col md:flex-row w-full justify-around py-10 px-4 gap-6">
        {/* Text Section */}
        <div className="md:pr-8 text-center md:text-left">
          <h1 className="md:text-[41px] text-3xl text-[#007BFF] font-semibold max-w-xl leading-tight mb-3">
            Revolutionizing Product Delivery – from Storefront to your Doorstep
          </h1>
          <span className="text-[#373737] text-2xl font-normal ">
            Real-time delivery, effortless experience
          </span>
          <div className="flex gap-4 flex-wrap md:mt-52 px-28">
            {/* Google Play */}
            <a
              href="#"
              className="flex items-center bg-[#252B42] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#1e1e30] transition"
            >
              <div className="relative w-8 h-9">
                <Image src="/images/play.png" fill alt="pla"></Image>
              </div>
              <div className="text-left ml-3">
                <p className="text-xs">Download on the</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center bg-[#252B42] text-white px-4 py-3 rounded-lg shadow-md hover:bg-[#1e1e30] transition"
            >
              <div className="relative w-8 h-9">
                <Image
                  src="/images/apple.png"
                  alt="apple"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-left ml-3">
                <p className="text-xs">Download on the</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <Image
            src="/images/screen.png"
            height={600}
            width={250}
            alt="screen"
            className="object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
