import { Container, Loading, Navbar, Spacer, Text } from "@nextui-org/react";
import { useIsFetching } from "@tanstack/react-query";
import { range } from "lodash";
import { useCount } from "../../hooks/useCount";
import { Balance } from "../Balance/Balance";
import { ConnectWallet } from "../ConnectWallet/ConnectWallet";
import { useEthers } from "../EthersProvider/EthersProvider";
import { NftImage } from "../NftImage/NftImage";

export const Layout = () => {
  const { provider } = useEthers();
  const { data, isLoading } = useCount();
  const isFetching = useIsFetching();

  const initialCount = data ?? 0;

  const genRange = (start: number, end: number) =>
    start === end ? [start] : range(start, end);

  return (
    <>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Text b color="inherit" size="$xl" css={{ paddingRight: "15px" }}>
            NFT POOPS
          </Text>
          {!!isFetching && <Loading type="gradient" size="xs" />}
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
          <Spacer y={2} />
          {provider && (
            <>
              {isLoading && <Loading type="points" />}
              {!isLoading && (
                <Container
                  gap={0}
                  css={{
                    display: "grid",
                    gap: "1.5rem",
                    gridAautoRows: "minmax(0px, 1fr)",
                    gridTemplateColumns: "repeat(5, minmax(0,1fr))",
                  }}
                >
                  {genRange(1, initialCount + 2).map((id) => (
                    <NftImage id={id} key={id} />
                  ))}
                </Container>
              )}
            </>
          )}
        </div>
      </Container>
    </>
  );
};
