import React from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <div className="text-white h-screen w-screen relative">
      {/* Background video */}
      <div className="h-screen w-screen fixed -z-10">
        <Video />
      </div>

      {/* Foreground content */}
      <div className="h-screen w-screen relative flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;


