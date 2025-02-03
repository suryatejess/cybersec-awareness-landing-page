import React from "react";

const AwarenessConcernLeft = ({ text, subText, image }) => {
  return (
    <div className="flex justify-around items-center">
      <div
        id="displayText"
        className=" w-1/2 flex flex-col justify-center p-16"
      >
        <p
          className="text-white text-2xl"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          {text}
        </p>

        <p
          className="text-white text-2xl"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {subText}
        </p>
      </div>

      <div id="displayImage" className=" w-1/2flex justify-center">
        <img className="object-cover w-96 h-96" src={image} alt="Awareness" />
      </div>
    </div>
  );
};

export default AwarenessConcernLeft;
