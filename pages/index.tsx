import { useState } from "react";
import Web3 from "web3";
import CreationForm from "../components/CreationNft/creation";

import OwnedNfts from "../components/FetchMynfts/Index";
import Homepage from "../components/Homepage/Homepage";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  const [Flag, setFlag] = useState<boolean>(false);
  const [value, setValue] = useState<any>();
  const [HomeActive, setHomeActive] = useState<boolean>(true);
  const [CreateActive, setCreateActive] = useState<boolean>(false);
  const [MyNftsActive, setMyNftsActive] = useState<boolean>(false);
  return (
    <>
      <NavBar
        setHomeActive={setHomeActive}
        setCreateActive={setCreateActive}
        setMyNftsActive={setMyNftsActive}
      />
      {HomeActive && <Homepage />}
      {CreateActive && <CreationForm />}
      {MyNftsActive && <OwnedNfts />}
    </>
  );
}
