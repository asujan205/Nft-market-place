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
                    <div className="flex flex-row h-[393px] p-[0.2rem] relative bg-gradient-to-r from-red to-purple-50 mt-3 ">
                      <div className="bg-[#222]  padding-[2rem]">
                        <NftCard
                          Name={item.name}
                          Price={item.money}
                          description={item.description}
                          imageUrl={item.image}
                        />
                      </div>
                    </div>
                  </>
                );
              })}
            :{" "}
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
