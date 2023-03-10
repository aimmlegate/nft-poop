import { Button, Text } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";
import { useBalance } from "../../hooks/useBalance";

export const Balance = () => {
  const { data } = useBalance();
  return <Text size="$md">Balance: {data} ETH</Text>;
};
