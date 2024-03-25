import React from "react";

const PremierCards = () => {
  return (
    <div className="w-full  py-10 w-full ">
      <div className="max-w-[1240px] mx-auto  w-full h-full flex flex-col  ">
        <h2 className="text-5xl text-center py-8">
          <b className="text-gray-800">Premier</b>{" "}
          <span className="text-black/70">MasterCard</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl  m-2">platinum</h3>
            <img
              src="https://cdn.comparecards.com/uploads/images/items/4793.png"
              alt="/"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl  m-2">Corporate</h3>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ2ztJ-NrAfNGADhSyfoXJFPjpXq-SMdglgTmc9ZOLElhhNSE9Nyyqv6ja9mqmxr3PUs&usqp=CAU"
              alt="/"
            />
          </div>{" "}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl  m-2">World Elite</h3>
            <img
              src="https://www.premierbank.so/wp-content/uploads/2020/07/Premier_Bank_ATM_-Cards-03-1-300x191.png"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremierCards;
