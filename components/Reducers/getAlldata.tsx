const newData: any = [];
import Web3 from "web3";
import { NftAbi } from "../../NftAbi";
import { ipfsToHTTPS } from "../Helper";

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contractAddress = "0xBC98199BB6820dF2a57E9A417542142b6c1A46D6";
const contract = new web3.eth.Contract(NftAbi, contractAddress);

export const getTheData = async (state = newData, action: any) => {
  switch (action.type) {
    case "fetchAllNfts": {
      const Data = await contract.methods.fectchMarketNft().call();

      for (let i = 0; i < Data.length; i++) {
        const tokenUri = await contract.methods
          .tokenURI(Data[i].tokenId)
          .call();
        const metadataResponse = await fetch(ipfsToHTTPS(tokenUri));
        if (metadataResponse.status != 200) return;
        const json = await metadataResponse.json();

        state.push({
          ...json,
          tokenId: Data[i].tokenId,
          money: Data[i].price,
        });
      }
      return state;
    }

    case "fetchMynfts": {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      console.log(account);
      const myNfts = await contract.methods
        .fetchMyNft()
        .call({ from: account });

      for (let i = 0; i < myNfts.length; i++) {
        const tokenUri = await contract.methods
          .tokenURI(myNfts[i].tokenId)
          .call();
        const metadataResponse = await fetch(ipfsToHTTPS(tokenUri));
        if (metadataResponse.status != 200) return;
        const json = await metadataResponse.json();

        state.push({ ...json, tokenId: myNfts[i].tokenId });
      }
      return state;
    }

    case "getBuynfts": {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      console.log(account);
      const myNfts = await contract.methods
        .fetchMyNft()
        .call({ from: account });

      for (let i = 0; i < myNfts.length; i++) {
        const tokenUri = await contract.methods
          .tokenURI(myNfts[i].tokenId)
          .call();
        const metadataResponse = await fetch(ipfsToHTTPS(tokenUri));
        if (metadataResponse.status != 200) return;
        const json = await metadataResponse.json();

        state.push({ ...json, tokenId: myNfts[i].tokenId });
      }

      return state;
    }
    default:
      return state;
  }
};

export default getTheData;
