import React, { useState } from "react";
import ConnectWallet from "./ConnectWallet";

const ConnectBtn = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const handleConnect = (address) => {
    setWalletAddress(address);
  };

  return (
    <div>
      <ConnectWallet onConnect={handleConnect} /> your wallet address is
      {walletAddress && <p>Wallet address: {walletAddress}</p>}
    </div>
  );
};
export default ConnectBtn;
