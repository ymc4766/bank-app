import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed w-full bg-white z-10 ${
        isSticky
          ? "sticky top-0  shadow drop-shadow-400  transition-all duration-300"
          : ""
      }`}
    >
      <div
        className="w-full min-h-[100px] bg-white border-b border-gray-200  
    flex  justify-between items-center  md:px-16 sm:px-4 cursor-pointer"
      >
        <img
          src="https://www.premierbank.so/wp-content/uploads/2022/04/logo.png"
          alt=""
        />

        <div className="flex items-center hidden md:flex text-gray-400 text-md">
          <ul className="flex items-center  ">
            <li>Home</li>

            <li className="relative group">
              About Us
              <ul className="absolute  border-t-4 border-gray-700 rounded-md hidden left-0 bg-gray-100 p-4 w-[280px] space-y-2 group-hover:block">
                <li className="mt-6 border-b px-4 border-gray-300 w-full block p-2 hover:bg-[#4C4C6D] hover:text-white text-slate-700 rounded-md">
                  <a href="/home" className="">
                    Who We Are
                  </a>
                </li>
                <li className="mt-6 border-b px-4 border-gray-300 w-full block p-3 hover:bg-[#4C4C6D] hover:text-white text-slate-600 rounded-md">
                  <a href="/home" className="">
                    Products And Services
                  </a>
                </li>
                <li className="mt-6 border-b px-4 border-gray-300 w-full block p-3 hover:bg-[#4C4C6D] hover:text-white text-slate-600 rounded-md">
                  <a href="/home" className="semibold">
                    Board Members
                  </a>
                </li>
                <li className="mt-6 border-b px-4 border-gray-300 w-full block p-2 hover:bg-[#4C4C6D] hover:text-white text-slate-500 rounded-md">
                  <a href="/home">Shari'ah SuperVisory Board</a>
                </li>{" "}
                <li className="mt-6 border-b px-4 border-gray-300 w-full block p-2 hover:bg-[#4C4C6D] hover:text-white text-slate-600 rounded-md">
                  <a>Senior Management</a>
                </li>
              </ul>
            </li>
            <li>Accounts</li>
            <li>Financing</li>
            <li className="relative group ">
              More Service
              <ul className="absolute  rounded-md hidden left-0 bg-gray-100 p-4 w-[280px] space-y-2 group-hover:block">
                <li className="mt-6 border-b px-4 border-gray-300 w-full block p-2 hover:bg-[#4C4C6D] hover:text-white text-slate-700 rounded-md">
                  <a href="/home" className="">
                    payrol
                  </a>
                </li>
                <li className="mt-6 border-b px-4 border-gray-300 w-full block p-3 hover:bg-[#4C4C6D] hover:text-white text-slate-600 rounded-md">
                  <a href="/home" className="">
                    Swift
                  </a>
                </li>
                <li className="mt-6 border-b px-4 border-gray-300 w-full block p-3 hover:bg-[#4C4C6D] hover:text-white text-slate-600 rounded-md">
                  <a href="/home" className="semibold">
                    POS
                  </a>
                </li>
                <li className="mt-6 border-b px-4 border-gray-300 w-full block p-2 hover:bg-[#4C4C6D] hover:text-white text-slate-500 rounded-md">
                  <a href="/home">ATM</a>
                </li>{" "}
                <li className="mt-6 border-b px-4 border-gray-300 w-full block p-2 hover:bg-[#4C4C6D] hover:text-white text-slate-600 rounded-md">
                  <a>Premier MasterCard</a>
                </li>
                <li className="mt-6 border-b px-4 border-gray-300 w-full block p-2 hover:bg-[#4C4C6D] hover:text-white text-slate-600 rounded-md">
                  <a>Agency Banking</a>
                </li>
              </ul>
            </li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>

        <div>
          <button className="p-2 px-10 bg-[#82CD47]  rounded-lg  text-gray-100">
            internet Banking
          </button>
        </div>

        {/* <div className="md:hidden">
        <AiOutlineMenu />
      </div> */}

        <div onClick={handleNav} className="sm:hidden z-10">
          {!nav ? (
            <FaBars className="mr-4 cursor-pointer" size={30} />
          ) : (
            <FaTimes className="mr-4 cursor-pointer text-white" size={38} />
          )}
        </div>
        {/*         
        <div className="absolute px-8 bg-gray-600 text-white right-0 w-[40%] md:hidden bg-[#fff] w-full">
          <div className="md:hidden">
            <AiOutlineMenu />
          </div>
          <ul className=" mt-[260px] text-center">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div> */}

        <div
          className={
            nav
              ? "overflow-y-hidden md:hidden  ease-in duration-300 absolute h-screen bg-[#0B2447]/90 w-[76%] text-white right-0 top-0"
              : "absolute top-0 h-screen left-[-100%] ease-in duration-550"
          }
        >
          <ul className="w-full h-full text-center pt-12 mt-[60px]">
            <li className="px-8 text-2xl">Home</li>
            <li className="px-8 text-2xl">About Us</li>
            <li className="px-8 text-2xl">Accounts</li>
            <li className="px-8 text-2xl">Financing</li>
            <li className="px-8 text-2xl">News</li>
            <li className="px-8 text-2xl">Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
