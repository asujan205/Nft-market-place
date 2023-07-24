import React, { useState, useEffect } from "react";
import { FetchListedNfts } from "../Reducers/getAlldata";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";

import NftCard from "../MiniComponents/NftCard";

const FetchListed = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [nfts, setNfts] = useState<any[]>([]);

  useEffect(() => {
    const fetchAllNfts = async () => {
      const newData = dispatch(FetchListedNfts());

      setNfts((await newData).payload as any[]);
    };

    fetchAllNfts();
  }, []);

  return (
    <>
      <div className="flex flex-wrap py-10  px-10 align-middle">
        <div className="flex flex-column gap-10 p ">
          {nfts.map((item, key) => {
            return (
              <>
                <div className="flex-column flex-wrap space-y-2 ">
                  <NftCard
                    // Name={item.name}
                    // Price={item.money}
                    // description={item.description}
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
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default FetchListed;
