import React, { useEffect, useState } from "react";
import { ipfsToHTTPS } from "../Helper";
import styles from "./NftsCard.module.css";

type NftsProps = {
  // Name: string;
  // Price: number;
  // description: string;
  imageUrl: string;
};

const NftCard = (data: NftsProps) => {
  const [imageUrl, setImageUrl] = useState<string>();
  useEffect(() => {
    const url = ipfsToHTTPS(data.imageUrl);
    setImageUrl(url);
  }, [data.imageUrl]);

  return (
    <>
      <div className={styles.ImageSections}>
        <img src={imageUrl} className="h-[250px] w-full"></img>
      </div>
    </>
  );
};
export default NftCard;
