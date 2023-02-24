import React, { useState, useEffect } from "react";
import Web3 from "web3";

const ConnectWallet = ({ onConnect }: any) => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function connect() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          setWeb3(web3);
        } catch (error) {
          console.error(error);
        }
      } else if (window.web3) {
        const web3 = new Web3(window.web3.currentProvider);
        setWeb3(web3);
      } else {
        console.error("No web3 provider detected");
      }
    }
    connect();
  }, []);

  useEffect(() => {
    async function getAccounts() {
      if (web3) {
        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts);
      }
    }
    getAccounts();
  }, [web3]);

  const handleConnect = () => {
    onConnect(accounts[0]);
  };

  return (
    <div>
      {!web3 ? (
        <p>No Web3 provider found</p>
      ) : accounts.length === 0 ? (
        <button onClick={handleConnect}>Connect to Wallet</button>
      ) : (
        <p className="text-gray-50">Connected: {accounts[0]}</p>
      )}
    </div>
  );
};

export default ConnectWallet;
