import React, { useEffect, useState } from "react";

import NftCard from "../MiniComponents/NftCard";
import { FetchAllNfts, BuyNftss } from "../Reducers/getAlldata";

import useConnected from "./useConnected";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";

type NFTMetadata = {
  name: string;
  description: string;
  imageURL: string;
  price: number;
};
const Homepage: any = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const checkArray = useConnected();
  const [metaData, setMetadata] = useState<any[]>([]);
  const [fetZero, setFetchZer] = useState(0);

  useEffect(() => {
    const fetchAllNfts = async () => {
      const newData = dispatch(FetchAllNfts());

      setMetadata((await newData).payload as any[]);
    };

    fetchAllNfts();
  }, [fetZero]);

  const BuyNfts = (key: any) => {
    console.log(key);
    dispatch(BuyNftss({ key }));
  };

  return (
    <>
      <div
        className="bg-contain bg-no-repeat bg-center bg-gradient-to-r from-[#220970] to-[#FF00A8] w-full h-[800px]  shrink-0"
        // style={{
        //   backgroundImage: `url('/bg.svg')`,
        // }}
      >
        <div className=" flex flex-col mx-auto  max-w-7xl py-[6rem] items-start">
          <div className="text-[#FFF] text-center font-Poppins text-[16px] normal font-[500] leading-normal ">
            New NFTs
          </div>
          <div className="text-[#FFF] text-center font-Poppins text-[36px] normal font-[500] leading-normal">
            Weekly Top Nfts
          </div>
          <div className="flex flex-row justify-between items-center gap-10    w-full ">
            <h1 className="text-[#FFF] text-center font-Poppins text-[16px] normal font-[500] leading-normal tracking-[0.3px]">
              <p>
                Outsource your nft collection project and get it quickly done
              </p>
              <p>and delivered remotely online.</p>
            </h1>

            <div className=" ">
              <img src="/arrows.svg" />
            </div>
          </div>

          <div className="flex flex-row justify-between items-start ">
            {metaData &&
              metaData.map((item, key) => {
                return (
                  <>
                    <div className="flex flex-col">
                      <div className="flex flex-row  p-[0.2rem] backdrop:blur-[25px] w-[300px] relative bg-gradient-to-r from-red to-purple-50 mt-3 ">
                        <div className="bg-[#222]  padding-[2rem] h-[250px] w-[300px] ">
                          <NftCard
                            // Name={item.name}
                            // Price={item.money}
                            // description={item.description}
                            imageUrl={item.image}
                          />
                        </div>
                      </div>
                      <div className="w-[300px] h-[196px] bg-[#02021B] flex flex-col pl-4 ">
                        <div className="flex flex-row justify-between items-center h-[50px] gap-11">
                          <div className="text-[#FFF] font-Poppins text-[14px] normal font-[400] leading-normal">
                            {item.name}
                          </div>
                          {/* <div className="ml-auto">
                            <img
                              src="/people.svg"
                              alt="people"
                              // className="w-[130px] h-[130px]"
                            />
                          </div> */}
                        </div>

                        <div className="flex flex-row  gap-2 items-center mt-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="32"
                            viewBox="0 0 20 32"
                            fill="none"
                          >
                            <path
                              d="M9.99657 0L0 16.2966L9.99657 11.833V0Z"
                              fill="white"
                            />
                            <path
                              d="M9.99657 11.8328L0 16.2963L9.99657 22.1027V11.8328Z"
                              fill="white"
                            />
                            <path
                              d="M19.9944 16.2966L9.99597 0V11.833L19.9944 16.2966Z"
                              fill="white"
                            />
                            <path
                              d="M9.99597 22.1027L19.9944 16.2963L9.99597 11.8328V22.1027Z"
                              fill="white"
                            />
                            <path
                              d="M0 18.16L9.99657 32.0001V23.9628L0 18.16Z"
                              fill="white"
                            />
                            <path
                              d="M9.99597 23.9628V32.0001L20 18.16L9.99597 23.9628Z"
                              fill="white"
                            />
                          </svg>
                          <h1 className="text-[#FFF] text-center font-Poppins text-[14px] normal font-[400] leading-normal">
                            {item.money} Eth
                          </h1>
                        </div>

                        <div className="flex justify-center mt-5 ">
                          <button className="rounded-[5px] w-[177px] h-[57px] backdrop:blur-[96px] shadow-custom bg-gradient-to-r from-[#FF56F6] from-18.8% to-[#3BACE2] to-85.44% via-[#B936EE]  via-40% group-hover:bg-gradient-to-l hover:from-[#3BACE2] hover:to-[#FF56F6] hover:via-[#406AFF]">
                            Bid Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            :{" "}
          </div>
        </div>
      </div>
      <div className="w-full h-[779px]  bg-backk">
        <div className="flex flex-col mx-auto justify-between  max-w-7xl py-[6rem] items-start">
          <div className="text-[#FFF]  font-Poppins text-[36px] normal font-[700] leading-normal ">
            Our Top Creator’s Words
          </div>

          <div className="flex flex-row justify-between items-start ">
            <div className=" w-[470px] h-[227px] rounded-[15px] bg-background"></div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-wrap space-x-10 mx-auto justify-center	bg-[url('/bg.svg')]mt-10">
        {metaData &&
          metaData.map((item, key) => {
            return (
              <>
                <div className="flex-column flex-wrap space-y-2">
                  <NftCard
                    Name={item.name}
                    Price={item.money}
                    description={item.description}
                    imageUrl={item.image}
                  />
                  <div className="flex gap-12">
                    <button
                      onClick={() => BuyNfts(item.tokenId)}
                      className="h-15 rounded-lg bg-sujan-100 px-10 py-2 pl-3 text-xl font-semibold text-white"
                    >
                      Buy
                    </button>
                    <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                      AddToCart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        :{" "}
      </div> */}
    </>
  );
};

export default Homepage;
