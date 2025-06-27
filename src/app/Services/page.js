import OurWorks from "@/Components/OurWorks";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="bg-white">
      <OurWorks />
      <div className="text-[#0E1F51] font-bold flex flex-col justify-center items-center py-2">
        <span className="text-2xl ">\ Services \</span>
        <h4 className="text-[40px] ">Our Expertice</h4>
      </div>
      <div className="flex justify-center md:0 px-3">
        {" "}
        <div className="relative w-300 h-100 md:w-[945px] md:h-[300px] rounded-[10px] overflow-hidden ">
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
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-y-4 text-[#F7F7F7] px-4 text-center ">
            <p className="md:text-[32px] text-2xl font-bold ">
              <q>
                Some of the history of our company is that we are catching up
                through video.
              </q>
            </p>
            <button className="bg-[#007BFF] flex justify-center item-center text-base text-white font-medium rounded-md px-2 py-2">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
