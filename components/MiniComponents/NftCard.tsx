import React, { useEffect, useState } from "react";
import { ipfsToHTTPS } from "../Helper";
import styles from "./NftsCard.module.css";

type NftsProps = {
  Name: string;
  Price: number;
  description: string;
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
      <div className={styles.MainDiv}>
        <div className={styles.ImageSections}>
          <img src={imageUrl}></img>
        </div>
        <div className={styles.titleSections}>{data.Name}</div>
        <div className={styles.descriptions}>{data.description}</div>
        <div className={styles.price}>{data.Price}</div>
      </div>
    </>
  );
};
