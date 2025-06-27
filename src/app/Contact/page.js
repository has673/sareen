import Image from "next/image";
import React from "react";
const Contact = () => {
  return (
    <div>
      {" "}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 px-4 sm:px-6 md:px-24">
          {/* Left: Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="md:text-[56px] text-4xl font-bold text-black mb-3 leading-tight">
              Get in <span className="text-[#007BFF]">Touch</span>
            </h2>
            <p className="text-black mb-6 text-sm">
              Exim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              iaculis molestie vel, ornare non id blandit netus.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name *"
                className="w-full border border-[#E0E0E0] px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-[#E0E0E0] px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full border border-[#E0E0E0] px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-[#E0E0E0] px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Issues"
                className="w-full border border-[#E0E0E0] px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full border border-[#E0E0E0] px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500">
                <option>How did you find us?</option>
                <option>Google</option>
                <option>Referral</option>
                <option>Social Media</option>
              </select>

              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-3 w-full rounded-md hover:bg-blue-700 transition"
              >
                SEND
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Image src="/phone.png" alt="phone" width={31} height={31} />{" "}
                <div className="flex flex-col text-[13px]">
                  <p className="text-black">Phone</p>
                  <span className="text-[#007BFF] ">03 5432 1234</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/fax.png" alt="phone" width={31} height={31} />{" "}
                <div className="flex flex-col text-[13px]">
                  <p className="text-black">FAX</p>
                  <span className="text-[#007BFF]">03 5432 1234</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/emailblack.png"
                  alt="phone"
                  width={31}
                  height={31}
                />
                <div className="flex flex-col text-[13px]">
                  <p className="text-black">FAX</p>
                  <span className="text-[#007BFF]">info@marcc.com.au</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map with background */}
          <div className="w-1/3 flex-end relative">
            <div className="relative md:h-[550px] md:w-[430px] h-[400px]  w-[300px]  md:top-[13%] md:left-1/3">
              {" "}
              {/* move image down */}
              <Image
                src="/map.png"
                alt="map"
                fill
                className="z-10 object-cover object-top"
              />
            </div>
            <div className="absolute top-5 md:left-77  w-full h-full bg-[#007BFF] z-0  hidden md:block"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
