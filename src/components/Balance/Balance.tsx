import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";

export const Balance = () => {
  const { data } = useQuery<string>(["balance"], async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAction",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    return ethers.utils.formatEther(balance);
  });

  console.log(data);
  return <div>{data}</div>;
};
