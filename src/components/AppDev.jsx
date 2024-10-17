// import { useState } from "react";
// import Cursor from "../assets/cursor.svg";
// import Unnati from "../assets/unnati.png";
// import ProjectCard from "./ProjectCard";
// import Bars from "../assets/3bars.svg";

const WebDev = () => {
  // const projects = [
  //   {
  //     imageurl1: Unnati,
  //     imageurl2: Cursor,
  //     title1: "Unnati",
  //     subtitle: "4.0",
  //     borderColor: "border-[#DB4A90]",
  //     bgColor: "bg-[#F072CD]",
  //     cursorbox: "React/TailwindCSS",
  //     url: "https://unnati4.netlify.app/", 
  //   },
  // ];

  // const [visibleProjects, setVisibleProjects] = useState(4);
  // const [seeMore, setSeeMore] = useState(false);

  // const handleToggle = () => {
  //   if (seeMore) {
  //     setVisibleProjects(4);
  //   } else {
  //     setVisibleProjects(projects.length); 
  //   }
  //   setSeeMore(!seeMore); 
  // };

  return (
    <div>
      {/* <div className="w-[100%] flex flex-wrap gap-[50px] justify-start">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <a href={project.url} target="_blank" rel="noopener noreferrer" key={index}>
            <ProjectCard
              imageurl1={project.imageurl1}
              imageurl2={project.imageurl2}
              title1={project.title1}
              subtitle={project.subtitle}
              borderColor={project.borderColor}
              bgColor={project.bgColor}
              cursorbox={project.cursorbox}
            />
          </a>
        ))}
      </div>

      <div className="flex gap-0 justify-center mt-8">
        <button
          onClick={handleToggle}
          className="bg-[#BAE6FF] text-black px-6 py-3 rounded-full border-4 border-black"
          style={{ fontFamily: "helvetica-R" }}
        >
          {seeMore ? "View Less Projects" : "View All Projects"}
        </button>
        <img src={Bars} alt="" className="-mb-14" />
      </div> */}

      App Development Projects will be available soon.
    </div>
  );
};

export default WebDev;
