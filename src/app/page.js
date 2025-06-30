"use client";
import Team from "../../Components/Team";
import Testimonals from "../../Components/Testimonals";
import Works from "../../Components/Works";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Home() {
  const { t, language } = useLanguage();
  return (
    <div className="bg-white">
      <Works />
      <div
        style={{
          background: " linear-gradient(90deg, #E1F4FF 0%, #4CBAFA 100%)",
        }}
      >
        <div className="md:py-12">
          {" "}
          <h1 className="text-white font-bold text-3xl text-center py-3">
            {t.app}
          </h1>
          <div className="flex justify-center px-4 mt-3 py-4">
            <p className="text-white font-normal text-base text-center max-w-[600px]">
              {t.app1}
            </p>
          </div>
        </div>
      </div>

      <Team />

      <Testimonals />
    </div>
  );
}
