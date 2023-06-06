import React, { useState, useEffect, useLayoutEffect } from "react";
import Web3Modal from "web3modal";
import Web3 from "web3";
const POLYGON_TESTNET_NETWORK_ID = 80001;

const ConnectBtn = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const connectWallet = async () => {
    try {
      const providerOptions = {}; // Add specific provider options if needed

      const web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);

      const networkId = await web3.eth.net.getId();
      if (networkId !== POLYGON_TESTNET_NETWORK_ID) {
        const chainId = `0x${POLYGON_TESTNET_NETWORK_ID.toString(16)}`;
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId }],
          });
        } catch (switchError: any) {
          if (switchError.code === 4902) {
            // User rejected network switch
            return;
          }
          console.error("Failed to switch network:", switchError);
          return;
        }
      }

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
        setIsDropdownOpen(false);
        localStorage.removeItem("connectedAccount");
      });

      localStorage.setItem("connectedAccount", accounts[0]);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const disconnectWallet = () => {
    const web3Modal = new Web3Modal();
    web3Modal.clearCachedProvider();
    setAccount(null);
    setIsConnected(false);
    localStorage.removeItem("connectedAccount");
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useLayoutEffect(() => {
    const connectedAccount = localStorage.getItem("connectedAccount");
    if (connectedAccount) {
      setAccount(connectedAccount);
      setIsConnected(true);
    }
  }, []);

  return (
    <div>
      {isConnected ? (
        <>
          <div className="flex flex-row items-center justify-center">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={`https://avatars.dicebear.com/api/identicon/${account}.svg`}
              alt="User Avatar"
              onClick={toggleDropdown}
            />
            <p className=" text-white font-bold py-2 px-4">{account}</p>
          </div>
          {isDropdownOpen && (
            <div className="absolute top-0 right-0 mt-8 mr-2 bg-white rounded shadow">
              <button
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                onClick={disconnectWallet}
              >
                Disconnect Wallet
              </button>
            </div>
          )}
        </>
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
