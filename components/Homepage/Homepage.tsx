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

      setMetadata((await newData).payload);
    };

    fetchAllNfts();
  }, [fetZero]);

  const BuyNfts = (key: any) => {
    console.log(key);
    dispatch(BuyNftss({ key }));
  };

  return (
    <>
      <div className="flex flex-wrap space-x-10 mx-auto justify-center	mt-10">
        {metaData.map((item, key) => {
          return (
            <>
              <div className="flex-column flex-wrap space-y-2">
                <NftCard
                  Name={item.name}
                  Price={item.money}
                  description={item.description}
                  imageUrl={item.image}
                />

                <button
                  onClick={() => BuyNfts(item.tokenId)}
                  className="h-15 rounded-lg bg-sujan-100 px-10 py-2 pl-3 text-xl font-semibold text-white"
                >
                  Buy
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Homepage;
