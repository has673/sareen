"use client";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useLanguage } from "@/app/context/LanguageContext";

const Team = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  const teamMembers = t.team.members;

  return (
    <div
      className={`w-full bg-white ${isArabic ? "text-right" : ""}`}
      id="team"
    >
      <h1 className="text-[#232233] font-bold text-3xl text-center my-3">
        {t.team.heading}
      </h1>

      <div className="flex justify-center px-4 mt-3">
        <p className="text-[#6C6C72] font-normal text-base text-center max-w-[600px]">
          {t.team.subheading}
        </p>
      </div>

      <section className="py-12 bg-white">
        <div className="flex md:flex-row flex-col justify-center gap-x-12 px-4 gap-y-4 ">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 text-center hover:shadow-md transition duration-300 w-90"
              style={{ boxShadow: "0px 1px 10px 0px #0000001A" }}
            >
              <div className="flex justify-center mb-4">
                <div className="rounded-full p-1 border-2 border-[#007BFF] h-30 w-30 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold uppercase text-[#232233]">
                {member.name}
              </h3>
              <p className="text-xl font-semibold text-[#6C6C72] mb-3">
                {member.role}
              </p>
              <p className="text-base font-normal text-[#6C6C72] mb-4">
                {member.bio}
              </p>
              <div className="flex justify-center space-x-4 text-gray-600 text-lg">
                {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
                  (Icon, i) => (
                    <a
                      href="#"
                      key={i}
                      className="border-r border-[#6C6C72] pr-2 last:border-none"
                    >
                      <Icon />
                    </a>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
