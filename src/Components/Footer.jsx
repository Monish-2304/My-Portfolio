import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center mt-20" id="footer">
      <div className="flex flex-col mx-2  w-full items-center text-center  justify-center">
        <div className="text-5xl font-semibold text-slate-100">Contact</div>
        <div className="mt-5 text-xl text-slate-400">
          Feel free to reach out to me for queries or opportunities
        </div>
        <div className=" mt-8 mb-10 flex flex-col text-start w-[22rem] md:w-[40rem]  rounded-xl bg-[#171721] p-6 px-7 shadow-lg shadow-[#2A204B]">
          <div className="text-3xl font-semibold text-gray-100 my-3">Email Me</div>
          <form className="flex flex-col" method="post">
            <input
              className="text-lg py-3 pl-3 border-2 bg-[#171721] border-gray-400 rounded-lg my-2"
              type="text"
              placeholder="Your Email"
            />
            <input
              className="text-lg py-3 pl-3 border-2 bg-[#171721] border-gray-400 rounded-lg my-2"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="text-lg py-3 pl-3 border-2 bg-[#171721] border-gray-400 rounded-lg my-2"
              type="text"
              placeholder="Subject"
            />
             <textarea
              className="text-lg whitespace-pre-wrap text-wrap py-3 pl-3 pb-[5rem] border-2 bg-[#171721] border-gray-400 rounded-lg my-2"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="text-lg font-semibold my-2 mb-4 rounded-xl py-4 bg-gradient-to-r from-[#DD00FF] via-[#BD00FF] to-[#8B00FF]">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
