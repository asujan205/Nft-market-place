import React, { useEffect, useState } from "react";
import { FetchBuyedNfts } from "../Reducers/getAlldata";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { ResellNfts } from "../Reducers/getAlldata";

import NftCard from "../MiniComponents/NftCard";

const FetchUserNft = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const [myNfts, setMynfts] = useState<any[]>([]);
  const fetchNfts = async () => {
    const newData = dispatch(FetchBuyedNfts());

    setMynfts((await newData).payload as any[]);
  };
  useEffect(() => {
    fetchNfts();
  }, []);
  const ReSell = async (tokenId: any) => {
    dispatch(ResellNfts({ tokenId }));
  };
  return (
    <>
      <div className="flex flex-wrap space-x-10  mx-10	mt-7">
        {myNfts.map((item, key) => {
          return (
            <>
              <div className="flex-column flex-wrap space-y-2">
                <NftCard
                  Name={item.name}
                  Price={item.money}
                  description={item.description}
                  imageUrl={item.image}
                />

                {/* <p key={key}>{item.name}</p>
        <img
          src={ipfsToHTTPS(item.image)}
          alt="nfts"
          width={45}
          height={50}
          key={key}
        />
        <p key={key}>{item.description}</p>
        <p key={key}>{item.money}</p> */}
                <button
                  onClick={() => ReSell(item.tokenId)}
                  className="h-15 rounded-lg bg-sujan-100 px-10 py-2 pl-3 text-xl font-semibold text-white"
                >
                  Resell
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default FetchUserNft;
