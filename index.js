const { ethers } = require("ethers");

// Optimism Mainnet RPC
const provider = new ethers.JsonRpcProvider(
  "https://mainnet.optimism.io"
);

// Check wallet address
const walletAddress = "0x0000000000000000000000000000000000000000";

async function checkBalance() {
  const balance = await provider.getBalance(walletAddress);
  console.log(
    `Balance on Optimism: ${ethers.formatEther(balance)} ETH`
  );
}

checkBalance();
