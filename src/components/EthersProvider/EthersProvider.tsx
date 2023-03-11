import { ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";

interface EthersContext {
  provider: ethers.providers.Web3Provider | undefined;
  setProvider: (p: ethers.providers.Web3Provider) => void;
}

const EthersContext = React.createContext<EthersContext>({
  setProvider: () => {},
  provider: undefined,
});

interface Props {
  children: React.ReactNode;
}

export const EthersProvider: React.FC<Props> = ({ children }) => {
  const [provider, setProvider] = useState<
    ethers.providers.Web3Provider | undefined
  >();

  useEffect(() => {
    if (window.ethereum) {
      setProvider(new ethers.providers.Web3Provider(window.ethereum));
    }
  }, []);

  return (
    <EthersContext.Provider
      value={{
        provider,
        setProvider,
      }}
    >
      {children}
    </EthersContext.Provider>
  );
};

export const useEthers = () => {
  return useContext(EthersContext);
};
