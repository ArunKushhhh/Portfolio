import { useState } from "react";
import Hireme from "../assets/hireme.svg";
import Arrow from "../assets/arrow.svg";
import WebDev from "./WebDev";
import Design from "./Design";
import AppDev from "./AppDev";

const Projects = () => {
  const [activeButton, setActiveButton] = useState("Web Development");

  const buttons = ["Web Development", "Design", "App Development"];

  const handleButtonClick = (label) => {
    setActiveButton(label);
  };

  const getButtonBgColor = (label) => {
    if (label === "Web Development" && activeButton === "Web Development") {
      return "bg-[#5AB5E8]";
    }
    if (label === "Design" && activeButton === "Design") {
      return "bg-[#FFE68C]";
    }
    if (label === "App Development" && activeButton === "App Development") {
      return "bg-[#F072CD]";
    }
    return "bg-transparent";
  };

  const renderProjects = () => {
    switch (activeButton) {
      case "Web Development":
        return <WebDev />;
      case "Design":
        return <Design />;
      case "App Development":
        return <AppDev />;
      default:
        return <WebDev />;
    }
  };

  return (
    <div id="projects">
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
        <div className="w-[100%] flex flex-wrap gap-4 sm:justify-center">
          {buttons.map((label) => (
            <button
              key={label}
              style={{ fontFamily: "Handlee" }}
              onClick={() => handleButtonClick(label)}
              className={`text-black font-semibold text-xs sm:text-[14px] px-6 py-3 border border-[#484E53] rounded-full ${getButtonBgColor(
                label
              )}`}
            >
              {label}
            </button>
          ))}
        </div>
        <img src={Arrow} alt="Arrow" />
        <div className="w-[100%] flex flex-wrap gap-4 justify-center">
          {renderProjects()}
        </div>
      </div>
    </div>
  );
};

export default Projects;
