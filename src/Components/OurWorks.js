import Image from "next/image";
import React from "react";
import MissionTab from "./MissionTab";

const OurWorks = () => {
  return (
    <div
      className="w-full"
      style={{
        background: " linear-gradient(180deg, #F2F8FF 0%, #CCE4FF 100%)",
      }}
    >
      <div className="flex md:flex-row md:justify-center py-12 px-6 md:px-16 md:gap-x-4 flex-col items-center md:items-start">
        <div className="relative md:w-[556px] md:h-[496px] w-[300px] h-[280px] flex-shrink-0 ">
          <Image
            src="/images/people.png"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex justify-start flex-col">
          <span className="text-[#354EF3] text-2xl font-bold">
            \ What We Do \
          </span>
          <h2 className="text-[#007BFF] text-[40px] font-bold md:max-w-[524px] text-2xl">
            We Develope Product That People Love to Use.
          </h2>
          <p className="text-base font-medium md:max-w-[500px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed, of a page when looking at its
            layout. The point of using Lorem Ipsum is that of a page when
            looking at its layout. The point of using Lorem Ipsum is thatLorem
            Ipsum is that it has a more-or-less normalLorem IpsumLorem Ipsum
            distribution of letters, as opposed
          </p>
          <div className="flex gap-x-4 md:pt-14">
            {" "}
            <MissionTab
              heading="Our Vision"
              image="/bulb.png"
              text="It is a long esta
-blished fact that"
            />
            <MissionTab
              heading="Our Mission"
              image="/star.png"
              text="It is a long esta
-blished fact that"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
