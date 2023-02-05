import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { NftAbi } from "../../NftAbi";
import { ipfsToHTTPS } from "../Helper";
import NftCard from "../MiniComponents/NftCard";
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contractAddress = "0xBC98199BB6820dF2a57E9A417542142b6c1A46D6";
const contract = new web3.eth.Contract(NftAbi, contractAddress);

const FetchUserNft = () => {
  const [myNfts, setMynfts] = useState<any[]>([]);
  const fetchNfts = async () => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log(account);
    const myNfts = await contract.methods.fetchMyNft().call({ from: account });
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
  const ReSell = async (tokenId: any) => {
    const accounta = await web3.eth.getAccounts();
    const account = accounta[0];
    const reSell = await contract.methods
      .reSellToken(tokenId, 40)
      .send({ from: account, value: 25000000000000000 });
    console.log(reSell);
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
export default FetchUserNft;
