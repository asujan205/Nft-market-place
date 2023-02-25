import Web3 from "web3";
import { swapabi } from "../../swapabi";

const contract_address = "0x77523f004ff2eE3363853cdE2272c0f6c41A9218";
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contract = new web3.eth.Contract(swapabi, contract_address);

const Createswap = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        Creating the swap
      </div>
    </>
  );
};

export default Createswap;
