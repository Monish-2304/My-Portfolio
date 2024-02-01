import React from 'react'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import {Bio} from '../../src/data/constants.js'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className=" z-50 bg-[#191924] fixed top-0 w-full" id="/">
      <div className="w-full md:max-w-7xl mx-auto pt-2">
        <div className="flex justify-between h-16 items-center px-4 relative">
          <Link to='#about' className="flex items-center text-white">
            <DiCssdeck className=" text-red-500 text-5xl" />
            <span className="font-bold text-2xl ml-2">Portfolio</span>
          </Link>
          <FaBars
            className="text-3xl cursor-pointer lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link to="#about" className="text-lg text-white-800 hover:text-red-400">About</Link>
            <Link to="#skills" className="text-lg text-white-800 hover:text-red-400">Skills</Link>
            <Link to="#projects" className="text-lg text-white-800 hover:text-red-400">Projects</Link>
            <Link to="#education" className="text-lg text-white-800 hover:text-red-400">Education</Link>
            <Link to="#footer" className="text-lg text-white-800 hover:text-red-400">Contact</Link>
          </div>
          <a
            href={Bio.github}
            target="_blank"
            className="hidden lg:flex items-center border border-red-500 rounded-full py-2 px-4 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition duration-300"
          >
            Github Profile
          </a>
        </div>
        
          <div className={`${isOpen ? 'opacity-75 visible' : 'opacity-0 invisible'}  w-full lg:hidden flex flex-col items-center justify-center gap-4 absolute z-20 bg-[#191924] transition-all ease-in duration-500 py-4 h-80 `}>
            <Link to="#about" className="text-white font-semibold hover:text-red-400" onClick={() => setIsOpen(!isOpen)}>About</Link>
            <Link to="#skills" className="text-white font-semibold hover:text-red-400" onClick={() => setIsOpen(!isOpen)}>Skills</Link>
            <Link to="#projects" className="text-white font-semibold  hover:text-red-400" onClick={() => setIsOpen(!isOpen)}>Projects</Link>
            <Link to="#education" className="text-white font-semibold hover:text-red-400" onClick={() => setIsOpen(!isOpen)}>Education</Link>
            <Link to="#footer" className="text-white font-semibold hover:text-red-400" onClick={() => setIsOpen(!isOpen)}>Contact</Link>
            <a
              href={Bio.github}
              target="_blank"
              className="border text-red-400 rounded-full py-2 px-4 border-red-400 font-semibold hover:bg-red-400 hover:text-white transition duration-300"
            >
              Github Profile
            </a>
          </div>
        
      </div>
    </nav>
  )
}

export default Navbar;
