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

const FetchListedNfts = createAsyncThunk("nfts/getListedNfts", async () => {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  console.log(account);
  const myNfts = await contract.methods
    .fetchItemsListed()
    .call({ from: account });
  let newData = [];
  for (let i = 0; i < myNfts.length; i++) {
    const tokenUri = await contract.methods.tokenURI(myNfts[i].tokenId).call();
    const metadataResponse = await fetch(ipfsToHTTPS(tokenUri));
    if (metadataResponse.status != 200) return;
    const json = await metadataResponse.json();

    newData.push({ ...json, tokenId: myNfts[i].tokenId });
  }
});
const FetchBuyedNfts = createAsyncThunk("nfts/getBuyedNfts", async () => {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  console.log(account);
  const myNfts = await contract.methods.fetchMyNft().call({ from: account });
  let newData = [];
  for (let i = 0; i < myNfts.length; i++) {
    const tokenUri = await contract.methods.tokenURI(myNfts[i].tokenId).call();
    const metadataResponse = await fetch(ipfsToHTTPS(tokenUri));
    if (metadataResponse.status != 200) return;
    const json = await metadataResponse.json();

    newData.push({ ...json, tokenId: myNfts[i].tokenId });
  }
});

const CreateNfts = createAsyncThunk("nfts/createNfts", async (data: any) => {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  console.log(account);
  const price = web3.utils.toWei(data.price, "ether");
  const createNft = await contract.methods
    .createNft(data.name, data.description, data.image, price)
    .send({ from: account, value: 25000000000000000 });
  console.log(createNft);
});
