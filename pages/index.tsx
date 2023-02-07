import { useState } from "react";
import Web3 from "web3";
import CreationForm from "../components/CreationNft/creation";
import Donate from "../components/DonateFund/Index";
import OwnedNfts from "../components/FetchMynfts/Index";
import Homepage from "../components/Homepage/Homepage";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  const [Flag, setFlag] = useState<boolean>(false);
  const [value, setValue] = useState<any>();
  return (
    <>
      <NavBar />
      <Homepage />
    </>
  );
}
