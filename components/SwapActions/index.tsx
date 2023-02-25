import Web3 from "web3";
import { useState, useEffect } from "react";
import { swapabi } from "../../swapabi";
import { FetchListedNfts } from "../Reducers/getAlldata";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import NftCard from "../MiniComponents/NftCard";

const contract_address = "0x77523f004ff2eE3363853cdE2272c0f6c41A9218";
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contract = new web3.eth.Contract(swapabi, contract_address);
const Nfts_contract = "0xBC98199BB6820dF2a57E9A417542142b6c1A46D6";

const Createswap = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const [nfts, setMyNfts] = useState([]);
  const createSwap = async () => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const swap = await contract.methods.createSwap().send({ from: account });
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
                  <button onClick={createSwap}>Create Swap</button>

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
