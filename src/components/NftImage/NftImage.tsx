import { Button, Card, Text, Row } from "@nextui-org/react";

export const NftImage = () => {
  return (
    <Card>
      <Card.Header>
        <Text b>Card Title</Text>
      </Card.Header>
      <Card.Image
        src="https://nextui.org/images/card-example-4.jpeg"
        objectFit="cover"
        width="100%"
        alt="Card image background"
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
