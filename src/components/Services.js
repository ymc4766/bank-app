import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Services = () => {
  return (
    <div className="w-full py-10  ">
      <div className="max-w-[1200px] m-auto my-20 mka">
        <div className="flex flex-col space-y-0 items-center">
          <h1 className="text-2xl sm:text-5xl text-gray-600 text-center p-2">
            Other <b className="text-black"> Services</b>
          </h1>
          <h4 className="border-b-4 w-[90px]  border-[#82CD47] text-center mb-3"></h4>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mt-10">
          <div className="flex flex-col space-y-6 ">
            <img
              alt="/"
              src="https://www.premierbank.so/wp-content/uploads/2020/07/B50A9146-770x500.jpg"
            />

            <h4 className="text-center text-2xl">POS</h4>
            <p className="text-center text-gray-600 text-sm ">
              {" "}
              Give Your Customers the payment processing options they desire at{" "}
              a POS percentage
            </p>

            <div className="flex items-center space-x-2  text-green-600  justify-center">
              <h3 className="  text-1xl ">Learn More </h3>
              <span className="">
                <AiOutlineArrowRight />{" "}
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-6 ">
            <img
              alt="/"
              src="https://www.premierbank.so/wp-content/uploads/2020/07/IMG_9984-770x500.jpg"
            />

            <h4 className="text-center text-2xl ">Premier MasterCard</h4>
            <p className="text-center text-gray-600 text-sm ">
              {" "}
              there is no need to carry cash ! your debit card links directly to
              your bank account
            </p>

            <div className="flex items-center space-x-2  text-green-600  justify-center">
              <h3 className="  text-1xl ">Learn More </h3>
              <span className="">
                <AiOutlineArrowRight />{" "}
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-6 ">
            <img
              alt="/"
              src="https://www.premierbank.so/wp-content/uploads/2020/07/MEDIQ-Financial-Payroll-System-Implementation-770x500.jpg"
            />

            <h4 className="text-center text-2xl">Payrol </h4>
            <p className="text-center text-gray-600 text-sm ">
              {" "}
              Our payrol System saves you all the time and resources required to
              manage your salary payment
            </p>

            <div className="flex items-center space-x-2  text-green-600  justify-center">
              <h3 className="  text-1xl ">Learn More </h3>
              <span className="">
                <AiOutlineArrowRight />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
