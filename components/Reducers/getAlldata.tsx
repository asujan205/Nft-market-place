import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Web3 from "web3";
import { NftAbi } from "../../NftAbi";
import { ipfsToHTTPS } from "../Helper";
import { swapAbi } from "../../swapabi";
import { Dispatch } from "@reduxjs/toolkit";

// const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
// const web3 = new Web3(
//   Web3.givenProvider ||
//     "https://rpc-mumbai.maticvigil.com" ||
//     "http://localhost:7545"
// );
// const metamaskWeb3 = new Web3(Web3.givenProvider || "http://localhost:7545");
// const web3 = new Web3(
//   new Web3.providers.HttpProvider("https://rpc-mumbai.maticvigil.com")
// );
let web3: any;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // Metamask is available
  web3 = new Web3(window.ethereum);
} else {
  // Fallback to a remote node
  web3 = new Web3(
    new Web3.providers.HttpProvider("https://rpc-mumbai.maticvigil.com")
  );
}

// Use web3Instance for interacting with the blockchain

const contractAddress = "0x7e4D19BF0c661E030b95fC8412133FfE3b401Cd8";

const swapAddress = "0x6E50B0A844f2b8F7c6Fd8c54c4afaCd2D25ff5f0";

const swapContract = new web3.eth.Contract(swapAbi, swapAddress);
const contract = new web3.eth.Contract(NftAbi, contractAddress);

const FetchAllNfts = createAsyncThunk("nfts/getAllNfts", async () => {
  const Data = await contract.methods.fectchMarketNft().call();

  let newData: any = [];

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
  const accounts = await web3.eth.getAccounts();
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
  try {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log(account);
    console.log(data.mapuri);
    console.log(data.price);

    // Instantiate the contract with the correct address
    const nftContract = new web3.eth.Contract(NftAbi, contractAddress);

    // Call the createNft function of your contract
    const createNft = await nftContract.methods
      .createNft(data.mapuri, data.price)
      .send({ from: account, value: 25000000000000000 });

    console.log(createNft);

    // Return the result or any other data you need
    return createNft;
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error creating NFT:", error);
    throw error;
  }
});

const BuyNftss = createAsyncThunk("nfts/buyNfts", async (data: any) => {
  console.log(data.key);
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  const BuyNfts = await contract.methods
    .createMarketSell(data.key)
    .send({ from: account, value: 20 });
  console.log(BuyNfts);
});
const ResellNfts = createAsyncThunk("nfts/resellNfts", async (data: any) => {
  const accounta = await web3.eth.getAccounts();
  const account = accounta[0];
  const reSell = await contract.methods
    .reSellToken(data.tokenId, 40)
    .send({ from: account, value: 25000000000000000 });
  console.log(reSell);
});
export const CreateSwap = createAsyncThunk(
  "nfts/createSwap",
  async (data: any) => {
    console.log(data);
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const estimateGas = await swapContract.methods
      .createSwap(
        data.toAddress,
        contractAddress,
        data.tokenId1,

        contractAddress,
        data.tokenId2
      )
      .estimateGas();

    const createSwap = await swapContract.methods
      .createSwap(
        data.toAddress,
        contractAddress,
        data.tokenId1,

        contractAddress,
        data.tokenId2
      )
      .send({ from: account, value: 1500000, gas: estimateGas });
    console.log(createSwap);
  }
);

export const AcceptSwap = createAsyncThunk(
  "nfts/acceptSwap",
  async (data: any) => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const acceptSwap = await swapContract.methods
      .AcceptSwap(data.swapId)
      .send({ from: account });
    console.log(acceptSwap);
  }
);

// const RejectSwap = createAsyncThunk("nfts/rejectSwap", async (data: any) => {
//   const accounts = await metamaskWeb3.eth.getAccounts();
//   const account = accounts[0];
//   const rejectSwap = await swapContract.methods
//     .RejectSwap(data.swapId)
//     .send({ from: account });
//   console.log(rejectSwap);
// });

export const CancelSwap = createAsyncThunk(
  "nfts/cancelSwap",
  async (data: any) => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const cancelSwap = await swapContract.methods
      .CancelSwap(data.swapId)
      .send({ from: account });
    console.log(cancelSwap);
  }
);

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
      })
      .addCase(CreateSwap.pending, (state: any, action: any) => {
        state.status = "loading";
      })
      .addCase(CreateSwap.fulfilled, (state: any, action: any) => {
        state.status = "success";
      })
      .addCase(AcceptSwap.pending, (state: any, action: any) => {
        state.status = "loading";
      })
      .addCase(AcceptSwap.fulfilled, (state: any, action: any) => {
        state.status = "success";
      })
      .addCase(CancelSwap.pending, (state: any, action: any) => {
        state.status = "loading";
      })
      .addCase(CancelSwap.fulfilled, (state: any, action: any) => {
        state.status = "success";
      })
      .addCase(CancelSwap.rejected, (state: any, action: any) => {
        state.status = "error";
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
