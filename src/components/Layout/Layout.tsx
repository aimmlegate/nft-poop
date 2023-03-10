import { Container, Grid, Navbar, Spacer, Text } from "@nextui-org/react";
import { useCount } from "../../hooks/useCount";
import { Balance } from "../Balance/Balance";
import { ConnectWallet } from "../ConnectWallet/ConnectWallet";
import { useEthers } from "../EthersProvider/EthersProvider";


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
            The worst NFT collection
          </Text>
          <span>{data}</span>

          {/* <Grid.Container gap={2} justify="center">
            <Grid xs={4}>
              <MockItem text="1 of 3" />
            </Grid>
            <Grid xs={4}>
              <MockItem text="2 of 3" />
            </Grid>
            <Grid xs={4}>
              <MockItem text="3 of 3" />
            </Grid>
          </Grid.Container> */}
        </div>
      </Container>
    </>
  );
};
