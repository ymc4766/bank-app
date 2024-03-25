import React from "react";

const AgencyBanking = () => {
  return (
    <div className="w-full  sm:px-6">
      <div
        className="max-w-[1240px] w-full mx-auto
       py-7 grid sm:grid-cols-2 justify-between space-x-10 "
      >
        <img
          className="w-full rounded-md "
          src="https://www.premierbank.so/wp-content/uploads/2021/05/Agent-banking-3-09-1-scaled-573x677.jpg"
          alt="/"
        />

        <div className="flex flex-col py-3 space-y-6 sm:mt-16 ">
          <h3 className="text-4xl ">
            {" "}
            <b className="text-black">Agency</b>{" "}
            <span className="text-gray-600">Banking</span>
          </h3>
          <p className="text-2xl ">increased Access to Banking Benefits</p>

          <p style={{ lineHeight: "2.3rem" }} className="text-xl ">
            With an agent nearby, you can deposit or withdraw from your Premier
            Bank account. Our agents are ready for you beyond the banking hours
            even at the weekends.
          </p>

          <div className="grid grid-cols-2  space-x-2 w-full pr-2">
            <button className="p-2 bg-green-500 px-10 rounded-md text-white ">
              Learn More{" "}
            </button>
            <button className="p-2 bg-green-500 px-10 rounded-md text-white ">
              Find Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyBanking;
