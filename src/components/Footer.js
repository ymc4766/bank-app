import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { FaGreaterThan } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#19376D] py-10">
      <div className="container mx-auto px-6 py-4 border-b-2 border-gray-400">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div className="text-gray-500">
            <h5 className="font-bold uppercase mb-3 text-white ml-3">ABOUT</h5>
            <ul className="list-reset">
              <li className=" flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li className=" flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  Key Strategic Objectives
                </a>
              </li>

              <li className=" flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  In the Community
                </a>
              </li>
              <li className=" flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  Products & Services Offering
                </a>
              </li>
              <li className="flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  Board Members
                </a>
              </li>
            </ul>
          </div>

          <div className="text-gray-500">
            <h5 className="font-bold uppercase mb-3 text-white">
              OUR BANK ACCOUNTS
            </h5>
            <ul className="list-reset">
              <li className=" flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  Personal Current Account
                </a>
              </li>
              <li className=" flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  Umma Account
                </a>
              </li>
              <li className=" flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  Personal Saving Accounts
                </a>
              </li>
              <li className="flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  Student Savings Account
                </a>
              </li>{" "}
              <li className="flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  Umma Account
                </a>
              </li>
              <li className=" flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  Hajj/Umrah Account
                </a>
              </li>
              <li className="flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  Business Current Account
                </a>
              </li>
            </ul>
          </div>

          <div className="text-gray-500">
            <h5 className="font-bold uppercase mb-3 text-white">
              OUR SERVICES
            </h5>
            <ul className="list-reset">
              <li className=" flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  ATM
                </a>
              </li>
              <li className=" flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  Premier Mastercard
                </a>
              </li>

              <li className=" flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />
                <a href="#" className="hover:text-gray-400">
                  Payroll
                </a>
              </li>
              <li className=" flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  POS
                </a>
              </li>
              <li className="flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  SWIFT
                </a>
              </li>
            </ul>
          </div>

          <div className="text-gray-500">
            <h5 className="font-bold uppercase mb-3 ml-3 text-white">HELP</h5>
            <ul className="list-reset">
              <li className=" flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  Careers
                </a>
              </li>
              <li className=" flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>

              <li className=" flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />
                <a href="#" className="hover:text-gray-400">
                  Customer Support
                </a>
              </li>
              <li className=" flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
              <li className="flex items-center">
                <FaGreaterThan size={12} className=" mr-1 text-gray-400" />

                <a href="#" className="hover:text-gray-400">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Repeat the same structure for List 2, List 3, and List 4 */}
          {/* ... */}
        </div>
      </div>

      <div className="text-center  py-4 text-slate-500">
        © 2023 Premier Bank Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
