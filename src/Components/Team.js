import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Carla Press",
      role: "App Developer",
      image: "/team/carla.jpg",
    },
    {
      name: "Abdul Latef Sulami",
      role: "CEO",
      image: "/images/ceo.jpeg",
    },
    {
      name: "Jocelyn Septimus",
      role: "Website Developer",
      image: "/team/jocelyn.jpg",
    },
  ];

  return (
    <div className="w-full" id="team">
      <h1 className="text-[#232233] font-bold text-3xl text-center my-3">
        Our Creative team
      </h1>
      <div className="flex justify-center px-4 mt-3">
        <p className="text-[#6C6C72] font-normal text-base text-center max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white  rounded-xl p-6 text-center  hover:shadow-md transition duration-300"
              style={{ boxShadow: " 0px 1px 10px 0px #0000001A" }}
            >
              <div className="flex justify-center mb-4">
                <div className="rounded-full p-1 border-4 border-[#007BFF]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-24 w-24 rounded-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-3xl font-bold uppercase text-[#232233]">
                {member.name}
              </h3>
              <p className="text-xl font-semibold text-[#6C6C72] mb-3">
                {member.role}
              </p>
              <p className="text-base font-normal text-[#6C6C72] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae.
              </p>
              <div className="flex justify-center space-x-4 text-gray-600 text-lg">
                <a href="#" className="border-r border-[#6C6C72] pr-2">
                  <FaFacebookF />
                </a>
                <a href="#" className="border-r border-[#6C6C72] pr-2">
                  <FaInstagram />
                </a>
                <a href="#" className="border-r border-[#6C6C72] pr-2">
                  <FaTwitter />
                </a>
                <a href="#" className="border-r border-[#6C6C72] pr-2">
                  <FaYoutube />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
