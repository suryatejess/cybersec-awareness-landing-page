import React from "react";

const Banner = () => {
  return (
    <div className="banner relative w-full">
      <img
        src="/assets/banner.jpg"
        alt="Banner image covering full viewport height"
        className="h-[50vh] md:h-screen w-full object-cover object-right-top"
      />
    </div>
  );
};

export default Banner;
