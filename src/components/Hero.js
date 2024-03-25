import React from "react";
import { BsBank } from "react-icons/bs";
import { FaCcMastercard } from "react-icons/fa";
import { GiBank } from "react-icons/gi";
import { CgDollar } from "react-icons/cg";

const Hero = () => {
  return (
    <div className="w-full h-full ">
      <div className=" w-full h-[80vh] bg-gray-600/90 relative ">
        <img
          alt="/"
          src="https://pbs.twimg.com/media/DyZS4XtXQAAfILa.jpg"
          className="w-full  h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* <div className=""></div> */}
      {/* mx-auto mt-[40%] sm:mt-[-40%] */}

      <div className="max-w-[1140px] m-auto   px-3 ">
        <div className="absolute mt-[-100%] sm:mt-[-25%]">
          <div className="flex flex-col  space-y-3">
            <h3 className="text-xl md:text-slate-700  text-white m-2  ">
              {" "}
              Secure and Simple
            </h3>
            <h1 className="  text-3xl md:text-5xl  text-white md:text-black m-2">
              Solution For All
            </h1>
            <h3
              style={{ fontWeight: "600", fontFamily: "revert" }}
              className="text-white sm:text-black text-4xl  sm:text-6xl"
            >
              Your Banking Needs
            </h3>
          </div>
          <button className="px-10 p-2 ml-2  rounded-md bg-green-500 mt-2  py-3 hover:text-white hover:bg-slate-600">
            Get your Card
          </button>
        </div>
      </div>
      <div
        className="grid grid-cols-4 gap-4 md:grid-cols-4  bg-[#9BA4B5]/70 text-white 
          mx-auto  relative bottom-0   shadow-4 w-screen p-5    md:px-12"
      >
        <div className="flex items-center space-x-2 bg-transparent ">
          <FaCcMastercard size={22} />
          <h3 className="text-lg text-slate-800">premier Cards</h3>
        </div>

        <div className="flex items-center space-x-2 bg-transparent ">
          <GiBank size={22} />
          <h3 className="text-lg text-slate-800">Banking Accounts</h3>
        </div>
        <div className="flex items-center space-x-2 bg-transparent ">
          <BsBank size={22} />
          <h3 className="text-lg text-slate-800">Agency Banking</h3>
        </div>
        <div className="flex items-center space-x-2 bg-transparent ">
          <CgDollar size={22} />
          <h3 className="text-lg text-slate-800">Financial Solutions</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
