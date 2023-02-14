import React, { useState } from "react";
import ConnectWallet from "./ConnectWallet";

const ConnectBtn = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const handleConnect = (address) => {
    setWalletAddress(address);
  };

  return (
    <div>
      <ConnectWallet onConnect={handleConnect} />
      {walletAddress && <p>Wallet address: {walletAddress}</p>}
    </div>
  );
};
export default ConnectBtn;
