
import React, { useEffect, useState } from "react";
import useNftUri from "../getUri";

// const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
// const contractAddress = "0xBC98199BB6820dF2a57E9A417542142b6c1A46D6";

import useConnected from "./useConnected";

type NFTMetadata = {
    name: string;
    description: string;
    imageURL: string;
    price:number;
  };
const Homepage:any =()=>{
  const uri = useNftUri()
  console.log(uri)
    const checkArray = useConnected()
    const [metaData,setMetadata]=useState<NFTMetadata>()
    const fetchAllNfts=async()=>{
       

      //   const metadataResponse = await fetch(ipfsToHTTPS(tokenUri));
      // if (metadataResponse.status != 200) return;
      // const json = await metadataResponse.json();
      // setMetadata({
      //   name: json.name,
      //   description: json.description,
      //   imageURL: json.image,
      //   price:json.price

      // })
        // }


    }
    
   
    
    // useEffect(()=>{
    //     fetchAllNfts()

    // })
    return (<>
  
    </>)

}
export default Homepage