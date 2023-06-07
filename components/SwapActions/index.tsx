import Web3 from "web3";
import { useState, useEffect } from "react";
// import { swapabi } from "../../swapabi";
import { FetchListedNfts } from "../Reducers/getAlldata";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import NftCard from "../MiniComponents/NftCard";
import { CreateSwap } from "../Reducers/getAlldata";

const contractAddress = "0x20445D2A57e8251ec17e9A6e111a021167fD1981";
const toAddress = "0x7E627dD6A54927be7E598E7984fb35D21Ce1C685";
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
// const contract = new web3.eth.Contract(swapabi, contract_address);
// const Nfts_contract = "0xBC98199BB6820dF2a57E9A417542142b6c1A46D6";

const Createswap = (tokenId: any) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const [nfts, setMyNfts] = useState<any[]>([]); // nfts is the state variable and setMyNfts is the function to update the state variablevffk
  const createSwap = async (tokenId: any) => {
    dispatch(CreateSwap({ toAddress, tokenId }));

    // const accounts = await web3.eth.getAccounts();
    // const account = accounts[0];
    // const swap = await contract.methods
    //   .CreateSwap("0x3a80c594300d3b048e49db9deb1088655df243f2", [
    //     ["0xBC98199BB6820dF2a57E9A417542142b6c1A46D6", 1, 0],
    //   ])
    //   .send({ from: account, value: 1000000000000000000 });
  };

  useEffect(() => {
    const fetchAllNfts = async () => {
      const newData = dispatch(FetchListedNfts());

      setMyNfts((await newData).payload as any[]);
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
