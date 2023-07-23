import React, { ReactComponentElement, useState } from "react";
import Link from "next/link";
// import ConnectWallet from "../Connecttowallet/ConnectWallet";
// import ConnectBtn from "../Connecttowallet/Props";
import ConnectBtn from "../ConnectBtn";
type NavComponents = {
  Homepage: any;
  Create: any;
  mynfts: any;
};

const NavBar = ({
  setHomeActive,
  setCreateActive,
  setMyNftsActive,
  setSwapActive,
}: any) => {
  return (
    <>
      <div className="bg-[#220970] w-full h-[200px] shrink-0  ">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="884"
          viewBox="0 0 1440 884"
          fill="none"
        >
          <path
            d="M0 0H1440V783.981C1440 839.202 1395.43 883.969 1340.21 883.977C1194.64 883.998 919.726 884.023 720.5 883.961C438.023 883.872 0 883.961 0 883.961V0Z"
            fill="#220970"
          />
        </svg> */}
        <div className=" bg-[#0C0263] flex flex-row min-w-[1170px] min-h[49px] justify-between gap-2">
          <div>
            <Link href="/" className=" h-full w-[154px] flex flex-row ">
              <img src="/logo.png" alt="logo" className="w-[154px]" />
              <h1 className="text-white text-2xl font-bold ml-10 mt-5">
                MonoMarket
              </h1>
            </Link>
          </div>
          <div className=" flex flex-row gap-1 ">
            <div className="text-[#FFF] text-center font-Poppins font-[16px] normal font-[500] leading-normal">
              Home
            </div>
            <div className="text-[#FFF] text-center font-Poppins font-[16px] normal font-[500] leading-normal">
              CreateNft
            </div>
            <div className="text-[#FFF] text-center font-Poppins font-[16px] normal font-[500] leading-normal">
              MyNfts
            </div>
            <div className="text-[#FFF] text-center font-Poppins font-[16px] normal font-[500] leading-normal">
              Swap
            </div>
          </div>
        </div>
      </div>
      {/* <nav className="bg-white border-gray-1 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border items-center border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
                onClick={() => {
                  setHomeActive(true);
                  setCreateActive(false);
                  setMyNftsActive(false);
                  setSwapActive(false);
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => {
                  setCreateActive(true);
                  setHomeActive(false);
                  setMyNftsActive(false);
                  setSwapActive(false);
                }}
              >
                CreateNfts
              </button>
            </li>
            <li>
              <button
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => {
                  setMyNftsActive(true);
                  setHomeActive(false);
                  setCreateActive(false);
                  setSwapActive(false);
                }}
              >
                Mycollections
              </button>
            </li>
            <li>
              <button
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => {
                  setMyNftsActive(false);
                  setHomeActive(false);
                  setCreateActive(false);
                  setSwapActive(true);
                }}
              >
                Swap
              </button>
            </li>
            <li>
              <ConnectBtn />
            </li>
          </ul>
        </div>
      </nav> */}
    </>
  );
};
export default NavBar;
