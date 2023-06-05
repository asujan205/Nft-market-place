import React, { SyntheticEvent, useRef, useState } from "react";
import { NftAbi } from "../../NftAbi";
import { CreateNfts } from "../Reducers/getAlldata";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
// import Web3 from "web3";
// const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
// const contractAddress = "0xBC98199BB6820dF2a57E9A417542142b6c1A46D6";
// const contract = new web3.eth.Contract(NftAbi, contractAddress);
import styles from "./uploadlabel.module.css";

const CreationForm = () => {
  const formRef = useRef<any>(null);
  const [price, setPrice] = useState<string>();
  const [preiview, setPrieveiw] = useState<boolean>(true);
  const [url, setFile] = useState<string>();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  // const data = new FormData();
  const handleFileInput = (
    e: SyntheticEvent & {
      target: {
        files: any;
      };
    }
  ) => {
    const files: any = e.target.files[0];
    const objectUrl = URL.createObjectURL(files);
    setFile(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const res = await fetch("/api/nftstorage", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      const data = await res.json();
      const mapuri = data.uri;

      dispatch(CreateNfts({ mapuri, price }));
    }
  };

  return (
    <>
      <form ref={formRef}>
        {!preiview ? (
          <>
            <label htmlFor={"actual-btn"} className={styles.uploadlabel}>
              Choose File
            </label>
          </>
        ) : (
          <>
            <label htmlFor={"actual-btn"} className={styles.uploadlabel}>
              <img className={styles.previewImage} src={url} />
            </label>
          </>
        )}
        <input
          type="file"
          name="image"
          id="actual-btn"
          hidden={true}
          style={{ display: "none" }}
          onChange={(e: any) => {
            handleFileInput(e);
          }}
        />
        <br />
        <input
          type={"text"}
          name={"name"}
          placeholder={"Name"}
          className={styles.namefield}
        />
        <br />
        <input
          type={"text"}
          name={"description"}
          placeholder={"Description"}
          className={styles.descriptionField}
        />
        <br />
        <input
          type={"number"}
          name={"price"}
          placeholder={"Price"}
          className={styles.priceFeild}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <button
          type={"submit"}
          onClick={handleSubmit}
          className={styles.Sumbitbtn}
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default CreationForm;
