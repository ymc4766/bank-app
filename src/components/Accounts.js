import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RiBriefcase3Fill } from "react-icons/ri";
import { FaSuitcase } from "react-icons/fa";
const Accounts = () => {
  return (
    <div className="bg-blue-600 w-full  h-full flex items-center   ">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2 gap-3  ">
        <img
          src="https://www.premierbank.so/wp-content/uploads/2020/07/Account-3-09-scaled-573x677.jpg"
          alt="/"
          className="w-[100%] "
        />
        <div className="flex flex-col  py-4">
          <h3 className="text-6xl text-white  md:mt-[28px]  ml-4 ">
            Our Acounts
          </h3>

          <p className="py-4  ml-4  text-2xl  text-white mt-4  ">
            Open up your personal or business account within minutes. You can
            also get online and mobile banking, a debit card, ATM deposit and
            withdrawals, and more.
          </p>
          <div className="grid sm:grid-cols-2 gap-10 text-slate-200 mt-10 py-4">
            <div className="flex items-center space-x-2  border-b-2 py-4 ">
              <span className="text-lg ml-3 ">
                <RiBriefcase3Fill size={35} />{" "}
              </span>
              <h3 className="text-3xl  ">personal Accounts</h3>
            </div>
            <div className="flex items-center space-x-2 border-b-2 py-4 ml-3">
              <span>
                <FaSuitcase size={35} />{" "}
              </span>
              <h3 className="text-3xl">busines Accounts</h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-10 mt-6 text-slate-100 ml-3">
            <div className="flex flex-col ">
              <p className="text-lg">
                An account that is as individual as you are.
              </p>
              <button className="flex items-center space-x-4 py-2">
                <h4 className="text-3xl ">Learn More</h4>
                <AiOutlineArrowRight size={25} />
              </button>
            </div>
            <div className="flex flex-col ">
              <p className="text-lg ">
                An account that understands your business needs.
              </p>
              <button className="flex items-center space-x-4 py-2">
                <h4 className="text-3xl ">Learn More</h4>
                <AiOutlineArrowRight size={25} />
              </button>
            </div>
          </div>
        </div>
        '
      </div>
    </div>
  );
};

export default Accounts;
