import Hireme from "../assets/hireme.svg";
import Arrow from "../assets/arrow.svg";
import Cursor from "../assets/cursor.svg";
import Rejouice from "../assets/rejouice_mqup.png";

const ProjectCard = (imageurl) => {
  <div className="flex flex-col gap-4 px-4 py-4 border-1 border-black bg-white ">
    <div>
      <img src={imageurl} alt="" />
    </div>
  </div>;
};

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
      </div>
      <ProjectCard imageurl = {Rejouice}/>
    </div>
  );
};

export default Projects;
