import React from "react";
import { useState } from "react";
import { experience } from "../data/constants";
const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="px-4 w-full py-8 pt-20" id="expcation">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="text-5xl text-slate-100 font-semibold">Experience</div>
        <div className="text-xl text-slate-400  w-full md:w-4/6 mt-6 mb-16">
          My journey of experiences
        </div>
      </div>

      <div className="flex flex-col justify-center ">
        {experience.map((exp, index) => (
          <div
            key={exp.id}
            className="flex flex-col items-center mb-8  mx-auto w-[10rem] md:w-[25rem] lg:w-[40rem] relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Timeline Circle */}
            <div className="w-3 h-3 rounded-full bg-transparent border-[3px] border-[#9C27B0] absolute left-[-5.8rem] md:left-[-3.5rem] lg:left-[-1.5rem]"></div>

            {/* Timeline Line */}
            <div className="absolute h-full  w-[1.5px] bg-[#854CE6] left-[-5.5rem] top-[1.3rem] md:left-[-3.25rem] lg:left-[-1.2rem]"></div>

            {/* Timeline Card */}
            <div className="flex md:hover:scale-105 md:hover:translate-x-2 md:duration-200">
              <div className="flex flex-col justify-center border-[1px] border-[#854CE6] w-[20rem]  md:w-[28rem] lg:w-[40rem] bg-transparent rounded-lg shadow-purple-700 shadow-sm overflow-hidden ml-4">
                {/* Company Logo */}
                <div className="flex ml-2 gap-2  lg:items-center lg:mx-2 ">
                  <div>
                    <img
                      className=" w-20 mt-4  md:mx-2  rounded-lg"
                      src={exp.img}
                      alt={exp.company}
                    />
                  </div>
                  <div className="flex flex-col mt-3 ml-2">
                    <h3 className="text-lg md:text-xl text-gray-400 font-semibold ">
                      {exp.company}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-md font-medium ">
                      {exp.role}
                    </p>
                    <p className="text-gray-600 text-sm ">{exp.duration}</p>
                  </div>
                </div>

                {/* Experience Info */}
                <div className="p-4">
                  <p className="text-gray-400 mt-2 text-justify whitespace-pre-line">
                    {hoveredIndex === index
                      ? exp.description
                      : exp.description.length > 210
                      ? exp.description.substring(0, 210).concat("...")
                      : exp.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
