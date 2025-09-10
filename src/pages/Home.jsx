import React from "react";
import Video from "../components/Home/video.jsx";
import HomeHeroText from "../components/Home/HomeHeroText.jsx";
import HomeBottomText from "../components/Home/HomeBottomText.jsx";

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



