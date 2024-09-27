import { useState, useEffect } from "react";
import Logo from "../assets/logo-arun.svg";
import Hireme from "../assets/hireme.svg";
import BGpattern from "../assets/bgpatterns.svg";

const Navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOverlayOpen) {
        setIsOverlayOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOverlayOpen]);

  return (
    <div
      className="flex px-6 md:px-20 w-[100%] justify-between items-center py-6 bg-white"
      style={{ backgroundImage: `url(${BGpattern})` }}
    >
      <div
        className="w-[101px] cursor-pointer"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img src={Logo} alt="logo" />
      </div>

      {/* Nav Bar */}
      <div className="hidden md:flex">
        <ul className="flex gap-5">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="">Resume</a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="flex gap-6 items-center">
          <li
            style={{
              backgroundImage: `url(${Hireme})`,
              backgroundPosition: "center bottom 30%",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <a href="#contact">Hire Me</a>
          </li>
          <div
            className="flex flex-col gap-2 items-center cursor-pointer md:hidden"
            onClick={toggleOverlay}
          >
            <div className="flex gap-2">
              <div className="w-[8px] h-[8px] bg-black rounded-full"></div>
              <div className="w-[8px] h-[8px] bg-black rounded-full"></div>
            </div>
            <div className="flex gap-2">
              <div className="w-[8px] h-[8px] bg-black rounded-full"></div>
              <div className="w-[8px] h-[8px] bg-black rounded-full"></div>
            </div>
          </div>
        </ul>
      </div>
      {isOverlayOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center">
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={toggleOverlay}
          >
            <span className="text-white text-4xl">&times;</span>
          </div>
          <ul className="flex flex-col gap-5 text-white text-lg">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="">Resume</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
