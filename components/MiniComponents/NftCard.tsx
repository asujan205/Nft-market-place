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
      <div className={styles.ImageSections}>
        <img src={imageUrl} className="h-[369px] w-[223px]"></img>
      </div>
      <div className="flex-col justify-center pl-3 ">
        {/* <div className={styles.titleSections}>{data.Name}</div>
            <div className={styles.descriptions}>{data.description}</div>
            <div className={styles.price}>{data.Price}Eth</div> */}
      </div>
    </>
  );
};
export default NftCard;
