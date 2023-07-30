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
      <div className="bg-[#220970] w-full  ">
        {" "}
        {/* Add 'flex justify-center' */}
        <div className="  flex flex-row mx-auto items-center justify-between lg:gap-10 lg:max-w-7xl sm:w-full py-[1rem]  ">
          <div className="h-full  flex flex-row  justify-center items-center px-3 gap-1">
            <Link href="/" className=" ">
              <img src="/logo.svg" alt="logo" className=" h-[50px]" />
            </Link>
            <Link href="/">
              <h1 className="text-[#FFF] text-center font-Poppins text-[16px] normal font-[500] leading-normal">
                SwapyMart
              </h1>
            </Link>
          </div>
          <div className=" flex flex-row gap-10 flex-wrap  ">
            <div className="text-[#FFF] text-center font-Poppins text-[16px] normal font-[500] leading-normal">
              Home
            </div>
            <div className="text-[#FFF] text-center font-Poppins text-[16px] normal font-[500] leading-normal">
              Createnft
            </div>
            <div className="text-[#FFF] text-center font-Poppins text-[16px] normal font-[500] leading-normal">
              Mynfts
            </div>
            <div className="text-[#FFF] text-center font-Poppins text-[16px] normal font-[500] leading-normal">
              Swap
            </div>
          </div>
          <div className="">
            <button className=" bg-[#FFFFFF07]	 rounded-[5px] backdrop-blur-[5px] px-5 py-3 items-center">
              <h1 className="text-[#FFF] text-center font-Poppins text-[16px] normal font-[500] leading-normal">
                Connect
              </h1>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center lg:flex-row gap-5 border border-yellow-500 lg:mr-[8.6rem] p-5">
          <div className="max-w-[100%]">
            <img
              src="/illustration.svg"
              alt="illustration"
              className="w-full"
            />
          </div>

          <div className="flex flex-col">
            <div className="max-w-full">
              {" "}
              {/* Remove the fixed width to allow flexible sizing */}
              <h1 className="text-white font-poppins text-3xl lg:text-[6.474820143884892vh] font-semibold leading-normal capitalize">
                Cryptocurrency
              </h1>
            </div>
            <h1 className="text-white font-poppins font-semibold text-xl lg:text-4xl leading-normal capitalize mb-4">
              Just got even better
            </h1>
            <h1 className="text-white font-poppins font-normal text-base lg:text-lg leading-normal px-3">
              Best NFT collection freelance services online. Outsource your NFT
              collection project and get it quickly done and delivered remotely
              online.
            </h1>
            <div className="flex flex-row  mt-5 items-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="92"
                height="96"
                viewBox="0 0 92 96"
                fill="none"
              >
                <g filter="url(#filter0_d_7_579)">
                  <path
                    d="M29 48.4186C29.0788 51.9568 32.625 54.0993 35.7319 52.4149L60.716 37.9259C62.0767 37.1357 63 35.6879 63 33.9912C63 32.2945 62.0767 30.8467 60.716 30.0565L35.7319 15.5881C32.625 13.9037 29.0788 16.0256 29 19.5638V48.4186Z"
                    fill="url(#paint0_linear_7_579)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_7_579"
                    x="0"
                    y="0"
                    width="92"
                    height="96"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="14" />
                    <feGaussianBlur stdDeviation="14.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0313726 0 0 0 0 0.00392157 0 0 0 0 0.247059 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_7_579"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_7_579"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_7_579"
                    x1="46"
                    y1="15"
                    x2="46"
                    y2="53"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#62DB68" />
                    <stop offset="1" stop-color="#684FB4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex flex-col mx-auto ">
                <h1 className="text-white font-poppins font-semibold text-base lg:text-lg">
                  Let’s get started!
                </h1>
                <h1 className="text-white font-poppins font-normal text-sm lg:text-base">
                  Watch this quick demo video to see how to get started.
                </h1>
              </div>
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
