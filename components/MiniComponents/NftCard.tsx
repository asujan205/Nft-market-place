import React, { useEffect, useState } from "react";
import { ipfsToHTTPS } from "../Helper";

type NftsProps = {
  Name: string;
  Price: number;
  description: string;
  imageUrl: string;
};

const NftCard = (data: NftsProps) => {
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    const url = ipfsToHTTPS(data.imageUrl);
    setImageUrl(url);
  }, [data.imageUrl]);
};
