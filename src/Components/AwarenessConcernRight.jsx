import PropTypes from "prop-types";

const AwarenessConcernRight = ({ text, subText, image }) => {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-8 p-4 md:p-8">
      <div
        id="displayText"
        className="w-full md:w-1/2 flex flex-col justify-center space-y-4"
      >
        <p
          className="text-white text-lg md:text-2xl text-center md:text-right"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          {text}
        </p>
        <p
          className="text-white text-lg md:text-2xl text-center md:text-right"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {subText}
        </p>
      </div>
      <div id="displayImage" className="w-full md:w-1/2 flex justify-center">
        <img
          className="object-cover w-64 h-64 md:w-96 md:h-96"
          src={image}
          alt="Awareness"
        />
      </div>
    </div>
  );
};

AwarenessConcernRight.propTypes = {
  text: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default AwarenessConcernRight;
