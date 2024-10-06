import { useState } from "react";
import Cursor from "../assets/cursor.svg";
import Cursorblue from "../assets/cursorblue.svg";
import Cursorpurple from "../assets/cursorpurple.svg";
import Cursorgreen from "../assets/cursorgreen.svg";
import Rejouice from "../assets/rejouice_mqup.png";
import Reverse from "../assets/REVERSE_moqup.png";
import Sundown from "../assets/sundown_moqup.png";
import Works from "../assets/works_moqup.png";
import Branding from "../assets/branding_moqup.png";
import Movie from "../assets/movie_moqup.png";
import Pizza from "../assets/pizza_moqup.png";
import Spotify from "../assets/spotify_moqup.png";
import Unnati from "../assets/unnati.png";
import Spark from "../assets/spark.png";
import ProjectCard from "./ProjectCard";
import Bars from "../assets/3bars.svg";

const WebDev = () => {
  const projects = [
    {
      imageurl1: Unnati,
      imageurl2: Cursor,
      title1: "Unnati",
      subtitle: "4.0",
      borderColor: "border-[#DB4A90]",
      bgColor: "bg-[#F072CD]",
      cursorbox: "React/TailwindCSS",
      url: "https://unnati4.netlify.app/", 
    },
    {
      imageurl1: Spark,
      imageurl2: Cursorgreen,
      title1: "Spark",
      subtitle: "2024",
      borderColor: "border-[#4ED543]",
      bgColor: "bg-[#7CF072]",
      cursorbox: "React/TailwindCSS",
      url: "https://spark2k24-25.netlify.app/", 
    },
    {
      imageurl1: Rejouice,
      imageurl2: Cursorpurple,
      title1: "Works",
      subtitle: "Studios",
      borderColor: "border-[#a08aff]",
      bgColor: "bg-[#E4E1F7]",
      cursorbox: "HTML/ CSS/ GSAP",
      url: "https://rejouiceagency.netlify.app",
    },
    {
      imageurl1: Works,
      imageurl2: Cursorblue,
      title1: "Works",
      subtitle: "Studios",
      borderColor: "border-[#1C6AB1]",
      bgColor: "bg-[#5AB5E8]",
      cursorbox: "HTML/ CSS/ GSAP",
      url: "https://workscreative.netlify.app",
    },
    {
      imageurl1: Sundown,
      imageurl2: Cursorgreen,
      title1: "Sundown",
      subtitle: "Studios",
      borderColor: "border-[#4ED543]",
      bgColor: "bg-[#7CF072]",
      cursorbox: "HTML/ CSS",
      url: "https://sundownstudioagency.netlify.app",
    },
    {
      imageurl1: Reverse,
      imageurl2: Cursor,
      title1: "Reverse",
      subtitle: "7.0",
      borderColor: "border-[#DB4A90]",
      bgColor: "bg-[#F072CD]",
      cursorbox: "HTML/ CSS/ JS",
      url: "https://reverse-70.onrender.com/", 
    },
    {
      imageurl1: Spotify,
      imageurl2: Cursorpurple,
      title1: "Spotify",
      subtitle: "Music",
      borderColor: "border-[#a08aff]",
      bgColor: "bg-[#E4E1F7]",
      cursorbox: "HTML/ CSS/ JS",
      url: "#", 
    },
    {
      imageurl1: Branding,
      imageurl2: Cursorblue,
      title1: "Branding",
      subtitle: "Agency",
      borderColor: "border-[#1C6AB1]",
      bgColor: "bg-[#5AB5E8]",
      cursorbox: "TailwindCSS",
      url: "#", 
    },
    {
      imageurl1: Pizza,
      imageurl2: Cursorgreen,
      title1: "Pizza",
      subtitle: "Branding",
      borderColor: "border-[#4ED543]",
      bgColor: "bg-[#7CF072]",
      cursorbox: "TailwindCSS",
      url: "#", 
    },
    {
      imageurl1: Movie,
      imageurl2: Cursor,
      title1: "Movie",
      subtitle: "Ratings",
      borderColor: "border-[#DB4A90]",
      bgColor: "bg-[#F072CD]",
      cursorbox: "TailwindCSS",
      url: "#", 
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
      </div>
    </div>
  );
};

export default WebDev;
