import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Web3 from "web3";
import { NftAbi } from "../../NftAbi";
import { ipfsToHTTPS } from "../Helper";

// const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
// const web3 = new Web3(
//   Web3.givenProvider ||
//     "https://rpc-mumbai.maticvigil.com" ||
//     "http://localhost:7545"
// );
const metamaskWeb3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://rpc-mumbai.maticvigil.com")
);

const contractAddress = "0x20445D2A57e8251ec17e9A6e111a021167fD1981";

const swapAddress = "0x686a6e847cD2412604F6117CA87DD2DCd5A02cAB";
const contract = new web3.eth.Contract(NftAbi, contractAddress);

const FetchAllNfts = createAsyncThunk("nfts/getAllNfts", async () => {
  const Data = await contract.methods.fectchMarketNft().call();

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
  const accounts = await metamaskWeb3.eth.getAccounts();
  const account = accounts[0];

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
  return newData;
});
const FetchBuyedNfts = createAsyncThunk("nfts/getBuyedNfts", async () => {
  const accounts = await metamaskWeb3.eth.getAccounts();
  const account = accounts[0];

  const myNfts = await contract.methods.fetchMyNft().call({ from: account });
  let newData = [];
  for (let i = 0; i < myNfts.length; i++) {
    const tokenUri = await contract.methods.tokenURI(myNfts[i].tokenId).call();
    const metadataResponse = await fetch(ipfsToHTTPS(tokenUri));
    if (metadataResponse.status != 200) return;
    const json = await metadataResponse.json();

    newData.push({ ...json, tokenId: myNfts[i].tokenId });
  }
  return newData;
});

const CreateNfts = createAsyncThunk("nfts/createNfts", async (data: any) => {
  const accounts = await metamaskWeb3.eth.getAccounts();
  const account = accounts[0];

  console.log(data.mapuri);
  console.log(data.price);

  const createNft = await contract.methods
    .createNft(data.mapuri, data.price)
    .send({ from: account, value: 25000000000000000 });
  console.log(createNft);
});
const BuyNftss = createAsyncThunk("nfts/buyNfts", async (data: any) => {
  console.log(data.key);
  const accounts = await metamaskWeb3.eth.getAccounts();
  const account = accounts[0];
  const BuyNfts = await contract.methods
    .createMarketSell(data.key)
    .send({ from: account, value: 20 });
  console.log(BuyNfts);
});
const ResellNfts = createAsyncThunk("nfts/resellNfts", async (data: any) => {
  const accounta = await metamaskWeb3.eth.getAccounts();
  const account = accounta[0];
  const reSell = await contract.methods
    .reSellToken(data.tokenId, 40)
    .send({ from: account, value: 25000000000000000 });
  console.log(reSell);
});
export const CreateSwap = createAsyncThunk(
  "nfts/createSwap",
  async (data: any) => {
    const accounts = await metamaskWeb3.eth.getAccounts();
    const account = accounts[0];
    const createSwap = await contract.methods
      .CreateSwap(data.toAddress, contractAddress, data.tokenId)
      .send({ from: account });
    console.log(createSwap);
  }
);

const AcceptSwap = createAsyncThunk("nfts/acceptSwap", async (data: any) => {
  const accounts = await metamaskWeb3.eth.getAccounts();
  const account = accounts[0];
  const acceptSwap = await contract.methods
    .AcceptSwap(data.swapId)
    .send({ from: account });
  console.log(acceptSwap);
});

export const nftsSlice = createSlice({
  name: "nfts",
  initialState: {
    allNfts: [],
    listedNfts: [],
    buyedNfts: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchAllNfts.pending, (state: any) => {
        state.status = "loading";
      })
      .addCase(FetchAllNfts.fulfilled, (state: any, action: any) => {
        state.status = "success";
        state.allNfts = action.payload;
      })
      .addCase(FetchListedNfts.pending, (state: any) => {
        state.status = "loading";
      })
      .addCase(FetchListedNfts.fulfilled, (state: any, action: any) => {
        state.status = "success";
        state.listedNfts = action.payload;
      })
      .addCase(FetchBuyedNfts.pending, (state: any) => {
        state.status = "loading";
      })
      .addCase(FetchBuyedNfts.fulfilled, (state: any, action: any) => {
        state.status = "success";
        state.buyedNfts = action.payload;
      })
      .addCase(CreateNfts.pending, (state: any) => {
        state.status = "loading";
      })
      .addCase(CreateNfts.fulfilled, (state: any, action: any) => {
        state.status = "success";
      })
      .addCase(BuyNftss.pending, (state: any, action: any) => {
        state.status = "loading";
      })
      .addCase(BuyNftss.fulfilled, (state: any, action: any) => {
        state.status = "success";
      })
      .addCase(ResellNfts.pending, (state: any, action: any) => {
        state.status = "loading";
      })
      .addCase(ResellNfts.fulfilled, (state: any, action: any) => {
        state.status = "success";
      });
  },
});

export const {} = nftsSlice.actions;
export {
  FetchAllNfts,
  FetchListedNfts,
  FetchBuyedNfts,
  CreateNfts,
  BuyNftss,
  ResellNfts,
};
export default nftsSlice.reducer;
