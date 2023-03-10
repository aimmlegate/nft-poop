import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";
import { useEthers } from "../components/EthersProvider/EthersProvider";

export const useMetamask = () => {
  const { provider, setProvider } = useEthers();
  const { refetch, isLoading, error, data } = useQuery<string | undefined>(
    ["connect"],
    async () => {
      if (!window.ethereum.request) {
        throw new Error("Please install MetaMask!");
      }
      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (!provider) {
        setProvider(new ethers.providers.Web3Provider(window.ethereum));
      }

      return account;
    },
    {
      enabled: false,
      retryOnMount: false,
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  return { connect: refetch, isLoading, error, account: data };
};
