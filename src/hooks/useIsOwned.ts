import { useQuery } from "@tanstack/react-query";
import { useMetaMask } from "metamask-react";
import { useNftPoopsContract } from "./useNftPoopsContract";

export const useIsContentOwned = (id: string) => {
  const contract = useNftPoopsContract();
  const { status } = useMetaMask();

  return useQuery(
    ["isContentOwned", id],
    async () => {
      const isOwned = await contract!.isContentOwned(id);

      return isOwned;
    },
    { enabled: !!contract && status === "connected" }
  );
};
