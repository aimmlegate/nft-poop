import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ethers } from "ethers";
import { useMetamask } from "./useMetamask";
import { useNftPoopsContract } from "./useNftPoopsContract";

export const usePayToMint = () => {
  const contract = useNftPoopsContract();
  const queryClient = useQueryClient();
  const { account } = useMetamask();

  return useMutation({
    mutationFn: (metadataURI: string) => {
      return contract!.payToMint(account!, metadataURI, {
        value: ethers.utils.parseEther("0.05"),
      });
    },
    onSettled() {
      queryClient.invalidateQueries({
        queryKey: ["count"],
        exact: true,
      });
    },
  });
};
