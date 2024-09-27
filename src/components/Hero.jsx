import Smile from "../assets/smile.svg";
import Arun from "../assets/arun.svg";
import Home from "../assets/home.png";
import Bars from "../assets/3bars.svg";
import Frame from "../assets/frame.png";
import Hehe from "../assets/hehe.svg";
import Starfish from "../assets/starfish.svg";
import Idea from "../assets/idea.svg";
import Profile from "../assets/profile.jpg"

const Hero = () => {
  return (
    <div className="w-[100%] flex flex-col md:justify-evenly md:flex-row gap-20 justify-center items-center">
      <div className="flex flex-col gap-8">
        <div className="flex gap-4 items-start">
          <img src={Smile} alt="sun_smiles" className="w-[76px]" />
          <img src={Arun} alt="arun" />
        </div>
        <div>
          <h1
            className="text-3xl md:text-6xl tracking-wider"
            style={{
              fontFamily: "starife",
            }}
          >
            Hii!👋 I am <br />{" "}
            <span
              className="text-4xl md:text-6xl"
              style={{
                backgroundImage: `url(${Home})`,
                backgroundPosition: "center bottom 30%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              Arun Kumar Kushwaha
            </span>
          </h1>
        </div>
        <div className="flex gap-0">
          <button
            className="bg-[#BAE6FF] px-6 py-3 rounded-full border-4 border-black"
            style={{
              fontFamily: "helvetica-R",
            }}
          >
            See Resume
          </button>
          <img src={Bars} alt="" className="-mb-14" />
        </div>
      </div>

      <div className="relative">
        {/* <img src={Frame} alt="frame" className="sm:w-[300px] lg:w-[400px]"/> */}
        {/* <img src={Profile} alt="frame" className="absolute top-14 left-10 w-[230px] sm:w-[300px] lg:w-[300px]"/> */}
        <div className="" style={{
            backgroundImage:`url(${Frame})`
        }}>
            <img src={Profile} alt="" className="w-[230px]" />
        </div>
        <img src={Hehe} alt="hehe" className="absolute -top-16 left-4 lg:left-20"/>
        <img src={Starfish} alt="starfish" className="absolute bottom-4 left-52 lg:left-72"/>
        <img src={Idea} alt="idea" className="absolute top-28 lg:top-40 left-1"/>
      </div>
    </div>
  );
};

export default Hero;
