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
      <div className=" flex w-72 flex-shrink-0 flex-col overflow-hidden rounded-xl border font-semibold shadow-sm hover:bg-sky-500 hover:ring-sky-500 ">
        <div className="flex-col justify-between">
          <div className={styles.ImageSections}>
            <img
              src={imageUrl}
              className="h-80 w-full object-cover object-center"
            ></img>
          </div>
          <div className="flex-col justify-center pl-3 ">
            <div className={styles.titleSections}>{data.Name}</div>
            <div className={styles.descriptions}>{data.description}</div>
            <div className={styles.price}>{data.Price}Eth</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NftCard;
