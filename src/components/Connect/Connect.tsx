import { useMetaMask } from "metamask-react";
import { Text } from "@nextui-org/react";
import { Balance } from "../Balance/Balance";
import { ConnectWallet } from "../ConnectWallet/ConnectWallet";

export const Connect = () => {
  const { status, connect } = useMetaMask();

  if (status === "unavailable")
    return <Text color="error">MetaMask not available</Text>;

  if (status === "notConnected") return <ConnectWallet connect={connect} />;

  if (status === "connected") return <Balance />;

  return <div>Connect</div>;
};
