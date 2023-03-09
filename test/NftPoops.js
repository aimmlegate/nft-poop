import { expect } from "chai";

describe("Nft-Poops", function () {
  it("Mint and transfer", async () => {
    const NftPoops = await ethers.getContractFactory("NftPoops");
    const nftPoops = await NftPoops.deploy();

    await nftPoops.deployed();

    const recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

    const metadataURI = "cid/test.png";

    let balance = await nftPoops.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newMintedToken = await nftPoops.payToMint(recipient, metadataURI, {
      value: ethers.utils.parseEther("0.05"),
    });

    await newMintedToken.wait();

    balance = await nftPoops.balanceOf(recipient);
    expect(balance).to.equal(1);

    expect(await nftPoops.isContentOwned(metadataURI).to.equal(true));
  });
});
