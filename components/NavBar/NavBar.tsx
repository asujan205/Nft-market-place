import React, { ReactComponentElement, useState } from "react";
import Link from "next/link";
import ConnectWallet from "../Connecttowallet/ConnectWallet";
import ConnectBtn from "../Connecttowallet/Props";
type NavComponents = {
  Homepage: any;
  Create: any;
  mynfts: any;
};

const NavBar = ({ setHomeActive, setCreateActive, setMyNftsActive }: any) => {
  return (
    <>
      <nav className="bg-white border-gray-1 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
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
                }}
              >
                Mycollections
              </button>
            </li>
            <ConnectBtn />
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
