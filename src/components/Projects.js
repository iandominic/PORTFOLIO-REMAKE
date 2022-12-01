import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Web landing page",
      desc: "Simple website",
      thumbNail: <img src={null} alt="N/A" />,
    },
    {
      title: "E-commerce website",
      desc: "Simple website",
      thumbNail: <img src={null} alt="N/A" />,
    },
    {
      title: "Web landing page",
      desc: "Simple website",
      thumbNail: <img src={null} alt="N/A" />,
    },
    {
      title: "Web landing page",
      desc: "Simple website",
      thumbNail: <img src={null} alt="N/A" />,
    },
  ];
  return (
    <div className="w-full h-full bg-gray-200">
      <div className="w-[90%] mx-auto py-10 h-full text-5xl flex flex-col items-center text-center">
        <h1 className="font-bold">Projects.</h1>
        <div className="flex flex-col gap-5 w-full h-full items-center justify-center py-5">
          {projects.map((obj, i) => {
            return (
              <ProjectCard
                title={obj.title}
                desc={obj.desc}
                thumbNail={obj.thumbNail}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
