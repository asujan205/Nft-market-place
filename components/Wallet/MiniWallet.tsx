import Web3 from "web3";
import { useState, useEffect } from "react";
// conncting through the GetBlock RPC

const node =
  "https://eth.getblock.io/ee6b4288-a75e-4f5f-976f-b8c8c64cb3b7/goerli/";

const web3 = new Web3(node);

const account = web3.eth.accounts.create();

const address = account.address;

const web = new Web3(Web3.givenProvider || "http://localhost:7545");

const MiniWallet = () => {
  const [address, setAddress] = useState<string>("");
  const [privateKey, setPrivateKey] = useState("");
  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web.eth.getAccounts();
      let privateKey = await web.eth.accounts.privateKeyToAccount(accounts[0]);
      setPrivateKey(privateKey);

      setAddress(accounts[0]);
    };
    getAccount();
  }, []);

  const CreateTransaction = async (rawTx: any) => {
    rawTx.gasPrice = await web3.eth.getGasPrice();
    rawTx.gasLimit = await web3.eth.estimateGas(rawTx);

    return await web.eth.accounts.signTransaction(rawTx, privateKey);
  };

  const sendTransaction = async (signedTx: any) => {
    return await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  };

  const sendEth = async () => {
    const rawTx = {
      from: account.address,

      value: web3.utils.toWei("0.1", "ether"),
      gas: 21000,
      gasPrice: 20000000000,
    };

    const signedTx = await CreateTransaction(rawTx);
    const receipt = await sendTransaction(signedTx);
    console.log(receipt);
  };
};

export default MiniWallet;
