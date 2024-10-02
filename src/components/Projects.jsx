import Hireme from "../assets/hireme.svg";
import Arrow from "../assets/arrow.svg";
import Cursor from "../assets/cursor.svg";
import Cursorblue from "../assets/cursorblue.svg";
import Cursorgreen from "../assets/cursorgreen.svg";
import Rejouice from "../assets/rejouice_mqup.png";
import Reverse from "../assets/REVERSE_moqup.png";
import Sundown from "../assets/sundown_moqup.png";
import Works from "../assets/works_moqup.png";
import ProjectCard from "./ProjectCard"; 

const Projects = () => {
  return (
    <div>
      <div className="w-[100%] flex flex-col gap-4 items-start">
        <div
          className="inline px-1 py-1 font-semibold text-[20px]"
          style={{
            backgroundImage: `url(${Hireme})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            fontFamily: `"Handlee", cursive`,
          }}
        >
          Featured Projects
        </div>
        <img src={Arrow} alt="Arrow" />
        <div className="w-[100%] flex flex-wrap gap-8 justify-evenly">
          <ProjectCard
            imageurl1={Rejouice}
            imageurl2={Cursor}
            title1="Rejouice"
            subtitle="Studios"
            borderColor="border-[#DB4A90]"
            bgColor="bg-[#F072CD]"
            cursorbox="HTML/ CSS/ GSAP"
          />
          <ProjectCard
            imageurl1={Works}
            imageurl2={Cursorblue}
            title1="Works"
            subtitle="Studios"
            borderColor="border-[#1C6AB1]"
            bgColor="bg-[#5AB5E8]"
            cursorbox="HTML/ CSS/ GSAP"
          />
          <ProjectCard
            imageurl1={Sundown}
            imageurl2={Cursorgreen}
            title1="Sundown"
            subtitle="Studios"
            borderColor="border-[#4ED543]"
            bgColor="bg-[#7CF072]"
            cursorbox="HTML/ CSS"
          />
          <ProjectCard
            imageurl1={Reverse}
            imageurl2={Cursor}
            title1="Reverse"
            subtitle="7.0"
            borderColor="border-[#DB4A90]"
            bgColor="bg-[#F072CD]"
            cursorbox="HTML/ CSS/ JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
