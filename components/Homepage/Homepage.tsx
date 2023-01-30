import React, { useEffect, useState } from "react";
import Image from "next/image";
import useNftUri from "../getUri";
import Web3 from "web3";
import { NftAbi } from "../../NftAbi";
import { ipfsToHTTPS } from "../Helper";
import NftCard from "../MiniComponents/NftCard";

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contractAddress = "0xBC98199BB6820dF2a57E9A417542142b6c1A46D6";
const contract = new web3.eth.Contract(NftAbi, contractAddress);

import useConnected from "./useConnected";

type NFTMetadata = {
  name: string;
  description: string;
  imageURL: string;
  price: number;
};
const Homepage: any = () => {
  const checkArray = useConnected();
  const [metaData, setMetadata] = useState<any[]>([]);
  const [fetZero, setFetchZer] = useState(0);

  useEffect(() => {
    const fetchAllNfts = async () => {
      const Data = await contract.methods.fectchMarketNft().call();

      console.log(Data);
      let newData = [];

      for (let i = 0; i < Data.length; i++) {
        const tokenUri = await contract.methods
          .tokenURI(Data[i].tokenId)
          .call();
        const metadataResponse = await fetch(ipfsToHTTPS(tokenUri));
        if (metadataResponse.status != 200) return;
        const json = await metadataResponse.json();

        newData.push({
          ...json,
          tokenId: Data[i].tokenId,
          money: Data[i].price,
        });

        //     setMetadata((prev)=>
        //     [...prev,
        //  json]

        //     )
      }

      setMetadata(newData);
    };

    fetchAllNfts();
  }, [fetZero]);

  console.log(metaData);

  const BuyNfts = async (key: any) => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const BuyNfts = await contract.methods
      .createMarketSell(key)
      .send({ from: account, value: 20 });
    console.log(BuyNfts);
  };

  console.log(metaData);
  return (
    <>
      {metaData.map((item, key) => {
        return (
          <>
            <div className="flex flex-wrap">
              <NftCard
                Name={item.name}
                Price={item.money}
                description={item.description}
                imageUrl={item.image}
              />
            </div>
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
            <button onClick={() => BuyNfts(item.tokenId)}>Buy</button>
          </>
        );
      })}
    </>
  );
};

export default Homepage;
