import { useQuery } from "@tanstack/react-query";
import { useNftPoopsContract } from "./useNftPoopsContract";

export const useIsContentOwned = (id: string) => {
  const contract = useNftPoopsContract();

  return useQuery(
    ["isContentOwned", id],
    async () => {
      const isOwned = await contract!.isContentOwned(id);

      return isOwned;
    },
    { enabled: !!contract }
  );
};
