import { useState } from "react";
// import reactLogo from ".  /assets/react.svg";
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
    <div className="min-h-screen">
      <div id="banner">
        <Banner />
      </div>

      <div
        id="headerFont"
        className="flex justify-center items-center p-4 md:p-8"
      >
        <HeaderFont text="We are Dedsec" />
      </div>

      <div id="awarenessConcern" className="space-y-12 md:space-y-24">
        <AwarenessConcern
          text="Cyberbullying: More Than Just Words – The Mental Toll is Real"
          subText="The Emotional Toll of Online Harassment: Recognize the Signs"
          image="/assets/dedsec4.png"
        />

        <AwarenessConcernRight
          text="The Many Faces of Cyberbullying: Understand the Tactics"
          subText="Know the Signs, Protect Yourself and Others"
          image="/assets/face.png"
        />

        <AwarenessConcern
          text="You're Not Alone: Support Is Available"
          subText="Take the First Step Toward Healing"
          image="/assets/illusion.png"
        />
      </div>

      <div
        id="loader"
        className="flex justify-center items-center w-full p-4 md:p-8"
      >
        <Loader />
      </div>

      <div id="safety" className="space-y-12 p-4 md:p-8">
        <p
          className="text-white text-xl md:text-2xl text-center"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          How can you stay safe?
        </p>

        <div className="space-y-12 md:space-y-24">
          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="w-full md:w-1/2 flex justify-center">
              <Terminal />
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Card text="Update your software regularly" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                className="object-cover w-48 h-48"
                src="/assets/wifi.png"
                alt="Awareness"
              />
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Card text="Public Wi-Fi Isn't Always Safe" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="w-full md:w-1/2 flex justify-center">
              <Button />
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Card text="Think before you click" />
            </div>
          </div>
        </div>
      </div>

      <div id="joinUs" className="flex justify-center items-center p-4 md:p-8">
        <JoinUs />
      </div>

      <div
        id="footer"
        className="flex flex-col md:flex-row justify-around items-center gap-8 p-4 md:p-8"
      >
        <Socials />
        <NewsLetter />
      </div>
    </div>
  );
}

export default App;
