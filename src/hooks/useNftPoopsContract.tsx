import { useEthers } from "../components/EthersProvider/EthersProvider";
import { NftPoops__factory } from "../types/factories/contracts/NftPoops__factory";

const ADDRESS = "0x9660167ebcd275b7F22FeFC077406814A70c324b";

export const useNftPoopsContract = () => {
  const { provider } = useEthers();
  if (!provider) {
    return;
  }

  const signer = provider.getSigner();
  const contract = NftPoops__factory.connect(ADDRESS, signer);

  return contract;
};
