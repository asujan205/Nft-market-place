
import React, { useRef, useState } from "react";
import { NftAbi } from "../../NftAbi";
import Web3 from "web3";
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contractAddress = "0x88E595EE9585761980EF14Ff743c942b9d40d4E1";
const contract = new web3.eth.Contract(NftAbi, contractAddress);
import styles from '../../Cssfolder/UploadLabLe.module.css'

//import * as Yup from 'yup'
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import ImagePicker from './ImagePicker';
// import FormikInput from '../../../components/Input';
// import TextArea from './TextArea';
// import SumbitButton from './SumbitButton';

// export const creationValidayionSchema = Yup.object().shape({
//     name: Yup.string().required('Name is required'),
//     description: Yup.string().required('Description is required'),
//     price: Yup.number().required('Price is required'),
//     image: Yup.mixed().test("is_defined", "Must select an image", (value) =>
//     Boolean(value)
//   ),
// })

const CreationForm = () => {
  const formRef = useRef<any>(null);
  const [price, setPrice] = useState<string>();

  // const data = new FormData();

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const res = await fetch("/api/nftstorage", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      const data = await res.json();

      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      const gas = await contract.methods
        .createNft(data.uri, price)
        .estimateGas();
      const AddNft = await contract.methods
        .createNft(data.uri, price)
        .send({ from: account, gas });
      console.log(AddNft);
    }
  };

  return (
    <>
      <form ref={formRef}>
        <label
          htmlFor={"actual-btn"}
           className={styles.uploadlabel}
        >
          Choose File
        </label>

        <input type="file" name="image" id="actual-btn" hidden={true} style={{display:"none"}}/>
        <br />
        <input type={"text"} name={"name"} placeholder={"Name"}   className= {styles.namefield }/>
        <br />
        <input type={"text"} name={"description"} placeholder={"Description"} className={styles.descriptionField} />
        <br />
        <input
          type={"number"}
          name={"price"}
          placeholder={"Price"}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <button type={"submit"} onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {/* <div className="data">
        {data.map((item) => {
          return (
            <div>
              <p>IPNFT: {item.ipnft}</p>
              <p>URL: {item.url}</p>
              <p>URL: {item.url}</p>
            </div>
          );
        })}
      </div> */}
    </>
  );
};
export default CreationForm;
