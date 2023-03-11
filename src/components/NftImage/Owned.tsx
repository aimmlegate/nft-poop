import { Button, Card, Popover, Row, Text } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { IPFS_CONTENT_ID, PREVIEW_LINK_IMG, PREVIEW_LINK_META } from "./consts";

interface Props {
  id: number;
}

export const Owned: React.FC<Props> = ({ id }) => {
  const metadata = useQuery(["Nft metadata", id], async () => {
    const meta = await fetch(`${PREVIEW_LINK_META}${id}.json`);
    return meta.json();
  });

  return (
    <Card>
      <Card.Header>
        <Text b>{metadata?.data?.name}</Text>
      </Card.Header>
      <Card.Image
        src={`${PREVIEW_LINK_IMG}${id}.png`}
        objectFit="cover"
        showSkeleton
        maxDelay={300}
        width="100%"
        alt={metadata?.data?.name}
      />
      <Card.Footer>
        <Row justify="center">
          <Popover>
            <Popover.Trigger>
              <Button
                size="sm"
                color="primary"
                onPress={() => {
                  navigator.clipboard.writeText(
                    `https://ipfs.filebase.io/ipfs/${IPFS_CONTENT_ID}/${id}.json`
                  );
                }}
              >
                Copy IPFS url
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <Text css={{ p: "$10" }}>Copied</Text>
            </Popover.Content>
          </Popover>
        </Row>
      </Card.Footer>
    </Card>
  );
};
