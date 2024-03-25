import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import { CgDollar } from "react-icons/cg";
import { FaCar, FaCcMastercard } from "react-icons/fa";
import { GiBank, GiDiscGolfBag, GiGymBag } from "react-icons/gi";

function FinancialSoln() {
  return (
    <div className="w-full  ">
      <div className=" w-full h-[80vh] bg-gray-600/90 relative">
        <img
          alt="/"
          src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          className="w-full  h-full object-cover mix-blend-overlay"
        />
      </div>

      <div className="max-w-[1140px] m-auto    ">
        <div className="absolute mt-[-100%] sm:mt-[-40%]">
          <div className="flex flex-col  space-y-3 mb-[-100px] sm:mt-[35px]">
            <h3 className=" text-xl md:text-4xl md:mt-10 text-white text-4xl text-center sm:p-3 ">
              Financing Solutions
            </h3>
            <h1 className=" text-lg md:text-2xl  text-white text-center">
              Apply today to finance your future. Low rates for Auto Financing,
              Trade Financing, Land Financing, and more!
            </h1>
          </div>
        </div>
      </div>
      <div
        className="grid sm:grid-cols-3  md:grid-cols-3   
      mx-auto  relative bottom-[180px]   shadow-4 w-screen  md:px-12"
      >
        <div
          className="bg-blue-500 text-white py-10 
         space-y-4 rounded-md flex items-center flex-col text-center px-4  "
        >
          <FaCar size={34} />
          <h3 className="text-3xl text-white text-slate-800">Auto Finance</h3>
          <p className="text-center  text-2xl">
            A flexible and affordable financial solution that gives you access
            to your dream car!
          </p>
          <div className="flex items-center  space-x-3">
            <h3 className="text-3xl p-1 ">Learn More </h3>

            <span>
              <AiOutlineArrowRight size={30} />{" "}
            </span>
          </div>
        </div>
        <div
          className="bg-green-600 text-white py-10 
         space-y-4 rounded-lg flex items-center flex-col text-center px-4  "
        >
          <GiGymBag size={34} />
          <h3 className="text-3xl text-white text-slate-800">Land Finance</h3>
          <p className="text-center  text-2xl">
            A solution that enables individuals to acquire undeveloped land for
            construction purposes.
          </p>
          <div className="flex items-center  space-x-3">
            <h3 className="text-3xl p-1 ">Learn More </h3>

            <span>
              <AiOutlineArrowRight size={30} />{" "}
            </span>
          </div>
        </div>

        <div
          className="bg-blue-500 text-white py-10 
         space-y-4 rounded-lg flex items-center flex-col text-center px-4  "
        >
          <GiDiscGolfBag size={34} />
          <h3 className="text-3xl text-white text-slate-800">
            Business Financing
          </h3>
          <p className="text-center  text-2xl">
            A solution for medium and short term financing for expansion and
            commercial property.
          </p>
          <div className="flex items-center  space-x-3">
            <h3 className="text-3xl p-1 ">Learn More </h3>

            <span>
              <AiOutlineArrowRight size={30} />{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialSoln;
