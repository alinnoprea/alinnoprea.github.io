import React, { forwardRef } from "react";

const PROJECTS_PER_COLUMN = 1;

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      title: "Calculator App",
      image: "https://imgur.com/TSEmxwf.jpg",
      link: "https://calculator-app-nine-theta.vercel.app/",
    },
    {
      title: "Movie Lookup App",
      image: "https://imgur.com/pY3NVWu.jpg",
      link: "https://movieapp-two-pi.vercel.app/",
    },
  ];

  const splitProjects = [];
  for (let i = 0; i < projects.length; i += PROJECTS_PER_COLUMN) {
    splitProjects.push(projects.slice(i, i + PROJECTS_PER_COLUMN));
  }

  return (
    <div ref={ref}>
      <div className="bg-primary h-screen w-screen flex items-center justify-center snap-center flex-col">
        <h1 className="text-secondary border-black w-5/6 text-9xl text-center animate-fade-right animate-once animate-ease-in-out mb-8">
          PROJECTS LIST
        </h1>

        <div className="flex flex-wrap justify-between w-screen mt-32  ">
          {splitProjects.map((columnProjects) => (
            <div
              className="flex flex-col w-1/2 mb-4 hover:scale-125 duration-300 ease-in-out "
              key={columnProjects[0].title}
            >
              {columnProjects.map((project) => (
                <div
                  className="flex flex-col items-center mb-4"
                  key={project.title}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-48 h-48 object-cover rounded-md mb-4"
                    />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className="text-secondary text-2xl font-bold">
                      {project.title}
                    </h2>
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

Projects.displayName = "Projects";

export default Projects;
