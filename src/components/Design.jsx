import { useState } from "react";
import Cursor from "../assets/cursor.svg";
import Cursorblue from "../assets/cursorblue.svg";
import Cursorpurple from "../assets/cursorpurple.svg";
import Cursorgreen from "../assets/cursorgreen.svg";
import Cursorylw from "../assets/cursorylw.svg";
import Delivery from "../assets/delivery_moqup.png";
import Nike from "../assets/nike_mqup.png";
import Pepsi from "../assets/pepsi_moqup.png";
import Apple from "../assets/apple_moqup.png";
import Ass from "../assets/ASS.png";
import Pmd from "../assets/projectManagement.png";
import Fitness from "../assets/fitness.png";
import Progress from "../assets/progress.png";
import Unnati from "../assets/unnati.png";
import ProjectCard from "./ProjectCard";
import Bars from "../assets/3bars.svg";

const WebDev = () => {
  const projects = [
    {
      imageurl1: Pmd,
      imageurl2: Cursorgreen,
      title1: "Project Management",
      subtitle: "Dashboard",
      borderColor: "border-[#4ED543]",
      bgColor: "bg-[#7CF072]",
      cursorbox: "Figma",
      url: "https://www.figma.com/design/MpwKLTDbbnkEZPJweyfI3P/Project-Management-Dashboard?node-id=0-1&t=1TJipjRCSZzDIgco-1", 
    },
    {
      imageurl1: Fitness,
      imageurl2: Cursor,
      title1: "Gamified",
      subtitle: "Fitness App",
      borderColor: "border-[#DB4A90]",
      bgColor: "bg-[#F072CD]",
      cursorbox: "Figma",
      url: "https://www.figma.com/design/Uk3eKfJjhTBh0oYksWA3fi/Gamified-Fitness-App?node-id=80-2&t=5AnemaCHyzoTaLf7-1", 
    },
    {
      imageurl1: Unnati,
      imageurl2: Cursorpurple,
      title1: "Unnati",
      subtitle: "4.0",
      borderColor: "border-[#a08aff]",
      bgColor: "bg-[#E4E1F7]",
      cursorbox: "Figma",
      url: "https://www.figma.com/design/ykWWTzha8tu9EWzoXqGdBg/Unnati-4.0-website?node-id=0-1&t=AWNo79ZAZnpUzslC-1", 
    },
    {
      imageurl1: Progress,
      imageurl2: Cursorblue,
      title1: "Progress",
      subtitle: "Tracking Dashboard",
      borderColor: "border-[#1C6AB1]",
      bgColor: "bg-[#5AB5E8]",
      cursorbox: "Figma",
      url: "https://www.figma.com/design/BP2lP5M3tXT6Y4zd024aju/Progress-Tracking-Dashboard?node-id=0-1&t=k4u5yWHxxXbjWLRK-1", 
    },
    {
      imageurl1: Ass,
      imageurl2: Cursorgreen,
      title1: "AIT Starter",
      subtitle: "Stories",
      borderColor: "border-[#4ED543]",
      bgColor: "bg-[#7CF072]",
      cursorbox: "Figma",
      url: "https://www.figma.com/design/FbweLyRYCSmSCoMScjqXPY/AIT-Starter-Stories?node-id=0-1&t=6zMLMee3C7Ibahoj-1", 
    },
    {
      imageurl1: Pepsi,
      imageurl2: Cursorblue,
      title1: "Pepsi &",
      subtitle: "Zero Sugar",
      borderColor: "border-[#1C6AB1]",
      bgColor: "bg-[#5AB5E8]",
      cursorbox: "Figma",
      url: "https://www.figma.com/design/xV2Ij8QkDPAsrsrStCRr12/Pepsi?node-id=0-1&t=OJr7IWWFzfu3iKMl-1", 
    },
    {
      imageurl1: Delivery,
      imageurl2: Cursorylw,
      title1: "Restaurant",
      subtitle: "Mobile App",
      borderColor: "border-[#f0ac48]",
      bgColor: "bg-[#F4CA8A]",
      cursorbox: "Figma",
      url: "https://www.figma.com/design/UdXeo8WOa0LkJpb3PyfGFX/Restaurant-Mobile-Application?node-id=0-1&t=qxT4KiCfcQVq0sYp-1", 
    },
    {
      imageurl1: Apple,
      imageurl2: Cursor,
      title1: "Apple",
      subtitle: "Watch",
      borderColor: "border-[#DB4A90]",
      bgColor: "bg-[#F072CD]",
      cursorbox: "Figma",
      url: "https://www.figma.com/design/j0TqmPFQLUxj9F5rAteCcu/Apple-Watch?node-id=0-1&t=nSj6RgYKxnyoxYw8-1", 
    },
    {
      imageurl1: Nike,
      imageurl2: Cursorpurple,
      title1: "Nike",
      subtitle: "Shoes",
      borderColor: "border-[#a08aff]",
      bgColor: "bg-[#E4E1F7]",
      cursorbox: "Figma",
      url: "https://www.figma.com/design/uxcGTwqPzO7MXPqNAkh6LY/Nike?node-id=0-1&t=DRhYpWo4f98zPGdj-1", 
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
