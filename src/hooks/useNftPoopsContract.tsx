import { useEthers } from "../components/EthersProvider/EthersProvider";
import { NftPoops__factory } from "../types/factories/contracts/NftPoops__factory";

const ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const useNftPoopsContract = () => {
  const { provider } = useEthers();
  if (!provider) {
    return;
  }

  const signer = provider.getSigner();
  const contract = NftPoops__factory.connect(ADDRESS, signer);

  return contract;
};
