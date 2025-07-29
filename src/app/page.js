"use client";
import { useEffect, useState } from "react";
import Team from "../../Components/Team";
import Testimonals from "../../Components/Testimonals";
import Works from "../../Components/Works";
import { useLanguage } from "@/app/context/LanguageContext";
import axios from "axios";

export default function Home() {
  const { t, language } = useLanguage();
  const [data, setData] = useState(null);

  // GET STRAPI DATA
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos?locale=${language}&populate=*`
      )
      .then((res) => setData(res.data.data))
      .catch((err) => console.error("Error fetching videos page:", err));
  }, [language]);
  return (
    <div className="bg-white">
      <Works />
      <div
        style={{
          background: " linear-gradient(90deg, #E1F4FF 0%, #4CBAFA 100%)",
        }}
      >
        <div className="md:py-12 md:my-10">
          {" "}
          <h1 className="text-white font-bold text-3xl text-center py-3">
            {/* {t.app} */}
            {data && data[0]?.title}
          </h1>
          <div className="flex  flex-col items-center  gap-y-6 justify-center px-4 mt-3 py-4 relative">
            <p className="text-white font-normal text-base text-center max-w-[600px]">
              {/* {t.app1} */}
              {data && data[0]?.description}
            </p>
            <video
              autoPlay
              muted
              loop
              preload="auto"
              className="rounded-xl md:w-1/2  md:h-[300px] w-full h-auto"
            >
              <source src="/sareean.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <Team />

      <Testimonals />
    </div>
  );
}
