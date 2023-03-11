import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";
import { useNftPoopsContract } from "./useNftPoopsContract";

export const useCount = () => {
  const contract = useNftPoopsContract();

  return useQuery(
    ["count"],
    async () => {
      const count = await contract!.count();

      console.log(count)
      console.log(ethers.utils.formatUnits(count, "wei"))
      return parseInt(ethers.utils.formatUnits(count, "wei"));
    },
    { enabled: !!contract }
  );
};
