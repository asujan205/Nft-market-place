import Web3 from "web3";
import { useState, useEffect } from "react";
import { swapabi } from "../../swapabi";
import { FetchListedNfts } from "../Reducers/getAlldata";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import NftCard from "../MiniComponents/NftCard";

const contract_address = "0x6B7A18e252510bDFD484C5Eae953d2DE05d71B8B";
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contract = new web3.eth.Contract(swapabi, contract_address);
const Nfts_contract = "0xF3Ac72766E2aF83B7cDA4A613beDF2bF83DEe9fA";

const Createswap = (tokenId: any) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const [nfts, setMyNfts] = useState([]);
  const createSwap = async () => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const swap = await contract.methods
      .CreateSwap("0x3a80c594300d3b048e49db9deb1088655df243f2", [
        { contractAddr: Nfts_contract, id: tokenId, amount: 1 },
      ])
      .send({ from: account });
    console.log(swap);
  };

  useEffect(() => {
    const fetchAllNfts = async () => {
      const newData = dispatch(FetchListedNfts());

      setMyNfts((await newData).payload);
    };

    fetchAllNfts();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        Creating the swap
        <div className="flex flex-column gap-10 p ">
          {nfts.map((item, key) => {
            return (
              <>
                <div className="flex-column flex-wrap space-y-2 ">
                  <NftCard
                    Name={item.name}
                    Price={item.money}
                    description={item.description}
                    imageUrl={item.image}
                  />
                  <button onClick={() => createSwap(item.tokenId)}>
                    Create Swap
                  </button>

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

export default Createswap;
