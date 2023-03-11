import { Button, Card, Row, Text } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { PREVIEW_LINK_IMG, PREVIEW_LINK_META } from "./consts";

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
        src={`${PREVIEW_LINK_IMG}${id}`}
        objectFit="cover"
        showSkeleton
        maxDelay={300}
        width="100%"
        alt={metadata?.data?.name}
      />
      <Card.Footer>
        <Row justify="flex-start">
          <Button size="sm" color="secondary">
            Learn more
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
};
