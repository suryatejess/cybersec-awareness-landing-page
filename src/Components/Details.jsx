import React from "react";

const Details = ({
  grantNumber,
  piName,
  coPiName,
  jrf,
  researchAssosciate,
}) => {
  return (
    <div>
      <p
        className="text-white text-sm md:text-2xl text-center bg-black"
        style={{ fontFamily: "'Press Start 2P', cursive" }}
      >
        Grant number : {grantNumber}
      </p>
      <p
        className="text-white text-sm md:text-2xl text-center bg-black"
        style={{ fontFamily: "'Press Start 2P', cursive" }}
      >
        Pi Name : {piName}
      </p>
      <p
        className="text-white text-sm md:text-2xl text-center bg-black"
        style={{ fontFamily: "'Press Start 2P', cursive" }}
      >
        Co PI Name : {coPiName}
      </p>
      <p
        className="text-white text-sm md:text-2xl text-center bg-black"
        style={{ fontFamily: "'Press Start 2P', cursive" }}
      >
        JRF : {jrf}
      </p>
      <p
        className="text-white text-sm md:text-2xl text-center bg-black"
        style={{ fontFamily: "'Press Start 2P', cursive" }}
      >
        Research Assosciate : {researchAssosciate}
      </p>
    </div>
  );
};

export default Details;
