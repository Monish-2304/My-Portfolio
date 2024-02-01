import React from 'react'

const ProjectDetails = ({ selectedProject, onClose }) => {
    
  return (
    <div className="fixed inset-0 my-8 flex items-center justify-center  z-50 ">
    <div className="w-full my-20 max-w-md md:max-w-screen-md bg-[#171721] opacity-100 rounded-3xl flex flex-col max-h-full">
    <div className='flex justify-end mx-6 my-3'>
      <button
        className="cursor-pointer w-fit rounded-xl bg-purple-800 px-2 py-1 text-white"
        onClick={onClose}
      >
        Close
      </button>
      </div>

      <div className="flex flex-col w-full px-4 pr-5 overflow-y-auto">
        <img
          className="w-full object-cover rounded-lg mb-4"
          src={selectedProject.image}
          alt={selectedProject.title}
        />
        <h2 className="text-3xl text-gray-200 font-bold mb-2">{selectedProject.title}</h2>
        <div className="flex flex-wrap mb-4">
          {selectedProject.tags.map((tag, index) => (
            <span
              key={index}
              className="text-purple-600 bg-[#201B31] rounded-full px-3 py-1 text-sm font-semibold mr-3 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 mb-2">{selectedProject.date}</p>
        <p className="text-lg text-justify text-gray-200 mb-4">{selectedProject.description}</p>
        <div className="flex w-full justify-center">
          {selectedProject.github && (
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1c1e27] w-full sm:w-1/2 text-center text-white px-4 py-2 rounded-lg mb-4 m-1"
            >
              View on Github
            </a>
          )}
          {selectedProject.webapp && (
            <a
              href={selectedProject.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#854ce6] w-full sm:w-1/2 text-center text-white px-4 py-2 rounded-lg mb-4 m-1"
            >
              View Demo
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProjectDetails
