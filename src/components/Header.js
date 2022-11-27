import React from "react";

const Header = () => {
  return (
    <div>
      <div className="font-black w-[90%] mx-auto text-5xl absolute top-0 left-0 right-0 bg-transparent py-3">
        D
      </div>
      <div className="flex w-full bg-[#F5F0FB] items-center justify-evenly text-sm h-[70px] text-gray-700 uppercase font-medium fixed right-0 bottom-0 left-0 z-[999]">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Projects</h1>
        <h1>Contact</h1>
      </div>
    </div>
  );
};

export default Header;
