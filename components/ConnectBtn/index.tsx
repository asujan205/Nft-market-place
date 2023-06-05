import React, { useState } from "react";
import Web3Modal from "web3modal";
import Web3 from "web3";

const ConnectBtn = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    try {
      const providerOptions = {}; // Add specific provider options if needed

      const web3Modal = new Web3Modal({
        network: "mainnet", // Specify the desired network
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);

      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      setIsConnected(true);

      provider.on("accountsChanged", (newAccounts: string[]) => {
        setAccount(newAccounts[0]);
      });

      provider.on("chainChanged", () => {
        window.location.reload();
      });

      provider.on("disconnect", () => {
        web3Modal.clearCachedProvider();
        setAccount(null);
        setIsConnected(false);
      });
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  return (
    <div>
      {isConnected ? (
        <p>Wallet Connected: {account}</p>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={connectWallet}
        >
          Connect to Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectBtn;
