
import React, { SyntheticEvent, useRef, useState } from "react";
import { NftAbi } from "../../NftAbi";
import Web3 from "web3";
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contractAddress = "0xa4C21722CcA790dC39A6aC43DaB62c5Ba42c81d3";
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
  const [preiview,setPrieveiw]= useState<boolean>(true)
  const[url,setFile]=useState<string>()

  // const data = new FormData();
 const handleFileInput=(e: SyntheticEvent & {
target:{
  files:any
}
 })=>{
  const files:any = e.target.files[0]
  const objectUrl = URL.createObjectURL(files)
        setFile(objectUrl)
        return()=> URL.revokeObjectURL(objectUrl)
  

 }
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const res = await fetch("/api/nftstorage", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      const data = await res.json();
       const mapuri = data.uri
      //  console.log(price)
       const listing = 0.025*Math.pow(10,18)
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      const listingPrice = await contract.methods.getListinPrice().call()
      if (listing === listingPrice){
        console.log("correct")
      }
      else{
        console.log("wrong")
      }
      console.log(listingPrice)
      // // console.log(listing)
      const gas = await contract.methods.createNft(mapuri, price).estimateGas()
      const AddNft = await contract.methods
        .createNft(mapuri, price)
        .send({ value:listing,from: account, gas });
        let options = {
          fromBlock: 0,
          address: [],    //Only get events from specific addresses
          topics: []                              //What topics to subscribe to
      };
      
      let subscription = web3.eth.subscribe('logs', options,(err,event) => {
          if (!err)
          console.log(event)
      });
      subscription.on('data', event => console.log(event))
subscription.on('changed', changed => console.log(changed))
subscription.on('error', err => { throw err })
subscription.on('connected', nr => console.log(nr))
      
      console.log(AddNft);
    }
  };

  return (
    
    <>  
    <form ref={formRef}>
      {!preiview ?<>
    
    <label
      htmlFor={"actual-btn"}
       className={styles.uploadlabel}
    >
      Choose File
    </label>
    </>:<>
    <label
      htmlFor={"actual-btn"}
       className={styles.uploadlabel}
    >
      <img className={styles.previewImage} src ={ url}/>

    </label>

    </>
      
    }
        <input type="file" name="image" id="actual-btn" hidden={true} style={{display:"none"}} onChange={(e:any)=>{
          handleFileInput(e)
        }}/>
        <br />
        <input type={"text"} name={"name"} placeholder={"Name"}   className= {styles.namefield }/>
        <br />
        <input type={"text"} name={"description"} placeholder={"Description"} className={styles.descriptionField} />
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
        <button type={"submit"} onClick={handleSubmit} className={styles.Sumbitbtn}>
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
