import { Button } from "@nextui-org/react";
import { MetamaskFoxIcon } from "./MetamaskFoxIcon";

interface Props {
  connect: () => void;
}

export const ConnectWallet: React.FC<Props> = ({ connect }) => {
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
