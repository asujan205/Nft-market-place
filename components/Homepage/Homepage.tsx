import React, { useEffect, useState } from "react";
import useConnected from "./useConnected";
import { NftAbi } from "../../NftAbi";
import Web3 from "web3";
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contractAddress = "0xBC98199BB6820dF2a57E9A417542142b6c1A46D6";
const contract = new web3.eth.Contract(NftAbi, contractAddress);

const Homepage:any =()=>{
    const checkArray = useConnected()
    const [nfts,setAllNfts]=useState([])
    const fetchAllNfts=async()=>{
        const Data = await contract.methods.fectchMarketNft().call();
        console.log(Data[0].tokenId)
        const tokenUri = await contract.methods.tokenURI(Data[0].tokenId).call();
        try{
        const res= await fetch(tokenUri)
        const responds= await res.json()
        console.log(responds)
        }
        catch(err){
            console.log(err)
        }
         


    }
   
    
    useEffect(()=>{
        fetchAllNfts()

    })
    return (<>
  
    </>)

}
export default Homepage