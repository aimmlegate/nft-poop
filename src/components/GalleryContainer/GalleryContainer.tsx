import { Container, css, globalCss, styled } from "@nextui-org/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const gridContainer = css({
  display: "grid",
  gap: "1.5rem",
  gridAautoRows: "minmax(0px, 1fr)",
  gridTemplateColumns: "repeat(var(--gridSize), minmax(0,1fr))",
});

const globalStyles = globalCss({
  ":root": {
    "--gridSize": "5",
  },
  "@media only screen and (max-width: 1440px)": {
    ":root": {
      "--gridSize": "4",
    },
  },
  "@media only screen and (max-width: 1024px)": {
    ":root": {
      "--gridSize": "3",
    },
  },
  "@media only screen and (max-width: 768px)": {
    ":root": {
      "--gridSize": "2",
    },
  },
  "@media only screen and (max-width: 425px)": {
    ":root": {
      "--gridSize": "1",
    },
  },
});

export const GalleryContainer: React.FC<Props> = ({ children }) => {
  globalStyles();
  return <div className={gridContainer()}>{children}</div>;
};
