// scripts/deploy_upgradeable_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const Box = await ethers.getContractFactory("Version1");
    console.log("Deploying Box...");
    const box = await upgrades.deployProxy(Box, [42], {
        initializer: "initialize",
    });
    await box.deployed();
    console.log("Box deployed to:", box.address);
}

main();