// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

const PROXY = "0x12978aF14fA263DC42A25e4cB529Afe538843300";

async function main() {
    const BoxV2 = await ethers.getContractFactory("Version2");
    console.log("Upgrading Box...");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box upgraded");
}

main();