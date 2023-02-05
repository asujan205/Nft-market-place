import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { NftAbi } from "../../NftAbi";
import { ipfsToHTTPS } from "../Helper";
import NftCard from "../MiniComponents/NftCard";
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contractAddress = "0xBC98199BB6820dF2a57E9A417542142b6c1A46D6";
const contract = new web3.eth.Contract(NftAbi, contractAddress);
const FetchListed = () => {
  const [nfts, setMynfts] = useState<any[]>([]);
  const fetchNfts = async () => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log(account);
    const myNfts = await contract.methods
      .fetchItemsListed()
      .call({ from: account });
    let newData = [];
    for (let i = 0; i < myNfts.length; i++) {
      const tokenUri = await contract.methods
        .tokenURI(myNfts[i].tokenId)
        .call();
      const metadataResponse = await fetch(ipfsToHTTPS(tokenUri));
      if (metadataResponse.status != 200) return;
      const json = await metadataResponse.json();

      newData.push({ ...json, tokenId: myNfts[i].tokenId });
    }
    setMynfts(newData);
  };
  useEffect(() => {
    fetchNfts();
  }, []);

  return (
    <>
      <div className="flex flex-wrap ">
        <p className="text-justify text-slate-200	">
          Token I have listed for sale
        </p>
        {nfts.map((item, key) => {
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
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default FetchListed;
