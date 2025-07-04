"use client";
import Image from "next/image";
import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const Role = () => {
  const { t, language } = useLanguage();
  return (
    <div>
      <h2 className="text-[32px] font-bold text-black flex justify-center items-center md:py-20 py-10">
        {t.select_role}
      </h2>
      <div></div>
      <div className="flex md:flex-row flex-col md:justify-center md:items-center md:gap-x-8 gap-y-6 px-4">
        {/* Driver Card */}
        <div
          className="w-full md:w-[396px] h-[375px] border-2 border-blue-300 rounded-[11px] overflow-hidden shadow-sm text-center p-4"
          style={{ boxShadow: "0px 0px 10px 0px #00DFC04D" }}
        >
          <div className="bg-[#007BFF] flex justify-center items-center w-full h-[250px] rounded-[11px]">
            <div className="relative w-[160px] h-[120px]">
              <Image
                src="/truck.png"
                fill
                alt="Truck"
                className="object-contain"
              />
            </div>
          </div>
          <div className="py-2 text-[32px] font-medium text-[#3D3D3D] md:mt-8">
            {t.driver}
          </div>
        </div>

        {/* Store Owner Card */}
        <div className="w-full md:w-[396px] h-[375px] border-2 border-[#D9D9D9] rounded-[11px] overflow-hidden shadow-sm text-center p-4">
          <div className="bg-[#007BFF] flex justify-center items-center w-full h-[250px] rounded-[11px]">
            <div className="relative w-[160px] h-[120px]">
              <Image
                src="/shop.png"
                fill
                alt="Store"
                className="object-contain"
              />
            </div>
          </div>
          <div className="py-2 text-[32px] font-medium text-[#3D3D3D] md:mt-8">
            {t.store_owner}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Role;
