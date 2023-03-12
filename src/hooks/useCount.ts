import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";
import { useMetaMask } from "metamask-react";
import { useNftPoopsContract } from "./useNftPoopsContract";

export const useCount = () => {
  const contract = useNftPoopsContract();
  const { status } = useMetaMask();
  return useQuery(
    ["count"],
    async () => {
      const count = await contract!.count();
      return parseInt(ethers.utils.formatUnits(count, "wei"));
    },
    { enabled: !!contract && status === "connected" }
  );
};
