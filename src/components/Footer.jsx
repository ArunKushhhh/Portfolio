import Logo from "../assets/logo-arun.svg";
import Github from "../assets/github.svg";
import Insta from "../assets/insta.svg";
import LinkedIn from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <div className="w-[100%] flex flex-col md:flex-row gap-7 items-center justify-center md:justify-between">
        <div
        className="w-[101px] cursor-pointer"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img src={Logo} alt="logo" />
      </div>
      <div>Portfolio 2024</div>
      <div className="w-[100%] md:w-auto flex justify-between md:justify-normal md:gap-10 items-center">
        <a href="https://github.com/ArunKushhhh" className="flex items-center gap-2">
            <img src={Github} alt="github" />
            <div className="hidden md:flex font-semibold" style={{fontFamily:"Handlee"}}>Github</div>
        </a>
        <a href="https://www.linkedin.com/in/arun-kumar-kushwaha-b26085286/" className="flex items-center gap-2">
            <img src={LinkedIn} alt="linkedin" />
            <div className="hidden md:flex font-semibold" style={{fontFamily:"Handlee"}}>LinkedIn</div>
        </a>
        <a href="https://www.instagram.com/imwfy_a/" className="flex items-center gap-2">
            <img src={Insta} alt="instagram" />
            <div className="hidden md:flex font-semibold" style={{fontFamily:"Handlee"}}>Instagram</div>
        </a>
      </div>
    </div>
  )
}

export default Footer