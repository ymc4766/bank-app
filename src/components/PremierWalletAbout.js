import React from "react";

const PremierWalletAbout = () => {
  return (
    <div className="w-full ">
      <div className="max-w-[1240px] mx-auto w-full grid sm:grid-cols-2  items-center gap-10 justify-center">
        <img
          className="w-full "
          alt="/"
          src="https://www.premierbank.so/wp-content/uploads/2022/09/Mock-up-mobile-wallet--573x677.png"
        />

        <div className="flex flex-col space-y-3 ml-6 py-2 ">
          <h3 className="text-6xl text-bold text-black ">
            Premier <span className="text-black/50">Wallet</span>
          </h3>
          <h4 style={{ fontFamily: "revert" }} className="text-3xl">
            Enjoy Amazing Features Benefits
          </h4>
          <p>
            Premier Wallet is the most successful mobile money service in
            Somalia. Premier Wallet offers financial services to non-banked
            populations or people with limited access to banks. Premier Wallet
            is a safe, affordable, and secure way to trade on your smartphone.
            Top-up, money transfer, withdrawals, bill payments, and mobile
            banking are the primary features of Premier Wallet.
          </p>

          <button className="p-2 px-5 bg-green-300 rounded-md w-[50%] justify-center">
            Dowload App{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremierWalletAbout;
