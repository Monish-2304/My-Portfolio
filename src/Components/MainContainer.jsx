import React from "react";
import _default from "../utils/default.js";
import Typewriter from "typewriter-effect";
import { Bio } from "../data/constants.js";
import HeroImg from "../Images/heroimage.jpg";
import HeroBgAnimation from "./HeroBgAnimatio.jsx";

const MainContainer = () => {
  const openResume = () => {
    window.open(Bio.resume, '_blank');
  };

  return (
    <div className="mt-[5rem] w-full flex flex-col lg:flex-row justify-center items-center md:mt-14 md:py-8" id="about">
   <div className="flex justify-center items-center w-full md:w-3/4 lg:w-1/2 lg:order-2 relative overflow-hidden">
     <div className="z-0"><HeroBgAnimation/></div>
     <div className="relative mt-8">
     
     
     <div  className="absolute inset-0 bg-gradient-to-r from-purple-700 via-red-600 to-red-800 rounded-full"></div>
        <img
          src={HeroImg}
          alt="hero-image"
          className="relative z-10 p-1 w-72 h-72 md:w-[23rem] md:h-[23rem] lg:w-[26rem] lg:h-[26rem] rounded-full"
        />
     </div>
     
      </div>
    
    <div className="flex justify-start lg:ml-24 xl:ml-36 md:px-8 md:w-full lg:w-1/2">
      <div className="flex flex-col items-center lg:items-start mt-4 md:mt-16 px-4 md:px-1 ">
        <div className=" text-3xl md:text-5xl lg:text-6xl text-gray-100 font-bold"> Hi, I am</div>
        <div className="text-3xl md:text-5xl lg:text-6xl mt-1 md:mt-3 text-gray-100 font-bold"> Monish S</div>
        <div className="text-xl md:text-4xl my-2 md:my-6 text-gray-100 flex">I am a  
        <span className="text-primary flex text-bold text-red-600 px-3">
          
          <Typewriter
            options={{
              strings: Bio.roles,
              autoStart: true,
              loop: true,
            }}
          />
        </span></div>
        <div className=" text-gray-400 text-md md:text-xl lg:text-2xl mt-3 lg:max-w-[38rem] text-center lg:text-justify ">Driven by self-motivation and ambition, I'm passionate about continuous learning and contributing to meaningful causes. With a love for leadership roles, all I need is coffee and music to fuel my coding endeavors. Specializing in Frontend Development, I'm dedicated to crafting immersive and impactful digital experiences.</div>
        <div className="flex justify-center items-center mt-4 md:block z-10">
        <button className="my-4 px-3 md:px-20 py-3 text-xl text-white bg-gradient-to-br from-red-500 via-red-700 to-red-900 rounded-3xl max-w-fit transform transition-all ease-in-out duration-200 hover:scale-105" onClick={openResume}>Check Resume</button>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default MainContainer;
