import { Container, Grid, Navbar, Spacer, Text } from "@nextui-org/react";
import { useCount } from "../../hooks/useCount";
import { Balance } from "../Balance/Balance";
import { ConnectWallet } from "../ConnectWallet/ConnectWallet";
import { useEthers } from "../EthersProvider/EthersProvider";
import { NftImage } from "../NftImage/NftImage";

export const Layout = () => {
  const { provider } = useEthers();
  const { data } = useCount();

  return (
    <>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Text b color="inherit" size="$xl">
            NFT POOPS
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          {!provider && <ConnectWallet />}
          {provider && <Balance />}
        </Navbar.Content>
      </Navbar>
      <Container>
        <div>
          <Spacer y={3} />
          <Text h2 size="$3xl">
            The worthless NFT collection
          </Text>
          <span>{data}</span>

          <Container
            gap={0}
            css={{
              display: "grid",
              gap: "1.5rem",
              gridAautoRows: "minmax(0px, 1fr)",
              gridTemplateColumns: "repeat(5, minmax(0,1fr))",
            }}
          >
            <NftImage />
            <NftImage />
            <NftImage />
            <NftImage />
            <NftImage />
            <NftImage />
            <NftImage />
            <NftImage />
            <NftImage />
          </Container>
        </div>
      </Container>
    </>
  );
};
