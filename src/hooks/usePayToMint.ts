import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ethers } from "ethers";
import { useEthers } from "../components/EthersProvider/EthersProvider";
import { useMetamask } from "./useMetamask";
import { useNftPoopsContract } from "./useNftPoopsContract";

export const usePayToMint = () => {
  const contract = useNftPoopsContract();
  const queryClient = useQueryClient();
  const { account } = useMetamask();
  const { provider } = useEthers();

  return useMutation({
    mutationFn: async (metadataURI: string) => {
      const transaction = await contract!.payToMint(account!, metadataURI, {
        value: ethers.utils.parseEther("0.05"),
      });
      console.log(transaction)
      await provider?.waitForTransaction(transaction.hash!);
    },
    onSettled() {
      queryClient.invalidateQueries({
        queryKey: ["count"],
        exact: true,
      });
    },
  });
};
