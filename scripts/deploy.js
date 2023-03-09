import hre from "hardhat";

const NftPoops = await hre.ethers.getContractFactory("NftPoops");
const nftPoops = await NftPoops.deploy();

await nftPoops.deployed();

console.log(`NFT Poops are deployed to ${nftPoops.address}`);
