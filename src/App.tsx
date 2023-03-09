import { Card, createTheme, NextUIProvider, Text } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark",
});

function App() {
  return (
    <NextUIProvider theme={darkTheme}>
      <Card css={{ mw: "400px" }}>
        <Card.Body>
          <Text>A basic card</Text>
        </Card.Body>
      </Card>
    </NextUIProvider>
  );
}

export default App;
