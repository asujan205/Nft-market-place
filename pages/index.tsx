import Web3 from "web3";
import CreationForm from "../components/CreationNft/creation";
import Homepage from "../components/Homepage/Homepage";
import FetchUserNft from "../components/FetchMynfts";
import FetchListed from "../components/FetchMynfts/fetchListed";

export default function Home() {
  return (
    <>
      <FetchListed />
    </>
  );
}
