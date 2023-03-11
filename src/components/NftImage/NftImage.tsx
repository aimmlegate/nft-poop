import { Button, Card, Text, Row, Loading } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useIsContentOwned } from "../../hooks/useIsOwned";

interface Props {
  id: number;
}

const IPFS_CONTENT_ID = "QmRwuXRHsgPQbDg9G6W59zyKd4u9GugkQ6JFKgCrxw6N9B";
const PREVIEW_LINK_IMG =
  "https://res.cloudinary.com/doneqwi7x/image/upload/v1678540773/test/build/images/";
const PREVIEW_LINK_META =
  "https://res.cloudinary.com/doneqwi7x/raw/upload/v1678540774/test/build/json/";

export const NftImage: React.FC<Props> = ({ id }) => {
  const metadata = useQuery(["Nft metadata", id], async () => {
    const meta = await fetch(`${PREVIEW_LINK_META}${id}.json`);
    return meta.json();
  });

  const { data: isOwned, isLoading } = useIsContentOwned(
    `ipfs://${IPFS_CONTENT_ID}/${id}`
  );

  if (isLoading) {
    return (
      <Card>
        <Loading type="default" />
      </Card>
    );
  }

  console.log(isOwned)

  if (!isOwned) {
    <Card>
      <Card.Header>
        <Text b>???</Text>
      </Card.Header>
      <Card.Image
        src="https://placehold.co/250x250?text=???"
        objectFit="cover"
        showSkeleton
        maxDelay={300}
        width="100%"
        alt="Card image background"
      />
      <Card.Footer>
        <Row justify="flex-start">
          <Button size="sm" color="secondary">
            Mint
          </Button>
        </Row>
      </Card.Footer>
    </Card>;
  }

  return (
    <Card>
      <Card.Header>
        {metadata.isLoading && <Loading type="default" />}
        {!metadata.isLoading && <Text b>{metadata?.data?.name}</Text>}
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
