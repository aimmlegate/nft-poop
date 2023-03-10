import { Button } from "@nextui-org/react";
import { useMetamask } from "../../hooks/useMetamask";
import { MetamaskFoxIcon } from "./MetamaskFoxIcon";

export const ConnectWallet = () => {
  const { connect, error } = useMetamask();

  return (
    <Button
      auto
      rounded
      flat
      onPress={() => connect()}
      icon={<MetamaskFoxIcon />}
    >
      Connect
    </Button>
  );
};
