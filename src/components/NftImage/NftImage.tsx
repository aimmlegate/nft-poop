import { Button, Card, Text, Row, Loading } from "@nextui-org/react";
import { useIsContentOwned } from "../../hooks/useIsOwned";
import { usePayToMint } from "../../hooks/usePayToMint";
import { IPFS_CONTENT_ID } from "./consts";
import { Owned } from "./Owned";

interface Props {
  id: number;
}

export const NftImage: React.FC<Props> = ({ id }) => {
  const getContentId = (id: number) => `ipfs://${IPFS_CONTENT_ID}/${id}`;

  const mint = usePayToMint();

  const { data: isOwned, isLoading } = useIsContentOwned(getContentId(id));

  if (isLoading) {
    return <Loading size="xl" type="default" />;
  }

  if (isOwned) {
    return <Owned id={id} />;
  }

  return (
    <Card>
      <Card.Header>
        <Text b>???</Text>
      </Card.Header>
      <Card.Image
        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22250%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20250%20250%22%20preserveAspectRatio%3D%22none%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%20%20%20%20%20%20%20%20%20%20%23holder%20text%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%20%23ffffff%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2040px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20400%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Cg%20id%3D%22holder%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%233028a0%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctext%20text-anchor%3D%22middle%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20dy%3D%22.3em%22%3E%3F%3F%3F%3C%2Ftext%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fsvg%3E"
        objectFit="cover"
        showSkeleton
        maxDelay={300}
        width="100%"
        alt="Card image background"
      />
      <Card.Footer>
        <Row justify="space-between">
          <Button
            size="sm"
            color="secondary"
            onPress={() => mint.mutate(getContentId(id))}
          >
            Mint
          </Button>
          <Text>0.05 ETH</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};
