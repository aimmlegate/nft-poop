import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";
import { useEthers } from "../components/EthersProvider/EthersProvider";
import { useMetamask } from "./useMetamask";

export const useBalance = () => {
  const { provider } = useEthers();
  const { account } = useMetamask();
  return useQuery<string>(
    ["balance"],
    async () => {
      const balance = await provider!.getBalance(account!);

      return ethers.utils.formatEther(balance);
    },
    { enabled: !!provider && !!account, retry: false }
  );
};
