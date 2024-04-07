import React, { useState } from "react";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import "./styles.css"; // Import the CSS file

const MetaMaskWallet = () => {
  const [walletStatus, setWalletStatus] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    try {
      const provider = await detectEthereumProvider();

      if (provider) {
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();

        if (accounts.length === 0) {
          setWalletStatus("Please connect your MetaMask wallet.");
        } else {
          setWalletStatus("Connected to MetaMask wallet.");
          setWalletAddress(accounts[0]);
        }
      } else {
        setWalletStatus(
          "MetaMask is not installed. Please install it to use this feature."
        );
      }
    } catch (error) {
      setWalletStatus("Error connecting to MetaMask wallet. Please try again.");
    }
  };

  return (
    <div className="wallet-box">
      <div className="wallet-header">
        <h2>MetaMask Wallet</h2>
      </div>
      <div className="wallet-content">
        <button onClick={connectWallet} className="wallet-button">
          Connect Wallet
        </button>
        <p className="wallet-status">{walletStatus}</p>
        {walletAddress && (
          <p className="wallet-address">Wallet Address: {walletAddress}</p>
        )}
      </div>
    </div>
  );
};

export default MetaMaskWallet;
