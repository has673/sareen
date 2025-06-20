"use client";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Real-time Tracking",
    desc: "Track your ride’s progress in real-time.",
  },
  {
    id: 2,
    title: "Secure Payments",
    desc: "Safe and seamless payment options.",
  },
  {
    id: 3,
    title: "Driver Assignment Automation",
    desc: "Instantly notifies and assigns the nearest available driver to begin the delivery process",
  },
  {
    id: 4,
    title: "Order Sync with Salla Store",
    desc: "Fetches orders from Salla platform",
  },
];

export default function Works() {
  return (
    <div className="bg-white px-4 py-10" id="how-it-works">
      {/* Heading */}
      <h1 className="text-center text-[#252B42] text-3xl md:text-4xl font-normal">
        How Sareen Works
      </h1>
      <p className="text-[#737373] text-center text-sm md:text-base mt-2">
        Embrace life&rsquo;s vastness, venture forth, and discover the wonders
        waiting beyond.
      </p>

      <p className="text-[#737373] text-center text-sm md:text-base">
        The world beckons; seize its grand offerings now!
      </p>

      {/* Main Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center  ">
          {/* Left Features */}
          <div className="flex flex-col gap-12 w-full lg:w-1/4 text-center lg:text-right">
            {features
              .filter((_, i) => i === 0 || i === 2)
              .map((f) => (
                <div key={f.id}>
                  <div
                    className={`w-12 h-12 flex items-center justify-center text-blue-500 text-2xl md:text-3xl font-bold mb-2 rounded-full mx-auto lg:ml-auto lg:mr-0 ${
                      f.id === 3 ? "bg-[#007BFF] text-white" : "bg-[#CFE6FF]"
                    }`}
                  >
                    {f.id}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">{f.desc}</p>
                </div>
              ))}
          </div>
          <div className="relative flex justify-center items-center w-full lg:w-1/2">
            {/* Bordered Circle Background */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-[#007BFF] z-0" />

            {/* Image Container */}
            <div className="z-10">
              <div className="relative z-10">
                <Image
                  src="/images/works.png"
                  alt="App Mockup"
                  width={390}
                  height={500}
                  className="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm lg:max-w-md h-[500px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-12 w-full lg:w-1/4 text-center lg:text-left">
            {features
              .filter((_, i) => i === 1 || i === 3)
              .map((f) => (
                <div key={f.id}>
                  <div className="w-12 h-12 flex items-center justify-center text-blue-500 text-2xl md:text-3xl font-bold mb-2 bg-[#CFE6FF] rounded-full mx-auto lg:mx-0">
                    {f.id}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base max-w-[200px]">
                    {f.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
