import { useEthers } from "../components/EthersProvider/EthersProvider";
import { NftPoops__factory } from "../types/factories/contracts/NftPoops__factory";

const ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

export const useNftPoopsContract = () => {
  const { provider } = useEthers();
  if (!provider) {
    return;
  }
  const signer = provider.getSigner();
  const contract = NftPoops__factory.connect(ADDRESS, signer);

  return contract;
};
