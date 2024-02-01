import React from 'react'
import { skills } from '../data/constants'
const Skills = () => {
  return (
    <div className=" bg-[#1C1C27] overflow-hidden" id="skills">
    <div className="flex justify-center mt-20 text-5xl font-semibold text-slate-100 z-5">
  Skills
    </div>
    <div className='flex mt-10 flex-wrap justify-center '>
        {skills.map((skill, index) => (
          <div key={index} className="m-4 p-4 w-[35rem] bg-[#171721] rounded-xl shadow-[#472b4e] shadow-sm border border-purple-700 ">
            <div className="flex justify-center text-center text-2xl  md:text-3xl font-bold text-gray-300">{skill.title}</div>
            <div className="flex justify-center items-center">
            <div className="my-3 flex flex-wrap justify-center items-center md:max-w-[28rem] h-full">
              {skill.skills.map((subSkill, subIndex) => (
                <div key={subIndex} className="flex justify-center items-center m-2 border border-slate-300 py-2 md:py-3 px-4 rounded-2xl">
                  <img src={subSkill.image} alt={subSkill.name} className="w-5 h-5 md:w-8 md:h-8 mr-1 md:mr-2" />
                  <span className="text-xs md:text-lg text-gray-400 font-semibold">{subSkill.name}</span>
                </div>
              ))}
            </div>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
