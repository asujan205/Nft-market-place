import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Web3 from "web3";
import { NftAbi } from "../../NftAbi";
import { ipfsToHTTPS } from "../Helper";

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contractAddress = "0xBC98199BB6820dF2a57E9A417542142b6c1A46D6";
const contract = new web3.eth.Contract(NftAbi, contractAddress);

const FetchAllNfts = createAsyncThunk("nfts/getAllNfts", async () => {
  const Data = await contract.methods.fectchMarketNft().call();

  console.log(Data);
  let newData = [];

  for (let i = 0; i < Data.length; i++) {
    const tokenUri = await contract.methods.tokenURI(Data[i].tokenId).call();
    const metadataResponse = await fetch(ipfsToHTTPS(tokenUri));
    if (metadataResponse.status != 200) return;
    const json = await metadataResponse.json();

    newData.push({
      ...json,
      tokenId: Data[i].tokenId,
      money: Data[i].price,
    });
  }
  return newData;
});
