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
      <div className="bg-[#220970] w-full h-[800px] ">
        {" "}
        {/* Add 'flex justify-center' */}
        <div className="  flex flex-row mx-auto items-center justify-between gap-10 lg:max-w-7xl sm:w-full py-[1rem]  ">
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
          <div className=" flex flex-row gap-10  ">
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
          <div className="pr-5">
            <button className=" bg-[#FFFFFF07]	 rounded-[5px] backdrop-blur-[5px] px-5 py-3 items-center">
              <h1 className="text-[#FFF] text-center font-Poppins text-[16px] normal font-[500] leading-normal">
                Connect
              </h1>
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-10 mx-auto  ">
          <div>
            {" "}
            <img
              src="/illustration.svg"
              alt="illustration"
              className="w-full h-full"
            />
          </div>
          <div>
            <div className="flex flex-col justify-center ">
              <h1 className="text-[#FFF] font-poppins text-[63px] font-[700] leading-normal capitalize">
                Cryptocurrency
              </h1>
              <h1 className="text-[#FFF] font-poppins normal font-[700] text-[50px] leading-normal capitalize ">
                just got even better
              </h1>
            </div>
            <div className=" ">
              <h1 className="text-[#FFF] flex justify-center items-center font-poppins text-[20px] font-[400] normal tracking-[0.3px] leading-normal">
                Best nft collection freelance services online. Outsource your
                nft collection project and get it quickly done and delivered
                remotely online.
              </h1>
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
