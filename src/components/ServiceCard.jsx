import PropTypes from "prop-types";

const ServiceCard = ({
  background,
  borderColor,
  rotation,
  label,
  labelBackground,
  icon,
  title1,
  title2,
}) => {
  return (
    <div
      className={`relative w-[260px] h-[311px] ${background} border-4 ${borderColor} rounded-lg flex px-6 items-center`}
      style={{ transform: `rotate(${rotation})` }}
    >
      <div
        className={`absolute ${labelBackground} px-2 left-[100%] -translate-x-1/2 top-8 font-bold`}
        style={{ fontFamily: "Handlee" }}
      >
        {label}
      </div>
      <div className="flex flex-col gap-4">
        <img src={icon} alt={label} className="w-[45px]" />
        <div>
          <h4 className="font-semibold text-xl">{title1}</h4>
          <h4 className="font-semibold text-xl">{title2}</h4>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  background: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  rotation: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelBackground: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string,
};

ServiceCard.defaultProps = {
  rotation: "rotate(0)",
  title2: "",
};

export default ServiceCard;
