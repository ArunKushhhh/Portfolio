import PropTypes from "prop-types";

const ProjectCard = ({
  imageurl1,
  imageurl2,
  title1,
  subtitle,
  borderColor,
  bgColor,
  cursorbox,
}) => {
  return (
    <div>
      <div className="w-[300px] flex flex-col gap-4 px-4 py-4 border-[1.7px] border-black bg-white rounded-lg">
        <div>
          <img src={imageurl1} alt={title1} className="fill rounded-[6px]" />
        </div>
        <div className="flex justify-between items-center">
          <div
            className="text-[20px] text-wrap font-semibold"
            style={{ fontFamily: "Handlee" }}
          >
            {title1} <br /> {subtitle}
          </div>
          <div className="relative">
            <img
              src={imageurl2}
              alt={title1}
              className="w-[25px] absolute top-[-40px] left-[-40px] translate-x-1/2 translate-y-1/2"
            />
            <div
              className={`border-[1.65px] ${borderColor} ${bgColor} px-[14px] py-[6px] rounded-e-full rounded-bl-full`}
            >
              {cursorbox}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imageurl1: PropTypes.string.isRequired,
  imageurl2: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  borderColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  cursorbox: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
  subtitle: "",
};

export default ProjectCard;
