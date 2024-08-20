import { useState, useEffect, useContext } from "react";
import { projects } from "../data/constants";
import ProjectDetails from "./ProjectDetails";
import { ProjectModalContext } from "../context/ProjectModalContext";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { isProjectModalOpen, setIsProjectModalOpen } = useContext(ProjectModalContext);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsProjectModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="pt-4  bg-[#1C1C27] " id="projects">
      <div className="my-10 mt-16 flex justify-center text-5xl font-semibold text-slate-100 overflow-hidden">
        Projects
      </div>
      <div className=" flex flex-wrap lg:mx-10 justify-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex-col justify-between cursor-pointer max-w-xs bg-[#15151E] rounded-xl border border-gray-900 overflow-hidden shadow-black shadow-xl  my-4 mx-6 transition-all duration-500 hover:-translate-y-2 hover:scale-105"
            onClick={() => openProjectModal(project)}
          >
            <img
              className="w-[20rem] h-[12rem] mt-6 px-2 rounded-3xl"
              src={project.image}
              alt={project.title}
            />
            <div className="max-h-[5.5rem] overflow-hidden"><div className="mt-4 flex px-2 flex-wrap justify-start overflow-hidden">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className=" text-purple-600 bg-[#201B31] rounded-full px-3 py-1 text-sm font-semibold m-1"
                >
                  {tag}
                </span>
              ))}
            </div></div>
            
            <div className="px-2 py-4 mb-3 max-h-full">
              <div className="font-bold text-2xl text-slate-300">
                {project.title}
              </div>
              <p className="text-slate-500 text-sm mb-2">{project.date}</p>
              <p className= "text-slate-500 max-h-[7rem] text-lg overflow-hidden text-ellipsis custom-ellipsis">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div>
          <div
            className="fixed inset-0 bg-black opacity-60 z-150 h-screen"
            onClick={closeProjectModal}
          ></div>
          <div className="">
            <ProjectDetails
              selectedProject={selectedProject}
              onClose={closeProjectModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
