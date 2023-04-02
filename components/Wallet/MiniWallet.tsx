import Web3 from "web3";
import { useState, useEffect } from "react";
// conncting through the GetBlock RPC

const node =
  "https://eth.getblock.io/ee6b4288-a75e-4f5f-976f-b8c8c64cb3b7/goerli/";

const web3 = new Web3(node);

const account = web3.eth.accounts.create();

const address = account.address;

const privateKey = account.privateKey;

const web = new Web3(Web3.givenProvider || "http://localhost:7545");

const MiniWallet = () => {
  const [address, setAddress] = useState<string>("");
  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web.eth.getAccounts();
      setAddress(accounts[0]);
    };
    getAccount();
  }, []);

  const signTransaction = async (rawTx: any) => {
    rawTx.gasPrice = await web.eth.getGasPrice();
    rawTx.gasLimit = await web.eth.estimateGas(rawTx);
  };
};

export default MiniWallet;
