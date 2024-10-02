import Hireme from "../assets/hireme.svg";
import Arrow from "../assets/arrow.svg";
import Pencil from "../assets/pencil.png";
import Eye from "../assets/eye.png";
import Star from "../assets/star.png";
import Flutter from "../assets/flutter_symbol.svg";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
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
          What I Do?
        </div>
        <img src={Arrow} alt="Arrow" />
      </div>

      <div className="w-[100%] flex justify-center flex-wrap gap-8 sm:justify-evenly">
        <ServiceCard
          background="bg-[#FFE68C]"
          borderColor="border-[#EECD56]"
          rotation="-4deg"
          label="Pen/Paper"
          labelBackground="bg-[#9DDCFF]"
          icon={Pencil}
          title1="User Research"
          title2="Design"
        />
        <ServiceCard
          background="bg-[#9DDCFF]"
          borderColor="border-[#5AB5E8]"
          rotation="5.5deg"
          label="Figma"
          labelBackground="bg-[#FFC9F0]"
          icon={Eye}
          title1="UI and Product Design"
          title2="Prototyping"
        />
        <ServiceCard
          background="bg-[#FFC9F0]"
          borderColor="border-[#F384D4]"
          rotation="-4.76deg"
          label="React"
          labelBackground="bg-[#a08aff]"
          icon={Star}
          title1="Web"
          title2="Development"
        />
        <ServiceCard
          background="bg-[#E4E1F7]"
          borderColor="border-[#a08aff]"
          rotation="5.5deg"
          label="Flutter"
          labelBackground="bg-[#FFE68C]"
          icon={Flutter}
          title1="App"
          title2="Development"
        />
      </div>
    </div>
  );
};

export default Services;
