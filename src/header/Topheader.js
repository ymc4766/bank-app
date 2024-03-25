import React from "react";
import { IoMdCall } from "react-icons/io";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
const Topheader = () => {
  return (
    <div className="w-full px-2 bg-white border-b border-gray-300   py-3 text-slate-700 hidden md:flex">
      <div className="max-w-[1240px] mx-auto   grid md:grid-cols-4  ">
        <div className="flex items-center space-x-2  ">
          <IoMdCall />
          <span>363 Hargeisa || 2014 Mogadishu</span>
        </div>
        <div className="flex items-center space-x-2 ">
          <AiOutlineMail />
          <p>info@premierbank.so</p>
        </div>

        <div className="flex items-center space-x-2 ml-4">
          <BsStopwatch />
          Sat - Thu 8AM - 5PM; Friday closed
        </div>
        <div className="flex items-center space-x-2 ml-20">
          <AiFillYoutube />
          <AiOutlineTwitter />
          <AiFillLinkedin />
          <AiFillFacebook />
          <AiFillInstagram />
        </div>
      </div>
    </div>
  );
};

export default Topheader;
