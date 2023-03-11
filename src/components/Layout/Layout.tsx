import { Container, Grid, Navbar, Spacer, Text } from "@nextui-org/react";
import { useCount } from "../../hooks/useCount";
import { Balance } from "../Balance/Balance";
import { ConnectWallet } from "../ConnectWallet/ConnectWallet";
import { useEthers } from "../EthersProvider/EthersProvider";
import { NftImage } from "../NftImage/NftImage";
import { range } from "lodash";

export const Layout = () => {
  const { provider } = useEthers();
  const { data } = useCount();

  const initialCount = data ?? 1;

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

          <Container
            gap={0}
            css={{
              display: "grid",
              gap: "1.5rem",
              gridAautoRows: "minmax(0px, 1fr)",
              gridTemplateColumns: "repeat(5, minmax(0,1fr))",
            }}
          >
            {range(1, initialCount + 1).map((id) => (
              <NftImage id={id} key={id} />
            ))}
          </Container>
        </div>
      </Container>
    </>
  );
};
