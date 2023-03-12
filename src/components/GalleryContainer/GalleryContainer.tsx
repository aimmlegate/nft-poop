import { Container } from "@nextui-org/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const GalleryContainer: React.FC<Props> = ({ children }) => {
  return (
    <Container
      gap={0}
      css={{
        display: "grid",
        gap: "1.5rem",
        gridAautoRows: "minmax(0px, 1fr)",
        gridTemplateColumns: "repeat(5, minmax(0,1fr))",
      }}
    >
      {children}
    </Container>
  );
};
