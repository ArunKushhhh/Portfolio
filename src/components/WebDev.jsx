import { useState } from "react";
import Cursor from "../assets/cursor.svg";
import Cursorblue from "../assets/cursorblue.svg";
import Cursorgreen from "../assets/cursorgreen.svg";
import Rejouice from "../assets/rejouice_mqup.png";
import Reverse from "../assets/REVERSE_moqup.png";
import Sundown from "../assets/sundown_moqup.png";
import Works from "../assets/works_moqup.png";
import ProjectCard from "./ProjectCard";
import Bars from "../assets/3bars.svg";

const WebDev = () => {
  const projects = [
    {
      imageurl1: Rejouice,
      imageurl2: Cursor,
      title1: "Rejouice",
      subtitle: "Studios",
      borderColor: "border-[#DB4A90]",
      bgColor: "bg-[#F072CD]",
      cursorbox: "HTML/ CSS/ GSAP",
    },
    {
      imageurl1: Works,
      imageurl2: Cursorblue,
      title1: "Works",
      subtitle: "Studios",
      borderColor: "border-[#1C6AB1]",
      bgColor: "bg-[#5AB5E8]",
      cursorbox: "HTML/ CSS/ GSAP",
    },
    {
      imageurl1: Sundown,
      imageurl2: Cursorgreen,
      title1: "Sundown",
      subtitle: "Studios",
      borderColor: "border-[#4ED543]",
      bgColor: "bg-[#7CF072]",
      cursorbox: "HTML/ CSS",
    },
    {
      imageurl1: Reverse,
      imageurl2: Cursor,
      title1: "Reverse",
      subtitle: "7.0",
      borderColor: "border-[#DB4A90]",
      bgColor: "bg-[#F072CD]",
      cursorbox: "HTML/ CSS/ JS",
    },
    {
      imageurl1: Reverse,
      imageurl2: Cursor,
      title1: "Reverse",
      subtitle: "7.0",
      borderColor: "border-[#DB4A90]",
      bgColor: "bg-[#F072CD]",
      cursorbox: "HTML/ CSS/ JS",
    },
    {
      imageurl1: Reverse,
      imageurl2: Cursor,
      title1: "Reverse",
      subtitle: "7.0",
      borderColor: "border-[#DB4A90]",
      bgColor: "bg-[#F072CD]",
      cursorbox: "HTML/ CSS/ JS",
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(4);
  const [seeMore, setSeeMore] = useState(false);

  const handleToggle = () => {
    if (seeMore) {
      setVisibleProjects(4);
    } else {
      setVisibleProjects(projects.length); 
    }
    setSeeMore(!seeMore); 
  };

  return (
    <div>
      <div className="w-[100%] flex flex-wrap gap-[50px] justify-start">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={index}
            imageurl1={project.imageurl1}
            imageurl2={project.imageurl2}
            title1={project.title1}
            subtitle={project.subtitle}
            borderColor={project.borderColor}
            bgColor={project.bgColor}
            cursorbox={project.cursorbox}
          />
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
      </div>
    </div>
  );
};

export default WebDev;
