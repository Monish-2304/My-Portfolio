import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { socialMedia } from "../data/constants.js";
import { ProjectModalContext } from "../context/ProjectModalContext.jsx";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { isProjectModalOpen } = useContext(ProjectModalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://portfolio-backend-1-di5b.onrender.com/send-email",
        {
          email,
          name,
          subject,
          message,
        }
      );
      alert(response.data.message);
    } catch (error) {
      alert("Error sending email: " + error.toString());
    }
  };
  return (
    <div className="flex justify-center mt-20" id="footer">
      <div className="flex flex-col  w-full items-center text-center  justify-center relative">

      <div className="lg:hidden clip-custom-shape bg-gradient-to-tr from-black via-[#260238] to-[#1e022b] h-[5rem] w-full absolute bottom-0"></div>
      <div className={`mt-8 z-10 rounded-full flex absolute bottom-4 space-x-8 md:space-x-16 lg:fixed lg:left-8 lg:top-[35%] lg:flex-col lg:space-x-0 lg:gap-8 ${isProjectModalOpen ? ' hidden' : ''}`}>
          {socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={social.image}
                alt={social.name}
                className="p-[2px] h-8 w-8 md:h-10 md:w-10  bg-gradient-to-r from-purple-600 via-pink-500 to-red-800  rounded-full hover:scale-125"
              />
            </a>
          ))}
        </div>
        <div className="text-5xl font-semibold text-slate-100">Contact</div>
        <div className="mt-5 text-xl text-slate-400">
          Feel free to reach out to me for queries or opportunities
        </div>
        <div className=" mt-8 mb-28 lg:mb-12 flex flex-col text-start w-[22rem] md:w-[40rem]  rounded-xl bg-[#171721] p-6 px-7 shadow-lg shadow-[#2A204B]">
          <div className="text-3xl font-semibold text-gray-100 my-3">
            Email Me
          </div>
          <form className="flex flex-col" method="post" onSubmit={handleSubmit}>
            <input
              className="text-lg py-3 pl-3 border-2 bg-[#171721] border-gray-400 rounded-lg my-2"
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="text-lg py-3 pl-3 border-2 bg-[#171721] border-gray-400 rounded-lg my-2"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="text-lg py-3 pl-3 border-2 bg-[#171721] border-gray-400 rounded-lg my-2"
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              className="text-lg whitespace-pre-wrap text-wrap py-3 pl-3 pb-[5rem] border-2 bg-[#171721] border-gray-400 rounded-lg my-2"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="text-lg font-semibold my-2 mb-4 rounded-xl py-4 bg-gradient-to-r from-[#DD00FF] via-[#BD00FF] to-[#8B00FF]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
