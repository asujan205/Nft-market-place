import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { NftAbi } from "../../NftAbi";
import { ipfsToHTTPS } from "../Helper";
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contractAddress = "0xBC98199BB6820dF2a57E9A417542142b6c1A46D6";
const contract = new web3.eth.Contract(NftAbi, contractAddress);
const FetchBuyed = () => {
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
};