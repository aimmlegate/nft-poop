import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";
import { useEthers } from "../components/EthersProvider/EthersProvider";
import { useNftPoopsContract } from "./useNftPoopsContract";

export const useCount = () => {
  const contract = useNftPoopsContract();

  return useQuery(
    ["count"],
    async () => {
      const count = await contract!.count();
      return ethers.utils.formatUnits(count);
    },
    { enabled: !!contract }
  );
};
