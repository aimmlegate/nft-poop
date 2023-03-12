import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ethers } from "ethers";
import { useMetaMask } from "metamask-react";
import { useEthers } from "../components/EthersProvider/EthersProvider";
import { useNftPoopsContract } from "./useNftPoopsContract";

export const usePayToMint = () => {
  const contract = useNftPoopsContract();
  const queryClient = useQueryClient();
  const { account } = useMetaMask();
  const { provider } = useEthers();

  return useMutation({
    mutationFn: async (metadataURI: string) => {
      const transaction = await contract!.payToMint(account!, metadataURI, {
        value: ethers.utils.parseEther("0.05"),
      });

      await provider?.waitForTransaction(transaction.hash!);
    },
    onSettled() {
      queryClient.invalidateQueries({
        queryKey: ["count", "isContentOwned"],
      });
    },
  });
};
