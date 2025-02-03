import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="/src/assets/banner.jpg"
        alt="Banner image covering full viewport height"
        className="h-screen object-cover object-right-top"
      />
    </div>
  );
};

export default Banner;
