import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="w-full h-screen flex flex-col relative">
      <Navbar />
      <div className=" flex text-center  items-center justify-center h-full z-10">
        <h1 className="text-[10rem] leading-none font-bold">
          We Are <br />
          Match Makers
        </h1>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1">
        <div className="bg-pink-500 w-60 h-[80svh] "></div>
      </div>
    </div>
  );
};

export default Header;
