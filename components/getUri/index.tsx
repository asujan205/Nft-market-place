import Web3 from "web3";
import { NftAbi } from "../../NftAbi";
import { ipfsToHTTPS } from "../Helper";

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contractAddress = "0xBC98199BB6820dF2a57E9A417542142b6c1A46D6";
import React, { useEffect, useState } from "react";

const contract = new web3.eth.Contract(NftAbi, contractAddress);
const useNftUri = () => {
  const [nftUri, setNftUri] = useState<any[]>([]);

  //  const check=await fetchData(nftUri)
  //  console.log(check)

  useEffect(() => {
    const fetchAllNfts = async () => {
      const Data = await contract.methods.fectchMarketNft().call();

      for (let i = 0; i < Data.length; i++) {
        const tokenUri = await contract.methods
          .tokenURI(Data[i].tokenId)
          .call();
        const metadataResponse = await fetch(ipfsToHTTPS(tokenUri));
        if (metadataResponse.status != 200) return;
        const json = await metadataResponse.json();

        setNftUri((prev) => [...prev, json]);
      }
    };

    fetchAllNfts();
  }, []);

  // async function fetchData(...args:any[]) {
  //     let data = [];
  //     let k;
  //     for (k = 0; k < args.length; k = k + 1) {
  //       data.push(await (await fetch(args[k])).json());
  //     }
  //     return data;
  //   }

  return nftUri;
};
export default useNftUri;
