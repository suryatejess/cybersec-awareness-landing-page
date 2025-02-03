import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Banner from "./Components/Banner";
import HeaderFont from "./Components/HeaderFont";
import AwarenessConcern from "./Components/AwarenessConcernLeft";
import AwarenessConcernRight from "./Components/AwarenessConcernRight";
import Card from "./Components/Card";
import Loader from "./Components/Loader";
import Terminal from "./Components/Terminal";
import Button from "./Components/Button";
import Socials from "./Components/Socials";
import NewsLetter from "./Components/NewsLetter";
import JoinUs from "./Components/JoinUs";
function App() {
  return (
    <>
      <div id="banner">
        <Banner />
      </div>

      <div id="headerFont" className="flex justify-center items-center">
        <HeaderFont />
      </div>

      <div id="awarenessConcern">
        <AwarenessConcern
          text="Cyberbullying: More Than Just Words – The Mental Toll is Real"
          subText="The Emotional Toll of Online Harassment: Recognize the Signs"
          image="/src/assets/dedsec4.png"
        />

        <AwarenessConcernRight
          text="The Many Faces of Cyberbullying: Understand the Tactics"
          subText="Know the Signs, Protect Yourself and Others"
          image="/src/assets/face.png"
        />

        <AwarenessConcern
          text="You’re Not Alone: Support Is Available"
          subText="Take the First Step Toward Healing"
          image="/src/assets/illusion.png"
        />
      </div>

      <div
        id="loader"
        className="flex justify-center items-center w-full h-full"
      >
        <Loader />
      </div>

      <div id="safety">
        {/* heading */}
        <p
          className="text-white text-2xl text-center"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          How can you stay safe?
        </p>

        <div id="terminal" className="flex justify-around items-center">
          <div className="w-1/2 flex items-center justify-center">
            <Terminal />
          </div>

          <div className="w-1/2 flex items-center justify-center">
            <Card text="Update your software regularly" />
          </div>
        </div>

        <div id="Wifi" className="flex justify-around items-center">
          <div className="w-1/2 flex items-center justify-center">
            <img
              className="object-cover w-48 h-48"
              src="/src/assets/wifi.png"
              alt="Awareness"
            />
          </div>

          <div className="w-1/2 flex items-center justify-center">
            <Card text="Public Wi-Fi Isn't Always Safe" />
          </div>
        </div>

        <div id="click" className="flex justify-around items-center">
          <div className="w-1/2 flex items-center justify-center">
            <Button />
          </div>

          <div className="w-1/2 flex items-center justify-center">
            <Card text="Think before you click" />
          </div>
        </div>
      </div>

      <div id="joinUs" className="flex justify-center items-center">
        <JoinUs />
      </div>

      <div id="footer" className="flex justify-around items-center">
        <Socials />
        <NewsLetter />
      </div>
    </>
  );
}

export default App;
