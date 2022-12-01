import React from "react";
import github from "../icons/github-line.svg";
import link from "../icons/external-link-line.svg";

const ProjectCard = ({ title, desc, thumbNail }) => {
  return (
    <>
      <div className="w-full h-full min-h-[260px] overflow-hidden bg-gray-100 rounded-lg shadow-md text-left">
        <div className="w-full bg-gray-700 h-[200px]">{thumbNail}</div>
        <div className="flex flex-col p-4">
          <h1 className="text-xl uppercase font-bold">{title}</h1>
          <p className="text-lg pb-3">{desc}</p>
          <div className="flex gap-2 items-center">
            <img
              className="hover:scale-[1.1] transition-all ease-in duration-150"
              src={github}
              alt=""
            />
            <img
              className="hover:scale-[1.1] transition-all ease-in duration-150"
              src={link}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
