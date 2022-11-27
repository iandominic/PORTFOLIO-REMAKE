import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="w-full h-full bg-[#E8EEF1]">
        <div className="h-full w-[90%] mx-auto translate-y-[150px]">
          <div className="flex flex-col gap-1">
            <h1 className="text-6xl font-black text-black tracking-tight">
              I’m Dominic,
            </h1>
            <h2 className="text-[#9c9c9c] text-2xl font-bold">
              a Front-end Developer.
            </h2>
            <p className="text-[#B2B2B2] leading-[20px] font-medium text-md josefin pt-2">
              Lorem ipsum dolor sit amet, <br /> consectetur. Fusce sit amet
              sagittis <br /> arcu, dapibus ultricies dui. Nunc et condimentum
              erat.
            </p>
            <div className="flex pt-3">
              <button
                type="button"
                class="inline-block px-10 py-3 border-[1px] border-gray-600 text-gray-600 font-medium text-sm leading-tight uppercase hover:bg-black hover:border-gray-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                RESUME
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
